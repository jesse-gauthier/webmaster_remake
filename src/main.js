import "./assets/main.css";
import { initCLSPrevention, initCoreWebVitals } from './utils/clsOptimization.js';
import { initBounceRateOptimization } from './utils/bounceRateOptimization.js';
// Iconify: import only required icons to satisfy strict CSP (no runtime fetches)
import { addCollection } from '@iconify/vue';
// Import all mdi icons referenced in templates so CSP doesn't require remote fetches
import emailOutline from '@iconify-icons/mdi/email-outline';
import instagram from '@iconify-icons/mdi/instagram';
import mapMarker from '@iconify-icons/mdi/map-marker';
import server from '@iconify-icons/mdi/server';
import chevronRight from '@iconify-icons/mdi/chevron-right';
import vuejs from '@iconify-icons/mdi/vuejs';
import sourceBranch from '@iconify-icons/mdi/source-branch';
import check from '@iconify-icons/mdi/check';
import information from '@iconify-icons/mdi/information';
import checkCircle from '@iconify-icons/mdi/check-circle';
import alertCircle from '@iconify-icons/mdi/alert-circle';
import loading from '@iconify-icons/mdi/loading';
import arrowRight from '@iconify-icons/mdi/arrow-right';
import plus from '@iconify-icons/mdi/plus';
import codeBraces from '@iconify-icons/mdi/code-braces';
import chartLine from '@iconify-icons/mdi/chart-line';
import handshakeOutline from '@iconify-icons/mdi/handshake-outline';
import accountGroup from '@iconify-icons/mdi/account-group';
import react from '@iconify-icons/mdi/react';
import languageJavascript from '@iconify-icons/mdi/language-javascript';
import languageCss3 from '@iconify-icons/mdi/language-css3';
import nodejs from '@iconify-icons/mdi/nodejs';
import languagePhp from '@iconify-icons/mdi/language-php';
import database from '@iconify-icons/mdi/database';
import graphql from '@iconify-icons/mdi/graphql';
import cloudOutline from '@iconify-icons/mdi/cloud-outline';
import aws from '@iconify-icons/mdi/aws';
import docker from '@iconify-icons/mdi/docker';
import lock from '@iconify-icons/mdi/lock';
import speedometer from '@iconify-icons/mdi/speedometer';
import wordpress from '@iconify-icons/mdi/wordpress';
import shopify from '@iconify-icons/mdi/shopify';
import star from '@iconify-icons/mdi/star';
import magnify from '@iconify-icons/mdi/magnify';
import linkVariant from '@iconify-icons/mdi/link-variant';
import fileDocumentOutline from '@iconify-icons/mdi/file-document-outline';
import chartBar from '@iconify-icons/mdi/chart-bar';
import cogs from '@iconify-icons/mdi/cogs';
import fileSign from '@iconify-icons/mdi/file-sign';
import openInNew from '@iconify-icons/mdi/open-in-new';
import formatQuoteOpen from '@iconify-icons/mdi/format-quote-open';
import closeIcon from '@iconify-icons/mdi/close';
import clockOutline from '@iconify-icons/mdi/clock-outline';
import emailOutline2 from '@iconify-icons/mdi/email-outline'; // duplicate key avoidance handled below
import fileDocumentOutline2 from '@iconify-icons/mdi/file-document-outline';
import currencyUsd from '@iconify-icons/mdi/currency-usd';
import handshake from '@iconify-icons/mdi/handshake';
import codeTags from '@iconify-icons/mdi/code-tags';

// Helper to normalize icon object shape
const wrap = (mod) => (mod.body ? mod : { body: mod });

addCollection({
  prefix: 'mdi',
  icons: {
    'email-outline': wrap(emailOutline), // keep first
    'instagram': wrap(instagram),
    'map-marker': wrap(mapMarker),
    'server': wrap(server),
    'chevron-right': wrap(chevronRight),
    'vuejs': wrap(vuejs),
    'source-branch': wrap(sourceBranch),
    'check': wrap(check),
    'information': wrap(information),
    'check-circle': wrap(checkCircle),
    'alert-circle': wrap(alertCircle),
    'loading': wrap(loading),
    'arrow-right': wrap(arrowRight),
    'plus': wrap(plus),
    'code-braces': wrap(codeBraces),
    'chart-line': wrap(chartLine),
    'handshake-outline': wrap(handshakeOutline),
    'account-group': wrap(accountGroup),
    'react': wrap(react),
    'language-javascript': wrap(languageJavascript),
    'language-css3': wrap(languageCss3),
    'nodejs': wrap(nodejs),
    'language-php': wrap(languagePhp),
    'database': wrap(database),
    'graphql': wrap(graphql),
    'cloud-outline': wrap(cloudOutline),
    'aws': wrap(aws),
    'docker': wrap(docker),
    'lock': wrap(lock),
    'speedometer': wrap(speedometer),
    'wordpress': wrap(wordpress),
    'shopify': wrap(shopify),
    'star': wrap(star),
    'magnify': wrap(magnify),
    'link-variant': wrap(linkVariant),
    'file-document-outline': wrap(fileDocumentOutline),
    'chart-bar': wrap(chartBar),
    'cogs': wrap(cogs),
    'file-sign': wrap(fileSign),
    'open-in-new': wrap(openInNew),
    'format-quote-open': wrap(formatQuoteOpen),
    'close': wrap(closeIcon),
    'clock-outline': wrap(clockOutline),
    // duplicates resolved to same key
    'currency-usd': wrap(currencyUsd),
    'handshake': wrap(handshake),
    'code-tags': wrap(codeTags),
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

// Initialize CLS prevention and Core Web Vitals monitoring
initCLSPrevention();
const vitalsMonitor = initCoreWebVitals();

// Initialize bounce rate optimization
const bounceOptimization = initBounceRateOptimization();

// Make monitoring tools available globally for debugging
if (typeof window !== 'undefined') {
  window.vitalsMonitor = vitalsMonitor;
  window.bounceOptimization = bounceOptimization;
}

// Create and register the head plugin
const head = createHead();
app.use(head);
app.use(Analytics);
app.use(LuckyOrange);
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);

app.mount("#app");


