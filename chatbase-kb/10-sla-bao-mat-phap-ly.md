# SLA, bảo mật & pháp lý

Trang: ecor.vn/cam-ket-sla · ecor.vn/chinh-sach-bao-mat · ecor.vn/dieu-khoan-su-dung

---

# PHẦN 1 — SLA & hỗ trợ kỹ thuật

## Cam kết cốt lõi
- **Uptime 99.5%/tháng dương lịch** — kèm cơ chế bồi hoàn dịch vụ (service credit).
- **Phản hồi sự cố P1 (khẩn cấp): dưới 1 giờ** trong giờ làm việc; ngoài giờ liên hệ hotline để được ưu tiên.
- **Bản vá & nâng cấp tự động** qua Cloud, không phát sinh phí ẩn. Phát hành mỗi **thứ Ba hàng tuần**.
- **Bảo hành 30 ngày** — hỗ trợ hoàn tiền theo điều khoản hợp đồng nếu không đạt tiêu chuẩn nghiệp vụ đã thống nhất.
- Giờ hỗ trợ: **Thứ Hai – Thứ Bảy, 8:00 – 18:00**.

## Ma trận phân cấp sự cố
| Cấp độ | Đặc tính | Tiếp nhận & phản hồi | Giải pháp tạm | Giải quyết triệt để |
|---|---|---|---|---|
| **P1 — Khẩn cấp** | Toàn bộ hệ thống ngưng trệ: không nhập–xuất kho được, nghẽn cổng đồng bộ sàn, tắc bàn giao tài xế | **< 1 giờ** (giờ làm việc) | < 4 giờ | < 24 giờ |
| **P2 — Nghiêm trọng** | Gián đoạn tính năng trọng yếu: lỗi in nhãn vận đơn hàng loạt, mất kết nối PDA, ngắt bảng định tuyến xe | < 2 giờ | < 8 giờ | < 48 giờ |
| **P3 — Tiêu chuẩn** | Lỗi phụ: giao diện tải chậm, sai định dạng báo cáo Excel, thắc mắc thao tác | < 8 giờ (giờ hành chính) | < 2 ngày | < 5 ngày |
| **P4 — Đề xuất** | Yêu cầu tính năng, góp ý, tùy biến mẫu hóa đơn, tích hợp cổng mới | < 2 ngày làm việc | Lập kế hoạch | Theo roadmap |

## Quy trình xử lý sự cố P1
1. **0 – 5 phút:** hệ thống giám sát tự động gửi cảnh báo tới kỹ sư trực.
2. **15 – 60 phút:** thành lập War-Room, đội kỹ thuật khoanh vùng module lỗi.
3. **< 4 giờ:** áp dụng phương án dự phòng hoặc khôi phục từ bản sao lưu, đưa luồng đơn hàng hoạt động lại.
4. **Trong 3 ngày làm việc:** gửi biên bản phân tích nguyên nhân gốc rễ (RCA) và bồi hoàn theo cam kết.

## Bồi hoàn dịch vụ (Service Credit)
Nếu uptime trong bất kỳ tháng dương lịch nào xuống dưới 99.5%:

| Uptime tháng | Bồi hoàn | Hình thức |
|---|---|---|
| 99.0% – dưới 99.5% | **10%** cước dịch vụ tháng | Khấu trừ tự động kỳ kế tiếp |
| 95.0% – dưới 99.0% | **25%** cước dịch vụ tháng | Khấu trừ tự động kỳ kế tiếp |
| Dưới 95.0% | **50%** cước dịch vụ tháng | Khấu trừ hoặc hoàn tiền tài khoản |

**Không tính vào uptime:** thời gian bảo trì định kỳ đã thông báo trước ít nhất 07 ngày, sự cố từ nhà cung cấp viễn thông quốc tế (đứt cáp quang biển), thiên tai bất khả kháng.

## Bảo trì định kỳ
- Khung giờ: **01:00 – 04:00 sáng Chủ Nhật**.
- Thông báo trước **07 ngày** qua văn bản / email / Dashboard.
- Áp dụng Zero-Downtime Deployment để hạn chế ngắt quãng.
- Tối đa **120 phút bảo trì / quý dương lịch**.

