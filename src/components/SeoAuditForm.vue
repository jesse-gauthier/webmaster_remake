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
            <p v-if="formState.message" class="mt-4 text-sm"
              :class="formState.success ? 'text-green-600' : 'text-red-600'">
              {{ formState.message }}
            </p>
            <p class="text-xs text-neutral-600 text-center mt-4">
              We'll analyze your website and send you a detailed report within 2 business days.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

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

    formState.message = result.message;
    formState.success = result.success;

    // Reset form after successful submission
    if (result.success) {
      formData.name = '';
      formData.email = '';
      formData.website = '';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    formState.message = 'An error occurred. Please try again later.';
    formState.success = false;
  } finally {
    formState.submitting = false;
  }
};
</script>
