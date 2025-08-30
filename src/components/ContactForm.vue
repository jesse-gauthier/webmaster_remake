<!-- /components/ContactForm.vue -->

<script setup>
import { ref, reactive, computed, inject, onMounted } from "vue";
import { sanitizeInput, isValidEmail, isValidPhone, checkRateLimit, generateCSRFToken } from "@/utils/security";

// Import analytics from our plugin
const gtag = inject("gtag");
const analytics = inject("analytics");

// Track form views
onMounted(() => {
  analytics.trackEvent("Form", "view", "Contact Form");
});

// Form state
const formData = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
});

// Security measures
const csrfToken = ref("");
const honeypot = ref(""); // Hidden field for bot detection

// Generate CSRF token on mount
onMounted(() => {
  csrfToken.value = generateCSRFToken();
});

// Validation state
const formErrors = reactive({
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
});

// Submission state
const isSubmitting = ref(false);
const submissionSuccess = ref(false);
const submissionError = ref(false);

// Service options
const serviceOptions = [
  { value: "wordpress_development", label: "WordPress Development" },
  { value: "wordpress_maintenance", label: "WordPress Maintenance" },
  { value: "shopify_development", label: "Shopify Development" },
  { value: "shopify_maintenance", label: "Shopify Maintenance" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

// Budget options
const budgetOptions = [
  { value: "under_1000", label: "Under $1,000" },
  { value: "1000_5000", label: "$1,000 - $5,000" },
  { value: "5000_10000", label: "$5,000 - $10,000" },
  { value: "10000_25000", label: "$10,000 - $25,000" },
  { value: "over_25000", label: "Over $25,000" },
];

// Validation functions
const validateName = () => {
  formData.name = sanitizeInput(formData.name);
  formErrors.name = formData.name.trim() ? "" : "Name is required";
};

const validateEmail = () => {
  formData.email = sanitizeInput(formData.email);
  formErrors.email = isValidEmail(formData.email)
    ? ""
    : "Please enter a valid email address";
};

const validatePhone = () => {
  formData.phone = sanitizeInput(formData.phone);
  formErrors.phone = isValidPhone(formData.phone)
    ? ""
    : "Please enter a valid phone number";
};

const validateService = () => {
  formErrors.service = formData.service ? "" : "Please select a service";
};

const validateBudget = () => {
  formErrors.budget = formData.budget ? "" : "Please select a budget range";
};

const validateMessage = () => {
  formData.message = sanitizeInput(formData.message);
  formErrors.message =
    formData.message.trim().length >= 10
      ? ""
      : "Message must be at least 10 characters long";
};

const validateField = (field) => {
  switch (field) {
    case "name":
      validateName();
      break;
    case "email":
      validateEmail();
      break;
    case "phone":
      validatePhone();
      break;
    case "service":
      validateService();
      break;
    case "budget":
      validateBudget();
      break;
    case "message":
      validateMessage();
      break;
  }
};

// Validate entire form
const isFormValid = computed(() => {
  validateField("name");
  validateField("email");
  validateField("phone");
  validateField("service");
  validateField("budget");
  validateField("message");

  return !Object.values(formErrors).some((error) => error !== "");
});

// Form submission handler
const submitForm = async () => {
  // Check for bot honeypot
  if (honeypot.value) {
    console.warn("Bot detected via honeypot");
    return;
  }

  // Rate limiting check
  if (!checkRateLimit("contact_form", 3, 300000)) { // 3 attempts per 5 minutes
    submissionError.value = "Too many submission attempts. Please wait before trying again.";
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
      user_agent: navigator.userAgent.substring(0, 200) // Limit UA string length
    };

    // Actual API call to PHP endpoint
    const response = await fetch("/php/contactForm.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest", // Helps prevent CSRF
      },
      body: JSON.stringify(secureFormData),
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
        if (formData.budget === "under_1000") estimatedValue = 1000;
        else if (formData.budget === "1000_5000") estimatedValue = 3000;
        else if (formData.budget === "5000_10000") estimatedValue = 7500;
        else if (formData.budget === "10000_25000") estimatedValue = 17500;
        else if (formData.budget === "over_25000") estimatedValue = 30000;

        // Track the lead conversion using our analytics methods
        if (analytics) {
          // Track Google Ads conversion
          analytics.trackConversion(
            "AW-16921221005",
            "xuxtCL2JpKoaEI2v1YQ_",
            estimatedValue
          );

          // Track the lead event with detailed parameters
          analytics.trackEvent(
            "Lead",
            "generate_lead",
            formData.service,
            estimatedValue
          );

          // Send more detailed custom event
          gtag("event", "generate_lead", {
            currency: "CAD",
            value: estimatedValue,
            transaction_id: transactionId,
            service_type: formData.service,
            budget_range: formData.budget,
            lead_source: "contact_form",
            user_data: {
              email_address: formData.email,
              phone_number: formData.phone,
            },
          });
        }
      } catch (analyticsError) {
        console.error("Analytics tracking error:", analyticsError);
        // Non-blocking - continue with form success flow
      }

      // Reset form
      Object.keys(formData).forEach((key) => {
        formData[key] = "";
      });
    } else {
      // Error handling
      submissionError.value = true;
    }
  } catch (error) {
    console.error("Submission error:", error);
    submissionError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Helper function to track field interactions
const trackFieldInteraction = (fieldName) => {
  analytics.trackEvent("Form", "field_interaction", fieldName);
};
</script>

<template>
  <section class="container-site section-padding bg-neutral-cream border-lg">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <div class="md:flex">
          <!-- Contact Information Side -->
          <div
            class="md:w-1/2 bg-primary text-white p-8 flex flex-col justify-center"
          >
            <h2 class="text-3xl font-bold mb-4 text-white">
              Let's Talk Digital
            </h2>
            <p class="mb-6 text-primary-light">
              Have a project in mind? We're excited to hear about it. Fill out
              the form, and our team will get back to you within 24 hours.
            </p>
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 mr-3 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>Contact@ottawawebmasters.ca</span>
              </div>
            </div>

            <!-- Who We Are section -->
            <div class="mt-6 border-t border-primary-dark pt-6 hidden md:block">
              <h3 class="text-xl font-semibold mb-3 text-white">Who We Are</h3>
              <p class="text-primary-light mb-3">
                We are a dedicated team of web design and development
                specialists based in Ottawa, passionate about creating
                exceptional websites for small businesses.
              </p>
              <p class="text-primary-light mb-3">
                Our mission is simple: empower small businesses with quality
                digital solutions that drive real results. This guiding
                principle shapes every service we offer and every project we
                undertake.
              </p>
              <p class="text-primary-light">
                With our combined expertise and client-focused approach, we
                deliver websites that not only look great but also perform
                exceptionally well in today's competitive digital landscape.
              </p>
            </div>
          </div>

          <!-- Form Side -->
          <div class="md:w-1/2 p-8">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div role="group" aria-labelledby="personal-info-heading">
                <h3 id="personal-info-heading" class="sr-only">
                  Personal Information
                </h3>

                <div class="mb-4">
                  <label for="name" class="form-label" id="name-label"
                    >Full Name</label
                  >
                  <input
                    id="name"
                    v-model="formData.name"
                    @blur="validateField('name')"
                    @focus="trackFieldInteraction('name')"
                    type="text"
                    class="form-input"
                    :class="{ 'border-error': formErrors.name }"
                    placeholder="Your Full Name"
                    aria-required="true"
                    aria-invalid="formErrors.name ? true : false"
                    aria-describedby="name-error"
                    required
                  />
                  <p
                    v-if="formErrors.name"
                    class="form-error"
                    id="name-error"
                    aria-live="polite"
                  >
                    {{ formErrors.name }}
                  </p>
                </div>

                <!-- Honeypot field for bot detection - hidden from users -->
                <div style="position: absolute; left: -9999px; opacity: 0; pointer-events: none;" aria-hidden="true">
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

                <div class="mb-4">
                  <label for="email" class="form-label" id="email-label"
                    >Email Address</label
                  >
                  <input
                    id="email"
                    v-model="formData.email"
                    @blur="validateField('email')"
                    @focus="trackFieldInteraction('email')"
                    type="email"
                    class="form-input"
                    :class="{ 'border-error': formErrors.email }"
                    placeholder="you@example.com"
                    aria-required="true"
                    aria-invalid="formErrors.email ? true : false"
                    aria-describedby="email-error"
                    required
                  />
                  <p
                    v-if="formErrors.email"
                    class="form-error"
                    id="email-error"
                    aria-live="polite"
                  >
                    {{ formErrors.email }}
                  </p>
                </div>

                <div class="mb-4">
                  <label for="phone" class="form-label" id="phone-label"
                    >Phone Number</label
                  >
                  <input
                    id="phone"
                    v-model="formData.phone"
                    @blur="validateField('phone')"
                    @focus="trackFieldInteraction('phone')"
                    type="tel"
                    class="form-input"
                    :class="{ 'border-error': formErrors.phone }"
                    placeholder="(555) 123-4567"
                    aria-required="true"
                    aria-invalid="formErrors.phone ? true : false"
                    aria-describedby="phone-error"
                    required
                  />
                  <p
                    v-if="formErrors.phone"
                    class="form-error"
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

                <div class="mb-4">
                  <label for="service" class="form-label" id="service-label">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    v-model="formData.service"
                    @blur="validateField('service')"
                    @focus="trackFieldInteraction('service')"
                    class="form-input"
                    :class="{ 'border-error': formErrors.service }"
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
                  <p
                    v-if="formErrors.service"
                    class="form-error"
                    id="service-error"
                    aria-live="polite"
                  >
                    {{ formErrors.service }}
                  </p>
                </div>

                <div class="mb-4">
                  <label for="budget" class="form-label" id="budget-label"
                    >Estimated Budget</label
                  >
                  <select
                    id="budget"
                    v-model="formData.budget"
                    @blur="validateField('budget')"
                    @focus="trackFieldInteraction('budget')"
                    class="form-input"
                    :class="{ 'border-error': formErrors.budget }"
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
                  <p
                    v-if="formErrors.budget"
                    class="form-error"
                    id="budget-error"
                    aria-live="polite"
                  >
                    {{ formErrors.budget }}
                  </p>
                </div>

                <div class="mb-4">
                  <label for="message" class="form-label" id="message-label"
                    >Project Details</label
                  >
                  <textarea
                    id="message"
                    v-model="formData.message"
                    @blur="validateField('message')"
                    @focus="trackFieldInteraction('message')"
                    class="form-input min-h-[120px]"
                    :class="{ 'border-error': formErrors.message }"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    aria-required="true"
                    aria-invalid="formErrors.message ? true : false"
                    aria-describedby="message-error"
                    required
                  ></textarea>
                  <p
                    v-if="formErrors.message"
                    class="form-error"
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
                class="btn-primary w-full"
                :disabled="isSubmitting"
                aria-busy="isSubmitting"
                @click="
                  analytics.trackEvent('Form', 'submit_attempt', 'Contact Form')
                "
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
                <span v-else> Send </span>
                <span class="sr-only">{{
                  isSubmitting ? "Submitting form..." : "Submit contact form"
                }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
