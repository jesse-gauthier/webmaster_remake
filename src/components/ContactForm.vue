<!-- /components/ContactForm.vue -->

<script setup>
import { ref, reactive, computed } from 'vue'

// Form state
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: ''
})

// Validation state
const formErrors = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: ''
})

// Submission state
const isSubmitting = ref(false)
const submissionSuccess = ref(false)
const submissionError = ref(false)

// Service options
const serviceOptions = [
  { value: 'wordpress_development', label: 'WordPress Development' },
  { value: 'wordpress_maintenance', label: 'WordPress Maintenance' },
  { value: 'shopify_development', label: 'Shopify Development' },
  { value: 'shopify_maintenance', label: 'Shopify Maintenance' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' }
]

// Budget options
const budgetOptions = [
  { value: 'under_1000', label: 'Under $1,000' },
  { value: '1000_5000', label: '$1,000 - $5,000' },
  { value: '5000_10000', label: '$5,000 - $10,000' },
  { value: '10000_25000', label: '$10,000 - $25,000' },
  { value: 'over_25000', label: 'Over $25,000' }
]

// Validation functions
const validateName = () => {
  formErrors.name = formData.name.trim() ? '' : 'Name is required'
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  formErrors.email = emailRegex.test(formData.email)
    ? ''
    : 'Please enter a valid email address'
}

const validatePhone = () => {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  formErrors.phone = phoneRegex.test(formData.phone)
    ? ''
    : 'Please enter a valid phone number'
}

const validateService = () => {
  formErrors.service = formData.service ? '' : 'Please select a service'
}

const validateBudget = () => {
  formErrors.budget = formData.budget ? '' : 'Please select a budget range'
}

const validateMessage = () => {
  formErrors.message = formData.message.trim().length >= 10
    ? ''
    : 'Message must be at least 10 characters long'
}

const validateField = (field) => {
  switch (field) {
    case 'name':
      validateName()
      break
    case 'email':
      validateEmail()
      break
    case 'phone':
      validatePhone()
      break
    case 'service':
      validateService()
      break
    case 'budget':
      validateBudget()
      break
    case 'message':
      validateMessage()
      break
  }
}

// Validate entire form
const isFormValid = computed(() => {
  validateField('name')
  validateField('email')
  validateField('phone')
  validateField('service')
  validateField('budget')
  validateField('message')

  return !Object.values(formErrors).some(error => error !== '')
})

// Form submission handler
const submitForm = async () => {
  // Validate form
  if (!isFormValid.value) {
    return
  }

  // Set submitting state
  isSubmitting.value = true
  submissionSuccess.value = false
  submissionError.value = false

  try {
    // Actual API call to PHP endpoint
    const response = await fetch('/contactForm.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      // Success handling
      submissionSuccess.value = true

      // Reset form
      Object.keys(formData).forEach(key => {
        formData[key] = ''
      })
    } else {
      // Error handling
      submissionError.value = true
    }
  } catch (error) {
    console.error('Submission error:', error)
    submissionError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="container-site section-padding bg-neutral-cream border-lg">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <div class="md:flex">
          <!-- Contact Information Side -->
          <div class="md:w-1/2 bg-primary text-white p-8 flex flex-col justify-center">
            <h2 class="text-3xl font-bold mb-4 text-white">Let's Talk Digital</h2>
            <p class="mb-6 text-primary-light">
              Have a project in mind? We're excited to hear about it. Fill out the form, and our team will get back to
              you within 24 hours.
            </p>
            <div class="space-y-4 mb-6">
              <div class="flex items-center">
                <svg class="w-6 h-6 mr-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                  </path>
                </svg>
                <span>Contact@ottawawebmasters.ca</span>
              </div>
            </div>

            <!-- Who We Are section -->
            <div class="mt-6 border-t border-primary-dark pt-6 hidden md:block">
              <h3 class="text-xl font-semibold mb-3 text-white">Who We Are</h3>
              <p class="text-primary-light mb-3">
                We are a dedicated team of web design and development specialists based in Ottawa, passionate about
                creating exceptional websites for small businesses.
              </p>
              <p class="text-primary-light mb-3">
                Our mission is simple: empower small businesses with quality digital solutions that drive real results.
                This guiding principle shapes every service we offer and every project we undertake.
              </p>
              <p class="text-primary-light">
                With our combined expertise and client-focused approach, we deliver websites that not only look great
                but also perform exceptionally well in today's competitive digital landscape.
              </p>
            </div>
          </div>

          <!-- Form Side -->
          <div class="md:w-1/2 p-8">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="form-label">Full Name</label>
                <input id="name" v-model="formData.name" @blur="validateField('name')" type="text" class="form-input"
                  :class="{ 'border-error': formErrors.name }" placeholder="Your Full Name" required />
                <p v-if="formErrors.name" class="form-error">{{ formErrors.name }}</p>
              </div>

              <div>
                <label for="email" class="form-label">Email Address</label>
                <input id="email" v-model="formData.email" @blur="validateField('email')" type="email"
                  class="form-input" :class="{ 'border-error': formErrors.email }" placeholder="you@example.com"
                  required />
                <p v-if="formErrors.email" class="form-error">{{ formErrors.email }}</p>
              </div>

              <div>
                <label for="phone" class="form-label">Phone Number</label>
                <input id="phone" v-model="formData.phone" @blur="validateField('phone')" type="tel" class="form-input"
                  :class="{ 'border-error': formErrors.phone }" placeholder="(555) 123-4567" required />
                <p v-if="formErrors.phone" class="form-error">{{ formErrors.phone }}</p>
              </div>

              <div>
                <label for="service" class="form-label">Service Interested In</label>
                <select id="service" v-model="formData.service" @blur="validateField('service')" class="form-input"
                  :class="{ 'border-error': formErrors.service }" required>
                  <option value="" disabled>Select a Service</option>
                  <option v-for="option in serviceOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="formErrors.service" class="form-error">{{ formErrors.service }}</p>
              </div>

              <div>
                <label for="budget" class="form-label">Estimated Budget</label>
                <select id="budget" v-model="formData.budget" @blur="validateField('budget')" class="form-input"
                  :class="{ 'border-error': formErrors.budget }" required>
                  <option value="" disabled>Select Budget Range</option>
                  <option v-for="option in budgetOptions" :key="option.value" :value="option.value">
                    {{ option.label }}
                  </option>
                </select>
                <p v-if="formErrors.budget" class="form-error">{{ formErrors.budget }}</p>
              </div>

              <div>
                <label for="message" class="form-label">Project Details</label>
                <textarea id="message" v-model="formData.message" @blur="validateField('message')"
                  class="form-input min-h-[120px]" :class="{ 'border-error': formErrors.message }"
                  placeholder="Tell us about your project, goals, and any specific requirements..." required></textarea>
                <p v-if="formErrors.message" class="form-error">{{ formErrors.message }}</p>
              </div>

              <!-- Submission Alerts -->
              <div v-if="submissionSuccess" class="alert alert-success">
                Thank you! We've received your message and will contact you soon.
              </div>
              <div v-if="submissionError" class="alert alert-error">
                Oops! There was an error submitting the form. Please try again later.
              </div>

              <!-- Submit Button -->
              <button type="submit" class="btn-primary w-full" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  Sending...
                </span>
                <span v-else>
                  Send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
