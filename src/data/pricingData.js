/**
 * eCor Pricing Data
 */

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Gói Khởi Nghiệp',
    target: 'Phù hợp cho cửa hàng đơn lẻ hoặc shop online đang bắt đầu mở rộng.',
    price: '299.000đ',
    period: '/ tháng / cửa hàng',
    isPopular: false,
    btnText: 'Chọn Gói Khởi Nghiệp',
    features: [
      '01 Điểm bán POS (offline-first)',
      'Quản lý kho WMS cơ bản (1 kho)',
      'Kết nối 01 gian hàng Shopee/TikTok',
      'Quản lý doanh thu & lợi nhuận',
      'App di động cho chủ shop',
      'Hỗ trợ kỹ thuật qua tổng đài'
    ]
  },
  {
    id: 'growth',
    name: 'Gói Tăng Trưởng',
    target: 'Dành cho nhà bán hàng đa kênh & chuỗi từ 2 - 5 chi nhánh.',
    price: '699.000đ',
    period: '/ tháng / chuỗi',
    isPopular: true,
    btnText: 'Đăng Ký Gói Tăng Trưởng',
    features: [
      'Trọn bộ 6 Module: POS, ECOM, WMS, TMS, HRM, Mobile App',
      'Kiểm kho bằng máy quét PDA & RFID',
      'Kết nối không giới hạn sàn TMĐT',
      'Tự động đẩy đơn & đối soát COD TMS',
      'Chấm công GPS & tính hoa hồng POS',
      'Hỗ trợ kỹ thuật 24/7 ưu tiên cao'
    ]
  },
  {
    id: 'enterprise',
    name: 'Gói Chuỗi Doanh Nghiệp',
    target: 'Chuỗi bán lẻ quy mô lớn, tổng kho phân phối hoặc tập đoàn.',
    price: 'Liên hệ',
    period: '/ theo quy mô',
    isPopular: false,
    btnText: 'Tư Vấn Thiết Kế Riêng',
    features: [
      'Trọn bộ 8 Module All-in-One: Kèm Account HĐĐT & CRM 360°',
      'Tùy biến White-label App di động thương hiệu riêng',
      'Hệ thống Open API kết nối ERP/SAP/MISA',
      'Hạ tầng Cloud riêng biệt bảo mật cao',
      'Chuyên gia đào tạo & khảo sát tại chỗ',
      'Cam kết SLA vận hành 99.99%'
    ]
  }
]

export const standaloneModules = [
  { code: 'POS', name: 'POS Bán Hàng Quầy', price: '149.000đ', desc: 'Quét mã, in bill, offline-first, chốt ca két tiền.' },
  { code: 'ECOM', name: 'ECOM Web & Đa Sàn', price: '199.000đ', desc: 'Website SEO + đồng bộ Shopee, TikTok Shop.' },
  { code: 'WMS', name: 'WMS Kho Hàng PDA', price: '249.000đ', desc: 'Vị trí ô kệ, kiểm kho RFID/PDA, cảnh báo tồn.' },
  { code: 'TMS', name: 'TMS Quản Lý Vận Chuyển', price: '149.000đ', desc: 'In bill hàng loạt, đối soát COD tự động.' },
  { code: 'HRM', name: 'HRM Nhân Sự & KPI', price: '149.000đ', desc: 'Chấm công GPS, tự tính hoa hồng bill POS.' },
  { code: 'Account', name: 'Account Kế Toán & HĐĐT', price: '199.000đ', desc: 'Xuất HĐĐT chuẩn thuế, sổ sách P&L tự động.' },
  { code: 'Mobile App', name: 'Mobile App Suite', price: '149.000đ', desc: 'App di động cho Chủ shop & Nhân viên.' },
  { code: 'CRM', name: 'CRM Khách Hàng 360°', price: '149.000đ', desc: 'Tích điểm đa kênh, kịch bản Zalo ZNS.' }
]
