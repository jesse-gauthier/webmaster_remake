<!-- /components/forms/AccessibilityAuditForm.vue -->

<script setup>
import { ref, reactive, computed, inject, onMounted } from 'vue';
import {
  sanitizeInput,
  isValidEmail,
  checkRateLimit,
  generateCSRFToken,
} from '@/utils/security';

// Import analytics from our plugin
const gtag = inject('gtag', null);
const analytics = inject('analytics', null);

// Track form views
onMounted(() => {
  if (analytics) {
    analytics.trackEvent('Form', 'view', 'Accessibility Audit Form');
  }
});

// Form state
const formData = reactive({
  firstName: '',
  companyName: '',
  website: '',
  email: '',
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
  firstName: '',
  companyName: '',
  website: '',
  email: '',
});

// Submission state
const isSubmitting = ref(false);
const submissionSuccess = ref(false);
const submissionError = ref(false);

// Validation functions
const validateFirstName = () => {
  formData.firstName = sanitizeInput(formData.firstName);
  formErrors.firstName = formData.firstName.trim()
    ? ''
    : 'First name is required';
};

const validateCompanyName = () => {
  formData.companyName = sanitizeInput(formData.companyName);
  formErrors.companyName = formData.companyName.trim()
    ? ''
    : 'Company name is required';
};

const validateWebsite = () => {
  formData.website = sanitizeInput(formData.website);
  if (!formData.website.trim()) {
    formErrors.website = 'Website URL is required';
    return;
  }

  // Basic URL validation
  const urlPattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (!urlPattern.test(formData.website.trim())) {
    formErrors.website = 'Please enter a valid website URL';
  } else {
    formErrors.website = '';
  }
};

const validateEmail = () => {
  formData.email = sanitizeInput(formData.email);
  formErrors.email = isValidEmail(formData.email)
    ? ''
    : 'Please enter a valid email address';
};

const validateField = field => {
  switch (field) {
    case 'firstName':
      validateFirstName();
      break;
    case 'companyName':
      validateCompanyName();
      break;
    case 'website':
      validateWebsite();
      break;
    case 'email':
      validateEmail();
      break;
  }
};

