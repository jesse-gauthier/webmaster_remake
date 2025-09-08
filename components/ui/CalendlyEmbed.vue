<template>
  <div class="calendly-container">
    <iframe
      v-if="!showBadgeWidget"
      :src="calendlyLink"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
      class="calendly-iframe"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Props
const props = defineProps({
  calendlyLink: {
    type: String,
    required: true,
  },
  showBadgeWidget: {
    type: Boolean,
    default: false,
  },
});

// Watch for showBadgeWidget to initialize the badge widget if true
watch(
  () => props.showBadgeWidget,
  (newVal) => {
    if (newVal) {
      Calendly.initBadgeWidget({
        url: props.calendlyLink,
        text: "Schedule time with me",
        color: "#0069ff",
        textColor: "#ffffff",
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.calendly-container {
  margin: 2rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.calendly-iframe {
  display: block;
}
</style>
