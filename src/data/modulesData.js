/**
 * eCor Modules Data — Single Source of Truth cho 8 Phân Hệ
 */

export const modulesData = {
  pos: {
    id: 1,
    slug: 'pos',
    code: 'POS',
    title: 'POS — Điểm Bán Hàng Tại Quầy',
    shortName: 'POS Bán Hàng',
    tagline: 'Bán Hàng Tại Quầy Siêu Tốc — Không Lo Nghẽn Đơn, Rớt Mạng',
    heroDesc: 'Phân hệ bán hàng chuyên nghiệp tại quầy với kiến trúc Offline-First độc quyền, quét mã vạch 0.2 giây, tích hợp VietQR động và chốt ca đối soát tự động.',
    badge: 'Module 01',
    themeColor: 'blue',
    icon: '🛒',
    pains: [
      {
        icon: '⏳',
        title: 'Ùn tắc quầy giờ cao điểm',
        desc: 'Phần mềm chậm khiến khách hàng phải xếp hàng dài, dễ xảy ra nhầm lẫn giá và làm mất khách quen.'
      },
      {
        icon: '⚡',
        title: 'Đứng hình khi mất kết nối mạng',
        desc: 'Mạng chập chờn hoặc rớt kết nối làm quầy thu ngân tê liệt, không thể mở đơn hay in hóa đơn cho khách.'
      },
      {
        icon: '📉',
        title: 'Lệch tiền két & thất thoát cuối ca',
        desc: 'Bàn giao ca thủ công bằng giấy bút rất khó đối soát tiền mặt, tiền chuyển khoản và tiền ví điện tử.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Bán hàng & Quét mã siêu tốc (0.2s)',
        desc: 'Tương thích mọi đầu đọc barcode, camera điện thoại hoặc máy POS cảm ứng. Tìm kiếm tức thời theo tên, SKU, serial number.'
      },
      {
        num: '02',
        title: 'Thanh toán đa phương thức & QR Động',
        desc: 'Tích hợp VietQR động tự khớp tiền, quẹt thẻ ngân hàng, ví MoMo/ZaloPay và tiền mặt. Khách quét là máy tự nhận bill.'
      },
      {
        num: '03',
        title: 'Cơ chế Offline-First độc quyền',
        desc: 'Mất mạng Internet vẫn bán hàng và in bill 100%. Dữ liệu tự động đồng bộ hóa lên đám mây ngay khi có mạng trở lại.'
      },
      {
        num: '04',
        title: 'Quản lý ca làm & Chốt két tự động',
        desc: 'Theo dõi số dư đầu ca, ghi nhận chi phí tại quầy, đối chiếu tiền thực thu và ngăn chặn tuyệt đối thất thoát tiền két.'
      },
      {
        num: '05',
        title: 'Tích điểm thành viên & Khuyến mãi',
        desc: 'Nhập số điện thoại là nhận diện ngay khách quen, hiển thị điểm tích lũy và gợi ý voucher phù hợp để áp dụng tức thì.'
      },
      {
        num: '06',
        title: 'Xuất HĐĐT trực tiếp từ máy tính tiền',
        desc: 'Liên kết trực tiếp phân hệ Kế toán để xuất hóa đơn điện tử có mã cơ quan thuế hợp chuẩn Thông tư 78/Nghị định 123.'
      }
    ],
    metrics: [
      { value: '3 Giây', label: 'Thời gian hoàn tất 1 hóa đơn' },
      { value: '0%', label: 'Sai lệch tiền két giao ca' },
      { value: '+40%', label: 'Tốc độ phục vụ giờ cao điểm' },
      { value: '100%', label: 'Đồng bộ tồn kho real-time với WMS' }
    ],
    integrations: [
      { target: 'wms', label: 'WMS Kho Vận', desc: 'Trừ tồn kho ngay khi bill vừa in, đảm bảo số liệu trên máy quét PDA và tồn sàn luôn trùng khớp 100%.' },
      { target: 'crm', label: 'CRM Khách Hàng', desc: 'Ghi nhận lịch sử mua hàng, tự động tích điểm và kích hoạt tin nhắn Zalo ZNS cảm ơn sau khi thanh toán.' },
      { target: 'ke-toan', label: 'Account Kế Toán', desc: 'Mỗi bill POS tự động sinh chứng từ thu tiền, đối soát tài khoản ngân hàng và sẵn sàng xuất HĐĐT tức thời.' }
    ],
    faqs: [
      {
        q: 'POS eCor có dùng được trên máy tính bảng hoặc iPad không?',
        a: 'Có. POS eCor hỗ trợ chạy mượt mà trên trình duyệt web của mọi thiết bị: máy tính Windows, máy POS cảm ứng 2 màn hình, iPad, máy tính bảng Android và cả điện thoại thông minh.'
      },
      {
        q: 'Tôi chỉ muốn dùng mỗi POS mà không dùng các module khác có được không?',
        a: 'Hoàn toàn được. Bạn có thể đăng ký gói POS đơn lẻ để bán hàng tại cửa hàng. Khi cần mở thêm website bán hàng hoặc kết nối sàn TMĐT, bạn chỉ cần bấm kích hoạt thêm module mà không phải nhập lại danh mục sản phẩm.'
      }
    ]
  },

  ecom: {
    id: 2,
    slug: 'ecom',
    code: 'ECOM',
    title: 'ECOM — Website Bán Hàng & Đa Sàn TMĐT',
    shortName: 'ECOM Web & Sàn',
    tagline: 'Website Bán Hàng & Kết Nối Đa Sàn TMĐT — Không Lo Hủy Đơn Lệch Tồn',
    heroDesc: 'Xây dựng website bán lẻ chuẩn SEO tốc độ cao kết hợp đồng bộ 2 chiều tự động với Shopee, TikTok Shop, Lazada từ một trung tâm quản lý duy nhất.',
    badge: 'Module 02',
    themeColor: 'cyan',
    icon: '🌐',
    pains: [
      {
        icon: '🚫',
        title: 'Bị sàn phạt vì bán vượt tồn kho',
        desc: 'Đơn sàn nổ nhưng kho vật lý đã bán hết tại quầy, buộc phải hủy đơn và bị đánh sao quả tạ giảm hiển thị gian hàng.'
      },
      {
        icon: '📑',
        title: 'Sửa giá & tồn kho bằng tay mệt mỏi',
        desc: 'Mỗi đợt Flash Sale phải đăng nhập 5-10 shop khác nhau để cập nhật từng mã hàng, mất hàng giờ đồng hồ và dễ nhầm giá.'
      },
      {
        icon: '📉',
        title: 'Phụ thuộc hoàn toàn vào sàn TMĐT',
        desc: 'Không có kênh website thương hiệu riêng để giữ chân data khách hàng, chịu phí sàn tăng cao liên tục.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Website bán lẻ chuẩn SEO siêu tốc',
        desc: 'Tối ưu Core Web Vitals, tải trang dưới 1 giây, tương thích di động hoàn hảo và tích hợp sẵn cấu trúc schema sản phẩm.'
      },
      {
        num: '02',
        title: 'Đồng bộ tự động Shopee, TikTok, Lazada',
        desc: 'Kết nối API chính thức. Đồng bộ sản phẩm, giá bán, tồn kho và kéo toàn bộ đơn hàng về xử lý tập trung.'
      },
      {
        num: '03',
        title: 'Cổng thanh toán online tích hợp sẵn',
        desc: 'Hỗ trợ VNPay, MoMo, ZaloPay, Thẻ tín dụng và quét mã VietQR động tự động xác nhận đơn không cần chụp bill.'
      },
      {
        num: '04',
        title: 'Quản lý chiến dịch Flash Sale & Voucher',
        desc: 'Thiết lập mã giảm giá theo khung giờ, freeship, combo mua nhiều giảm sâu và landing page sự kiện tự động.'
      },
      {
        num: '05',
        title: 'Phân bổ tồn kho an toàn (Safety Stock)',
        desc: 'Giữ lại lượng tồn dự phòng tại cửa hàng vật lý, tránh tình trạng đơn online vét sạch hàng quầy vào giờ mở cửa.'
      },
      {
        num: '06',
        title: 'Đẩy đơn tự động sang WMS & TMS',
        desc: 'Đơn hàng online vừa phát sinh sẽ chuyển ngay thành danh sách nhặt hàng trên máy quét PDA kho và tự tạo vận đơn.'
      }
    ],
    metrics: [
      { value: '0.5s', label: 'Tốc độ đồng bộ tồn kho 2 chiều' },
      { value: '0%', label: 'Tỷ lệ hủy đơn sàn do lệch tồn' },
      { value: '+250%', label: 'Tăng trưởng doanh thu bán hàng online' },
      { value: '1 Màn hình', label: 'Quản lý toàn bộ các gian hàng đa sàn' }
    ],
    integrations: [
      { target: 'wms', label: 'WMS Kho Vận', desc: 'Đơn hàng online gom tự động theo danh sách Pick-list tối ưu lộ trình di chuyển trong kho cho nhân viên lấy hàng.' },
      { target: 'tms', label: 'TMS Vận Chuyển', desc: 'Bắn đơn trực tiếp sang GHTK/GHN/Viettel Post, in mã vận đơn chuẩn kích thước tem nhiệt dán gói hàng ngay.' },
      { target: 'ke-toan', label: 'Account Kế Toán', desc: 'Tự động tính phí hoa hồng sàn, phí thanh toán, phí freeship extra để hạch toán lợi nhuận ròng chính xác cho từng đơn.' }
    ],
    faqs: [
      {
        q: 'Tôi đã có website WordPress/WooCommerce hoặc Haravan thì có kết nối được không?',
        a: 'Có. eCor cung cấp hệ thống Open API và webhook linh hoạt giúp đồng bộ tồn kho và đơn hàng 2 chiều với bất kỳ nền tảng website nào bạn đang sử dụng.'
      },
      {
        q: 'Khi livestream trên TikTok Shop nổ hàng trăm đơn cùng lúc thì hệ thống có bị treo không?',
        a: 'Không. eCor được xây dựng trên hạ tầng đám mây có khả năng tự động co giãn (auto-scaling), chịu tải hàng chục nghìn đơn hàng đổ về cùng một thời điểm.'
      }
    ]
  },

  wms: {
    id: 3,
    slug: 'wms',
    code: 'WMS',
    title: 'WMS — Quản Trị Kho Hàng & PDA/RFID',
    shortName: 'WMS Kho Vận',
    tagline: 'Quản Trị Kho Vận Thông Minh — Chuẩn Hóa PDA & Công Nghệ RFID',
    heroDesc: 'Quản lý vị trí ô kệ chi tiết, kiểm kho không dừng bán bằng máy quét chuyên dụng PDA và công nghệ RFID, quy trình Pick-Pack-Ship chuẩn mực.',
    badge: 'Module 03',
    themeColor: 'indigo',
    icon: '📦',
    pains: [
      {
        icon: '🔍',
        title: 'Mất cả tiếng đồng hồ để tìm hàng',
        desc: 'Không có định vị ô kệ rõ ràng, nhân viên mới vào kho như lạc vào mê cung làm chậm trễ tiến độ đóng gói.'
      },
      {
        icon: '📦',
        title: 'Đóng gói nhầm mã, lệch size sản phẩm',
        desc: 'Giao nhầm hàng khiến tỷ lệ hoàn hàng tăng cao, vừa tốn chi phí vận chuyển 2 chiều vừa làm mất uy tín thương hiệu.'
      },
      {
        icon: '💸',
        title: 'Tồn đọng vốn & hàng hóa hết hạn sử dụng',
        desc: 'Không theo dõi được tuổi thọ tồn kho (FIFO/FEFO), hàng mới đè lên hàng cũ dẫn tới hỏng hóc hoặc cận date phải hủy.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Kiểm kê bằng máy PDA & Công nghệ RFID',
        desc: 'Tương thích mọi máy quét Android chuyên dụng (Zebra, Honeywell, Chainway) và sóng RFID, quét hàng loạt không cần nhìn trực diện tem.'
      },
      {
        num: '02',
        title: 'Quản lý vị trí ô kệ (Dãy - Kệ - Tầng - Ô)',
        desc: 'Định vị chính xác từng SKU nằm ở vị trí nào. Hệ thống tự vẽ đường đi ngắn nhất trong kho để nhân viên nhặt hàng nhanh nhất.'
      },
      {
        num: '03',
        title: 'Quy trình Pick - Pack - Ship chuẩn hóa',
        desc: 'Nhặt hàng theo đợt (Wave picking), quét barcode kiểm tra trước khi đóng thùng ngăn chặn 100% việc gửi nhầm sản phẩm.'
      },
      {
        num: '04',
        title: 'Quản lý đa kho & Điều chuyển nội bộ',
        desc: 'Kiểm soát tập trung kho tổng, kho trung chuyển và kho cửa hàng. Xuất nhập chuyển kho có biên bản bàn giao điện tử minh bạch.'
      },
      {
        num: '05',
        title: 'Cảnh báo ngưỡng tồn kho an toàn',
        desc: 'Tự động tính toán tốc độ bán để gửi thông báo đặt hàng bổ sung (Re-order point), không bao giờ lo đứt hàng bán chạy.'
      },
      {
        num: '06',
        title: 'Quản lý Lô & Hạn sử dụng (FEFO/FIFO)',
        desc: 'Ưu tiên xuất trước các lô hàng cận date, quản lý serial/IMEI cho ngành điện máy và mỹ phẩm, thực phẩm.'
      }
    ],
    metrics: [
      { value: '99.8%', label: 'Độ chính xác tồn kho thực tế' },
      { value: '-70%', label: 'Thời gian soạn hàng & đóng gói' },
      { value: '0 Giờ', label: 'Thời gian dừng bán khi kiểm kho' },
      { value: '0%', label: 'Tỷ lệ nhặt nhầm mẫu hoặc sai size' }
    ],
    integrations: [
      { target: 'pos', label: 'POS Điểm Bán', desc: 'Mỗi khi thu ngân quét mã tính tiền, tồn kho tại kho chi nhánh tự động trừ tức thời.' },
      { target: 'tms', label: 'TMS Vận Chuyển', desc: 'Hàng vừa đóng gói xong sẽ được quét mã bàn giao cho shipper bằng biên bản điện tử chống thất thoát.' },
      { target: 'ke-toan', label: 'Account Kế Toán', desc: 'Tự động tính giá vốn hàng bán (COGS) bình quân gia quyền chuyển thẳng vào sổ sách kế toán.' }
    ],
    faqs: [
      {
        q: 'Doanh nghiệp tôi chưa có máy PDA thì có dùng được WMS eCor không?',
        a: 'Hoàn toàn được. eCor WMS cung cấp ứng dụng chạy trực tiếp trên bất kỳ điện thoại thông minh Android/iOS nào, dùng chính camera điện thoại để quét mã vạch kiểm kho.'
      },
      {
        q: 'Khi kiểm kho có cần phải đóng cửa hàng không?',
        a: 'Không cần. eCor WMS hỗ trợ kiểm kê cuốn chiếu theo từng khu vực hoặc từng nhóm ngành hàng trong khi cửa hàng vẫn mở cửa bán hàng bình thường.'
      }
    ]
  },

  tms: {
    id: 4,
    slug: 'tms',
    code: 'TMS',
    title: 'TMS — Quản Lý Vận Chuyển & COD',
    shortName: 'TMS Vận Chuyển',
    tagline: 'Quản Lý Vận Chuyển Đột Phá — In Bill Hàng Loạt & Đối Soát COD',
    heroDesc: 'Kết nối tự động các hãng vận chuyển hàng đầu (GHTK, GHN, Viettel Post, J&T). Tự động đẩy đơn, in 500 vận đơn/phút và đối soát tiền thu hộ COD minh bạch.',
    badge: 'Module 04',
    themeColor: 'emerald',
    icon: '🚚',
    pains: [
      {
        icon: '📑',
        title: 'Gõ từng đơn sang app vận chuyển',
        desc: 'Nhân viên mất hàng giờ mỗi ngày để copy paste địa chỉ sang app bưu điện, thường xuyên gõ sai số nhà làm đơn giao trễ.'
      },
      {
        icon: '💸',
        title: 'Mất tiền COD thu hộ mà không hề hay biết',
        desc: 'Các hãng vận chuyển chuyển khoản theo đợt dồn cục, nếu không đối soát từng mã đơn rất dễ bị sót tiền hoặc bị trừ phí ảo.'
      },
      {
        icon: '📦',
        title: 'Tỷ lệ hoàn hàng cao không cứu được đơn',
        desc: 'Không theo dõi được các đơn giao thất bại lần 1 kịp thời để đội ngũ CSKH gọi điện hỗ trợ khách nhận hàng.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Kết nối đa đơn vị vận chuyển hàng đầu',
        desc: 'Tích hợp sẵn GHTK, GHN, Viettel Post, VNPost, J&T. Tự động so sánh giá cước và thời gian giao hàng để chọn hãng tối ưu.'
      },
      {
        num: '02',
        title: 'In hàng loạt 500 vận đơn chỉ trong 1 phút',
        desc: 'Tương thích mọi máy in nhiệt. Chọn toàn bộ danh sách đơn hàng và bấm 1 nút là in xong toàn bộ nhãn vận chuyển kèm mã vạch.'
      },
      {
        num: '03',
        title: 'Theo dõi hành trình đơn real-time',
        desc: 'Cập nhật trạng thái liên tục: Lấy hàng, Đang trung chuyển, Đang phát, Giao lại, Giao thành công hay Hoàn hàng.'
      },
      {
        num: '04',
        title: 'Đối soát tiền COD tự động 100%',
        desc: 'Tự động so khớp biên bản chuyển khoản của hãng ship với số liệu đơn hàng trong hệ thống, phát hiện ngay đơn bị giữ tiền.'
      },
      {
        num: '05',
        title: 'Cảnh báo giao hàng thất bại để cứu đơn',
        desc: 'Gửi cảnh báo ngay khi bưu tá báo giao không thành công lần 1 để nhân viên gọi điện can thiệp trước khi đơn bị hoàn về.'
      },
      {
        num: '06',
        title: 'Quản lý đội xe giao hàng nội bộ',
        desc: 'Phân bổ tuyến giao cho shipper riêng của shop, định vị vị trí giao hàng và tự động tính tiền công theo chuyến.'
      }
    ],
    metrics: [
      { value: '1 Phút', label: 'Thời gian in xong 500 nhãn vận đơn' },
      { value: '0 Đồng', label: 'Thất thoát tiền thu hộ COD' },
      { value: '-40%', label: 'Giảm tỷ lệ đơn hàng bị hoàn về' },
      { value: '97.6%', label: 'Tỷ lệ giao hàng thành công' }
    ],
    integrations: [
      { target: 'wms', label: 'WMS Kho Vận', desc: 'Quét mã gói hàng để gom theo bưu cục của nhà xe, in biên bản bàn giao có chữ ký điện tử của shipper.' },
      { target: 'ke-toan', label: 'Account Kế Toán', desc: 'Tiền thu hộ COD các hãng vận chuyển chuyển khoản về ngân hàng được tự động gạch nợ đơn hàng.' },
      { target: 'crm', label: 'CRM Khách Hàng', desc: 'Tự động gửi tin nhắn Zalo ZNS kèm link tra cứu hành trình khi đơn hàng xuất kho và khi shipper chuẩn bị giao đến.' }
    ],
    faqs: [
      {
        q: 'Tôi có được dùng tài khoản hợp đồng riêng đã ký với GHTK/GHN không?',
        a: 'Có. eCor TMS cho phép bạn nhập trực tiếp mã Token tài khoản doanh nghiệp của bạn với các hãng vận chuyển để hưởng nguyên vẹn các chính sách chiết khấu cước riêng của bạn.'
      },
      {
        q: 'Nếu khách hàng yêu cầu đổi địa chỉ nhận hàng sau khi đã in bill thì sao?',
        a: 'Bạn có thể chỉnh sửa địa chỉ và số điện thoại trực tiếp trên giao diện eCor TMS, hệ thống sẽ tự động gọi API sang hãng vận chuyển để cập nhật thông tin đơn hàng.'
      }
    ]
  },

  hrm: {
    id: 5,
    slug: 'hrm',
    code: 'HRM',
    title: 'HRM — Quản Lý Nhân Sự & Hoa Hồng KPI',
    shortName: 'HRM Nhân Sự',
    tagline: 'Quản Lý Nhân Sự Chuỗi — Tự Động Tính Hoa Hồng Từ Doanh Số POS',
    heroDesc: 'Xếp ca làm linh hoạt cho chuỗi cửa hàng, chấm công định vị GPS/khuôn mặt chống gian lận và tự động tính hoa hồng bán hàng chính xác từ bill POS.',
    badge: 'Module 05',
    themeColor: 'amber',
    icon: '👥',
    pains: [
      {
        icon: '⏳',
        title: 'Mất hàng tuần rà soát bill để tính hoa hồng',
        desc: 'Kế toán phải xuất từng file Excel từ POS, lọc thủ công mã nhân viên tư vấn, rất dễ nhầm lẫn hoặc sót đơn trả hàng.'
      },
      {
        icon: '👥',
        title: 'Chấm công hộ & gian lận giờ làm',
        desc: 'Nhân viên quẹt thẻ giùm nhau, đi muộn về sớm làm giảm chất lượng phục vụ tại cửa hàng trong khi quỹ lương vẫn chi trả đủ.'
      },
      {
        icon: '⚡',
        title: 'Xếp ca làm chồng chéo, thiếu người',
        desc: 'Đổi ca qua tin nhắn Zalo khiến đến giờ mở cửa mới phát hiện thiếu thu ngân hoặc không có người trông kho.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Tự tính hoa hồng bán hàng trực tiếp từ POS',
        desc: 'Hỗ trợ công thức thưởng linh hoạt: % doanh số, thưởng theo món sản phẩm khó bán hoặc bậc thang doanh số theo tháng.'
      },
      {
        num: '02',
        title: 'Chấm công GPS & Khuôn mặt chống gian lận',
        desc: 'Nhân viên phải có mặt đúng bán kính vị trí cửa hàng mới chấm công được trên app điện thoại.'
      },
      {
        num: '03',
        title: 'Xếp ca linh hoạt (Ca xoay, Ca gãy, Part-time)',
        desc: 'Xếp ca cho nhân viên sinh viên bán thời gian dễ dàng. Nhân viên nhận lịch trên app và có thể xin đổi ca trực tuyến.'
      },
      {
        num: '04',
        title: 'Phân quyền chặt chẽ theo chức danh',
        desc: 'Cửa hàng trưởng chỉ duyệt chiết khấu tối đa 15%, thu ngân không xem được giá vốn, nhân viên kho chỉ xem lệnh soạn hàng.'
      },
      {
        num: '05',
        title: 'Đánh giá KPI năng suất nhân viên kho & shipper',
        desc: 'Đo lường năng suất dựa trên số kiện hàng đóng trong ngày, tỷ lệ nhặt hàng chuẩn xác và tỷ lệ giao đơn thành công.'
      },
      {
        num: '06',
        title: 'Hồ sơ nhân sự điện tử & Hợp đồng lao động',
        desc: 'Lưu trữ thông tin bảo hiểm, hợp đồng, ngày phép năm. Tự động cảnh báo khi nhân viên sắp hết hạn thử việc hoặc hợp đồng.'
      }
    ],
    metrics: [
      { value: '100%', label: 'Độ chính xác số liệu tính hoa hồng' },
      { value: '1 Ngày', label: 'Thời gian chốt lương toàn bộ chuỗi' },
      { value: '0 Trường hợp', label: 'Chấm công hộ hay đi trễ lọt lưới' },
      { value: '+25%', label: 'Động lực bán hàng của nhân viên' }
    ],
    integrations: [
      { target: 'pos', label: 'POS Điểm Bán', desc: 'Dữ liệu doanh số từng ca trực của nhân viên được đồng bộ tự động để tính điểm thi đua và hoa hồng thưởng nóng.' },
      { target: 'ke-toan', label: 'Account Kế Toán', desc: 'Bảng lương đã duyệt tự động chuyển sang phân hệ Kế toán để ghi nhận chi phí nhân công và xuất lệnh chi tiền qua ngân hàng.' },
      { target: 'mobile-app', label: 'Mobile App', desc: 'Nhân viên nhận thông báo ca làm, xin nghỉ phép, xem phiếu lương và theo dõi tiến độ KPI cá nhân ngay trên điện thoại.' }
    ],
    faqs: [
      {
        q: 'Hệ thống có hỗ trợ chính sách hoa hồng bán chéo (Cross-sale) theo nhóm không?',
        a: 'Có. eCor HRM hỗ trợ chia hoa hồng theo nhóm hoặc theo tỷ lệ giữa nhân viên tư vấn chính và nhân viên hỗ trợ chốt đơn.'
      },
      {
        q: 'Doanh nghiệp tôi có nhiều chi nhánh ở các tỉnh thành thì có quản lý tập trung được không?',
        a: 'Được. eCor HRM quản lý nhân sự đa chi nhánh không giới hạn địa lý. Ban giám đốc có thể giám sát tỷ lệ đi làm và quỹ lương theo thời gian thực.'
      }
    ]
  },

  'ke-toan': {
    id: 6,
    slug: 'ke-toan',
    code: 'Account',
    title: 'Account — Kế Toán & Hóa Đơn Điện Tử',
    shortName: 'Kế Toán & HĐĐT',
    tagline: 'Kế Toán Bán Lẻ & HĐĐT — Chuẩn Quy Định Thuế, Minh Bạch Lãi Lỗ',
    heroDesc: 'Tự động hóa 100% việc xuất hóa đơn điện tử khởi tạo từ máy tính tiền (Thông tư 78/NĐ 123), hạch toán thu chi, quản lý công nợ và lập báo cáo lãi lỗ P&L đa kênh thời gian thực.',
    badge: 'Module 06',
    themeColor: 'rose',
    icon: '📑',
    pains: [
      {
        icon: '⚖️',
        title: 'Rủi ro bị xử phạt thuế vì xuất HĐĐT sai',
        desc: 'Quy định bắt buộc xuất HĐĐT từng lần bán lẻ tại máy tính tiền, chậm xuất hoặc xuất sai định dạng dễ bị cơ quan thuế xử phạt nặng.'
      },
      {
        icon: '❓',
        title: 'Bán nhiều đơn nhưng không thấy tiền lãi đâu',
        desc: 'Doanh số lớn nhưng bị trừ vô số loại phí sàn TMĐT, phí voucher, cước ship, hoàn hàng mà không bóc tách được lợi nhuận thực tế.'
      },
      {
        icon: '💸',
        title: 'Quên thu hồi công nợ khách sỉ & nhà cung cấp',
        desc: 'Ghi chép công nợ bằng sổ tay dẫn đến quên đòi nợ, nợ xấu tồn đọng gây tắc nghẽn dòng tiền kinh doanh của cửa hàng.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Hóa đơn điện tử máy tính tiền (Thông tư 78)',
        desc: 'Kết nối trực tiếp VNPT, Viettel, MISA, BKAV. Xuất hóa đơn có mã cơ quan thuế ngay khi in bill thanh toán tại quầy POS.'
      },
      {
        num: '02',
        title: 'Sổ quỹ thu chi & Dòng tiền Cash-flow',
        desc: 'Tự động phân loại dòng tiền quỹ tiền mặt và tài khoản ngân hàng. Kiểm soát chính xác chi phí mặt bằng, điện nước, marketing.'
      },
      {
        num: '03',
        title: 'Quản lý công nợ Nhà cung cấp & Khách sỉ',
        desc: 'Tự động cấn trừ công nợ khi nhập kho WMS hoặc xuất bán sỉ. Cảnh báo hạn thanh toán để duy trì uy tín tín dụng.'
      },
      {
        num: '04',
        title: 'Báo cáo kết quả kinh doanh (P&L) tự động',
        desc: 'Xem báo cáo lãi lỗ của từng chi nhánh, từng kênh bán Shopee/TikTok/Web theo thời gian thực mà không cần chờ cuối tháng.'
      },
      {
        num: '05',
        title: 'Tự động tính giá vốn hàng tồn kho (COGS)',
        desc: 'Áp dụng linh hoạt phương pháp bình quân gia quyền hoặc FIFO, tự động kết chuyển giá vốn ngay khi có giao dịch bán hàng.'
      },
      {
        num: '06',
        title: 'Bảng kê phục vụ kê khai thuế GTGT',
        desc: 'Xuất nhanh bảng kê hóa đơn bán ra, mua vào và số thuế phải nộp theo đúng mẫu biểu quy định của cơ quan thuế.'
      }
    ],
    metrics: [
      { value: '100%', label: 'Hợp chuẩn Thông tư 78/Nghị định 123' },
      { value: '-85%', label: 'Thời gian làm sổ sách kế toán' },
      { value: '0 Đồng', label: 'Sai sót trong tính phí sàn TMĐT' },
      { value: 'Real-time', label: 'Báo cáo dòng tiền mọi lúc mọi nơi' }
    ],
    integrations: [
      { target: 'pos', label: 'POS Điểm Bán', desc: 'Mỗi hóa đơn quầy thu ngân tự động sinh phiếu thu tiền mặt hoặc tiền chuyển khoản ngân hàng, sẵn sàng cấp mã HĐĐT.' },
      { target: 'wms', label: 'WMS Kho Vận', desc: 'Phiếu nhập kho WMS tự động tạo công nợ phải trả cho nhà cung cấp, phiếu xuất kho ghi nhận giá vốn hàng xuất bán.' },
      { target: 'tms', label: 'TMS Vận Chuyển', desc: 'Tiền thu hộ COD các hãng vận chuyển chuyển khoản về ngân hàng được tự động gạch nợ đơn hàng mà không cần rà soát thủ công.' }
    ],
    faqs: [
      {
        q: 'Hóa đơn khởi tạo từ máy tính tiền của eCor có gửi mã tra cứu cho khách hàng được không?',
        a: 'Có. Trên hóa đơn giấy in ra có in sẵn mã QR và đường link tra cứu HĐĐT. Đồng thời hệ thống có thể tự động gửi link qua Zalo hoặc SMS cho khách.'
      },
      {
        q: 'Hệ thống có hỗ trợ xuất dữ liệu sang phần mềm kế toán khác như MISA hay Fast không?',
        a: 'Có. eCor Account hỗ trợ xuất file Excel hoặc XML chuẩn hóa để nhập liệu trực tiếp vào phần mềm MISA, Fast, SAP hoặc các phần mềm kế toán chuyên biệt.'
      }
    ]
  },

  'mobile-app': {
    id: 7,
    slug: 'mobile-app',
    code: 'Mobile App',
    title: 'Mobile App — Ứng Dụng Di Động Chuyên Biệt',
    shortName: 'Mobile App',
    tagline: 'Điều Hành Chuỗi Bán Lẻ Mọi Lúc Mọi Nơi — Hệ Sinh Thái App Di Động Toàn Diện',
    heroDesc: 'Bộ ba ứng dụng di động chuyên biệt: App Quản Trị cho Chủ shop giám sát KPI theo thời gian thực; App Tác Nghiệp cho Nhân viên quầy/kho; App Thành Viên cho Khách hàng tích điểm Loyalty.',
    badge: 'Module 07',
    themeColor: 'purple',
    icon: '📱',
    pains: [
      {
        icon: '⛓️',
        title: 'Chủ shop bị ràng buộc chân tại cửa hàng',
        desc: 'Đi công tác hay du lịch nhưng không an tâm, liên tục phải gọi điện nhắn tin hỏi quản lý cửa hàng hôm nay bán được bao nhiêu.'
      },
      {
        icon: '📱',
        title: 'Dùng web trên điện thoại thao tác khó khăn',
        desc: 'Giao diện web trên mobile bị vỡ khung, nút bấm nhỏ xíu, không hỗ trợ nhận thông báo đẩy khi có biến cố doanh số.'
      },
      {
        icon: '💔',
        title: 'Khách hàng dễ lãng quên thương hiệu',
        desc: 'Không có app loyalty trong điện thoại khách, tích điểm giấy dễ mất khiến khách hàng nhanh chóng rời bỏ sang đối thủ.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'App eCor Owner (Dành riêng Chủ Shop)',
        desc: 'Giám sát doanh thu, đơn hàng, lợi nhuận ròng của từng chi nhánh. Duyệt giảm giá đặc biệt, phê duyệt phiếu chi và nhận cảnh báo khẩn cấp.'
      },
      {
        num: '02',
        title: 'App eCor Staff (Dành cho Nhân Viên)',
        desc: 'Dành cho nhân viên bán hàng hoặc nhân viên kho: Bán hàng di động, quét camera kiểm tồn nhanh, chấm công GPS và nhận lịch làm.'
      },
      {
        num: '03',
        title: 'App eCor Loyalty (Dành cho Khách Hàng)',
        desc: 'Khách tự tra cứu điểm thưởng, đổi voucher khuyến mãi, đặt hàng trực tiếp và nhận thông báo ưu đãi độc quyền trên màn hình khóa.'
      },
      {
        num: '04',
        title: 'Thông báo đẩy (Push Notification) tức thời',
        desc: 'Gửi thông báo tức thì khi có đơn hàng giá trị cao, khi kho hàng sắp hết, hoặc khi có nhân viên yêu cầu duyệt giá.'
      },
      {
        num: '05',
        title: 'Bán hàng lưu động qua điện thoại',
        desc: 'Biến điện thoại của nhân viên thành máy POS thanh toán quét mã QR tại các hội chợ, sự kiện pop-up hoặc bàn ăn.'
      },
      {
        num: '06',
        title: 'Tùy chọn White-label thương hiệu riêng',
        desc: 'Đưa trực tiếp logo, màu sắc thương hiệu và tên app của doanh nghiệp bạn lên Apple App Store và Google Play Store.'
      }
    ],
    metrics: [
      { value: '24/7', label: 'Giám sát doanh số mọi lúc mọi nơi' },
      { value: '< 1s', label: 'Tốc độ gửi thông báo đẩy' },
      { value: '+45%', label: 'Tăng tỷ lệ khách hàng quay lại mua sắm' },
      { value: 'White-label', label: 'Tùy biến thương hiệu riêng trên App Store' }
    ],
    integrations: [
      { target: 'pos', label: 'POS Điểm Bán', desc: 'Biến điện thoại của nhân viên thành máy POS thanh toán quét mã QR tại các sự kiện hoặc bàn ăn.' },
      { target: 'wms', label: 'WMS Kho Vận', desc: 'Chỉ cần dùng camera điện thoại quét mã vạch sản phẩm là hiển thị ngay số lượng tồn khả dụng tại từng kho hàng.' },
      { target: 'crm', label: 'CRM Khách Hàng', desc: 'Gửi thông báo ưu đãi flash sale, quà tặng sinh nhật trực tiếp vào màn hình khóa của khách hàng cài App Loyalty.' }
    ],
    faqs: [
      {
        q: 'App eCor Owner có thể dùng cho nhiều người quản lý cùng lúc không?',
        a: 'Có. Bạn có thể phân quyền cho các phó giám đốc, trưởng chuỗi hoặc kế toán trưởng cùng cài app với các mức độ hiển thị báo cáo phù hợp với chức vụ.'
      },
      {
        q: 'Thời gian để xuất bản app White-label riêng lên App Store là bao lâu?',
        a: 'Thời gian hoàn thiện và kiểm duyệt thông thường từ 7 đến 14 ngày làm việc. Đội ngũ kỹ thuật của eCor sẽ hỗ trợ toàn bộ thủ tục đăng ký tài khoản Apple Developer và Google Play Console.'
      }
    ]
  },

  crm: {
    id: 8,
    slug: 'crm',
    code: 'CRM',
    title: 'CRM — Chăm Sóc Khách Hàng & Loyalty 360°',
    shortName: 'CRM Loyalty',
    tagline: 'Chăm Sóc Khách Hàng 360° — Gia Tăng 35% Tỷ Lệ Mua Lại',
    heroDesc: 'Hồ sơ khách hàng 360 độ hợp nhất đa kênh, ma trận phân nhóm RFM tự động, chương trình tích điểm hội viên và kịch bản marketing qua Zalo ZNS/SMS.',
    badge: 'Module 08',
    themeColor: 'teal',
    icon: '❤️',
    pains: [
      {
        icon: '👤',
        title: 'Khách mua một lần rồi biến mất vĩnh viễn',
        desc: 'Không lưu lại sở thích, kích cỡ, ngày sinh nhật khiến khách hàng nhanh chóng lãng quên cửa hàng và chuyển sang đối thủ.'
      },
      {
        icon: '📢',
        title: 'Spam tin nhắn đại trà gây ức chế',
        desc: 'Gửi tin nhắn khuyến mãi chung chung không đúng nhu cầu (như nam giới nhận tin nhắn son môi) khiến khách chặn tin nhắn thương hiệu.'
      },
      {
        icon: '💳',
        title: 'Thẻ tích điểm giấy rườm rà dễ mất',
        desc: 'Phát thẻ tích điểm bằng giấy khách hay quên mang theo, vừa tốn kém chi phí in ấn vừa không thu thập được hành vi tiêu dùng số.'
      }
    ],
    features: [
      {
        num: '01',
        title: 'Hồ sơ khách hàng 360 độ toàn diện',
        desc: 'Lưu trữ trọn vẹn: Lịch sử đơn quầy POS, đơn website, tin nhắn tư vấn, phản hồi khiếu nại, ngày sinh và hành vi mua sắm ưa thích.'
      },
      {
        num: '02',
        title: 'Hệ thống tích điểm & Hạng thành viên',
        desc: 'Cấu hình tỷ lệ tích điểm linh hoạt (100.000đ = 1 điểm). Tự động nâng hạng thành viên (Đồng, Bạc, Vàng, Kim Cương) và giảm giá riêng.'
      },
      {
        num: '03',
        title: 'Phân nhóm khách hàng theo ma trận RFM',
        desc: 'Tự động nhận diện: Khách VIP chi tiêu cao, Khách hàng mới, Khách trung thành tiềm năng và Khách hàng có nguy cơ rời bỏ.'
      },
      {
        num: '04',
        title: 'Tiếp thị tự động qua Zalo ZNS & SMS',
        desc: 'Kịch bản tự động: Tin nhắn cảm ơn sau khi thanh toán, tin nhắn tích điểm, chúc mừng sinh nhật, hoặc nhắc voucher sắp hết hạn.'
      },
      {
        num: '05',
        title: 'Cá nhân hóa mã giảm giá Voucher',
        desc: 'Tạo mã voucher độc quyền gắn riêng với số điện thoại khách hàng, ngăn chặn tình trạng rò rỉ mã giảm giá đại trà.'
      },
      {
        num: '06',
        title: 'Khảo sát đo lường mức độ hài lòng (CSAT/NPS)',
        desc: 'Khách hàng chấm sao đánh giá thái độ nhân viên và chất lượng sản phẩm trực tiếp trên tin nhắn Zalo, giúp xử lý khiếu nại kịp thời.'
      }
    ],
    metrics: [
      { value: '+35%', label: 'Tăng tỷ lệ khách quay lại mua sắm' },
      { value: '+25%', label: 'Giá trị đơn hàng trung bình (AOV)' },
      { value: '92%', label: 'Tỷ lệ mở tin nhắn Zalo ZNS' },
      { value: '-60%', label: 'Chi phí quảng cáo tìm khách hàng mới' }
    ],
    integrations: [
      { target: 'pos', label: 'POS Điểm Bán', desc: 'Thu ngân nhập SĐT là thấy ngay tên khách, hạng thành viên, gợi ý quà tặng hoặc giảm giá tự động theo cấp độ hội viên.' },
      { target: 'ecom', label: 'ECOM Web & Sàn', desc: 'Khách mua trên website hoặc sàn TMĐT đều được tự động cộng dồn điểm tích lũy vào tài khoản thành viên đa kênh.' },
      { target: 'mobile-app', label: 'Mobile App', desc: 'Khách hàng mở app di động là có ngay mã barcode thành viên để nhân viên quét tích điểm và đổi quà không cần mang thẻ nhựa.' }
    ],
    faqs: [
      {
        q: 'Khách mua tại cửa hàng và mua trên website có được tích điểm chung không?',
        a: 'Có. Điểm tích lũy được đồng bộ hợp nhất dựa trên số điện thoại. Dù mua tại quầy POS hay mua online, hệ thống đều cộng dồn vào một hồ sơ duy nhất.'
      },
      {
        q: 'Gửi tin nhắn Zalo ZNS có tốn nhiều chi phí không?',
        a: 'Chi phí tin nhắn Zalo ZNS thông thường chỉ từ 150đ - 300đ/tin (rẻ hơn nhiều so với SMS truyền thống) với tỷ lệ hiển thị và mở đọc đạt trên 90%.'
      }
    ]
  }
}

export const modulesList = Object.values(modulesData)
