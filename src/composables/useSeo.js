// src/composables/useSeo.js

import { useHead } from '@vueuse/head'
import { seoConfig, getOrganizationSchema } from '@/config/seo.config'

/**
 * Reusable SEO composable for managing head/meta tags
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
  }

  // Merge options with defaults
  const seo = {
    title: options.title
      ? `${options.title} | ${siteConfig.siteName}`
      : `${siteConfig.siteName} - Web Development Agency`,
    description:
      options.description ||
      'Professional web development services specializing in Vue.js, React, and custom solutions.',
    image: options.image
      ? `${siteConfig.siteUrl}${options.image}`
      : `${siteConfig.siteUrl}${siteConfig.defaultImage}`,
    url: options.url ? `${siteConfig.siteUrl}${options.url}` : siteConfig.siteUrl,
    type: options.type || 'website',
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      ...options.twitter,
    },
  }

  // Prepare structured data if provided
  const structuredData = options.structuredData
    ? options.structuredData
    : [
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteConfig.siteUrl,
          name: siteConfig.siteName,
        },
      ]

  // Apply meta tags using useHead
  useHead({
    // Basic meta tags
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },

      // Open Graph / Facebook
      { property: 'og:type', content: seo.type },
      { property: 'og:url', content: seo.url },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.image },

      // Twitter
      { name: 'twitter:card', content: seo.twitter.card },
      { name: 'twitter:site', content: seo.twitter.site },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.image },
    ],
    link: [{ rel: 'canonical', href: seo.url }],
    script: structuredData.map((data) => ({
      type: 'application/ld+json',
      children: JSON.stringify(data),
    })),
  })
}

// Example usage - In your Vue component:
//
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
