<template>
  <div class="bg-neutral-cream">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="container-site py-16 md:py-24">
        <div class="max-w-content mx-auto text-center">
          <h1 class="animate-fade-in">Custom Web Design Solutions</h1>
          <p class="text-lg md:text-xl mb-8">
            Responsive web designs that capture your brand essence and engage
            your audience.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <router-link to="/contact#contact-form" class="btn-primary"
              >Get Started</router-link
            >
            <button class="btn-outline">View Portfolio</button>
          </div>
        </div>
      </div>
      <!-- Abstract background elements -->
      <div
        class="absolute -bottom-16 -right-16 w-64 h-64 bg-primary-50 rounded-full opacity-50"
      ></div>
      <div
        class="absolute top-20 -left-16 w-48 h-48 bg-accent-50 rounded-full opacity-40"
      ></div>
    </section>

    <!-- Services Section -->
    <section class="section-padding bg-white">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center mb-12">
          <h2>Our Web Design Services</h2>
          <p class="text-lg">
            We create stunning, functional websites tailored to your specific
            business needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="card card-hover"
          >
            <div class="card-body">
              <div
                class="w-12 h-12 flex items-center justify-center bg-primary-light rounded-lg mb-4"
              >
                <component
                  :is="service.icon"
                  class="w-6 h-6 text-primary-600"
                />
              </div>
              <h3 class="text-xl mb-2">{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center mb-12">
          <h2>Our Design Process</h2>
          <p class="text-lg">
            We follow a structured approach to deliver exceptional results.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            v-for="(step, index) in designProcess"
            :key="index"
            class="relative bg-white p-6 rounded-lg shadow-card"
          >
            <div
              class="flex items-center justify-center w-12 h-12 rounded-full bg-accent-500 text-white font-heading font-bold mb-4"
            >
              {{ index + 1 }}
            </div>
            <h4 class="text-lg font-bold mb-2">{{ step.title }}</h4>
            <p class="text-sm">{{ step.description }}</p>

            <!-- Connector line (except for the last item) -->
            <div
              v-if="index < designProcess.length - 1"
              class="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent-200"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="section-padding bg-white">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center mb-12">
          <h2>Featured Web Design Projects</h2>
          <p class="text-lg">Explore some of our recent work.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in portfolioProjects"
            :key="index"
            class="card card-hover overflow-hidden group"
          >
            <div class="relative h-48 overflow-hidden">
              <div
                class="w-full h-full bg-neutral-200 flex items-center justify-center"
              >
                <!-- This would be an actual image in production -->
                <div class="text-neutral-500">Project Image</div>
              </div>
              <div
                class="absolute inset-0 bg-primary-600 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button
                  class="btn-outline border-white text-white hover:bg-primary-500"
                >
                  View Project
                </button>
              </div>
            </div>
            <div class="card-body">
              <div class="flex gap-2 mb-2">
                <span
                  v-for="(tag, tagIndex) in project.tags"
                  :key="tagIndex"
                  class="badge badge-light text-xs"
                >
                  {{ tag }}
                </span>
              </div>
              <h3 class="text-xl mb-1">{{ project.title }}</h3>
              <p class="text-sm">{{ project.description }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button class="btn-secondary">View All Projects</button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-neutral-50">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center mb-12">
          <h2>What Our Clients Say</h2>
          <p class="text-lg">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="card p-6 relative"
          >
            <div class="text-accent-300 text-4xl absolute top-4 right-6">"</div>
            <p class="text-neutral-text italic mb-6">{{ testimonial.quote }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 rounded-full bg-neutral-200 mr-4"></div>
              <div>
                <div class="font-bold text-primary-dark">
                  {{ testimonial.name }}
                </div>
                <div class="text-sm text-neutral-500">
                  {{ testimonial.company }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-600 text-white">
      <div class="container-site">
        <div class="max-w-content mx-auto text-center">
          <h2 class="text-white">Ready to Transform Your Online Presence?</h2>
          <p class="text-lg mb-8">
            Let's create a website that perfectly represents your brand and
            converts visitors into customers.
          </p>
          <router-link
            to="/contact#contact-form"
            class="bg-white text-primary-600 px-8 py-3 rounded-md font-bold hover:bg-neutral-cream transition-colors duration-300"
          >
            Get Your Free Consultation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Icon components would be imported from a library like heroicons or lucide-vue
// For this example, we'll use placeholder components
const LayoutIcon = () => h("div", { class: "w-6 h-6 bg-primary-600" });
const CodeIcon = () => h("div", { class: "w-6 h-6 bg-primary-600" });
const MobileIcon = () => h("div", { class: "w-6 h-6 bg-primary-600" });
const SpeedIcon = () => h("div", { class: "w-6 h-6 bg-primary-600" });
const AccessibilityIcon = () => h("div", { class: "w-6 h-6 bg-primary-600" });
const SeoIcon = () => h("div", { class: "w-6 h-6 bg-primary-600" });

const services = ref([
  {
    title: "Custom Website Design",
    description:
      "Beautiful, unique websites designed to reflect your brand identity and appeal to your target audience.",
    icon: LayoutIcon,
  },
  {
    title: "Frontend Development",
    description:
      "Clean, efficient code that brings your design to life with smooth interactions and animations.",
    icon: CodeIcon,
  },
  {
    title: "Responsive Design",
    description:
      "Websites that look and function perfectly on all devices, from desktop to mobile.",
    icon: MobileIcon,
  },
  {
    title: "Performance Optimization",
    description:
      "Fast-loading websites that keep visitors engaged and improve search engine rankings.",
    icon: SpeedIcon,
  },
  {
    title: "Accessibility Compliance",
    description:
      "Inclusive design practices that ensure your website is usable by people of all abilities.",
    icon: AccessibilityIcon,
  },
  {
    title: "SEO-Friendly Structure",
    description:
      "Website architecture built to help you rank higher in search results and attract more visitors.",
    icon: SeoIcon,
  },
]);

const designProcess = ref([
  {
    title: "Discovery",
    description:
      "We learn about your business, goals, and target audience to create a strategic plan.",
  },
  {
    title: "Design",
    description:
      "We create wireframes and visual designs that align with your brand and user expectations.",
  },
  {
    title: "Development",
    description:
      "Our developers build your site with clean, efficient code and modern technologies.",
  },
  {
    title: "Launch",
    description:
      "After thorough testing, we deploy your site and provide training on how to maintain it.",
  },
]);

const portfolioProjects = ref([
  {
    title: "Eco-Friendly E-commerce",
    description:
      "A sustainable products store with a clean, nature-inspired design.",
    tags: ["E-commerce", "Responsive"],
  },
  {
    title: "Financial Services Dashboard",
    description:
      "An intuitive interface for managing investments and tracking financial data.",
    tags: ["Dashboard", "UI/UX"],
  },
  {
    title: "Health & Wellness Blog",
    description:
      "A content-focused site with a calming aesthetic and easy navigation.",
    tags: ["Blog", "WordPress"],
  },
  {
    title: "Restaurant Online Ordering",
    description:
      "A mouthwatering website with seamless online ordering functionality.",
    tags: ["Food", "Booking System"],
  },
  {
    title: "Professional Portfolio",
    description:
      "A showcase website for a creative professional with interactive elements.",
    tags: ["Portfolio", "Animation"],
  },
  {
    title: "Tech Startup Landing Page",
    description:
      "A high-impact landing page designed to convert visitors to leads.",
    tags: ["Landing Page", "Conversion"],
  },
]);

const testimonials = ref([
  {
    quote:
      "Working with this team transformed our online presence. Our new website has increased conversions by 40% and we've received countless compliments on the design.",
    name: "Sarah Johnson",
    company: "Eco Living Co.",
  },
  {
    quote:
      "The attention to detail and understanding of our brand was exceptional. Our website now perfectly represents who we are and what we offer to our clients.",
    name: "Michael Chen",
    company: "Financial Advisors Inc.",
  },
  {
    quote:
      "From start to finish, the process was smooth and professional. They delivered exactly what we needed, on time and within budget.",
    name: "Emily Rodriguez",
    company: "Wellness Collective",
  },
  {
    quote:
      "The responsive design has made a huge difference for our customers. We're seeing much higher engagement on mobile devices since the redesign.",
    name: "David Park",
    company: "Urban Eats Restaurant",
  },
]);
</script>
