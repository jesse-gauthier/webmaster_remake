<template>
  <div>
    <!-- Skip Navigation Links for Accessibility -->
    <div class="sr-only focus-within:not-sr-only focus-within:absolute focus-within:top-4 focus-within:left-4 focus-within:z-50 focus-within:flex focus-within:gap-2">
      <a
        href="#main-content"
        class="bg-primary text-white px-4 py-2 rounded text-sm font-medium shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
      >
        Skip to main content
      </a>
      <a
        href="#footer"
        class="bg-primary text-white px-4 py-2 rounded text-sm font-medium shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
      >
        Skip to footer
      </a>
    </div>

    <!-- Landing Page Header (Logo only) -->
    <header class="bg-white shadow-md fixed w-full top-0 z-sticky h-header">
      <div class="container-site h-full flex items-center justify-center">
        <div class="flex-shrink-0 w-fit">
          <Logo />
        </div>
      </div>
    </header>

    <!-- Spacer to prevent content from hiding behind fixed header -->
    <div class="h-header"></div>

    <!-- Main Content -->
    <main id="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Cookie Consent -->
    <CookieConsentBar />

    <!-- Structured Data -->
    <BreadcrumbStructuredData />
    <WebsiteStructuredData />

    <!-- Speed Insights (Production only, client-side only) -->
    <ClientOnly>
      <component :is="SpeedInsights" v-if="SpeedInsights" />
    </ClientOnly>
  </div>
</template>

<script setup>
import {
  onMounted,
  nextTick,
  ref,
  onBeforeUnmount,
  inject,
  provide,
} from 'vue';
import { setupSmoothScroll } from '~/utils/smoothScroll';
import Logo from '~/assets/logo.vue';

// Lazy/conditional SpeedInsights: only import in production AND on client to avoid SSR errors
let SpeedInsights = null;
if (process.client && process.env.NODE_ENV === 'production') {
  import('@vercel/speed-insights/vue')
    .then(m => {
      SpeedInsights = m.SpeedInsights;
    })
    .catch(e => console.warn('SpeedInsights load failed', e));
}

// Inject the updateConsent function from the Analytics plugin
const updateConsent = inject('updateConsent', null);

// Provide fallback updateConsent in case the plugin doesn't
provide(
  'updateConsent',
  updateConsent ||
    ((consent = {}) => {
      console.log('Fallback consent update:', consent);
    })
);

// Smooth scrolling setup
onMounted(async () => {
  await nextTick();
  setupSmoothScroll();
});
</script>

<style scoped>
/* Skip link enhancements for better accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Ensure skip links are accessible when focused */
.focus-within\:not-sr-only:focus-within {
  position: static !important;
  width: auto !important;
  height: auto !important;
  padding: inherit !important;
  margin: inherit !important;
  overflow: visible !important;
  clip: auto !important;
  white-space: normal !important;
}

/* Custom focus styles for skip links */
.skiplink-focus {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>