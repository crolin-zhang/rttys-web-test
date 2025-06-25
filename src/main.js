import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n.js'
import Particles from '@tsparticles/vue3'
import { loadLinksPreset } from '@tsparticles/preset-links'

const app = createApp(App)

app.use(Particles, {
    init: async engine => {
        await loadLinksPreset(engine)
    }
})
app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
