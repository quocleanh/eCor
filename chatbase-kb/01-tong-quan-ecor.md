# eCor Platform — Tổng quan nền tảng

## eCor là gì
eCor là nền tảng SaaS (phần mềm dạng thuê bao đám mây) của Việt Nam, hợp nhất bốn phân hệ vận hành
trên **một lõi dữ liệu duy nhất**: quản lý kho (WMS), quản lý vận tải (TMS), bán hàng tại điểm bán
(POS) và kế toán tự động (Account). Website: **ecor.vn**. Dashboard: dashboard.ecor.vn.
Tài liệu kỹ thuật: docs.ecor.vn.

Định vị: "Một nguồn dữ liệu. Toàn bộ vận hành." — thay vì mua POS một nơi, WMS một nơi khác và
chấm công bằng Excel, eCor gộp tất cả vào một lõi thời gian thực.

## Trạng thái nền tảng (nói thật với khách)
eCor là **nền tảng mới, đội ngũ trẻ mới thành lập**, hiện **đang mở đăng ký dùng thử sớm**.
Chưa công bố khách hàng tham chiếu. Mọi case study trên website là **kịch bản minh họa**, và các
con số hiệu quả là **mục tiêu thiết kế**, chưa phải kết quả đã đo trên khách hàng thật.

## Triết lý sản phẩm: Single Source of Truth
1. **Tốc độ là ưu tiên số một** — mọi thao tác quét mã, in bill, đẩy đơn tối ưu ở mức dưới 1 giây.
2. **Không bỏ rơi khách khi rớt mạng** — cơ chế Offline-First giúp cửa hàng vẫn bán được khi mất internet.
3. **Tuân thủ pháp lý** — hóa đơn điện tử chuẩn Thông tư 78, kết nối cơ quan thuế.

## 4 phân hệ trọng tâm
| Phân hệ | Vai trò | Điểm nhấn |
|---|---|---|
| **ecor WMS** | Quản trị kho | Bản đồ kho 3D (Zone/Rack/Tier/Bin), Wave & Batch Picking, FIFO/FEFO, kiểm kê cuốn chiếu |
| **ecor TMS** | Điều phối vận tải | AI gom tuyến đa điểm, GPS thời gian thực, app tài xế, e-POD, đối soát cước & COD |
| **ecor POS** | Bán hàng tại quầy | Thanh toán 5 giây, VietQR động, chạy offline 100%, trừ kho tức thì về WMS |
| **ecor Account** | Kế toán tự động | Sinh bút toán tự động, đối soát COD, hóa đơn điện tử TT78, báo cáo P&L realtime |

## Hệ sinh thái mở rộng (8 phân hệ trong định hướng sản phẩm)
WMS · TMS · POS · Account · **ECOM** (đồng bộ đa sàn) · **CRM** (tích điểm, Zalo ZNS) ·
**HRM** (bảng lương) · **Mobile App** (chủ shop duyệt phiếu, xem lãi lỗ trên điện thoại).
Thêm giải pháp chuyên ngành: **ecor Tiles** cho ngành gạch ốp lát & vật liệu xây dựng.

## AI trong eCor
AI của eCor hoạt động xuyên suốt trên một hệ dữ liệu chung (không tách rời theo từng module), nên
học được bức tranh toàn chuỗi: tồn kho → giao hàng → bán hàng → sổ sách.
- **Một nguồn dữ liệu, không đồng bộ thủ công:** AI phân tích trực tiếp dữ liệu thật, không qua Excel trung gian.
- **Học theo đặc thù vận hành của từng doanh nghiệp:** gợi ý nhập hàng, tuyến giao, bán kèm được
  tinh chỉnh theo lịch sử thực tế của chính doanh nghiệp đó.
- **Triển khai dần:** bắt đầu với một module đang dùng, mở rộng khi sẵn sàng — không phải đổi toàn bộ hệ thống.

Năng lực AI theo phân hệ:
- WMS: dự báo nhu cầu & đề xuất nhập hàng, slotting thông minh, phát hiện bất thường tồn kho.
- TMS: tối ưu tuyến giao đa điểm, dự đoán ETA theo giao thông thực tế, chấm điểm hiệu suất tài xế.
- POS: gợi ý bán chéo tại quầy, cảnh báo hàng cận hạn cần đẩy bán, dự đoán khách có nguy cơ rời bỏ.
- Account: tự động đối soát COD đa kênh, phát hiện giao dịch bất thường, trích xuất dữ liệu hóa đơn đầu vào.

## Con số định hướng của nền tảng (là mục tiêu thiết kế)
- 4 phân hệ liên thông trên một lõi dữ liệu.
- Mục tiêu uptime hệ thống **99.5%/tháng** (có cơ chế bồi hoàn dịch vụ — xem tài liệu SLA).
- Hỗ trợ kỹ thuật trực tiếp **Thứ Hai – Thứ Bảy, 8:00–18:00**.
- Dùng thử **14 ngày miễn phí, không cần thẻ tín dụng**.
- Mục tiêu tối ưu chi phí logistics **10–20%**.
- Thời gian go-live mục tiêu **3–7 ngày** (kho dưới 5.000 m²: 3–5 ngày làm việc).
- Phản hồi yêu cầu tư vấn trung bình **dưới 30 phút** trong giờ làm việc.

## Hướng tới tích hợp (đang định hướng, không phải đối tác đã ký)
Sàn TMĐT: Shopee, TikTok Shop, Lazada, Tiki, WooCommerce.
Vận chuyển: GHN, GHTK, Viettel Post, J&T Express, Ninja Van, SPX.
Thanh toán: VietQR, MoMo, ZaloPay, ShopeePay.
Hóa đơn điện tử: MISA meInvoice, VNPT, Viettel, BKAV.
ERP/Kế toán: SAP, Oracle NetSuite, Microsoft Dynamics, MISA AMIS, Fast, Bravo.
Ngân hàng: Vietcombank, MB, Techcombank, BIDV. Thông báo khách: Zalo ZNS.
