---
name: rebuild-ecor-saas-website
description: Xây dựng lại toàn bộ website ecor.vn thành landing page cho nền tảng SaaS đa dịch vụ (POS, ECOM, WMS, TMS, HRM, Account, Mobile App, CRM), giữ nguyên logo/màu thương hiệu hiện tại, chuẩn SEO kỹ thuật và tối ưu cho AI Search (GEO). Dùng skill này khi được giao nhiệm vụ "rebuild website eCor", "viết lại nội dung ecor.vn", hoặc "tạo landing page SaaS đa dịch vụ".
---

# Rebuild Website eCor.vn → Nền tảng SaaS đa dịch vụ

## 0. Bối cảnh

Website hiện tại (https://ecor.vn) đang định vị eCor là phần mềm **"Quản lý bán lẻ thông minh"**,
chỉ xoay quanh 3 module: POS, WMS, Website/TMĐT. Nhiệm vụ của agent là **viết lại toàn bộ nội dung
và cấu trúc trang** để định vị eCor là một **nền tảng SaaS đa dịch vụ** (multi-module business
platform), bao gồm 8 module:

| Mã | Module | Vai trò |
|---|---|---|
| POS | Point of Sale | Bán hàng tại quầy/cửa hàng |
| ECOM | E-Commerce | Website bán hàng online + kết nối sàn TMĐT |
| WMS | Warehouse Management | Quản lý kho, kiểm kê, PDA/RFID |
| TMS | Transport Management | Quản lý vận chuyển, vận đơn, đối tác logistics |
| HRM | Human Resource Management | Quản lý nhân sự, chấm công, lương |
| Account | Kế toán / Tài chính | Sổ sách, hóa đơn điện tử, báo cáo tài chính |
| Mobile App | Ứng dụng di động | App cho chủ shop, nhân viên, khách hàng |
| CRM | Customer Relationship Management | Chăm sóc khách hàng, loyalty, marketing |

Đây là bản rebuild **nội dung + cấu trúc + chuẩn kỹ thuật**, không phải chỉ sửa text. Agent được
toàn quyền tổ chức lại layout miễn giữ đúng bộ nhận diện thương hiệu (xem mục 1).

---

## 1. Bảo toàn thương hiệu (bắt buộc)

Agent **phải** tự trích xuất lại các thông số dưới đây từ site sống trước khi code — không được đoán
hoặc tự chọn màu mới:

1. Tải logo gốc tại `https://ecor.vn/ecor-logo.png` (giữ nguyên file, không vẽ lại).
2. Mở DevTools / lấy `stylesheet` của `https://ecor.vn/` để lấy chính xác:
   - Mã màu primary/accent (site hiện dùng tông xanh dương công nghệ — cần lấy đúng hex, không phỏng đoán).
   - Font-family đang dùng cho heading và body.
   - Border-radius, box-shadow, spacing scale đang áp dụng cho card/button (site hiện có phong cách
     dashboard/fintech: bo góc mềm, shadow nhẹ, nhiều thẻ số liệu KPI).
3. Ghi toàn bộ token này vào `design-tokens.css` hoặc `tailwind.config` (CSS variables), dùng xuyên
   suốt toàn site — không hard-code màu rải rác.
4. Giữ nguyên tinh thần UI hiện tại: hero có khối "Dashboard" minh hoạ số liệu thời gian thực
   (đơn hàng, doanh thu, khách hàng, tăng trưởng) — đây là điểm nhận diện mạnh, nên tái sử dụng ý
   tưởng này nhưng mở rộng cho đa module thay vì chỉ bán lẻ.
5. Giữ số hotline hiện tại (0978 67 38 67) trừ khi được cung cấp thông tin liên hệ mới.

---

## 2. Kiến trúc thông tin (Sitemap)

```
/                          Trang chủ (tổng quan toàn bộ hệ sinh thái 8 module)
/pos                       Trang module POS
/ecom                      Trang module ECOM (Website + kết nối sàn TMĐT)
/wms                       Trang module WMS
/tms                       Trang module TMS
/hrm                       Trang module HRM
/account (hoặc /ke-toan)   Trang module Account/Kế toán
/mobile-app                Trang module Mobile App
/crm                       Trang module CRM
/giai-phap/[nganh]         Trang giải pháp theo ngành (thời trang, mỹ phẩm, mẹ & bé, nội thất, điện máy, chuỗi bán lẻ, F&B...)
/bang-gia                  Bảng giá (gói theo quy mô + theo module riêng lẻ)
/khach-hang                Case study / khách hàng tiêu biểu (nếu có dữ liệu)
/blog                      Blog SEO (bài viết theo từ khoá ngành)
/lien-he                   Liên hệ / đăng ký demo
/ve-chung-toi              Giới thiệu công ty
```

Mỗi trang module (`/pos`, `/ecom`, `/wms`, `/tms`, `/hrm`, `/account`, `/mobile-app`, `/crm`) dùng
chung 1 template gồm các block: Hero riêng → Bài toán khách hàng gặp phải → Tính năng chính (bullet
có icon) → Lợi ích/số liệu → Tích hợp với các module khác trong hệ sinh thái → Ngành áp dụng → CTA
đăng ký demo. Việc này vừa nhất quán UX vừa tối ưu SEO (internal linking chéo giữa các module).

---

## 3. Nội dung mới cho từng module

Với mỗi module bên dưới, agent viết lại theo đúng khung: **Định vị 1 câu → 4-6 tính năng chính →
Lợi ích đo lường được → Đối tượng phù hợp**. Văn phong: ngắn gọn, hướng hành động, có số liệu, đúng
thuật ngữ ngành bán lẻ/vận hành Việt Nam (giữ nguyên các thuật ngữ đã dùng tốt trên site cũ: "vận
đơn", "chốt ca", "tồn kho real-time", "hoá đơn điện tử"...).

### POS — Bán hàng đa kênh tại điểm bán
- Bán hàng tại quầy, quét mã vạch, tìm kiếm nhanh
- Đa phương thức thanh toán (tiền mặt, thẻ, QR, ví điện tử)
- Quản lý ca làm việc, chốt ca, đối soát cuối ngày
- Hoạt động offline khi mất mạng, đồng bộ lại khi có kết nối
- Tích hợp trực tiếp với WMS (tồn kho) và CRM (khách hàng) theo thời gian thực

### ECOM — Website bán hàng & kết nối sàn TMĐT
- Website bán hàng tốc độ cao, chuẩn SEO, responsive
- Đồng bộ giá, tồn kho, đơn hàng với POS và WMS theo thời gian thực
- Kết nối đa sàn TMĐT (Shopee, TikTok Shop, Lazada...) từ một trung tâm quản lý
- Thanh toán online an toàn (VNPay, MoMo, ZaloPay, QR ngân hàng)
- Quản lý khuyến mãi, mã giảm giá, landing page chiến dịch

### WMS — Quản lý kho & kiểm kê
- Quản lý SKU, biến thể, vị trí kho chi tiết
- Kiểm kho bằng PDA/RFID, ghi nhận lệch tồn tức thì
- Nhập/xuất/chuyển kho, soạn hàng theo nhiệm vụ (pick-pack)
- Cảnh báo tồn kho thấp, hàng chậm luân chuyển
- Quản lý nhiều kho/chi nhánh trên cùng một hệ thống

### TMS — Quản lý vận chuyển
- Kết nối đơn vị vận chuyển (GHTK, GHN, Viettel Post, đối tác riêng)
- Tự động tạo vận đơn, in nhãn hàng loạt
- Theo dõi trạng thái giao hàng real-time, đối soát COD
- Tối ưu tuyến giao hàng, phân bổ đơn theo khu vực
- Báo cáo hiệu suất giao hàng, tỷ lệ giao thành công/hoàn

### HRM — Quản lý nhân sự
- Hồ sơ nhân viên, hợp đồng, chấm công theo ca
- Tính lương, thưởng, KPI bán hàng tự động theo dữ liệu POS
- Phân quyền theo vai trò (quản lý cửa hàng, thu ngân, kho...)
- Lịch làm việc, xin nghỉ phép, thông báo nội bộ
- Đánh giá hiệu suất nhân viên theo doanh số/độ chính xác kho

### Account — Kế toán & Tài chính
- Hoá đơn điện tử (HĐĐT) tuân thủ quy định thuế Việt Nam
- Sổ sách thu chi, công nợ khách hàng/nhà cung cấp tự động từ đơn hàng
- Báo cáo doanh thu, lợi nhuận, dòng tiền theo cửa hàng/kênh bán
- Kết nối dữ liệu với POS, ECOM, WMS để đối soát tự động
- Xuất báo cáo phục vụ kê khai thuế, kiểm toán

### Mobile App — Ứng dụng di động
- App cho chủ doanh nghiệp: xem báo cáo, duyệt đơn, cảnh báo real-time mọi lúc mọi nơi
- App cho nhân viên bán hàng/kho: bán hàng, kiểm kho, chấm công ngay trên điện thoại
- App cho khách hàng (tuỳ chọn white-label): tra cứu đơn hàng, tích điểm, ưu đãi
- Thông báo đẩy (push notification) cho đơn hàng, tồn kho, KPI
- Đồng bộ dữ liệu 2 chiều với toàn bộ hệ sinh thái eCor

### CRM — Chăm sóc khách hàng
- Hồ sơ 360° khách hàng: lịch sử mua hàng, tương tác, phản hồi
- Tích điểm, phân hạng thành viên, chương trình loyalty tự động
- Voucher, ưu đãi cá nhân hoá theo hành vi mua hàng
- Chăm sóc đa kênh (SMS, Zalo OA, email) tích hợp sẵn
- Phân tích vòng đời khách hàng, dự đoán khách có nguy cơ rời bỏ

**Trang chủ** phải có 1 sơ đồ trực quan (giống khối "Trung tâm kết nối đa kênh" trên site cũ) thể
hiện 8 module xoay quanh 1 lõi dữ liệu dùng chung (single source of truth) — đây là thông điệp bán
hàng cốt lõi: "Một nền tảng, một nguồn dữ liệu, toàn bộ vận hành".

---

## 4. Chuẩn SEO kỹ thuật (bắt buộc với mọi trang)

1. **Thẻ meta mỗi trang** riêng biệt, không trùng lặp: `<title>` (50-60 ký tự, có tên module + "eCor"),
   `meta description` (140-160 ký tự, có CTA), `canonical`, Open Graph (`og:title`, `og:description`,
   `og:image`, `og:url`), Twitter Card.
2. **Cấu trúc heading** đúng phân cấp: 1 `<h1>` duy nhất/trang chứa từ khoá chính, `<h2>` cho các
   block lớn, `<h3>` cho tính năng con. Không nhảy cấp (h1 → h3).
3. **HTML ngữ nghĩa**: dùng `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` thay
   vì `<div>` tràn lan.
4. **Structured data (JSON-LD)** cho mọi trang:
   - `Organization` (tên, logo, hotline, mạng xã hội) ở layout gốc.
   - `SoftwareApplication` hoặc `Product` cho từng trang module (tên, mô tả, applicationCategory,
     offers nếu có giá).
   - `FAQPage` cho phần câu hỏi thường gặp (xem mục 5).
   - `BreadcrumbList` cho điều hướng.
   - `WebSite` + `SearchAction` ở trang chủ nếu có tìm kiếm nội bộ.
5. **Sitemap.xml** tự động sinh, khai báo trong `robots.txt`, submit Google Search Console.
6. **robots.txt** cho phép crawl toàn bộ trang public, chặn trang nội bộ/nháp.
7. **Ảnh**: mọi `<img>` có `alt` mô tả đúng nội dung (không nhồi từ khoá), dùng định dạng
   WebP/AVIF, `loading="lazy"` cho ảnh dưới màn hình đầu.
8. **URL sạch**: dùng slug tiếng Việt không dấu, có nghĩa (`/pos`, `/quan-ly-kho-wms`...), tránh
   tham số động ở trang nội dung chính.
9. **Internal linking**: mỗi trang module link chéo tới ít nhất 3 module liên quan + trang bảng giá
   + 1 bài blog liên quan.
10. **Core Web Vitals**: LCP < 2.5s, CLS < 0.1, INP < 200ms — nén ảnh, lazy-load, preconnect font,
    tối thiểu hoá JS chặn render.
11. **Mobile-first responsive**, kiểm tra bằng Mobile-Friendly Test.
12. **Hreflang** nếu có bản tiếng Anh song song (khuyến nghị chuẩn bị sẵn cấu trúc `/en/...`).

---

## 5. Chuẩn tối ưu cho AI Search / GEO (Generative Engine Optimization)

Mục tiêu: để ChatGPT, Perplexity, Google AI Overview, Claude... có thể **trích dẫn chính xác** eCor
khi người dùng hỏi về phần mềm quản lý bán lẻ/vận hành đa kênh.

1. **File `llms.txt`** tại root domain: tóm tắt eCor là gì, danh sách 8 module kèm 1 dòng mô tả và
   link, thông tin liên hệ — định dạng markdown ngắn gọn theo chuẩn llms.txt.
2. **Trả lời trực tiếp trước, giải thích sau**: mỗi block nội dung mở đầu bằng câu trả lời thẳng
   ("eCor là nền tảng SaaS quản lý vận hành đa kênh gồm 8 module...") rồi mới diễn giải — AI crawler
   và LLM ưu tiên trích các đoạn trả lời trực tiếp, tự chứa ngữ cảnh (không phụ thuộc câu trước đó).
3. **Khối FAQ rõ ràng** ở cuối mỗi trang module, dạng câu hỏi thật người dùng hay hỏi ("eCor có phù
   hợp với chuỗi cửa hàng dưới 10 chi nhánh không?", "WMS của eCor có hỗ trợ RFID không?") kèm câu
   trả lời 2-4 câu, đánh dấu `FAQPage` schema.
2. **Định nghĩa thực thể rõ ràng**: lần đầu nhắc mỗi module, viết đầy đủ tên + viết tắt trong cùng
   câu ("WMS (Warehouse Management System) — quản lý kho") để LLM neo đúng thực thể.
4. **Đoạn văn ngắn, tự chứa ngữ cảnh** (3-5 câu/đoạn), tránh đoạn dài lê thê khó trích dẫn từng phần.
5. **Bảng so sánh/tổng hợp** (module vs tính năng, gói giá vs tính năng) — LLM rất thích trích dữ
   liệu dạng bảng vì dễ parse.
6. **Cho phép crawler AI** trong `robots.txt`: mở cho `GPTBot`, `ClaudeBot`, `PerplexityBot`,
   `Google-Extended`, `CCBot` (trừ khi có lý do kinh doanh muốn chặn).
7. **Trang "Về chúng tôi"** có thông tin xác thực (E-E-A-T): năm thành lập, số khách hàng đang dùng,
   địa chỉ, đội ngũ — LLM và Google đều ưu tiên nguồn có tín hiệu đáng tin cậy rõ ràng.
8. **Nhất quán dữ liệu** (NAP - Name, Address, Phone) giữa website, Google Business Profile, mạng xã
   hội — giúp AI xác thực thực thể doanh nghiệp.
9. **Cập nhật ngày** (`dateModified`) trên các trang/blog để tín hiệu độ mới cho AI Overview.

---

## 6. Checklist thực thi cho Agent

1. [ ] Trích xuất logo + màu + font từ site sống, lưu thành design tokens dùng chung.
2. [ ] Dựng layout khung (header, nav 8 module dạng mega-menu, footer) dùng chung mọi trang.
3. [ ] Viết nội dung trang chủ theo mục 3 (định vị đa dịch vụ + sơ đồ hệ sinh thái).
4. [ ] Tạo 8 trang module theo template mục 2 + nội dung mục 3.
5. [ ] Tạo trang bảng giá phản ánh cả gói theo quy mô lẫn theo module riêng lẻ (cho khách chỉ cần
   1-2 module thay vì cả hệ sinh thái).
6. [ ] Áp dụng toàn bộ chuẩn SEO ở mục 4 cho mọi trang.
7. [ ] Áp dụng toàn bộ chuẩn AI Search ở mục 5 (đặc biệt `llms.txt` và FAQ schema).
8. [ ] Sinh `sitemap.xml`, `robots.txt`, kiểm tra Rich Results Test và Mobile-Friendly Test.
9. [ ] Kiểm tra Core Web Vitals (Lighthouse ≥ 90 điểm Performance/SEO).
10. [ ] Đối chiếu lại: logo/màu/hotline có đúng với thương hiệu gốc không trước khi bàn giao.

---

## 7. Ghi chú kỹ thuật cho triển khai

- Skill này mô tả **nội dung, cấu trúc và chuẩn kỹ thuật** — không ràng buộc framework cụ thể.
  Agent triển khai bằng bất kỳ stack nào phù hợp với hệ thống backend hiện có của eCor (ví dụ
  .NET/Blazor hoặc Golang cho backend + HTML/CSS/JS hoặc React cho frontend).
- Nếu dùng SSR/SSG (Next.js, Astro, Blazor Server...), ưu tiên SSR/SSG cho các trang public để đảm
  bảo crawler (cả bot tìm kiếm truyền thống lẫn AI crawler) đọc được nội dung đầy đủ mà không cần
  chạy JS.
