<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-content">
      <p>© {{ new Date().getFullYear() }} The rtty authors. All rights reserved.</p>
      <p>
        Sponsored by
        <a href="https://github.com/crolin-zhang" target="_blank">crolin-zhang</a>.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding: 2rem 0;
  background-color: #f8f9fa;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.9rem;
  color: #6c757d;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content a {
  color: var(--color-primary);
  text-decoration: none;
}
.footer-content a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
