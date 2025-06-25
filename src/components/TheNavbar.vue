<script setup>
import { useI18n } from 'vue-i18n';

// 强制使用全局作用域
const { t, locale } = useI18n({ useScope: 'global' });

function setLocale(newLocale) {
  console.log(`[DEBUG] Attempting to set locale to: ${newLocale}`);
  locale.value = newLocale;
  localStorage.setItem('locale', newLocale);
  console.log(`[DEBUG] Current locale is now: ${locale.value}`);
}
</script>
<template>
  <header class="navbar">
    <div class="container navbar-content">
      <a href="/" class="logo"><img src="/logo.svg" alt="RTTY Logo" class="logo-img" /><span class="logo-text">rtty</span></a>
      <div class="navbar-right">
        <nav class="nav-links">
          <a href="#features" class="nav-link">{{ t('nav.features') }}</a>
          <a href="https://github.com/zhaojh329/rtty" target="_blank" class="nav-link">{{ t('nav.github') }}</a>
          <a href="#" class="nav-link">{{ t('nav.docs') }}</a>
        </nav>
        <div class="nav-actions">
          <!-- 调试信息 -->
          <span class="debug-info">Locale: {{ locale }}</span>
          <!-- 切换器 -->
          <div class="language-switcher">
            <a href="#" @click.prevent="setLocale('en')" :class="{ active: locale === 'en' }">EN</a>
            <span class="separator">/</span>
            <a href="#" @click.prevent="setLocale('zh')" :class="{ active: locale === 'zh' }">中</a>
          </div>
          <a href="https://github.com/zhaojh329/rtty/releases" target="_blank" class="cta-button">{{ t('nav.download') }}</a>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.navbar { width: 100%; padding: 1rem 0; background-color: rgba(255, 255, 255, 0.85); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 10; backdrop-filter: blur(5px); }
.navbar-content { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.logo-img { height: 32px; margin-right: 0.5rem; }
.logo-text { font-size: 1.5rem; font-weight: 800; color: var(--color-heading); }
.navbar-right { display: flex; align-items: center; gap: 1rem; } /* Reduced gap for debug info */
.nav-links { display: flex; gap: 1.5rem; }
.nav-link { text-decoration: none; color: var(--color-text); font-weight: 500; transition: color 0.2s ease; white-space: nowrap; }
.nav-link:hover { color: var(--color-primary); }
.nav-actions { display: flex; align-items: center; gap: 1rem; }
.cta-button { background-color: var(--color-primary); color: #fff; padding: 0.5rem 1rem; border-radius: var(--border-radius); text-decoration: none; font-weight: 500; transition: background-color 0.2s ease; white-space: nowrap; }
.cta-button:hover { background-color: #2980b9; }
.language-switcher { display: flex; align-items: center; gap: 0.25rem; border: 1px solid var(--color-border); padding: 0.25rem 0.5rem; border-radius: 6px; background-color: var(--color-card-bg); }
.language-switcher a { text-decoration: none; color: var(--color-text); font-size: 0.9rem; font-weight: 500; opacity: 0.6; transition: opacity 0.2s, color 0.2s; }
.language-switcher a.active, .language-switcher a:hover { opacity: 1; color: var(--color-primary); }
.separator { color: var(--color-border); }
/* Debug Info Style */
.debug-info { font-family: monospace; font-size: 12px; background-color: #f0f0f0; padding: 2px 6px; border-radius: 4px; color: #333; }
@media (max-width: 920px) { .navbar-right { display: none; } }
</style>
