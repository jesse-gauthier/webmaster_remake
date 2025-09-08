// composables/useSeo.js

import { seoConfig } from "~/config/seo.config";

/**
 * Reusable SEO composable for managing head/meta tags using Nuxt's built-in SEO capabilities
 *
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} [options.image] - OG image path (relative to public directory)
 * @param {string} [options.url] - Canonical URL for the page
 * @param {string} [options.type='website'] - OG type (website, article, etc)
 * @param {Object} [options.twitter] - Twitter specific options
 * @param {Array} [options.structuredData] - JSON-LD structured data
 * @returns {void}
 */
export function useSeo(options) {

  // Use centralized config from seo.config.js
  const siteConfig = {
    siteName: seoConfig.siteName,
    siteUrl: seoConfig.siteUrl,
    defaultImage: seoConfig.socialImage,
    twitterHandle: seoConfig.twitterHandle,
  };

  // Merge options with defaults
  const seo = {
    title: options.title
      ? `${options.title} | ${siteConfig.siteName}`
      : `${siteConfig.siteName} - Web Development Agency`,
    description:
      options.description ||
      "Professional web development services specializing in Vue.js, React, and custom solutions.",
    image: options.image
      ? `${siteConfig.siteUrl}${options.image}`
      : `${siteConfig.siteUrl}${siteConfig.defaultImage}`,
    url: options.url
      ? `${siteConfig.siteUrl}${options.url}`
      : siteConfig.siteUrl,
    type: options.type || "website",
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      ...options.twitter,
    },
  };

  // Prepare structured data if provided
  let structuredDataArray = [];

  if (options.structuredData) {
    // Handle both single object and array cases
    structuredDataArray = Array.isArray(options.structuredData)
      ? options.structuredData
      : [options.structuredData];
  } else {
    // Default structured data
    structuredDataArray = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: siteConfig.siteUrl,
        name: siteConfig.siteName,
      },
    ];
  }

  // Use Nuxt's built-in SEO meta composables
  useSeoMeta({
    title: seo.title,
    description: seo.description,
    ogTitle: seo.title,
    ogDescription: seo.description,
    ogImage: seo.image,
    ogUrl: seo.url,
    ogType: seo.type,
    twitterTitle: seo.title,
    twitterDescription: seo.description,
    twitterImage: seo.image,
    twitterCard: seo.twitter.card,
    twitterSite: seo.twitter.site,
  });

  // Set canonical link
  useHead({
    link: [{ rel: "canonical", href: seo.url }]
  });

  // Add structured data using useHead for JSON-LD
  if (structuredDataArray.length > 0) {
    useHead({
      script: structuredDataArray.map((data) => ({
        type: "application/ld+json",
        children: JSON.stringify(data),
      })),
    });
  }
}

// Example usage
// import { useSeo } from '@/composables/useSeo'
//
// export default {
//   setup() {
//     useSeo({
//       title: 'Services',
//       description: 'Web development, design, and SEO services we offer',
//       url: '/services',
//       // Optional structured data
//       structuredData: [{
//         '@context': 'https://schema.org',
//         '@type': 'Service',
//         name: 'Web Development',
//         provider: {
//           '@type': 'Organization',
//           name: 'Your Agency Name'
//         }
//       }]
//     })
//
//     return {}
//   }
// }
