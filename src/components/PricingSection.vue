<script setup>
import { ref, computed } from 'vue'

const platformToggle = ref('wordpress')
const pricingType = ref('development')

const wordpressDevelopment = [
  {
    name: 'Seedling Site',
    upfrontCost: 1499,
    features: [
      'Single Page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'SSL Certificate',
      'Contact Form Integration',
      '1 Round of Revisions'
    ],
    recommendedIcon: '🌱',
    iconBg: 'bg-green-100'
  },
  {
    name: 'Sprout Pro',
    upfrontCost: 2999,
    features: [
      'Up to 5 Custom Pages',
      'Advanced Custom Design',
      'E-commerce Integration',
      'Advanced SEO Optimization',
      'Social Media Setup',
      '2 Rounds of Revisions'
    ],
    recommendedIcon: '🌿',
    iconBg: 'bg-green-200'
  },
  {
    name: 'Bloom Enterprise',
    upfrontCost: 4999,
    features: [
      'Up to 10 Custom Pages',
      'Custom WordPress Development',
      'Advanced Custom Functionality',
      'Performance Optimization',
      'Content Strategy Consultation',
      '3 Rounds of Revisions',
      'Migration Assistance'
    ],
    recommended: true,
    recommendedIcon: '🌸',
    iconBg: 'bg-green-300'
  },
  {
    name: 'Grove Pro',
    upfrontCost: 7999,
    features: [
      'Complex Custom WordPress Site',
      'Unlimited Pages',
      'Advanced Custom Integrations',
      'Enterprise-Level Security',
      'Custom Plugin Development',
      'Comprehensive SEO Strategy',
      'Dedicated Project Manager'
    ],
    recommendedIcon: '🌳',
    iconBg: 'bg-green-400'
  },
  {
    name: 'Forest Ecosystem',
    upfrontCost: 12999,
    features: [
      'Full Custom Digital Ecosystem',
      'Multi-site WordPress Setup',
      'Advanced Custom Development',
      'Comprehensive Digital Strategy',
      'Custom API Integrations',
      'Ongoing Consultation',
      'Enterprise-Level Support'
    ],
    recommendedIcon: '🌲',
    iconBg: 'bg-green-500'
  }
]

const wordpressMonthly = [
  {
    name: 'Basic Care',
    monthlyCost: 79,
    features: [
      'Monthly Security Updates',
      'Basic Plugin Updates',
      'Emergency Support (2 hrs)',
      'Monthly Performance Check',
      'Basic Backup Services'
    ],
    recommendedIcon: '🌱',
    iconBg: 'bg-green-100'
  },
  {
    name: 'Growth Support',
    monthlyCost: 149,
    features: [
      'Comprehensive Plugin Updates',
      'Monthly Security Audit',
      'Content Updates (2 hrs)',
      'Performance Optimization',
      'Priority Support (4 hrs)',
      'Weekly Backup Services'
    ],
    recommendedIcon: '🌿',
    iconBg: 'bg-green-200'
  },
  {
    name: 'Pro Maintenance',
    monthlyCost: 249,
    features: [
      'Complete Site Management',
      'Advanced Security Monitoring',
      'Content Strategy Support',
      'Monthly Design Tweaks',
      'SEO Optimization',
      'Priority Support (6 hrs)',
      'Daily Backup Services'
    ],
    recommended: true,
    recommendedIcon: '🌸',
    iconBg: 'bg-green-300'
  },
  {
    name: 'Enterprise Guardian',
    monthlyCost: 399,
    features: [
      'Comprehensive Site Management',
      'Advanced Security & Compliance',
      'Dedicated Technical Manager',
      'Custom Feature Development',
      'Advanced Performance Monitoring',
      'Unlimited Support Hours',
      'Disaster Recovery Plan'
    ],
    recommendedIcon: '🌳',
    iconBg: 'bg-green-400'
  },
  {
    name: 'Full Ecosystem',
    monthlyCost: 599,
    features: [
      'Complete Digital Ecosystem Management',
      'Multi-site Coordination',
      'Strategic Digital Consulting',
      'Custom Integration Support',
      'Advanced Analytics Reporting',
      'Crisis Management',
      '24/7 Premium Support'
    ],
    recommendedIcon: '🌲',
    iconBg: 'bg-green-500'
  }
]

