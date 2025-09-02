<!-- src/components/BreadcrumbStructuredData.vue -->
<template>
  <!-- This component doesn't render anything visible, it only adds structured data to the page -->
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#imports';
import { seoConfig } from '~/config/seo.config';

const props = defineProps({
  // Custom breadcrumb items override (optional)
  items: {
    type: Array,
    default: () => [],
  },
});

const route = useRoute();

// Generate breadcrumb items based on current route or provided items
const breadcrumbItems = computed(() => {
  // If custom items are provided, use those
  if (props.items && props.items.length > 0) {
    return props.items;
  }

  // Otherwise, generate from route path
  const pathSegments = route.path.split('/').filter(segment => segment);
  const items = [];

  // Always include home
  items.push({
    name: 'Home',
    url: '/',
    position: 1,
  });

  // Add path segments
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Try to get a nice name for the segment (capitalize and replace dashes with spaces)
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    items.push({
      name,
      url: currentPath,
      position: index + 2, // +2 because we already have Home at position 1
    });
  });

  return items;
});

// Generate structured data JSON (reactive so head updates automatically)
const structuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems.value.map(item => ({
    '@type': 'ListItem',
    position: item.position,
    name: item.name,
    item: `${seoConfig.siteUrl}${item.url}`,
  })),
}));

// Inject JSON-LD via useHead for SSR/prerender safety
useHead(() => ({
  script: [
    {
      id: 'breadcrumb-structured-data',
      type: 'application/ld+json',
      // Avoid hydration mismatch by serializing here
      innerHTML: JSON.stringify(structuredData.value),
      tagPosition: 'head',
    },
  ],
}));
</script>
