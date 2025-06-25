import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const messages = {
  en,
  zh,
}

// 尝试从 localStorage 获取语言，否则根据浏览器语言决定，默认为英文
const savedLanguage = localStorage.getItem('lang')
const browserLanguage = navigator.language.startsWith('zh') ? 'zh' : 'en'
const locale = savedLanguage || browserLanguage

const i18n = createI18n({
  legacy: false, // 必须为 false，才能在 Composition API 中使用
  locale: locale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
