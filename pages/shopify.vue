<template>
  <div class="min-h-screen">
    <!-- Enhanced Hero Section -->
    <section aria-labelledby="hero-title" class="relative bg-gradient-to-br from-accent-600 via-accent-700 to-accent-900 py-20 md:py-32 overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 overflow-hidden opacity-20">
        <div class="absolute -right-40 -top-40 w-96 h-96 bg-primary rounded-full animate-bounce-light"></div>
        <div class="absolute -left-20 top-1/2 w-80 h-80 bg-primary-light rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
        <div class="absolute right-1/4 -bottom-20 w-64 h-64 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 2s"></div>
      </div>

      <!-- Floating particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="absolute top-20 left-20 w-4 h-4 bg-primary-300 rounded-full animate-bounce-light" style="animation-delay: 0.5s"></div>
        <div class="absolute top-40 right-32 w-3 h-3 bg-primary-400 rounded-full animate-bounce-light" style="animation-delay: 1.5s"></div>
        <div class="absolute bottom-32 left-1/3 w-5 h-5 bg-accent-300 rounded-full animate-bounce-light" style="animation-delay: 2.5s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Badge with Emoji -->
          <span class="inline-flex items-center gap-2 bg-primary bg-opacity-20 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span class="text-lg">🛍️</span>
            Shopify Expertise
          </span>

          <h1 id="hero-title" class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up leading-tight">
            Professional Shopify
            <span class="block text-accent-200 animate-slide-up" style="animation-delay: 0.1s">Development Services</span>
          </h1>
          <p class="text-xl md:text-2xl text-accent-100 mb-8 animate-slide-up leading-relaxed" style="animation-delay: 0.2s">
            Elevate your e-commerce business with custom Shopify solutions that drive sales and deliver exceptional customer experiences.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-slide-up" style="animation-delay: 0.3s">
            <router-link
              to="/contact#contact-form"
              class="btn-primary bg-white text-accent-600 hover:bg-neutral-100 btn-lg transform hover:scale-105 transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              Start Your Project
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>
            <router-link to="/portfolio" class="btn-outline btn-lg text-white border-white hover:bg-white hover:text-accent-600 transform hover:scale-105 transition-all duration-300">
              Explore Our Work
            </router-link>
          </div>

          <!-- Enhanced trust indicators -->
          <div class="flex flex-wrap justify-center items-center gap-8 pt-12 animate-slide-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-3">
              <div class="bg-primary bg-opacity-20 rounded-full p-2">
                <svg class="h-6 w-6 text-primary-200" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Shopify Experts</div>
                <div class="text-xs text-accent-200">Certified Partners</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="bg-accent-300 bg-opacity-30 rounded-full p-2">
                <svg class="h-6 w-6 text-accent-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-white">Proven Results</div>
                <div class="text-xs text-accent-200">135% Average Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#FFFFFF" preserveAspectRatio="none" class="w-full h-20">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>

    <!-- Enhanced Why Shopify Section -->
    <section aria-labelledby="features-title" class="py-20 bg-gradient-to-br from-white via-neutral-cream to-primary-50 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 overflow-hidden opacity-5">
        <div class="absolute top-20 right-20 w-64 h-64 bg-accent rounded-full animate-bounce-light"></div>
        <div class="absolute bottom-20 left-20 w-48 h-48 bg-primary rounded-full animate-bounce-light" style="animation-delay: 1s"></div>
      </div>

      <div class="container-site px-4 sm:px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="inline-block bg-accent bg-opacity-20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            🏆 Platform Benefits
          </span>
          <h2 id="features-title" class="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Shopify?
          </h2>
          <p class="text-xl text-neutral-text max-w-3xl mx-auto leading-relaxed">
            Shopify is the leading e-commerce platform for businesses of all sizes. Here's why it's the perfect choice for your online store.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in shopifyFeatures"
            :key="index"
            class="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-neutral-100 text-center"
          >
            <div class="h-2 bg-gradient-to-r from-accent to-primary"></div>
            <div class="p-8">
              <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span class="text-3xl">{{ feature.icon }}</span>
              </div>
              <h3 class="text-2xl font-bold text-primary mb-4">{{ feature.title }}</h3>
              <p class="text-neutral-text leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Our Shopify Services</h2>
          <p class="max-w-content mx-auto">
            From store setup to custom theme development, we provide end-to-end
            Shopify solutions to help your e-commerce business thrive.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="card card-hover"
          >
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <span class="text-primary-600 text-xl">{{
                    service.icon
                  }}</span>
                </div>
                <h3 class="text-xl mb-0">{{ service.title }}</h3>
              </div>
              <p class="text-neutral-900 mb-4">{{ service.description }}</p>
              <ul class="mb-6">
                <li
                  v-for="(feature, fIndex) in service.features"
                  :key="fIndex"
                  class="flex items-start mb-2"
                >
                  <span class="text-accent-500 mr-2">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <button class="btn-outline w-full">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding bg-primary-600 text-neutral-cream">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2 class="text-neutral-cream">Benefits of Working With Us</h2>
          <p class="max-w-content mx-auto text-white">
            Here's why businesses choose us for their Shopify development needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="text-center"
          >
            <div
              class="bg-primary-500 p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16"
            >
              <span class="text-2xl text-neutral-cream">{{
                benefit.icon
              }}</span>
            </div>
            <h4 class="text-neutral-cream mb-2">{{ benefit.title }}</h4>
            <p class="text-primary-100">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="section-padding">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Shopify Development Packages</h2>
          <p class="max-w-content mx-auto">
            Choose the right Shopify development package for your business
            needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(plan, index) in plans"
            :key="index"
            :class="[
              'card',
              'card-hover',
              index === 1
                ? 'border-2 border-accent-500 relative transform md:-translate-y-4'
                : '',
            ]"
          >
            <div
              v-if="index === 1"
              class="bg-accent-500 text-center text-neutral-cream py-2 text-sm font-semibold"
            >
              MOST POPULAR
            </div>
            <div class="card-body text-center">
              <h3 class="mb-2">{{ plan.name }}</h3>
              <p class="text-neutral-600 mb-4">{{ plan.description }}</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-primary-600"
                  >${{ plan.price }}</span
                >
                <span class="text-neutral-500">{{ plan.billing }}</span>
              </div>
              <ul class="text-left mb-6">
                <li
                  v-for="(feature, fIndex) in plan.features"
                  :key="fIndex"
                  class="flex items-start mb-3"
                >
                  <span class="text-accent-500 mr-2">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <router-link
                to="/contact#contact-form"
                :class="[index === 1 ? 'btn-primary' : 'btn-outline', 'w-full']"
              >
                Get Started
              </router-link>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="mb-4">Need a custom Shopify solution?</p>
          <router-link to="/contact#contact-form" class="btn-secondary"
            >Request Custom Quote</router-link
          >
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="section-padding bg-primary-900 text-neutral-cream">
      <div class="container-site">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div v-for="(stat, index) in stats" :key="index">
            <div class="text-5xl font-bold text-accent-300 mb-2">
              {{ stat.value }}
            </div>
            <p class="text-lg text-white">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Frequently Asked Questions</h2>
          <p class="max-w-content mx-auto">
            Get answers to common questions about our Shopify development
            services.
          </p>
        </div>

        <div class="max-w-content mx-auto">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="mb-4 border border-neutral-200 rounded-lg overflow-hidden"
          >
            <div
              @click="toggleFaq(index)"
              class="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-neutral-50"
            >
              <h4 class="mb-0">{{ item.question }}</h4>
              <span class="text-xl">{{ item.open ? '−' : '+' }}</span>
            </div>
            <div
              v-if="item.open"
              class="p-4 bg-neutral-50 border-t border-neutral-200"
            >
              <p class="mb-0">{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-accent-600 text-neutral-cream">
      <div class="container-site">
        <div class="text-center max-w-content mx-auto">
          <h2 class="text-neutral-cream">
            Ready to Launch Your Shopify Store?
          </h2>
          <p class="mb-8">
            Let's work together to create a Shopify store that drives results
            for your business.
          </p>
          <router-link
            to="/contact#contact-form"
            class="btn-primary bg-neutral-cream text-accent-600 hover:bg-neutral-100 btn-lg"
          >
            Book a Free Strategy Call
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section-padding">
      <div class="">
        <div class="">
          <div class="text-center mb-8">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our Shopify services? Fill out the form
              below.
            </p>
          </div>

          <div class="">
            <div class="card-body">
              <!-- Inline lazy-loaded ContactForm -->
              <div ref="contactRoot" class="async-contact-form">
                <Suspense v-if="contactShouldLoad">
                  <template #default>
                    <AsyncContactForm :services="serviceOptions" />
                  </template>
                  <template #fallback>
                    <div
                      class="flex items-center justify-center py-16"
                      aria-busy="true"
                    >
                      <div
                        class="animate-spin h-8 w-8 border-4 border-primary-200 border-t-primary-500 rounded-full"
                      ></div>
                      <span class="sr-only">Loading contact form...</span>
                    </div>
                  </template>
                </Suspense>
                <noscript>
                  <p class="text-sm text-neutral-600">
                    Enable JavaScript to load the contact form.
                  </p>
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  defineAsyncComponent,
  watchEffect,
} from 'vue';
import { useSeo } from '~/composables/useSeo';

