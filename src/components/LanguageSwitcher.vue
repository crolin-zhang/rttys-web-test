<template>
  <div class="language-switcher">
    <!-- 我们不再需要 :class，因为整个页面都会刷新 -->
    <a href="#" @click.prevent="setLocale('en')">EN</a>
    <span class="separator">/</span>
    <a href="#" @click.prevent="setLocale('zh')">中</a>
  </div>
</template>

<script setup>
// 不再直接导入 i18n 实例！
import { useI18n } from 'vue-i18n';

// 通过 useI18n 钩子获取全局的 locale 引用
// 这是唯一正确的、与 Vue 响应式系统集成的方式
const { locale } = useI18n({ useScope: 'global' });

function setLocale(newLocale) {
  // 修改从钩子中获取的 locale ref，这将触发所有依赖项的更新
  locale.value = newLocale;
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
.language-switcher a:hover {
  opacity: 1;
  color: var(--color-primary);
}
.separator {
  color: var(--color-border);
}
</style>
