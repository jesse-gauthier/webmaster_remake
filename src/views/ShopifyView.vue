<template>
  <div class="bg-neutral-cream min-h-screen">
    <!-- Hero Section -->
    <section class="bg-accent-600 text-neutral-cream py-20">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center">
          <h1 class="text-neutral-cream mb-6">Professional Shopify Development Services</h1>
          <p class="text-xl mb-8">Elevate your e-commerce business with custom Shopify solutions</p>
          <div class="flex justify-center gap-4">
            <button class="btn-primary bg-neutral-cream text-accent-600 hover:bg-neutral-100 btn-lg">Start Your
              Project</button>
            <button
              class="btn-outline border-neutral-cream text-neutral-cream hover:bg-accent-500 hover:border-accent-500">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Shopify Section -->
    <section class="section-padding">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Why Choose Shopify?</h2>
          <p class="max-w-content mx-auto">
            Shopify is the leading e-commerce platform for businesses of all sizes. Here's why it's
            the perfect choice for your online store.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(feature, index) in shopifyFeatures" :key="index" class="card card-hover">
            <div class="card-body text-center">
              <div class="bg-accent-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <div class="w-12 h-12 flex items-center justify-center text-accent-600">
                  <span class="text-3xl">{{ feature.icon }}</span>
                </div>
              </div>
              <h3 class="text-xl mb-3">{{ feature.title }}</h3>
              <p class="text-neutral-900">{{ feature.description }}</p>
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
            From store setup to custom theme development, we provide end-to-end Shopify solutions to
            help your e-commerce business thrive.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(service, index) in services" :key="index" class="card card-hover">
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <span class="text-primary-600 text-xl">{{ service.icon }}</span>
                </div>
                <h3 class="text-xl mb-0">{{ service.title }}</h3>
              </div>
              <p class="text-neutral-900 mb-4">{{ service.description }}</p>
              <ul class="mb-6">
                <li v-for="(feature, fIndex) in service.features" :key="fIndex" class="flex items-start mb-2">
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

    <!-- Portfolio Section -->
    <section class="section-padding">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Our Shopify Portfolio</h2>
          <p class="max-w-content mx-auto">
            Take a look at some of our recent Shopify store projects and the results we've achieved for our clients.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in portfolio" :key="index" class="card card-hover overflow-hidden">
            <div class="aspect-[16/9] bg-neutral-200">
              <!-- Project image placeholder - replace with actual images -->
              <div class="w-full h-48 bg-neutral-300 flex items-center justify-center">
                <span class="text-neutral-500">Project Image</span>
              </div>
            </div>
            <div class="card-body">
              <h4 class="mb-2">{{ project.name }}</h4>
              <p class="text-sm text-neutral-700 mb-3">{{ project.category }}</p>
              <p class="mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, tIndex) in project.tags" :key="tIndex" class="badge badge-light text-xs">
                  {{ tag }}
                </span>
              </div>
              <button class="btn-text mt-4 inline-flex items-center">
                View Case Study
                <span class="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <button class="btn-secondary">View All Projects</button>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section-padding bg-primary-600 text-neutral-cream">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2 class="text-neutral-cream">Benefits of Working With Us</h2>
          <p class="max-w-content mx-auto">
            Here's why businesses choose us for their Shopify development needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(benefit, index) in benefits" :key="index" class="text-center">
            <div class="bg-primary-500 p-4 rounded-full inline-flex items-center justify-center mb-4 w-16 h-16">
              <span class="text-2xl text-neutral-cream">{{ benefit.icon }}</span>
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
            Choose the right Shopify development package for your business needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(plan, index) in plans" :key="index"
            :class="['card', 'card-hover', index === 1 ? 'border-2 border-accent-500 relative transform md:-translate-y-4' : '']">
            <div v-if="index === 1" class="bg-accent-500 text-center text-neutral-cream py-2 text-sm font-semibold">
              MOST POPULAR
            </div>
            <div class="card-body text-center">
              <h3 class="mb-2">{{ plan.name }}</h3>
              <p class="text-neutral-600 mb-4">{{ plan.description }}</p>
              <div class="mb-6">
                <span class="text-4xl font-bold text-primary-600">${{ plan.price }}</span>
                <span class="text-neutral-500">{{ plan.billing }}</span>
              </div>
              <ul class="text-left mb-6">
                <li v-for="(feature, fIndex) in plan.features" :key="fIndex" class="flex items-start mb-3">
                  <span class="text-accent-500 mr-2">✓</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              <button :class="[index === 1 ? 'btn-primary' : 'btn-outline', 'w-full']">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="mb-4">Need a custom Shopify solution?</p>
          <button class="btn-secondary">Request Custom Quote</button>
        </div>
      </div>
    </section>

    <!-- Testimonials Carousel -->
    <section class="section-padding bg-accent-50">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>What Our Clients Say</h2>
          <p class="max-w-content mx-auto">
            Here's what store owners have to say about our Shopify development services.
          </p>
        </div>

        <!-- Simple Testimonial Carousel -->
        <div class="max-w-content mx-auto">
          <div class="card p-8">
            <div v-for="(testimonial, index) in testimonials" :key="index" v-show="activeTestimonial === index">
              <div class="mb-6">
                <div class="flex mb-4">
                  <div v-for="i in 5" :key="i" class="text-warning mr-1">★</div>
                </div>
                <p class="text-lg italic mb-6">"{{ testimonial.quote }}"</p>
                <div class="flex items-center">
                  <div class="w-16 h-16 bg-neutral-200 rounded-full mr-4"></div>
                  <div>
                    <h5 class="mb-0">{{ testimonial.name }}</h5>
                    <p class="text-accent-600 mb-0">{{ testimonial.business }}</p>
                    <p class="text-sm text-neutral-500 mb-0">{{ testimonial.result }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Carousel Controls -->
            <div class="flex justify-center mt-6">
              <button v-for="(_, index) in testimonials" :key="index"
                :class="['w-3 h-3 rounded-full mx-1', activeTestimonial === index ? 'bg-accent-500' : 'bg-neutral-300']"
                @click="activeTestimonial = index"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="section-padding bg-primary-900 text-neutral-cream">
      <div class="container-site">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in stats" :key="index">
            <div class="text-5xl font-bold text-accent-300 mb-2">{{ stat.value }}</div>
            <p class="text-lg">{{ stat.label }}</p>
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
            Get answers to common questions about our Shopify development services.
          </p>
        </div>

        <div class="max-w-content mx-auto">
          <div v-for="(item, index) in faqs" :key="index"
            class="mb-4 border border-neutral-200 rounded-lg overflow-hidden">
            <div @click="toggleFaq(index)"
              class="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-neutral-50">
              <h4 class="mb-0">{{ item.question }}</h4>
              <span class="text-xl">{{ item.open ? '−' : '+' }}</span>
            </div>
            <div v-if="item.open" class="p-4 bg-neutral-50 border-t border-neutral-200">
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
          <h2 class="text-neutral-cream">Ready to Launch Your Shopify Store?</h2>
          <p class="mb-8">
            Let's work together to create a Shopify store that drives results for your business.
          </p>
          <button class="btn-primary bg-neutral-cream text-accent-600 hover:bg-neutral-100 btn-lg">
            Book a Free Strategy Call
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="section-padding">
      <div class="container-site">
        <div class="max-w-form mx-auto">
          <div class="text-center mb-8">
            <h2>Get in Touch</h2>
            <p>Have questions about our Shopify services? Fill out the form below.</p>
          </div>

          <div class="card">
            <div class="card-body">
              <!-- Using the imported ContactForm component -->
              <ContactForm :services="serviceOptions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContactForm from '@/components/ContactForm.vue';

// Shopify Features
const shopifyFeatures = ref([
  {
    icon: '🛒',
    title: 'Easy to Use',
    description: "Shopify's intuitive interface makes it easy to manage products, orders, and customers without technical expertise."
  },
  {
    icon: '🚀',
    title: 'Scalable Platform',
    description: 'From startups to enterprise businesses, Shopify scales with your business as you grow.'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Built-in security features and 99.99% uptime ensure your store is always safe and accessible.'
  },
  {
    icon: '🔌',
    title: 'App Ecosystem',
    description: 'Extend your store\'s functionality with thousands of apps from the Shopify App Store.'
  },
  {
    icon: '📱',
    title: 'Mobile Responsive',
    description: 'All Shopify themes are mobile-responsive out of the box, ensuring a seamless shopping experience.'
  },
  {
    icon: '💳',
    title: 'Payment Options',
    description: 'Support for multiple payment gateways and Shopify Payments for reduced transaction fees.'
  }
]);

// Services data
const services = ref([
  {
    icon: '🏪',
    title: 'Shopify Store Setup',
    description: 'Get your Shopify store up and running quickly with our professional setup service.',
    features: [
      'Store configuration & setup',
      'Product upload & organization',
      'Payment gateway integration',
      'Shipping & tax settings',
      'Basic theme customization',
      'Training & documentation'
    ]
  },
  {
    icon: '🎨',
    title: 'Custom Theme Development',
    description: 'Stand out from the competition with a custom-designed Shopify theme that reflects your brand.',
    features: [
      'Custom design & development',
      'Mobile-responsive layouts',
      'Brand-aligned user experience',
      'Enhanced navigation & filters',
      'Optimized for conversions',
      'Performance optimization'
    ]
  },
  {
    icon: '🔌',
    title: 'Shopify App Development',
    description: "Custom Shopify apps to extend your store's functionality and streamline operations.",
    features: [
      'Custom app development',
      'Third-party integrations',
      'API development',
      'Automation solutions',
      'Data migration tools',
      'Technical documentation'
    ]
  },
  {
    icon: '🚀',
    title: 'Shopify Plus Migration',
    description: 'Seamlessly migrate to Shopify Plus for enterprise-level features and scalability.',
    features: [
      'Seamless data migration',
      'Custom checkout experience',
      'Advanced integrations',
      'Workflow automation',
      'Multi-channel selling setup',
      'Staff training & support'
    ]
  }
]);

// Portfolio projects
const portfolio = ref([
  {
    name: 'ModernHome',
    category: 'Home Decor',
    description: 'A custom Shopify store for a premium home decor brand featuring advanced filtering and a unique checkout experience.',
    tags: ['Shopify Plus', 'Custom Theme', 'Advanced Filtering', 'B2C']
  },
  {
    name: 'AthleteGear',
    category: 'Sports Equipment',
    description: 'An e-commerce platform for a sports equipment retailer with subscription options and a loyalty program.',
    tags: ['Subscription Model', 'Loyalty Program', 'Shopify Apps', 'B2C']
  },
  {
    name: 'PureBeauty',
    category: 'Cosmetics',
    description: 'A visually stunning Shopify store for a cosmetics brand featuring product quizzes and a virtual try-on experience.',
    tags: ['AR Try-On', 'Product Quiz', 'Custom Theme', 'B2C']
  },
  {
    name: 'CraftSupply',
    category: 'Craft Materials',
    description: 'A B2B Shopify store for a craft supply wholesaler with bulk ordering and tiered pricing.',
    tags: ['B2B', 'Wholesale', 'Bulk Ordering', 'Tiered Pricing']
  },
  {
    name: 'TechGadgets',
    category: 'Electronics',
    description: 'A high-volume Shopify store for a tech retailer featuring advanced product filtering and comparison tools.',
    tags: ['High Volume', 'Product Comparison', 'Advanced Search', 'B2C']
  },
  {
    name: 'OrganicFoods',
    category: 'Food & Beverage',
    description: 'A subscription-based Shopify store for an organic food delivery service with recurring delivery options.',
    tags: ['Subscription', 'Delivery Scheduling', 'Shopify Flow', 'B2C']
  }
]);

// Benefits
const benefits = ref([
  {
    icon: '🏆',
    title: 'Shopify Experts',
    description: 'Our team is certified by Shopify and has years of experience building successful online stores.'
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'We deliver projects on time without compromising on quality or attention to detail.'
  },
  {
    icon: '🔄',
    title: 'Ongoing Support',
    description: 'We provide continuous support to ensure your store performs optimally after launch.'
  },
  {
    icon: '📈',
    title: 'Growth-Focused',
    description: 'We build stores with conversion optimization and scalability in mind.'
  }
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
      '30 days post-launch support'
    ]
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
      '60 days post-launch support'
    ]
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
      '90 days post-launch support'
    ]
  }
]);

