import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入 Element Plus 暗黑模式所需的 CSS 变量
import 'element-plus/theme-chalk/dark/css-vars.css'

// 引入 i18n
import i18n from './i18n'

// 引入全局样式
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
