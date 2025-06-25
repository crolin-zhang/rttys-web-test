import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 不再需要 svgLoader，我们将直接使用 <img>
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // base 保持相对路径，这是正确的
  base: './', 
  plugins: [
    vue(),
    // 自动导入 API，如 ref, computed 等
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动导入组件，如 ElButton 和图标
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
