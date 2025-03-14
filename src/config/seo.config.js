// src/config/seo.config.js

/**
 * Central SEO configuration for the entire application
 * Edit this file to update site-wide SEO settings
 */
export const seoConfig = {
  // Site details
  siteName: "Ottawa Web Masters",
  siteUrl: "https://www.ottawawebmasters.ca",

  // Default meta
  defaultTitle: "Web Development Experts",
  defaultDescription:
    "Professional web development agency specializing in Vue.js, React, and modern web solutions.",

  // Social media
  socialImage: "/images/logo_icon.png",
  defaultImage: "/images/logo_icon.png", // Adding defaultImage that's referenced in router

  // Language/locale settings
  language: "en",
  locale: "en_CA",

  // Organization schema
  organization: {
    name: "Ottawa Webmasters",
    url: "https://www.ottawawebmasters.ca",
    logo: "https://www.ottawawebmasters.ca/images/logo_icon.png",
    sameAs: [
      "https://www.facebook.com/ottawawebmasters",
      "https://www.linkedin.com/company/ottawa-webmasters",
      "https://twitter.com/ottawawebmasters",
      "https://www.instagram.com/ottawawebmasters",
    ],
  },

  // Location information for LocalBusiness schema
  location: {
    street: "123 Web Avenue",
    city: "Ottawa",
    region: "ON",
    postalCode: "K1P 1A1",
    country: "CA",
    phone: "+1 (613) 555-1234",
    email: "hello@ottawawebmasters.ca",
  },

  // Favicons configuration
  favicons: {
    appleTouchIcon:
      "https://www.ottawawebmasters.ca/images/apple-touch-icon.png",
    favicon32: "https://www.ottawawebmasters.ca/images/favicon-32x32.png",
    favicon16: "https://www.ottawawebmasters.ca/images/favicon-16x16.png",
    safariPinnedTab:
      "https://www.ottawawebmasters.ca/images/safari-pinned-tab.svg",
    msapplication: "https://www.ottawawebmasters.ca/images/mstile-144x144.png",
  },

  // Key pages for sitemap priority
  keyPages: [
    { path: "/", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ],
};

/**
 * Creates structured data for the organization
 * @returns {Object} Organization schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    sameAs: seoConfig.organization.sameAs,
  };
}

/**
 * Creates local business schema (if applicable)
 * @returns {Object} LocalBusiness schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: seoConfig.organization.name,
    url: seoConfig.organization.url,
    logo: seoConfig.organization.logo,
    image: seoConfig.socialImage,
    telephone: seoConfig.location.phone,
    email: seoConfig.location.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.location.street,
      addressLocality: seoConfig.location.city,
      addressRegion: seoConfig.location.region,
      postalCode: seoConfig.location.postalCode,
      addressCountry: seoConfig.location.country,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

/**
 * Generates canonical URL for a given path
 * @param {string} path - Route path
 * @returns {string} Full canonical URL
 */
export function getCanonicalUrl(path) {
  // Ensure path starts with a slash
  const formattedPath = path.startsWith("/") ? path : `/${path}`;
  // Remove trailing slash except for homepage
  const normalizedPath =
    formattedPath === "/" ? formattedPath : formattedPath.replace(/\/+$/, "");
  return `${seoConfig.siteUrl}${normalizedPath}`;
}

/**
 * Creates article schema for blog posts
 * @param {Object} article - Article data
 * @returns {Object} Article schema
 */
export function getArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: article.featuredImage || seoConfig.defaultImage,
    datePublished: article.date,
    dateModified: article.modified || article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.organization.name,
      logo: {
        "@type": "ImageObject",
        url: seoConfig.organization.logo,
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${seoConfig.siteUrl}/blog/${article.slug}`,
    },
  };
}
