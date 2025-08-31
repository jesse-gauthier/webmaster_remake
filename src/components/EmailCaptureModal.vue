<!-- src/components/EmailCaptureModal.vue -->
<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-neutral-900 bg-opacity-70 z-modal flex items-center justify-center p-4"
      @click="closeOnBackdrop ? closeModal() : null"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto relative animate-fade-in"
        @click.stop
      >
        <!-- Close button -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          aria-label="Close modal"
          ref="closeButton"
        >
          <i class="fas fa-times text-lg" aria-hidden="true"></i>
        </button>

        <!-- Modal content -->
        <div class="p-6">
          <div v-if="!isSubmitted">
            <!-- Header -->
            <div class="text-center mb-6">
              <h2 id="modal-title" class="text-2xl text-primary-600 font-bold">
                Unlock Your SEO Potential
              </h2>
              <p id="modal-description" class="text-neutral-700 mt-2">
                Get instant access to our interactive SEO checklist with 100+
                actionable optimization tasks.
              </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" novalidate>
              <div class="mb-4">
                <label for="modal-email" class="form-label" id="email-label"
                  >Email Address</label
                >
                <input
                  type="email"
                  id="modal-email"
                  v-model="email"
                  class="form-input"
                  :class="{ 'border-error': emailError }"
                  placeholder="your@email.com"
                  aria-required="true"
                  aria-invalid="emailError ? true : false"
                  aria-describedby="email-error"
                  required
                />
                <p
                  v-if="emailError"
                  class="form-error mt-1"
                  id="email-error"
                  aria-live="assertive"
                >
                  {{ emailError }}
                </p>
              </div>

              <div class="mb-4">
                <label
                  class="flex items-start gap-2 cursor-pointer text-sm text-neutral-700"
                >
                  <input
                    type="checkbox"
                    id="modal-terms"
                    v-model="agreeToTerms"
                    class="mt-1"
                    aria-required="true"
                    aria-invalid="termsError ? true : false"
                    aria-describedby="terms-error"
                    required
                  />
                  <span id="terms-label">
                    I agree to receive emails from Ottawa Web Masters. You can
                    unsubscribe at any time.
                    <span
                      v-if="termsError"
                      class="text-error font-medium"
                      id="terms-error"
                      aria-live="assertive"
                    >
                      (Required)
                    </span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                class="btn-primary w-full py-3"
                :disabled="isSubmitting"
                aria-busy="isSubmitting"
              >
                <span v-if="isSubmitting" aria-hidden="true">
                  <i class="fas fa-circle-notch fa-spin mr-2"></i>
                  Submitting...
                </span>
                <span v-else> Get Instant Access </span>
                <span class="sr-only">{{
                  isSubmitting
                    ? "Submitting form..."
                    : "Submit email to get SEO checklist"
                }}</span>
              </button>
            </form>
          </div>

          <!-- Success message -->
          <div v-else class="text-center py-6" aria-live="polite">
            <div class="text-success mb-4" aria-hidden="true">
              <i class="fas fa-check-circle text-5xl"></i>
            </div>
            <h2
              id="success-title"
              class="text-2xl text-primary-600 font-bold mb-2"
            >
              Thank You!
            </h2>
            <p id="success-message" class="text-neutral-700 mb-6">
              Your SEO checklist is being prepared. You'll be redirected in a
              moment.
            </p>
            <div class="flex justify-center" aria-hidden="true">
              <div class="w-full bg-gray-200 rounded-full h-2.5 max-w-xs">
                <div
                  class="bg-primary-600 h-2.5 rounded-full"
                  :style="{ width: `${redirectProgress}%` }"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :aria-valuenow="redirectProgress"
                ></div>
              </div>
            </div>
            <div class="sr-only" aria-live="polite">
              Redirecting in
              {{
                Math.ceil(
                  (100 - redirectProgress) /
                    (100 / (props.redirectDelay / 1000))
                )
              }}
              seconds
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div
          class="bg-primary-50 p-4 rounded-b-lg text-center text-sm text-neutral-700"
        >
          Already have access?
          <router-link
            to="/seo-checklist"
            class="text-accent-600 font-medium focus:outline-none focus:underline focus:text-accent-700"
          >
            Visit the SEO Checklist
          </router-link>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  delay: {
    type: Number,
    default: 20000, // 20 seconds default
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  redirectDelay: {
    type: Number,
    default: 2000, // 2 seconds redirect delay
  },
});

// State management
const isVisible = ref(false);
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const redirectProgress = ref(0);
const email = ref("");
const agreeToTerms = ref(false);
const emailError = ref("");
const termsError = ref(false);
let modalTimer = null;
let redirectTimer = null;
let progressInterval = null;

const router = useRouter();

// Show modal after delay
const initializeModalTimer = () => {
  // Check if modal has been shown before
  const hasSeenModal = localStorage.getItem("seo_modal_shown");

  if (!hasSeenModal) {
    modalTimer = setTimeout(() => {
      showModal();
    }, props.delay);
  }
};

