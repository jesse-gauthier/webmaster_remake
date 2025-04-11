<script setup>
import { ref, onMounted, reactive, inject } from "vue";

// Inject analytics functionality
const analytics = inject("analytics");
const gtag = inject("gtag");

// Reactive state for pricing toggle
const pricingModel = ref("equity");
const togglePricing = (model) => {
  pricingModel.value = model;
};

// Form handling
const formData = reactive({
  name: "",
  email: "",
  company: "",
  interest: "equity",
  message: "",
});

const formStatus = reactive({
  submitting: false,
  submitted: false,
  success: false,
  message: "",
  errors: {},
});

const submitForm = async (e) => {
  e.preventDefault();
  formStatus.submitting = true;
  formStatus.errors = {};

  // Track form submission attempt
  analytics.trackEvent("Contact", "form_submission_attempt", "Vue Dev Inquiry");

  // Basic validation
  let hasErrors = false;
  if (!formData.name.trim()) {
    formStatus.errors.name = "Name is required";
    hasErrors = true;
  }

  if (!formData.email.trim()) {
    formStatus.errors.email = "Email is required";
    hasErrors = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    formStatus.errors.email = "Please enter a valid email address";
    hasErrors = true;
  }

  if (hasErrors) {
    // Track validation errors
    analytics.trackEvent(
      "Contact",
      "form_validation_error",
      Object.keys(formStatus.errors).join(",")
    );
    formStatus.submitting = false;
    return;
  }

  try {
    // Create form data object for submission
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("company", formData.company);
    form.append("interest", formData.interest);
    form.append("message", formData.message);

    // Submit to PHP handler
    const response = await fetch("/php/applicationDev.php", {
      method: "POST",
      body: form,
    });

    const result = await response.json();

    formStatus.submitted = true;
    formStatus.success = result.success;
    formStatus.message = result.message;

    if (result.success) {
      // Track successful submission
      analytics.trackEvent(
        "Contact",
        "form_submission_success",
        "Vue Dev Inquiry"
      );

      // Track conversion for Google Ads (if applicable)
      gtag("event", "conversion", {
        send_to: "AW-16921221005/abcdefghijklmnop", // Replace with actual conversion ID/label
        value: 1,
        currency: "USD",
      });

      // Reset form on success
      formData.name = "";
      formData.email = "";
      formData.company = "";
      formData.interest = "equity";
      formData.message = "";
    } else {
      // Track server-side validation errors
      analytics.trackEvent("Contact", "form_server_error", result.message);

      // Display server-side validation errors
      if (result.errors) {
        formStatus.errors = result.errors;
      }
    }
  } catch (error) {
    // Track submission error
    analytics.trackEvent(
      "Contact",
      "form_submission_error",
      error.message || "Unknown error"
    );

    formStatus.success = false;
    formStatus.message =
      "There was a problem submitting your request. Please try again later.";
    console.error("Form submission error:", error);
  } finally {
    formStatus.submitting = false;
  }
};

// Track form field interactions
const trackFieldInteraction = (fieldName) => {
  analytics.trackEvent("Contact", "field_interaction", fieldName);
};

// Features list
const features = [
  {
    id: 1,
    title: "Modern Vue 3 Architecture",
    description:
      "Leverage the power of Vue 3 Composition API for highly maintainable and scalable applications.",
    icon: "fas fa-code",
  },
  {
    id: 2,
    title: "Responsive Design",
    description:
      "Pixel-perfect interfaces that work flawlessly across all devices and screen sizes.",
    icon: "fas fa-mobile-alt",
  },
  {
    id: 3,
    title: "Performance Optimization",
    description:
      "Blazing fast load times and smooth user experiences with optimized Vue applications.",
    icon: "fas fa-tachometer-alt",
  },
  {
    id: 4,
    title: "State Management",
    description:
      "Robust state management with Pinia or Vuex to handle complex application data flows.",
    icon: "fas fa-database",
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Seamless integration with REST or GraphQL APIs for dynamic data-driven applications.",
    icon: "fas fa-plug",
  },
  {
    id: 6,
    title: "Automated Testing",
    description:
      "Comprehensive test coverage with Vitest, Jest, or Cypress for reliable applications.",
    icon: "fas fa-vial",
  },
];

