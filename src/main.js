import "./assets/main.css";
import Analytics from "./plugins/analytics";
import LuckyOrange from "./plugins/luckyOrange";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(Analytics);
app.use(LuckyOrange);
// Create and register the head plugin
const head = createHead();
app.use(head);

app.use(createPinia());
app.use(router);

app.mount("#app");
