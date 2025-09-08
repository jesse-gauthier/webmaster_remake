<script setup>
import HomeHero from '~/components/ui/HomeHero.vue';
import ServicesShowcase from '~/components/ui/ServicesShowcase.vue';
import WorkProcess from '~/components/ui/WorkProcess.vue';
import PricingSection from '~/components/ui/PricingSection.vue';
import AwardsCarousel from '~/components/ui/AwardsCarousel.vue';
import HomepageStructuredData from '~/components/seo/HomepageStructuredData.vue';
import {
  onMounted,
  onUnmounted,
  ref,
  inject,
  onBeforeUnmount,
  defineAsyncComponent,
  watchEffect,
} from 'vue';
import { Icon } from '@iconify/vue';
import { useRouteSeo } from '~/composables/useRouteSeo';

// Apply SEO from route meta
useRouteSeo();

const analytics = inject('analytics', null);
const observerRef = ref(null);
const visibleSections = ref(new Set());

// Use Nuxt's LazyContactForm auto-import for better hydration
const LazyContactForm = defineAsyncComponent({
  loader: () => import('@/components/forms/ContactForm.vue'),
  delay: 200,
  timeout: 3000,
  loadingComponent: {
    template: `
      <div class="flex items-center justify-center py-16" aria-busy="true">
        <div class="animate-spin h-8 w-8 border-4 border-primary-200 border-t-primary-500 rounded-full" aria-hidden="true"></div>
        <span class="sr-only">Loading contact form...</span>
      </div>
    `
  }
});
const contactShouldLoad = ref(false);
const contactRoot = ref(null);
let contactObserver;
const contactLoadIfIntersecting = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactShouldLoad.value = true;
      if (contactObserver) contactObserver.disconnect();
    }
  });
};

onMounted(() => {
  // Track page view
  if (analytics) {
    analytics.pageView('/');
    analytics.trackEvent('Page', 'view', 'Home Page');
  }

  // Set up section visibility tracking
  setupSectionVisibilityTracking();

  // contact lazy observer
  if ('IntersectionObserver' in window) {
    contactObserver = new IntersectionObserver(contactLoadIfIntersecting, {
      rootMargin: '200px 0px',
    });
    if (contactRoot.value) contactObserver.observe(contactRoot.value);
  } else {
    contactShouldLoad.value = true;
  }

  // Check if contact section is already visible
  if (contactRoot.value) {
    const rect = contactRoot.value.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      contactShouldLoad.value = true;
      if (contactObserver) contactObserver.disconnect();
    }
  }
});

onBeforeUnmount(() => {
  if (contactObserver) contactObserver.disconnect();
});

// Clean up observer
onUnmounted(() => {
  if (observerRef.value) {
    observerRef.value.disconnect();
  }
});

// Track section visibility
const setupSectionVisibilityTracking = () => {
  observerRef.value = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && !visibleSections.value.has(sectionId)) {
          visibleSections.value.add(sectionId);
          if (analytics) {
            analytics.trackEvent('Section', 'view', sectionId);
          }
        }
      });
    },
    { threshold: 0.25 }
  );

  // Observe all sections
  document.querySelectorAll('section[id]').forEach(section => {
    observerRef.value.observe(section);
  });
};

// Track CTA button clicks
const trackCtaClick = buttonName => {
  if (analytics) {
    analytics.trackEvent('Button', 'click', buttonName);
  }
};
</script>