// Process steps
const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We begin with in-depth discussions to understand your business goals, target audience, and application requirements.",
    icon: "fas fa-search",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Our team creates a detailed roadmap with project milestones, technology choices, and architecture decisions.",
    icon: "fas fa-map",
  },
  {
    id: 3,
    title: "Design & Development",
    description:
      "We build your application iteratively with Vue 3, implementing features and refining the UI/UX.",
    icon: "fas fa-code-branch",
  },
  {
    id: 4,
    title: "Testing & Deployment",
    description:
      "Rigorous quality assurance and seamless deployment to your preferred hosting environment.",
    icon: "fas fa-rocket",
  },
  {
    id: 5,
    title: "Support & Growth",
    description:
      "Ongoing maintenance, performance monitoring, and feature enhancements to ensure long-term success.",
    icon: "fas fa-chart-line",
  },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    quote:
      "The equity model was perfect for our startup. We got a high-quality Vue application without the upfront costs, and the team truly became invested in our success.",
    author: "Sarah Johnson",
    company: "FinTech Innovators",
  },
  {
    id: 2,
    quote:
      "Working with this team transformed our digital presence. Their Vue expertise helped us build a platform that scaled with our business from day one.",
    author: "Michael Chen",
    company: "GrowthMetrics",
  },
  {
    id: 3,
    quote:
      "The development process was transparent and collaborative. Our Vue application exceeded expectations and continues to drive our business forward.",
    author: "Rajiv Patel",
    company: "EduTech Solutions",
  },
];

// Animation for sections
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
    el.classList.add("opacity-0");
  });
});
</script>

