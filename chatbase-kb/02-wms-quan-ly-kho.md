# ecor WMS — Hệ thống quản lý kho

**Dành cho:** shop bán hàng online, kho bãi nhỏ và vừa, bán lẻ đa kênh, chuỗi phân phối FMCG,
kho lạnh, chành xe / đơn vị kho vận cho thuê (3PL). Trang: ecor.vn/wms

## Mục tiêu thiết kế (không phải kết quả đã đo trên khách hàng thật)
| Chỉ số | Mục tiêu | Giải thích |
|---|---|---|
| Độ chính xác tồn kho | **99%** | Khử thất thoát và sai lệch giữa kho thực tế và sổ sách kế toán |
| Tốc độ Pick & Pack | **x2 lần** | Wave picking gom nhóm đơn, tối ưu đường đi trong kho |
| Thời gian đào tạo nhân viên mới | **30 phút** | Giao diện PDA có chỉ dẫn màu trực quan |
| Go-live | **3–5 ngày** | Chuẩn hóa danh mục SKU và chuyển dữ liệu tự động, không gián đoạn bán hàng |
| Cắt giảm chi phí vận hành | **20–30%** | |

## 4 trụ cột công nghệ

### 1. Quản lý vị trí 3D đa tầng (Zone / Rack / Tier / Bin)
Số hóa sơ đồ kho thực tế lên không gian 3 chiều. Tự động tính tải trọng sàn, dung tích ô chứa
(CBM) và tỷ lệ lấp đầy theo thời gian thực.
- Định vị chính xác từng Zone, Kệ (Rack), Tầng (Tier), Ngăn (Bin).
- Phân loại tự động khu vực Fast-moving, Slow-moving và Deadstock.

### 2. Wave & Batch Picking thông minh
AI gom hàng trăm đơn lẻ thành từng đợt lấy hàng (Wave), tối ưu lộ trình ngắn nhất bằng thuật toán
TSP (Traveling Salesperson).
- Hỗ trợ linh hoạt: Single order picking, Multi-order batching, Zone picking.
- Mục tiêu rút ngắn đến **30%** quãng đường di chuyển và thời gian tìm hàng.

### 3. Kiểm soát lô & hạn dùng (FIFO / FEFO / LEFO)
- Hệ thống tự động ép buộc xuất hàng theo hạn dùng (First Expired First Out).
- Cảnh báo cận date **30 – 60 – 90 ngày** theo thời gian thực tới bộ phận kinh doanh.
- Giải quyết bài toán hàng cận date cho bán lẻ, dược phẩm và thực phẩm tươi sống.

### 4. Kiểm kê cuốn chiếu (Blind Cycle Counting)
Kiểm kê liên tục theo khu vực (Zone) hoặc nhóm SKU ABC **mà không cần đóng cửa kho**.
- Kiểm kê mù (Blind Count) để đảm bảo minh bạch của thủ kho.
- Tự động tạo phiếu điều chỉnh chênh lệch sau khi cấp quản lý phê duyệt.

## Quy trình kho 5 bước khép kín
1. **Nhập kho (Inbound):** quét Barcode/QR đối soát với PO nhà cung cấp, kiểm tra thừa/thiếu, ghi
   nhận barcode lô sản xuất ngay tại dock.
2. **Xếp vị trí (Putaway):** AI đề xuất vị trí kệ trống tối ưu theo kích thước, khối lượng, điều
   kiện bảo quản và tần suất xuất nhập.
3. **Quản tồn & date:** theo dõi biến động tồn thời gian thực, tự động thông báo luân chuyển hàng
   sang khu thanh lý hoặc đẩy date trước khi hết hạn.
4. **Soạn & đóng gói:** phân bổ nhân sự nhặt hàng qua PDA theo lộ trình ngắn nhất; bàn đóng gói
   kiểm tra lại barcode lần cuối trước khi dán vận đơn.
5. **Xuất & bàn giao:** quét biên bản bàn giao cho shipper/xe tải, ký số e-POD, đồng bộ trạng thái
   đơn sang các kênh bán lẻ tức thì.

## 3 mô hình kho được may đo
### Kho bán lẻ đa kênh & sàn TMĐT
Xây cho các chiến dịch Mega Sale lượng đơn tăng đột biến. Đồng bộ tồn kho gần như tức thì sang
Shopee, TikTok Shop, Lazada và chuỗi cửa hàng offline.
- Máy quét PDA Android · xử lý hoàn hàng thông minh · in nhãn đa đơn vị vận chuyển.
- Mục tiêu xử lý: **< 2 phút / đơn hàng**.

### Kho lạnh & phân phối thực phẩm
Quản lý dải nhiệt độ, độ ẩm của từng zone. Quản lý date, chuẩn HACCP, truy vết nguồn gốc lô hàng.
- Cảnh báo nhiệt độ IoT · quy tắc FEFO tuyệt đối · truy xuất nguồn gốc Lot.
- Hướng tới chuẩn an toàn thực phẩm & y tế.

### Chành xe / kho vận cho thuê đi tỉnh (3PL)
Kiến trúc **Multi-tenant**: quản lý hàng trăm chủ hàng trên cùng một giao diện, tách biệt dữ liệu.
- Cổng Portal riêng cho từng chủ hàng · tính cước lưu kho theo CBM/ngày · tự động xuất bảng kê billing.
- Mục tiêu tiết kiệm **50%** thời gian chốt công nợ.

## Trước và sau khi dùng ecor WMS
| Chỉ số vận hành | Kho truyền thống / Excel | ecor WMS |
|---|---|---|
| Định vị hàng hóa | Dựa vào trí nhớ nhân sự, mất thời gian tìm | Chỉ dẫn chính xác từng ô kệ qua sơ đồ 3D và PDA |
| Kiểm đếm & đối soát tồn | Dừng kho cả ngày, sai lệch 3–5% | Kiểm kê cuốn chiếu liên tục, mục tiêu 99% chính xác |
| Kiểm soát hạn dùng | Ghi sổ tay, dễ quên → phải tiêu hủy | FEFO tự động khóa xuất lô cũ trước, báo động date sớm |
| Soạn hàng (Picking) | Nhặt từng đơn lẻ, di chuyển chồng chéo | Wave & Batch Picking, mục tiêu tăng 2 lần tốc độ |
| Phụ thuộc nhân sự cũ | Đình trệ khi thủ kho kỳ cựu nghỉ việc | Quy trình chuẩn hóa trên phần mềm, đào tạo mới 30 phút |

## Chuẩn & tương thích
- Chuẩn mã vạch **GS1 / Code128 / QR**, in nhãn barcode tự động.
- Tích hợp sẵn với ecor TMS và các hệ thống ERP.
- Thiết bị: máy quét PDA Android (Zebra, Honeywell, Datalogic, Sunmi, Urovo), máy quét Bluetooth/USB,
  cân điện tử. Có thể dùng camera điện thoại Android để quét mã nếu chưa muốn đầu tư PDA.

## Khảo sát miễn phí
Đội ngũ kỹ sư giải pháp đến khảo sát mặt bằng thực tế, lập mô phỏng ô kệ 3D và tư vấn phương án
tinh gọn luồng kho — **miễn phí**. Form đăng ký hỏi: họ tên, số điện thoại, tên doanh nghiệp, email,
mô hình kho (bán lẻ & TMĐT / kho lạnh / chành xe / sản xuất & B2B), diện tích kho
(dưới 1.000 m² · 1.000–5.000 m² · 5.000–20.000 m² · trên 20.000 m²).
Kỹ sư liên hệ trong vòng **30 phút** (giờ làm việc).
