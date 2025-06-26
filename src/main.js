import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/main.css'; // Import main css file
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import Particles from '@tsparticles/vue3'; // Import Particles
import { loadFull } from 'tsparticles'; // Import loadFull

const app = createApp(App);
const pinia = createPinia(); // Create Pinia instance

// 注册 ElementPlus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(pinia); // Use Pinia
app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.use(Particles, { loadFull }); // Use Particles and pass loadFull

// 挂载应用
app.mount('#app');
