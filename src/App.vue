<script setup>
import { RouterView } from "vue-router";
import {
  onMounted,
  nextTick,
  ref,
  onBeforeUnmount,
  inject,
  provide,
} from "vue";
import { setupSmoothScroll } from "./utils/smoothScroll";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import WebAppModal from "@/components/modals/WebAppModal.vue";
import CookieConsentBar from "./components/CookieConsentBar.vue";

// Inject the updateConsent function from the Analytics plugin
const updateConsent = inject("updateConsent");

// Provide fallback updateConsent in case the plugin doesn't
provide("updateConsent", (consent = {}) => {
  console.log("Fallback consent update:", consent);
  // If the analytics plugin is loaded, it will override this provider
});

// Local storage key
const MODAL_DISMISSED_KEY = "webmasterModalDismissed";

// Modal state
const isModalOpen = ref(false);
const modalShown = ref(false);
let modalTimer = null;
let interestDetected = false;

// Check if modal should be shown based on local storage
const canShowModal = () => {
  try {
    const dismissedTime = localStorage.getItem(MODAL_DISMISSED_KEY);
    if (dismissedTime) {
      const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
      const dismissedDate = parseInt(dismissedTime);
      const now = Date.now();

      // If it's been less than 2 days since dismissal, don't show
      if (now - dismissedDate < twoDaysInMs) {
        return false;
      }
    }
    return true;
  } catch (e) {
    // If there's an error reading localStorage, default to showing modal
    console.error("Error checking modal history:", e);
    return true;
  }
};

// Function to open modal
const showModal = () => {
  if (!modalShown.value && canShowModal()) {
    isModalOpen.value = true;
    modalShown.value = true;
  }
};

// Function to close modal
const closeModal = () => {
  isModalOpen.value = false;
  // Save dismissal time to localStorage
  try {
    localStorage.setItem(MODAL_DISMISSED_KEY, Date.now().toString());
  } catch (e) {
    console.error("Error saving modal dismissal:", e);
  }
};

// Function to detect user interest
const detectUserInterest = () => {
  if (!modalShown.value && !interestDetected && canShowModal()) {
    interestDetected = true;
    showModal();
  }
};

// Set up scroll depth tracking
const trackScrollDepth = () => {
  const scrollDepth =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (scrollDepth > 0.4) {
    // If user scrolled 40% of the page
    detectUserInterest();
  }
};

// Set up mouse activity tracking
const trackMouseActivity = (e) => {
  // Detect if mouse moves near calls to action or pricing info
  const mouseY = e.clientY;
  const viewportHeight = window.innerHeight;

  // If mouse is in the bottom third of the screen (often where CTAs are)
  if (mouseY > viewportHeight * 0.7) {
    detectUserInterest();
  }
};

// Set up smooth scrolling when the app mounts
onMounted(() => {
  setupSmoothScroll();

  // Also set up smooth scrolling when routes change
  window.addEventListener("popstate", () => {
    nextTick(() => {
      setupSmoothScroll();
    });
  });

  // Set up modal timer (3 seconds)
  modalTimer = setTimeout(() => {
    if (!modalShown.value && canShowModal()) {
      showModal();
    }
  }, 3000);

  // Set up interest detection
  window.addEventListener("scroll", trackScrollDepth);
  document.addEventListener("mousemove", trackMouseActivity);
});

onBeforeUnmount(() => {
  // Clean up timers and event listeners
  if (modalTimer) clearTimeout(modalTimer);
  window.removeEventListener("scroll", trackScrollDepth);
  document.removeEventListener("mousemove", trackMouseActivity);
});
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
  <Transition name="modal-fade">
    <WebAppModal
      v-if="isModalOpen"
      :isOpen="isModalOpen"
      @close="closeModal"
      class="compact-modal"
    />
  </Transition>
  <CookieConsentBar :update-consent="updateConsent" />
</template>

<style>
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
