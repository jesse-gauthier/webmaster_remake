<template>
  <div>
    <!-- Hero Section -->
    <section aria-labelledby="services-hero-title" class="bg-primary-light py-16 md:py-24">
      <div class="container-site px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <h1 id="services-hero-title" class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Expert Web Services for Your Business
            </h1>
            <p class="text-lg text-neutral-text mb-8">
              From design to development, e-commerce to maintenance, we provide comprehensive web solutions
              to help your business thrive online.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/contact" class="btn-primary">
                Request a Consultation
              </router-link>
              <router-link to="/portfolio" class="btn-outline">
                View Our Work
              </router-link>
            </div>
          </div>
          <!-- Updated container for SVG with proper aspect ratio -->
          <div class="order-1 md:order-2">
            <div class="relative">
              <div class="bg-white rounded-lg shadow-lg p-6 md:p-8 relative z-10">
                <!-- Container with preserved aspect ratio -->
                <div class="aspect-square w-full max-w-md mx-auto">
                  <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    xml:space="preserve">
                    <!-- Desktop Monitor -->
                    <path
                      d="M0,304.112V28.56c0-4.896,4.184-8.888,9.288-8.888h436.536c5.104,0,9.288,4,9.288,8.888v275.552H0z"
                      fill="#2E5944" />

                    <!-- Monitor Stand -->
                    <path
                      d="M455.112,304.112v37.92c0,5.216-4.184,9.488-9.288,9.488H9.288C4.184,351.528,0,347.256,0,342.048 v-37.92L455.112,304.112z"
                      fill="#1B3D2F" />
                    <polygon points="161.184,417.896 293.92,417.896 284.448,351.528 170.664,351.528" fill="#8EAE9D" />
                    <polygon points="284.448,351.528 170.664,351.528 164.76,392.888 286.656,366.992" fill="#5E8F77" />
                    <rect x="128" y="417.92" width="199.112" height="9.48" fill="#1B3D2F" />

                    <!-- Desktop Screen Content -->
                    <rect x="20" y="40" width="415.112" height="244" rx="4" fill="#F7F3E8" />

                    <!-- Top Screen Sections -->
                    <rect x="55.512" y="59.144" width="156.104" height="88.8" fill="#D1E1D7" rx="4" />
                    <rect x="243.496" y="59.144" width="156.104" height="88.8" fill="#D1E1D7" rx="4" />

                    <!-- Bottom Screen Sections -->
                    <rect x="55.512" y="175.848" width="156.104" height="88.8" fill="#4292AC" rx="4" />
                    <rect x="243.496" y="175.848" width="156.104" height="88.8" fill="#4292AC" rx="4" />

                    <!-- Mobile Device -->
                    <path
                      d="M503.216,492.328H356.8c-4.832,0-8.784-3.952-8.784-8.784V208.28c0-4.832,3.952-8.784,8.784-8.784h146.416 c4.832,0,8.784,3.952,8.784,8.784v275.264C512,488.376,508.048,492.328,503.216,492.328z"
                      fill="#2E5944" />

                    <!-- Mobile Screen -->
                    <rect x="356.8" y="222.928" width="146.416" height="234.24" rx="4" fill="#F7F3E8" />

                    <!-- Mobile Device Details -->
                    <path
                      d="M447.424,214.136h-35.136c-1.608,0-2.928-1.32-2.928-2.928 c0-1.608,1.32-2.928,2.928-2.928 h35.136c1.608,0,2.928,1.32,2.928,2.928C450.352,212.824,449.032,214.136,447.424,214.136z"
                      fill="#B4CCC0" />
                    <path
                      d="M447.576,474.76H412.44c-1.608,0-2.928-1.32-2.928-2.928 c0-1.608,1.32-2.928,2.928-2.928h35.136 c1.608,0,2.928,1.32,2.928,2.928C450.504,473.44,449.184,474.76,447.576,474.76z"
                      fill="#B4CCC0" />

                    <!-- Mobile App Grid -->
                    <rect x="374.376" y="243.848" width="50.344" height="46.76" rx="8" fill="#D1E1D7" />
                    <rect x="435.28" y="243.848" width="50.344" height="46.76" rx="8" fill="#D1E1D7" />
                    <rect x="374.376" y="302.184" width="50.344" height="46.76" rx="8" fill="#4292AC" />
                    <rect x="435.28" y="302.184" width="50.344" height="46.76" rx="8" fill="#4292AC" />

                    <!-- Mobile Text Content -->
                    <rect x="374.376" y="431.528" width="111.272" height="4.744" rx="2" fill="#5E8F77" />
                    <rect x="374.376" y="412.92" width="111.272" height="4.744" rx="2" fill="#5E8F77" />
                    <rect x="374.376" y="394.32" width="111.272" height="4.744" rx="2" fill="#5E8F77" />
                    <rect x="374.376" y="375.712" width="111.272" height="4.744" rx="2" fill="#5E8F77" />

                    <!-- Web Elements Overlay -->
                    <!-- Code brackets for desktop -->
                    <path d="M105,85 L85,110 L105,135" stroke="#2E5944" stroke-width="3" fill="none"
                      stroke-linecap="round" />
                    <path d="M155,85 L175,110 L155,135" stroke="#2E5944" stroke-width="3" fill="none"
                      stroke-linecap="round" />

                    <!-- Menu icons for desktop -->
                    <path d="M270,85 L370,85 M270,100 L340,100 M270,115 L355,115" stroke="#2E5944" stroke-width="3"
                      stroke-linecap="round" />

                    <!-- Circle elements for mobile -->
                    <circle cx="399" cy="325" r="15" fill="#F7F3E8" />
                    <circle cx="460" cy="325" r="15" fill="#F7F3E8" />
                  </svg>
                </div>
              </div>
              <div class="absolute inset-0 bg-accent rounded-lg transform translate-x-4 translate-y-4 -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section aria-labelledby="services-overview-title" class="py-16 md:py-24">
      <div class="container-site px-4 sm:px-6">
        <div class="text-center mb-16">
          <h2 id="services-overview-title" class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Comprehensive Services
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            We offer end-to-end web solutions to establish and grow your online presence, from
            initial concept to ongoing maintenance and optimization.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Cards -->
          <div v-for="(service, index) in servicesList" :key="index"
            class="bg-white rounded-lg shadow-card overflow-hidden transition-transform hover:transform hover:-translate-y-2">
            <div class="h-3 bg-primary"></div>
            <div class="p-6">
              <div class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path :d="service.icon"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ service.title }}</h3>
              <p class="text-neutral-text mb-6">{{ service.description }}</p>
              <router-link :to="service.link" class="text-accent font-medium hover:text-accent-dark flex items-center">
                Learn More
                <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Visual Component -->
    <ServicesVisual />

    <!-- Process Section -->
    <section aria-labelledby="process-title" class="py-16 md:py-24 bg-neutral-cream">
      <div class="container-site px-4 sm:px-6">
        <div class="text-center mb-16">
          <h2 id="process-title" class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Process
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            We follow a structured approach to deliver high-quality web solutions tailored to your specific needs.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="index" class="relative">
            <!-- Connection line -->
            <div v-if="index < process.length - 1"
              class="hidden md:block absolute top-1/4 left-full w-full h-1 bg-primary-light z-0"></div>

            <div class="bg-white rounded-lg shadow-card p-6 relative z-10">
              <div
                class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                {{ index + 1 }}
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ step.title }}</h3>
              <p class="text-neutral-text">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section aria-labelledby="testimonials-title" class="py-16 md:py-24">
      <div class="container-site px-4 sm:px-6">
        <div class="text-center mb-16">
          <h2 id="testimonials-title" class="text-3xl md:text-4xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about our web services.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white rounded-lg shadow-card p-6">
            <div class="flex mb-4">
              <svg class="h-5 w-5 text-accent" v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p class="text-neutral-text italic mb-6">{{ testimonial.quote }}</p>
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary font-bold text-xl">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="ml-4">
                <div class="font-semibold text-primary">{{ testimonial.name }}</div>
                <div class="text-sm text-neutral-text">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section aria-labelledby="cta-title" class="bg-primary py-16 md:py-24">
      <div class="container-site px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2 id="cta-title" class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Web Presence?
          </h2>
          <p class="text-lg text-primary-light mb-8">
            Contact us today for a free consultation. We'll discuss your project needs and how we can help your business
            succeed online.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/contact" class="btn-lg bg-white text-primary hover:bg-neutral-cream">
              Request a Consultation
            </router-link>
            <router-link to="/portfolio" class="btn-lg border-2 border-white text-white hover:bg-primary-dark">
              View Our Portfolio
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section aria-labelledby="faq-title" class="py-16 md:py-24">
      <div class="container-site px-4 sm:px-6">
        <div class="text-center mb-16">
          <h2 id="faq-title" class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-neutral-text max-w-3xl mx-auto">
            Have questions about our services? We've got answers.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <button @click="toggleFaq(index)"
              class="w-full text-left bg-white p-4 rounded-lg shadow-sm flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary"
              :aria-expanded="openFaq === index" :aria-controls="`faq-content-${index}`">
              <span class="font-semibold text-primary">{{ faq.question }}</span>
              <svg class="h-5 w-5 text-primary transform transition-transform"
                :class="{ 'rotate-180': openFaq === index }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <div v-show="openFaq === index" :id="`faq-content-${index}`"
              class="bg-white p-4 rounded-b-lg border-t border-neutral-100">
              <p class="text-neutral-text">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServicesVisual from '../components/ServicesShowcase.vue'

