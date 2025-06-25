<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n();
</script>

<template>
  <header class="navbar">
    <div class="container navbar-content">
      <a href="/" class="logo">
        <img src="/logo.svg" alt="RTTY Logo" class="logo-img" />
        <span class="logo-text">rtty</span>
      </a>
      <div class="navbar-right">
        <nav class="nav-links">
          <a href="#features" class="nav-link">{{ t('nav.features') }}</a>
          <a href="https://github.com/zhaojh329/rtty" target="_blank" class="nav-link">{{ t('nav.github') }}</a>
          <a href="#" class="nav-link">{{ t('nav.docs') }}</a>
        </nav>
        <div class="nav-actions">
          <LanguageSwitcher />
          <a href="https://github.com/zhaojh329/rtty/releases" target="_blank" class="cta-button">
            {{ t('nav.download') }}
          </a>
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
.navbar-right { display: flex; align-items: center; gap: 2rem; }
.nav-links { display: flex; gap: 1.5rem; }
.nav-link { text-decoration: none; color: var(--color-text); font-weight: 500; transition: color 0.2s ease; white-space: nowrap; }
.nav-link:hover { color: var(--color-primary); }
.nav-actions { display: flex; align-items: center; gap: 1rem; }
.cta-button { background-color: var(--color-primary); color: #fff; padding: 0.5rem 1rem; border-radius: var(--border-radius); text-decoration: none; font-weight: 500; transition: background-color 0.2s ease; white-space: nowrap; }
.cta-button:hover { background-color: #2980b9; }
@media (max-width: 820px) { .navbar-right { display: none; } }
</style>
