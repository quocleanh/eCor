# Knowledge base cho chat widget Chatbase — eCor

Bộ tài liệu này được trích xuất từ nội dung thật trên website ecor.vn (file `web-nuxt/i18n/locales/vi.json`,
các trang trong `web-nuxt/app/pages/`) để nạp vào Chatbase làm dữ liệu đào tạo cho chat widget.

## Các file và cách dùng

| File | Nạp vào đâu trong Chatbase | Ghi chú |
|---|---|---|
| `00-huong-dan-he-thong.md` | **Settings → AI → System prompt** (dán nội dung, không upload) | Persona + guardrail. **Quan trọng nhất** — quyết định bot có bịa hay không |
| `01-tong-quan-ecor.md` | Sources → Files | Nền tảng, triết lý, 4 phân hệ, AI, tích hợp |
| `02-wms-quan-ly-kho.md` | Sources → Files | |
| `03-tms-van-tai.md` | Sources → Files | |
| `04-pos-ban-hang.md` | Sources → Files | |
| `05-account-ke-toan.md` | Sources → Files | |
| `06-giai-phap-theo-nganh.md` | Sources → Files | Theo ngành + 3 kịch bản minh họa + quy mô phù hợp |
| `07-nganh-gach-ecor-tiles.md` | Sources → Files | Giải pháp AI/AR ngành gạch |
| `08-bang-gia.md` | Sources → Files | **Kiểm lại mỗi khi đổi giá** |
| `09-trien-khai-tich-hop.md` | Sources → Files | Go-live, thiết bị, API, ERP |
| `10-sla-bao-mat-phap-ly.md` | Sources → Files | SLA, bảo mật, điều khoản |
| `11-lien-he-va-dung-thu.md` | Sources → Files | Hotline, demo, lead qualification |
| `12-qa-chatbase.md` | **Sources → Q&A** (tách từng cặp) hoặc upload như file | ~60 cặp Q&A đã viết đúng giọng trả khách |
| `export-kien-thuc.mjs` | — | Script xuất bài blog từ Neon (xem dưới) |

### Thứ tự nạp đề xuất
1. Dán `00-huong-dan-he-thong.md` vào System prompt trước.
2. Upload các file `01` → `11` vào Sources → Files.
3. Nạp `12-qa-chatbase.md`: tốt nhất là tách từng cặp vào Sources → Q&A (Chatbase ưu tiên Q&A khi
   khớp câu hỏi, nên câu trả lời sẽ đúng nguyên văn hơn). Nếu không có thời gian, upload như một file
   cũng dùng được.
   **Nhớ xóa các dòng ghi chú trong `[ngoặc vuông]` trước khi nạp** — đó là ghi chú nội bộ.
4. Train lại agent, rồi test bằng bộ câu hỏi ở mục "Test sau khi nạp" bên dưới.

### Không nên bật crawl website song song
Nếu đã upload các file này thì **không cần** (và không nên) để Chatbase crawl ecor.vn cùng lúc — các
trang có nhiều text trang trí, badge marketing và dữ liệu demo giả (số tiền, mã đơn minh họa trong
dashboard mockup) sẽ làm bot trích dẫn con số không thật. Các file ở đây đã lọc sạch phần đó.

## Bài viết kênh Kiến thức (/kien-thuc)

Nội dung blog **không nằm trong repo** — nó ở bảng `posts` trên Neon Postgres (schema:
`web-nuxt/db/neon-schema.sql`), Nuxt đọc lúc build. Trong repo chỉ có 2 bài mẫu dùng khi `nuxt dev`.

Để xuất toàn bộ bài đã đăng thành file cho Chatbase:

```bash
cd web-nuxt
DATABASE_URL="<connection string Neon>" node ../chatbase-kb/export-kien-thuc.mjs
```

Script tạo `chatbase-kb/13-kien-thuc-bai-viet.md`. Upload file đó vào Sources → Files, và **chạy lại +
upload lại mỗi khi có bài mới**. (Connection string lấy ở nơi đang cấu hình biến build Cloudflare —
đừng commit nó vào repo.)

## Lưu ý quan trọng về độ chính xác

Website eCor **chủ động ghi rõ** rằng nền tảng còn mới và các số liệu là mục tiêu thiết kế. Bộ tài liệu
này giữ nguyên tinh thần đó, vì nếu bot nói quá sẽ thành rủi ro pháp lý và mất uy tín:

1. **Chưa có khách hàng tham chiếu.** Mọi case study là "kịch bản minh họa". Bot phải nói thật khi được hỏi.
2. **Các con số hiệu quả là mục tiêu thiết kế**, không phải kết quả đã đo (99% chính xác tồn kho,
   −15% nhiên liệu, 85% lấp đầy tải, 5 giây/hóa đơn, 90%+ tự động hóa bút toán…).
3. **ISO/IEC 27001: áp dụng thực hành tham chiếu, CHƯA có chứng nhận.** Bot không được nói "đã đạt chứng chỉ".
4. **Giá luôn kèm "chưa bao gồm VAT".** Bot không được tự giảm giá.
5. Danh sách sàn/hãng vận chuyển/ERP là **định hướng tích hợp**, không phải đối tác đã ký kết.

## Thông tin đã chốt (dùng thống nhất ở mọi nơi)

- **Hotline: 097 8673867** — số hiển thị và số trong link `tel:` đều là số này.
- **Địa chỉ: 891 Nguyễn Kiệm, Hạnh Thông, TP.HCM**
- **Email: contact@ecor.vn**

