<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import { useI18n } from 'vue-i18n';

// 强制使用全局作用域，并获取响应式的 locale
const { locale } = useI18n({ useScope: 'global' });
</script>
<template>
  <TheNavbar />
  <main>
    <RouterView :key="locale" />
  </main>
  <TheFooter />
</template>
<style scoped>
main { flex-grow: 1; }
</style>
