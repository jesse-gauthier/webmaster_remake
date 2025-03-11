<template>
    <div class="container-site section-padding">
        <div class="max-w-form mx-auto">
            <!-- Form Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl mb-4">Web Development Project Questionnaire</h1>
                <p class="text-neutral-text">Let's discuss your project needs. This form will help us understand your
                    requirements better.</p>
            </div>

            <!-- Progress Bar -->
            <div class="mb-8" v-if="!formSubmitted">
                <div class="flex justify-between mb-2">
                    <span class="text-sm font-medium text-primary-600">Getting Started</span>
                    <span class="text-sm font-medium text-primary-600">{{ Math.round((currentStep / (getTotalSteps - 1))
                        * 100) }}% Complete</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-primary-600 h-2.5 rounded-full"
                        :style="`width: ${(currentStep / (getTotalSteps - 1)) * 100}%`"></div>
                </div>
            </div>

            <!-- Form Content -->
            <div class="card p-6" v-if="!formSubmitted">
                <!-- Step 1: Basic Information -->
                <div v-if="currentStep === 0" class="animate-fade-in">
                    <h2 class="text-2xl mb-6">Your Information</h2>

                    <div class="mb-4">
                        <label for="name" class="form-label">Your Name *</label>
                        <input id="name" type="text" v-model="formData.name" class="form-input" placeholder="John Doe"
                            required />
                    </div>

                    <div class="mb-4">
                        <label for="email" class="form-label">Email Address *</label>
                        <input id="email" type="email" v-model="formData.email" class="form-input"
                            placeholder="john@example.com" required />
                        <div v-if="formData.email && !validateEmail(formData.email)" class="form-error">
                            Please enter a valid email address
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="company" class="form-label">Company Name</label>
                        <input id="company" type="text" v-model="formData.companyName" class="form-input"
                            placeholder="Your company name" />
                    </div>

                    <div class="mb-4">
                        <label for="phone" class="form-label">Phone Number</label>
                        <input id="phone" type="tel" v-model="formData.phoneNumber" class="form-input"
                            placeholder="(123) 456-7890" />
                    </div>
                </div>

                <!-- Step 2: Project Details -->
                <div v-if="currentStep === 1" class="animate-fade-in">
                    <h2 class="text-2xl mb-6">Project Details</h2>

                    <div class="mb-6">
                        <label class="form-label">What type of project do you need? *</label>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <div v-for="option in projectTypeOptions" :key="option.value"
                                @click="formData.projectType = option.value"
                                class="card card-hover p-4 cursor-pointer transition-all duration-200"
                                :class="{ 'border-2 border-primary-600 shadow-md': formData.projectType === option.value }">
                                <div class="font-heading font-medium capitalize">{{ option.label }}</div>
                                <div class="text-sm text-neutral-text mt-1">
                                    {{ option.description }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label">What's your budget range? *</label>
                        <select v-model="formData.budget" class="form-input">
                            <option value="" disabled selected>Select a budget range</option>
                            <option value="1000-3000">$1,000 - $3,000</option>
                            <option value="3000-5000">$3,000 - $5,000</option>
                            <option value="5000-10000">$5,000 - $10,000</option>
                            <option value="10000+">$10,000+</option>
                            <option value="not-sure">Not sure yet</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label class="form-label">When do you need this project completed? *</label>
                        <select v-model="formData.timeline" class="form-input">
                            <option value="" disabled selected>Select a timeline</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-3-months">2-3 months</option>
                            <option value="3-6-months">3-6 months</option>
                            <option value="6-months+">6+ months</option>
                            <option value="not-sure">No specific deadline</option>
                        </select>
                    </div>
                </div>

                <!-- Step 3: Project Specifics (conditional based on project type) -->
                <div v-if="currentStep === 2" class="animate-fade-in">
                    <!-- Website-specific questions -->
                    <div v-if="formData.projectType === 'website'">
                        <h2 class="text-2xl mb-6">Website Details</h2>

                        <div class="mb-4">
                            <label class="form-label">What type of website do you need? *</label>
                            <select v-model="formData.websiteType" class="form-input">
                                <option value="" disabled selected>Select website type</option>
                                <option value="informational">Informational (business/service website)</option>
                                <option value="portfolio">Portfolio/Showcase</option>
                                <option value="blog">Blog/Content website</option>
                                <option value="landing">Landing page</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Approximately how many pages do you need?</label>
                            <select v-model="formData.numPages" class="form-input">
                                <option value="" disabled selected>Select number of pages</option>
                                <option value="1-5">1-5 pages</option>
                                <option value="5-10">5-10 pages</option>
                                <option value="10-20">10-20 pages</option>
                                <option value="20+">20+ pages</option>
                                <option value="not-sure">Not sure yet</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Do you have content ready for your website?</label>
                            <div class="flex items-center mt-2">
                                <input id="content-yes" type="radio" v-model="formData.contentReady" :value="true"
                                    class="mr-2" />
                                <label for="content-yes" class="mr-4">Yes</label>
                                <input id="content-no" type="radio" v-model="formData.contentReady" :value="false"
                                    class="mr-2" />
                                <label for="content-no">No</label>
                            </div>
                        </div>
                    </div>

                    <!-- E-commerce-specific questions -->
                    <div v-if="formData.projectType === 'ecommerce'">
                        <h2 class="text-2xl mb-6">E-commerce Details</h2>

                        <div class="mb-4">
                            <label class="form-label">Approximately how many products will you sell? *</label>
                            <select v-model="formData.numProducts" class="form-input">
                                <option value="" disabled selected>Select product range</option>
                                <option value="1-10">1-10 products</option>
                                <option value="11-50">11-50 products</option>
                                <option value="51-100">51-100 products</option>
                                <option value="100+">100+ products</option>
                                <option value="not-sure">Not sure yet</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Which payment gateways do you want to use? *</label>
                            <div class="grid grid-cols-2 gap-2 mt-2">
                                <div v-for="gateway in ['Stripe', 'PayPal', 'Square', 'Authorize.net']" :key="gateway">
                                    <label
                                        class="flex items-center cursor-pointer p-2 hover:bg-primary-50 rounded transition-colors">
                                        <input type="checkbox" :value="gateway" v-model="formData.paymentGateways"
                                            class="mr-2" />
                                        {{ gateway }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Web app-specific questions -->
                    <div v-if="formData.projectType === 'webapp'">
                        <h2 class="text-2xl mb-6">Web Application Details</h2>

                        <div class="mb-4">
                            <label class="form-label">What features do you need in your web app? *</label>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                                <div v-for="feature in webAppFeatures" :key="feature">
                                    <label
                                        class="flex items-center cursor-pointer p-2 hover:bg-primary-50 rounded transition-colors">
                                        <input type="checkbox" :value="feature" v-model="formData.appFeatures"
                                            class="mr-2" />
                                        {{ feature }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Do you need user authentication/login?</label>
                            <div class="flex items-center mt-2">
                                <input id="auth-yes" type="radio" v-model="formData.userAuth" :value="true"
                                    class="mr-2" />
                                <label for="auth-yes" class="mr-4">Yes</label>
                                <input id="auth-no" type="radio" v-model="formData.userAuth" :value="false"
                                    class="mr-2" />
                                <label for="auth-no">No</label>
                            </div>
                        </div>
                    </div>

                    <!-- Other project type -->
                    <div v-if="formData.projectType === 'other'">
                        <h2 class="text-2xl mb-6">Custom Project Details</h2>

                        <div class="mb-4">
                            <label for="project-desc" class="form-label">Please describe your project</label>
                            <textarea id="project-desc" v-model="formData.projectDescription" class="form-input"
                                rows="6" placeholder="Tell us about your project needs and requirements..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Step 4: Final Details -->
                <div v-if="currentStep === 3" class="animate-fade-in">
                    <h2 class="text-2xl mb-6">Additional Information</h2>

                    <div class="mb-4">
                        <label for="design-preferences" class="form-label">Do you have any design preferences or brand
                            guidelines?</label>
                        <textarea id="design-preferences" v-model="formData.designPreferences" class="form-input"
                            rows="4" placeholder="Colors, style preferences, existing branding, etc."></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="competitors" class="form-label">Please list any competitor or inspirational
                            websites</label>
                        <textarea id="competitors" v-model="formData.competitorWebsites" class="form-input" rows="4"
                            placeholder="URLs of websites you like or want to reference"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="additional" class="form-label">Anything else you'd like to share?</label>
                        <textarea id="additional" v-model="formData.additionalInfo" class="form-input" rows="4"
                            placeholder="Any additional information or questions..."></textarea>
                    </div>
                </div>

                <!-- Form Navigation -->
                <div class="flex justify-between mt-8">
                    <button v-if="currentStep > 0" @click="prevStep" class="btn-outline">
                        Previous
                    </button>
                    <div v-else></div>

                    <button @click="nextStep" class="btn-primary" :disabled="!currentStepIsValid">
                        {{ currentStep < getTotalSteps - 1 ? 'Next' : 'Submit' }} </button>
                </div>

                <!-- Error message -->
                <div v-if="submissionError" class="alert alert-error mt-4">
                    {{ submissionError }}
                </div>
            </div>

            <!-- Success Message -->
            <div v-if="formSubmitted" class="card p-6 animate-fade-in">
                <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-success mx-auto mb-4" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 class="text-2xl mb-4">Thank You!</h2>
                    <p class="mb-6">Your project questionnaire has been submitted successfully. We'll review your
                        requirements and get back to you within 1-2 business days.</p>
                    <button @click="resetForm" class="btn-primary">Submit Another Request</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// State for form progress and steps
const currentStep = ref(0)
const formSubmitted = ref(false)
const submissionError = ref(null)

// Project type options
const projectTypeOptions = [
    {
        value: 'website',
        label: 'Website',
        description: 'Informational, portfolio, or general website'
    },
    {
        value: 'ecommerce',
        label: 'E-commerce',
        description: 'Online store with product listings and checkout'
    },
    {
        value: 'webapp',
        label: 'Web Application',
        description: 'Interactive application with user accounts'
    },
    {
        value: 'other',
        label: 'Other / Not Sure',
        description: 'Custom solution or not sure yet'
    }
]

// Web app features
const webAppFeatures = [
    'User accounts',
    'Admin dashboard',
    'File uploads',
    'Messaging',
    'Payments',
    'Analytics',
    'API integration',
    'Custom reporting'
]

// Form data structure
const formData = reactive({
    // Basic info
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',

    // Project details
    projectType: '',
    budget: '',
    timeline: '',

    // Website details
    websiteType: '',
    numPages: '',
    contentReady: false,

    // E-commerce details
    numProducts: '',
    paymentGateways: [],

    // Web app details
    appFeatures: [],
    userAuth: false,

    // Other project details
    projectDescription: '',

    // General details
    designPreferences: '',
    competitorWebsites: '',
    additionalInfo: ''
})

// Computed properties for form validation
const currentStepIsValid = computed(() => {
    switch (currentStep.value) {
        case 0: // Basic info
            return !!formData.name && !!formData.email && validateEmail(formData.email)
        case 1: // Project details
            return !!formData.projectType && !!formData.budget && !!formData.timeline
        case 2: // Conditional project specifics
            if (formData.projectType === 'website') {
                return !!formData.websiteType
            } else if (formData.projectType === 'ecommerce') {
                return !!formData.numProducts && formData.paymentGateways.length > 0
            } else if (formData.projectType === 'webapp') {
                return formData.appFeatures.length > 0
            } else if (formData.projectType === 'other') {
                return formData.projectDescription.length > 10
            }
            return true
        case 3: // General details
            return true // Optional fields
        default:
            return false
    }
})

// Function to validate email format
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

// Get total number of steps
const getTotalSteps = computed(() => 4)

// Form navigation
const nextStep = () => {
    if (currentStepIsValid.value) {
        if (currentStep.value < getTotalSteps.value - 1) {
            currentStep.value++
        } else {
            submitForm()
        }
    }
}

const prevStep = () => {
    if (currentStep.value > 0) {
        currentStep.value--
    }
}

// Form submission
const submitForm = async () => {
    try {
        // Track analytics event
        trackFormSubmission()

        // Submit form data to PHP script
        const response = await fetch('/php/new-project-form.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const result = await response.json()

        if (result.success) {
            formSubmitted.value = true
            submissionError.value = null
        } else {
            throw new Error(result.message || 'Form submission failed')
        }
    } catch (error) {
        submissionError.value = error.message
        console.error('Form submission error:', error)
    }
}

// Track form submission analytics
const trackFormSubmission = () => {
    // Google Analytics event tracking
    if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_submission', {
            'event_category': 'Web Development',
            'event_label': formData.projectType,
            'value': 1
        })
    }

    // Custom analytics if needed
    if (typeof window.trackEvent === 'function') {
        window.trackEvent('project_form_submitted', {
            projectType: formData.projectType,
            budget: formData.budget
        })
    }
}

// Reset form
const resetForm = () => {
    Object.keys(formData).forEach(key => {
        if (Array.isArray(formData[key])) {
            formData[key] = []
        } else if (typeof formData[key] === 'boolean') {
            formData[key] = false
        } else {
            formData[key] = ''
        }
    })
    currentStep.value = 0
    formSubmitted.value = false
    submissionError.value = null
}
</script>