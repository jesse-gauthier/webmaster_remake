<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-primary-light py-16 md:py-24">
      <div class="container-site">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-primary-700 mb-4">Get In Touch</h1>
          <p class="text-lg text-neutral-800 mb-8">Have questions or ready to start your next project? We're here to
            help bring your digital vision to life.</p>
        </div>
      </div>
    </section>

    <!-- Email Contact Card -->
    <section class="py-12 bg-white">
      <div class="container-site">
        <div class="max-w-xl mx-auto">
          <div class="card card-hover text-center p-8">
            <div class="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Email Us</h3>
            <p class="text-neutral-600 mb-4">Our team typically responds within 24 hours</p>
            <a href="mailto:contact@ottawawebmasters.ca" class="btn-text">contact@ottawawebmasters.ca</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <ContactForm />

    <!-- FAQ Section -->
    <section class="py-16 bg-neutral-cream">
      <div class="container-site">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-700 text-center mb-12">Frequently Asked Questions</h2>

          <div class="space-y-6">
            <div class="card p-6">
              <h3 class="text-xl font-semibold text-primary-700 mb-2">How long does a typical website project take?</h3>
              <p class="text-neutral-800">Most custom website projects take between 4-8 weeks from start to finish,
                depending on the scope and complexity. Our WordPress and Shopify implementations typically range from
                2-6 weeks.</p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-semibold text-primary-700 mb-2">Do you offer website maintenance services?</h3>
              <p class="text-neutral-800">Yes! We offer comprehensive maintenance packages for both WordPress and
                Shopify websites, including regular updates, security monitoring, performance optimization, and
                technical support.</p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-semibold text-primary-700 mb-2">What information do you need to provide a quote?
              </h3>
              <p class="text-neutral-800">To provide an accurate quote, we typically need to understand your business
                goals, target audience, desired functionality, content requirements, and any design preferences. The
                more details you can provide, the more accurate our estimate will be.</p>
            </div>

            <div class="card p-6">
              <h3 class="text-xl font-semibold text-primary-700 mb-2">Do you work with clients outside of Ottawa?</h3>
              <p class="text-neutral-800">Absolutely! While we're based in Ottawa, we work with clients across Canada
                and internationally. Our process is designed to work smoothly regardless of location, with regular
                communication via video calls and collaborative tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue';
</script>
