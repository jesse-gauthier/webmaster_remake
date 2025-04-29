import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import clarity from '@microsoft/clarity';
import ClarityPlugin from './plugins/clarity';

import Analytics from "./plugins/analytics";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import * as Sentry from "@sentry/vue";
import CookieConsentBar from './components/CookieConsentBar.vue';

// Initialize Clarity with configuration options
if (import.meta.env.PROD) {  // Only run in production
    try {
        const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID || 'r3l7gra9rc';

        // Initialize Clarity using the correct method
        clarity.load({
            projectId: projectId
        });
        console.log('Clarity initialized successfully');
    } catch (error) {
        console.error('Failed to initialize Clarity:', error);
    }
} else {
    console.log('Clarity disabled in development mode');
}

const app = createApp(App);

Sentry.init({
    app,
    dsn: "https://9ec69a182e559430664cb0ca48834cd9@o4508343003381760.ingest.us.sentry.io/4509147020984320"
});

// Create and register the head plugin
const head = createHead();
app.use(head);
app.use(Analytics);
app.use(ClarityPlugin); // Add Clarity plugin
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);

app.mount("#app");


