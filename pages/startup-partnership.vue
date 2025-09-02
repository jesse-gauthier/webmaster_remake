<template>
  <div>
    <StartupProgramComponent />
  </div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import StartupProgramComponent from "~/components/ui/StartupProgramComponent.vue";
import { useSeo } from '~/composables/useSeo';

// Get analytics methods
const analytics = inject("analytics");

// Use Nuxt's built-in SEO capabilities
useSeo({
  title: 'Startup Partnership Program | Web Application Development',
  description: 'Our Startup Partnership Program offers premium web application development with just $1,500 upfront and a 5-8% equity stake. Get a dedicated technical partner invested in your long-term success.',
  url: '/startup-partnership'
});

// Track page view when component mounts
onMounted(() => {
  // Page view tracking
  analytics.pageView("/startup-partnership");
  analytics.trackEvent("Page", "view", "Startup Partnership Page");
});
</script>

<style scoped>
/* Any additional page-specific styling would go here */
</style>
