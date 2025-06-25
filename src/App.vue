<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="common-layout">
      <el-container>
        <AppHeader />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style>
/* 全局样式可以放在这里或 assets/main.css */
body {
  margin: 0;
  background-color: var(--el-bg-color-page);
}
.el-main {
  padding: 0;
}
</style>
