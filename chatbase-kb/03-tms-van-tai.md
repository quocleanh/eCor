# ecor TMS — Hệ thống quản lý vận tải

**Dành cho:** doanh nghiệp phân phối FMCG, đội xe vận chuyển vật liệu/công trình, vận tải hàng lạnh,
chành xe và nhà cung cấp dịch vụ logistics (3PL/4PL), nhà xe vừa và nhỏ. Trang: ecor.vn/tms

## Mục tiêu thiết kế (không phải kết quả đã đo trên khách hàng thật)
| Chỉ số | Mục tiêu | Giải thích |
|---|---|---|
| Hệ số lấp đầy tải trọng | **85%** | Gom đơn liên vùng + xếp dỡ 3D, giảm xe chạy rỗng chiều về |
| Chi phí nhiên liệu & cước | **−15%** | Định tuyến đa điểm chọn cung đường tối ưu km thực tế |
| Tỷ lệ giao đúng hạn (OTD) | **95%** | Đối soát kẹt xe, cảnh báo sớm nguy cơ trễ hẹn |
| Số hóa chứng từ giao nhận | **100%** | e-POD ký số thay biên bản giấy |
| Thời gian lập chuyến | **dưới 10 giây** | Giảm 30% thời gian lập chuyến so với làm tay |

## 4 trụ cột

### 1. Smart Route Optimization (AI Engine)
AI gom đơn đa điểm, giải đồng thời: trọng tải xe, thể tích (CBM), khung giờ mở cửa của điểm nhận và
**khung giờ cấm tải tại các đô thị loại I**.
- Cân đối CBM & tấn · cảnh báo giờ cấm tải · giảm 30% thời gian lập chuyến.

### 2. Fleet Hub — giao việc tài xế & báo giá xe tải
AI theo dõi định mức dầu theo từng cung đường qua cảm biến nhiên liệu; tự động cảnh báo chu kỳ thay
nhớt, bảo dưỡng lốp và kỳ hạn đăng kiểm cho cả đội xe nội bộ lẫn xe thầu phụ / nhà xe vệ tinh.
- Chống thất thoát nhiên liệu · quản lý định mức xe thầu · lịch bảo dưỡng chủ động.
- Có chức năng **báo giá cước xe tải nhanh** và **tạo lệnh giao hàng ngay trên điện thoại**.

### 3. ecor Driver Mobile App (iOS / Android)
Tài xế nhận lệnh điều xe tức thì trên điện thoại; bản đồ dẫn đường AI tránh đường kẹt; ký điện tử
e-POD; chụp ảnh niêm phong thùng xe — không giấy tờ.
- Ký nhận e-POD thời gian thực · giao diện tài xế trực quan · báo cáo sự cố tức thì.

### 4. Đối soát cước & COD tự động
Cấu hình biểu phí linh hoạt theo km, vùng cước, loại xe, phụ phí dừng trả điểm. Khớp dòng tiền thu
hộ COD của tài xế vào bảng cân đối kế toán.
- Biểu cước đa ma trận · đối soát COD tự động · xuất báo cáo thuế 1 click.

## Liên thông WMS → TMS
Khi kiện hàng hoàn tất đóng gói tại dock xuất của ecor WMS, hệ thống **lập tức đề xuất chuyến xe tối
ưu** theo mã hàng và lịch xuất bến — không còn tình trạng xuất kho xong mới ngồi lập kế hoạch xe.

Luồng minh họa: Dock kho WMS (quét barcode thùng hàng) → thuật toán TMS gom 42 đơn lẻ thành 1 chuyến
tối ưu (~0.8 giây) → Driver App nhận lệnh, dẫn đường và trả hàng điểm 1–5.

Thêm:
- **Omni-fulfillment:** tự nhận diện đơn sỉ B2B (cho đội xe tải) hay đơn lẻ B2C TMĐT (chuyển tiếp đối tác).
- **Kết nối 1-click tới mạng lưới express:** đẩy đơn và đồng bộ mã vận đơn sang Viettel Post, GHTK,
  GHN, J&T Express khi vượt tải đội xe nhà.

## 4 mô hình vận tải được may đo
| Mô hình | Bài toán | Cam kết thiết kế |
|---|---|---|
| **Phân phối tiêu dùng nhanh (FMCG)** | Gom hàng nghìn đơn nhỏ tới tạp hóa/siêu thị theo khung giờ nghiêm ngặt, tránh kẹt xe nội ô | Giảm 15% thời gian giao hàng |
| **Đội xe vật liệu & xây dựng** | Trọng tải xe nặng, cung đường cho phép lưu thông cầu đường, khớp tiến độ thi công | Cảnh báo tải trọng cầu đường tự động |
| **Vận tải hàng lạnh (Cold Chain)** | Biến thiên nhiệt độ thùng đông lạnh, mở cửa thùng lâu bất thường | Hao hụt nhiệt độ dưới 1% |
| **Chành xe / 4PL** | Nhiều chủ hàng, đội xe thầu phụ khó kiểm soát, mất biên bản giấy | Multi-tenant, cổng tra cứu riêng cho từng chủ hàng, tăng 30% năng lực nhận cuốc |

## Chốt vấn đề khách thường gặp
- "Xe chạy rỗng chiều về" → gom đơn liên vùng, mục tiêu lấp đầy 85% tải trọng.
- "Không biết xe đang ở đâu" → GPS thời gian thực + dự đoán ETA theo giao thông thực tế.
- "Mất biên bản giao hàng giấy" → e-POD ký số, chụp ảnh hiện trường, lưu vĩnh viễn trong hệ thống.
- "Đối soát COD với hãng vận chuyển mất cả tuần" → đối soát tự động, chuyển thẳng sang ecor Account.
- "Tài xế báo dầu không khớp" → theo dõi định mức dầu theo cung đường qua cảm biến nhiên liệu.