// SEO Setup
useSeo({
  title: 'Shopify Development Services | Professional E-Commerce Solutions',
  description:
    'Expert Shopify development services including custom themes, app development, store setup, and Shopify Plus solutions. Build your successful e-commerce store with us.',
  url: '/shopify',
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Shopify Development Services',
    description:
      'Professional Shopify e-commerce development and customization',
    provider: {
      '@type': 'Organization',
      name: 'Ottawa Webmasters',
    },
    serviceType: 'E-Commerce Development',
  },
});

// Async load of ContactForm (code split)
const AsyncContactForm = defineAsyncComponent(
  () => import('@/components/forms/ContactForm.vue')
);

const contactShouldLoad = ref(false);
const contactRoot = ref(null);
let contactObserver;

const contactLoadIfIntersecting = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactShouldLoad.value = true;
      if (contactObserver) contactObserver.disconnect();
    }
  });
};

onMounted(() => {
  if ('IntersectionObserver' in window) {
    contactObserver = new IntersectionObserver(contactLoadIfIntersecting, {
      rootMargin: '200px 0px',
    });
    if (contactRoot.value) contactObserver.observe(contactRoot.value);
  } else {
    contactShouldLoad.value = true;
  }
});

onBeforeUnmount(() => {
  if (contactObserver) contactObserver.disconnect();
});

