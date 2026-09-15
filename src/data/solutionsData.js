/**
 * eCor Solutions Data — Giải Pháp Chuyên Sâu Theo Từng Ngành Nghề
 */

export const solutionsData = {
  'thoi-trang': {
    slug: 'thoi-trang',
    title: 'Giải Pháp Ngành Thời Trang & Phụ Kiện',
    shortName: 'Thời Trang & Phụ Kiện',
    icon: '👗',
    badge: 'Fashion & Apparel',
    tagline: 'Quản Lý Ma Trận Màu/Size & Kiểm Kho Siêu Tốc Bằng RFID',
    summary: 'Đặc thù ngành thời trang là số lượng SKU biến thể khổng lồ (Size x Màu sắc x Kiểu dáng) và tính mùa vụ cao. eCor giúp bạn kiểm soát tồn kho tức thời và loại trừ 100% việc giao nhầm size cho khách.',
    challenges: [
      {
        title: 'Ma trận SKU phức tạp',
        desc: 'Một mẫu áo có 5 size và 4 màu tạo ra 20 mã SKU riêng biệt. Rất dễ nhầm lẫn khi bán hàng và kiểm kho thủ công.'
      },
      {
        title: 'Tỷ lệ hoàn hàng đổi size cao',
        desc: 'Khách mua online thường đổi trả size, nếu không xử lý nhập kho và hoàn tiền nhanh sẽ gây bức xúc cho khách.'
      },
      {
        title: 'Tồn kho mùa vụ đọng vốn',
        desc: 'Hàng mùa hè không bán hết bị tồn sang mùa đông, khó xả hàng nếu không có hệ thống cảnh báo hàng chậm luân chuyển.'
      }
    ],
    modulesRecommended: [
      { code: 'POS', name: 'Bán hàng tại quầy', desc: 'Quét barcode biến thể màu/size trong 0.2s, tra cứu tồn kho các chi nhánh để chốt đơn.' },
      { code: 'WMS', name: 'Kho vận RFID', desc: 'Kiểm kê 2.000 chiếc áo trong 10 phút bằng súng bắn sóng RFID, không cần mở từng thùng hàng.' },
      { code: 'ECOM', name: 'Đồng bộ đa sàn', desc: 'Đồng bộ tồn kho từng size/màu lên Shopee, TikTok Shop, tránh tình trạng khách đặt phải size đã hết.' },
      { code: 'CRM', name: 'Loyalty & Voucher', desc: 'Phân nhóm khách theo gu thời trang và gửi voucher giảm giá bộ sưu tập mới vào ngày sinh nhật.' }
    ],
    caseStudy: {
      brand: 'Chuỗi Thời Trang Nam The Classic (8 chi nhánh TP.HCM & Hà Nội)',
      result: 'Giảm 95% thời gian kiểm kê định kỳ hàng tháng từ 2 ngày xuống còn 2 tiếng; Tỷ lệ nhặt nhầm size giảm về 0% nhờ áp dụng WMS quét mã vạch kiểm tra trước khi đóng gói.'
    }
  },

  'my-pham': {
    slug: 'my-pham',
    title: 'Giải Pháp Ngành Mỹ Phẩm & Làm Đẹp',
    shortName: 'Mỹ Phẩm & Làm Đẹp',
    icon: '💄',
    badge: 'Beauty & Cosmetics',
    tagline: 'Quản Lý Lô / Hạn Sử Dụng (FEFO) & Kịch Bản Chăm Sóc Khách Hàng',
    summary: 'Mỹ phẩm đòi hỏi quản lý hạn sử dụng nghiêm ngặt theo quy tắc FEFO (hết hạn trước - xuất trước) và nhu cầu chăm sóc khách hàng định kỳ khi hết chu kỳ sử dụng sản phẩm.',
    challenges: [
      {
        title: 'Hàng cận date gây thất thoát vốn',
        desc: 'Không theo dõi được ngày hết hạn của từng lô hàng, dẫn tới tình trạng sản phẩm hết hạn sử dụng phải tiêu hủy.'
      },
      {
        title: 'Hàng giả, hàng nhái lẫn lộn',
        desc: 'Cần quản lý tem chống giả, số serial/mã cào để bảo đảm uy tín phân phối chính hãng.'
      },
      {
        title: 'Khách hàng có chu kỳ mua lại rõ rệt',
        desc: 'Một chai kem chống nắng thường dùng trong 2 tháng, nếu không nhắc khách mua lại đúng thời điểm sẽ mất khách.'
      }
    ],
    modulesRecommended: [
      { code: 'WMS', name: 'Quản lý Lô & HSD', desc: 'Cảnh báo tự động khi sản phẩm còn 6 tháng hết hạn, gợi ý xuất lô hàng cận date trước.' },
      { code: 'CRM', name: 'Kịch bản Zalo ZNS', desc: 'Tự động gửi tin nhắn hỏi thăm và tặng mã ưu đãi mua lại sau 45 ngày khách mua serum/kem dưỡng.' },
      { code: 'POS', name: 'Thanh toán & Tích điểm', desc: 'Thu ngân tra cứu lịch sử loại da của khách để tư vấn sản phẩm bổ trợ phù hợp (Cross-sell).' },
      { code: 'ECOM', name: 'Flash Sale Online', desc: 'Tạo chương trình xả hàng cận date với mức giảm sâu trực tiếp trên Website và TikTok Shop.' }
    ],
    caseStudy: {
      brand: 'Hệ Thống Phân Phối Mỹ Phẩm GlowSkin (5 cửa hàng & 3 kho)',
      result: 'Xóa bỏ hoàn toàn tình trạng hàng mỹ phẩm quá hạn sử dụng; Doanh số mua lại tăng 38% nhờ kịch bản CRM nhắc nhở chăm sóc da định kỳ qua Zalo OA.'
    }
  },

  'me-va-be': {
    slug: 'me-va-be',
    title: 'Giải Pháp Ngành Mẹ & Bé (Mom & Baby)',
    shortName: 'Mẹ & Bé',
    icon: '🍼',
    badge: 'Mom & Baby Stores',
    tagline: 'Quản Lý Hàng Nặng Cồng Kềnh, Combo Sữa Tã & Thẻ Hội Viên Gia Đình',
    summary: 'Mẹ & Bé là ngành có tần suất mua sắm cực kỳ thường xuyên, tỷ lệ đóng gói combo phức tạp và yêu cầu giao nhận hàng nặng (sữa hộp, bỉm tã, xe đẩy) nhanh chóng tiện lợi.',
    challenges: [
      {
        title: 'Bán hàng theo combo khuyến mãi',
        desc: 'Chương trình mua 3 tặng 1, mua sữa tặng đồ chơi, mua tã tặng khăn ướt rất khó trừ tồn kho nếu phần mềm không hỗ trợ combo động.'
      },
      {
        title: 'Hàng hóa cồng kềnh, phí ship cao',
        desc: 'Thùng bỉm sữa nặng và cồng kềnh, cần chọn đúng đơn vị vận chuyển có cước phí rẻ để tối ưu lợi nhuận.'
      },
      {
        title: 'Chính sách khách hàng thân thiết',
        desc: 'Các mẹ bỉm sữa rất quan tâm đến tích điểm đổi quà, quà tặng thôi nôi, sinh nhật cho bé.'
      }
    ],
    modulesRecommended: [
      { code: 'POS', name: 'Tự động trừ combo', desc: 'Bán 1 combo quà tặng, hệ thống tự động bóc tách trừ tồn kho riêng biệt cho từng món sữa và quà tặng.' },
      { code: 'TMS', name: 'Tối ưu cước bưu điện', desc: 'Tự động so sánh cước vận chuyển kiện hàng nặng giữa Viettel Post và GHN để chọn gói cước tiết kiệm nhất.' },
      { code: 'CRM', name: 'Hồ sơ ngày sinh của Bé', desc: 'Lưu tên và ngày sinh của bé, tự động gửi quà tặng sinh nhật thôi nôi và ưu đãi tã sữa theo độ tuổi.' },
      { code: 'Mobile App', name: 'App Thành Viên Bỉm Sữa', desc: 'Các mẹ mở app xem số điểm tích lũy, tích tem đổi xe đẩy, đồ chơi cho con vô cùng hào hứng.' }
    ],
    caseStudy: {
      brand: 'Chuỗi Siêu Thị Mẹ & Bé BabyCare (12 chi nhánh miền Tây)',
      result: 'Tiết kiệm hơn 30 triệu đồng/tháng tiền cước vận chuyển nhờ tính năng so sánh giá tự động của TMS; Tỷ lệ khách hàng đăng ký thành viên đạt 88%.'
    }
  },

  'chuoi-ban-le-tong-kho': {
    slug: 'chuoi-ban-le-tong-kho',
    title: 'Giải Pháp Chuỗi Bán Lẻ & Tổng Kho Phân Phối',
    shortName: 'Chuỗi Bán Lẻ & Tổng Kho',
    icon: '🏬',
    badge: 'Enterprise & Multi-Stores',
    tagline: 'Vận Hành Đa Điểm Hợp Nhất — Lõi Dữ Liệu Thời Gian Thực 8 Module',
    summary: 'Dành cho các doanh nghiệp sở hữu chuỗi từ 5 đến 100+ cửa hàng, tổng kho phân phối diện tích lớn và nhiều kênh bán lẻ omni-channel.',
    challenges: [
      {
        title: 'Mất kiểm soát số liệu chi nhánh',
        desc: 'Dữ liệu phân mảnh khiến ban lãnh đạo không nắm được doanh số và tồn kho thực tế của từng cửa hàng trong ngày.'
      },
      {
        title: 'Điều phối luân chuyển hàng chậm trễ',
        desc: 'Cửa hàng A cháy hàng nhưng cửa hàng B tồn kho ế ẩm, thiếu cơ chế điều chuyển kho nội bộ nhanh chóng.'
      },
      {
        title: 'Rủi ro thất thoát tài chính & nhân sự',
        desc: 'Quy mô nhân sự lớn, không kiểm soát được ca làm, gian lận két tiền và chậm trễ trong báo cáo tài chính kê khai thuế.'
      }
    ],
    modulesRecommended: [
      { code: 'All-in-One', name: 'Trọn bộ 8 Module', desc: 'Hợp nhất toàn bộ từ Điểm bán, Kho vận, Sàn TMĐT, Vận chuyển, Nhân sự đến Kế toán HĐĐT.' },
      { code: 'WMS', name: 'Điều phối đa kho', desc: 'Tạo lệnh điều chuyển hàng giữa các kho chi nhánh với biên bản xuất nhập có chữ ký số điện tử.' },
      { code: 'Account', name: 'Báo cáo P&L chuỗi', desc: 'Báo cáo lãi lỗ theo từng cửa hàng, từng kênh bán hàng, tự động hợp nhất báo cáo tài chính toàn chuỗi.' },
      { code: 'Mobile App', name: 'App Owner cho ban giám đốc', desc: 'Ban lãnh đạo theo dõi doanh số toàn chuỗi cập nhật từng giây, phê duyệt mọi đề xuất từ xa.' }
    ],
    caseStudy: {
      brand: 'Tập Đoàn Bán Lẻ Phân Phối Tổng Hợp V-Store (24 chi nhánh & 2 tổng kho)',
      result: 'Giảm 45% chi phí nhân sự vận hành văn phòng nhờ tự động hóa liên kết giữa bán hàng, kho và kế toán; Dòng tiền đối soát bưu điện và sàn minh bạch 100%.'
    }
  }
}

export const solutionsList = Object.values(solutionsData)
