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
            try {
                Clarity.identify(userId, attributes);
            } catch (error) {
                console.error('Clarity identify error:', error);
            }
        }
    },

    /**
     * Track a custom event in Clarity
     * @param {string} name - Event name
     * @param {object} properties - Event properties
     */
    trackEvent(name, properties = {}) {
        if (Clarity && typeof Clarity.event === 'function') {
            try {
                Clarity.event(name, properties);
            } catch (error) {
                console.error('Clarity event error:', error);
            }
        }
    },

    /**
     * Set a custom variable in Clarity
     * @param {string} key - Variable name
     * @param {string} value - Variable value
     */
    setVariable(key, value) {
        if (Clarity && typeof Clarity.set === 'function') {
            try {
                Clarity.set(key, value);
            } catch (error) {
                console.error('Clarity set error:', error);
            }
        }
    }
};

/**
 * Initialize Clarity with your project ID
 * This ensures Clarity is properly loaded on page refresh
 */
const initClarity = () => {
    // Don't initialize here - we're now initializing in main.js
    // This prevents duplicate initialization
};

// Vue plugin
export default {
    install(app) {
        // We're not initializing Clarity here anymore
        // as it's now handled in main.js

        // Make clarity service available via this.$clarity
        app.config.globalProperties.$clarity = clarityService;

        // Also make it injectable
        app.provide('clarity', clarityService);
    }
};
