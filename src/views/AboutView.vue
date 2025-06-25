<template>
  <div class="page-container">
    <h1 class="page-title">{{ t('about.title') }}</h1>
    <el-card>
      <p>{{ t('about.p1') }}</p>
      <el-divider />
      <p>{{ t('about.p2') }}</p>
    </el-card>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 40px auto;
}
.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
}
p {
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>
