<!-- src/components/EmailCaptureModal.vue -->
<template>
    <Teleport to="body">
        <div v-if="isVisible"
            class="fixed inset-0 bg-neutral-900 bg-opacity-70 z-modal flex items-center justify-center p-4"
            @click="closeOnBackdrop ? closeModal() : null">
            <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto relative animate-fade-in" @click.stop>
                <!-- Close button -->
                <button @click="closeModal" class="absolute top-3 right-3 text-neutral-500 hover:text-neutral-900"
                    aria-label="Close modal">
                    <i class="fas fa-times text-lg"></i>
                </button>

                <!-- Modal content -->
                <div class="p-6">
                    <div v-if="!isSubmitted">
                        <!-- Header -->
                        <div class="text-center mb-6">
                            <h3 class="text-2xl text-primary-600 font-bold">Unlock Your SEO Potential</h3>
                            <p class="text-neutral-700 mt-2">
                                Get instant access to our interactive SEO checklist with 100+ actionable optimization
                                tasks.
                            </p>
                        </div>

                        <!-- Form -->
                        <form @submit.prevent="submitForm">
                            <div class="mb-4">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" id="email" v-model="email" class="form-input"
                                    :class="{ 'border-error': emailError }" placeholder="your@email.com" required />
                                <p v-if="emailError" class="form-error mt-1">{{ emailError }}</p>
                            </div>

                            <div class="mb-4">
                                <label class="flex items-start gap-2 cursor-pointer text-sm text-neutral-700">
                                    <input type="checkbox" v-model="agreeToTerms" class="mt-1" required />
                                    <span>
                                        I agree to receive emails from Ottawa Web Masters. You can unsubscribe at any
                                        time.
                                        <span v-if="termsError" class="text-error font-medium"> (Required)</span>
                                    </span>
                                </label>
                            </div>

                            <button type="submit" class="btn-primary w-full py-3" :disabled="isSubmitting">
                                <span v-if="isSubmitting">
                                    <i class="fas fa-circle-notch fa-spin mr-2"></i>
                                    Submitting...
                                </span>
                                <span v-else>
                                    Get Instant Access
                                </span>
                            </button>
                        </form>
                    </div>

                    <!-- Success message -->
                    <div v-else class="text-center py-6">
                        <div class="text-success mb-4">
                            <i class="fas fa-check-circle text-5xl"></i>
                        </div>
                        <h3 class="text-2xl text-primary-600 font-bold mb-2">Thank You!</h3>
                        <p class="text-neutral-700 mb-6">
                            Your SEO checklist is being prepared. You'll be redirected in a moment.
                        </p>
                        <div class="flex justify-center">
                            <div class="w-full bg-gray-200 rounded-full h-2.5 max-w-xs">
                                <div class="bg-primary-600 h-2.5 rounded-full"
                                    :style="{ width: `${redirectProgress}%` }"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="bg-primary-50 p-4 rounded-b-lg text-center text-sm text-neutral-700">
                    Already have access? <router-link to="/seo-checklist" class="text-accent-600 font-medium">Visit the
                        SEO Checklist</router-link>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    delay: {
        type: Number,
        default: 20000 // 20 seconds default
    },
    closeOnBackdrop: {
        type: Boolean,
        default: true
    },
    redirectDelay: {
        type: Number,
        default: 2000 // 2 seconds redirect delay
    }
});

// State management
const isVisible = ref(false);
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const redirectProgress = ref(0);
const email = ref('');
const agreeToTerms = ref(false);
const emailError = ref('');
const termsError = ref(false);
let modalTimer = null;
let redirectTimer = null;
let progressInterval = null;

const router = useRouter();

// Show modal after delay
const initializeModalTimer = () => {
    // Check if modal has been shown before
    const hasSeenModal = localStorage.getItem('seo_modal_shown');

    if (!hasSeenModal) {
        modalTimer = setTimeout(() => {
            isVisible.value = true;
            trackEvent('modal_shown', { 'modal_type': 'seo_checklist_offer' });
        }, props.delay);
    }
};

// Track event helper - compatible with the provided analytics setup
const trackEvent = (eventName, eventParams) => {
    if (typeof window.trackEvent === 'function') {
        window.trackEvent(eventName, eventParams);
    } else {
        // Fallback if the global trackEvent isn't available
        console.log('Event tracked:', eventName, eventParams);
    }
};

// Close the modal
const closeModal = () => {
    isVisible.value = false;
    trackEvent('modal_closed', { 'modal_type': 'seo_checklist_offer' });

    // Set flag in localStorage to prevent showing again in this session
    localStorage.setItem('seo_modal_shown', 'true');
};

// Validate email format
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Handle form submission
const submitForm = async () => {
    // Reset errors
    emailError.value = '';
    termsError.value = false;

    // Validate email
    if (!email.value.trim()) {
        emailError.value = 'Email address is required';
        return;
    }

    if (!validateEmail(email.value)) {
        emailError.value = 'Please enter a valid email address';
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
        // Here you would typically send the email to your backend
        // For this example, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Track successful submission
        trackEvent('lead_capture', {
            'form_type': 'seo_checklist_modal',
            'source': 'timed_modal'
        });

        // Update state to show success message
        isSubmitting.value = false;
        isSubmitted.value = true;

        // Store email in localStorage for potential future use
        localStorage.setItem('user_email', email.value);

        // Set a permanent flag that user has subscribed
        localStorage.setItem('seo_modal_subscribed', 'true');

        // Start progress bar for redirect
        startRedirectProgress();

        // Redirect after delay
        redirectTimer = setTimeout(() => {
            router.push('/seo-checklist');
        }, props.redirectDelay);

    } catch (error) {
        console.error('Form submission error:', error);
        isSubmitting.value = false;
        emailError.value = 'Something went wrong. Please try again.';
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

// Keyboard event handler for Escape key
const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isVisible.value) {
        closeModal();
    }
};

// Cleanup function
const cleanup = () => {
    if (modalTimer) clearTimeout(modalTimer);
    if (redirectTimer) clearTimeout(redirectTimer);
    if (progressInterval) clearInterval(progressInterval);
    document.removeEventListener('keydown', handleKeyDown);
};

// Initialize on component mount
onMounted(() => {
    initializeModalTimer();
    document.addEventListener('keydown', handleKeyDown);
});

// Cleanup on component unmount
onBeforeUnmount(() => {
    cleanup();
});

// Watch for route changes and cleanup
watch(() => router.currentRoute.value, () => {
    cleanup();
}, { deep: true });

// expose methods for parent components
defineExpose({
    showModal: () => {
        isVisible.value = true;
    },
    closeModal
});
</script>