<template>
  <section class="features-section">
    <h2 class="section-title">{{ t('features_section_title') }}</h2>
    <div class="features-grid">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :icon="feature.icon"
        :title="t(feature.titleKey)"
        :description="t(feature.descriptionKey)"
      />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import FeatureCard from '@/components/FeatureCard.vue';

const { t } = useI18n();

const features = [
  { icon: '🌐', titleKey: 'features.web_based.title', descriptionKey: 'features.web_based.description' },
  { icon: '🔒', titleKey: 'features.secure.title', descriptionKey: 'features.secure.description' },
  { icon: '💻', titleKey: 'features.cross_platform.title', descriptionKey: 'features.cross_platform.description' },
  { icon: '🚀', titleKey: 'features.easy_deploy.title', descriptionKey: 'features.easy_deploy.description' },
  { icon: '📂', titleKey: 'features.file_transfer.title', descriptionKey: 'features.file_transfer.description' },
  { icon: '🛡️', titleKey: 'features.access_control.title', descriptionKey: 'features.access_control.description' }
];
</script>

<style scoped>
.features-section {
  padding: 5rem 2rem;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #fff;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
