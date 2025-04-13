/**
 * Utility functions to standardize analytics tracking across the application
 */

// Simple utility to track an event in all analytics platforms
export function trackEvent(eventName, eventData = {}) {
    // Track in Clarity if available
    if (window.clarity) {
        try {
            if (typeof window.clarity === 'function') {
                window.clarity('event', eventName, eventData);
            }
        } catch (error) {
            console.error('Error tracking event in Clarity:', error);
        }
    }

    // Add other analytics platforms here if needed (Google Analytics, etc.)
}

// Helper to identify users across platforms
export function identifyUser(userId, userProperties = {}) {
    // Identify in Clarity if available
    if (window.clarity) {
        try {
            if (typeof window.clarity === 'function') {
                window.clarity('identify', userId, userProperties);
            }
        } catch (error) {
            console.error('Error identifying user in Clarity:', error);
        }
    }

    // Add other analytics platforms here if needed
}

// Check if user has consented to analytics
export function hasAnalyticsConsent() {
    return localStorage.getItem('privacy_consent') === 'all';
}
