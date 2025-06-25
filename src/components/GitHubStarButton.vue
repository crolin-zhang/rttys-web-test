<template>
  <el-button @click="openGitHub" round>
    <el-icon style="margin-right: 8px;"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 0C229.2 0 0 229.2 0 512c0 226.2 146.7 418.2 350.2 485.8 25.5 4.8 34.8-11.1 34.8-24.6 0-12-0.5-54.8-0.7-97.5-142.4 30.9-172.5-60.8-172.5-60.8-23.2-59-56.8-74.8-56.8-74.8-46.3-31.7 3.5-31 3.5-31 51.3 3.6 78.3 52.6 78.3 52.6 45.6 78.1 119.5 55.5 148.6 42.5 4.6-33 17.9-55.5 32.4-68.3-113.4-12.9-232.5-56.7-232.5-252.3 0-55.8 19.9-101.4 52.6-137.1-5.3-12.9-22.8-64.8 5-135.2 0 0 42.9-13.7 140.5 52.3 40.8-11.3 84.6-17 128.1-17.2 43.5 0.2 87.3 5.8 128.1 17.2 97.6-66 140.5-52.3 140.5-52.3 27.8 70.4 10.3 122.3 5 135.2 32.7 35.7 52.6 81.3 52.6 137.1 0 196.1-119.3 239.3-233 251.8 18.4 15.9 34.7 47.1 34.7 94.9 0 68.3-0.6 123.4-0.6 140.1 0 13.6 9.2 29.6 35.1 24.6C877.3 930.2 1024 738.2 1024 512 1024 229.2 794.8 0 512 0z"/></svg></el-icon>
    Star
    <el-divider direction="vertical" />
    <span class="star-count">{{ starCount }}</span>
  </el-button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const starCount = ref('...');
const openGitHub = () => window.open('https://github.com/zhaojh329/rtty', '_blank');

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/zhaojh329/rtty');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    starCount.value = data.stargazers_count.toLocaleString('en-US');
  } catch (error) {
    console.error("Failed to fetch GitHub stars:", error);
    starCount.value = 'N/A';
  }
});
</script>

<style scoped>
.el-button {
  transition: all 0.3s ease;
}
.star-count {
  min-width: 30px;
  text-align: center;
}
</style>
