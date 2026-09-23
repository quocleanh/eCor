# Email notify (SMTP) — hướng dẫn setup

Worker này nhận dữ liệu từ form liên hệ trên website và gửi email thông báo qua SMTP mỗi
khi có khách hàng điền form. Thay thế cho hướng Zalo OA (xem `cloudflare/zalo-notify/README.md`
— tạm dừng vì OA đang ở gói free, không gửi được tin qua API).

Kết nối SMTP thật (TCP) thông qua Cloudflare TCP Sockets API (`cloudflare:sockets`), không
qua dịch vụ trung gian nào khác.

## 1. Thông tin cần cung cấp

Cần các thông tin SMTP sau (từ nhà cung cấp email của bạn — Gmail, Zoho, hosting riêng...):

- `SMTP_HOST` — ví dụ `smtp.gmail.com`, `smtp.zoho.com`, hoặc `mail.ecor.vn`
- `SMTP_PORT` — thường là `465` (TLS ngay) hoặc `587` (STARTTLS)
- `SMTP_USER` — tài khoản đăng nhập SMTP (thường là email đầy đủ)
- `SMTP_PASS` — mật khẩu SMTP. **Với Gmail/Google Workspace bắt buộc dùng "App Password"**
  (mật khẩu ứng dụng), không dùng mật khẩu đăng nhập thường vì Google chặn SMTP login trực tiếp.
- `MAIL_FROM` — email hiển thị người gửi (thường trùng `SMTP_USER`)
- `MAIL_TO` — email nhận thông báo (email của bạn)

## 2. Điền cấu hình không nhạy cảm

Sửa trong `cloudflare/email-notify/wrangler.toml`, mục `[vars]`:

```toml
SMTP_HOST = "..."
SMTP_PORT = "465"      # hoặc "587"
SMTP_SECURE = "true"   # "true" nếu port 465, "false" nếu port 587 (STARTTLS)
MAIL_FROM = "..."
MAIL_TO = "..."
```

## 3. Deploy Worker (cần đăng nhập Cloudflare)

```bash
cd cloudflare/email-notify
npm install -g wrangler   # nếu chưa có
wrangler login

wrangler secret put SMTP_USER
wrangler secret put SMTP_PASS

wrangler deploy
```

Wrangler in ra URL dạng `https://ecor-contact-notify.<subdomain>.workers.dev` — dùng URL này
ở bước 4.

## 4. Nối vào website

Trong file `.env` (hoặc `.env.production`) ở thư mục gốc repo:

```
VITE_CONTACT_NOTIFY_URL=https://ecor-contact-notify.<subdomain>.workers.dev
```

Form liên hệ (`src/views/ContactView.vue`) đã POST dữ liệu tới URL này khi submit. Nếu biến
chưa được set, form vẫn hoạt động bình thường, chỉ là không gửi email.

## Debug

- Xem log realtime: `wrangler tail` (trong thư mục `cloudflare/email-notify`).
- Lỗi hay gặp:
  - `auth_pass_failed` — sai user/pass, hoặc dùng mật khẩu thường thay vì App Password (Gmail).
  - `greeting_failed` / kết nối treo — sai host/port, hoặc nhà cung cấp chặn kết nối từ ngoài
    (một số hosting yêu cầu whitelist IP — Cloudflare Workers dùng IP động nên không whitelist
    theo IP được, cần hỏi nhà cung cấp có cách khác không).
  - Port 587 mà để `SMTP_SECURE=true` (hoặc ngược lại) sẽ bắt tay TLS sai cách và treo/lỗi —
    nhớ khớp đúng port với secure mode.