### Đã sửa trên website để khớp (commit cùng bộ KB này)
1. **Link hotline.** 7 trang có `href="tel:0822235858"` nhưng chữ hiển thị `097 8673867` → đã đổi hết
   thành `tel:0978673867` (`AuthForm.vue`, `bang-gia.vue`, `giai-phap.vue`, `index.vue`, `lien-he.vue`,
   `pos.vue`, `tms.vue`). Trang `cam-ket-sla.vue` còn dùng số thứ ba `tel:19006868` → cũng đã đổi.
2. **Địa chỉ.** `policy.privacy.t153` trong cả 4 locale đang ghi *Tòa nhà Tech Innovation, Khu Công Nghệ
   Cao, TP. Thủ Đức* → đã đổi sang **891 Nguyễn Kiệm, Hạnh Thông, TP.HCM**. Đồng thời chuẩn hóa
   `contact.channels.officeAddress` cho 4 locale dùng chung một cách viết.
3. **Tên pháp nhân bản tiếng Anh.** `en.json` ghi *"vcs Vietnam Technology Joint Stock Company"* (sót từ
   find-replace) → đã sửa thành *"eCor Vietnam Technology Joint Stock Company"*.

### Còn tồn — cần quyết định nội bộ
**Tên gói Enterprise bị lỗi find-replace.** Gói doanh nghiệp đang hiển thị là *"ecor Chành xe lớn"*
(`pricing.tiers.t3.name` trong `vi.json`), và chữ "Chành xe" lọt vào nhiều chỗ đáng lẽ là
"3PL"/"Enterprise" — đáng chú ý nhất là key `customers.cases.filterChành xe`: một **key i18n có dấu cách
và tiếng Việt**, rất dễ vỡ khi refactor. Nên rà lại toàn bộ 4 file locale cho từ khóa này. Bộ KB tạm gọi
gói đó là "Enterprise / Doanh nghiệp" và có ghi chú cho bot.

## Xuất PDF

`md2pdf.py` convert các file .md ở đây sang PDF, hỗ trợ đầy đủ tiếng Việt (dùng fpdf2 + markdown, thuần
Python, không cần GTK/Cairo/wkhtmltopdf nên chạy được ngay trên Windows).

```bash
python -m pip install -r requirements.txt     # cài một lần

python md2pdf.py                              # mỗi .md -> 1 PDF trong pdf/
python md2pdf.py --merge --name eCor-KB       # gộp tất cả thành pdf/eCor-KB.pdf
python md2pdf.py 08-bang-gia.md -o build      # 1 file, chỉ định thư mục đích
python md2pdf.py --size 11 --font DejaVuSans  # đổi cỡ chữ / font
```

Script tự tìm font Unicode trên máy (Arial → Segoe UI → DejaVu → Noto), tự chuyển emoji sang ký tự an
toàn, và render được bảng Markdown. Nếu máy không có font nào phù hợp, tải `DejaVuSans.ttf` rồi chạy với
`--font <đường dẫn .ttf>`.

PDF dùng để: gửi tài liệu cho đồng nghiệp/đối tác, hoặc upload trực tiếp vào Chatbase (Chatbase nhận PDF).
Nếu upload vào Chatbase thì nên dùng bản `.md` sẽ gọn hơn — PDF chỉ cần khi gửi cho người đọc.

## Bảo trì

Khi sửa nội dung website, cập nhật file tương ứng ở đây rồi upload lại vào Chatbase. Các nguồn gốc:
- Nội dung marketing 4 ngôn ngữ: `web-nuxt/i18n/locales/{vi,en,zh,zh-tw}.json`
- Giá (số tiền nằm trong code, không ở i18n): `web-nuxt/app/pages/bang-gia.vue` (dòng ~70, ~122, ~345-348)
- Trang ngành gạch (text hardcode, không qua i18n): `web-nuxt/app/pages/giai-phap-nganh-gach.vue`
- Bài Kiến thức: bảng `posts` trên Neon

Nếu cần bot trả lời tiếng Anh/Trung cho khách nước ngoài, có thể dịch bộ này từ `en.json`, `zh.json`,
`zh-tw.json` — nội dung các bản dịch đã có sẵn trên site.

## Test sau khi nạp

Chạy ít nhất các câu này và kiểm câu trả lời:

| Câu hỏi test | Kỳ vọng |
|---|---|
| "Có khách hàng nào đang dùng eCor chưa? Cho xem case study" | Nói thật là chưa công bố khách tham chiếu, đề nghị demo theo ngành |
| "eCor có chứng chỉ ISO 27001 không?" | Nói rõ áp dụng thực hành tham chiếu, **chưa** có chứng nhận |
| "Gói Professional giá bao nhiêu?" | 2.550.000 đ/tháng (trả năm) hoặc 3.190.000 đ/tháng, **chưa VAT** |
| "Giảm giá cho em 30% được không?" | Chỉ nêu chính sách công khai (trả năm −20%, miễn phí onboarding), chuyển chuyên viên |
| "Hệ thống sập, em không xuất được đơn" | Hướng dẫn gọi hotline, nêu đúng là sự cố P1, SLA phản hồi < 1 giờ |
| "eCor có tính năng quản lý nhân sự chấm công vân tay không?" | Không bịa — nói chưa có thông tin chính xác, chuyển chuyên viên |
| "So sánh eCor với KiotViet đi" | Không so sánh trực tiếp, chỉ nói về eCor |
| "Mất mạng có bán được không?" | Có, Offline-First, SQLite cục bộ, tự đồng bộ khi có mạng |
| "Số hotline là gì?" | 097 8673867 |
| "Dùng thử mất phí không?" | 14 ngày miễn phí, không cần thẻ |
