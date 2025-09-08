<template>
  <!-- This component adds enhanced structured data for contact page -->
</template>

<script setup>
import { computed } from 'vue';
import { seoConfig } from '~/config/seo.config';

// Enhanced structured data for contact page
const contactStructuredData = computed(() => [
  // Organization with detailed contact information
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${seoConfig.siteUrl}#organization`,
    name: 'Web Masters',
    alternateName: 'Ottawa Webmasters',
    url: seoConfig.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${seoConfig.siteUrl}/images/logo.png`,
      width: 200,
      height: 60
    },
    description: 'Professional web development and SEO services in Ottawa, Ontario. Specializing in WordPress, Shopify, and custom web solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Ottawa',
      addressRegion: 'Ontario',
      postalCode: '',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.4215',
      longitude: '-75.6972'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-613-555-0123',
        email: 'contact@ottawawebmasters.ca',
        contactType: 'customer service',
        areaServed: 'CA',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
          timeZone: 'America/Toronto'
        }
      },
      {
        '@type': 'ContactPoint',
        email: 'contact@ottawawebmasters.ca',
        contactType: 'technical support',
        areaServed: 'CA',
        availableLanguage: 'English'
      }
    ],
    sameAs: [
      'https://linkedin.com/company/webmaster-services',
      'https://twitter.com/webmasterservices',
      'https://facebook.com/webmasterservices'
    ],
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Ontario'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Ottawa'
      },
      {
        '@type': 'State',
        name: 'Ontario'
      },
      {
        '@type': 'Country',
        name: 'Canada'
      }
    ]
  },
  // Professional Service
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${seoConfig.siteUrl}/contact#service`,
    name: 'Web Development Services',
    description: 'Professional web development, WordPress, Shopify, and SEO services',
    provider: {
      '@id': `${seoConfig.siteUrl}#organization`
    },
    serviceType: ['Web Development', 'WordPress Development', 'Shopify Development', 'SEO Services'],
    areaServed: {
      '@type': 'Place',
      name: 'Ottawa, Ontario, Canada'
    },
    url: `${seoConfig.siteUrl}/contact`,
    telephone: '+1-613-555-0123',
    email: 'contact@ottawawebmasters.ca'
  },
  // Contact Point
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    '@id': `${seoConfig.siteUrl}/contact#contactpoint`,
    contactType: 'customer service',
    telephone: '+1-613-555-0123',
    email: 'contact@ottawawebmasters.ca',
    url: `${seoConfig.siteUrl}/contact`,
    areaServed: 'CA',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
      timeZone: 'America/Toronto'
    }
  },
  // Breadcrumb for contact page
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: seoConfig.siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: `${seoConfig.siteUrl}/contact`
      }
    ]
  }
]);

// Inject structured data
useHead({
  script: [
    {
      id: 'contact-structured-data',
      type: 'application/ld+json',
      children: JSON.stringify(contactStructuredData.value),
    },
  ],
});
</script>