// Show modal with proper focus management
const showModal = () => {
  // Save currently focused element to restore later
  previouslyFocusedElement = document.activeElement;

  // Show the modal
  isVisible.value = true;
  trackEvent("modal_shown", { modal_type: "seo_checklist_offer" });

  // Focus the close button after the modal is visible
  // Using nextTick to ensure the DOM has updated
  setTimeout(() => {
    const closeButton = document.querySelector(
      'button[aria-label="Close modal"]'
    );
    if (closeButton) {
      closeButton.focus();
    }
  }, 50);
};

// Track event helper - compatible with the provided analytics setup
const trackEvent = (eventName, eventParams) => {
  if (typeof window.trackEvent === "function") {
    window.trackEvent(eventName, eventParams);
  } else {
    // Fallback if the global trackEvent isn't available
    console.log("Event tracked:", eventName, eventParams);
  }
};

// Close the modal
const closeModal = () => {
  isVisible.value = false;
  trackEvent("modal_closed", { modal_type: "seo_checklist_offer" });

  // Set flag in localStorage to prevent showing again in this session
  localStorage.setItem("seo_modal_shown", "true");

  // Restore focus to the element that was focused before the modal opened
  if (
    previouslyFocusedElement &&
    typeof previouslyFocusedElement.focus === "function"
  ) {
    // Small delay to ensure DOM updates before focus is moved
    setTimeout(() => {
      previouslyFocusedElement.focus();
    }, 50);
  }
};

// Validate email format
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Handle form submission
const submitForm = async () => {
  // Reset errors
  emailError.value = "";
  termsError.value = false;

  // Validate email
  if (!email.value.trim()) {
    emailError.value = "Email address is required";
    return;
  }

  if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  // Validate terms agreement
  if (!agreeToTerms.value) {
    termsError.value = true;
    return;
  }

  // Set submitting state
  isSubmitting.value = true;

  try {
    // Send email to API endpoint
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        message: `
SEO Checklist Subscription

Email: ${email.value}

User has requested access to the SEO checklist and agreed to receive marketing emails.
        `.trim()
      }),
    });

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Subscription failed');
    }

    // Track successful submission
    trackEvent("lead_capture", {
      form_type: "seo_checklist_modal",
      source: "timed_modal",
    });

    // Update state to show success message
    isSubmitting.value = false;
    isSubmitted.value = true;

    // Store email in localStorage for potential future use
    localStorage.setItem("user_email", email.value);

    // Set a permanent flag that user has subscribed
    localStorage.setItem("seo_modal_subscribed", "true");

    // Start progress bar for redirect
    startRedirectProgress();

    // Redirect after delay
    redirectTimer = setTimeout(() => {
      router.push("/seo-checklist");
    }, props.redirectDelay);
  } catch (error) {
    console.error("Form submission error:", error);
    isSubmitting.value = false;
    emailError.value = "Something went wrong. Please try again.";
  }
};

// Progress bar animation for redirect
const startRedirectProgress = () => {
  const increment = 100 / (props.redirectDelay / 100); // Update every 100ms

  progressInterval = setInterval(() => {
    redirectProgress.value += increment;

    if (redirectProgress.value >= 100) {
      clearInterval(progressInterval);
      redirectProgress.value = 100;
    }
  }, 100);
};

// Keyboard event handlers
const handleKeyDown = (event) => {
  if (!isVisible.value) return;

  // Close on Escape key
  if (event.key === "Escape") {
    closeModal();
    return;
  }

  // Trap focus within modal with Tab key
  if (event.key === "Tab") {
    trapFocus(event);
  }
};

// Focus trap implementation
const trapFocus = (event) => {
  const modal = document.querySelector(".animate-fade-in");
  if (!modal) return;

  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length === 0) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // If shift+tab on first element, move to last element
  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }
  // If tab on last element, move to first element
  else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
};

// Store the element that had focus before modal opened
let previouslyFocusedElement = null;

// Cleanup function
const cleanup = () => {
  if (modalTimer) clearTimeout(modalTimer);
  if (redirectTimer) clearTimeout(redirectTimer);
  if (progressInterval) clearInterval(progressInterval);
  document.removeEventListener("keydown", handleKeyDown);
};

// Initialize on component mount
onMounted(() => {
  initializeModalTimer();
  document.addEventListener("keydown", handleKeyDown);
});

// Cleanup on component unmount
onBeforeUnmount(() => {
  cleanup();
});

// Watch for route changes and cleanup
watch(
  () => router.currentRoute.value,
  () => {
    cleanup();
  },
  { deep: true }
);

// expose methods for parent components
defineExpose({
  showModal: () => {
    showModal(); // Use the enhanced showModal function with focus management
  },
  closeModal,
});
</script>
