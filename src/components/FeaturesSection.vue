<template>
  <div class="features-section">
    <div class="section-header">
      <h2 class="gradient-text">{{ $t('features.title') }}</h2>
      <p class="section-subtitle">{{ $t('features.subtitle') }}</p>
    </div>
    <el-row :gutter="30" class="features-grid">
      <el-col :xs="24" :sm="12" :md="8" v-for="feature in features" :key="feature.title">
        <div class="feature-card">
          <div class="card-header">
            <el-icon :size="24" class="feature-icon" :color="feature.color">
              <Cpu v-if="feature.icon === 'Cpu'" />
              <UploadFilled v-if="feature.icon === 'UploadFilled'" />
              <Folder v-if="feature.icon === 'Folder'" />
              <Lock v-if="feature.icon === 'Lock'" />
              <Share v-if="feature.icon === 'Share'" />
              <Platform v-if="feature.icon === 'Platform'" />
            </el-icon>
            <h3 class="feature-title">{{ $t(feature.title) }}</h3>
          </div>
          <p class="feature-description">{{ $t(feature.description) }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
const features = [
  { icon: 'Cpu', title: 'features.lightweight.title', description: 'features.lightweight.desc', color: '#10b981' },
  { icon: 'UploadFilled', title: 'features.fileTransfer.title', description: 'features.fileTransfer.desc', color: '#3b82f6' },
  { icon: 'Folder', title: 'features.webFileManager.title', description: 'features.webFileManager.desc', color: '#f97316' },
  { icon: 'Lock', title: 'features.ssl.title', description: 'features.ssl.desc', color: '#ef4444' },
  { icon: 'Share', title: 'features.sharing.title', description: 'features.sharing.desc', color: '#8b5cf6' },
  { icon: 'Platform', title: 'features.crossPlatform.title', description: 'features.crossPlatform.desc', color: '#64748b' }
]
</script>
<style scoped>
.features-section { padding: 80px 24px; max-width: 1200px; margin: 0 auto; background-color: var(--bg-color); position: relative; }
.section-header { text-align: center; margin-bottom: 60px; }
.section-header h2 { font-size: 3rem; font-weight: 800; letter-spacing: -0.05em; margin-bottom: 1rem; }
.section-subtitle { font-size: 1.25rem; color: var(--text-color-light); max-width: 600px; margin: 0 auto; }
.features-grid .el-col { margin-bottom: 30px; display: flex; }
.feature-card { display: flex; flex-direction: column; width: 100%; padding: 32px; height: 100%; border-radius: 16px; background-color: var(--bg-color-soft); border: 1px solid var(--border-color); transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
.feature-card:hover { transform: translateY(-10px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border-color: var(--accent-color-1); }
html.dark .feature-card:hover { box-shadow: none; }
.card-header { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.feature-title { margin: 0; font-size: 1.25rem; font-weight: 600; color: var(--text-color); }
.feature-description { font-size: 1rem; line-height: 1.6; color: var(--text-color-light); flex-grow: 1; }
</style>
