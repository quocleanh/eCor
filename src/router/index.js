import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ModuleDetailView from '@/views/ModuleDetailView.vue'
import SolutionDetailView from '@/views/SolutionDetailView.vue'
import PricingView from '@/views/PricingView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 3 Module Lõi Trọng Tâm
  {
    path: '/pos',
    name: 'module-pos',
    component: ModuleDetailView
  },
  {
    path: '/wms',
    name: 'module-wms',
    component: ModuleDetailView
  },
  {
    path: '/ke-toan',
    name: 'module-ke-toan',
    component: ModuleDetailView
  },
  {
    path: '/account',
    redirect: '/ke-toan'
  },
  // 5 Module Mở Rộng Hệ Sinh Thái (/mo-rong/...)
  {
    path: '/mo-rong/ecom',
    name: 'module-mo-rong-ecom',
    component: ModuleDetailView
  },
  {
    path: '/mo-rong/tms',
    name: 'module-mo-rong-tms',
    component: ModuleDetailView
  },
  {
    path: '/mo-rong/hrm',
    name: 'module-mo-rong-hrm',
    component: ModuleDetailView
  },
  {
    path: '/mo-rong/mobile-app',
    name: 'module-mo-rong-mobile-app',
    component: ModuleDetailView
  },
  {
    path: '/mo-rong/crm',
    name: 'module-mo-rong-crm',
    component: ModuleDetailView
  },
  // Redirect tương thích URL cũ sang /mo-rong/...
  { path: '/ecom', redirect: '/mo-rong/ecom' },
  { path: '/tms', redirect: '/mo-rong/tms' },
  { path: '/hrm', redirect: '/mo-rong/hrm' },
  { path: '/mobile-app', redirect: '/mo-rong/mobile-app' },
  { path: '/crm', redirect: '/mo-rong/crm' },

  // Giải Pháp Ngành Nghề
  {
    path: '/giai-phap/:slug',
    name: 'solution-detail',
    component: SolutionDetailView
  },
  // Các Trang Bổ Trợ
  {
    path: '/bang-gia',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/ve-chung-toi',
    name: 'about',
    component: AboutView
  },
  {
    path: '/lien-he',
    name: 'contact',
    component: ContactView
  },
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

export default router
