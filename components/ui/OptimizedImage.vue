<template>
  <div
    ref="imageContainer"
    :class="containerClass"
    :style="{ backgroundColor: placeholderColor }"
  >
    <!-- Loading placeholder -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-transparent"
      :style="{ backgroundColor: placeholderColor }"
    >
      <div v-if="showLoadingSpinner" class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-gray-300 h-10 w-10"></div>
        <div class="flex-1 space-y-2 py-1">
          <div class="h-4 bg-gray-300 rounded w-3/4"></div>
          <div class="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div v-else class="text-gray-500">
        <slot name="placeholder">
          <div class="flex items-center justify-center h-full">
            <svg
              class="w-8 h-8 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </slot>
      </div>
    </div>

    <!-- Error state -->
    <div
      v-else-if="hasError"
      class="absolute inset-0 flex items-center justify-center text-gray-500"
    >
      <slot name="error">
        <div class="text-center">
          <svg
            class="w-12 h-12 mx-auto text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="mt-2 text-sm">Failed to load image</p>
        </div>
      </slot>
    </div>

    <!-- Actual optimized image via Nuxt Image -->
    <NuxtImg
      v-if="resolvedSrc"
      v-show="!isLoading && !hasError"
      ref="image"
      :src="resolvedSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :decoding="decoding"
      :sizes="sizes"
      :format="format"
      :quality="quality"
      :fit="fit"
      :placeholder="placeholderAttr"
      :class="imageClass"
      @load="handleLoad"
      @error="handleError"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';

const props = defineProps({
  // Image source - can be string or object with different sizes
  src: {
    type: [String, Object],
    required: true,
  },

  // Alternative text for accessibility
  alt: {
    type: String,
    required: true,
  },

  // Image dimensions for aspect ratio calculation
  width: {
    type: [Number, String],
    default: undefined,
  },
  height: {
    type: [Number, String],
    default: undefined,
  },

  // CSS classes
  containerClass: {
    type: String,
    default: 'relative overflow-hidden',
  },
  imageClass: {
    type: String,
    default: 'w-full h-full object-cover transition-opacity duration-300',
  },

  // Lazy loading options
  lazy: {
    type: Boolean,
    default: true,
  },
  rootMargin: {
    type: String,
    default: '50px',
  },
  threshold: {
    type: Number,
    default: 0.1,
  },

  // Loading behavior
  loading: {
    type: String,
    default: 'lazy',
    validator: value => ['lazy', 'eager'].includes(value),
  },
  decoding: {
    type: String,
    default: 'async',
    validator: value => ['sync', 'async', 'auto'].includes(value),
  },

  // Placeholder styling
  placeholderColor: {
    type: String,
    default: '',
  },
  showLoadingSpinner: {
    type: Boolean,
    default: false,
  },

  // Fallback image for errors
  fallbackSrc: {
    type: String,
    default: '',
  },

  // Nuxt image specific enhancements
  sizes: {
    type: String,
    default: '100vw',
  },
  format: {
    type: [String, Array],
    default: () => ['webp', 'auto'],
  },
  quality: {
    type: [Number, String],
    default: 80,
  },
  fit: {
    type: String,
    default: 'cover',
  },
  placeholder: {
    // true | 'blur' | 'empty' | base64 string
    type: [Boolean, String],
    default: 'blur',
  },

  /* Placeholder customization API */
  // Select behavior: auto (use placeholder prop), blur, empty, none, custom, color, shimmer
  placeholderMode: {
    type: String,
    default: 'auto',
    validator: v =>
      ['auto', 'blur', 'empty', 'none', 'custom', 'color', 'shimmer'].includes(
        v
      ),
  },
  // Provide custom base64 (data URI) or string for NuxtImg placeholder when placeholderMode = 'custom'
  customPlaceholder: {
    type: String,
    default: '',
  },
  // When using placeholderMode color, use this color (falls back to placeholderColor prop)
  solidPlaceholderColor: {
    type: String,
    default: '',
  },
  // Enable a CSS shimmer overlay while loading (independent of Nuxt image placeholder)
  shimmer: {
    type: Boolean,
    default: false,
  },
  // Optional alt text override for fallback image
  fallbackAlt: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['load', 'error', 'visible']);

// Reactive state
const imageContainer = ref(null);
const image = ref(null); // reference to NuxtImg component root element
const isLoading = ref(true);
const hasError = ref(false);
const isVisible = ref(false);
const observer = ref(null);
const fallbackActive = ref(false);

// Compute effective placeholder attribute based on mode
const placeholderAttr = computed(() => {
  if (props.placeholderMode === 'auto') return props.placeholder;
  if (props.placeholderMode === 'blur') return 'blur';
  if (props.placeholderMode === 'empty' || props.placeholderMode === 'none')
    return 'empty';
  if (props.placeholderMode === 'custom' && props.customPlaceholder)
    return props.customPlaceholder;
  if (props.placeholderMode === 'color') {
    // Nuxt Image doesn't support plain color placeholder directly; fall back to 'empty' and rely on container background
    return 'empty';
  }
  if (props.placeholderMode === 'shimmer') {
    // We'll render shimmer via CSS; keep image placeholder minimal
    return 'empty';
  }
  return props.placeholder;
});

// Computed properties
const baseSrc = computed(() => {
  if (typeof props.src === 'string') {
    return isVisible.value || !props.lazy ? props.src : '';
  }

  // Handle responsive images object
  if (typeof props.src === 'object' && props.src !== null) {
    const sizes = props.src;
    // Simple responsive logic - can be enhanced
    if (window.innerWidth < 640 && sizes.small) return sizes.small;
    if (window.innerWidth < 1024 && sizes.medium) return sizes.medium;
    return sizes.large || sizes.default || '';
  }

  return '';
});

// Resolved src accounts for fallback
const resolvedSrc = computed(() =>
  fallbackActive.value && props.fallbackSrc ? props.fallbackSrc : baseSrc.value
);

// Intersection Observer for lazy loading
const setupObserver = () => {
  if (!props.lazy || !imageContainer.value) return;

  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        emit('visible');
        observer.value?.disconnect();
      }
    },
    {
      rootMargin: props.rootMargin,
      threshold: props.threshold,
    }
  );

  observer.value.observe(imageContainer.value);
};

// Event handlers
const handleLoad = event => {
  isLoading.value = false;
  hasError.value = false;
  emit('load', event);
};

const handleError = event => {
  // Attempt fallback once
  if (props.fallbackSrc && !fallbackActive.value) {
    fallbackActive.value = true;
    isLoading.value = true; // treat fallback load as a new load
    return; // NuxtImg will re-render with fallback src
  }
  hasError.value = true;
  isLoading.value = false;
  emit('error', event);
};

// Lifecycle
onMounted(() => {
  if (props.lazy) {
    setupObserver();
  } else {
    isVisible.value = true;
  }
});

onUnmounted(() => {
  observer.value?.disconnect();
});

// Watch for src changes
watch(
  () => props.src,
  () => {
    isLoading.value = true;
    hasError.value = false;
  },
  { immediate: false }
);
</script>

<style scoped>
/* Ensure container maintains aspect ratio if width/height provided */
.aspect-ratio-container {
  position: relative;
}

.aspect-ratio-container::before {
  content: '';
  display: block;
  padding-top: calc(var(--aspect-ratio, 56.25%) * 1%);
}

.aspect-ratio-container > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
