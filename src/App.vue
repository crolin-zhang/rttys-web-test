<template>
  <el-config-provider :locale="elLocale">
    <ParticleBackground :key="particleKey" :color="particleColor" />
    <Header />
    <el-main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
    <Footer />
  </el-config-provider>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDark } from '@vueuse/core';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ParticleBackground from './components/ParticleBackground.vue';
import en from 'element-plus/dist/locale/en.mjs';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const { locale } = useI18n();
const isDark = useDark();

const elLocale = computed(() => (locale.value === 'zh' ? zhCn : en));
const particleColor = computed(() => (isDark.value ? '#4a4a4a' : '#cccccc'));
// Use key to force re-render of particle component on theme change, ensuring options are re-evaluated
const particleKey = computed(() => (isDark.value ? 'dark-particles' : 'light-particles'));
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