## Trang trạng thái hệ thống
**status.ecor.vn** — theo dõi uptime 90 ngày của Core WMS API Gateway, TMS Routing & GPS Tracking, OMS E-commerce Sync Engines (mục tiêu mỗi dịch vụ ≥ 99.5%).

## 4 kênh hỗ trợ
| Kênh | Chi tiết |
|---|---|
| **Hotline khẩn cấp** | **097 8673867** — ưu tiên sự cố P1; trong giờ làm việc, ngoài giờ vẫn gọi được để được ưu tiên xử lý |
| **Email hỗ trợ** | **contact@ecor.vn** — đính kèm log lỗi, ảnh màn hình; mỗi yêu cầu có mã theo dõi |
| **Nhóm Zalo riêng** | Dành riêng cho doanh nghiệp gói Enterprise, có chuyên viên phụ trách riêng |
| **Hỗ trợ onsite** | Kỹ sư đến kho / trung tâm phân phối theo lịch hẹn; ưu tiên khu vực TP.HCM |

## Phạm vi bảo hành phần mềm
- **Miễn phí 100%** toàn bộ bản sửa lỗi logic (hotfix).
- Cập nhật bản vá bảo mật định kỳ theo thực hành bảo mật tốt nhất.
- Tự động nhận tính năng nâng cao, không phát sinh phí ẩn.
- Tương thích thiết bị ngoại vi phổ biến (PDA Android, máy in bill/mã vạch nhiệt, cân điện tử).
- Hỗ trợ setup từ xa qua TeamViewer / UltraViewer.

SLA là **phụ lục bắt buộc gắn liền với Hợp đồng cấp phép sử dụng phần mềm**, có giá trị pháp lý đầy đủ.

---

# PHẦN 2 — Bảo mật & dữ liệu

Cập nhật lần cuối: **15/02/2025**. Tuân thủ **Nghị định 13/2023/NĐ-CP** về bảo vệ dữ liệu cá nhân và Luật An ninh mạng Việt Nam.

## Cam kết bảo mật
- Mã hóa dữ liệu lưu trữ (at-rest) bằng **AES-256**; kênh truyền tải (in-transit) **TLS 1.3** với HSTS bắt buộc.
- Kiến trúc **Defense-in-Depth**: mỗi doanh nghiệp có **schema cơ sở dữ liệu riêng biệt** và phân quyền **Row-Level Security**, chặn rò rỉ chéo dữ liệu giữa các tenant.
- Tường lửa ứng dụng và giám sát tự động phát hiện, chặn truy vấn bất thường.
- Sao lưu tự động định kỳ (theo giờ hoặc theo ngày tùy gói), lưu tách biệt khỏi hệ thống chính.
- **Tuyệt đối không thương mại hóa, chia sẻ hay tiết lộ dữ liệu cho bên thứ ba không được ủy quyền.**

**Về ISO/IEC 27001 — đọc kỹ:** eCor **áp dụng thực hành tham chiếu tương đương** theo chuẩn này nhưng **CHƯA có chứng nhận độc lập**. Sẽ đánh giá độc lập khi đủ điều kiện. **Không bao giờ nói eCor "đã đạt chứng chỉ ISO 27001".**

## Quyền sở hữu dữ liệu (Customer Data Ownership)
**Khách hàng là chủ thể sở hữu pháp lý độc quyền và duy nhất** đối với toàn bộ dữ liệu kinh doanh, đơn hàng, khách hàng cuối và số liệu kế toán lưu trên eCor.
eCor **không** sở hữu, **không** sao chép để tạo sản phẩm cạnh tranh, **không** dùng dữ liệu khách hàng cho mục đích nào ngoài việc thực thi tính năng kỹ thuật mà khách hàng trực tiếp thao tác.

## Phạm vi dữ liệu thu thập (nguyên tắc Tối thiểu hóa dữ liệu)
1. **Dữ liệu tài khoản doanh nghiệp:** tên công ty, mã số thuế, địa chỉ trụ sở, họ tên người đại diện pháp luật, email quản trị, thông tin thanh toán hợp đồng.
2. **Thông tin hàng hóa & chuỗi vận hành:** mã SKU, quy cách bao gói, số sê-ri, giá nhập, định mức tồn kho tối thiểu, hình ảnh sản phẩm.
3. **Dữ liệu người nhận hàng cuối (B2C/B2B):** tên, số điện thoại, địa chỉ giao hàng, giá trị COD — do khách hàng tải lên hoặc đồng bộ từ sàn TMĐT.

