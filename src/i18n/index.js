import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zh from './locales/zh.json';

// 尝试从 localStorage 获取语言设置，否则默认为 'zh'
const savedLanguage = localStorage.getItem('lang') || 'zh';

const i18n = createI18n({
  legacy: false, // 必须为 false，才能在 Composition API 中使用 useI18n
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
  },
});

export default i18n;
