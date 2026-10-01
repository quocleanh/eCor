# Bộ câu hỏi & trả lời mẫu (nạp vào Chatbase → Sources → Q&A)

Mỗi mục là một cặp Q&A. Câu trả lời đã viết đúng giọng trả khách, có thể dùng gần như nguyên văn.
Phần trong `[...]` là ghi chú nội bộ cho người cấu hình — **xóa trước khi nạp vào Chatbase.**

---

## A. Về eCor nói chung

**Q: eCor là gì?**
A: eCor là nền tảng SaaS Việt Nam hợp nhất 4 phân hệ vận hành trên một lõi dữ liệu duy nhất: quản lý kho (WMS), điều phối vận tải (TMS), bán hàng tại quầy (POS) và kế toán tự động (Account). Thay vì mua POS một nơi, phần mềm kho một nơi khác rồi đối chiếu bằng Excel, anh/chị có một hệ thống chạy thông suốt — bán hàng là trừ kho, xuất kho là sinh bút toán, COD về là gạch nợ.

**Q: eCor khác gì các phần mềm kho/bán hàng khác?**
A: Điểm khác lớn nhất là **một nguồn dữ liệu duy nhất**. Vì WMS, TMS, POS và kế toán dùng chung một hệ dữ liệu nên không có bước đồng bộ thủ công, không lệch số giữa kho và sổ sách, và AI học được bức tranh toàn chuỗi thay vì chỉ một mảnh. Ngoài ra POS chạy được **100% khi mất mạng** (kiến trúc Offline-First) và có thể triển khai dần từng module, không cần đổi toàn bộ hệ thống.

**Q: eCor đã có khách hàng nào dùng chưa? Cho em xem case study với.**
A: Em xin nói thật: eCor là nền tảng mới và hiện đang trong giai đoạn **nhận khách hàng dùng thử sớm**, nên bên em chưa công bố khách hàng tham chiếu. Các kịch bản trên website là **kịch bản minh họa** theo từng mô hình kinh doanh, không phải kết quả đã đo trên khách hàng thật. Bù lại, bên em sẵn sàng dựng demo đúng theo ngành và quy mô kho của anh/chị để anh/chị tự đánh giá — và khảo sát kho miễn phí. Anh/chị muốn em đặt lịch không?
[Đây là câu trả lời bắt buộc — không được bịa khách hàng.]

**Q: Các con số như 99% chính xác tồn kho, giảm 15% chi phí xăng dầu là thật không?**
A: Đó là **mục tiêu thiết kế** của hệ thống, chưa phải con số đã đo trên khách hàng thực tế — bên em ghi rõ điều này trên website. Kết quả thật phụ thuộc vào layout kho, chất lượng dữ liệu SKU và mức độ tuân thủ quy trình của đội ngũ. Nếu anh/chị cho em biết quy mô kho và sản lượng đơn hiện tại, chuyên viên sẽ lập bảng toán ROI sát với trường hợp của mình.

**Q: eCor có những module nào?**
A: 4 phân hệ trọng tâm: **WMS** (kho), **TMS** (vận tải), **POS** (bán hàng), **Account** (kế toán). Cùng hệ sinh thái mở rộng: ECOM (đồng bộ đa sàn), CRM (tích điểm, Zalo ZNS), HRM (lương), Mobile App, và giải pháp chuyên ngành **ecor Tiles** cho gạch ốp lát & vật liệu xây dựng.

**Q: Có bắt buộc mua cả bộ không, hay lấy từng module được?**
A: Lấy từng module được. Anh/chị bắt đầu với phân hệ đang cần nhất, AI chạy ngay trên dữ liệu sẵn có, rồi mở rộng sang module khác khi sẵn sàng. Các module bổ sung có thể bật/tắt bất kỳ lúc nào ngay trên hệ thống.

---

## B. Giá & hợp đồng

