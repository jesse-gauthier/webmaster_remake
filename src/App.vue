<script setup>
import { RouterView } from 'vue-router'
import { onMounted, nextTick } from 'vue';
import { setupSmoothScroll } from './utils/smoothScroll';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import SeoChecklistBanner from '@/components/SeoChecklistBanner.vue';


// Set up smooth scrolling when the app mounts
onMounted(() => {
  setupSmoothScroll();

  // Also set up smooth scrolling when routes change
  window.addEventListener('popstate', () => {
    nextTick(() => {
      setupSmoothScroll();
    });
  });
});
</script>

<template>
  <AppHeader />
  <RouterView />
  <SeoChecklistBanner />
  <AppFooter />
</template>
