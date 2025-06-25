<template>
  <!-- 关键修复：添加 direction="vertical" -->
  <el-container direction="vertical">
    <AppHeader />
    <el-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-main>
  </el-container>
</template>

<style>
/* 确保容器占满整个视口高度 */
html, body, #app, .el-container {
  height: 100%;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
