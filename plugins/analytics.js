export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  if (process.server) {
    const noop = () => { };
    return {
      provide: {
        gtag: noop,
        analytics: {
          pageView: noop,
          trackEvent: noop,
          trackConversion: noop,
          trackFormSubmission: noop,
          trackEngagement: noop,
          trackEcommerce: noop
        },
        updateConsent: noop
      }
    };
  }

  const config = {
    googleAdsId: runtimeConfig.public.gtagId || '',
    googleAnalyticsId: runtimeConfig.public.gtagId || '',
    enableInDevelopment: false,
    debug: false
  };

  let gtag;
  if (process.env.NODE_ENV === 'development' && !config.enableInDevelopment) {
    console.info('Google Analytics disabled in development');
    gtag = (...args) => { if (config.debug) console.log('GA Event (mock):', ...args); };
  } else {
    window.dataLayer = window.dataLayer || [];
    function gtagFn() { window.dataLayer.push(arguments); }
    gtagFn('js', new Date());
    gtagFn('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500
    });
    if (config.googleAdsId) gtagFn('config', config.googleAdsId);
    if (config.googleAnalyticsId) {
      gtagFn('config', config.googleAnalyticsId, { anonymize_ip: true, debug_mode: config.debug });
    } else {
      console.warn('Google Analytics ID is missing!');
    }
    try {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`;
      s.onerror = e => console.warn('Failed to load Google Analytics script:', e);
      s.onload = () => config.debug && console.log('Google Analytics script loaded');
      document.head.appendChild(s);
    } catch (e) {
      console.error('Error injecting GA script', e);
    }
    gtag = gtagFn;
  }

  const trackingMethods = {
    pageView: (pagePath) => gtag('event', 'page_view', { page_path: pagePath }),
    trackEvent: (category, action, label, value) => gtag('event', action, { event_category: category, event_label: label, value }),
    trackConversion: (conversionId, label, value) => gtag('event', 'conversion', { send_to: `${conversionId}/${label}`, value }),
    trackFormSubmission: (formName, formData = {}) => gtag('event', 'form_submission', { event_category: 'Form', event_label: formName, form_data: JSON.stringify(formData) }),
    trackEngagement: (contentType, contentId, action, value) => gtag('event', action, { event_category: 'Engagement', content_type: contentType, content_id: contentId, value }),
    trackEcommerce: (action, data = {}) => gtag('event', action, { ...data })
  };

  const updateConsentFn = (consent = {}) => { try { gtag('consent', 'update', consent); } catch (e) { console.warn('Failed to update consent', e); } };

  return { provide: { gtag, analytics: trackingMethods, updateConsent: updateConsentFn } };
});
