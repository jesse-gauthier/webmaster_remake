<script setup>
import { ref } from "vue";

const currentYear = new Date().getFullYear();

const footerLinks = {
  Services: [
    { name: "WordPress", url: "/wordpress" },
    { name: "Shopify", url: "/shopify" },
    { name: "Monthly Maintenance", url: "/maintenance" },
    { name: "Consultations", url: "/consultations" },
    { name: "Search Engine Optimization", url: "/seo" },
    { name: "Web Applications", url: "/web-applications" },
  ],
  Company: [
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "New Client Form", url: "/new-client-form" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Free SEO checklist", url: "/seo-checklist" },
  ],
  Legal: [
    { name: "Policies", url: "/policies" },
    { name: "Startup Partnership Program", url: "/startup" },
  ],
};
</script>

<template>
  <footer id="footer" class="bg-primary text-white" role="contentinfo">
    <div class="container-site px-4 sm:px-6 lg:px-8 py-10">
      <!-- Back to top link -->
      <div class="text-right mb-6">
        <a
          href="#main-content"
          class="inline-flex items-center text-primary-light hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
          aria-label="Back to top of page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          Back to top
        </a>
      </div>

      <!-- Footer Navigation -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(links, category) in footerLinks"
          :key="category"
          class="space-y-3"
        >
          <h2 class="text-lg font-semibold mb-3 text-white">{{ category }}</h2>
          <nav :aria-label="`${category} navigation`">
            <ul class="space-y-2" role="list">
              <li v-for="link in links" :key="link.name">
                <router-link
                  :to="link.url"
                  class="text-primary-light hover:text-accent transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                  :aria-current="$route.path === link.url ? 'page' : undefined"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 pt-6 border-t border-primary-dark text-center">
        <p class="text-primary-light text-sm">
          &copy; {{ currentYear }} Web Masters. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
