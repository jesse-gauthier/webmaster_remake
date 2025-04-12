<template>
  <Teleport to="body">
    <!-- Modal backdrop -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4 transition-opacity duration-300 mt-9"
      :class="{ 'opacity-0': !showContent, 'opacity-100': showContent }"
      @click="closeModal"
      aria-modal="true"
      role="dialog"
    >
      <!-- Modal content -->
      <div
        class="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[85%] overflow-auto transform transition-all duration-300"
        :class="{
          'opacity-0 scale-95': !showContent,
          'opacity-100 scale-100': showContent,
        }"
        @click.stop
      >
        <!-- Modal header -->
        <div v-if="!isExpanding" class="bg-primary p-6 relative">
          <h2 class="text-2xl font-bold text-white">
            Have a briliant application idea, but limited budget?
          </h2>
          <p class="text-primary-light mt-1">
            This program is for you. For $1500 upfront we will build your idea
            from ground up. After launch we perform updates, bug fixes,
            implement new feature, and general maintaince.
            <strong> At no additional cost. </strong>
          </p>
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-white hover:text-primary-light transition-colors"
            aria-label="Close modal"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
          <!-- This should trigger a google anayltics event -->
          <button @click="handleViewDetails" class="btn-primary">
            View Details
          </button>
        </div>

        <!-- Modal body -->
        <div v-if="isExpanding" class="p-6">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-2/3">
              <h3 class="text-xl font-semibold text-primary mb-3">
                How Our Equity Model Works
              </h3>
              <p class="text-neutral-text mb-4">
                We build high-quality web applications with an innovative equity
                partnership model that aligns our success with yours.
              </p>

              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                  >
                    <i class="fas fa-check text-sm"></i>
                  </div>
                  <span class="ml-3 text-neutral-text"
                    >Pay just $1,500 upfront vs. $15,000-$50,000</span
                  >
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                  >
                    <i class="fas fa-check text-sm"></i>
                  </div>
                  <span class="ml-3 text-neutral-text"
                    >We take a small percentage of revenue once profitable</span
                  >
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                  >
                    <i class="fas fa-check text-sm"></i>
                  </div>
                  <span class="ml-3 text-neutral-text"
                    >Ongoing support and maintenance included</span
                  >
                </li>
                <li class="flex items-start">
                  <div
                    class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                  >
                    <i class="fas fa-check text-sm"></i>
                  </div>
                  <span class="ml-3 text-neutral-text"
                    >Strategic partnership for long-term growth</span
                  >
                </li>
              </ul>

              <div class="bg-primary-light p-4 rounded-lg mb-6">
                <p class="text-primary italic">
                  "The equity model was perfect for our startup. We got a
                  high-quality application without the upfront costs, and the
                  team truly became invested in our success."
                </p>
                <div class="mt-2 font-medium text-primary-dark">
                  - Sarah Johnson, FinTech Innovators
                </div>
              </div>
            </div>

            <div class="md:w-1/3 bg-neutral-50 p-4 rounded-lg">
              <div class="mb-4">
                <span class="text-3xl font-bold text-primary">$1,500</span>
                <span class="text-neutral-text"> upfront</span>
                <p class="text-sm text-neutral-text mt-1">
                  + revenue share percentage
                </p>
              </div>

              <p class="text-sm text-neutral-text mb-4">
                Our equity partnership includes:
              </p>

              <ul class="text-sm space-y-2 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check text-success text-sm mt-1"></i>
                  <span class="ml-2 text-neutral-text"
                    >Full application development</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success text-sm mt-1"></i>
                  <span class="ml-2 text-neutral-text">2-5% revenue share</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success text-sm mt-1"></i>
                  <span class="ml-2 text-neutral-text"
                    >Ongoing maintenance</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success text-sm mt-1"></i>
                  <span class="ml-2 text-neutral-text"
                    >Feature enhancements</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div
          v-if="isExpanding"
          class="bg-neutral-50 p-6 flex flex-col sm:flex-row gap-3 justify-end border-t border-neutral-200"
        >
          <button
            @click="closeModal"
            class="btn-outline"
            aria-label="Close this modal"
          >
            Close
          </button>
          <router-link
            to="/web-applications"
            @click="closeModalAndScroll"
            class="btn-primary"
            aria-label="Get started with equity model"
          >
            <i class="fas fa-handshake mr-2"></i> Start the Conversation
          </router-link>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch, inject } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);
const showContent = ref(false);
const isExpanding = ref(false);
const analytics = inject("analytics");

watch(
  () => props.isOpen,
  async (newVal) => {
    if (newVal) {
      // When opening, first mount the component, then animate in
      await nextTick();
      showContent.value = true;

      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      // When closing, first animate out, then unmount
      showContent.value = false;

      // Re-enable scrolling
      document.body.style.overflow = "";
    }
  },
  { immediate: true }
);

// Handle ESC key to close the modal
const handleKeyDown = (e) => {
  if (e.key === "Escape" && props.isOpen) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeyDown);
  // Ensure scrolling is re-enabled when component is destroyed
  document.body.style.overflow = "";
});

const closeModal = () => {
  showContent.value = false;
  // Allow time for the closing animation before emitting the close event
  setTimeout(() => {
    emit("close");
  }, 300);
};

const closeModalAndScroll = () => {
  closeModal();
  // Allow time for modal to close, then scroll to contact section
  setTimeout(() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 350);
};

const handleViewDetails = () => {
  isExpanding.value = !isExpanding.value;

  // Track the view details click event
  if (analytics) {
    analytics.trackEvent("Modal", "view_details_click", "WebApp Modal Details");
  }
};
</script>

<style scoped>
/* Additional modal styling */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
