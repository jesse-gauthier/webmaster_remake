import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Clarity from '@microsoft/clarity';
import ClarityPlugin from './plugins/clarity';

import Analytics from "./plugins/analytics";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import CookieConsentBar from './components/CookieConsentBar.vue';

// Initialize Clarity with configuration options
if (import.meta.env.PROD) {  // Only run in production
    try {
        const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID || 'r3l7gra9rc';
        Clarity.init(projectId, {
            // Respect "Do Not Track" browser setting
            disableDoNotTrack: false,

            // Disable session recording if needed
            // disableSessionRecording: false,

            // Cookie settings for compliance
            cookies: true,

            // Disable specific features if needed
            // disableHeatMap: false,
            // disableExperiments: true,
        });
        console.log('Clarity initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Clarity:', error);
    }
} else {
    console.log('Clarity disabled in development mode');
}

const app = createApp(App);
// Create and register the head plugin
const head = createHead();
app.use(head);
app.use(Analytics);
app.use(ClarityPlugin); // Add Clarity plugin
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);

app.mount("#app");
