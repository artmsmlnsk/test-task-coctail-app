import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/global.scss';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);
const pinia = createPinia();

const a = {};

app.use(pinia);
app.use(router);

app.mount('#app');
