<!-- src/components/WebsiteStructuredData.vue -->
<template>
  <!-- This component doesn't render anything visible, it only adds structured data to the page -->
</template>

<script setup>
import { onMounted } from "vue";
import { seoConfig } from "@/config/seo.config";

// Generate structured data for the website
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: seoConfig.siteName,
  url: seoConfig.siteUrl,
  description: seoConfig.defaultDescription,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: seoConfig.organization.name,
    logo: {
      "@type": "ImageObject",
      url: seoConfig.organization.logo,
    },
  },
};

// Function to add structured data to the page
const addStructuredData = () => {
  // Remove any existing website structured data
  const existingScript = document.getElementById("website-structured-data");
  if (existingScript) {
    existingScript.remove();
  }

  // Create and add the new script element
  const script = document.createElement("script");
  script.id = "website-structured-data";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(websiteStructuredData);
  document.head.appendChild(script);
};

// Add structured data when component mounts
onMounted(() => {
  addStructuredData();
});
</script>