**Q: Giá bao nhiêu?**
A: Bên em có 3 gói (giá chưa gồm VAT, trả theo năm tiết kiệm 20% và miễn phí setup):
• **Starter** — 950.000 đ/tháng (trả năm) hoặc 1.190.000 đ/tháng: 1 kho + 1 điểm bán POS, 3 tài khoản.
• **Professional** — 2.550.000 đ/tháng (trả năm) hoặc 3.190.000 đ/tháng: tới 5 kho/chi nhánh, 15 tài khoản, có 3D slotting, Wave Picking, FEFO, TMS 50 chuyến/tháng, đồng bộ Shopee/TikTok/Lazada.
• **Enterprise** — báo giá tùy biến theo lượng đơn và đặc thù quy trình: không giới hạn kho và tài khoản, Multi-tenant, Open API ERP, Private Cloud/On-premise, SLA 99.5% có bồi thường.
Anh/chị cho em biết số kho, số điểm bán và sản lượng đơn/ngày, em gợi ý gói phù hợp nhất nhé.

**Q: Gói Starter có gì?**
A: 01 kho vật lý + 01 điểm bán POS, tối đa 03 tài khoản quản trị, quản lý nhập–xuất–chuyển kho tức thời, in mã vạch Code128/QR, app PDA/mobile quét barcode, điều phối tài xế qua app, hỗ trợ ticket & hotline giờ hành chính. Giá 950.000 đ/tháng khi trả theo năm (chưa VAT).

**Q: Gói Professional có gì hơn Starter?**
A: Toàn bộ Starter, cộng thêm: tới 05 kho & chi nhánh, 15 tài khoản phân quyền chi tiết, sơ đồ ô kệ định vị 3D (Slotting & Bin), Wave & Batch Picking, kiểm soát lô/hạn FIFO & FEFO, module TMS 50 chuyến/tháng, đồng bộ 2 chiều Shopee/TikTok Shop/Lazada, và hỗ trợ qua Hotline & Zalo trong giờ làm việc. 2.550.000 đ/tháng khi trả năm (chưa VAT).

**Q: Module bổ sung giá bao nhiêu?**
A: WMS Nâng cao (ô kệ 3D, cross-docking, serial/IMEI) **+900.000 đ/tháng** · TMS Điều phối xe (gom chuyến, GPS, xăng dầu, POD) **+1.200.000 đ/tháng** · POS Điểm bán **+450.000 đ/điểm/tháng** · Cổng kết nối ERP & Kế toán (MISA, SAP, Fast, Bravo) **+1.500.000 đ/tháng**. Tất cả chưa gồm VAT, bật/tắt được bất kỳ lúc nào.

**Q: Có giảm giá / chiết khấu không?**
A: Chính sách công khai là **trả theo năm tiết kiệm 20% và được miễn phí setup**. Với gói Professional trả năm và gói Enterprise, bên em còn **miễn phí gói onboarding chuẩn trị giá 15.000.000 đ** (đào tạo trực tuyến + thiết lập hệ thống). Ngoài các mức này em không tự quyết được — để em kết nối anh/chị với chuyên viên kinh doanh nhé.

**Q: Đổi gói khi công ty lớn lên được không?**
A: Hoàn toàn được. Anh/chị nâng cấp hoặc bổ sung thêm kho, xe, tài khoản bất kỳ lúc nào; phần chênh lệch được tự động tính bù trừ theo số ngày sử dụng thực tế còn lại trong chu kỳ.

**Q: Có phí ẩn, phí bảo trì không?**
A: Không. Bản vá lỗi và nâng cấp tính năng được cập nhật tự động qua Cloud, không phát sinh phí bảo trì ngầm. Các khoản cần biết trước chỉ gồm: phí thuê bao theo gói, module bổ sung nếu bật, và chi phí triển khai onsite nhiều ngày (nếu có, sẽ thỏa thuận minh bạch theo địa bàn).

**Q: Giá đã gồm VAT chưa?**
A: Giá niêm yết **chưa bao gồm VAT**.

**Q: Thanh toán thế nào, gia hạn ra sao?**
A: Theo chu kỳ tháng, năm hoặc hợp đồng khung nhiều năm. Trước **15 ngày** đáo hạn bên em gửi email và thông báo trên Dashboard; sau đáo hạn có thời hạn ân hạn để thanh toán trước khi hệ thống tạm khóa chiều ghi dữ liệu. Chi tiết điều khoản thanh toán, chuyên viên sẽ trao đổi cùng anh/chị.

