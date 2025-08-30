import "./assets/main.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Analytics from "./plugins/analytics";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import CookieConsentBar from './components/CookieConsentBar.vue';


const app = createApp(App);


// Create and register the head plugin
const head = createHead();
app.use(head);
app.use(Analytics);
app.use(createPinia());
app.use(router);

app.component('CookieConsentBar', CookieConsentBar);

app.mount("#app");


