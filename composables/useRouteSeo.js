// composables/useRouteSeo.js

import { useSeo } from "./useSeo";

/**
 * Composable for applying SEO data within components based on route meta using Nuxt 3 patterns
 * @returns {void}
 */
export function useRouteSeo() {
    const route = useRoute();

    // Apply SEO immediately without waiting for onMounted
    if (route.meta.seoData) {
        // Apply SEO data using the useSeo composable
        useSeo(route.meta.seoData);
    }
}