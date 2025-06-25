<template>
  <div class="footer-wrapper">
    <el-footer class="app-footer">
      <el-row :gutter="40">
        <el-col :span="8">
          <h4>Resources</h4>
          <ul>
            <li><router-link to="/">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/features">{{ t('nav.features') }}</router-link></li>
            <li><router-link to="/docs">{{ t('nav.docs') }}</router-link></li>
          </ul>
        </el-col>
        <el-col :span="8">
          <h4>Community</h4>
          <ul>
            <li><a href="https://github.com/zhaojh329/rtty" target="_blank">GitHub</a></li>
            <li><a href="https://github.com/zhaojh329/rtty/issues" target="_blank">Report an Issue</a></li>
          </ul>
        </el-col>
        <el-col :span="8">
          <h4>About rtty</h4>
          <p class="about-text">A simple, yet powerful tool to access your remote terminals from anywhere.</p>
        </el-col>
      </el-row>
      <el-divider />
      <p class="copyright">{{ t('footer.copyright') }}</p>
    </el-footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.footer-wrapper {
  background-color: var(--el-fill-color-lighter);
  border-top: 1px solid var(--el-border-color-light);
  transition: background-color 0.3s ease, border-color 0.3s ease;
  z-index: 1;
  position: relative;
}

.dark .footer-wrapper {
  background-color: #1a1a1a;
}

.app-footer {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  height: auto;
}

h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: var(--el-text-color-secondary);
  transition: color 0.3s ease;
}

a:hover {
  color: var(--el-color-primary);
}

.about-text, .copyright {
  color: var(--el-text-color-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.copyright {
  text-align: center;
  margin-top: 20px;
  font-size: 0.8rem;
}
</style>
