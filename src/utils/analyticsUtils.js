/**
 * Utility functions to standardize analytics tracking across the application
 */

// Simple utility to track an event in all analytics platforms
export function trackEvent(eventName, eventData = {}) {
    // Add analytics platforms here if needed (Google Analytics, etc.)
}

// Helper to identify users across platforms
export function identifyUser(userId, userProperties = {}) {
    // Add other analytics platforms here if needed
}

// Check if user has consented to analytics
export function hasAnalyticsConsent() {
    return localStorage.getItem('privacy_consent') === 'all';
}
