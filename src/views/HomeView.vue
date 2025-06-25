<!-- src/views/HomeView.vue -->
<template>
  <div class="home-view">
    <header class="main-header">
      <div class="logo">
        <span class="logo-text">RTTY</span>
      </div>
      <nav class="main-nav">
        <a href="#features" class="nav-link">{{ t('nav.features') }}</a>
        <a href="https://github.com/zhaojh329/rttys-doc" target="_blank" class="nav-link">{{ t('nav.docs') }}</a>
        <a href="https://github.com/zhaojh329/rttys" target="_blank" class="nav-link">{{ t('nav.github') }}</a>
      </nav>
      <div class="header-right">
        <el-switch
          v-model="isChinese"
          @change="toggleLanguage"
          active-text="中"
          inactive-text="EN"
          inline-prompt
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #409eff"
        ></el-switch>
      </div>
    </header>

    <main class="main-content">
      <!-- 
        FIX: 整个 hero-section 已被完全重写，修复了所有HTML结构问题和国际化问题。
      -->
      <div class="hero-section">
        <div class="title-container">
          <h1 class="main-title">{{ t('hero.title_line1') }}</h1>
          <h2 class="sub-title">{{ t('hero.title_line2') }}</h2>
        </div>

        <p class="description" v-html="t('hero.subtitle')"></p>
        
        <div class="cta-buttons">
          <el-button type="primary" class="cta-button" @click="handleStart">{{ t('hero.cta_button') }}</el-button>
          <el-button class="cta-button secondary" @click="handleViewSource">{{ t('nav.github') }}</el-button>
        </div>
      </div>
      <!-- .hero-section 结束 -->

      <div id="features" class="features-section">
        <!-- 这里可以放你未来的特性展示区 -->
      </div>
    </main>

    <footer class="main-footer">
      <p>© 2024 RTTY. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()

// 语言切换逻辑
const isChinese = ref(locale.value === 'zh')
const toggleLanguage = (value) => {
  locale.value = value ? 'zh' : 'en'
}

const handleStart = () => {
  // 跳转到你的终端页面
  router.push('/terminal') // 假设你的终端页路由是 /terminal
}

const handleViewSource = () => {
  window.open('https://github.com/zhaojh329/rttys', '_blank')
}
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(26, 26, 26, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #fff;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  max-width: 800px;
}

.title-container {
  margin-bottom: 1.5rem;
}

.main-title {
  font-size: 3rem;
  font-weight: 300;
  color: #e0e0e0;
  margin: 0;
}

.sub-title {
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  background: -webkit-linear-gradient(45deg, #409eff, #aa58e8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  font-size: 1.2rem;
  color: #aaa;
  margin: 0 auto 2.5rem;
  max-width: 600px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.cta-button {
  padding: 1.5rem 2rem;
  font-size: 1rem;
}

.main-footer {
  text-align: center;
  padding: 1rem;
  color: #666;
  font-size: 0.9rem;
}
</style>
