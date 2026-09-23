# Zalo OA notify — hướng dẫn setup

> **Trạng thái (2026-09-23): TẠM DỪNG.** OA "CyberCorp" đang ở gói FREE — đã lấy được
> App ID/Secret/access_token/refresh_token đầy đủ (xem `cloudflare/zalo-notify/.env.local`,
> file này KHÔNG commit git), nhưng gọi Message API bị Zalo chặn với lỗi:
> `{"error":-224,"message":"The OA needs to upgrade OA Tier Package to use this feature."}`
> ZNS API của app đã được duyệt sẵn (Gửi ZNS, Gửi ZNS RSA, Journey Token) nhưng chưa tạo/duyệt
> Template nên cũng chưa gửi được. Quyết định: giữ nguyên cấu hình đã có, chưa làm tiếp phần
> gửi tin — sẽ quay lại khi triển khai chiến lược **omnichannel notification** (Zalo OA
> premium / ZNS template / email / Telegram...). Code Worker bên dưới đã sẵn sàng, chỉ cần
> một trong các hướng trên hoạt động là cắm vào dùng ngay.

Worker này nhận dữ liệu từ form liên hệ trên website, rồi gửi tin nhắn Zalo tới OA của bạn
mỗi khi có khách hàng điền form.

**Giới hạn quan trọng của Zalo OA:** OA chỉ được phép chủ động gửi tin cho một Zalo user
nếu user đó đã tương tác (nhắn tin / follow) với OA trong vòng **7 ngày gần nhất**. Vì người
nhận ở đây là chính bạn, nghĩa là: bạn cần thỉnh thoảng (ít nhất 1 lần/tuần) nhắn tin bất kỳ
cho OA của mình từ Zalo cá nhân để "làm mới" cửa sổ 7 ngày, nếu không Zalo sẽ từ chối gửi.

## 1. Tạo App trên Zalo Developers (bạn tự làm)

1. Vào https://developers.zalo.me → đăng nhập bằng tài khoản đang quản lý OA.
2. Tạo app mới, ở mục **Official Account API** liên kết app với OA của bạn.
3. Vào phần quyền (Permission), bật quyền gửi tin cho OA (nhóm "Quản lý và gửi tin OA").
4. Ghi lại **App ID** và **Secret Key** (Cấu hình → Thông tin app).

## 2. Lấy access token + refresh token lần đầu (bạn tự làm, 1 lần)

1. Mở URL sau (thay `APP_ID` và `REDIRECT_URI` — redirect URI phải khai báo sẵn trong app,
   dùng tạm `https://oauth.zaloapp.com/v4/oa/permission` nếu app chưa có domain riêng):

   ```
   https://oauth.zaloapp.com/v4/oa/permission?app_id=APP_ID&redirect_uri=REDIRECT_URI
   ```

2. Đăng nhập bằng Zalo admin của OA, đồng ý cấp quyền. Trình duyệt sẽ redirect về
   `REDIRECT_URI?oa_id=...&code=...` — copy giá trị `code` (chỉ dùng được 1 lần, trong vài phút).

3. Đổi `code` lấy access token + refresh token:

   ```bash
   curl -X POST "https://oauth.zaloapp.com/v4/oa/access_token" \
     -H "secret_key: APP_SECRET" \
     -d "code=CODE_VUA_LAY&app_id=APP_ID&grant_type=authorization_code"
   ```

   Kết quả trả về `access_token` và `refresh_token`. Chỉ cần giữ lại **refresh_token** —
   Worker sẽ tự làm mới access token từ đây.

## 3. Lấy Zalo UID của chính bạn (người sẽ nhận thông báo)

1. Từ Zalo cá nhân, follow OA của bạn và gửi cho OA một tin nhắn bất kỳ (vd "hi").
2. Gọi API lấy danh sách hội thoại gần đây để tìm `user_id` của bạn:

   ```bash
   curl "https://openapi.zalo.me/v2.0/oa/conversation?data={\"offset\":0,\"count\":10}" \
     -H "access_token: ACCESS_TOKEN_VUA_LAY"
   ```

   Trong kết quả, tìm đúng hội thoại của bạn (theo tên hiển thị) và lấy `user_id`.

## 4. Deploy Worker (bạn tự làm — cần đăng nhập Cloudflare)

```bash
cd cloudflare/zalo-notify
npm install -g wrangler   # nếu chưa có
wrangler login
wrangler kv namespace create ZALO_KV
# copy "id" trả về, dán vào wrangler.toml (mục kv_namespaces)

wrangler secret put ZALO_APP_ID
wrangler secret put ZALO_APP_SECRET
wrangler secret put ZALO_UID
wrangler secret put ZALO_INITIAL_REFRESH_TOKEN   # refresh_token lấy ở bước 2

wrangler deploy
```

Sau khi deploy xong, Wrangler in ra một URL dạng
`https://ecor-zalo-notify.<your-subdomain>.workers.dev` — đó là URL cần điền vào frontend
(biến `VITE_ZALO_NOTIFY_URL`, xem phần dưới).

Nếu bạn có domain/route riêng trên Cloudflare, có thể map Worker vào route như
`https://ecor.vn/api/zalo-notify` thay vì dùng domain `workers.dev`.

## 5. Nối vào website

Trong file `.env` (hoặc `.env.production`) ở thư mục gốc repo, thêm:

```
VITE_ZALO_NOTIFY_URL=https://ecor-zalo-notify.<your-subdomain>.workers.dev
```

Form liên hệ (`src/views/ContactView.vue`) đã được cập nhật để POST dữ liệu tới URL này khi
submit. Nếu biến chưa được set, form vẫn hoạt động bình thường (chỉ là không gửi Zalo).

## Debug

- Xem log realtime: `wrangler tail` (trong thư mục `cloudflare/zalo-notify`).
- Lỗi thường gặp: `token_refresh_failed` (refresh token hết hạn/sai), `zalo_send_failed`
  với code liên quan tới "chưa follow" hoặc "quá 7 ngày chưa tương tác" — xem mục Giới hạn ở đầu file.