const shopifyDevelopment = [
  {
    name: 'Startup Launch',
    upfrontCost: 1799,
    features: [
      'Basic Shopify Store Setup',
      'Up to 20 Products',
      'Mobile Responsive Design',
      'Payment Gateway Integration',
      'Basic Product Photography',
      '1 Round of Revisions'
    ],
    recommendedIcon: '⛵',
    iconBg: 'bg-blue-100'
  },
  {
    name: 'Merchant Voyage',
    upfrontCost: 3499,
    features: [
      'Custom Shopify Design',
      'Up to 50 Products',
      'Advanced Product Variants',
      'Email Marketing Integration',
      'Custom Product Photography',
      '2 Rounds of Revisions'
    ],
    recommendedIcon: '🌊',
    iconBg: 'bg-blue-200'
  },
  {
    name: 'Commerce Explorer',
    upfrontCost: 5999,
    features: [
      'Premium Shopify Store',
      'Up to 100 Products',
      'Advanced SEO Optimization',
      'Custom App Integration',
      'Conversion Rate Optimization',
      '3 Rounds of Revisions',
      'Migration Assistance'
    ],
    recommended: true,
    recommendedIcon: '🚢',
    iconBg: 'bg-blue-300'
  },
  {
    name: 'Retail Horizon',
    upfrontCost: 8999,
    features: [
      'Enterprise E-commerce Solution',
      'Unlimited Products',
      'Advanced Custom Development',
      'Multi-channel Sales Integration',
      'Custom Checkout Experience',
      'Comprehensive Analytics Setup',
      'Dedicated Project Manager'
    ],
    recommendedIcon: '🌅',
    iconBg: 'bg-blue-400'
  },
  {
    name: 'Global Marketplace',
    upfrontCost: 14999,
    features: [
      'Comprehensive E-commerce Ecosystem',
      'Multi-platform Integration',
      'Custom Marketplace Features',
      'Advanced Custom Integrations',
      'International Sales Setup',
      'Full Digital Strategy',
      'Enterprise-Level Support'
    ],
    recommendedIcon: '🌐',
    iconBg: 'bg-blue-500'
  }
]

const shopifyMonthly = [
  {
    name: 'Basic Store Care',
    monthlyCost: 99,
    features: [
      'Monthly Store Updates',
      'Basic App Maintenance',
      'Emergency Support (2 hrs)',
      'Monthly Performance Check',
      'Basic Backup Services'
    ],
    recommendedIcon: '⛵',
    iconBg: 'bg-blue-100'
  },
  {
    name: 'Merchant Support',
    monthlyCost: 199,
    features: [
      'Comprehensive App Updates',
      'Monthly Store Audit',
      'Product Update Support (2 hrs)',
      'Performance Optimization',
      'Priority Support (4 hrs)',
      'Weekly Backup Services'
    ],
    recommendedIcon: '🌊',
    iconBg: 'bg-blue-200'
  },
  {
    name: 'E-commerce Pro',
    monthlyCost: 299,
    features: [
      'Complete Store Management',
      'Advanced Performance Monitoring',
      'Marketing Strategy Support',
      'Monthly Design Refinements',
      'Conversion Optimization',
      'Priority Support (6 hrs)',
      'Daily Backup Services'
    ],
    recommended: true,
    recommendedIcon: '🚢',
    iconBg: 'bg-blue-300'
  },
  {
    name: 'Retail Guardian',
    monthlyCost: 499,
    features: [
      'Comprehensive Store Management',
      'Advanced Marketing Support',
      'Dedicated E-commerce Manager',
      'Custom Feature Development',
      'Advanced Analytics Reporting',
      'Unlimited Support Hours',
      'Conversion Strategy'
    ],
    recommendedIcon: '🌅',
    iconBg: 'bg-blue-400'
  },
  {
    name: 'Marketplace Master',
    monthlyCost: 699,
    features: [
      'Full E-commerce Ecosystem Management',
      'Multi-platform Coordination',
      'Strategic E-commerce Consulting',
      'Advanced Integration Support',
      'Comprehensive Growth Strategy',
      'Crisis Management',
      '24/7 Premium Support'
    ],
    recommendedIcon: '🌐',
    iconBg: 'bg-blue-500'
  }
]

const currentPricing = computed(() => {
  if (platformToggle.value === 'wordpress') {
    return pricingType.value === 'development' ? wordpressDevelopment : wordpressMonthly
  } else {
    return pricingType.value === 'development' ? shopifyDevelopment : shopifyMonthly
  }
})
</script>