if (process.client) {
  watchEffect(() => {
    if (!contactShouldLoad.value && contactRoot.value) {
      const rect = contactRoot.value.getBoundingClientRect();
      if (rect.top < window.innerHeight + 200) {
        contactShouldLoad.value = true;
        if (contactObserver) contactObserver.disconnect();
      }
    }
  });
}

// Shopify Features
const shopifyFeatures = ref([
  {
    icon: '🛒',
    title: 'Easy to Use',
    description:
      "Shopify's intuitive interface makes it easy to manage products, orders, and customers without technical expertise.",
  },
  {
    icon: '🚀',
    title: 'Scalable Platform',
    description:
      'From startups to enterprise businesses, Shopify scales with your business as you grow.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description:
      'Built-in security features and 99.99% uptime ensure your store is always safe and accessible.',
  },
  {
    icon: '🔌',
    title: 'App Ecosystem',
    description:
      "Extend your store's functionality with thousands of apps from the Shopify App Store.",
  },
  {
    icon: '📱',
    title: 'Mobile Responsive',
    description:
      'All Shopify themes are mobile-responsive out of the box, ensuring a seamless shopping experience.',
  },
  {
    icon: '💳',
    title: 'Payment Options',
    description:
      'Support for multiple payment gateways and Shopify Payments for reduced transaction fees.',
  },
]);

