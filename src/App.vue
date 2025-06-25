<!-- src/App.vue -->
<template>
  <div id="app-container">
    <!-- 粒子背景组件 -->
    <Particles id="tsparticles" :options="particlesOptions" @load="particlesLoaded" />

    <!-- 页面内容 -->
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script setup>
// 这个函数只是为了在控制台确认粒子已加载，可以安全地保留或删除。
const particlesLoaded = (container) => {
  console.log('Particles container loaded', container)
}

// 粒子效果的配置
const particlesOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1 // 确保它在最底层
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.15,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true,
  background: {
    color: '#1a1a1a' // 这是你的网站背景色
  }
}
</script>

<style>
/* 全局样式 */
html {
  scroll-behavior: smooth;
}

body {
  /* 
    FIX: 删除了 background-color: #f0f2f5; 
    这一行是导致粒子效果被遮挡的元凶。
    现在背景色由粒子的 'background.color' 属性控制。
  */
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  color: #f0f0f0; /* 设置一个适合深色背景的默认文字颜色 */
}

#app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 确保内容在粒子层之上 */
.content-wrapper {
  position: relative;
  z-index: 1;
}
</style>
