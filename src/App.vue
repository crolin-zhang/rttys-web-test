<script setup>
import { computed } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import ParticleBackground from './components/ParticleBackground.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const particleColor = computed(() => (isDark.value ? '#ffffff' : '#000000'));
</script>

<template>
  <div :class="{ dark: isDark }">
    <TheNavbar :isDark="isDark" @toggle-dark="toggleDark" />
    <main>
      <router-view />
    </main>
    <TheFooter />
    <ParticleBackground :color="particleColor" />
  </div>
</template>

<style scoped>
main {
  flex: 1;
}
</style>