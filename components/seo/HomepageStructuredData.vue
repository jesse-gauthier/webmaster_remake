<template>
  <!-- This component adds enhanced structured data specifically for the homepage -->
</template>

<script setup>
import { computed } from 'vue';
import { seoConfig } from '~/config/seo.config';

// Enhanced structured data for homepage including LocalBusiness and Service offerings
const homepageStructuredData = computed(() => [
  // Local Business Data
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${seoConfig.siteUrl}#localbusiness`,
    name: 'Web Masters',
    alternateName: 'Webmaster Services',
    description: 'Professional web development, WordPress, Shopify, and SEO services for small businesses and startups.',
    url: seoConfig.siteUrl,
    telephone: '+1-613-555-0123',
    email: 'contact@webmasterservices.ca',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
      addressRegion: 'ON',
      addressLocality: 'Ottawa'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '45.4215',
      longitude: '-75.6972'
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Ottawa'
      },
      {
        '@type': 'Place',
        name: 'Ontario'
      },
      {
        '@type': 'Place',
        name: 'Canada'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '45.4215',
        longitude: '-75.6972'
      },
      geoRadius: '50000'
    },
    sameAs: [
      'https://linkedin.com/company/webmaster-services',
      'https://twitter.com/webmasterservices',
      'https://facebook.com/webmasterservices'
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${seoConfig.siteUrl}/images/logo.png`,
      width: 200,
      height: 60
    },
    image: {
      '@type': 'ImageObject',
      url: `${seoConfig.siteUrl}/images/hero-image.jpg`,
      width: 1200,
      height: 630
    },
    priceRange: '$500-$10000',
    openingHours: 'Mo-Fr 09:00-17:00',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'CAD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress Development',
            description: 'Custom WordPress website development and maintenance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify Development',
            description: 'E-commerce store development and optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Services',
            description: 'Search engine optimization and digital marketing'
          }
        }
      ]
    }
  },
  // Professional Service Organization
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${seoConfig.siteUrl}#professionalservice`,
    name: 'Web Masters',
    description: 'Professional web development agency specializing in WordPress, Shopify, and custom web solutions.',
    url: seoConfig.siteUrl,
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Web Masters',
      url: seoConfig.siteUrl
    },
    areaServed: 'Ottawa, Ontario, Canada',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Professional Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${seoConfig.siteUrl}/services/wordpress`,
            name: 'WordPress Development',
            description: 'Custom WordPress websites, themes, and plugins',
            serviceType: 'Web Development',
            provider: {
              '@type': 'Organization',
              name: 'Web Masters'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${seoConfig.siteUrl}/services/shopify`,
            name: 'Shopify Development',
            description: 'E-commerce stores and Shopify customization',
            serviceType: 'E-commerce Development',
            provider: {
              '@type': 'Organization',
              name: 'Web Masters'
            }
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${seoConfig.siteUrl}/services/seo`,
            name: 'SEO Services',
            description: 'Search engine optimization and digital marketing',
            serviceType: 'Digital Marketing',
            provider: {
              '@type': 'Organization',
              name: 'Web Masters'
            }
          }
        }
      ]
    }
  },
  // Breadcrumb List for Homepage
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: seoConfig.siteUrl
      }
    ]
  },
  // FAQ Schema for common questions
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What web development services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer WordPress development, Shopify e-commerce solutions, custom web development, SEO services, and monthly maintenance plans.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you work with small businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in helping small businesses and startups establish their online presence with professional, affordable web solutions.'
        }
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We primarily serve Ottawa and the surrounding areas, but also work with clients across Ontario and Canada remotely.'
        }
      }
    ]
  }
]);

// Inject multiple structured data schemas
useHead({
  script: [
    {
      id: 'homepage-structured-data',
      type: 'application/ld+json',
      children: JSON.stringify(homepageStructuredData.value),
    },
  ],
});
</script>