Mục đích duy nhất: cung cấp, tối ưu và duy trì chất lượng dịch vụ quản trị chuỗi cung ứng.

## Quyền của khách hàng (Data Subject Rights)
- **Trích xuất dữ liệu (Data Portability):** tải toàn bộ SKU, tồn kho, đơn hàng, báo cáo tài chính dưới định dạng mở (.xlsx, .csv, .json) bất kỳ lúc nào, **không hạn chế số lần tải**.
- **Xóa dữ liệu (Right to Erasure):** gửi văn bản hoặc yêu cầu qua API để xóa hồ sơ khách mua lẻ, đơn hàng nhạy cảm, tài khoản nhân viên đã nghỉ. eCor hoàn tất **trong 72 giờ làm việc**.
- **Hạn chế xử lý:** tạm khóa đồng bộ sang bên thứ 3 hoặc giới hạn quyền truy cập theo nhóm (RBAC).
- **Nhật ký kiểm toán (Audit Trail):** truy xuất toàn bộ log truy cập (IP, thời gian, thiết bị, thao tác sửa/xóa đơn) để minh bạch mọi biến động dữ liệu.

## Chia sẻ với bên thứ ba — chỉ khi khách chủ động kích hoạt (OAuth Token / API Key)
| Đối tác | Dữ liệu chia sẻ | Mục đích |
|---|---|---|
| Đơn vị vận chuyển (GHN, GHTK, Viettel Post, Ninja Van, J&T) | Tên, SĐT, địa chỉ người nhận, khối lượng, COD | In phiếu giao, phát đơn, điều phối tài xế lấy hàng |
| Sàn TMĐT (Shopee, TikTok Shop, Lazada, WooCommerce) | Mã SKU, số lượng tồn thực tế, trạng thái đóng gói | Đồng bộ tồn kho tức thì, tránh overselling |
| Hóa đơn điện tử (VNPT, MISA, Viettel) | Tên người mua/công ty, MST, chi tiết mặt hàng, giá trị | Phát hành HĐĐT có mã cơ quan thuế |

## Vị trí lưu trữ & thời hạn
Dữ liệu lưu trên hạ tầng đám mây của nhà cung cấp uy tín, tuân thủ Luật An ninh mạng Việt Nam và NĐ 13/2023. Hiện **ưu tiên đặt tại Việt Nam** (hạ tầng hợp tác cùng VNPT Cloud và Viettel IDC). Vị trí cụ thể nêu rõ trong hợp đồng dịch vụ.
Dữ liệu lịch sử giao dịch kho và vận tải được lưu toàn vẹn trong suốt thời gian hợp đồng có hiệu lực.

## Quy trình ứng phó sự cố an ninh
1. **0 – 2 giờ:** phát hiện & cô lập — cách ly phân vùng ảnh hưởng, khóa tài khoản nghi bị xâm phạm, lưu nhật ký làm bằng chứng.
2. **Trong 24 giờ:** thông báo khách hàng qua email quản trị + hotline; báo cáo **Cục An toàn thông tin (Bộ TT&TT)** theo quy định.
3. **Trong 72 giờ:** khôi phục từ bản sao lưu sạch gần nhất, vá lỗ hổng, xuất bản báo cáo RCA cho khách.

## NDA & đánh giá an toàn
eCor sẵn sàng ký **NDA độc lập** hoặc cung cấp hồ sơ năng lực an ninh kỹ thuật phục vụ thẩm định của Hội đồng CNTT doanh nghiệp. Liên hệ bộ phận kỹ thuật & bảo mật qua contact@ecor.vn.

---

# PHẦN 3 — Điều khoản dịch vụ (những điểm khách hay hỏi)

Phiên bản **3.2**, hiệu lực từ **01/01/2025**.