<template>
  <section class="container-site section-padding bg-neutral-cream rounded-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
          Tailored Digital Solutions
        </h2>
        <p class="text-neutral-text max-w-2xl mx-auto mb-8">
          Choose between our comprehensive development packages or ongoing monthly maintenance plans. We've got the
          right solution for every stage of your digital journey.
        </p>

        <div class="flex flex-wrap gap-y-4 justify-center items-center mb-8 space-x-4">
          <div class="inline-flex bg-white rounded-full p-1 shadow-sm mr-4">
            <button @click="platformToggle = 'wordpress'" :class="[
              'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
              platformToggle === 'wordpress'
                ? 'bg-primary text-white'
                : 'bg-white text-primary hover:bg-primary-50'
            ]">
              WordPress
            </button>
            <button @click="platformToggle = 'shopify'" :class="[
              'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
              platformToggle === 'shopify'
                ? 'bg-primary text-white'
                : 'bg-white text-primary hover:bg-primary-50'
            ]">
              Shopify
            </button>
          </div>

          <div class="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button @click="pricingType = 'development'" :class="[
              'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
              pricingType === 'development'
                ? 'bg-accent text-white'
                : 'bg-white text-accent hover:bg-accent-50'
            ]">
              Upfront
            </button>
            <button @click="pricingType = 'monthly'" :class="[
              'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
              pricingType === 'monthly'
                ? 'bg-accent text-white'
                : 'bg-white text-accent hover:bg-accent-50'
            ]">
              Monthly
            </button>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(plan, index) in currentPricing" :key="index" class="pricing-card group">
            <div class="card-content">
              <div class="card-header">
                <div :class="['icon-wrapper', plan.iconBg]">
                  <span class="text-3xl">{{ plan.recommendedIcon }}</span>
                </div>
                <h3 class="text-xl font-bold text-primary mt-4 mb-2">
                  {{ plan.name }}
                </h3>
                <div class="text-4xl font-bold text-accent mb-4">
                  <template v-if="pricingType === 'development'">
                    ${{ plan.upfrontCost }}

                  </template>
                  <template v-else>
                    ${{ plan.monthlyCost }}
                    <span class="text-base text-neutral-text">/mo</span>
                  </template>
                </div>

                <div v-if="plan.recommended" class="absolute top-4 right-4">
                  <span class="badge badge-primary">Best Value</span>
                </div>
              </div>

              <div class="card-body">
                <ul class="text-left space-y-3 mb-6">
                  <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                    class="flex items-center text-sm">
                    <svg class="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="truncate">{{ feature }}</span>
                  </li>
                </ul>

                <router-link to="/new-client-form" class="btn-primary w-full mt-auto">
                  {{ pricingType === 'development' ? 'Start Project' : 'Subscribe' }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  @apply bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative;
}

.card-content {
  @apply flex flex-col h-full;
}

.card-header {
  @apply p-6 pb-0 relative z-10;
}

.icon-wrapper {
  @apply w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md transition-all duration-300 group-hover:scale-110;
}

.card-body {
  @apply p-6 pt-0 flex flex-col flex-grow;
}

/* Recommended Plan Highlight */
.pricing-card[data-recommended="true"] {
  @apply border-2 border-accent-light;
}

.pricing-card[data-recommended="true"] .card-header {
  @apply bg-accent-50;
}

/* Feature List Styling */
.card-body ul li {
  @apply border-b border-neutral-100 last:border-b-0 py-2;
}

.card-body ul li svg {
  @apply transition-colors duration-300 group-hover:text-accent;
}

/* Button Hover Effects */
.card-body button {
  @apply transition-all duration-300 ease-in-out;
}

.card-body button:hover {
  @apply transform scale-105 shadow-md;
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .pricing-card {
    @apply transform-none hover:shadow-lg;
  }

  .icon-wrapper {
    @apply w-12 h-12;
  }
}

/* Animation for Card Entrance */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pricing-card {
  animation: fadeInUp 0.5s ease-out;
  animation-fill-mode: backwards;
}

.pricing-card:nth-child(1) {
  animation-delay: 0.1s;
}

.pricing-card:nth-child(2) {
  animation-delay: 0.2s;
}

.pricing-card:nth-child(3) {
  animation-delay: 0.3s;
}

.pricing-card:nth-child(4) {
  animation-delay: 0.4s;
}

.pricing-card:nth-child(5) {
  animation-delay: 0.5s;
}
</style>
