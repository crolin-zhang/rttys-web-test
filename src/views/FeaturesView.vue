<template>
  <div class="features-container">
    <div class="page-header">
      <h1 class="gradient-text">rtty 的核心优势</h1>
      <p>轻量、强大、易于部署。为物联网和远程管理而生。</p>
    </div>

    <el-row :gutter="30" class="features-grid">
      <el-col :xs="24" :sm="12" :md="8" v-for="feature in features" :key="feature.title">
        <el-card class="feature-card" shadow="hover">
          <div class="card-header">
            <el-icon :size="28" class="feature-icon" :color="feature.color">
              <component :is="feature.icon" />
            </el-icon>
            <h3 class="feature-title">{{ feature.title }}</h3>
          </div>
          <p class="feature-description">{{ feature.description }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import { Cpu, Platform, ChromeFilled, Lock, Tickets, Files } from '@element-plus/icons-vue'

const features = shallowRef([
  { icon: Cpu, title: '极致轻量的客户端', description: '客户端使用 C 语言编写，资源占用极低，非常适合内存和性能受限的嵌入式设备。', color: '#67C23A' },
  { icon: Platform, title: '高性能服务端', description: '服务端由 Go 语言实现，天然支持高并发。单个二进制文件即可完成部署，无任何外部依赖。', color: '#409EFF' },
  { icon: ChromeFilled, title: '浏览器即终端', description: '无需安装 SSH 客户端或任何特定软件，通过任何现代浏览器即可安全地访问设备终端。', color: '#E6A23C' },
  { icon: Lock, title: '端到端安全', description: '所有通信流量均支持 SSL/TLS 加密，确保您的数据在传输过程中的机密性和完整性。', color: '#F56C6C' },
  { icon: Tickets, title: '便捷的设备管理', description: '通过为每个设备分配唯一的 ID，您可以轻松管理和访问成百上千台在线设备。', color: '#909399' },
  { icon: Files, title: '完全开源', description: 'rtty 是一个开源项目，您可以自由地使用、审查代码、贡献功能，并与社区共同成长。', color: '#303133' }
])
</script>

<style scoped>
.features-container { padding: 40px 20px; max-width: 1200px; margin: 0 auto; }
.page-header { text-align: center; margin-bottom: 50px; }
.page-header h1 { font-size: 48px; margin-bottom: 16px; }
.page-header p { font-size: 18px; color: var(--text-color-light); }
.features-grid .el-col { margin-bottom: 30px; }
.feature-card { height: 100%; border: 1px solid var(--border-color); background-color: var(--el-bg-color-page); transition: all 0.3s ease; }
html.dark .feature-card { background-color: #1f2937; }
.feature-card:hover { transform: translateY(-5px); border-color: var(--accent-color-1); }
.card-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
.feature-title { margin: 0; font-size: 20px; color: var(--el-text-color-primary); }
.feature-description { font-size: 15px; line-height: 1.6; color: var(--el-text-color-secondary); }
</style>
