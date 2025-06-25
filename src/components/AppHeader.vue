<script setup>
// 插件会自动处理所有依赖，我们保持 script 干净
import { useDark } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const isDark = useDark()
const { t, locale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
<template>
  <el-header class="app-header">
    <router-link to="/" class="logo-container">
      <img src="/logo.svg" class="logo-svg" alt="rtty Logo" />
    </router-link>
    <div class="menu-spacer"></div>
    <el-menu mode="horizontal" :router="true" class="nav-menu">
      <el-menu-item index="/features">{{ t('nav.features') }}</el-menu-item>
    </el-menu>
    <div class="actions">
      <el-button @click="toggleLang" text>{{ locale === 'zh-cn' ? 'EN' : '中文' }}</el-button>
      <el-switch v-model="isDark" inline-prompt :active-icon="Moon" :inactive-icon="Sunny" />
    </div>
  </el-header>
</template>
<style scoped>
.app-header { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; padding: 0 24px; height: 60px; background-color: var(--header-bg); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border-bottom: 1px solid var(--border-color); }
.logo-container { display: flex; align-items: center; }
.logo-svg { height: 24px; }
.menu-spacer { flex-grow: 1; }
.nav-menu { background-color: transparent; border-bottom: none; }
.actions { display: flex; align-items: center; gap: 15px; }
</style>
