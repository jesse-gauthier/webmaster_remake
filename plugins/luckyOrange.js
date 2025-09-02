export default defineNuxtPlugin(() => {
  // Initialize Lucky Orange when on client side
  if (process.client) {
    const { $config } = useNuxtApp();
    const luckyOrangeId = $config.public.luckyOrangeId;
    
    if (luckyOrangeId) {
      // Load Lucky Orange script
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://tools.luckyorange.com/core/lo.js?site-id=${luckyOrangeId}`;
      
      // Insert script into document head
      document.head.appendChild(script);
    }

    // Provide Lucky Orange API helpers
    const luckyOrangeMethods = {
      // Helper methods for interacting with Lucky Orange
      identify(userId, userInfo = {}) {
        if (typeof window !== 'undefined' && window.lo && typeof window.lo.identify === 'function') {
          window.lo.identify(userId, userInfo);
        }
      },
      track(eventName, properties = {}) {
        if (typeof window !== 'undefined' && window.lo && typeof window.lo.track === 'function') {
          window.lo.track(eventName, properties);
        }
      }
    };

    return {
      provide: {
        luckyOrange: luckyOrangeMethods
      }
    };
  }
  
  return {
    provide: {
      luckyOrange: {
        identify: () => {},
        track: () => {}
      }
    }
  };
});