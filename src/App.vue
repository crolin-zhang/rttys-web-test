<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import { useI18n } from 'vue-i18n';

// 从唯一的、正确的响应式来源获取 locale：useI18n 钩子
const { locale } = useI18n();
</script>

<template>
  <TheNavbar />
  
  <main>
    <!-- 
      将 key 绑定到我们从 script 中获取的、具备响应式的 'locale' 变量。
      当 locale 变化时，这个 key 就会变化，Vue 将会销毁旧的 RouterView
      并创建一个全新的实例，从而强制页面内容重新翻译和渲染。
    -->
    <RouterView :key="locale" />
  </main>

  <TheFooter />
</template>

<style scoped>
main {
  flex-grow: 1; 
}
</style>
