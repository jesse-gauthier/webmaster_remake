<!-- src/components/WebsiteStructuredData.vue -->
<template>
  <!-- This component doesn't render anything visible, it only adds structured data to the page -->
</template>

<script setup>
import { computed } from 'vue';
import { seoConfig } from '~/config/seo.config';

// Safe access helpers
const orgName = seoConfig.organization?.name || seoConfig.siteName;
const orgLogo =
  seoConfig.organization?.logo || seoConfig.siteUrl + '/favicon.ico';
const defaultDescription =
  seoConfig.defaultDescription ||
  'Professional web development and SEO services.';

const websiteStructuredData = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  description: defaultDescription,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: orgName,
    logo: {
      '@type': 'ImageObject',
      url: orgLogo,
    },
  },
}));

// Inject JSON-LD via useHead so it works in SSR/prerender
useHead({
  script: [
    {
      id: 'website-structured-data',
      type: 'application/ld+json',
      children: JSON.stringify(websiteStructuredData.value),
    },
  ],
});
</script>
