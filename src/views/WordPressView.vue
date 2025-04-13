<template>
  <div class="bg-neutral-cream min-h-screen">
    <!-- Hero Section -->
    <section class="bg-primary-600 text-neutral-cream py-20">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center">
          <h1 class="text-neutral-cream mb-6">
            Expert WordPress Development Services
          </h1>
          <p class="text-xl mb-8 text-white">
            Custom WordPress solutions tailored to your business needs
          </p>
          <div class="flex justify-center gap-4">
            <router-link to="/contact#contact-form" class="btn-primary btn-lg"
              >Get Started</router-link
            >
            <router-link
              to="/portfolio"
              class="btn-outline border-neutral-cream text-neutral-cream hover:bg-primary-500 hover:border-primary-500"
            >
              View Our Work
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section-padding">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Our WordPress Services</h2>
          <p class="max-w-content mx-auto">
            We deliver high-quality WordPress solutions that help businesses
            build their online presence, engage with their audience, and grow
            their revenue.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="card card-hover"
          >
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="bg-primary-100 p-3 rounded-full mr-4">
                  <i :class="service.icon"></i>
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Our Development Process</h2>
          <p class="max-w-content mx-auto">
            We follow a streamlined process to ensure your WordPress project is
            delivered on time, within budget, and exceeds your expectations.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="index" class="relative">
            <div class="card text-center h-full">
              <div class="card-body">
                <div
                  class="bg-accent-500 text-neutral-cream w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                >
                  {{ index + 1 }}
                </div>
                <h4 class="mb-3">{{ step.title }}</h4>
                <p class="text-sm">{{ step.description }}</p>
              </div>
            </div>
            <div
              v-if="index < process.length - 1"
              class="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-accent-300"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>What Our Clients Say</h2>
          <p class="max-w-content mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our WordPress services.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="card card-hover"
          >
            <div class="card-body">
              <div class="flex mb-4">
                <div v-for="i in 5" :key="i" class="text-warning mr-1">★</div>
              </div>
              <p class="italic mb-4">"{{ testimonial.quote }}"</p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-neutral-200 rounded-full mr-3"></div>
                <div>
                  <h5 class="mb-0 text-base">{{ testimonial.name }}</h5>
                  <p class="text-sm text-neutral-500 mb-0">
                    {{ testimonial.company }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section-padding bg-primary-50">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Transparent Pricing</h2>
          <p class="max-w-content mx-auto">
            Choose the WordPress development package that suits your business
            needs and budget.
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
          <p class="mb-4">Need a custom solution?</p>
          <router-link to="/contact#contact-form" class="btn-secondary"
            >Contact Us for Custom Pricing</router-link
          >
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-accent-600 text-neutral-cream">
      <div class="container-site">
        <div class="text-center max-w-content mx-auto">
          <h2 class="text-neutral-cream">
            Ready to Transform Your WordPress Site?
          </h2>
          <p class="mb-8">
            Let's discuss how our WordPress development services can help your
            business grow online.
          </p>
          <router-link
            to="/contact#contact-form"
            class="btn-primary bg-neutral-cream text-accent-600 hover:bg-neutral-100 btn-lg"
          >
            Schedule a Free Consultation
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="section-padding">
      <div class="container-site">
        <div class="mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-neutral-50">
      <div class="container-site">
        <div class="text-center mb-12">
          <h2>Frequently Asked Questions</h2>
          <p class="max-w-content mx-auto">
            Get answers to common questions about our WordPress development
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
              <span class="text-xl">{{ item.open ? "−" : "+" }}</span>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactForm from "@/components/ContactForm.vue";

// Services data
const services = ref([
  {
    title: "Custom WordPress Development",
    icon: "fa-brands fa-wordpress",
    description:
      "Tailored WordPress websites designed to meet your specific business requirements.",
    features: [
      "Custom theme development",
      "Plugin development & integration",
      "E-commerce functionality",
      "Performance optimization",
      "Mobile-responsive design",
    ],
  },
  {
    title: "WordPress Maintenance",
    icon: "fa-solid fa-wrench",
    description:
      "Keep your WordPress site secure, updated, and running at peak performance.",
    features: [
      "Regular WordPress updates",
      "Security monitoring & hardening",
      "Performance optimization",
      "Daily/weekly backups",
      "Technical support",
    ],
  },
  {
    title: "WordPress Migration",
    icon: "fa-solid fa-arrow-right-arrow-left",
    description:
      "Seamless migration of your existing website to WordPress or between hosts.",
    features: [
      "Zero downtime migration",
      "Data & content transfer",
      "SEO preservation",
      "Performance testing",
      "Post-migration support",
    ],
  },
]);

// Process steps
const process = ref([
  {
    title: "Discovery",
    description:
      "We analyze your business needs and goals to develop a strategic plan for your WordPress project.",
  },
  {
    title: "Design",
    description:
      "Our designers create wireframes and mockups of your WordPress site based on your brand guidelines.",
  },
  {
    title: "Development",
    description:
      "Our WordPress experts build your custom website with clean, optimized code and the latest technologies.",
  },
  {
    title: "Launch",
    description:
      "We thoroughly test your site before deployment and provide training on how to manage your new WordPress site.",
  },
]);

// Testimonials
const testimonials = ref([
  {
    quote:
      "Working with this team was a game-changer for our business. Our new WordPress site increased our conversion rate by 45% in the first month.",
    name: "Sarah Johnson",
    company: "Marketing Director, TechCorp",
  },
  {
    quote:
      "The WordPress maintenance service has saved us countless hours and prevented several potential security issues. Worth every penny!",
    name: "Michael Chen",
    company: "CEO, GrowthStart",
  },
  {
    quote:
      "The migration to WordPress was smooth and seamless. Our team was up and running on the new platform with minimal training.",
    name: "Laura Martinez",
    company: "Operations Manager, CreativeHub",
  },
]);

// Pricing plans
const plans = ref([
  {
    name: "Basic",
    description: "For small businesses starting out",
    price: "999",
    billing: "one-time",
    features: [
      "Custom WordPress theme",
      "Mobile responsive design",
      "Contact form integration",
      "5 pages of content",
      "Basic SEO setup",
      "1 month of support",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "1,999",
    billing: "one-time",
    features: [
      "Everything in Basic",
      "E-commerce functionality",
      "Custom plugin integration",
      "Advanced SEO setup",
      "Performance optimization",
      "3 months of support",
    ],
  },
  {
    name: "Enterprise",
    description: "For established businesses",
    price: "3,499",
    billing: "one-time",
    features: [
      "Everything in Professional",
      "Custom plugin development",
      "Multilingual support",
      "Advanced security setup",
      "Membership functionality",
      "6 months of support",
    ],
  },
]);

// FAQs
const faqs = ref([
  {
    question: "How long does it take to develop a WordPress website?",
    answer:
      "Typically, a custom WordPress website takes 4-8 weeks to complete, depending on the complexity of the project. Basic websites may be completed in as little as 2-3 weeks, while more complex projects with e-commerce or custom functionality may take 8-12 weeks.",
    open: true,
  },
  {
    question: "Do you provide WordPress hosting services?",
    answer:
      "While we don't directly provide hosting, we partner with premium WordPress hosting providers and can manage the setup and configuration process for you. We'll recommend the best hosting solution based on your website's needs and budget.",
    open: false,
  },
  {
    question: "Can you work with an existing WordPress website?",
    answer:
      "Absolutely! We can help optimize, redesign, or add new features to your existing WordPress site. We'll first conduct a thorough audit to identify areas for improvement before making any changes.",
    open: false,
  },
  {
    question: "What about WordPress security?",
    answer:
      "Security is a top priority in all our WordPress development projects. We implement industry best practices including secure coding standards, regular updates, strong authentication, firewall protection, and malware scanning to keep your site secure.",
    open: false,
  },
  {
    question: "Do you offer ongoing maintenance after the website launch?",
    answer:
      "Yes, we offer various WordPress maintenance packages to keep your site secure, updated, and performing optimally. Our maintenance services include regular updates, security monitoring, backups, performance optimization, and technical support.",
    open: false,
  },
]);

// Methods
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>