---

## C. Dùng thử & triển khai

**Q: Có dùng thử miễn phí không?**
A: Có — **14 ngày miễn phí, đầy đủ tính năng, không cần thẻ tín dụng**. Anh/chị đăng ký tại ecor.vn/dang-ky. Nếu muốn có người hướng dẫn setup, em đặt lịch demo 30 phút qua Google Meet với chuyên viên giải pháp.

**Q: Triển khai mất bao lâu?**
A: Với kho tiêu chuẩn dưới 5.000 m², thời gian cấu hình layout ô kệ, kết nối máy quét và đưa vào vận hành thực tế trung bình **3 – 5 ngày làm việc**, và **không làm gián đoạn việc xuất nhập hàng ngày**. Quy mô 500–2.500 đơn/ngày khoảng 7–10 ngày; trên 5.000 đơn/ngày khoảng 2–3 tuần có onsite.

**Q: Triển khai gồm những gì?**
A: Nhập liệu danh mục SKU, thiết lập layout mã vị trí kệ, cấu hình thiết bị, và hướng dẫn nhân viên kho thao tác trực tiếp. Hình thức online kết hợp onsite 1 ngày. Mỗi khách hàng có một chuyên viên đồng hành suốt quá trình.

**Q: Nhân viên kho của em lớn tuổi, học có khó không?**
A: Giao diện PDA được thiết kế với chỉ dẫn màu trực quan, mục tiêu là nhân viên kho mới **làm việc được sau khoảng 30 phút** hướng dẫn. Thao tác chủ yếu là quét mã và làm theo chỉ dẫn trên máy, không phải nhớ mã hàng hay vị trí kệ.

**Q: Có cần mua thiết bị mới không?**
A: Không bắt buộc. Anh/chị dùng ngay **điện thoại Android sẵn có** của nhân viên để quét mã vạch qua camera. Khi muốn tối ưu tốc độ, bên em sẽ tư vấn dòng máy quét PDA phù hợp ngân sách.

**Q: eCor có chạy được với máy quét / PDA / máy in em đang có không?**
A: Có. Ứng dụng hỗ trợ toàn bộ thiết bị Android (Zebra, Honeywell, Datalogic, Sunmi, Urovo…), máy quét Bluetooth hoặc USB có dây, máy in nhiệt K80 và máy in nhãn (Xprinter, Godex), ngăn kéo tiền tự động và cân điện tử kết nối RS232. Cắm là chạy, không cần cài driver phức tạp. Anh/chị cho em model thiết bị cụ thể, kỹ sư sẽ xác nhận lại chính xác.

**Q: Dữ liệu cũ của em trên Excel chuyển qua được không?**
A: Được — quy trình triển khai có bước chuẩn hóa danh mục SKU và chuyển đổi dữ liệu kho bãi. Anh/chị gửi file hiện tại cho chuyên viên để bên em đánh giá và lên kế hoạch chuyển đổi, không làm gián đoạn bán hàng.

---

## D. WMS — kho

**Q: ecor WMS làm được gì?**
A: Quản lý vị trí hàng 3D theo Zone/Kệ/Tầng/Ngăn, gom đơn Wave & Batch Picking theo lộ trình ngắn nhất, kiểm soát lô & hạn dùng FIFO/FEFO với cảnh báo cận date 30–60–90 ngày, và kiểm kê cuốn chiếu (blind count) **không cần đóng cửa kho**. Quy trình chuẩn 5 bước: nhập kho → xếp vị trí → quản tồn & date → soạn & đóng gói → xuất & bàn giao.

**Q: Kiểm kê có phải đóng cửa kho không?**
A: Không. eCor dùng kiểm kê cuốn chiếu (Blind Cycle Counting) theo từng khu vực hoặc nhóm SKU ABC — kho vẫn xuất nhập bình thường. Hệ thống tự tạo phiếu điều chỉnh chênh lệch sau khi cấp quản lý phê duyệt. Kiểm kê mù còn giúp đảm bảo minh bạch của thủ kho.

