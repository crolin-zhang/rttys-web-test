<template>
  <div class="not-found-container">
    <el-empty :description="t('notFound.message')" :image-size="200">
      <el-button type="primary" @click="$router.push('/')">{{ t('notFound.button') }}</el-button>
    </el-empty>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 180px);
}
</style>
