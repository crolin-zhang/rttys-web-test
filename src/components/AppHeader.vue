<script setup>
const isDark = useDark();
// 这是修复的关键：获取完整的 i18n 实例
const i18n = useI18n();
const toggleLang = () => {
  // 通过实例的 locale.value 修改，才能触发全局响应
  i18n.locale.value = i18n.locale.value === 'zh-cn' ? 'en' : 'zh-cn';
};
</script>
<template>
  <el-header class="app-header">
    <router-link to="/" class="logo-container">
      <img src="/logo.svg" class="logo-img" alt="rtty Logo" />
      <span class="logo-text">rtty</span>
    </router-link>
    <div class="menu-spacer"></div>
    <div class="actions">
      <GitHubStarButton />
      <el-button @click="toggleLang" text bg round>{{ i18n.locale.value === 'zh-cn' ? 'EN' : '中文' }}</el-button>
      <el-switch v-model="isDark" inline-prompt :active-icon="Moon" :inactive-icon="Sunny" style="--el-switch-on-color: #1f2937; --el-switch-off-color: #e5e7eb" />
    </div>
  </el-header>
</template>
<style scoped>
.app-header { position: sticky; top: 0; z-index: 1000; display: flex; align-items: center; padding: 0 24px; height: 64px; background-color: var(--header-bg); backdrop-filter: saturate(180%) blur(10px); -webkit-backdrop-filter: saturate(180%) blur(10px); border-bottom: 1px solid var(--border-color); transition: background-color 0.3s ease, border-color 0.3s ease; }
.logo-container { display: flex; align-items: center; text-decoration: none; color: inherit; }
.logo-img { height: 32px; width: auto; }
.logo-text { font-size: 22px; font-weight: 700; margin-left: 12px; letter-spacing: -0.5px; }
.menu-spacer { flex-grow: 1; }
.actions { display: flex; align-items: center; gap: 16px; padding-left: 24px; }
</style>
