import { createI18n } from 'vue-i18n'
import enMessages from './locales/en.js'
import zhMessages from './locales/zh.js'
const savedLocale = localStorage.getItem('locale');
const defaultLocale = savedLocale || (navigator.language.startsWith('zh') ? 'zh' : 'en');
const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: { en: enMessages, zh: zhMessages }
})
export default i18n
