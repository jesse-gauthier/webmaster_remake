<template>
  <div ref="root" class="async-seo-audit-form">
    <Suspense v-if="shouldLoad">
      <template #default>
        <AsyncSeoAuditForm v-bind="$attrs" />
      </template>
      <template #fallback>
        <div class="flex items-center justify-center py-12" aria-busy="true">
          <div
            class="animate-spin h-8 w-8 border-4 border-accent-200 border-t-accent-600 rounded-full"
          ></div>
          <span class="sr-only">Loading SEO audit form...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue';
const shouldLoad = ref(false);
const root = ref(null);
let observer;
const AsyncSeoAuditForm = defineAsyncComponent(
  () => import('./SeoAuditForm.vue')
);
const load = entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      shouldLoad.value = true;
      if (observer) observer.disconnect();
    }
  });
};
onMounted(() => {
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(load, { rootMargin: '150px' });
    if (root.value) observer.observe(root.value);
  } else {
    shouldLoad.value = true;
  }
});
onBeforeUnmount(() => observer && observer.disconnect());
</script>
<style scoped>
.async-seo-audit-form {
}
</style>