<template>
  <main class="bg-neutral-cream">
    <!-- Hero Section -->
    <section class="relative bg-primary-light py-16 md:py-24 overflow-hidden">
      <div class="container-site relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="animate-on-scroll">
            <h1 class="text-3xl md:text-5xl font-bold text-primary-dark mb-4">
              Vue Application Development
              <span class="text-accent">with Shared Success</span>
            </h1>
            <p class="text-lg md:text-xl text-neutral-text mb-8">
              We build high-performance Vue applications with an innovative
              equity partnership model. Pay less upfront, share success later.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                class="btn-primary"
                aria-label="See our pricing options"
                >Explore Pricing</a
              >
              <a
                href="#contact"
                class="btn-outline"
                aria-label="Contact us about your project"
                >Let's Talk</a
              >
            </div>
          </div>
          <div class="animate-on-scroll">
            <div class="relative flex justify-center items-center h-full">
              <svg
                class="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
                viewBox="0 -17.5 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
                    fill="#41B883"
                  ></path>
                  <path
                    d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"
                    fill="#41B883"
                  ></path>
                  <path
                    d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z"
                    fill="#35495E"
                  ></path>
                </g>
              </svg>
              <div
                class="absolute -bottom-4 right-0 md:-right-4 bg-accent p-3 md:p-4 rounded-lg shadow-lg"
              >
                <i class="fab fa-vuejs text-3xl md:text-4xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-16 md:py-24 bg-white">
      <div class="container-site">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4">
            Modern Vue Applications Built for Growth
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            We specialize in developing cutting-edge Vue 3 applications that
            combine elegant design with powerful functionality.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.id"
            class="card card-hover p-6 animate-on-scroll"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary"
              >
                <i :class="feature.icon" class="text-xl"></i>
              </div>
              <h3 class="ml-4 text-xl font-semibold text-primary">
                {{ feature.title }}
              </h3>
            </div>
            <p class="text-neutral-text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Equity Model Section -->
    <section class="py-16 md:py-24 bg-accent-light">
      <div class="container-site">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll order-2 md:order-1">
            <img
              src="https://placehold.co/350x400/2E5944/F7F3E8?text=Vue+Partnership"
              alt="Collaborative development process"
              class="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div class="animate-on-scroll order-1 md:order-2">
            <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4">
              Our Equity Partnership Model
            </h2>
            <p class="text-lg text-neutral-text mb-6">
              We're not just developers — we're your partners in success. Our
              equity model aligns our interests and allows you to launch with
              minimal upfront costs.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <div
                  class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                >
                  <i class="fas fa-check text-sm"></i>
                </div>
                <span class="ml-3 text-neutral-text"
                  >Pay just $1,500 upfront vs. $15,000-$50,000 for traditional
                  development</span
                >
              </li>
              <li class="flex items-start">
                <div
                  class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                >
                  <i class="fas fa-check text-sm"></i>
                </div>
                <span class="ml-3 text-neutral-text"
                  >We take a percentage of revenue once your application
                  generates profit</span
                >
              </li>
              <li class="flex items-start">
                <div
                  class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                >
                  <i class="fas fa-check text-sm"></i>
                </div>
                <span class="ml-3 text-neutral-text"
                  >Our success is tied directly to your success — we're invested
                  in your growth</span
                >
              </li>
              <li class="flex items-start">
                <div
                  class="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white mt-1"
                >
                  <i class="fas fa-check text-sm"></i>
                </div>
                <span class="ml-3 text-neutral-text"
                  >Includes ongoing support, maintenance, and feature
                  enhancements</span
                >
              </li>
            </ul>
            <a
              href="#pricing"
              class="btn-primary mt-8 inline-block"
              aria-label="Learn more about our pricing"
              >See Pricing Details</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" class="py-16 md:py-24 bg-white">
      <div class="container-site">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4">
            Our Vue Development Process
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            We follow a proven methodology to turn your vision into a successful
            Vue application.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            class="flex mb-8 md:mb-12 animate-on-scroll"
          >
            <div class="w-14 flex-shrink-0">
              <div
                class="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl"
              >
                {{ index + 1 }}
              </div>
              <div
                v-if="index < processSteps.length - 1"
                class="w-1 h-full bg-primary-light mx-auto my-2"
              ></div>
            </div>
            <div class="ml-6">
              <h3 class="text-xl font-semibold text-primary flex items-center">
                <i :class="step.icon" class="mr-2"></i>
                {{ step.title }}
              </h3>
              <p class="text-neutral-text mt-2">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 md:py-24 bg-neutral-50">
      <div class="container-site">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4">
            Flexible Pricing Options
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            Choose between our equity partnership model or traditional full
            payment approach.
          </p>

          <!-- Pricing Toggle -->
          <div class="flex justify-center mt-8 mb-10">
            <div class="inline-flex bg-primary-light p-1 rounded-full">
              <button
                @click="togglePricing('equity')"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  pricingModel === 'equity'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-primary hover:bg-primary-100',
                ]"
                aria-label="Show equity pricing model"
              >
                Equity Model
              </button>
              <button
                @click="togglePricing('traditional')"
                :class="[
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  pricingModel === 'traditional'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-primary hover:bg-primary-100',
                ]"
                aria-label="Show traditional pricing model"
              >
                Traditional
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-8 max-w-4xl mx-auto">
          <!-- Equity Model Card -->
          <div
            v-show="pricingModel === 'equity'"
            class="card card-hover animate-on-scroll transition-all duration-300"
            aria-label="Equity partnership pricing model"
          >
            <div class="bg-primary p-6 rounded-t-card">
              <h3 class="text-2xl font-bold text-white">Equity Partnership</h3>
              <p class="text-primary-light mt-2">
                Shared success, minimal upfront
              </p>
            </div>
            <div class="p-6">
              <div class="mb-6">
                <span class="text-4xl font-bold text-primary">$1,500</span>
                <span class="text-neutral-text"> upfront</span>
                <p class="text-sm text-neutral-text mt-1">
                  + revenue share percentage
                </p>
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Full Vue application development</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >2-5% revenue share (negotiable based on project)</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Ongoing support and maintenance included</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Priority feature development</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Quarterly performance optimization</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Strategic partnership for growth</span
                  >
                </li>
              </ul>

              <a
                href="#contact"
                class="btn-primary w-full text-center"
                aria-label="Get started with equity model"
                >Get Started</a
              >
            </div>
          </div>

          <!-- Traditional Model Card -->
          <div
            v-show="pricingModel === 'traditional'"
            class="card card-hover animate-on-scroll transition-all duration-300"
            aria-label="Traditional pricing model"
          >
            <div class="bg-accent p-6 rounded-t-card">
              <h3 class="text-2xl font-bold text-white">Traditional Payment</h3>
              <p class="text-accent-light mt-2">
                Full ownership, one-time payment
              </p>
            </div>
            <div class="p-6">
              <div class="mb-6">
                <span class="text-4xl font-bold text-accent">$15,000+</span>
                <span class="text-neutral-text"> upfront</span>
                <p class="text-sm text-neutral-text mt-1">
                  Based on project requirements
                </p>
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Complete Vue application development</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >100% ownership of all code</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >3 months of support included</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Optional maintenance plan available</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >One-time feature additions at hourly rate</span
                  >
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-success mt-1"></i>
                  <span class="ml-3 text-neutral-text"
                    >Documentation and knowledge transfer</span
                  >
                </li>
              </ul>

              <a
                href="#contact"
                class="btn-outline w-full text-center"
                aria-label="Get started with traditional model"
                >Request Quote</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 bg-primary-light">
      <div class="container-site">
        <div class="text-center mb-12 animate-on-scroll">
          <h2 class="text-2xl md:text-4xl font-bold text-primary mb-4">
            What Our Partners Say
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            Success stories from businesses that chose our Vue development
            services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="card p-6 animate-on-scroll"
          >
            <div class="flex items-center mb-6">
              <img
                :src="`https://placehold.co/60x60/${testimonial.id % 2 === 0 ? '4292AC' : '2E5944'}/FFFFFF?text=${testimonial.author.charAt(0)}`"
                :alt="testimonial.author"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div class="ml-4">
                <h4 class="font-semibold text-primary">
                  {{ testimonial.author }}
                </h4>
                <p class="text-sm text-neutral-text">
                  {{ testimonial.company }}
                </p>
              </div>
            </div>
            <p class="text-neutral-text mb-4 italic">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex text-accent">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / Contact Section -->
    <section id="contact" class="py-16 md:py-24 bg-primary-600">
      <div class="container-site">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Vue Application?
            </h2>
            <p class="text-lg text-primary-100 mb-6">
              Whether you're interested in our equity partnership or traditional
              model, we're here to bring your vision to life.
            </p>
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-primary mb-4">
                Schedule a Discovery Call
              </h3>

              <!-- Success Message -->
              <div
                v-if="formStatus.submitted && formStatus.success"
                class="alert alert-success mb-6"
                role="alert"
              >
                <i class="fas fa-check-circle mr-2"></i>
                {{ formStatus.message }}
              </div>

              <!-- Error Message -->
              <div
                v-if="
                  formStatus.submitted &&
                  !formStatus.success &&
                  formStatus.message
                "
                class="alert alert-error mb-6"
                role="alert"
              >
                <i class="fas fa-exclamation-circle mr-2"></i>
                {{ formStatus.message }}
              </div>

              <form
                @submit="submitForm"
                v-if="!formStatus.submitted || !formStatus.success"
              >
                <div class="mb-4">
                  <label for="name" class="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    @focus="trackFieldInteraction('name')"
                    class="form-input"
                    :class="{ 'border-error': formStatus.errors.name }"
                    placeholder="Your name"
                    aria-required="true"
                  />
                  <p v-if="formStatus.errors.name" class="form-error">
                    {{ formStatus.errors.name }}
                  </p>
                </div>

                <div class="mb-4">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    @focus="trackFieldInteraction('email')"
                    class="form-input"
                    :class="{ 'border-error': formStatus.errors.email }"
                    placeholder="Your email"
                    aria-required="true"
                  />
                  <p v-if="formStatus.errors.email" class="form-error">
                    {{ formStatus.errors.email }}
                  </p>
                </div>

                <div class="mb-4">
                  <label for="company" class="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    v-model="formData.company"
                    @focus="trackFieldInteraction('company')"
                    class="form-input"
                    placeholder="Your company"
                  />
                </div>

                <div class="mb-4">
                  <label for="interest" class="form-label">Interested In</label>
                  <select
                    id="interest"
                    v-model="formData.interest"
                    @change="trackFieldInteraction('interest')"
                    class="form-input"
                  >
                    <option value="equity">Equity Partnership Model</option>
                    <option value="traditional">
                      Traditional Payment Model
                    </option>
                    <option value="undecided">Not Sure Yet</option>
                  </select>
                </div>

                <div class="mb-6">
                  <label for="message" class="form-label"
                    >Project Details</label
                  >
                  <textarea
                    id="message"
                    rows="4"
                    v-model="formData.message"
                    @focus="trackFieldInteraction('message')"
                    class="form-input"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="btn-primary w-full"
                  :disabled="formStatus.submitting"
                  aria-label="Submit contact form"
                >
                  <span v-if="formStatus.submitting">
                    <i class="fas fa-spinner fa-spin mr-2"></i> Submitting...
                  </span>
                  <span v-else>
                    Let's Talk <i class="fas fa-arrow-right ml-2"></i>
                  </span>
                </button>
              </form>

              <!-- Re-submit button after success -->
              <div
                v-if="formStatus.submitted && formStatus.success"
                class="text-center mt-4"
              >
                <button
                  @click="
                    () => {
                      formStatus.submitted = false;
                      analytics.trackEvent(
                        'Contact',
                        'form_restart',
                        'New submission'
                      );
                    }
                  "
                  class="btn-outline"
                >
                  <i class="fas fa-plus mr-2"></i> Submit Another Inquiry
                </button>
              </div>
            </div>
          </div>

          <div class="animate-on-scroll">
            <div class="bg-primary-700 p-8 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold text-white mb-6">
                Why Partner With Us?
              </h3>

              <div class="space-y-6">
                <div class="flex">
                  <div
                    class="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0"
                  >
                    <i class="fas fa-code text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Vue.js Specialists</h4>
                    <p class="text-primary-100">
                      Focused expertise in Vue 3, Nuxt, and the Vue ecosystem.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div
                    class="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0"
                  >
                    <i class="fas fa-chart-line text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Growth-Focused</h4>
                    <p class="text-primary-100">
                      We build with scalability and future expansion in mind.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div
                    class="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0"
                  >
                    <i class="fas fa-handshake text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">True Partnership</h4>
                    <p class="text-primary-100">
                      Our equity model means we're invested in your long-term
                      success.
                    </p>
                  </div>
                </div>

                <div class="flex">
                  <div
                    class="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0"
                  >
                    <i class="fas fa-users text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-white font-medium">Expert Team</h4>
                    <p class="text-primary-100">
                      Seasoned Vue developers, designers, and product
                      specialists.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-4 bg-primary-800 rounded-lg">
                <p class="text-primary-100 text-sm">
                  "Our equity partnership has helped over 20 startups launch
                  with minimal upfront costs while still getting
                  enterprise-quality Vue applications."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.animate-on-scroll {
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
  transition-delay: calc(var(--transition-order, 0) * 100ms);
  transform: translateY(20px);
}

.animate-fade-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Additional responsive adjustments */
@media (max-width: 640px) {
  .container-site {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
