import "./assets/main.css";
import { FontAwesomeIcon } from "./plugins/fontawesome";
// Iconify: import only required icons to satisfy strict CSP (no runtime fetches)
import { addCollection } from '@iconify/vue';
import emailOutline from '@iconify-icons/mdi/email-outline';
import instagram from '@iconify-icons/mdi/instagram';
import mapMarker from '@iconify-icons/mdi/map-marker';
// Register a minimal on-demand collection (single batch) to avoid network calls
addCollection({
  prefix: 'mdi',
  icons: {
    'email-outline': emailOutline.body ? emailOutline : { body: emailOutline },
    'instagram': instagram.body ? instagram : { body: instagram },
    'map-marker': mapMarker.body ? mapMarker : { body: mapMarker },
  },
  width: 24,
  height: 24,
});
// Conditionally load Vercel analytics only in production to avoid activation in dev
if (import.meta.env.PROD) {
  import("@vercel/analytics").then(mod => {
    try {
      mod.inject();
    } catch (e) {
      console.warn("Vercel analytics inject failed:", e);
    }
  });
}
import Analytics from "./plugins/analytics";
import LuckyOrange from "./plugins/luckyOrange";
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
app.use(LuckyOrange);
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");


