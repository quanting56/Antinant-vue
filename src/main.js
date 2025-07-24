import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// Vue-router
import router from './router/index.js';

// Pinia
import { createPinia } from 'pinia';

// Bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(router);
app.use(createPinia);

app.mount('#app');
