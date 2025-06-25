import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

// 尝试从 localStorage 获取语言设置，否则根据浏览器语言判断
const savedLocale = localStorage.getItem('locale');
const defaultLocale = savedLocale || (navigator.language.startsWith('zh') ? 'zh' : 'en');

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: defaultLocale,
  fallbackLocale: 'en', // 回退语言
  messages: {
    en,
    zh
  }
})

export default i18n
