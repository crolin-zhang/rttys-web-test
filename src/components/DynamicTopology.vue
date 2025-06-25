<template>
  <div class="topology-container" ref="container">
    <svg width="100%" height="100%" viewBox="0 0 500 300">
      <!-- Defs for markers and gradients -->
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" :fill="lineColor" />
        </marker>
      </defs>

      <!-- Nodes -->
      <g class="node" id="node-device1">
        <circle cx="50" cy="80" r="25" class="node-bg" />
        <text x="50" y="85" text-anchor="middle" class="icon">💻</text>
        <text x="50" y="125" text-anchor="middle" class="label">Device A</text>
      </g>
      <g class="node" id="node-device2">
        <circle cx="50" cy="220" r="25" class="node-bg" />
        <text x="50" y="225" text-anchor="middle" class="icon">📠</text>
        <text x="50" y="265" text-anchor="middle" class="label">Device B (NAT)</text>
      </g>
      <g class="node" id="node-server">
        <circle cx="250" cy="150" r="35" class="node-bg server" />
        <text x="250" y="155" text-anchor="middle" class="icon server-icon">☁️</text>
        <text x="250" y="205" text-anchor="middle" class="label">rtty Server</text>
      </g>
      <g class="node" id="node-browser">
        <circle cx="450" cy="150" r="30" class="node-bg" />
        <text x="450" y="155" text-anchor="middle" class="icon">🌐</text>
        <text x="450" y="200" text-anchor="middle" class="label">Your Browser</text>
      </g>

      <!-- Lines -->
      <path id="line-device1" class="line" d="M 75 80 H 215" stroke-dasharray="5,5" />
      <path id="line-device2" class="line" d="M 75 220 C 150 220, 150 150, 215 150" stroke-dasharray="5,5" />
      <path id="line-browser" class="line" d="M 285 150 H 420" stroke-dasharray="5,5" />
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import anime from 'animejs';
import { useDark } from '@vueuse/core';

const isDark = useDark();
const lineColor = ref(isDark.value ? 'rgba(74, 74, 74, 0.8)' : 'rgba(204, 204, 204, 0.8)');
const animation = ref(null);

watch(isDark, (newVal) => {
  lineColor.value = newVal ? 'rgba(74, 74, 74, 0.8)' : 'rgba(204, 204, 204, 0.8)';
  if (animation.value) {
    animation.value.pause();
    createAnimation();
    animation.value.play();
  }
});

const createAnimation = () => {
  const line1 = document.querySelector('#line-device1');
  const line2 = document.querySelector('#line-device2');
  const line3 = document.querySelector('#line-browser');

  if (!line1 || !line2 || !line3) return;

  anime.set([line1, line2, line3], { strokeDashoffset: anime.setDashoffset });

  animation.value = anime.timeline({
    easing: 'easeInOutSine',
    duration: 1500,
    loop: true,
  })
  .add({
    targets: '#node-device1, #node-device2',
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 500,
    easing: 'easeOutExpo',
  })
  .add({
    targets: [line1, line2],
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: anime.stagger(200),
  }, '-=300')
  .add({
    targets: '#node-server text.server-icon',
    scale: [1, 1.3, 1],
    duration: 800,
    easing: 'easeInOutElastic(1, .6)'
  }, '-=1000')
  .add({
    targets: line3,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
  })
  .add({
    targets: '#node-browser',
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 500,
    easing: 'easeOutExpo',
  }, '-=800')
  .add({
    targets: [line1, line2, line3, '.node'],
    opacity: 0,
    duration: 1000,
    delay: 2000,
    easing: 'easeInExpo'
  })
  .add({
    targets: [line1, line2, line3],
    strokeDashoffset: [0, anime.setDashoffset],
    duration: 10,
  })
  .add({
    targets: ['.node'],
    opacity: [1],
    duration: 10,
  })
}

onMounted(createAnimation);
onUnmounted(() => {
  if (animation.value) animation.value.pause();
});
</script>

<style scoped>
.topology-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.node .icon { font-size: 24px; }
.node .label { font-size: 14px; fill: var(--el-text-color-secondary); }
.node-bg { fill: var(--el-bg-color-page); stroke: var(--el-border-color); stroke-width: 1; transition: fill 0.3s ease; }
.node-bg.server { r: 40; }
.icon.server-icon { font-size: 32px; }
.line {
  stroke: v-bind(lineColor);
  stroke-width: 2px;
  fill: none;
  marker-end: url(#arrow);
}
</style>