**Q: Em bán hàng dễ hết hạn (thực phẩm, dược), eCor kiểm soát date thế nào?**
A: Hệ thống quản lý theo lô và **tự động ép xuất theo hạn dùng (FEFO — hàng hết hạn trước xuất trước)**, khóa không cho xuất lô mới trước lô cũ. Có cảnh báo cận date 30–60–90 ngày gửi tới bộ phận kinh doanh để đẩy bán kịp, và truy xuất nguồn gốc theo lô. Với kho lạnh còn có cảnh báo nhiệt độ qua cảm biến IoT.

**Q: Em làm chành xe / kho cho thuê nhiều chủ hàng, dùng được không?**
A: Rất phù hợp. eCor có kiến trúc **Multi-tenant**: quản lý nhiều chủ hàng trên cùng một giao diện, dữ liệu tách biệt, mỗi chủ hàng có **cổng Portal riêng** để tự tạo lệnh nhập/xuất và tra cứu tồn kho, phí. Hệ thống tự tính cước lưu kho theo CBM/ngày và xuất bảng kê billing — mục tiêu rút ngắn đáng kể thời gian chốt công nợ cuối tháng.

**Q: Làm sao tránh bán vượt tồn (overselling) giữa sàn và cửa hàng?**
A: WMS là nguồn tồn duy nhất, POS và các sàn đều trừ về cùng một chỗ, tốc độ đồng bộ mục tiêu **dưới 1 giây** qua webhook real-time. Khi có đơn, hệ thống khóa tồn an toàn ngay nên hàng đó không bị bán tiếp ở kênh khác.

---

## E. TMS — vận tải

**Q: ecor TMS làm được gì?**
A: AI gom đơn đa điểm và tối ưu tuyến (cân đối tải trọng, CBM, khung giờ mở cửa điểm nhận, **cảnh báo giờ cấm tải nội ô**), giám sát GPS thời gian thực, app tài xế iOS/Android có ký nhận **e-POD** và chụp ảnh hiện trường, theo dõi định mức nhiên liệu, lịch bảo dưỡng/đăng kiểm, và đối soát cước & COD tự động. Lập chuyến mục tiêu dưới 10 giây.

**Q: Xe em hay chạy rỗng chiều về.**
A: Đây là bài toán TMS giải trực tiếp: thuật toán gom đơn liên vùng và xếp dỡ 3D tối ưu không gian sàn, **mục tiêu lấp đầy 85% tải trọng**, kéo theo mục tiêu giảm 15% chi phí nhiên liệu và cước. Chuyên viên có thể chạy thử trên dữ liệu chuyến thật của anh/chị để ước lượng cụ thể.

**Q: Tài xế dùng gì? Có phải mua thiết bị cho tài xế không?**
A: Tài xế dùng **ecor Driver Mobile App** trên điện thoại cá nhân (iOS / Android) — nhận lệnh điều xe, bản đồ dẫn đường AI tránh kẹt, ký e-POD, chụp ảnh niêm phong thùng và báo cáo sự cố. Không cần thiết bị chuyên dụng.

**Q: eCor có kết nối GHN, GHTK, Viettel Post không?**
A: Có — bên em hướng tới tích hợp đẩy đơn và đồng bộ mã vận đơn 1-click sang **Viettel Post, GHTK, GHN, J&T Express, Ninja Van, SPX** khi vượt tải đội xe nhà. Việc kết nối chỉ diễn ra khi anh/chị chủ động kích hoạt bằng API Key của mình.

**Q: Đối soát COD với hãng vận chuyển mất cả tuần, eCor giúp được không?**
A: Được. Tiền COD được auto-match với bảng kê ngân hàng bằng 1 click, AI phát hiện lệch cước phí hoặc giữ tiền bất thường, rồi tự gạch nợ sang ecor Account. Mục tiêu giảm 50% thời gian đối soát — từ nhiều ngày xuống còn vài phút.

---

## F. POS — bán hàng

**Q: Mất mạng thì POS còn bán được không?**
A: Còn. ecor POS theo kiến trúc **Offline-First**: dữ liệu lưu trong cơ sở dữ liệu cục bộ (SQLite) nên anh/chị vẫn bán và in bill bình thường khi đứt cáp quang hay sập mạng; khi có kết nối lại, hệ thống tự khử trùng lặp và đồng bộ ngầm lên cloud. Rất phù hợp mặt bằng tầng hầm trung tâm thương mại hoặc khu kẹt sóng giờ cao điểm.