## Quyền & trách nhiệm
- Mô hình **SaaS thuê bao**: cấp quyền sử dụng có thời hạn, không độc quyền, không chuyển nhượng; **không chuyển giao mã nguồn**.
- eCor sở hữu bản quyền mã nguồn, thuật toán xếp hàng 3D, thuật toán định tuyến, nhãn hiệu, UI/UX, tài liệu kỹ thuật.
- Khách hàng sở hữu hoàn toàn dữ liệu tồn kho, giá trị tài sản, thông tin đại lý và người tiêu dùng cuối.
- Khách có quyền kết xuất dữ liệu bất kỳ lúc nào (JSON, Excel, CSV, SQL dump).
- **Tài khoản Master** gắn với mã số thuế và người đại diện pháp luật; cần cung cấp giấy ĐKKD, MST, CCCD người đại diện hoặc giấy ủy quyền hợp lệ.
- **Phân quyền RBAC** theo vị trí: thủ kho (quét barcode, nhập hàng, lấy hàng, đóng gói) · tài xế (lộ trình, ảnh POD, cập nhật tình trạng giao) · kế toán (hóa đơn thuế, dòng tiền COD, công nợ vận tải, trích xuất ERP).
- **Bắt buộc bật 2FA** cho tài khoản có quyền truy xuất dữ liệu giá vốn.
- **Nghiêm cấm chia sẻ/cho thuê lại tài khoản** ra ngoài doanh nghiệp — mỗi user tương ứng một cá nhân duy nhất trong nội bộ.

## Hành vi bị cấm
Số hóa/điều phối hàng cấm, vũ khí, ma túy, hóa chất độc hại · tấn công DDoS, phát tán mã độc, pentest không có văn bản thỏa thuận · bot scraping vượt rate-limit (tối đa 120 calls/phút/endpoint với gói doanh nghiệp thông thường) · làm sai lệch số liệu POD hoặc tạo cuốc xe ảo để gian lận trợ giá.
Mọi hành vi reverse engineering, bẻ khóa API, tạo sản phẩm phái sinh nhái quy trình nghiệp vụ của eCor sẽ bị xử lý theo pháp luật.

## Chấm dứt hợp đồng & bàn giao dữ liệu
1. **Ngày 0 – 10:** bên có nhu cầu gửi thông báo bằng văn bản hoặc email có chữ ký số; hai bên đối soát hoàn tất công nợ.
2. **Ngày 11 – 30:** mở cổng **Data Extraction Toolkit** — khách tải toàn bộ lịch sử đơn hàng, tồn kho, hồ sơ nhà cung ứng dưới dạng file nén mã hóa AES-256.
3. **Sau ngày 45:** toàn bộ bản sao lưu trên cloud storage được xóa vĩnh viễn theo quy trình xóa an toàn.

## Giới hạn trách nhiệm
Với khiếu nại từ lỗi phần mềm được xác định thuộc về eCor, tổng giá trị trách nhiệm bồi thường thiệt hại trực tiếp bị giới hạn theo đúng câu chữ trong hợp đồng — nếu khách hỏi mức cụ thể, chuyển cho bộ phận pháp chế/kinh doanh, không tự diễn giải.
eCor không chịu trách nhiệm với thiệt hại hệ quả, tổn thất cơ hội kinh doanh, giảm sút lợi nhuận, mất dữ liệu do thiết bị đầu cuối của khách nhiễm virus, hoặc sự cố mạng ngoài kiểm soát.
**Bất khả kháng:** thiên tai, hỏa hoạn, động đất, lũ lụt, chiến tranh, dịch bệnh, đứt cáp quang biển quốc tế, quyết định cấm vận của cơ quan Nhà nước có thẩm quyền.

## Luật áp dụng & giải quyết tranh chấp
Pháp luật Việt Nam. Ưu tiên thương lượng thiện chí giữa đại diện có thẩm quyền hai bên; nếu không thành, giải quyết chung thẩm tại trung tâm trọng tài thương mại, địa điểm **TP. Hồ Chí Minh**, ngôn ngữ **tiếng Việt**, phán quyết chung thẩm và bắt buộc thi hành.

## Cookie
Website ecor.vn dùng cookie để cải thiện trải nghiệm người dùng; khách có thể Đồng ý hoặc Từ chối qua banner cài đặt quyền riêng tư.
