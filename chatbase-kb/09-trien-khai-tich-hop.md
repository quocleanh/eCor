# Triển khai, tích hợp & thiết bị

## Thời gian triển khai (go-live)
| Quy mô | Thời gian | Ghi chú |
|---|---|---|
| Kho tiêu chuẩn dưới 5.000 m² | **3 – 5 ngày làm việc** | Cấu hình layout ô kệ, kết nối máy quét, đưa vào vận hành thực tế |
| 500 – 2.500 đơn/ngày | 7 – 10 ngày làm việc | |
| > 5.000 đơn/ngày | 2 – 3 tuần, có onsite | |

Quá trình triển khai **không làm gián đoạn việc xuất nhập hàng ngày**.
Bao gồm: nhập liệu danh mục SKU, layout mã vị trí kệ, hướng dẫn nhân viên kho thao tác trực tiếp.
Hình thức: online + onsite 1 ngày (tùy gói).
Thời gian đào tạo nhân viên kho mới sử dụng PDA: mục tiêu **30 phút**.

## Có cần mua thiết bị chuyên dụng không?
**Không bắt buộc.** Có thể dùng ngay điện thoại Android sẵn có của nhân viên kho để quét mã vạch qua
camera. Khi muốn tối ưu tốc độ tối đa, eCor sẽ tư vấn dòng máy quét PDA phù hợp ngân sách.

## Thiết bị tương thích
**Máy quét / PDA Android:** Zebra, Honeywell, Datalogic, Sunmi, Urovo. Cả máy quét Bluetooth không dây
và USB có dây nối trực tiếp máy tính.
**Máy in:** máy in nhiệt K80 (khổ 80mm, dao cắt tự động), máy in nhãn barcode — Xprinter, Godex.
**Khác:** ngăn kéo đựng tiền tự động (nối máy in K80), cân điện tử in mã vạch (kết nối RS232),
màn hình đôi Dual-Screen POS (15.6" + 10.1"), máy POS cầm tay SmartPOS.
**Chuẩn in nhãn:** Barcode Code128 / GS1 / QR, EAN-13.
Hỗ trợ cài đặt từ xa qua TeamViewer / UltraViewer. Khắc phục sự cố máy in LAN/Wifi.

## Open API & Webhook (cho kỹ sư tích hợp)
- Chuẩn **RESTful theo OpenAPI 3.0**, xác thực **Bearer Token**.
- Có tài liệu Swagger & Postman collection. Tài liệu: **docs.ecor.vn**
- Nhóm API chính:
  - API quản lý tồn kho & ô kệ (Inventory & Bin)
  - API đồng bộ đơn hàng & lệnh xuất (Orders & Shipments)
  - Webhook cảnh báo biến động tồn & trạng thái xe GPS
- **Môi trường Sandbox:** nhận được **ngay lập tức** sau khi đăng ký dùng thử — kèm API Key và dữ liệu
  mẫu đầy đủ để thử nghiệm.
- Rate limit: Starter 2.000 calls/phút · Professional 10.000 calls/phút · Enterprise không giới hạn.

## Tích hợp ERP / kế toán hiện có
Có. eCor cung cấp Open API + Webhook RESTful đồng bộ **tự động 2 chiều** với:
**SAP, Oracle NetSuite, Microsoft Dynamics, MISA AMIS, Fast, Bravo** và các phần mềm nội bộ.
Module "Cổng kết nối ERP & Kế toán" tính thêm **1.500.000 đ/tháng**.

## Tích hợp sàn TMĐT & vận chuyển
- **Sàn:** Shopee, TikTok Shop, Lazada, Tiki, WooCommerce — đồng bộ 2 chiều tồn kho và đơn hàng.
- **Vận chuyển:** GHN, GHTK, Viettel Post, J&T Express, Ninja Van, SPX — đẩy đơn và đồng bộ mã vận đơn 1-click.
- **Hóa đơn điện tử:** MISA meInvoice, VNPT, Viettel, BKAV.
- **Ngân hàng:** Vietcombank, MB, Techcombank, BIDV (lấy sổ phụ, đối chiếu dòng tiền).
- **Thanh toán:** VietQR động, MoMo, ZaloPay, ShopeePay, thẻ tín dụng.
- **Thông báo khách:** Zalo ZNS, Zalo Mini App, Zalo OA, Messenger.

Việc truyền nhận dữ liệu với đối tác **chỉ diễn ra khi người dùng chủ động kích hoạt kết nối**
(OAuth Token / API Key).

## Tài nguyên có sẵn
- **Tài liệu API & Webhook** — Swagger, Postman.
- **Cấu hình thiết bị & phần cứng** — hướng dẫn kết nối máy in vận đơn K80, máy quét 1D/2D, PDA
  Android, cân điện tử RS232.
- **Cẩm nang quản trị logistics** — mẫu layout kho chuẩn 500 m² – 10.000 m², quy trình kiểm kê định kỳ
  không gián đoạn, biểu mẫu tính chi phí vận hành xe tải TMS.

## Hỗ trợ trong triển khai
Mỗi khách hàng có **một chuyên viên đồng hành** trong quá trình triển khai. Gói Enterprise có kỹ sư
giải pháp chuyên trách 1-1 và hỗ trợ onsite.
Đội ngũ tư vấn gồm: tư vấn giải pháp WMS (kho cho bán lẻ & chành xe), tư vấn TMS (lộ trình và định
tuyến vận tải đa kênh), kỹ sư tích hợp & API (kết nối MISA, KiotViet và hệ thống hiện có).
Khu vực: Hà Nội & Sài Gòn; hỗ trợ onsite ưu tiên khu vực TP.HCM.