// Validate entire form
const isFormValid = computed(() => {
  validateField('firstName');
  validateField('companyName');
  validateField('website');
  validateField('email');

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
  if (!checkRateLimit('accessibility_audit_form', 3, 300000)) {
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
    // Get landing page tracking data if available
    const landingData = JSON.parse(
      sessionStorage.getItem('accessibilityLandingData') || '{}'
    );

    // Prepare secure form data with CSRF token and landing page data
    const secureFormData = {
      ...formData,
      csrf_token: csrfToken.value,
      timestamp: Date.now(),
      user_agent: navigator.userAgent.substring(0, 200),
      form_type: 'accessibility_audit',
      landing_data: landingData,
    };

    // Submit to API endpoint
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify({
        email: formData.email,
        message: `
Free Accessibility Audit Request

First Name: ${formData.firstName}
Company: ${formData.companyName}
Website: ${formData.website}
Email: ${formData.email}

Form Type: Accessibility Audit Request
Landing Page Data:
- UTM Source: ${landingData.utmSource || 'none'}
- UTM Medium: ${landingData.utmMedium || 'none'}
- UTM Campaign: ${landingData.utmCampaign || 'none'}
- Traffic Source: ${landingData.referrer || 'direct'}
- Session ID: ${landingData.sessionId || 'unknown'}

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

      // Enhanced Analytics tracking
      try {
        // Generate a transaction ID using timestamp
        const transactionId = `ACCESSIBILITY_AUDIT_${Date.now()}`;

        // Track the lead conversion using our analytics methods
        if (analytics) {
          // Track Google Ads conversion (high value for accessibility audits)
          analytics.trackConversion(
            'AW-16921221005',
            'xuxtCL2JpKoaEI2v1YQ_',
            5000 // Estimated value for accessibility audit lead
          );

          // Track the lead event
          analytics.trackEvent(
            'Lead',
            'generate_lead',
            'accessibility_audit',
            5000
          );

          // Track form completion
          analytics.trackEvent(
            'Form',
            'submit_success',
            'Accessibility Audit Form'
          );
        }

        // Detailed Google Analytics 4 tracking
        if (gtag) {
          gtag('event', 'generate_lead', {
            currency: 'CAD',
            value: 5000,
            transaction_id: transactionId,
            service_type: 'accessibility_audit',
            lead_source: 'accessibility_landing_form',
            form_type: 'accessibility_audit',
            utm_source: landingData.utmSource || 'none',
            utm_medium: landingData.utmMedium || 'none',
            utm_campaign: landingData.utmCampaign || 'none',
            traffic_source: landingData.referrer || 'direct',
            session_id: landingData.sessionId || 'unknown',
            user_data: {
              email_address: formData.email,
              first_name: formData.firstName,
              company_name: formData.companyName,
            },
          });

          // Track specific accessibility audit conversion
          gtag('event', 'accessibility_audit_request', {
            event_category: 'Lead Generation',
            event_label: 'Free Accessibility Audit',
            company_name: formData.companyName,
            website_url: formData.website,
            landing_page: 'accessibility',
            utm_source: landingData.utmSource || 'none',
            utm_campaign: landingData.utmCampaign || 'none',
          });
        }
      } catch (analyticsError) {
        console.error('Analytics tracking error:', analyticsError);
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
    analytics.trackEvent(
      'Form',
      'field_interaction',
      `accessibility_audit_${fieldName}`
    );
  }
};
</script>

<template>
  <!-- Accessibility Audit Form Section -->
  <section
    id="contact-form"
    class="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div
        class="absolute -right-40 -top-40 w-96 h-96 bg-accent rounded-full animate-bounce-light"
      ></div>
      <div
        class="absolute -left-20 top-1/2 w-80 h-80 bg-accent-light rounded-full animate-bounce-light"
        style="animation-delay: 1s"
      ></div>
    </div>

    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div
        class="absolute top-20 left-20 w-4 h-4 bg-accent-300 rounded-full animate-bounce-light"
        style="animation-delay: 0.5s"
      ></div>
      <div
        class="absolute top-40 right-32 w-6 h-6 bg-accent-200 rounded-full animate-bounce-light"
        style="animation-delay: 1.5s"
      ></div>
      <div
        class="absolute bottom-32 left-1/3 w-5 h-5 bg-accent-400 rounded-full animate-bounce-light"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="container-site relative z-10 px-4 sm:px-6 lg:px-8">
      <div
        class="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <!-- Info Panel -->
        <div class="text-white">
          <!-- Badge -->
          <span
            class="inline-flex items-center gap-2 bg-accent bg-opacity-20 text-accent-light px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span class="text-lg">🚀</span>
            Free Accessibility Audit
          </span>

          <!-- Headline -->
          <h2
            class="text-3xl md:text-4xl font-bold mb-6 leading-tight text-accent-200"
          >
            Get Your Free
            <span class="text-accent-300">Accessibility Audit</span>
          </h2>

          <!-- Description -->
          <p class="text-xl text-primary-100 mb-8 leading-relaxed">
            Discover how accessible your website really is. Get a comprehensive
            report with specific recommendations to improve compliance and user
            experience.
          </p>

          <!-- Benefits List -->
          <ul class="space-y-4 mb-8">
            <li class="flex items-start gap-4">
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30 flex-shrink-0"
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
              <div class="text-primary-100">
                <div
                  class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                >
                  Comprehensive Report
                </div>
                <p class="text-white font-medium">
                  Detailed WCAG 2.1 AA compliance analysis of your entire
                  website
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30 flex-shrink-0"
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <div class="text-primary-100">
                <div
                  class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                >
                  Fast Turnaround
                </div>
                <p class="text-white font-medium">
                  Receive your audit report within 24-48 hours
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30 flex-shrink-0"
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
              <div class="text-primary-100">
                <div
                  class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                >
                  Actionable Recommendations
                </div>
                <p class="text-white font-medium">
                  Prioritized fixes with implementation guidance
                </p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span
                class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 text-accent-200 ring-1 ring-accent-400/30 flex-shrink-0"
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
              <div class="text-primary-100">
                <div
                  class="font-semibold tracking-wide uppercase text-[11px] text-accent-200 mb-1"
                >
                  No Obligation
                </div>
                <p class="text-white font-medium">
                  Completely free with no strings attached
                </p>
              </div>
            </li>
          </ul>

          <!-- Social Proof -->
          <div class="text-center md:text-left">
            <p class="text-accent-200 font-medium mb-4">
              Join 100+ companies who've improved their accessibility
            </p>
            <div
              class="flex items-center justify-center md:justify-start gap-4"
            >
              <div class="flex items-center gap-2 text-primary-100">
                <span class="text-accent-300 text-xl">⭐</span>
                <span class="text-sm font-medium">4.9/5 Client Rating</span>
              </div>
              <div class="flex items-center gap-2 text-primary-100">
                <span class="text-accent-300 text-xl">🏆</span>
                <span class="text-sm font-medium">100% WCAG AA Success</span>
              </div>
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

            <!-- Form Header -->
            <div class="text-center mb-8 relative z-10">
              <h3 class="text-2xl font-bold text-primary mb-2">
                Start Your Free Audit
              </h3>
              <p class="text-neutral-text">Takes less than 30 seconds</p>
            </div>

            <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
              <!-- First Name -->
              <div class="relative">
                <input
                  id="firstName"
                  v-model="formData.firstName"
                  @blur="validateField('firstName')"
                  @focus="trackFieldInteraction('firstName')"
                  type="text"
                  class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none transition-all duration-200"
                  :class="
                    formErrors.firstName
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                      : ''
                  "
                  placeholder=" "
                  aria-required="true"
                  aria-invalid="formErrors.firstName ? true : false"
                  aria-describedby="firstName-error"
                  required
                />
                <label
                  for="firstName"
                  class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                  >First Name</label
                >
                <p
                  v-if="formErrors.firstName"
                  class="mt-1 text-sm text-red-500"
                  id="firstName-error"
                  aria-live="polite"
                >
                  {{ formErrors.firstName }}
                </p>
              </div>

              <!-- Company Name -->
              <div class="relative">
                <input
                  id="companyName"
                  v-model="formData.companyName"
                  @blur="validateField('companyName')"
                  @focus="trackFieldInteraction('companyName')"
                  type="text"
                  class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none transition-all duration-200"
                  :class="
                    formErrors.companyName
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                      : ''
                  "
                  placeholder=" "
                  aria-required="true"
                  aria-invalid="formErrors.companyName ? true : false"
                  aria-describedby="companyName-error"
                  required
                />
                <label
                  for="companyName"
                  class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                  >Company Name</label
                >
                <p
                  v-if="formErrors.companyName"
                  class="mt-1 text-sm text-red-500"
                  id="companyName-error"
                  aria-live="polite"
                >
                  {{ formErrors.companyName }}
                </p>
              </div>

              <!-- Website URL -->
              <div class="relative">
                <input
                  id="website"
                  v-model="formData.website"
                  @blur="validateField('website')"
                  @focus="trackFieldInteraction('website')"
                  type="url"
                  class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none transition-all duration-200"
                  :class="
                    formErrors.website
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-300/40'
                      : ''
                  "
                  placeholder=" "
                  aria-required="true"
                  aria-invalid="formErrors.website ? true : false"
                  aria-describedby="website-error"
                  required
                />
                <label
                  for="website"
                  class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
                  >Website URL</label
                >
                <p
                  v-if="formErrors.website"
                  class="mt-1 text-sm text-red-500"
                  id="website-error"
                  aria-live="polite"
                >
                  {{ formErrors.website }}
                </p>
              </div>

              <!-- Email -->
              <div class="relative">
                <input
                  id="email"
                  v-model="formData.email"
                  @blur="validateField('email')"
                  @focus="trackFieldInteraction('email')"
                  type="email"
                  class="peer w-full rounded-xl border border-neutral-300 bg-white/80 backdrop-blur-sm px-4 pt-5 pb-2 text-sm md:text-base text-neutral-800 placeholder-transparent shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-300/40 focus:outline-none transition-all duration-200"
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
                  class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm origin-left transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-neutral-500"
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

              <!-- Submission Alerts -->
              <div
                v-if="submissionSuccess"
                class="alert alert-success mb-4"
                role="status"
                aria-live="polite"
              >
                <span class="sr-only">Success:</span>
                🎉 Thank you! Your audit request has been received. We'll send
                your comprehensive accessibility report within 24-48 hours.
              </div>
              <div
                v-if="submissionError"
                class="alert alert-error mb-4"
                role="alert"
                aria-live="assertive"
              >
                <span class="sr-only">Error:</span>
                Oops! There was an error submitting your request. Please try
                again or contact us directly.
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="relative w-full inline-flex items-center justify-center gap-2 font-semibold text-lg tracking-wide text-white rounded-xl px-8 py-4 bg-gradient-to-r from-accent-500 via-accent-600 to-primary-600 hover:from-accent-400 hover:via-accent-500 hover:to-primary-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-400/40 shadow-xl shadow-accent-900/20 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
                :disabled="isSubmitting"
                aria-busy="isSubmitting"
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center"
                  aria-hidden="true"
                >
                  <svg
                    class="h-5 w-5 text-white animate-spin mr-2"
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
                  Processing...
                </span>
                <span v-else class="flex items-center">
                  Get My Free Audit Report
                  <svg
                    class="w-5 h-5 ml-2"
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
                  isSubmitting
                    ? 'Processing your audit request...'
                    : 'Submit accessibility audit request'
                }}</span>
              </button>

              <!-- Trust Indicators -->
              <div class="text-center pt-4">
                <p class="text-xs text-neutral-500 mb-2">
                  🔒 Your information is secure and will never be shared
                </p>
                <p class="text-xs text-neutral-400">
                  ⏱️ Report delivered within 24-48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        fill="#FFFFFF"
        preserveAspectRatio="none"
        class="w-full h-20"
      >
        <path
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
  </section>
</template>
