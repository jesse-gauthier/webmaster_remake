<template>
  <div>
    <!-- Hero Section -->
    <section id="hero-section" class="bg-primary-light py-16 md:py-24">
      <div class="container-site">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            About Ottawa Webmasters
          </h1>
          <p class="text-lg text-neutral-800 mb-8">
            Your trusted partner for exceptional web solutions in Ottawa and
            beyond.
          </p>
        </div>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section id="who-we-are" class="py-16 bg-white">
      <div class="container-site">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-primary-700 mb-6">
                Who We Are
              </h2>
              <p class="text-neutral-800 mb-4">
                We are a dedicated team of web design and development
                specialists based in Ottawa, passionate about creating
                exceptional websites for small businesses.
              </p>
              <p class="text-neutral-800 mb-4">
                Our mission is simple: empower small businesses with quality
                digital solutions that drive real results. This guiding
                principle shapes every service we offer and every project we
                undertake.
              </p>
              <p class="text-neutral-800 mb-6">
                With our combined expertise and client-focused approach, we
                deliver websites that not only look great but also perform
                exceptionally well in today's competitive digital landscape.
              </p>
              <a
                href="#audit"
                @click="trackButtonClick('who-we-are-audit-button')"
                class="btn-primary hover:text-white"
                >Get Your Free SEO Audit</a
              >
            </div>
            <div class="bg-primary-100 rounded-lg p-6">
              <!-- Team image placeholder -->
              <div
                class="bg-primary-50 h-64 rounded flex items-center justify-center"
              >
                <svg
                  class="w-24 h-24 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do Section -->
    <section id="what-we-do" class="py-16 bg-neutral-cream">
      <div class="container-site">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="order-2 md:order-1">
              <!-- Services illustration placeholder -->
              <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">WordPress</span>
                  </div>
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">Shopify</span>
                  </div>
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">Joomla</span>
                  </div>
                  <div class="bg-primary-50 p-4 rounded text-center">
                    <svg
                      class="w-10 h-10 mx-auto mb-2 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span class="font-medium text-primary-700">Magento</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2">
              <h2 class="text-3xl font-bold text-primary-700 mb-6">
                What We Do
              </h2>
              <p class="text-neutral-800 mb-4">
                We serve startups, e-commerce ventures, and small businesses
                across Ottawa and Canada. Our expertise spans leading platforms
                like WordPress, Shopify, Joomla, and Magento.
              </p>
              <p class="text-neutral-800 mb-4">
                From custom design and development to e-commerce solutions and
                ongoing maintenance, we provide comprehensive web services
                tailored to your specific needs.
              </p>
              <p class="text-neutral-800 mb-6">
                Whatever your digital vision, we have the expertise to bring it
                to life and help your business thrive online.
              </p>
              <a
                href="#audit"
                @click="trackButtonClick('what-we-do-audit-button')"
                class="btn-primary hover:text-white"
                >Get Your Free SEO Audit</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why We Do It Section -->
    <section id="why-we-do" class="py-16 bg-white">
      <div class="container-site">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-primary-700 mb-6">
                Why We Do It
              </h2>
              <p class="text-neutral-800 mb-4">
                We understand the challenges businesses face—balancing time,
                money, and growth. We empathize with these struggles because
                we've been there too.
              </p>
              <p class="text-neutral-800 mb-4">
                That's why we specialize in creating websites that not only meet
                your needs but also help you overcome these challenges
                effectively.
              </p>
              <p class="text-neutral-800 mb-6">
                Our passion lies in seeing our clients succeed and grow. We
                believe that a well-crafted website is more than just an online
                presence—it's a powerful business tool that opens new
                opportunities and drives meaningful results.
              </p>
            </div>
            <div class="bg-accent-50 rounded-lg p-6">
              <!-- Values illustration -->
              <div class="space-y-4">
                <div
                  class="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div class="bg-accent-100 p-3 rounded-full mr-4">
                    <svg
                      class="w-6 h-6 text-accent-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-neutral-900">
                      Time-Efficient Solutions
                    </h4>
                    <p class="text-sm text-neutral-700">
                      Websites designed to save you time and simplify management
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div class="bg-accent-100 p-3 rounded-full mr-4">
                    <svg
                      class="w-6 h-6 text-accent-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-neutral-900">
                      Cost-Effective Approach
                    </h4>
                    <p class="text-sm text-neutral-700">
                      Budget-friendly options that deliver maximum value
                    </p>
                  </div>
                </div>
                <div
                  class="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div class="bg-accent-100 p-3 rounded-full mr-4">
                    <svg
                      class="w-6 h-6 text-accent-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-neutral-900">
                      Growth-Focused Designs
                    </h4>
                    <p class="text-sm text-neutral-700">
                      Websites built to scale with your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Audit Component (lazy) -->
    <AsyncSeoAuditForm id="audit-section" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { inject } from 'vue';
import AsyncSeoAuditForm from '~/components/forms/AsyncSeoAuditForm.vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup
useSeo({
  title: 'About Ottawa Webmasters | Your Trusted Web Development Partner',
  description:
    'Learn about Ottawa Webmasters, your trusted partner for exceptional web solutions. We specialize in custom web design, development, and digital marketing services in Ottawa and beyond.',
  url: '/about',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ottawa Webmasters',
    description: 'Professional web development and design services in Ottawa',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ottawa',
      addressRegion: 'Ontario',
      addressCountry: 'Canada',
    },
    serviceArea: {
      '@type': 'Place',
      name: 'Ottawa and surrounding areas',
    },
  },
});

// Get analytics methods
const analytics = inject('analytics', null);

// Track page view when component mounts
onMounted(() => {
  if (analytics) {
    analytics.pageView('/about');
  }
  analytics.trackEvent('Page', 'view', 'About Page');
});

// Track button clicks
const trackButtonClick = buttonName => {
  analytics.trackEvent('Button', 'click', buttonName);
};

// Track section visibility
const visibleSections = ref(new Set());
const observerRef = ref(null);

// Set up intersection observer to track when sections become visible
onMounted(() => {
  observerRef.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && !visibleSections.value.has(sectionId)) {
          visibleSections.value.add(sectionId);
          analytics.trackEvent('Section', 'view', sectionId);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all sections
  document.querySelectorAll('section[id]').forEach(section => {
    observerRef.value.observe(section);
  });
});

// Clean up observer on unmount
onUnmounted(() => {
  if (observerRef.value) {
    observerRef.value.disconnect();
  }
});
</script>
