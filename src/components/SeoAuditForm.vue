<template>
  <section id="audit" class="py-16 bg-primary-600 text-white">
    <div class="container-site">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-white">Ready to Improve Your Online Presence?</h2>
        <p class="text-lg mb-8 text-primary-100">
          Discover how your website measures up against competitors and get actionable insights to boost your online
          visibility.
        </p>
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
          <h3 class="text-2xl font-bold text-primary-700 mb-4">Get Your Free SEO Audit</h3>
          <form class="space-y-4" @submit.prevent="submitForm">
            <div>
              <label for="audit-name" class="form-label">Your Name</label>
              <input id="audit-name" type="text" v-model="formData.name" class="form-input" placeholder="Full Name"
                required />
            </div>
            <div>
              <label for="audit-email" class="form-label">Email Address</label>
              <input id="audit-email" type="email" v-model="formData.email" class="form-input"
                placeholder="you@example.com" required />
            </div>
            <div>
              <label for="audit-website" class="form-label">Website URL</label>
              <input id="audit-website" type="url" v-model="formData.website" class="form-input"
                placeholder="https://yourwebsite.com" required />
            </div>
            <button type="submit" class="btn-primary w-full" :disabled="formState.submitting">
              {{ formState.submitting ? 'Submitting...' : 'Request Free SEO Audit' }}
            </button>
            <p v-if="formState.message && !formState.success" class="mt-4 text-sm text-red-600">
              {{ formState.message }}
            </p>
            <p class="text-xs text-neutral-600 text-center mt-4">
              We'll analyze your website and send you a detailed report within 2 business days.
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <Transition name="fade">
      <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-modal">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="closeModal"></div>

        <!-- Modal Content -->
        <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 relative z-10 animate-slide-up">
          <button @click="closeModal" class="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600">
            <span class="sr-only">Close</span>
            <i class="fas fa-times text-xl"></i>
          </button>

          <!-- Success Icon -->
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-check text-primary-600 text-3xl"></i>
          </div>

          <h3 class="text-2xl font-bold text-primary-700 text-center mb-2">Thank You!</h3>
          <p class="text-neutral-700 text-center mb-6">
            Your SEO audit request has been successfully submitted.
          </p>

          <!-- What's Next Section -->
          <div class="bg-primary-50 p-4 rounded-lg mb-6">
            <h4 class="font-semibold text-primary-700 mb-2">What Happens Next?</h4>
            <ul class="text-sm text-neutral-700 space-y-2">
              <li class="flex items-start">
                <i class="fas fa-clock text-accent-500 mt-1 mr-2"></i>
                <span>Our SEO experts will review your website within <strong>48 hours</strong></span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-file-alt text-accent-500 mt-1 mr-2"></i>
                <span>We'll prepare a detailed report with actionable recommendations</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-envelope text-accent-500 mt-1 mr-2"></i>
                <span>You'll receive the audit report via email at <strong>{{ formData.email }}</strong></span>
              </li>
            </ul>
          </div>

          <!-- CTA Button -->
          <button @click="closeModal" class="btn-primary w-full">
            Got It
          </button>

          <!-- Additional Info -->
          <p class="text-xs text-neutral-500 text-center mt-4">
            Have questions? Contact us at <a href="mailto:support@webmaster.com"
              class="text-accent-600 hover:underline">support@webmaster.com</a>
          </p>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  website: ''
});

const formState = reactive({
  submitting: false,
  message: '',
  success: false
});

const showSuccessModal = ref(false);

const submitForm = async () => {
  formState.submitting = true;
  formState.message = '';

  try {
    const response = await fetch('/php/handle-seo-form.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    formState.success = result.success;

    if (result.success) {
      // Show success modal instead of message
      showSuccessModal.value = true;

      // Track successful form submission
      window.trackEvent('form_submit', {
        form_type: 'seo_audit',
        page: 'seo_landing'
      });

      // We don't reset the form here because we want to keep the data visible in the background
      // It will be reset when the modal is closed
    } else {
      formState.message = result.message || 'An error occurred. Please try again.';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    formState.message = 'An error occurred. Please try again later.';
    formState.success = false;
  } finally {
    formState.submitting = false;
  }
};

const closeModal = () => {
  showSuccessModal.value = false;

  // Reset form after closing the modal
  formData.name = '';
  formData.email = '';
  formData.website = '';
};

// Add event listener to close modal with ESC key
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showSuccessModal.value) {
      closeModal();
    }
  });
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.4s ease-out forwards;
}
</style>