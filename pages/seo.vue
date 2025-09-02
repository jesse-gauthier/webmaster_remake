<template>
  <div>
    <!-- This page simply re-uses the landing SEO page content -->
    <LandingSeoProxy />
  </div>
</template>

<script setup>
// Lightweight wrapper so /seo is a valid route (also have redirect rule for safety)
import LandingSeoProxy from '@/pages/landing-seo.vue';
</script>
