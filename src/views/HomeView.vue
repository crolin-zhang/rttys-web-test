<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <el-row :gutter="50" align="middle" class="hero-row">
        <el-col :lg="10" :md="24" class="hero-text-col">
          <div class="hero-content">
            <h1 class="hero-title">{{ t('home.title') }}</h1>
            <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
            <p class="hero-description">{{ t('home.desc') }}</p>
            <div class="hero-actions">
              <el-button type="primary" size="large" @click="goToDocs" round>
                {{ t('home.getStarted') }}
              </el-button>
              <GitHubStarButton size="large" />
            </div>
          </div>
        </el-col>
        <el-col :lg="14" :md="24" class="hero-viz-col">
          <DynamicTopology />
        </el-col>
      </el-row>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <h2 class="section-title">How It Works</h2>
      <div class="steps-container">
        <div class="step">
          <div class="step-icon">1</div>
          <div class="step-content">
            <h3>Device Registration</h3>
            <p>Your device, even behind a firewall, initiates a persistent connection to the rtty server.</p>
          </div>
        </div>
        <div class="step-arrow">→</div>
        <div class="step">
          <div class="step-icon">2</div>
          <div class="step-content">
            <h3>Secure Tunnel</h3>
            <p>The server authenticates the device and maintains a secure reverse tunnel, waiting for your access.</p>
          </div>
        </div>
        <div class="step-arrow">→</div>
        <div class="step">
          <div class="step-icon">3</div>
          <div class="step-content">
            <h3>Web Access</h3>
            <p>You log into the rtty web UI and instantly access your device's terminal through the established tunnel.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import DynamicTopology from '@/components/DynamicTopology.vue';
import GitHubStarButton from '@/components/GitHubStarButton.vue';

const { t } = useI18n();
const router = useRouter();
const goToDocs = () => router.push('/docs');
</script>

<style scoped>
/* Hero Section */
.hero-section { min-height: calc(100vh - 65px); display: flex; align-items: center; overflow: hidden; padding: 40px 0; }
.hero-row { width: 100%; }
.hero-content { animation: fadeIn 1s ease-in-out; }
.hero-title { font-size: 3.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 20px; }
.hero-subtitle { font-size: 1.5rem; color: var(--el-text-color-secondary); margin-bottom: 25px; }
.hero-description { font-size: 1.1rem; color: var(--el-text-color-regular); margin-bottom: 40px; line-height: 1.7; }
.hero-actions { display: flex; gap: 15px; }
.hero-actions .el-button { padding: 22px 30px; font-size: 1rem; }

/* How It Works Section */
.how-it-works-section { padding: 80px 20px; text-align: center; background-color: var(--el-fill-color-light); }
.dark .how-it-works-section { background-color: rgba(0,0,0,0.2); }
.section-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 60px; }
.steps-container { display: flex; justify-content: center; align-items: flex-start; gap: 20px; flex-wrap: wrap; }
.step {
  background: var(--el-bg-color-page);
  padding: 30px;
  border-radius: 12px;
  max-width: 300px;
  flex: 1;
  box-shadow: var(--el-box-shadow-lighter);
}
.step-icon {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--el-color-primary); color: #fff;
  display: inline-flex; justify-content: center; align-items: center;
  font-weight: bold; font-size: 1.2rem; margin-bottom: 20px;
}
.step-content h3 { font-size: 1.3rem; margin-bottom: 10px; }
.step-content p { color: var(--el-text-color-secondary); }
.step-arrow { font-size: 2.5rem; color: var(--el-text-color-placeholder); align-self: center; margin-top: 20px; }

@media (max-width: 992px) {
  .hero-section { min-height: auto; padding: 60px 0; }
  .hero-text-col { text-align: center; order: 2; }
  .hero-viz-col { order: 1; margin-bottom: 50px; }
  .hero-actions { justify-content: center; }
  .steps-container { flex-direction: column; align-items: center; }
  .step-arrow { transform: rotate(90deg); }
}

@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
</style>
