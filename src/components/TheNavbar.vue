<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

defineProps({
  isDark: Boolean
});

// 强制使用全局作用域
const { t } = useI18n({ useScope: 'global' });
</script>
<template>
  <header class="navbar">
    <div class="container navbar-content">
      <a href="/" class="logo"><img src="/logo.svg" alt="RTTY Logo" class="logo-img" /><span class="logo-text">rtty</span></a>
      <div class="navbar-right">
        <nav class="nav-links">
          <a href="#features" class="nav-link">{{ t('nav.features') }}</a>
          <a href="https://github.com/zhaojh329/rtty" target="_blank" class="nav-link">{{ t('nav.github') }}</a>
          <a href="/docs" class="nav-link">{{ t('nav.docs') }}</a>
          <a href="https://github.com/zhaojh329/rtty/releases" target="_blank" class="nav-link">{{ t('nav.download') }}</a>
        </nav>
        <div class="nav-actions">
          <button @click="$emit('toggle-dark')" class="theme-toggle">
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.navbar { width: 100%; padding: 1rem 0; background-color: color-mix(in srgb, var(--color-background) 85%, transparent); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 10; backdrop-filter: blur(5px); transition: background-color 0.5s, border-color 0.5s; }
.navbar-content { display: flex; justify-content: space-between; align-items: center; }
.logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.logo-img { height: 32px; margin-right: 0.5rem; }
.logo-text { font-size: 1.5rem; font-weight: 800; color: var(--color-heading); }
.navbar-right { display: flex; align-items: center; gap: 1rem; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-link { text-decoration: none; color: var(--color-text); font-weight: 500; transition: color 0.2s ease; white-space: nowrap; }
.nav-link:hover { color: var(--color-primary); }
.nav-actions { display: flex; align-items: center; gap: 1rem; }
.theme-toggle { background: none; border: 1px solid var(--color-border); border-radius: 6px; cursor: pointer; padding: 0.25rem; display: flex; align-items: center; justify-content: center; color: var(--color-text); }
.theme-toggle:hover { background-color: var(--color-card-bg); }
.theme-toggle svg { width: 20px; height: 20px; }
.dark .logo-img { filter: invert(1) hue-rotate(180deg); }
@media (max-width: 920px) { .navbar-right { display: none; } }
</style>