<template>
  <main>
    <!-- Enhanced structured data for homepage SEO -->
    <HomepageStructuredData />
    <section id="hero-section" class="hero-section">
      <HomeHero />
    </section>
    <section id="services-section" class="py-16 bg-white">
      <ServicesShowcase />
    </section>
    <section id="awards-section">
      <AwardsCarousel />
    </section>

    <!-- Enhanced Technology Stack Section -->
    <section
      id="tech-stack-section"
      class="py-20 bg-gradient-to-br from-primary-50 via-neutral-cream to-accent-50 relative overflow-hidden"
    >
      <!-- Background decorations -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div
          class="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full animate-bounce-light"
        ></div>
        <div
          class="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full animate-bounce-light"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="container-site relative z-10">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <span
            class="inline-block bg-primary bg-opacity-20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            ⚡ Cutting-Edge Technology
          </span>
          <h2 class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Powered by Modern Tech Stack
          </h2>
          <p class="text-xl text-neutral-text leading-relaxed">
            We leverage the latest technologies and frameworks to build robust,
            scalable, and high-performing digital solutions that stand the test
            of time.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Frontend Technologies -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-accent/10"
          >
            <div class="flex items-center mb-6">
              <div
                class="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary">Frontend</h3>
            </div>

            <ul class="space-y-4">
              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors duration-200"
              >
                <div class="bg-accent/10 rounded-full p-2">
                  <Icon
                    icon="mdi:vuejs"
                    class="text-accent text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark">Vue.js</span>
                  <p class="text-sm text-neutral-600">Progressive framework</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors duration-200"
              >
                <div class="bg-blue-100 rounded-full p-2">
                  <Icon
                    icon="mdi:react"
                    class="text-blue-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark">React</span>
                  <p class="text-sm text-neutral-600">Component library</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors duration-200"
              >
                <div class="bg-yellow-100 rounded-full p-2">
                  <Icon
                    icon="mdi:language-javascript"
                    class="text-yellow-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark"
                    >JavaScript/TypeScript</span
                  >
                  <p class="text-sm text-neutral-600">Modern scripting</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/5 transition-colors duration-200"
              >
                <div class="bg-blue-100 rounded-full p-2">
                  <Icon
                    icon="mdi:language-css3"
                    class="text-blue-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark"
                    >Tailwind CSS</span
                  >
                  <p class="text-sm text-neutral-600">Utility-first CSS</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Backend Technologies -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-primary/10"
          >
            <div class="flex items-center mb-6">
              <div
                class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary">Backend</h3>
            </div>

            <ul class="space-y-4">
              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
              >
                <div class="bg-green-100 rounded-full p-2">
                  <Icon
                    icon="mdi:nodejs"
                    class="text-green-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark">Node.js</span>
                  <p class="text-sm text-neutral-600">Runtime environment</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
              >
                <div class="bg-purple-100 rounded-full p-2">
                  <Icon
                    icon="mdi:language-php"
                    class="text-purple-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark">PHP</span>
                  <p class="text-sm text-neutral-600">Server-side scripting</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
              >
                <div class="bg-blue-100 rounded-full p-2">
                  <Icon
                    icon="mdi:database"
                    class="text-blue-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark"
                    >MySQL/MongoDB</span
                  >
                  <p class="text-sm text-neutral-600">Database solutions</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-200"
              >
                <div class="bg-gray-100 rounded-full p-2">
                  <Icon
                    icon="mdi:source-branch"
                    class="text-gray-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark"
                    >REST/GraphQL</span
                  >
                  <p class="text-sm text-neutral-600">API architecture</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Platforms & Services -->
          <div
            class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-accent-600/10"
          >
            <div class="flex items-center mb-6">
              <div
                class="bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl w-16 h-16 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-primary">Platforms</h3>
            </div>

            <ul class="space-y-4">
              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent-600/5 transition-colors duration-200"
              >
                <div class="bg-blue-100 rounded-full p-2">
                  <Icon
                    icon="mdi:wordpress"
                    class="text-[#21759b] text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark">WordPress</span>
                  <p class="text-sm text-neutral-600">CMS platform</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent-600/5 transition-colors duration-200"
              >
                <div class="bg-green-100 rounded-full p-2">
                  <Icon
                    icon="mdi:shopify"
                    class="text-[#7AB55C] text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark">Shopify</span>
                  <p class="text-sm text-neutral-600">E-commerce platform</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent-600/5 transition-colors duration-200"
              >
                <div class="bg-orange-100 rounded-full p-2">
                  <Icon
                    icon="mdi:cloud-outline"
                    class="text-orange-500 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark"
                    >AWS/DigitalOcean</span
                  >
                  <p class="text-sm text-neutral-600">Cloud hosting</p>
                </div>
              </li>

              <li
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-accent-600/5 transition-colors duration-200"
              >
                <div class="bg-green-100 rounded-full p-2">
                  <Icon
                    icon="mdi:lock"
                    class="text-green-600 text-xl"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span class="font-semibold text-primary-dark"
                    >SSL/Security</span
                  >
                  <p class="text-sm text-neutral-600">Protection layers</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-16">
          <router-link
            to="/technology-stack"
            class="btn-primary btn-lg hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            @click="trackCtaClick('tech-stack-learn-more')"
          >
            Explore Our Full Tech Stack
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <section id="work-process-section">
      <WorkProcess />
    </section>
    <section id="pricing-section">
      <PricingSection />
    </section>
    <section id="contact-section">
      <div ref="contactRoot" class="async-contact-form">
        <ClientOnly fallback-tag="div" class="flex items-center justify-center py-16">
          <template #fallback>
            <div class="text-center">
              <p class="text-sm text-neutral-600 mb-4">
                Loading contact form...
              </p>
              <div
                class="animate-spin h-6 w-6 border-2 border-primary-200 border-t-primary-500 rounded-full mx-auto"
                aria-hidden="true"
              ></div>
              <span class="sr-only">Loading contact form...</span>
            </div>
          </template>
          <LazyContactForm v-if="contactShouldLoad" />
          <div v-else class="flex items-center justify-center py-16">
            <div class="text-center">
              <p class="text-sm text-neutral-600 mb-4">
                Scroll down to load the contact form
              </p>
              <div
                class="animate-pulse h-6 w-6 bg-primary-200 rounded-full mx-auto"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </section>
  </main>
</template>
