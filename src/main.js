import "./assets/main.css";
import { inject } from "@vercel/analytics"
import { FontAwesomeIcon } from "./plugins/fontawesome"

inject()
import Analytics from "./plugins/analytics";
import TawkTo from "./plugins/tawkto";
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

// Initialize critical performance optimizations immediately
preloadCriticalResources();

// Defer non-critical performance utilities after initial render
window.addEventListener('load', () => {
  requestIdleCallback(() => {
    optimizeFontLoading();
    setupPerformanceMonitoring();
    monitorPerformanceBudget();
  }, { timeout: 1000 });
});


const app = createApp(App);


// Create and register the head plugin
const head = createHead();
app.use(head);
app.use(Analytics);
app.use(TawkTo);
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");


