# ecor POS — Bán hàng tại điểm bán

**Dành cho:** chuỗi bán lẻ, F&B, điểm bán đa kênh, cửa hàng có kèm bán online. Trang: ecor.vn/pos

## Mục tiêu thiết kế (không phải kết quả đã đo trên khách hàng thật)
| Chỉ số | Mục tiêu | Giải thích |
|---|---|---|
| Tốc độ thanh toán | **5 giây / hóa đơn** | Phím tắt, quét mã vạch, VietQR tự khớp tiền |
| Đồng bộ kho tổng WMS | **100% thời gian thực** | Trừ kho tổng và kho chi nhánh tức thì khi xuất hóa đơn |
| Hoạt động khi mất mạng | **100% (Offline Mode)** | Bán và in bill liên tục dù đứt cáp quang |
| Mở điểm bán mới | **< 30 phút / điểm** | Cài danh mục, phân quyền, cấu hình phần cứng 1 click |
| Tốc độ đồng bộ tồn | **< 1 giây** | Webhook real-time API |
| Tỷ lệ hủy đơn quá hạn | **< 0.5%** | Tự động khóa tồn an toàn |

## 4 lõi vận hành

### 1. Thanh toán đa phương thức & VietQR động
Không cần nhập tay số tiền — màn hình phụ hoặc bill tự sinh mã **VietQR động** chứa chính xác số tiền
và mã hóa đơn.
- Đối soát tự động qua Open API của các ngân hàng hỗ trợ VietQR.
- Tích hợp thẻ tín dụng, ví điện tử (MoMo, ZaloPay, ShopeePay) và tiền mặt **trên cùng một đơn hàng**.
- Loại bỏ rủi ro chuyển khoản giả mạo (fake bill).

### 2. Đồng bộ tồn kho đa chi nhánh & kho tổng WMS
Nhân viên tại bất kỳ quầy nào cũng tra cứu được tồn kho thực tế của toàn chuỗi và kho tổng chỉ bằng
một phím bấm.
- Tạo phiếu yêu cầu điều chuyển hàng giữa các điểm bán ngay trên màn hình POS.
- Liên thông tự động với ecor WMS để kích hoạt quy trình picking tại kho tổng.
- Kiểm kê bằng PDA/SmartPOS mà không cần đóng cửa quầy.

### 3. CRM 360° & thẻ thành viên
Nhận diện khách tức thì qua số điện thoại hoặc mã QR thành viên trên Zalo Mini App. Đưa chính sách
ưu đãi từ online xuống offline.
- Tích điểm, thăng hạng thẻ (Silver, Gold, Diamond) thời gian thực, đồng nhất mọi chi nhánh.
- Gửi hóa đơn điện tử và thông báo điểm tích lũy qua **Zalo ZNS** — mục tiêu tiết kiệm 50% chi phí so với SMS.
- AI cá nhân hóa voucher sinh nhật, gợi ý sản phẩm theo lịch sử mua hàng đa kênh.

### 4. Offline-First Architecture
Dữ liệu bán hàng lưu trong cơ sở dữ liệu cục bộ tốc độ cao (**SQLite**).
- Bán hàng liên tục không phụ thuộc đường truyền nhà mạng.
- Tự động khử trùng lặp và đẩy đồng bộ lên cloud theo thuật toán hàng đợi (Message Queue).
- Phù hợp trung tâm thương mại tầng hầm hoặc khu kẹt sóng giờ cao điểm.

## AI tại quầy
- **Gợi ý bán chéo:** AI đề xuất sản phẩm thường mua kèm, hiện ngay trên màn hình thu ngân khi tính tiền.
- **Cảnh báo hàng cận hạn cần đẩy bán:** nhắc nhân viên ưu tiên bán lô sắp hết hạn trước.
- **Dự đoán khách có nguy cơ rời bỏ:** phân tích tần suất mua của khách thân thiết, gợi ý thời điểm chăm sóc.

## Phần cứng tương thích Plug & Play
Cắm là chạy trong ~10 giây, không cần cài driver phức tạp:
1. **Màn hình đôi Dual-Screen POS** — 15.6" + 10.1" phụ hiển thị giỏ hàng & QR thanh toán.
2. **Máy in nhiệt K80** — khổ 80mm, dao cắt tự động, in logo & QR VietQR.
3. **Máy quét mã vạch 1D/2D đa tia** — EAN-13, Code 128, QR giảm giá.
4. **Ngăn kéo đựng tiền tự động** — nối trực tiếp máy in K80, tự bung khi in bill.
5. **Máy POS cầm tay SmartPOS** — all-in-one: cảm ứng, quét mã, in bill.
6. **Cân điện tử in mã vạch** — cho thực phẩm tươi sống, hoa quả, nông sản.

Các hãng được hỗ trợ: máy quét PDA Android (Zebra, Honeywell, Datalogic, Sunmi, Urovo), máy in
(Xprinter, Godex), cân điện tử kết nối RS232.

## Liên thông với các phân hệ khác
- → **WMS:** mỗi hóa đơn trừ tồn kho tổng/chi nhánh tức thì, tránh overselling.
- → **Account:** mỗi hóa đơn quầy tự động sinh phiếu thu, sẵn sàng cấp mã hóa đơn điện tử TT78.
- → **ECOM:** đơn từ Shopee, TikTok Shop, Lazada về cùng một bảng điều khiển với đơn tại quầy.
- → **CRM:** tích điểm và gửi ZNS tự động.
