# ecor Account — Kế toán tự động

**Dành cho:** chuỗi bán lẻ nhiều chi nhánh, doanh nghiệp bán hàng đa kênh có nhiều đơn COD, doanh
nghiệp logistics. Trang: ecor.vn/ke-toan

Chuẩn mực áp dụng: **Thông tư 133/2016/TT-BTC** (DN vừa & nhỏ) và **Thông tư 200/2014/TT-BTC**
(DN vừa & lớn). Hóa đơn điện tử theo **Thông tư 78 / Nghị định 123**.

## Mục tiêu thiết kế (không phải kết quả đã đo trên khách hàng thật)
| Chỉ số | Mục tiêu |
|---|---|
| Tự động hóa bút toán | **90%+** — sinh bút toán nhập/xuất kho và hóa đơn bán hàng từ mã vận đơn, phiếu kho |
| Thời gian đối soát COD | **−50%** — từ nhiều ngày xuống còn vài phút |
| Lệch giữa sổ sách và kho vật lý | **0 lệch** — đồng bộ 1:1 theo thời gian thực |
| Lập báo cáo tài chính | **5 phút** — tự kết chuyển lãi lỗ, xuất báo cáo và bảng kê thuế |

## 4 trụ cột

### 1. Hạch toán tự động từ kho & bán hàng
Tự sinh phiếu nhập/xuất kho và định khoản (TK 156, 632, 511, 131) ngay khi thủ kho quét mã hoàn tất
đơn hàng — loại bỏ nhập liệu thủ công.
- Tự ghi sổ cái trong vài giây sau khi quét mã đơn.
- Định khoản chuẩn theo TT133/TT200.
- Không còn sai lệch giữa thủ kho và kế toán.

Ví dụ bút toán tự động minh họa:
- Xuất kho 120 SKU đơn TikTok Shop → **Nợ 632 / Có 156**.
- Đối soát COD GHTK → **Nợ 1121 (ngân hàng) / Có 131 (GHTK)**.
- Phát hành HĐĐT TT78 qua MISA meInvoice → **Nợ 131 / Có 5111, 33311**.

### 2. Quản trị công nợ & đối soát COD vận chuyển
- Auto-match hàng chục nghìn mã COD với bảng kê ngân hàng, chỉ bằng 1 click.
- Đối soát với GHTK, GHN, Viettel Post, SPX.
- AI phát hiện lệch cước phí hoặc giữ tiền bất thường tức thì.
- Cảnh báo công nợ quá hạn theo từng khách hàng / nhà cung cấp, theo hạn mức và tuổi nợ.

### 3. Hóa đơn điện tử tự động chuẩn cơ quan thuế
Kết nối trực tiếp **MISA meInvoice, VNPT, Viettel, BKAV**. Xuất HĐĐT theo từng đơn hoặc gom cuối ngày.
- API phát hành HĐĐT tự động, có mã cơ quan thuế.
- Gửi email & Zalo ZNS hóa đơn cho khách tức thì.
- Không bỏ sót đơn lẻ, không xuất trùng.
- Hỗ trợ hóa đơn khởi tạo từ máy tính tiền tại điểm bán.

### 4. Báo cáo tài chính & phân tích lãi lỗ từng đơn
Bảng cân đối phát sinh, lưu chuyển tiền tệ, biên lợi nhuận gộp theo ngành hàng, kênh bán và từng chi
nhánh theo thời gian thực.
- Biết chính xác lãi lỗ thuần **sau phí sàn & phí vận chuyển**.
- Báo cáo P&L realtime trên Mobile App & Web — không chờ cuối tháng.

## 8 phân hệ nghiệp vụ
1. **Tiền mặt & tiền gửi** — kết nối Vietcombank, MB, Techcombank, BIDV; tự lấy sổ phụ, đối chiếu dòng tiền 24/7.
2. **Kế toán bán hàng & công nợ AR** — hạch toán doanh thu từ POS, sàn TMĐT, kênh sỉ B2B; quản lý hạn mức nợ.
3. **Kho & giá vốn (COGS)** — bình quân gia quyền hoặc FIFO tức thời, tự hạch toán chênh lệch kiểm kê.
4. **Chi phí vận chuyển & COD** — tập hợp chi phí cước, đối soát COD theo từng chuyến và mã vận đơn.
5. **Tài sản & khấu hao** — thiết bị, giá kệ kho, xe tải; tự trích khấu hao hàng tháng.
6. **Kế toán thuế & báo cáo** — tờ khai GTGT, TNCN, TNDN tạm tính; xuất XML nộp qua Thuế điện tử.
7. **Kế toán tổng hợp & ngân sách** — dự toán ngân sách, báo cáo quản trị cho Hội đồng quản trị.
8. **Đa tiền tệ & khế ước vay** — hàng nhập khẩu, khế ước vay ngân hàng, lịch trả nợ tự động.

Mở rộng thêm: kiểm toán sổ cái · tài sản vô hình · hợp nhất báo cáo đa công ty · quản lý dự án &
giá thành · ngân sách theo trung tâm chi phí · đối chiếu thuế nhà thầu.

## Kế toán thủ công/Excel vs ecor Account
| Tiêu chí | Thủ công & Excel | ecor Account |
|---|---|---|
| Nhập liệu chứng từ | Gõ tay từng hóa đơn, 4–6 tiếng/ngày, sai sót tới 12% | Tự sinh bút toán từ mã vận đơn WMS và đơn sàn TMĐT |
| Đối soát COD & sàn | Tải Excel từng hãng rồi dò tay; chậm dòng tiền 7–10 ngày | Đối soát 1-click qua API, phát hiện lệch cước trong vài phút |
| Tồn kho & giá vốn | Kho và kế toán luôn lệch; giá vốn chỉ tính cuối tháng | Đồng bộ 1:1 realtime; giá vốn tức thì |
| Hóa đơn điện tử TT78 | Xuất thủ công từng tờ, dễ bỏ sót | Tích hợp MISA/VNPT/Viettel, xuất hàng loạt theo luồng xuất kho |
| Báo cáo cho Ban Giám đốc | Chậm 15–20 ngày sau tháng | Live P&L, xem ngay trên Mobile App & Web |

## Kế toán là mắt xích khép kín của toàn hệ sinh thái
Mọi giao dịch từ các phân hệ khác tự động đổ về ecor Account:
- **POS** → mỗi hóa đơn quầy sinh phiếu thu, sẵn sàng cấp mã HĐĐT.
- **WMS** → phiếu nhập/xuất kho tự hạch toán giá vốn và công nợ nhà cung cấp.
- **TMS** → tiền COD về ngân hàng tự động gạch nợ đơn hàng.
- **ECOM** → phí sàn, phí thanh toán được bóc tách tự động vào lợi nhuận ròng.
- **HRM** → bảng lương đã duyệt tự hạch toán chi phí nhân công.
- **CRM** → chi phí Zalo ZNS và khuyến mãi vào chi phí marketing.
- **Mobile App** → chủ shop duyệt phiếu chi, xem lãi lỗ trên điện thoại.

## Form đăng ký tư vấn kế toán hỏi gì
Họ tên người phụ trách, số điện thoại, tên doanh nghiệp, email công việc, số lượng chứng từ/tháng
(dưới 1.000 · 1.000–5.000 · 5.000–20.000 · trên 20.000), chế độ kế toán áp dụng (TT200 / TT133 /
cần eCor tư vấn chọn). Chuyên viên tài chính liên hệ trong vòng 30 phút (giờ làm việc).
