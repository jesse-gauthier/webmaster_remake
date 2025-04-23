// src/plugins/analytics.js

export default {
  install: (app, options = {}) => {
    // Default configuration
    const config = {
      googleAdsId: import.meta.env.VITE_GOOGLE_ADS_ID || '',
      googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
      enableInDevelopment: false,
      debug: false,
      ...options
    };

    // Create a default console-based implementation for development mode
    const defaultConsentUpdater = (consent = {}) => {
      console.log('Development mode: Consent update', consent);
    };

    // Initialize gtag for production or use mock for development
    let gtag;
    if (import.meta.env.PROD) {
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
      if (config.googleAdsId) {
        gtag('config', config.googleAdsId);
      }

      if (config.googleAnalyticsId) {
        gtag('config', config.googleAnalyticsId, {
          'anonymize_ip': true,
          'debug_mode': config.debug
        });
      } else {
        console.warn('Google Analytics ID is missing!');
      }

      // Load the gtag script
      try {
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        // Use Google Analytics ID for the script source instead of Ads ID
        gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`;

        gtagScript.onerror = (error) => {
          console.warn('Failed to load Google Analytics script:', error);
        };

        document.head.appendChild(gtagScript);

        // Add an event to log when script loads successfully
        gtagScript.onload = () => {
          console.log('Google Analytics script loaded successfully');
        };
      } catch (err) {
        console.error('Error initializing analytics:', err);
      }

      // Make gtag available throughout the app
      app.config.globalProperties.$gtag = gtag;
      app.provide('gtag', gtag);

      // Provide tracking helper methods
      provideTrackingMethods(app, gtag);

      // Add method to update consent when user makes a choice
      const updateConsentFn = (consent = {}) => {
        try {
          console.log('Updating consent settings:', consent);
          gtag('consent', 'update', consent);
        } catch (err) {
          console.warn('Failed to update consent', err);
        }
      };

      app.config.globalProperties.$updateConsent = updateConsentFn;
      app.provide('updateConsent', updateConsentFn);
    } else {
      console.log('Google Analytics disabled in development');
      // Provide a mock implementation
      gtag = (command, ...args) => {
        console.log(`GA mock: ${command}`, ...args);
      };

      // Make gtag available throughout the app
      app.config.globalProperties.$gtag = gtag;
      app.provide('gtag', gtag);

      // Provide tracking helper methods
      provideTrackingMethods(app, gtag);

      // Add method to update consent when user makes a choice
      const updateConsentFn = (consent = {}) => {
        try {
          gtag('consent', 'update', consent);
        } catch (err) {
          console.warn('Failed to update consent', err);
        }
      };

      app.config.globalProperties.$updateConsent = updateConsentFn;
      app.provide('updateConsent', updateConsentFn);
    }
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
    },

    // Track form submissions
    trackFormSubmission: (formName, formData = {}) => {
      gtag('event', 'form_submission', {
        'event_category': 'Form',
        'event_label': formName,
        'form_data': JSON.stringify(formData)
      });
    },

    // Track content engagement
    trackEngagement: (contentType, contentId, action, value) => {
      gtag('event', action, {
        'event_category': 'Engagement',
        'content_type': contentType,
        'content_id': contentId,
        'value': value
      });
    },

    // Track ecommerce events
    trackEcommerce: (action, data = {}) => {
      gtag('event', action, {
        ...data
      });
    }
  };

  // Make tracking methods available globally
  app.config.globalProperties.$analytics = trackingMethods;
  app.provide('analytics', trackingMethods);
}
