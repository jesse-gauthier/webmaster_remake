import { onMounted, onUnmounted, ref, inject } from 'vue';

/**
 * Composable for consistent analytics tracking throughout the application
 */
export function useAnalytics() {
    const analytics = inject('analytics');

    // Tracking section visibility
    const observerRef = ref(null);
    const visibleSections = ref(new Set());

    /**
     * Track a page view
     * @param {string} path - The page path
     * @param {string} pageTitle - The page title
     */
    const trackPageView = (path, pageTitle) => {
        analytics.pageView(path);
        analytics.trackEvent('Page', 'view', pageTitle);
    };

    /**
     * Track a button click
     * @param {string} buttonName - The name/identifier of the button
     * @param {object} additionalData - Any additional data to track
     */
    const trackButtonClick = (buttonName, additionalData = {}) => {
        analytics.trackEvent('Button', 'click', buttonName, null, additionalData);
    };

    /**
     * Set up tracking for section visibility
     * @param {string} selector - CSS selector for sections
     * @param {number} threshold - Intersection threshold (0-1)
     */
    const setupSectionTracking = (selector = 'section[id]', threshold = 0.5) => {
        observerRef.value = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting && !visibleSections.value.has(sectionId)) {
                    visibleSections.value.add(sectionId);
                    analytics.trackEvent('Section', 'view', sectionId);
                }
            });
        }, { threshold });

        // Observe all matching sections
        document.querySelectorAll(selector).forEach(section => {
            observerRef.value.observe(section);
        });
    };

    /**
     * Set up scroll depth tracking
     * @param {HTMLElement} element - The element to track scroll depth on
     * @param {Array} depths - Array of depth percentages to track (0-100)
     */
    const setupScrollDepthTracking = (element, depths = [25, 50, 75, 100]) => {
        if (!element) return;

        const trackedDepths = new Set();
        const trackDepth = () => {
            const scrollPercentage = Math.floor(
                (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100
            );

            depths.forEach(depth => {
                if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
                    trackedDepths.add(depth);
                    analytics.trackEvent('Scroll', 'depth', `${depth}%`);
                }
            });
        };

        window.addEventListener('scroll', trackDepth);

        // Return cleanup function
        return () => window.removeEventListener('scroll', trackDepth);
    };

    // Clean up on unmount
    onUnmounted(() => {
        if (observerRef.value) {
            observerRef.value.disconnect();
        }
    });

    return {
        trackPageView,
        trackButtonClick,
        setupSectionTracking,
        setupScrollDepthTracking,
        analytics // Expose the original analytics object too
    };
}
