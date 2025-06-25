<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import { useI18n } from 'vue-i18n';
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
