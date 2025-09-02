<template>
  <div>
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Cookie Consent -->
    <CookieConsentBar />
    
    <!-- Structured Data -->
    <BreadcrumbStructuredData />
    <WebsiteStructuredData />
    
    <!-- Speed Insights (Production only) -->
    <component :is="SpeedInsights" v-if="SpeedInsights" />
  </div>
</template>

<script setup>
import { onMounted, nextTick, ref, onBeforeUnmount, inject, provide } from 'vue'
import { setupSmoothScroll } from '~/utils/smoothScroll'

// Lazy/conditional SpeedInsights: only import in production to disable during dev
let SpeedInsights = null
if (process.env.NODE_ENV === 'production') {
  import('@vercel/speed-insights/vue')
    .then(m => {
      SpeedInsights = m.SpeedInsights
    })
    .catch(e => console.warn('SpeedInsights load failed', e))
}

// Inject the updateConsent function from the Analytics plugin
const updateConsent = inject('updateConsent')

// Provide fallback updateConsent in case the plugin doesn't
provide('updateConsent', (consent = {}) => {
  console.log('Fallback consent update:', consent)
  // If the analytics plugin is loaded, it will override this provider
})

// Smooth scrolling setup
onMounted(async () => {
  await nextTick()
  setupSmoothScroll()
})
</script>

<style scoped>
/* Add any layout-specific styles here */
</style>