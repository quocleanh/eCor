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
  // 8 Modules Direct Clean URLs
  {
    path: '/pos',
    name: 'module-pos',
    component: ModuleDetailView
  },
  {
    path: '/ecom',
    name: 'module-ecom',
    component: ModuleDetailView
  },
  {
    path: '/wms',
    name: 'module-wms',
    component: ModuleDetailView
  },
  {
    path: '/tms',
    name: 'module-tms',
    component: ModuleDetailView
  },
  {
    path: '/hrm',
    name: 'module-hrm',
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
  {
    path: '/mobile-app',
    name: 'module-mobile-app',
    component: ModuleDetailView
  },
  {
    path: '/crm',
    name: 'module-crm',
    component: ModuleDetailView
  },
  // Solutions By Industry
  {
    path: '/giai-phap/:slug',
    name: 'solution-detail',
    component: SolutionDetailView
  },
  // Supporting Pages
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
  // Catch-all fallback
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
