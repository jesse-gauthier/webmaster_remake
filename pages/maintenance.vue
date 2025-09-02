<template>
  <div class="bg-neutral-cream min-h-screen">
    <!-- Hero Section -->
    <section class="container-site py-16 md:py-24">
      <div class="max-w-content mx-auto text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6">Monthly Website Maintenance</h1>
        <p class="text-lg mb-8">Keep your website running smoothly with our professional maintenance services.</p>
        <div class="flex justify-center">
          <a href="#pricing" class="btn-primary hover:text-white">View Plans</a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-primary-light py-16">
      <div class="container-site">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">What's Included</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="card card-hover bg-white p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="ml-4 font-semibold text-xl">Security Updates</h3>
            </div>
            <p>Regular security patches and updates to keep your website protected from vulnerabilities.</p>
          </div>

          <div class="card card-hover bg-white p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 class="ml-4 font-semibold text-xl">Content Updates</h3>
            </div>
            <p>Regular updates to your website content to keep your information current and relevant.</p>
          </div>

          <div class="card card-hover bg-white p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="ml-4 font-semibold text-xl">Performance Optimization</h3>
            </div>
            <p>Regular performance checks and optimizations to ensure your website loads quickly.</p>
          </div>

          <div class="card card-hover bg-white p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="ml-4 font-semibold text-xl">Malware Scanning</h3>
            </div>
            <p>Regular scans to detect and remove any malware or suspicious code from your website.</p>
          </div>

          <div class="card card-hover bg-white p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 class="ml-4 font-semibold text-xl">Database Optimization</h3>
            </div>
            <p>Regular clean-up and optimization of your website's database for improved performance.</p>
          </div>

          <div class="card card-hover bg-white p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center text-accent-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 class="ml-4 font-semibold text-xl">Uptime Monitoring</h3>
            </div>
            <p>24/7 monitoring of your website to ensure it's always accessible to your visitors.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-16 md:py-24">
      <div class="container-site">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-4">Maintenance Plans</h2>
        <p class="text-center max-w-content mx-auto mb-12">Choose the maintenance plan that's right for your website.
          All plans include our core maintenance services.</p>

        <PricingSection />
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-primary-50 py-16">
      <div class="container-site">
        <h2 class="text-2xl md:text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>

        <div class="max-w-content mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
            <div class="flex justify-between items-center bg-white p-4 rounded cursor-pointer"
              @click="toggleFaq(index)">
              <h3 class="font-semibold text-lg mb-0">{{ faq.question }}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform"
                :class="{ 'rotate-180': faq.open }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div v-show="faq.open" class="bg-white px-4 pb-4 rounded-b">
              <p class="mb-0">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-accent-100 text-white py-16">
      <div class="container-site text-center">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6">Ready to keep your website in top shape?</h2>
        <p class="text-lg mb-8 max-w-content mx-auto">Our maintenance plans keep your website secure, up-to-date, and
          performing at its best so you can focus on your business.</p>
        <div class="flex justify-center">
          <router-link to="/contact" class="btn-primary bg-white text-accent-600 hover:bg-neutral-50">Get
            Started</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: "What exactly is included in the monthly maintenance?",
    answer: "Our monthly maintenance includes security updates, performance optimization, content updates, malware scanning, database optimization, and 24/7 uptime monitoring. The specific services may vary based on your selected plan.",
    open: false
  },
  {
    question: "How often will my website be updated?",
    answer: "We perform maintenance tasks on a regular schedule depending on your plan. Basic plans typically receive monthly updates, while premium plans may receive weekly or even daily attention for critical elements.",
    open: false
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your maintenance plan at any time. Changes typically take effect at the start of your next billing cycle.",
    open: false
  },
  {
    question: "Do I need monthly maintenance for my website?",
    answer: "Websites require regular maintenance to stay secure, fast, and up-to-date. Without proper maintenance, websites can become vulnerable to security threats, experience performance issues, or become outdated.",
    open: false
  },
  {
    question: "What if I need emergency support?",
    answer: "Our premium plans include priority support for urgent issues. You'll have access to our support team via email, phone, or chat depending on your plan level.",
    open: false
  }
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
