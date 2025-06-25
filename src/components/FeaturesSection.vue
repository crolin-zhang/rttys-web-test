<script setup>
import { useI18n } from 'vue-i18n';

// 确保使用全局作用域
const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <!-- 使用 t() 函数 -->
        <h2>{{ t('features.title') }}</h2>
        <p>{{ t('features.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <!-- 使用 t() 函数 -->
          <h3>{{ t('features.cards.lightweight.title') }}</h3>
          <p>{{ t('features.cards.lightweight.desc') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ t('features.cards.web_access.title') }}</h3>
          <p>{{ t('features.cards.web_access.desc') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ t('features.cards.secure.title') }}</h3>
          <p>{{ t('features.cards.secure.desc') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ t('features.cards.cross_platform.title') }}</h3>
          <p>{{ t('features.cards.cross_platform.desc') }}</p>
        </div>
         <div class="feature-card">
          <h3>{{ t('features.cards.file_transfer.title') }}</h3>
          <p>{{ t('features.cards.file_transfer.desc') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ t('features.cards.open_source.title') }}</h3>
          <p>{{ t('features.cards.open_source.desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features { padding: 5rem 0; background-color: var(--color-card-bg); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.5rem; }
.section-header p { font-size: 1.1rem; color: #555; max-width: 500px; margin: 0 auto; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.feature-card { background-color: var(--color-background); padding: 2rem; border-radius: var(--border-radius); border: 1px solid var(--color-border); transition: transform 0.2s ease, box-shadow 0.2s ease; }
.feature-card:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
.feature-card h3 { font-size: 1.25rem; margin-bottom: 1rem; color: var(--color-primary); }
.feature-card p { line-height: 1.7; }
</style>
