<script setup>
import { loadSlim } from "tsparticles-slim";
const particlesInit = async (engine) => { await loadSlim(engine); };
const isDark = useDark();
const goToGithub = () => { window.open('https://github.com/zhaojh329/rtty', '_blank'); };
// 这是复刻 rttys.net:5913 的粒子效果配置
const particleOptions = computed(() => ({
  fpsLimit: 60,
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: isDark.value ? "#374151" : "#d1d5db" },
    shape: { type: "line" },
    opacity: { value: 1, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.5, sync: false } },
    size: { value: 1, random: false },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.2, direction: "none", random: true, straight: false, out_mode: "out" }
  },
  interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false } } },
  retina_detect: true
}));
</script>
<template>
  <div>
    <div class="hero-container">
      <Particles id="tsparticles" :particlesInit="particlesInit" :options="particleOptions" />
      <div class="hero-content">
        <h1 class="hero-title"><span class="gradient-text">您的通用</span><br />远程终端 TTY</h1>
        <p class="hero-subtitle">从浏览器即可访问全球成千上万的设备。<br />轻量级 C 语言客户端，高性能 Go 语言服务端。</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" round class="action-btn primary">开始使用</el-button>
          <el-button size="large" round class="action-btn secondary" @click="goToGithub"><el-icon><Promotion /></el-icon> 查看源码</el-button>
        </div>
      </div>
    </div>
    <FeaturesSection />
  </div>
</template>
<style scoped>
.hero-container { display: flex; align-items: center; justify-content: center; text-align: center; min-height: calc(100vh - 64px); padding: 0 24px; overflow: hidden; position: relative; background-color: var(--bg-color-soft); transition: background-color 0.3s ease; }
#tsparticles { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 0; }
.hero-content { position: relative; z-index: 1; }
.hero-title { font-size: clamp(2.5rem, 8vw, 5rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.05em; margin: 0 0 1.5rem; }
.hero-subtitle { font-size: clamp(1rem, 4vw, 1.25rem); color: var(--text-color-light); margin-top: 2rem; line-height: 1.6; max-width: 600px; margin: 0 auto 2.5rem; }
.hero-actions { display: flex; justify-content: center; gap: 1rem; }
.action-btn.primary { border: none; font-weight: 600; background: linear-gradient(90deg, var(--accent-color-1) 0%, var(--accent-color-2) 100%); transition: transform 0.2s ease; }
.action-btn.primary:hover { transform: scale(1.05); }
.action-btn.secondary { font-weight: 600; background-color: var(--bg-color); border: 1px solid var(--border-color); }
</style>
