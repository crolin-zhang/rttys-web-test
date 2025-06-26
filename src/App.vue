<script setup>
import { computed } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import AnimatedBackground from './components/AnimatedBackground.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div :class="{ dark: isDark }" class="app-container">
    <TheNavbar :isDark="isDark" @toggle-dark="toggleDark" />
    <main>
      <router-view />
    </main>
    <TheFooter />
    <AnimatedBackground />
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

main {
  flex: 1;
}
</style>