// Lucky Orange analytics plugin
export default {
  install(app) {
    // Initialize Lucky Orange when the app is ready
    if (typeof window !== 'undefined') {
      // Load Lucky Orange script
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://tools.luckyorange.com/core/lo.js?site-id=6d793e1d';
      
      // Insert script into document head
      document.head.appendChild(script);

      // Provide Lucky Orange API to Vue components (if needed)
      app.config.globalProperties.$luckyOrange = {
        // Helper methods for interacting with Lucky Orange
        identify(userId, userInfo = {}) {
          if (window.lo && typeof window.lo.identify === 'function') {
            window.lo.identify(userId, userInfo);
          }
        },
        track(eventName, properties = {}) {
          if (window.lo && typeof window.lo.track === 'function') {
            window.lo.track(eventName, properties);
          }
        }
      };
    }
  }
};