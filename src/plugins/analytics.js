// src/plugins/analytics.js

export default {
  install: (app, options = {}) => {
    // Default configuration
    const config = {
      googleAdsId: 'AW-16921221005',
      googleAnalyticsId: 'G-58RRPDKZYB',
      enableInDevelopment: false,
      debug: false,
      ...options
    };

    // Skip analytics in development unless explicitly enabled
    if (process.env.NODE_ENV === 'development' && !config.enableInDevelopment) {
      console.info('Google Analytics disabled in development');

      // Provide mock implementation for development
      const mockGtag = (...args) => {
        if (config.debug) console.log('GA Event (mock):', ...args);
      };

      app.config.globalProperties.$gtag = mockGtag;
      app.provide('gtag', mockGtag);

      // Provide tracking helper methods
      provideTrackingMethods(app, mockGtag);
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    // Set default consent parameters (GDPR & privacy compliance)
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'wait_for_update': 500 // Wait 500ms for consent update
    });

    // Configure Google tags
    gtag('config', config.googleAdsId);
    gtag('config', config.googleAnalyticsId, {
      'anonymize_ip': true,
      'debug_mode': config.debug
    });

    // Load the gtag script
    try {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAdsId}`;

      gtagScript.onerror = () => {
        console.warn('Failed to load Google Analytics script');
      };

      document.head.appendChild(gtagScript);
    } catch (err) {
      console.error('Error initializing analytics:', err);
    }

    // Make gtag available throughout the app
    app.config.globalProperties.$gtag = gtag;
    app.provide('gtag', gtag);

    // Provide tracking helper methods
    provideTrackingMethods(app, gtag);

    // Add method to update consent when user makes a choice
    app.config.globalProperties.$updateConsent = (consent = {}) => {
      gtag('consent', 'update', consent);
    };
    app.provide('updateConsent', app.config.globalProperties.$updateConsent);
  },
};

// Helper function to provide common tracking methods
function provideTrackingMethods(app, gtag) {
  const trackingMethods = {
    // Track page views
    pageView: (pagePath) => {
      gtag('event', 'page_view', {
        page_path: pagePath
      });
    },

    // Track events with category, action, label pattern (common pattern)
    trackEvent: (category, action, label, value) => {
      gtag('event', action, {
        'event_category': category,
        'event_label': label,
        'value': value
      });
    },

    // Track conversions for Google Ads
    trackConversion: (conversionId, label, value) => {
      gtag('event', 'conversion', {
        'send_to': `${conversionId}/${label}`,
        'value': value
      });
    }
  };

  // Make tracking methods available globally
  app.config.globalProperties.$analytics = trackingMethods;
  app.provide('analytics', trackingMethods);
}