// Services data
const services = ref([
  {
    icon: '🏪',
    title: 'Shopify Store Setup',
    description:
      'Get your Shopify store up and running quickly with our professional setup service.',
    features: [
      'Store configuration & setup',
      'Product upload & organization',
      'Payment gateway integration',
      'Shipping & tax settings',
      'Basic theme customization',
      'Training & documentation',
    ],
  },
  {
    icon: '🎨',
    title: 'Custom Theme Development',
    description:
      'Stand out from the competition with a custom-designed Shopify theme that reflects your brand.',
    features: [
      'Custom design & development',
      'Mobile-responsive layouts',
      'Brand-aligned user experience',
      'Enhanced navigation & filters',
      'Optimized for conversions',
      'Performance optimization',
    ],
  },
  {
    icon: '🔌',
    title: 'Shopify App Development',
    description:
      "Custom Shopify apps to extend your store's functionality and streamline operations.",
    features: [
      'Custom app development',
      'Third-party integrations',
      'API development',
      'Automation solutions',
      'Data migration tools',
      'Technical documentation',
    ],
  },
  {
    icon: '🚀',
    title: 'Shopify Plus Migration',
    description:
      'Seamlessly migrate to Shopify Plus for enterprise-level features and scalability.',
    features: [
      'Seamless data migration',
      'Custom checkout experience',
      'Advanced integrations',
      'Workflow automation',
      'Multi-channel selling setup',
      'Staff training & support',
    ],
  },
]);

// Portfolio projects
const portfolio = ref([
  {
    name: 'ModernHome',
    category: 'Home Decor',
    description:
      'A custom Shopify store for a premium home decor brand featuring advanced filtering and a unique checkout experience.',
    tags: ['Shopify Plus', 'Custom Theme', 'Advanced Filtering', 'B2C'],
  },
  {
    name: 'AthleteGear',
    category: 'Sports Equipment',
    description:
      'An e-commerce platform for a sports equipment retailer with subscription options and a loyalty program.',
    tags: ['Subscription Model', 'Loyalty Program', 'Shopify Apps', 'B2C'],
  },
  {
    name: 'PureBeauty',
    category: 'Cosmetics',
    description:
      'A visually stunning Shopify store for a cosmetics brand featuring product quizzes and a virtual try-on experience.',
    tags: ['AR Try-On', 'Product Quiz', 'Custom Theme', 'B2C'],
  },
  {
    name: 'CraftSupply',
    category: 'Craft Materials',
    description:
      'A B2B Shopify store for a craft supply wholesaler with bulk ordering and tiered pricing.',
    tags: ['B2B', 'Wholesale', 'Bulk Ordering', 'Tiered Pricing'],
  },
  {
    name: 'TechGadgets',
    category: 'Electronics',
    description:
      'A high-volume Shopify store for a tech retailer featuring advanced product filtering and comparison tools.',
    tags: ['High Volume', 'Product Comparison', 'Advanced Search', 'B2C'],
  },
  {
    name: 'OrganicFoods',
    category: 'Food & Beverage',
    description:
      'A subscription-based Shopify store for an organic food delivery service with recurring delivery options.',
    tags: ['Subscription', 'Delivery Scheduling', 'Shopify Flow', 'B2C'],
  },
]);

// Benefits
const benefits = ref([
  {
    icon: '🏆',
    title: 'Shopify Experts',
    description:
      'Our team is certified by Shopify and has years of experience building successful online stores.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description:
      'We deliver projects on time without compromising on quality or attention to detail.',
  },
  {
    icon: '🔄',
    title: 'Ongoing Support',
    description:
      'We provide continuous support to ensure your store performs optimally after launch.',
  },
  {
    icon: '📈',
    title: 'Growth-Focused',
    description:
      'We build stores with conversion optimization and scalability in mind.',
  },
]);

