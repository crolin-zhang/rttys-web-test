<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2>Why rtty?</h2>
        <p>A suite of powerful features designed for performance and ease-of-use.</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <h3>🚀 Lightweight & Fast</h3>
          <p>The client is written in C, ensuring minimal resource consumption on your embedded devices. The Go-based server is efficient and easy to deploy.</p>
        </div>
        <div class="feature-card">
          <h3>🌐 Web-based Access</h3>
          <p>Access your device's terminal from any modern web browser, anywhere in the world. No client software needed for access.</p>
        </div>
        <div class="feature-card">
          <h3>🔒 Secure by Default</h3>
          <p>Connections can be secured with SSL/TLS, protecting your data in transit. Device access can be controlled with unique IDs.</p>
        </div>
        <div class="feature-card">
          <h3>🧩 Cross-Platform</h3>
          <p>The client runs on various Linux-based systems, including embedded devices. The server can be deployed on any major OS.</p>
        </div>
         <div class="feature-card">
          <h3>📁 File Transfer</h3>
          <p>Easily transfer files to and from your remote device directly through the web interface using zmodem (lrzsz).</p>
        </div>
        <div class="feature-card">
          <h3>👨‍💻 Open Source</h3>
          <p>rtty is fully open-source and community-driven. Contribute on GitHub and help shape its future.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 5rem 0;
  background-color: var(--color-card-bg);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #555;
  max-width: 500px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.feature-card p {
  line-height: 1.7;
}
</style>
