import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { inject } from "@vercel/analytics"


inject()
import Analytics from "./plugins/analytics";
import {
  preloadCriticalResources,
  setupPerformanceMonitoring,
  optimizeFontLoading,
  monitorPerformanceBudget
} from "./utils/performance";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import CookieConsentBar from './components/CookieConsentBar.vue';

// Initialize performance optimizations early
preloadCriticalResources();
optimizeFontLoading();
setupPerformanceMonitoring();
monitorPerformanceBudget();


const app = createApp(App);


// Create and register the head plugin
const head = createHead();
app.use(head);
app.use(Analytics);
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);

app.mount("#app");


