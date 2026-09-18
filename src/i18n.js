import { createI18n } from 'vue-i18n'
import vi from './locales/vi.json'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('ecor-lang') || 'vi';

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: savedLocale, // default locale
  fallbackLocale: 'vi',
  messages: {
    vi,
    en
  }
})

export default i18n