**Q: Thanh toán có hỗ trợ chuyển khoản QR không?**
A: Có — **VietQR động**: màn hình phụ hoặc bill tự sinh mã QR chứa chính xác số tiền và mã hóa đơn, không cần nhập tay, đối soát tự động qua Open API ngân hàng nên loại bỏ rủi ro bill chuyển khoản giả. Hỗ trợ cả thẻ tín dụng, MoMo, ZaloPay, ShopeePay và tiền mặt — chia nhiều hình thức trên cùng một đơn hàng.

**Q: Bán ở quầy có tự trừ kho tổng không?**
A: Có, tức thì và realtime. Mỗi hóa đơn trừ cả kho tổng và kho chi nhánh ngay khi xuất, nên không có chuyện lệch số hay bán vượt tồn. Nhân viên ở bất kỳ quầy nào cũng tra được tồn của toàn chuỗi bằng một phím bấm, và tạo phiếu điều chuyển hàng giữa các điểm bán ngay trên màn hình POS.

**Q: Mở thêm cửa hàng mới có phức tạp không?**
A: Mục tiêu dưới **30 phút cho một điểm bán**: cài danh mục, phân quyền nhân viên và cấu hình phần cứng bằng 1 click. Phí module POS là 450.000 đ/điểm/tháng (chưa VAT).

**Q: Có tích điểm khách hàng thân thiết không?**
A: Có — CRM 360°: nhận diện khách qua số điện thoại hoặc QR thành viên trên Zalo Mini App, tích điểm và thăng hạng thẻ (Silver/Gold/Diamond) realtime đồng nhất mọi chi nhánh, gửi hóa đơn và thông báo điểm qua **Zalo ZNS** (mục tiêu tiết kiệm 50% chi phí so với SMS). AI còn cá nhân hóa voucher sinh nhật và gợi ý sản phẩm theo lịch sử mua đa kênh.

---

## G. Kế toán

**Q: ecor Account có thay được phần mềm kế toán hiện tại không?**
A: ecor Account là phân hệ kế toán đầy đủ theo chuẩn **Thông tư 133 và 200**, gồm 8 phân hệ nghiệp vụ (tiền mặt/tiền gửi, bán hàng & công nợ AR, kho & giá vốn, chi phí vận chuyển & COD, tài sản & khấu hao, thuế & báo cáo, tổng hợp & ngân sách, đa tiền tệ & khế ước vay). Nếu anh/chị muốn giữ phần mềm hiện tại, bên em có cổng Open API đồng bộ 2 chiều với MISA AMIS, Fast, Bravo, SAP, Oracle NetSuite. Để chuyên viên tài chính xem luồng hạch toán hiện tại của mình rồi tư vấn phương án phù hợp nhé.

**Q: Hóa đơn điện tử có đúng chuẩn Thông tư 78 không?**
A: Có. Hệ thống kết nối trực tiếp **MISA meInvoice, VNPT, Viettel, BKAV**, phát hành HĐĐT tự động **có mã cơ quan thuế** theo đúng Thông tư 78 / Nghị định 123, xuất theo từng đơn hoặc gom cuối ngày, hỗ trợ hóa đơn khởi tạo từ máy tính tiền. Gửi hóa đơn cho khách qua email và Zalo ZNS tức thì, không bỏ sót đơn lẻ, không xuất trùng.

**Q: Kế toán em đang nhập tay 4-5 tiếng mỗi ngày.**
A: Đây đúng là bài toán ecor Account giải: bút toán **tự sinh từ giao dịch** — thủ kho quét mã hoàn tất đơn là hệ thống tự tạo phiếu nhập/xuất và định khoản (TK 156, 632, 511, 131) theo chuẩn TT133/TT200 trong vài giây. Mục tiêu tự động hóa **90%+** bút toán, và không còn sai lệch giữa thủ kho với kế toán.

