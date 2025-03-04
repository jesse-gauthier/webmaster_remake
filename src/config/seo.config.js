// src/config/seo.config.js

/**
 * Central SEO configuration for the entire application
 * Edit this file to update site-wide SEO settings
 */
export const seoConfig = {
  // Site details
  siteName: 'Your Agency Name',
  siteUrl: 'https://youragency.com',

  // Default meta
  defaultTitle: 'Web Development Experts',
  defaultDescription:
    'Professional web development agency specializing in Vue.js, React, and modern web solutions.',

  // Social media
  socialImage: '/images/social-card.jpg', // 1200x630px recommended
  twitterHandle: '@youragency',
  twitterCardType: 'summary_large_image',

  // Organization schema
  organization: {
    name: 'Your Agency Name',
    url: 'https://youragency.com',
    logo: 'https://youragency.com/images/logo.png',
    sameAs: [
      'https://twitter.com/youragency',
      'https://www.linkedin.com/company/youragency',
      'https://github.com/youragency',
    ],
  },

  // Key pages for sitemap priority
  keyPages: [
    { path: '/', priority: 1.0 },
    { path: '/services', priority: 0.9 },
    { path: '/portfolio', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
  ],

  // Location (if applicable for local business schema)
  location: {
    street: '123 Main Street',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94101',
    country: 'US',
    phone: '+1 (555) 123-4567',
  },
}

/**
 * Creates structured data for the organization
 * @returns {Object} Organization schema
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    sameAs: seoConfig.organization.sameAs,
  }
}

/**
 * Creates local business schema (if applicable)
 * @returns {Object} LocalBusiness schema
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    image: seoConfig.socialImage,
    telephone: seoConfig.location.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.location.street,
      addressLocality: seoConfig.location.city,
      addressRegion: seoConfig.location.region,
      postalCode: seoConfig.location.postalCode,
      addressCountry: seoConfig.location.country,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }
}
