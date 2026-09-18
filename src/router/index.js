import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'eCor — Đồng Bộ Logistics, Kho Bãi & Thương Mại Của Bạn' }
  },
  {
    path: '/wms',
    name: 'wms',
    component: () => import('@/views/WmsView.vue'),
    meta: { title: 'ecor WMS — Giải Pháp Quản Trị Kho Thông Minh Chuẩn 4.0', description: 'Phân hệ eCor WMS thuộc Hệ Sinh Thái Lõi SaaS. Giải pháp quản trị kho thông minh tích hợp PDA/RFID, quản lý tồn kho real-time và loại trừ rủi ro lệch tồn.' }
  },
  {
    path: '/tms',
    name: 'tms',
    component: () => import('@/views/TmsView.vue'),
    meta: { title: 'ecor TMS — Quản Lý & Điều Phối Vận Tải Real-Time', description: 'Phân hệ eCor TMS - Nền tảng điều phối vận tải tối ưu lộ trình, giám sát đội xe và tự động đồng bộ mã vận đơn đa kênh trên Lõi dữ liệu duy nhất (Single Source of Truth).' }
  },
  {
    path: '/pos',
    name: 'pos',
    component: () => import('@/views/PosView.vue'),
    meta: { title: 'ecor POS — Bán Hàng Siêu Tốc & Quản Trị Điểm Bán Đa Chuỗi', description: 'Phân hệ eCor POS bán hàng siêu tốc đa nền tảng. Kết nối chặt chẽ với WMS và CRM, xử lý hàng ngàn đơn hàng không độ trễ, tối ưu năng suất chuỗi bán lẻ.' }
  },
  {
    path: '/giai-phap',
    name: 'solutions',
    component: () => import('@/views/SolutionsView.vue'),
    meta: { title: 'Giải Pháp Vận Hành Chuỗi Cung Ứng Theo Ngành — eCor', description: 'Các giải pháp chuyên sâu từ eCor SaaS dành cho FMCG, Bán Lẻ, Vận tải và 3PL Logistics. Khai thác sức mạnh từ Single Source of Truth.' }
  },
  {
    path: '/bang-gia',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: { title: 'Bảng Giá Dịch Vụ & Gói Bản Quyền — eCor' }
  },
  {
    path: '/khach-hang',
    name: 'customers',
    component: () => import('@/views/CustomersView.vue'),
    meta: { title: 'Khách Hàng Tiêu Biểu & Câu Chuyện Thành Công — eCor' }
  },
  {
    path: '/tai-nguyen',
    name: 'resources',
    component: () => import('@/views/ResourcesView.vue'),
    meta: { title: 'Tài Nguyên, Tài Liệu API & Hướng Dẫn Tích Hợp — eCor' }
  },
  {
    path: '/lien-he',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Liên Hệ & Đăng Ký Khảo Sát Giải Pháp — eCor' }
  },
  {
    path: '/dang-nhap',
    name: 'login',
    component: () => import('@/views/AuthView.vue'),
    meta: { title: 'Đăng Nhập Tài Khoản Doanh Nghiệp — eCor' }
  },
  {
    path: '/dang-ky',
    name: 'register',
    component: () => import('@/views/AuthView.vue'),
    meta: { title: 'Đăng Ký Tài Khoản Doanh Nghiệp — eCor' }
  },

  // Aliases & Backward Compatibility Redirects
  { path: '/san-pham/wms', redirect: '/wms' },
  { path: '/san-pham/tms', redirect: '/tms' },
  { path: '/san-pham/pos', redirect: '/pos' },
  { path: '/ke-toan', redirect: '/pos' },
  { path: '/account', redirect: '/pos' },
  { path: '/ecom', redirect: '/pos' },
  { path: '/mo-rong/:pathMatch(.*)*', redirect: '/wms' },
  { path: '/giai-phap/:pathMatch(.*)*', redirect: '/giai-phap' },
  { path: '/ve-chung-toi', redirect: '/khach-hang' },

  // Fallback
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
    
    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', to.meta.title);
    
    // Update Twitter Title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', to.meta.title);
  }

  if (to.meta && to.meta.description) {
    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', to.meta.description);
    
    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', to.meta.description);
    
    // Update Twitter Description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', to.meta.description);
  }
})

export default router
