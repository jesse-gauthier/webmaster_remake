// src/plugins/luckyOrange.js

export default {
  install: (app, options = {}) => {
    // Default site ID from the script
    const siteId = options.siteId || "2108aa75";

    // Create and inject the Lucky Orange script
    const luckyOrangeScript = document.createElement("script");
    luckyOrangeScript.async = true;
    luckyOrangeScript.defer = true;
    luckyOrangeScript.src = `https://tools.luckyorange.com/core/lo.js?site-id=${siteId}`;

    // Append the script to the document head
    document.head.appendChild(luckyOrangeScript);

    // Create service for additional Lucky Orange functionality
    const luckyOrangeService = {
      // Identify user when they log in
      identifyUser(userId, userInfo = {}) {
        if (window._loq && window._loq.push) {
          window._loq.push([
            "custom",
            {
              user_id: userId,
              ...userInfo,
            },
          ]);
        }
        return this;
      },

      // Track custom events
      trackEvent(eventName, eventData = {}) {
        if (window._loq && window._loq.push) {
          window._loq.push([
            "custom",
            {
              event: eventName,
              ...eventData,
            },
          ]);
        }
        return this;
      },

      // Add tags to the current session for easier filtering later
      addTags(...tags) {
        if (window._loq && window._loq.push) {
          tags.forEach((tag) => {
            window._loq.push(["tag", tag]);
          });
        }
        return this;
      },
    };

    // Make Lucky Orange service available globally and via provide/inject
    app.config.globalProperties.$luckyOrange = luckyOrangeService;
    app.provide("luckyOrange", luckyOrangeService);
  },
};
