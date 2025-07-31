import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// Vue-router
import router from "./router/index.js";

// Pinia
import { createPinia } from "pinia";

// Bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

// shadow DOM
import { defineCustomElement } from "vue";
import BootstrapWidget from "./components/custom-elements/BootstrapWidget.ce.vue";
// 將Vue元件轉成Custom Element
const BootstrapCustomElement = defineCustomElement(BootstrapWidget);
// 註冊成"<bootstrap-widget>" HTML元素
customElements.define("bootstrap-widget", BootstrapCustomElement);

const app = createApp(App);

app.use(router);
app.use(createPinia);

app.mount("#app");
