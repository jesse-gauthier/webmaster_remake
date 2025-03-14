import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Analytics from "./plugins/analytics";
import LuckyOrange from "./plugins/luckyOrange";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Only use Analytics and LuckyOrange in production
if (process.env.NODE_ENV === "production") {
  app.use(Analytics);
  app.use(LuckyOrange);
  console.log(
    "Analytics and LuckyOrange initialized in production environment"
  );
} else {
  console.log("Analytics and LuckyOrange disabled in development environment");
}

// Create and register the head plugin
const head = createHead();
app.use(head);

app.use(createPinia());
app.use(router);

app.mount("#app");
