import Clarity from '@microsoft/clarity';

/**
 * Utility functions for Microsoft Clarity analytics
 */
export const clarityService = {
    /**
     * Identify a user in Clarity (use after login)
     * @param {string} userId - Unique user identifier
     * @param {object} attributes - Additional user attributes
     */
    identifyUser(userId, attributes = {}) {
        if (Clarity && typeof Clarity.identify === 'function') {
            Clarity.identify(userId, attributes);
        }
    },

    /**
     * Track a custom event in Clarity
     * @param {string} name - Event name
     * @param {object} properties - Event properties
     */
    trackEvent(name, properties = {}) {
        if (Clarity && typeof Clarity.event === 'function') {
            Clarity.event(name, properties);
        }
    },

    /**
     * Set a custom variable in Clarity
     * @param {string} key - Variable name
     * @param {string} value - Variable value
     */
    setVariable(key, value) {
        if (Clarity && typeof Clarity.set === 'function') {
            Clarity.set(key, value);
        }
    }
};

// Vue plugin
export default {
    install(app) {
        // Make clarity service available via this.$clarity
        app.config.globalProperties.$clarity = clarityService;

        // Also make it injectable
        app.provide('clarity', clarityService);
    }
};
