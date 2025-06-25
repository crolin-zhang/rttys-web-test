import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      // 别名配置：'@' 指向 'src' 目录
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      
      // === 关键修复：为 animejs 添加别名 ===
      // 当代码中出现 import ... from 'animejs' 时，
      // 强制 Vite 去加载 node_modules/animejs/lib/anime.es.js 这个文件。
      // 这就绕过了 Vite 复杂的包解析过程，直接告诉它正确答案。
      'animejs': 'animejs/lib/anime.es.js'
    }
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '.trycloudflare.com'
    ]
  }
})
