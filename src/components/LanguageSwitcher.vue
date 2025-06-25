<template>
  <div class="language-switcher">
    <a href="#" @click.prevent="setLocale('en')" :class="{ active: currentLocale === 'en' }">EN</a>
    <span class="separator">/</span>
    <a href="#" @click.prevent="setLocale('zh')" :class="{ active: currentLocale === 'zh' }">中</a>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// 直接导入 i18n 实例来进行修改！
import i18n from '@/i18n';

// 使用 computed 属性来响应式地获取当前语言
const currentLocale = computed(() => i18n.global.locale.value);

function setLocale(newLocale) {
  // 直接修改全局实例的 locale
  i18n.global.locale.value = newLocale;
  // 将用户的选择保存到 localStorage，以便下次访问时记住
  localStorage.setItem('locale', newLocale);
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid var(--color-border);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background-color: var(--color-card-bg);
}
.language-switcher a {
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.6;
  transition: opacity 0.2s, color 0.2s;
}
.language-switcher a.active,
.language-switcher a:hover {
  opacity: 1;
  color: var(--color-primary);
}
.separator {
  color: var(--color-border);
}
</style>