**Q: Bao lâu mới có báo cáo lãi lỗ?**
A: Realtime. Báo cáo P&L, bảng cân đối phát sinh, lưu chuyển tiền tệ và biên lợi nhuận gộp theo ngành hàng/kênh bán/chi nhánh xem được ngay trên Mobile App và Web — gồm cả **lãi lỗ thuần sau phí sàn và phí vận chuyển**, không phải chờ cuối tháng.

---

## H. Kỹ thuật, API & bảo mật

**Q: eCor có API để em tích hợp hệ thống nội bộ không?**
A: Có — **RESTful API chuẩn OpenAPI 3.0**, xác thực Bearer Token, kèm Swagger và Postman collection tại docs.ecor.vn. Nhóm API chính: tồn kho & ô kệ (Inventory & Bin), đơn hàng & lệnh xuất (Orders & Shipments), và Webhook cảnh báo biến động tồn, trạng thái xe GPS. Môi trường **Sandbox có ngay** sau khi đăng ký dùng thử, kèm API Key và dữ liệu mẫu.

**Q: Rate limit API bao nhiêu?**
A: Starter **2.000 calls/phút**, Professional **10.000 calls/phút**, Enterprise (Dedicated Server) **không giới hạn**. Nếu anh/chị có kịch bản gọi đặc thù, để em kết nối với kỹ sư tích hợp.

**Q: eCor tích hợp được với SAP / MISA / Fast / Bravo không?**
A: Có. Open API và Webhook RESTful đồng bộ **tự động 2 chiều** với SAP, Oracle NetSuite, Microsoft Dynamics, MISA AMIS, Fast, Bravo và cả phần mềm nội bộ. Module "Cổng kết nối ERP & Kế toán" tính thêm 1.500.000 đ/tháng (chưa VAT).

**Q: Dữ liệu của em có an toàn không? Ai xem được?**
A: Dữ liệu được mã hóa **AES-256 khi lưu trữ** và **TLS 1.3 khi truyền tải**, mỗi doanh nghiệp có **schema cơ sở dữ liệu riêng biệt** với phân quyền Row-Level Security nên không có rò rỉ chéo giữa các khách hàng. Có tường lửa ứng dụng, giám sát truy vấn bất thường và sao lưu tự động định kỳ lưu tách biệt. Quan trọng nhất: **anh/chị là chủ sở hữu duy nhất của dữ liệu** — eCor không sở hữu, không sao chép, không thương mại hóa và không chia sẻ cho bên thứ ba khi chưa có sự đồng ý của anh/chị.

**Q: eCor có chứng chỉ ISO 27001 không?**
A: Bên em **áp dụng các thực hành quản lý an toàn thông tin theo chuẩn tham chiếu ISO/IEC 27001, nhưng chưa có chứng nhận độc lập** — sẽ đánh giá độc lập khi đủ điều kiện. Bên em nói rõ điều này thay vì nói quá. Nếu Hội đồng CNTT của anh/chị cần thẩm định, bên em sẵn sàng ký NDA riêng và cung cấp hồ sơ năng lực an ninh kỹ thuật.

**Q: Dữ liệu đặt ở đâu?**
A: Trên hạ tầng đám mây của nhà cung cấp uy tín, tuân thủ Luật An ninh mạng Việt Nam và Nghị định 13/2023/NĐ-CP. Hiện **ưu tiên đặt tại Việt Nam** (hạ tầng hợp tác cùng VNPT Cloud và Viettel IDC); vị trí cụ thể sẽ nêu rõ trong hợp đồng dịch vụ.

**Q: Nếu em ngừng dùng eCor thì dữ liệu của em thế nào?**
A: Anh/chị lấy được toàn bộ dữ liệu. Quy trình: trong 10 ngày đầu gửi thông báo và đối soát công nợ; **ngày 11–30 hệ thống mở cổng Data Extraction Toolkit** để anh/chị tải toàn bộ lịch sử đơn hàng, tồn kho, hồ sơ nhà cung ứng dưới dạng file nén mã hóa AES-256; sau ngày 45 bản sao lưu trên cloud được xóa vĩnh viễn. Ngoài ra trong lúc đang dùng, anh/chị xuất dữ liệu ra .xlsx/.csv/.json bất kỳ lúc nào, không hạn chế số lần.

