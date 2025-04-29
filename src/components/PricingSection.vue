<script setup>
import { ref, computed } from "vue";

const platformToggle = ref("wordpress");
const pricingType = ref("development");

// Modified to remove specific price points and focus on features and tiers
const wordpressDevelopment = [
  {
    name: "Seedling Site",
    tier: "Basic",
    features: [
      "Single Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "SSL Certificate",
      "Contact Form Integration",
      "1 Round of Revisions",
    ],
    recommendedIcon: "🌱",
    iconBg: "bg-green-100",
  },
  {
    name: "Sprout Pro",
    tier: "Standard",
    features: [
      "Up to 5 Custom Pages",
      "Advanced Custom Design",
      "E-commerce Integration",
      "Advanced SEO Optimization",
      "Social Media Setup",
      "2 Rounds of Revisions",
    ],
    recommendedIcon: "🌿",
    iconBg: "bg-green-200",
  },
  {
    name: "Bloom Enterprise",
    tier: "Professional",
    features: [
      "Up to 10 Custom Pages",
      "Custom WordPress Development",
      "Advanced Custom Functionality",
      "Performance Optimization",
      "Content Strategy Consultation",
      "3 Rounds of Revisions",
      "Migration Assistance",
    ],
    recommended: true,
    recommendedIcon: "🌸",
    iconBg: "bg-green-300",
  },
  {
    name: "Grove Pro",
    tier: "Premium",
    features: [
      "Complex Custom WordPress Site",
      "Unlimited Pages",
      "Advanced Custom Integrations",
      "Enterprise-Level Security",
      "Custom Plugin Development",
      "Comprehensive SEO Strategy",
      "Dedicated Project Manager",
    ],
    recommendedIcon: "🌳",
    iconBg: "bg-green-400",
  },
  {
    name: "Forest Ecosystem",
    tier: "Enterprise",
    features: [
      "Full Custom Digital Ecosystem",
      "Multi-site WordPress Setup",
      "Advanced Custom Development",
      "Comprehensive Digital Strategy",
      "Custom API Integrations",
      "Ongoing Consultation",
      "Enterprise-Level Support",
    ],
    recommendedIcon: "🌲",
    iconBg: "bg-green-500",
  },
];

const wordpressMonthly = [
  {
    name: "Basic Care",
    tier: "Essential",
    features: [
      "Monthly Security Updates",
      "Basic Plugin Updates",
      "Emergency Support (2 hrs)",
      "Monthly Performance Check",
      "Basic Backup Services",
    ],
    recommendedIcon: "🌱",
    iconBg: "bg-green-100",
  },
  {
    name: "Growth Support",
    tier: "Standard",
    features: [
      "Comprehensive Plugin Updates",
      "Monthly Security Audit",
      "Content Updates (2 hrs)",
      "Performance Optimization",
      "Priority Support (4 hrs)",
      "Weekly Backup Services",
    ],
    recommendedIcon: "🌿",
    iconBg: "bg-green-200",
  },
  {
    name: "Pro Maintenance",
    tier: "Professional",
    features: [
      "Complete Site Management",
      "Advanced Security Monitoring",
      "Content Strategy Support",
      "Monthly Design Tweaks",
      "SEO Optimization",
      "Priority Support (6 hrs)",
      "Daily Backup Services",
    ],
    recommended: true,
    recommendedIcon: "🌸",
    iconBg: "bg-green-300",
  },
  {
    name: "Enterprise Guardian",
    tier: "Premium",
    features: [
      "Comprehensive Site Management",
      "Advanced Security & Compliance",
      "Dedicated Technical Manager",
      "Custom Feature Development",
      "Advanced Performance Monitoring",
      "Unlimited Support Hours",
      "Disaster Recovery Plan",
    ],
    recommendedIcon: "🌳",
    iconBg: "bg-green-400",
  },
  {
    name: "Full Ecosystem",
    tier: "Enterprise",
    features: [
      "Complete Digital Ecosystem Management",
      "Multi-site Coordination",
      "Strategic Digital Consulting",
      "Custom Integration Support",
      "Advanced Analytics Reporting",
      "Crisis Management",
      "24/7 Premium Support",
    ],
    recommendedIcon: "🌲",
    iconBg: "bg-green-500",
  },
];

