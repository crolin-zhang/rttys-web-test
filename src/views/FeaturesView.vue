<template>
  <div class="page-container">
    <h1 class="page-title">{{ t('features.title') }}</h1>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <span>{{ t('features.lightweightClient.title') }}</span>
            </div>
          </template>
          <p>{{ t('features.lightweightClient.desc') }}</p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <span>{{ t('features.easyDeploy.title') }}</span>
            </div>
          </template>
          <p>{{ t('features.easyDeploy.desc') }}</p>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <el-card class="feature-card">
          <template #header>
            <div class="card-header">
              <span>{{ t('features.webAccess.title') }}</span>
            </div>
          </template>
          <p>{{ t('features.webAccess.desc') }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.page-container {
  max-width: 960px;
  margin: 40px auto;
  padding: 20px;
}
.page-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}
.feature-card {
  height: 100%;
  margin-bottom: 20px;
}
.card-header span {
  font-weight: bold;
}
</style>