// Pricing plans
const plans = ref([
  {
    name: 'Starter',
    description: 'For new businesses',
    price: '2,499',
    billing: 'one-time',
    features: [
      'Shopify store setup',
      'Premium theme customization',
      'Product upload (up to 50 products)',
      'Payment gateway integration',
      'Basic SEO setup',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Growth',
    description: 'For established businesses',
    price: '4,999',
    billing: 'one-time',
    features: [
      'Everything in Starter',
      'Custom theme development',
      'Product upload (up to 200 products)',
      'Advanced SEO optimization',
      'Email marketing integration',
      '60 days post-launch support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For scaling businesses',
    price: '9,999',
    billing: 'one-time',
    features: [
      'Everything in Growth',
      'Shopify Plus migration',
      'Custom app development',
      'ERP/CRM integration',
      'Conversion optimization',
      '90 days post-launch support',
    ],
  },
]);

// Testimonials
const testimonials = ref([
  {
    quote:
      'Our Shopify store has completely transformed our business. Sales have increased by 135% since launch, and the customer experience is fantastic.',
    name: 'Emily Rodriguez',
    business: 'BeautyEssentials.com',
    result: 'Sales increased by 135%',
  },
  {
    quote:
      'The team delivered our custom Shopify store ahead of schedule and under budget. Their attention to detail and focus on conversion optimization has been invaluable.',
    name: 'Mark Johnson',
    business: 'OutdoorGearPro.com',
    result: 'Conversion rate improved by 45%',
  },
  {
    quote:
      'Migrating our large inventory to Shopify Plus was a daunting task, but the process was seamless. Our new store is faster, more user-friendly, and much easier to manage.',
    name: 'Sophia Chen',
    business: 'FashionForward.com',
    result: 'Page load time reduced by 67%',
  },
]);

// Stats
const stats = ref([
  {
    value: '200+',
    label: 'Shopify Stores Launched',
  },
  {
    value: '95%',
    label: 'Client Satisfaction Rate',
  },
  {
    value: '45%',
    label: 'Avg. Conversion Increase',
  },
  {
    value: '24/7',
    label: 'Support & Maintenance',
  },
]);

// FAQs
const faqs = ref([
  {
    question: 'How long does it take to build a Shopify store?',
    answer: `The timeline for building a Shopify store depends on the complexity of your requirements. A basic store with theme customization can be completed in 2-3 weeks, while a custom-built store with advanced functionality may take 6-8 weeks. During our initial consultation, we'll provide you with a specific timeline based on your project scope.`,
    open: true,
  },
  {
    question: 'Do you offer Shopify maintenance services?',
    answer:
      'Yes, we offer ongoing Shopify maintenance services to keep your store running smoothly. Our maintenance plans include regular updates, security monitoring, performance optimization, and technical support. We can create a custom maintenance plan based on your specific needs.',
    open: false,
  },
  {
    question: 'Can you migrate my existing online store to Shopify?',
    answer:
      'Absolutely! We specialize in migrating online stores from platforms like WooCommerce, Magento, BigCommerce, and others to Shopify. Our migration process ensures that all your products, customers, orders, and content are transferred accurately with minimal disruption to your business.',
    open: false,
  },
  {
    question: 'Do I need Shopify Plus for my business?',
    answer:
      'Shopify Plus is designed for high-volume merchants and enterprise businesses. It offers additional features like customizable checkout, higher API limits, advanced automation with Shopify Flow, and dedicated support. During our consultation, we can assess your business needs and recommend whether Shopify Plus would be beneficial for your specific situation.',
    open: false,
  },
  {
    question: 'Can you help with Shopify SEO?',
    answer: `Yes, we provide comprehensive Shopify SEO services to help improve your store's visibility in search engines.Our SEO services include keyword research, on- page optimization, technical SEO, content strategy, and structured data implementation.We focus on sustainable SEO practices that drive organic traffic and conversions.`,
    open: false,
  },
]);

// Active testimonial for carousel
const activeTestimonial = ref(0);

// Service options for contact form
const serviceOptions = ref([
  'Shopify Store Setup',
  'Custom Theme Development',
  'Shopify App Development',
  'Shopify Plus Migration',
  'Shopify SEO',
  'Shopify Maintenance',
]);

// Methods
const toggleFaq = index => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