**Q: Em muốn xóa dữ liệu khách hàng cũ thì sao?**
A: Anh/chị có quyền xóa (Right to Erasure) theo Nghị định 13/2023: gửi yêu cầu bằng văn bản hoặc qua API để xóa hồ sơ khách mua lẻ, đơn hàng nhạy cảm hoặc tài khoản nhân viên đã nghỉ — eCor hoàn tất **trong 72 giờ làm việc**.

---

## I. Hỗ trợ & SLA

**Q: Hỗ trợ kỹ thuật thế nào? Có hỗ trợ ngoài giờ không?**
A: Hỗ trợ trong giờ làm việc **Thứ Hai – Thứ Bảy, 8:00 – 18:00** qua Hotline **097 8673867**, Zalo và email contact@ecor.vn. Sự cố khẩn cấp ngoài giờ anh/chị vẫn gọi hotline để được ưu tiên xử lý. Gói Enterprise có nhóm Zalo riêng và chuyên viên phụ trách riêng. Có cả hỗ trợ onsite theo lịch hẹn, ưu tiên khu vực TP.HCM.

**Q: Nếu hệ thống sập giữa lúc em đang xuất hàng thì sao?**
A: Đó là sự cố **cấp P1**: phản hồi **dưới 1 giờ** trong giờ làm việc, giải pháp tạm **dưới 4 giờ**, giải quyết triệt để **dưới 24 giờ**. Quy trình nội bộ: hệ thống giám sát cảnh báo kỹ sư trực trong 0–5 phút, lập War-Room trong 15–60 phút, phục hồi nhanh trong dưới 4 giờ, và gửi biên bản phân tích nguyên nhân gốc rễ trong 3 ngày làm việc. Anh/chị gọi ngay hotline 097 8673867 và nói rõ là sự cố P1 nhé.

**Q: SLA uptime bao nhiêu? Không đạt thì sao?**
A: Cam kết **99.5% uptime mỗi tháng dương lịch**. Nếu không đạt, anh/chị được bồi hoàn dịch vụ tự động: uptime 99.0–dưới 99.5% được **10%** cước tháng; 95.0–dưới 99.0% được **25%**; dưới 95.0% được **50%** (khấu trừ kỳ sau hoặc hoàn tiền tài khoản). Không tính vào uptime: bảo trì định kỳ đã báo trước 7 ngày, sự cố cáp quang biển quốc tế và thiên tai bất khả kháng. Anh/chị theo dõi uptime 90 ngày tại status.ecor.vn.

**Q: Bảo trì hệ thống có làm gián đoạn bán hàng không?**
A: Bảo trì định kỳ nằm trong khung **01:00 – 04:00 sáng Chủ Nhật**, thông báo trước 7 ngày, áp dụng Zero-Downtime Deployment và **tối đa 120 phút mỗi quý**. Ngoài ra POS vẫn bán được khi mất kết nối nên quầy không bị dừng.

**Q: Cập nhật tính năng có mất phí không?**
A: Không. Hotfix sửa lỗi miễn phí 100%, bản vá bảo mật định kỳ, và tính năng nâng cao được tự động cập nhật qua Cloud không phát sinh phí ẩn. Bản phát hành đều đặn mỗi thứ Ba hàng tuần.

**Q: Có bảo hành không?**
A: Có — **30 ngày bảo hành**, hỗ trợ hoàn tiền theo điều khoản hợp đồng nếu hệ thống không đạt tiêu chuẩn nghiệp vụ đã thống nhất giữa hai bên.

---

## J. Ngành gạch (ecor Tiles)

**Q: Em bán gạch ốp lát, eCor có gì riêng không?**
A: Có — **ecor Tiles**, bộ giải pháp AI & AR riêng cho ngành gạch & VLXD: (1) AI quét ảnh viên gạch khách gửi qua Zalo để nhận diện vân và tra ngay mã tương đồng trong kho WMS; (2) AI phối cảnh 3D trong vài giây để khách thấy gạch trên sàn nhà mình trước khi cọc; (3) **App AR LiDAR** quét sàn/tường bằng iPhone/iPad Pro, tự đo m², loại trừ cửa và cột, tính số thùng đã bù hao hụt cắt góc 5–10%; (4) Chatbot AI báo giá 24/7 trên Zalo OA, Messenger, Website. Tất cả nối thẳng vào kho WMS theo **lô nung và tông màu** — chấm dứt giao nhầm lô lệch tông.