const shopifyDevelopment = [
  {
    name: "Startup Launch",
    tier: "Basic",
    features: [
      "Basic Shopify Store Setup",
      "Up to 20 Products",
      "Mobile Responsive Design",
      "Payment Gateway Integration",
      "Basic Product Photography",
      "1 Round of Revisions",
    ],
    recommendedIcon: "⛵",
    iconBg: "bg-blue-100",
  },
  {
    name: "Merchant Voyage",
    tier: "Standard",
    features: [
      "Custom Shopify Design",
      "Up to 50 Products",
      "Advanced Product Variants",
      "Email Marketing Integration",
      "Custom Product Photography",
      "2 Rounds of Revisions",
    ],
    recommendedIcon: "🌊",
    iconBg: "bg-blue-200",
  },
  {
    name: "Commerce Explorer",
    tier: "Professional",
    features: [
      "Premium Shopify Store",
      "Up to 100 Products",
      "Advanced SEO Optimization",
      "Custom App Integration",
      "Conversion Rate Optimization",
      "3 Rounds of Revisions",
      "Migration Assistance",
    ],
    recommended: true,
    recommendedIcon: "🚢",
    iconBg: "bg-blue-300",
  },
  {
    name: "Retail Horizon",
    tier: "Premium",
    features: [
      "Enterprise E-commerce Solution",
      "Unlimited Products",
      "Advanced Custom Development",
      "Multi-channel Sales Integration",
      "Custom Checkout Experience",
      "Comprehensive Analytics Setup",
      "Dedicated Project Manager",
    ],
    recommendedIcon: "🌅",
    iconBg: "bg-blue-400",
  },
  {
    name: "Global Marketplace",
    tier: "Enterprise",
    features: [
      "Comprehensive E-commerce Ecosystem",
      "Multi-platform Integration",
      "Custom Marketplace Features",
      "Advanced Custom Integrations",
      "International Sales Setup",
      "Full Digital Strategy",
      "Enterprise-Level Support",
    ],
    recommendedIcon: "🌐",
    iconBg: "bg-blue-500",
  },
];

const shopifyMonthly = [
  {
    name: "Basic Store Care",
    tier: "Essential",
    features: [
      "Monthly Store Updates",
      "Basic App Maintenance",
      "Emergency Support (2 hrs)",
      "Monthly Performance Check",
      "Basic Backup Services",
    ],
    recommendedIcon: "⛵",
    iconBg: "bg-blue-100",
  },
  {
    name: "Merchant Support",
    tier: "Standard",
    features: [
      "Comprehensive App Updates",
      "Monthly Store Audit",
      "Product Update Support (2 hrs)",
      "Performance Optimization",
      "Priority Support (4 hrs)",
      "Weekly Backup Services",
    ],
    recommendedIcon: "🌊",
    iconBg: "bg-blue-200",
  },
  {
    name: "E-commerce Pro",
    tier: "Professional",
    features: [
      "Complete Store Management",
      "Advanced Performance Monitoring",
      "Marketing Strategy Support",
      "Monthly Design Refinements",
      "Conversion Optimization",
      "Priority Support (6 hrs)",
      "Daily Backup Services",
    ],
    recommended: true,
    recommendedIcon: "🚢",
    iconBg: "bg-blue-300",
  },
  {
    name: "Retail Guardian",
    tier: "Premium",
    features: [
      "Comprehensive Store Management",
      "Advanced Marketing Support",
      "Dedicated E-commerce Manager",
      "Custom Feature Development",
      "Advanced Analytics Reporting",
      "Unlimited Support Hours",
      "Conversion Strategy",
    ],
    recommendedIcon: "🌅",
    iconBg: "bg-blue-400",
  },
  {
    name: "Marketplace Master",
    tier: "Enterprise",
    features: [
      "Full E-commerce Ecosystem Management",
      "Multi-platform Coordination",
      "Strategic E-commerce Consulting",
      "Advanced Integration Support",
      "Comprehensive Growth Strategy",
      "Crisis Management",
      "24/7 Premium Support",
    ],
    recommendedIcon: "🌐",
    iconBg: "bg-blue-500",
  },
];

