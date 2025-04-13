<template>
  <div>
    <StartupProgramComponent />
    <StartupPartnershipForm />
  </div>
</template>

<script setup>
import { onMounted, inject } from "vue";
import StartupProgramComponent from "@/components/StartupProgramComponent.vue";
import StartupPartnershipForm from "@/views/StartupPartnershipForm.vue";

// Get analytics methods
const analytics = inject("analytics");

// Track page view when component mounts
onMounted(() => {
  // Page view tracking
  analytics.pageView("/startup-partnership");
  analytics.trackEvent("Page", "view", "Startup Partnership Page");

  // Add metadata for SEO
  document.title =
    "Startup Partnership Program | Web Application Development | WebMaster";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Our Startup Partnership Program offers premium web application development with just $1,500 upfront and a 5-8% equity stake. Get a dedicated technical partner invested in your long-term success."
    );
  }
});
</script>

<style scoped>
/* Any additional page-specific styling would go here */
</style>
