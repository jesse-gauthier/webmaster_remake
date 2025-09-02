<script setup>
import { RouterView } from 'vue-router';
// Lazy/conditional SpeedInsights: only import in production to disable during dev
let SpeedInsights = null;
if (import.meta.env.PROD) {
  import('@vercel/speed-insights/vue')
    .then(m => {
      SpeedInsights = m.SpeedInsights;
    })
    .catch(e => console.warn('SpeedInsights load failed', e));
}
import {
  onMounted,
  nextTick,
  ref,
  onBeforeUnmount,
  inject,
  provide,
} from 'vue';
import { setupSmoothScroll } from './utils/smoothScroll';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import WebAppModal from "@/components/modals/WebAppModal.vue"; // Disabled for better UX
import CookieConsentBar from './components/CookieConsentBar.vue';
import BreadcrumbStructuredData from './components/BreadcrumbStructuredData.vue';
import WebsiteStructuredData from './components/WebsiteStructuredData.vue';

// Inject the updateConsent function from the Analytics plugin
const updateConsent = inject('updateConsent');

// Provide fallback updateConsent in case the plugin doesn't
provide('updateConsent', (consent = {}) => {
  console.log('Fallback consent update:', consent);
  // If the analytics plugin is loaded, it will override this provider
});

// Modal functionality disabled for better UX
// Local storage key
// const MODAL_DISMISSED_KEY = "webmasterModalDismissed";

// Modal state - disabled
// const isModalOpen = ref(false);
// const modalShown = ref(false);
// let modalTimer = null;
// let interestTimer = null;
// let interestDetected = false;
// let scrollThresholdMet = false;

// Modal functionality disabled
// Check if modal should be shown based on local storage
// const canShowModal = () => {
//   try {
//     const dismissedTime = localStorage.getItem(MODAL_DISMISSED_KEY);
//     if (dismissedTime) {
//       const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
//       const dismissedDate = parseInt(dismissedTime);
//       const now = Date.now();

//       // If it's been less than 2 days since dismissal, don't show
//       if (now - dismissedDate < twoDaysInMs) {
//         return false;
//       }
//     }
//     return true;
//   } catch (e) {
//     // If there's an error reading localStorage, default to showing modal
//     console.error("Error checking modal history:", e);
//     return true;
//   }
// };

// Function to open modal - disabled
// const showModal = () => {
//   if (!modalShown.value && canShowModal()) {
//     isModalOpen.value = true;
//     modalShown.value = true;
//   }
// };

// Function to close modal - disabled
// const closeModal = () => {
//   isModalOpen.value = false;
//   // Save dismissal time to localStorage
//   try {
//     localStorage.setItem(MODAL_DISMISSED_KEY, Date.now().toString());
//   } catch (e) {
//     console.error("Error saving modal dismissal:", e);
//   }
// };

// Function to detect user interest with delay - disabled
// const detectUserInterest = (delay = 2000) => {
//   if (!modalShown.value && !interestDetected && canShowModal()) {
//     interestDetected = true;

//     // Clear any existing interest timer
//     if (interestTimer) {
//       clearTimeout(interestTimer);
//     }

//     // Show modal after delay
//     interestTimer = setTimeout(() => {
//       showModal();
//     }, delay);
//   }
// };

// Set up scroll depth tracking with throttling - disabled
// const trackScrollDepth = () => {
//   const scrollDepth =
//     window.scrollY / (document.body.scrollHeight - window.innerHeight);

//   // Mark threshold as met when user scrolls 60% of the page
//   if (scrollDepth > 0.6 && !scrollThresholdMet) {
//     scrollThresholdMet = true;
//     // Trigger with a longer delay for scroll-based interest
//     detectUserInterest(3000);
//   }
// };

// Set up mouse activity tracking - disabled
// const trackMouseActivity = (e) => {
//   // Detect if mouse moves near calls to action or pricing info
//   const mouseY = e.clientY;
//   const viewportHeight = window.innerHeight;

//   // If mouse is in the bottom 10% of the screen (often where CTAs are)
//   if (mouseY > viewportHeight * 0.9) {
//     // Trigger with shorter delay for mouse-based interest
//     detectUserInterest(1500);
//   }
// };

// Set up smooth scrolling when the app mounts
onMounted(() => {
  setupSmoothScroll();

  // Also set up smooth scrolling when routes change
  window.addEventListener('popstate', () => {
    nextTick(() => {
      setupSmoothScroll();
    });
  });

  // Modal functionality disabled for better UX
  // Set up modal timer (8 seconds for less aggressive timing)
  // modalTimer = setTimeout(() => {
  //   if (!modalShown.value && canShowModal()) {
  //     showModal();
  //   }
  // }, 8000);

  // Set up interest detection - disabled
  // window.addEventListener("scroll", trackScrollDepth);
  // document.addEventListener("mousemove", trackMouseActivity);
});

onBeforeUnmount(() => {
  // Clean up timers and event listeners - modal functionality disabled
  // if (modalTimer) clearTimeout(modalTimer);
  // if (interestTimer) clearTimeout(interestTimer);
  // window.removeEventListener("scroll", trackScrollDepth);
  // document.removeEventListener("mousemove", trackMouseActivity);
});
</script>

<template>
  <!-- Enhanced skip links for keyboard users -->
  <div class="skip-links">
    <a href="#main-content" class="skip-link" tabindex="0"
      >Skip to main content</a
    >
    <a href="#footer" class="skip-link" tabindex="0">Skip to footer</a>
  </div>

  <!-- Header with navigation landmark -->
  <AppHeader />

  <!-- Main content with improved landmark -->
  <main id="main-content" role="main" tabindex="-1">
    <RouterView />
  </main>

  <!-- Footer with landmark -->
  <AppFooter id="footer" />

  <!-- Modal disabled for better UX -->
  <!-- <Transition name="modal-fade">
    <WebAppModal
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      @close="closeModal"
      class="compact-modal"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    />
  </Transition> -->

  <!-- Cookie consent with improved accessibility -->
  <CookieConsentBar :update-consent="updateConsent" aria-live="polite" />

  <!-- Structured data for SEO -->
  <BreadcrumbStructuredData />
  <WebsiteStructuredData />
  <!-- Only render SpeedInsights in production -->
  <component :is="SpeedInsights" v-if="SpeedInsights" />
</template>

<style>
/* Skip link styles are now managed in accessibility.css */

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.compact-modal {
  max-height: 80vh;
  margin: auto;
  overflow-y: auto;
}
</style>