const currentPricing = computed(() => {
  if (platformToggle.value === "wordpress") {
    return pricingType.value === "development"
      ? wordpressDevelopment
      : wordpressMonthly;
  } else {
    return pricingType.value === "development"
      ? shopifyDevelopment
      : shopifyMonthly;
  }
});
</script>

<template>
  <section class="container-site section-padding bg-neutral-cream rounded-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
          Tailored Digital Solutions
        </h2>
        <p class="text-neutral-text max-w-2xl mx-auto mb-8">
          Every project is unique. Explore our service tiers and discover the
          perfect solution for your specific needs, goals, and budget. Contact
          us for a personalized quote tailored to your project.
        </p>

        <div
          class="flex flex-wrap gap-y-4 justify-center items-center mb-8 space-x-4"
        >
          <div class="inline-flex bg-white rounded-full p-1 shadow-sm mr-4">
            <button
              @click="platformToggle = 'wordpress'"
              :class="[
                'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
                platformToggle === 'wordpress'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-primary-50',
              ]"
            >
              WordPress
            </button>
            <button
              @click="platformToggle = 'shopify'"
              :class="[
                'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
                platformToggle === 'shopify'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary hover:bg-primary-50',
              ]"
            >
              Shopify
            </button>
          </div>

          <div class="inline-flex bg-white rounded-full p-1 shadow-sm">
            <button
              @click="pricingType = 'development'"
              :class="[
                'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
                pricingType === 'development'
                  ? 'bg-accent text-white'
                  : 'bg-white text-accent hover:bg-accent-50',
              ]"
            >
              Development
            </button>
            <button
              @click="pricingType = 'monthly'"
              :class="[
                'px-6 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-semibold',
                pricingType === 'monthly'
                  ? 'bg-accent text-white'
                  : 'bg-white text-accent hover:bg-accent-50',
              ]"
            >
              Maintenance
            </button>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(plan, index) in currentPricing"
            :key="index"
            class="pricing-card group"
          >
            <div class="card-content">
              <div class="card-header">
                <div :class="['icon-wrapper', plan.iconBg]">
                  <span class="text-3xl">{{ plan.recommendedIcon }}</span>
                </div>
                <h3 class="text-xl font-bold text-primary mt-4 mb-2">
                  {{ plan.name }}
                </h3>
                <div class="text-lg font-medium text-neutral-text mb-1">
                  {{ plan.tier }} Tier
                </div>
                <div class="custom-divider mx-auto mb-4"></div>

                <div v-if="plan.recommended" class="absolute top-4 right-4">
                  <span class="badge badge-primary">Most Popular</span>
                </div>
              </div>

              <div class="card-body">
                <ul class="text-left space-y-3 mb-6">
                  <li
                    v-for="(feature, featureIndex) in plan.features"
                    :key="featureIndex"
                    class="flex items-center text-sm"
                  >
                    <svg
                      class="w-5 h-5 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span class="truncate">{{ feature }}</span>
                  </li>
                </ul>

                <router-link to="/contact" class="btn-primary w-full mt-auto">
                  Get Custom Quote
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-primary mb-4">
            Need a Custom Solution?
          </h3>
          <p class="text-neutral-text mb-4">
            We understand that every business has unique requirements. Contact
            us for a personalized consultation and custom quote tailored
            specifically to your project needs.
          </p>
          <router-link to="/contact" class="btn-accent inline-block">
            Schedule a Consultation
          </router-link>
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

.custom-divider {
  @apply w-12 h-1 bg-accent rounded-full;
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