const openFaq = ref(null)

const toggleFaq = (index) => {
  if (openFaq.value === index) {
    openFaq.value = null
  } else {
    openFaq.value = index
  }
}

// Service cards content
const servicesList = [
  {
    title: 'Web Design',
    description: 'Custom, responsive web designs that capture your brand essence and engage your audience.',
    icon: 'M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z',
    link: '/services/web-design'
  },
  {
    title: 'Web Development',
    description: 'Powerful, scalable websites and applications built with modern technologies and best practices.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    link: '/services/web-development'
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom online stores with seamless shopping experiences and robust backend management.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    link: '/services/ecommerce'
  },
  {
    title: 'SEO Services',
    description: 'Comprehensive strategies to boost your online visibility and drive organic traffic to your website.',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    link: '/services/seo'
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website secure, up-to-date, and performing at its best with our maintenance services.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    link: '/services/maintenance'
  },
  {
    title: 'Content Management',
    description: 'Custom CMS solutions that make updating and managing your website content easy and efficient.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    link: '/services/content-management'
  }
]

// Process steps
const process = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    title: 'Planning',
    description: 'We create a detailed project plan including sitemap, wireframes, and technical specifications.'
  },
  {
    title: 'Development',
    description: 'Our team designs and develops your website with a focus on quality and performance.'
  },
  {
    title: 'Launch & Support',
    description: 'We thoroughly test, launch your site, and provide ongoing support and maintenance.'
  }
]

// Testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Boutique Retail Store',
    quote: 'Web Masters transformed our online presence. Our new e-commerce site has increased sales by 45% in the first three months!'
  },
  {
    name: 'Mark Thompson',
    company: 'Legal Services',
    quote: 'The team at Web Masters delivered a professional website that perfectly represents our brand and has significantly improved our lead generation.'
  },
  {
    name: 'Jennifer Lee',
    company: 'Tech Startup',
    quote: 'Their development expertise and attention to detail are unmatched. Our web application works flawlessly and our users love the intuitive interface.'
  }
]

// FAQs
const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of your project. A basic website typically takes 4-6 weeks, while more complex e-commerce or custom web applications can take 8-12 weeks or more. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'Do you offer website hosting and maintenance?',
    answer: 'Yes, we offer comprehensive hosting and maintenance packages to keep your website secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, and technical support.'
  },
  {
    question: 'How much does a website cost?',
    answer: 'Website costs vary based on your specific requirements, functionality, and complexity. We offer customized solutions to fit various budgets and will provide a detailed quote after understanding your project needs. Contact us for a free consultation and estimate.'
  },
  {
    question: 'Do you work with businesses outside your local area?',
    answer: 'Absolutely! We work with clients nationwide and internationally. Our collaborative approach and use of project management tools allow us to communicate effectively regardless of location.'
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes, all our websites are built with responsive design, ensuring they look and function perfectly on all devices, including smartphones, tablets, and desktops. Mobile optimization is a standard part of our development process.'
  }
]
</script>

<style scoped>
/* Transition styles for FAQ accordions */
[v-cloak] {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
