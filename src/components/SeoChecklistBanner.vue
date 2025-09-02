<template>
  <Transition name="slide-up">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 bg-accent-500 text-white z-50 shadow-lg"
    >
      <div
        class="container-site py-3 px-4 flex sm:flex-row items-center justify-center"
      >
        <div class="flex items-center mb-3 sm:mb-0">
          <router-link
            to="/seo-checklist"
            class="font-medium text-lg sm:text-xl m-0 text-white text-center sm:text-left"
          >
            Boost your website's visibility with our
            <span class="font-bold">FREE</span> SEO checklist!
          </router-link>
          <button
            @click="closeBanner"
            class="text-white hover:text-neutral-100 transition-colors ml-4 p-2"
            aria-label="Close banner"
          >
            <Icon icon="mdi:close" class="text-lg" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

const isVisible = ref(false);
const STORAGE_KEY = 'seo_banner_closed';

// Check if user has previously closed the banner
onMounted(() => {
  const bannerClosed = localStorage.getItem(STORAGE_KEY);

  // Show banner if it hasn't been closed before or after 30 days
  if (!bannerClosed) {
    setTimeout(() => {
      isVisible.value = true;
    }, 2000); // Show after 2 seconds for better UX
  } else {
    // Check if the banner was closed more than 30 days ago
    const closedTime = parseInt(bannerClosed);
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

    if (Date.now() - closedTime > thirtyDaysInMs) {
      // Reset and show banner after 30 days
      setTimeout(() => {
        isVisible.value = true;
      }, 2000);
    }
  }
});

// Handle banner close
const closeBanner = () => {
  isVisible.value = false;
  // Store the timestamp when the banner was closed
  localStorage.setItem(STORAGE_KEY, Date.now().toString());

  // Track banner close event
  if (typeof window.trackEvent === 'function') {
    window.trackEvent('banner_closed', {
      banner_type: 'seo_checklist',
      page: window.location.pathname,
    });
  }
};

// Track when user clicks on the CTA
const trackBannerClick = () => {
  if (typeof window.trackEvent === 'function') {
    window.trackEvent('banner_cta_click', {
      banner_type: 'seo_checklist',
      cta: 'get_checklist',
      page: window.location.pathname,
    });
  }
  closeBanner();
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
