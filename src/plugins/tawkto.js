// Tawk.to chat widget plugin
export default {
  install(app) {
    // Initialize Tawk.to when the app is ready
    if (typeof window !== 'undefined') {
      // Set up Tawk.to API object
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      // Load Tawk.to script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/68b623170e49f131d3b4bebc/1j43ni5dm';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      // Insert script into document
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      // Provide Tawk.to API to Vue components
      app.config.globalProperties.$tawk = {
        // Helper methods for interacting with Tawk.to
        maximize() {
          if (window.Tawk_API?.maximize) {
            window.Tawk_API.maximize();
          }
        },
        minimize() {
          if (window.Tawk_API?.minimize) {
            window.Tawk_API.minimize();
          }
        },
        toggle() {
          if (window.Tawk_API?.toggle) {
            window.Tawk_API.toggle();
          }
        },
        hideWidget() {
          if (window.Tawk_API?.hideWidget) {
            window.Tawk_API.hideWidget();
          }
        },
        showWidget() {
          if (window.Tawk_API?.showWidget) {
            window.Tawk_API.showWidget();
          }
        }
      };
    }
  }
};