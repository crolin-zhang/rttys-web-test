<template>
  <el-header class="app-header">
    <div class="logo-container">
      <router-link to="/" class="logo-link">
        <img src="@/assets/logo.svg" alt="rtty logo" class="logo-img" />
        <span class="logo-text">rtty</span>
      </router-link>
    </div>
    <el-menu mode="horizontal" :ellipsis="false" class="app-menu" router :default-active="$route.path">
      <el-menu-item index="/features">{{ t('nav.features') }}</el-menu-item>
      <el-menu-item index="/docs">{{ t('nav.docs') }}</el-menu-item>
      <el-menu-item index="/about">{{ t('nav.about') }}</el-menu-item>
    </el-menu>
    <div class="flex-grow" />
    <div class="controls-container">
      <GitHubStarButton class="hide-on-mobile"/>
      <el-switch
        v-model="isDark"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
        style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #f2f2f2;"
      />
      <el-dropdown @command="handleLanguageChange" trigger="click" class="language-dropdown">
        <span class="el-dropdown-link">
          <el-icon :size="20"><component :is="TranslateIcon" /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="en" :disabled="locale === 'en'">English</el-dropdown-item>
            <el-dropdown-item command="zh" :disabled="locale === 'zh'">中文</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useDark } from '@vueuse/core';
import { Sunny, Moon } from '@element-plus/icons-vue';
import GitHubStarButton from './GitHubStarButton.vue';
import TranslateIcon from './icons/TranslateIcon.vue';

const { t, locale } = useI18n();
const isDark = useDark();

const handleLanguageChange = (lang) => {
  locale.value = lang;
  localStorage.setItem('lang', lang);
};
</script>

<style scoped>
.app-header {
  height: 65px; display: flex; align-items: center; padding: 0 30px;
  position: sticky; top: 0; z-index: 10;
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  background-color: var(--header-bg-color-light);
  border-bottom: 1px solid var(--el-border-color-light);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
.dark .app-header {
  background-color: var(--header-bg-color-dark);
  border-bottom: 1px solid var(--el-border-color-dark);
}
.logo-link { display: flex; align-items: center; text-decoration: none; color: inherit; }
.logo-img { height: 32px; width: 32px; margin-right: 10px; }
.logo-text { font-size: 22px; font-weight: bold; }
.app-menu { flex-grow: 1; background-color: transparent !important; border-bottom: none; height: 100%; }
.app-menu .el-menu-item { background-color: transparent !important; height: 100%; font-size: 1rem; }
.flex-grow { flex-grow: 1; }
.controls-container { display: flex; align-items: center; gap: 20px; }
.language-dropdown { cursor: pointer; color: var(--el-text-color-primary); display: flex; align-items: center; }

@media (max-width: 768px) {
  .hide-on-mobile { display: none; }
  .app-menu { display: none; } /* On mobile, menu can be simplified or moved to a drawer */
}
</style>
