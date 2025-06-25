import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n.js'

const app = createApp(App)

app.use(createPinia())

// 正确的顺序：i18n 必须在 router 之前被安装
// 这样当路由解析组件时，i18n 实例已经可用
app.use(i18n)
app.use(router)

app.use(ElementPlus)

app.mount('#app')
