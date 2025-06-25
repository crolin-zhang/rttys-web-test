import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 只导入 Element Plus 主库
import ElementPlus from 'element-plus'

// 只导入核心样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/main.css'

const app = createApp(App)

// 只使用最基础的插件
app.use(router)
app.use(i18n)
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
