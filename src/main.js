import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vue-router
import router from "./router/index.js";

// Pinia
import { createPinia } from "pinia";

// Bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Animate.css
import "animate.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");
