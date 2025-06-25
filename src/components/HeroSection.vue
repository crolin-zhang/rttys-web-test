<script setup>
import { useI18n } from 'vue-i18n';

// 确保使用全局作用域
const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <!-- Hero Section 不再有 Particles 组件 -->
  <section class="hero">
    <div class="container hero-content">
      <h1 class="hero-title">{{ t('hero.title') }}</h1>
      <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
      
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
          <div class="terminal-title">rtty@my-device:~</div>
        </div>
        <div class="terminal-body">
          <pre><code><span class="prompt">$</span> ./rtty -I <span class="token">my-device-id</span> -h rttys.net -p 5912 -d "My Pi" -a
<span class="output">2023-10-27 10:30:00 INF {{ t('hero.terminal.line1') }}
2023-10-27 10:30:01 INF {{ t('hero.terminal.line2') }}
2023-10-27 10:30:01 INF {{ t('hero.terminal.line3') }}
2023-10-27 10:30:01 INF {{ t('hero.terminal.line4') }}</span>
<span class="link">https://rttys.net/s/my-device-id</span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 移除了所有与 particles-bg 相关的样式 */
.hero { 
  padding: 6rem 0; 
  text-align: center; 
  /* 添加一个简单的背景色作为替代 */
  background-color: #f8f9fa;
  border-bottom: 1px solid var(--color-border);
}
.hero-content { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
}
.hero-title { font-size: 3.5rem; font-weight: 800; line-height: 1.2; max-width: 800px; margin-bottom: 1.5rem; letter-spacing: -0.05em; color: var(--color-heading); }
.hero-subtitle { font-size: 1.25rem; max-width: 650px; color: #333; margin-bottom: 3rem; }
.terminal-window { width: 100%; max-width: 720px; border-radius: var(--border-radius); background-color: #1e1e1e; box-shadow: 0 10px 30px rgba(0,0,0,0.2); text-align: left; overflow: hidden; }
.terminal-header { display: flex; align-items: center; padding: 0.75rem; background-color: #333; }
.dots { display: flex; gap: 0.5rem; }
.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background-color: #ff5f56; } .dot.yellow { background-color: #ffbd2e; } .dot.green { background-color: #27c93f; }
.terminal-title { color: #ccc; font-family: var(--font-family-mono); font-size: 0.8rem; margin: 0 auto; transform: translateX(-18px); }
.terminal-body { padding: 1.5rem; font-family: var(--font-family-mono); font-size: 0.9rem; color: #d4d4d4; overflow-x: auto; line-height: 1.8; }
.terminal-body code { color: #d4d4d4; }
.prompt { color: #569cd6; } .token { color: #ce9178; } .output { color: #9cdcfe; } .link { color: #4ec9b0; text-decoration: underline;}
@media (max-width: 768px) { .hero { padding: 4rem 0; } .hero-title { font-size: 2.5rem; } .hero-subtitle { font-size: 1.1rem; } }
</style>
