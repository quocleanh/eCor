import { createI18n } from 'vue-i18n'
import vi from './locales/vi.json'
import en from './locales/en.json'
import zh from './locales/zh.json'
import zhTW from './locales/zh-TW.json'

const savedLocale = localStorage.getItem('ecor-lang') || 'vi';

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: savedLocale, // default locale
  fallbackLocale: 'en',
  messages: {
    vi,
    en,
    zh,
    'zh-TW': zhTW
  }
})

export default i18n
