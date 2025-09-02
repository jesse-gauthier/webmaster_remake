<!-- /components/ContactForm.vue -->

<script setup>
import { ref, reactive, computed, inject, onMounted } from 'vue';
import {
  sanitizeInput,
  isValidEmail,
  isValidPhone,
  checkRateLimit,
  generateCSRFToken,
} from '@/utils/security';

// Import analytics from our plugin
const gtag = inject('gtag', null);
const analytics = inject('analytics', null);

// Track form views
onMounted(() => {
  if (analytics) {
    analytics.trackEvent('Form', 'view', 'Contact Form');
  }
});

// Form state
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
});

// Security measures
const csrfToken = ref('');
const honeypot = ref(''); // Hidden field for bot detection
// Generate CSRF token on mount
onMounted(() => {
  csrfToken.value = generateCSRFToken();
});

// Validation state
const formErrors = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
});

// Submission state
const isSubmitting = ref(false);
const submissionSuccess = ref(false);
const submissionError = ref(false);

// Allow external override of service list (e.g., specialized landing pages)
const props = defineProps({
  services: { type: Array, required: false, default: null },
});

// Default service options
const defaultServiceOptions = [
  { value: 'wordpress_development', label: 'WordPress Development' },
  { value: 'wordpress_maintenance', label: 'WordPress Maintenance' },
  { value: 'shopify_development', label: 'Shopify Development' },
  { value: 'shopify_maintenance', label: 'Shopify Maintenance' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' },
];

// Use external services if provided (map simple strings to {value,label})
const serviceOptions =
  props.services && props.services.length
    ? props.services.map(s =>
        typeof s === 'string'
          ? { value: s.toLowerCase().replace(/\s+/g, '_'), label: s }
          : s
      )
    : defaultServiceOptions;

// Budget options
const budgetOptions = [
  { value: 'under_1000', label: 'Under $1,000' },
  { value: '1000_5000', label: '$1,000 - $5,000' },
  { value: '5000_10000', label: '$5,000 - $10,000' },
  { value: '10000_25000', label: '$10,000 - $25,000' },
  { value: 'over_25000', label: 'Over $25,000' },
];

// Validation functions
const validateName = () => {
  formData.name = sanitizeInput(formData.name);
  formErrors.name = formData.name.trim() ? '' : 'Name is required';
};
const validateEmail = () => {
  formData.email = sanitizeInput(formData.email);
  formErrors.email = isValidEmail(formData.email)
    ? ''
    : 'Please enter a valid email address';
};
const validatePhone = () => {
  formData.phone = sanitizeInput(formData.phone);
  formErrors.phone = isValidPhone(formData.phone)
    ? ''
    : 'Please enter a valid phone number';
};
const validateService = () => {
  formErrors.service = formData.service ? '' : 'Please select a service';
};
const validateBudget = () => {
  formErrors.budget = formData.budget ? '' : 'Please select a budget range';
};
const validateMessage = () => {
  formData.message = sanitizeInput(formData.message);
  formErrors.message =
    formData.message.trim().length >= 10
      ? ''
      : 'Message must be at least 10 characters long';
};

const validateField = field => {
  switch (field) {
    case 'name':
      validateName();
      break;
    case 'email':
      validateEmail();
      break;
    case 'phone':
      validatePhone();
      break;
    case 'service':
      validateService();
      break;
    case 'budget':
      validateBudget();
      break;
    case 'message':
      validateMessage();
      break;
  }
};

// Validate entire form
const isFormValid = computed(() => {
  validateField('name');
  validateField('email');
  validateField('phone');
  validateField('service');
  validateField('budget');
  validateField('message');

  return !Object.values(formErrors).some(error => error !== '');
});

// Form submission handler
const submitForm = async () => {
  // Check for bot honeypot
  if (honeypot.value) {
    console.warn('Bot detected via honeypot');
    return;
  }

  // Rate limiting check
  if (!checkRateLimit('contact_form', 3, 300000)) {
    // 3 attempts per 5 minutes
    submissionError.value =
      'Too many submission attempts. Please wait before trying again.';
    return;
  }

  // Validate form
  if (!isFormValid.value) {
    return;
  }

  // Set submitting state
  isSubmitting.value = true;
  submissionSuccess.value = false;
  submissionError.value = false;

  try {
    // Prepare secure form data with CSRF token
    const secureFormData = {
      ...formData,
      csrf_token: csrfToken.value,
      timestamp: Date.now(),
      user_agent: navigator.userAgent.substring(0, 200), // Limit UA string length
    };

    // Submit to API endpoint
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest', // Helps prevent CSRF
      },
      body: JSON.stringify({
        email: formData.email,
        message: `
Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${serviceOptions.find(s => s.value === formData.service)?.label || formData.service}
Budget: ${budgetOptions.find(b => b.value === formData.budget)?.label || formData.budget}

Message:
${formData.message}

Additional Details:
- CSRF Token: ${csrfToken.value}
- Timestamp: ${new Date().toISOString()}
- User Agent: ${navigator.userAgent.substring(0, 200)}
        `.trim(),
      }),
    });

    if (response.ok) {
      // Success handling
      submissionSuccess.value = true;

      // Enhanced Analytics tracking using our plugin
      try {
        // Generate a transaction ID using timestamp
        const transactionId = `CONTACT_${Date.now()}`;

        // Determine estimated value based on budget selection
        let estimatedValue = 0;
        if (formData.budget === 'under_1000') estimatedValue = 1000;
        else if (formData.budget === '1000_5000') estimatedValue = 3000;
        else if (formData.budget === '5000_10000') estimatedValue = 7500;
        else if (formData.budget === '10000_25000') estimatedValue = 17500;
        else if (formData.budget === 'over_25000') estimatedValue = 30000;

        // Track the lead conversion using our analytics methods
        if (analytics) {
          // Track Google Ads conversion
          analytics.trackConversion(
            'AW-16921221005',
            'xuxtCL2JpKoaEI2v1YQ_',
            estimatedValue
          );

          // Track the lead event with detailed parameters
          analytics.trackEvent(
            'Lead',
            'generate_lead',
            formData.service,
            estimatedValue
          );

          // Send more detailed custom event
          gtag('event', 'generate_lead', {
            currency: 'CAD',
            value: estimatedValue,
            transaction_id: transactionId,
            service_type: formData.service,
            budget_range: formData.budget,
            lead_source: 'contact_form',
            user_data: {
              email_address: formData.email,
              phone_number: formData.phone,
            },
          });
        }
      } catch (analyticsError) {
        console.error('Analytics tracking error:', analyticsError);
        // Non-blocking - continue with form success flow
      }

      // Reset form
      Object.keys(formData).forEach(key => {
        formData[key] = '';
      });
    } else {
      // Error handling
      submissionError.value = true;
    }
  } catch (error) {
    console.error('Submission error:', error);
    submissionError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Helper function to track field interactions
const trackFieldInteraction = fieldName => {
  if (analytics) {
    analytics.trackEvent('Form', 'field_interaction', fieldName);
  }
};

// Focus state for selects (since peer placeholder trick not available)
const focusState = reactive({ service: false, budget: false });
</script>

<template>
  <!-- Updated Contact Section with gradient + decorative elements for cohesion with hero -->
  <section
    id="contact-form"
    class="relative py-24 overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900"
  >
    <div class="container-site relative z-10 px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch"
      >
        <!-- Info Panel -->
        <div
          class="relative p-8 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl flex flex-col justify-center overflow-hidden"
        >
          <div class="relative">
            <h2
              class="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight"
            >
              Let's Talk Digital
            </h2>
            <p class="mb-6 text-primary-100 text-lg leading-relaxed">
              Have a project in mind? Tell us about it and we'll reply within
              <span class="font-semibold text-accent-300">24 hours</span> with
              insights and next steps.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-4">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206A8.959 8.959 0 0112 21"
                    />
                  </svg>
                </span>
                <div class="text-primary-100 text-sm">
                  <div
                    class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                  >
                    Email
                  </div>
                  <a
                    href="mailto:Contact@ottawawebmasters.ca"
                    class="text-white font-medium hover:text-accent-200"
                    >Contact@ottawawebmasters.ca</a
                  >
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 17h9m0 0a3 3 0 100 6 3 3 0 000-6zm0 0H10M6 5h15l-1.68 6H8.52"
                    />
                  </svg>
                </span>
                <div class="text-primary-100 text-sm">
                  <div
                    class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                  >
                    Projects
                  </div>
                  <p class="text-white font-medium">100+ Websites Delivered</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div class="text-white text-sm">
                  <div
                    class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                  >
                    Satisfaction
                  </div>
                  <p class="text-white font-medium">98% Client Happiness</p>
                </div>
              </li>
            </ul>
            <div
              class="hidden md:block space-y-4 text-white text-sm leading-relaxed"
            >
              <p class="text-white">
                We're a dedicated Ottawa-based web team helping small businesses
                grow through performance-driven design, development, and
                optimization.
              </p>
              <p class="text-white">
                Our process blends strategy, conversion insights, and fast
                iterative builds to deliver sites that both look stunning and
                drive measurable results.
              </p>
              <p class="text-accent-200 font-medium">
                Ready when you are. Let's build something impactful.
              </p>
            </div>
          </div>
        </div>

        <!-- Form Card -->
        <div class="relative">
          <div
            class="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-white shadow-xl ring-1 ring-neutral-200/60 overflow-hidden"
          >
            <div
              class="absolute -inset-px rounded-3xl pointer-events-none border border-transparent bg-gradient-to-tr from-accent-500/10 via-transparent to-primary-500/10"
            ></div>
            <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
              <div role="group" aria-labelledby="personal-info-heading">
                <h3 id="personal-info-heading" class="sr-only">
                  Personal Information
                </h3>

                <div class="mb-4 relative h-20">
                  <input
                    id="name"
                    v-model="formData.name"
                    @blur="validateField('name')"
                    @focus="trackFieldInteraction('name')"
                    type="text"
                    class="peer w-full h-14 rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none transition-colors duration-200"
                    :class="
                      formErrors.name
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                        : ''
                    "
                    placeholder=" "
                    aria-required="true"
                    aria-invalid="formErrors.name ? true : false"
                    aria-describedby="name-error"
                    required
                  />
                  <label
                    for="name"
                    class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                    >Full Name</label
                  >
                  <p
                    v-if="formErrors.name"
                    class="mt-1 text-sm text-red-500"
                    id="name-error"
                    aria-live="polite"
                  >
                    {{ formErrors.name }}
                  </p>
                </div>

                <!-- Honeypot field for bot detection - hidden from users -->
                <div
                  style="
                    position: absolute;
                    left: -9999px;
                    opacity: 0;
                    pointer-events: none;
                  "
                  aria-hidden="true"
                >
                  <label for="website-field">Leave this field empty</label>
                  <input
                    id="website-field"
                    v-model="honeypot"
                    type="text"
                    name="website"
                    tabindex="-1"
                    autocomplete="new-password"
                  />
                </div>

                <div class="mb-4 relative">
                  <input
                    id="email"
                    v-model="formData.email"
                    @blur="validateField('email')"
                    @focus="trackFieldInteraction('email')"
                    type="email"
                    class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none"
                    :class="
                      formErrors.email
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                        : ''
                    "
                    placeholder=" "
                    aria-required="true"
                    aria-invalid="formErrors.email ? true : false"
                    aria-describedby="email-error"
                    required
                  />
                  <label
                    for="email"
                    class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                    >Email Address</label
                  >
                  <p
                    v-if="formErrors.email"
                    class="mt-1 text-sm text-red-500"
                    id="email-error"
                    aria-live="polite"
                  >
                    {{ formErrors.email }}
                  </p>
                </div>

                <div class="mb-4 relative">
                  <input
                    id="phone"
                    v-model="formData.phone"
                    @blur="validateField('phone')"
                    @focus="trackFieldInteraction('phone')"
                    type="tel"
                    class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none"
                    :class="
                      formErrors.phone
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                        : ''
                    "
                    placeholder=" "
                    aria-required="true"
                    aria-invalid="formErrors.phone ? true : false"
                    aria-describedby="phone-error"
                    required
                  />
                  <label
                    for="phone"
                    class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                    >Phone Number</label
                  >
                  <p
                    v-if="formErrors.phone"
                    class="mt-1 text-sm text-red-500"
                    id="phone-error"
                    aria-live="polite"
                  >
                    {{ formErrors.phone }}
                  </p>
                </div>
              </div>

              <div role="group" aria-labelledby="project-info-heading">
                <h3 id="project-info-heading" class="sr-only">
                  Project Information
                </h3>

                <div class="mb-4 relative">
                  <select
                    id="service"
                    v-model="formData.service"
                    @blur="
                      validateField('service');
                      focusState.service = false;
                    "
                    @focus="
                      trackFieldInteraction('service');
                      focusState.service = true;
                    "
                    class="w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 p-3 text-sm md:text-base text-neutral-800 shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none appearance-none pr-10"
                    :class="
                      formErrors.service
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                        : ''
                    "
                    aria-required="true"
                    aria-invalid="formErrors.service ? true : false"
                    aria-describedby="service-error"
                    required
                  >
                    <option value="" disabled>Select a Service</option>
                    <option
                      v-for="option in serviceOptions"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                  <span
                    class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <p
                    v-if="formErrors.service"
                    class="mt-1 text-sm text-red-500"
                    id="service-error"
                    aria-live="polite"
                  >
                    {{ formErrors.service }}
                  </p>
                </div>

                <div class="mb-4 relative">
                  <select
                    id="budget"
                    v-model="formData.budget"
                    @blur="
                      validateField('budget');
                      focusState.budget = false;
                    "
                    @focus="
                      trackFieldInteraction('budget');
                      focusState.budget = true;
                    "
                    class="w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none appearance-none pr-10"
                    :class="
                      formErrors.budget
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                        : ''
                    "
                    aria-required="true"
                    aria-invalid="formErrors.budget ? true : false"
                    aria-describedby="budget-error"
                    required
                  >
                    <option value="" disabled>Select Budget Range</option>
                    <option
                      v-for="option in budgetOptions"
                      :key="option.value"
                      :value="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>

                  <span
                    class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-neutral-400"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <p
                    v-if="formErrors.budget"
                    class="mt-1 text-sm text-red-500"
                    id="budget-error"
                    aria-live="polite"
                  >
                    {{ formErrors.budget }}
                  </p>
                </div>

                <div class="mb-6 relative">
                  <textarea
                    id="message"
                    v-model="formData.message"
                    @blur="validateField('message')"
                    @focus="trackFieldInteraction('message')"
                    class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none min-h-[140px] resize-y"
                    :class="
                      formErrors.message
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                        : ''
                    "
                    placeholder=" "
                    aria-required="true"
                    aria-invalid="formErrors.message ? true : false"
                    aria-describedby="message-error"
                    required
                  ></textarea>
                  <label
                    for="message"
                    class="pointer-events-none absolute left-4 top-6 text-neutral-500 text-sm origin-left peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                    >Project Details</label
                  >
                  <p
                    v-if="formErrors.message"
                    class="mt-1 text-sm text-red-500"
                    id="message-error"
                    aria-live="polite"
                  >
                    {{ formErrors.message }}
                  </p>
                </div>
              </div>

              <!-- Submission Alerts -->
              <div
                v-if="submissionSuccess"
                class="alert alert-success mb-4"
                role="status"
                aria-live="polite"
              >
                <span class="sr-only">Success:</span>
                Thank you! We've received your message and will contact you
                soon.
              </div>
              <div
                v-if="submissionError"
                class="alert alert-error mb-4"
                role="alert"
                aria-live="assertive"
              >
                <span class="sr-only">Error:</span>
                Oops! There was an error submitting the form. Please try again
                later.
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="relative w-full inline-flex items-center justify-center gap-2 font-semibold tracking-wide text-white rounded-xl px-6 py-4 bg-gradient-to-r from-accent-500 via-accent-600 to-primary-600 hover:from-accent-400 hover:via-accent-500 hover:to-primary-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-400/40 shadow-lg shadow-accent-900/20 disabled:opacity-60 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
                aria-busy="isSubmitting"
                @click="
                  analytics &&
                  analytics.trackEvent('Form', 'submit_attempt', 'Contact Form')
                "
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center"
                  aria-hidden="true"
                >
                  <svg
                    class="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
                <span v-else class="flex items-center"
                  >Send Message
                  <svg
                    class="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span class="sr-only">{{
                  isSubmitting ? 'Submitting form...' : 'Submit contact form'
                }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