**Q: App AR của ecor Tiles chạy trên máy nào?**
A: iOS / iPadOS / Android, tối ưu cho iPhone, iPad Pro, kiosk showroom và web mobile. Tính năng quét LiDAR đo diện tích cần máy có cảm biến LiDAR (iPhone/iPad Pro dòng cao). Độ chính xác mục tiêu trên 95%, tốc độ render phối cảnh mục tiêu 5–10 giây.

**Q: Kiến trúc sư có dùng được không?**
A: Có. Kiến trúc sư và tổng thầu dùng app LiDAR đo nhanh công trình, rồi tải map texture gạch **PBR 4K (Diffuse, Normal, Roughness)** nạp thẳng vào Lumion, 3ds Max, Blender — màu khớp thực tế khi ra công trình, kèm tự động bóc tách vật tư.

**Q: ecor Tiles giá bao nhiêu?**
A: Giải pháp ngành gạch có báo giá riêng tùy cấu phần anh/chị chọn (quét mẫu, 3D render, AR LiDAR app, chatbot — hoặc trọn bộ) và quy mô showroom. Anh/chị để lại số điện thoại/Zalo, chuyên viên sẽ liên hệ trong khoảng 30 phút giờ làm việc để báo giá sát nhu cầu.

---

## K. Câu hỏi khó / cần chuyển người thật

**Q: Cho em số liệu so sánh eCor với KiotViet / Sapo / Haravan.**
A: Em không so sánh trực tiếp với sản phẩm của đơn vị khác được. Em chỉ nói về eCor: điểm mạnh là 4 phân hệ WMS–TMS–POS–Kế toán trên **một lõi dữ liệu duy nhất**, POS chạy offline 100%, và kiến trúc Multi-tenant cho chành xe/3PL. Cách chắc nhất là anh/chị dùng thử 14 ngày miễn phí và so với hệ thống đang dùng trên chính dữ liệu của mình.

**Q: Em cần hợp đồng, báo giá có dấu, hoặc NDA.**
A: Phần này cần bộ phận kinh doanh và pháp chế xử lý. Anh/chị gọi **097 8673867** hoặc gửi email **contact@ecor.vn** kèm tên công ty và mã số thuế, bên em sẽ chuẩn bị hồ sơ. Bên em cũng sẵn sàng ký NDA độc lập và cung cấp hồ sơ năng lực an ninh kỹ thuật nếu Hội đồng CNTT của anh/chị cần thẩm định.

**Q: Hệ thống em đang gặp lỗi / mất dữ liệu / không xuất được đơn.**
A: Anh/chị gọi ngay hotline **097 8673867** và nói đây là **sự cố P1** để được ưu tiên — cam kết phản hồi dưới 1 giờ trong giờ làm việc, giải pháp tạm dưới 4 giờ. Nếu tiện, anh/chị gửi kèm ảnh màn hình và mã đơn qua contact@ecor.vn để kỹ sư khoanh vùng nhanh hơn.

**Q: eCor có tính năng [X] không? (tính năng không có trong tài liệu)**
A: Phần này em chưa có thông tin chính xác nên không dám trả lời chắc. Để em kết nối anh/chị với chuyên viên giải pháp để xác nhận và xem có nằm trong roadmap không — anh/chị cho em số điện thoại/Zalo, hoặc gọi 097 8673867.

**Q: Em muốn cài trên máy chủ của công ty em (on-premise).**
A: Gói **Enterprise** có tùy chọn hạ tầng **Private Cloud hoặc On-premise**, kèm SLA 99.5% có bồi thường tài chính và kỹ sư giải pháp chuyên trách 1-1. Đây là báo giá tùy biến theo lượng đơn và đặc thù quy trình — để em chuyển anh/chị cho chuyên viên giải pháp doanh nghiệp nhé.
