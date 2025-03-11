import "./assets/main.css";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Create and register the head plugin
const head = createHead();
app.use(head);

app.use(createPinia());
app.use(router);

app.mount("#app");