// Testimonials
const testimonials = ref([
  {
    quote: 'Our Shopify store has completely transformed our business. Sales have increased by 135% since launch, and the customer experience is fantastic.',
    name: 'Emily Rodriguez',
    business: 'BeautyEssentials.com',
    result: 'Sales increased by 135%'
  },
  {
    quote: 'The team delivered our custom Shopify store ahead of schedule and under budget. Their attention to detail and focus on conversion optimization has been invaluable.',
    name: 'Mark Johnson',
    business: 'OutdoorGearPro.com',
    result: 'Conversion rate improved by 45%'
  },
  {
    quote: 'Migrating our large inventory to Shopify Plus was a daunting task, but the process was seamless. Our new store is faster, more user-friendly, and much easier to manage.',
    name: 'Sophia Chen',
    business: 'FashionForward.com',
    result: 'Page load time reduced by 67%'
  }
]);

// Stats
const stats = ref([
  {
    value: '200+',
    label: 'Shopify Stores Launched'
  },
  {
    value: '95%',
    label: 'Client Satisfaction Rate'
  },
  {
    value: '45%',
    label: 'Avg. Conversion Increase'
  },
  {
    value: '24/7',
    label: 'Support & Maintenance'
  }
]);

// FAQs
const faqs = ref([
  {
    question: 'How long does it take to build a Shopify store?',
    answer: `The timeline for building a Shopify store depends on the complexity of your requirements. A basic store with theme customization can be completed in 2-3 weeks, while a custom-built store with advanced functionality may take 6-8 weeks. During our initial consultation, we'll provide you with a specific timeline based on your project scope.`,
    open: true
  },
  {
    question: 'Do you offer Shopify maintenance services?',
    answer: 'Yes, we offer ongoing Shopify maintenance services to keep your store running smoothly. Our maintenance plans include regular updates, security monitoring, performance optimization, and technical support. We can create a custom maintenance plan based on your specific needs.',
    open: false
  },
  {
    question: 'Can you migrate my existing online store to Shopify?',
    answer: 'Absolutely! We specialize in migrating online stores from platforms like WooCommerce, Magento, BigCommerce, and others to Shopify. Our migration process ensures that all your products, customers, orders, and content are transferred accurately with minimal disruption to your business.',
    open: false
  },
  {
    question: 'Do I need Shopify Plus for my business?',
    answer: 'Shopify Plus is designed for high-volume merchants and enterprise businesses. It offers additional features like customizable checkout, higher API limits, advanced automation with Shopify Flow, and dedicated support. During our consultation, we can assess your business needs and recommend whether Shopify Plus would be beneficial for your specific situation.',
    open: false
  },
  {
    question: 'Can you help with Shopify SEO?',
    answer: `Yes, we provide comprehensive Shopify SEO services to help improve your store's visibility in search engines.Our SEO services include keyword research, on- page optimization, technical SEO, content strategy, and structured data implementation.We focus on sustainable SEO practices that drive organic traffic and conversions.`,
    open: false
  }
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
  'Shopify Maintenance'
]);

// Methods
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
