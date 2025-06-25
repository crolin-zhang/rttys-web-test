<template>
  <div class="page-container">
    <h1 class="page-title">{{ t('docs.title') }}</h1>
    <el-card>
      <p>{{ t('docs.p1') }}</p>
      <el-button type="primary" @click="openGitHub">
        {{ t('docs.button') }}
      </el-button>
    </el-card>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const openGitHub = () => {
  window.open('https://github.com/zhaojh329/rtty', '_blank');
}
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
}
.page-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
p {
  line-height: 1.8;
  margin-bottom: 20px;
}
</style>
