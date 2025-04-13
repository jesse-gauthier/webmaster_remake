/**
 * This mixin provides consistent analytics behavior for all views
 * 
 * Usage:
 * 1. Import in the router's beforeEach hook
 * 2. Apply to components using the Vue composition API
 */

import { onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAnalytics } from '@/composables/useAnalytics';

export function useAnalyticsView(viewName, options = {}) {
    const route = useRoute();
    const {
        trackPageView,
        setupSectionTracking,
        setupScrollDepthTracking
    } = useAnalytics();

    const {
        trackSections = true,
        trackScrollDepth = true,
        customPath = null
    } = options;

    let scrollDepthCleanup = null;

    onMounted(() => {
        // Track page view
        trackPageView(customPath || route.path, viewName);

        // Set up section tracking if enabled
        if (trackSections) {
            setupSectionTracking();
        }

        // Set up scroll depth tracking if enabled
        if (trackScrollDepth) {
            scrollDepthCleanup = setupScrollDepthTracking(document.body);
        }
    });

    onUnmounted(() => {
        // Clean up scroll depth tracking
        if (scrollDepthCleanup) {
            scrollDepthCleanup();
        }
    });
}
