<template>
  <div ref="root" class="lazy-contact-form">
    <Suspense v-if="shouldLoad">
      <template #default>
        <AsyncContactForm v-bind="passThroughProps" />
      </template>
      <template #fallback>
        <div class="flex items-center justify-center py-16" aria-busy="true">
          <div
            class="animate-spin h-8 w-8 border-4 border-primary-200 border-t-primary-500 rounded-full"
          ></div>
          <span class="sr-only">Loading contact form...</span>
        </div>
      </template>
    </Suspense>
    <noscript>
      <p class="text-sm text-neutral-600">
        Enable JavaScript to load the contact form.
      </p>
    </noscript>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
  watchEffect,
} from 'vue';

// Allow passing props through to ContactForm (extend as needed)
const props = defineProps({
  services: { type: Array, required: false, default: undefined },
});

const passThroughProps = props;

const shouldLoad = ref(false);
const root = ref(null);
let observer;

// Async load of the original heavy component (separate chunk)
const AsyncContactForm = defineAsyncComponent(
  () => import('./ContactForm.vue')
);

const loadIfIntersecting = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      shouldLoad.value = true;
      if (observer) observer.disconnect();
    }
  });
};

onMounted(() => {
  // If already below-the-fold, defer until visible; if above, load immediately
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(loadIfIntersecting, {
      rootMargin: '200px 0px',
    });
    if (root.value) observer.observe(root.value);
  } else {
    shouldLoad.value = true;
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});

// In case component is immediately visible (no scroll yet)
watchEffect(() => {
  if (shouldLoad.value === false && root.value) {
    const rect = root.value.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      shouldLoad.value = true;
      if (observer) observer.disconnect();
    }
  }
});
</script>

<style scoped>
.lazy-contact-form {
}
</style>
