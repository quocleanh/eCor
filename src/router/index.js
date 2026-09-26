import { createRouter, createWebHistory } from 'vue-router'
import { routeMappings } from './routes'
import i18n from '@/i18n'
import { DASHBOARD_URL } from '@/config/links'

const routes = []

routeMappings.forEach(mapping => {
  Object.keys(mapping.paths).forEach(locale => {
    routes.push({
      path: mapping.paths[locale],
      name: `${mapping.name}___${locale}`,
      component: mapping.component,
      meta: { ...mapping.meta, locale, baseName: mapping.name }
    })
  })
})

// Aliases & Backward Compatibility Redirects
routes.push(
  { path: '/san-pham/wms', redirect: '/wms' },
  { path: '/san-pham/tms', redirect: '/tms' },
  { path: '/san-pham/pos', redirect: '/pos' },
  { path: '/account', redirect: '/ke-toan' },
  { path: '/ecom', redirect: '/pos' },
  { path: '/mo-rong/:pathMatch(.*)*', redirect: '/wms' },
  { path: '/giai-phap/:pathMatch(.*)*', redirect: '/giai-phap' },
  { path: '/gach-op-lat', redirect: '/giai-phap-nganh-gach' },
  { path: '/ve-chung-toi', redirect: '/khach-hang' },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
)

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

router.beforeEach((to, from, next) => {
  if (['login', 'register'].includes(to.meta.baseName)) {
    window.location.replace(DASHBOARD_URL);
    return next(false);
  }
  const targetLocale = to.meta.locale;
  if (targetLocale) {
    // Sync i18n
    i18n.global.locale.value = targetLocale;
    // Save to localStorage
    localStorage.setItem('ecor-lang', targetLocale);
    
    // Set document lang
    document.documentElement.lang = targetLocale;
  }
  next();
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
