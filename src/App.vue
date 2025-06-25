<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheNavbar />
  
  <main>
    <RouterView :key="$i18n.locale" />
  </main>

  <TheFooter />
</template>

<style scoped>
/* Scoped styles for App.vue can go here if needed */
main {
  /* This ensures the main content area grows to fill available space */
  flex-grow: 1; 
}
</style>
