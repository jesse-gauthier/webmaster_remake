// src/composables/useRouteSeo.js

import { useSeo } from "./useSeo";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

/**
 * Composable for applying SEO data within components based on route meta
 * @returns {void}
 */
export function useRouteSeo() {
    const route = useRoute();

    onMounted(() => {
        // Check if the route has SEO data prepared by the router
        if (route.meta.seoData) {
            // Apply SEO data using the useSeo composable
            useSeo(route.meta.seoData);
        }
    });
}