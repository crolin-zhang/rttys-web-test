<template>
  <div class="feature-card">
    <div class="icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
});
</script>

<style scoped>
.feature-card {
  background-color: rgba(42, 42, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}
.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 0.75rem;
  color: #fff;
  font-weight: 600;
}
p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
