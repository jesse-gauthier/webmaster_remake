<template>
  <div>
    <StartupProgramComponent />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import StartupProgramComponent from "~/components/ui/StartupProgramComponent.vue";
import { useSeo } from '~/composables/useSeo';
import { useAnalytics } from '~/composables/useAnalytics';

// Get analytics methods
const { trackPageView } = useAnalytics();

// Use Nuxt's built-in SEO capabilities
useSeo({
  title: 'Startup Partnership Program | Web Application Development',
  description: 'Our Startup Partnership Program offers premium web application development with just $1,500 upfront and a 5-8% equity stake. Get a dedicated technical partner invested in your long-term success.',
  url: '/startup-partnership'
});

// Track page view when component mounts
onMounted(() => {
  // Page view tracking
  trackPageView("/startup-partnership", "Startup Partnership Page");
});
</script>

<style scoped>
/* Any additional page-specific styling would go here */
</style>
