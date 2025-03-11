// src/plugins/analytics.js

export default {
  install: (app, options) => {
    // Create script element for gtag.js
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=AW-16921221005";
    document.head.appendChild(gtagScript);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "AW-16921221005");

    // Make gtag available throughout the app
    app.config.globalProperties.$gtag = gtag;

    // Provide gtag for composition API
    app.provide("gtag", gtag);
  },
};
