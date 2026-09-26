import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/main.css'
import { DOCS_URL, DASHBOARD_URL } from './config/links'

const app = createApp(App)

app.use(router)
app.use(i18n)

app.config.globalProperties.$links = { docs: DOCS_URL, dashboard: DASHBOARD_URL }

// Inject Global Route Helpers
app.config.globalProperties.$localeRoute = (baseName) => {
  const currentLocale = i18n.global.locale.value || 'vi';
  return { name: `${baseName}___${currentLocale}` };
};

app.config.globalProperties.$switchLocaleRoute = (targetLang) => {
  const currentRoute = router.currentRoute.value;
  const baseName = currentRoute.meta.baseName || 'home';
  return { name: `${baseName}___${targetLang}` };
};

app.mount('#app')
