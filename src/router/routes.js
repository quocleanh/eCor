// src/router/routes.js

export const locales = ['vi', 'en', 'zh', 'zh-TW'];
export const defaultLocale = 'vi';

export const routeMappings = [
  {
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'eCor — Đồng Bộ Logistics, Kho Bãi & Thương Mại Của Bạn' },
    paths: {
      vi: '/',
      en: '/en',
      zh: '/zh',
      'zh-TW': '/zh-tw'
    }
  },
  {
    name: 'wms',
    component: () => import('@/views/WmsView.vue'),
    meta: { 
      title: 'ecor WMS — Giải Pháp Quản Trị Kho Thông Minh Chuẩn 4.0', 
      description: 'Phân hệ eCor WMS thuộc Hệ Sinh Thái Lõi SaaS. Giải pháp quản trị kho thông minh tích hợp PDA/RFID, quản lý tồn kho real-time và loại trừ rủi ro lệch tồn.' 
    },
    paths: {
      vi: '/wms',
      en: '/en/wms',
      zh: '/zh/wms',
      'zh-TW': '/zh-tw/wms'
    }
  },
  {
    name: 'tms',
    component: () => import('@/views/TmsView.vue'),
    meta: { 
      title: 'ecor TMS — Quản Lý & Điều Phối Vận Tải Real-Time', 
      description: 'Phân hệ eCor TMS - Nền tảng điều phối vận tải tối ưu lộ trình, giám sát đội xe và tự động đồng bộ mã vận đơn đa kênh trên Lõi dữ liệu duy nhất (Single Source of Truth).' 
    },
    paths: {
      vi: '/tms',
      en: '/en/tms',
      zh: '/zh/tms',
      'zh-TW': '/zh-tw/tms'
    }
  },
  {
    name: 'pos',
    component: () => import('@/views/PosView.vue'),
    meta: { 
      title: 'ecor POS — Bán Hàng Siêu Tốc & Quản Trị Điểm Bán Đa Chuỗi', 
      description: 'Phân hệ eCor POS bán hàng siêu tốc đa nền tảng. Kết nối chặt chẽ với WMS và CRM, xử lý hàng ngàn đơn hàng không độ trễ, tối ưu năng suất chuỗi bán lẻ.' 
    },
    paths: {
      vi: '/pos',
      en: '/en/pos',
      zh: '/zh/pos',
      'zh-TW': '/zh-tw/pos'
    }
  },
  {
    name: 'account',
    component: () => import('@/views/AccountView.vue'),
    meta: {
      title: 'ecor Account — Kế Toán Tự Động & Đối Soát COD Tức Thì',
      description: 'Phân hệ eCor Account tự động hạch toán từ POS/WMS/TMS, đối soát tiền COD với đơn vị vận chuyển chỉ 1 chạm và xuất hóa đơn điện tử chuẩn Thông tư 78.'
    },
    paths: {
      vi: '/ke-toan',
      en: '/en/accounting',
      zh: '/zh/accounting',
      'zh-TW': '/zh-tw/accounting'
    }
  },
  {
    name: 'solutions',
    component: () => import('@/views/SolutionsView.vue'),
    meta: { 
      title: 'Giải Pháp Vận Hành Chuỗi Cung Ứng Theo Ngành — eCor', 
      description: 'Các giải pháp chuyên sâu từ eCor SaaS dành cho FMCG, Bán Lẻ, Vận tải và 3PL Logistics. Khai thác sức mạnh từ Single Source of Truth.' 
    },
    paths: {
      vi: '/giai-phap',
      en: '/en/solutions',
      zh: '/zh/solutions',
      'zh-TW': '/zh-tw/solutions'
    }
  },
  {
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: { title: 'Bảng Giá Dịch Vụ & Gói Bản Quyền — eCor' },
    paths: {
      vi: '/bang-gia',
      en: '/en/pricing',
      zh: '/zh/pricing',
      'zh-TW': '/zh-tw/pricing'
    }
  },
  {
    name: 'customers',
    component: () => import('@/views/CustomersView.vue'),
    meta: { title: 'Khách Hàng Tiêu Biểu & Câu Chuyện Thành Công — eCor' },
    paths: {
      vi: '/khach-hang',
      en: '/en/customers',
      zh: '/zh/customers',
      'zh-TW': '/zh-tw/customers'
    }
  },
  {
    name: 'resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: { title: 'Tài Nguyên, Tài Liệu API & Hướng Dẫn Tích Hợp — eCor' },
    paths: {
      vi: '/tai-nguyen',
      en: '/en/resources',
      zh: '/zh/resources',
      'zh-TW': '/zh-tw/resources'
    }
  },
  {
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Liên Hệ & Đăng Ký Khảo Sát Giải Pháp — eCor' },
    paths: {
      vi: '/lien-he',
      en: '/en/contact',
      zh: '/zh/contact',
      'zh-TW': '/zh-tw/contact'
    }
  },
  {
    name: 'login',
    component: () => import('@/views/AuthView.vue'),
    meta: { title: 'Đăng Nhập Tài Khoản Doanh Nghiệp — eCor' },
    paths: {
      vi: '/dang-nhap',
      en: '/en/login',
      zh: '/zh/login',
      'zh-TW': '/zh-tw/login'
    }
  },
  {
    name: 'register',
    component: () => import('@/views/AuthView.vue'),
    meta: { title: 'Đăng Ký Tài Khoản Doanh Nghiệp — eCor' },
    paths: {
      vi: '/dang-ky',
      en: '/en/register',
      zh: '/zh/register',
      'zh-TW': '/zh-tw/register'
    }
  },
  {
    name: 'privacy',
    component: () => import('@/views/policy/PrivacyView.vue'),
    meta: { title: 'Chính Sách Bảo Mật — eCor' },
    paths: {
      vi: '/chinh-sach-bao-mat',
      en: '/en/privacy-policy',
      zh: '/zh/privacy-policy',
      'zh-TW': '/zh-tw/privacy-policy'
    }
  },
  {
    name: 'terms',
    component: () => import('@/views/policy/TermsView.vue'),
    meta: { title: 'Điều Khoản Sử Dụng — eCor' },
    paths: {
      vi: '/dieu-khoan-su-dung',
      en: '/en/terms-of-use',
      zh: '/zh/terms-of-use',
      'zh-TW': '/zh-tw/terms-of-use'
    }
  },
  {
    name: 'sla',
    component: () => import('@/views/policy/SlaView.vue'),
    meta: { title: 'Cam Kết SLA & Bảo Hành — eCor' },
    paths: {
      vi: '/cam-ket-sla',
      en: '/en/sla-commitment',
      zh: '/zh/sla-commitment',
      'zh-TW': '/zh-tw/sla-commitment'
    }
  }
];
