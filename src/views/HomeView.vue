<template>
  <div class="hero-container">
    <!-- v-if 确保在引擎加载完毕后再渲染组件 -->
    <Particles v-if="particlesLoaded" id="tsparticles" :options="particleOptions" />
    <div class="hero-content">
      <h1 class="hero-title"><span class="gradient-text">您的通用</span><br />远程终端 TTY</h1>
      <p class="hero-subtitle">从浏览器即可访问全球成千上万的设备。<br />轻量级 C 语言客户端，高性能 Go 语言服务端。</p>
      <div class="hero-actions">
        <el-button type="primary" size="large" class="action-btn primary">开始使用</el-button>
        <el-button size="large" class="action-btn secondary" @click="goToGithub">
          <el-icon><Promotion /></el-icon> 查看源码
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDark } from '@vueuse/core'
import { Promotion } from '@element-plus/icons-vue' // 明确导入图标
import Particles from '@tsparticles/vue3'

// 这是最关键的修正：从 tsparticles-slim 包中导入 loadSlim
import { loadSlim } from "tsparticles-slim"; 

const particlesLoaded = ref(false);

onMounted(async () => {
  // 这是正确的初始化方式，直接调用 loadSlim
  await loadSlim(); 
  particlesLoaded.value = true;
});

const goToGithub = () => { window.open('https://github.com/zhaojh329/rtty', '_blank'); }
const isDark = useDark();
const particleOptions = computed(() => {
    const particleColor = isDark.value ? '#ffffff' : '#4f46e5';
    return { background: { color: { value: 'transparent' } }, fpsLimit: 60, interactivity: { events: { onHover: { enable: true, mode: "repulse" } } }, particles: { number: { value: 60 }, color: { value: particleColor }, shape: { type: "circle" }, opacity: { value: 0.5 }, size: { value: { min: 1, max: 3 } }, links: { color: particleColor, distance: 150, enable: true, opacity: 0.3 }, move: { enable: true, speed: 1 } } };
});
</script>
<style scoped>
.hero-container { display: flex; align-items: center; justify-content: center; text-align: center; min-height: calc(100vh - 60px - 50px); padding: 0 20px; overflow: hidden; position: relative; }
#tsparticles { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 0; }
.hero-content { position: relative; z-index: 1; }
.hero-title{font-size:72px;font-weight:900;line-height:1.1;letter-spacing:-2px;margin:0}@media (max-width:768px){.hero-title{font-size:48px}}.hero-subtitle{font-size:20px;color:var(--text-color-light);margin-top:2rem;line-height:1.6;max-width:600px;margin-left:auto;margin-right:auto}@media (max-width:768px){.hero-subtitle{font-size:18px}}.hero-actions{margin-top:3rem;display:flex;justify-content:center;gap:1rem}.action-btn.primary{background:linear-gradient(to right,var(--accent-color-1),var(--accent-color-2));border:none;transition:transform .2s ease;color:#fff}.action-btn.primary:hover{transform:scale(1.05)}.action-btn.secondary{background-color:transparent;border:1px solid var(--border-color);transition:background-color .2s ease,border-color .2s ease,color .2s ease}.action-btn.secondary:hover{background-color:var(--accent-color-1);border-color:var(--accent-color-1);color:#fff}
</style>
