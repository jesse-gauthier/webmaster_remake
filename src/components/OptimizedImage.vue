<!-- OptimizedImage.vue - Prevents layout shift with proper aspect ratios -->
<template>
  <div
    class="img-container overflow-hidden"
    :class="`aspect-${aspectRatio}`"
    :style="containerStyle"
  >
    <!-- Loading skeleton -->
    <div
      v-if="!imageLoaded && showSkeleton"
      class="skeleton absolute inset-0 rounded"
      :class="skeletonClass"
    ></div>

    <!-- Actual image -->
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :fetchpriority="fetchpriority"
      :class="imageClass"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      :style="{ opacity: imageLoaded ? 1 : 0 }"
      @load="handleImageLoad"
      @error="handleImageError"
    />

    <!-- Fallback image on error -->
    <div
      v-if="imageError"
      class="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500"
    >
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p class="mt-2 text-sm">{{ fallbackText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [String, Number],
    default: null,
  },
  height: {
    type: [String, Number],
    default: null,
  },
  aspectRatio: {
    type: String,
    default: '16-9',
    validator: value => ['16-9', '4-3', '1-1', '3-2', '21-9'].includes(value),
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: value => ['lazy', 'eager'].includes(value),
  },
  fetchpriority: {
    type: String,
    default: 'auto',
    validator: value => ['high', 'low', 'auto'].includes(value),
  },
  showSkeleton: {
    type: Boolean,
    default: true,
  },
  imageClass: {
    type: String,
    default: '',
  },
  skeletonClass: {
    type: String,
    default: '',
  },
  fallbackText: {
    type: String,
    default: 'Image failed to load',
  },
  containerHeight: {
    type: String,
    default: null,
  },
});

const imageLoaded = ref(false);
const imageError = ref(false);

const containerStyle = computed(() => {
  const style = {};
  if (props.containerHeight) {
    style.height = props.containerHeight;
  }
  return style;
});

const handleImageLoad = () => {
  imageLoaded.value = true;
  imageError.value = false;
};

const handleImageError = () => {
  imageError.value = true;
  imageLoaded.value = false;
};

// Preload critical images
onMounted(() => {
  if (props.loading === 'eager' || props.fetchpriority === 'high') {
    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    img.src = props.src;
  }
});
</script>

<style scoped>
.aspect-16-9 {
  aspect-ratio: 16 / 9;
}

.aspect-4-3 {
  aspect-ratio: 4 / 3;
}

.aspect-1-1 {
  aspect-ratio: 1 / 1;
}

.aspect-3-2 {
  aspect-ratio: 3 / 2;
}

.aspect-21-9 {
  aspect-ratio: 21 / 9;
}
</style>
