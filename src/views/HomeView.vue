<script setup>
import HomeHero from "@/components/HomeHero.vue";
import ServicesShowcase from "@/components/ServicesShowcase.vue";
import WorkProcess from "@/components/WorkProcess.vue";
import PricingSection from "@/components/PricingSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import AwardsCarousel from "@/components/AwardsCarousel.vue";
import { onMounted, onUnmounted, ref, inject } from "vue";
import { useRouteSeo } from "@/composables/useRouteSeo";

// Apply SEO from route meta
useRouteSeo();

const analytics = inject("analytics");
const observerRef = ref(null);
const visibleSections = ref(new Set());

// Define services data
const services = ref([
  {
    id: "web-design",
    name: "Web Design",
    link: "/services#web-design",
  },
  {
    id: "web-development",
    name: "Web Development",
    link: "/services#web-development",
  },
  {
    id: "seo",
    name: "SEO Services",
    link: "/services#seo",
  },
]);

// Track page view and setup section tracking
onMounted(() => {
  // Track page view
  analytics.pageView("/");
  analytics.trackEvent("Page", "view", "Home Page");

  // Set up section visibility tracking
  setupSectionVisibilityTracking();
});

// Clean up observer
onUnmounted(() => {
  if (observerRef.value) {
    observerRef.value.disconnect();
  }
});

// Track section visibility
const setupSectionVisibilityTracking = () => {
  observerRef.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && !visibleSections.value.has(sectionId)) {
          visibleSections.value.add(sectionId);
          analytics.trackEvent("Section", "view", sectionId);
        }
      });
    },
    { threshold: 0.25 }
  );

  // Observe all sections
  document.querySelectorAll("section[id]").forEach((section) => {
    observerRef.value.observe(section);
  });
};

// Track CTA button clicks
const trackCtaClick = (buttonName) => {
  analytics.trackEvent("Button", "click", buttonName);
};
</script>

<template>
  <main>
    <section id="hero-section" class="hero-section">
      <HomeHero />
    </section>
    <section id="services-section" class="py-16 bg-white">
      <ServicesShowcase />
    </section>
    <section id="awards-section">
      <AwardsCarousel />
    </section>

    <!-- Technology Stack Section -->
    <section id="tech-stack-section" class="py-16 bg-neutral-50">
      <div class="container-site px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-primary mb-4">
            Our Technology Stack
          </h2>
          <p class="text-lg text-neutral-text mb-8">
            We leverage cutting-edge technologies to build robust, scalable, and
            high-performing digital solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Frontend Technologies -->
          <div
            class="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-code text-primary text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-primary">Frontend</h3>
            </div>

            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-vuejs text-accent text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark">Vue.js</span>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-react text-blue-500 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark">React</span>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-js text-yellow-500 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark"
                  >JavaScript / TypeScript</span
                >
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-css3-alt text-blue-600 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark"
                  >Tailwind CSS / SCSS</span
                >
              </li>
            </ul>
          </div>

          <!-- Backend Technologies -->
          <div
            class="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-server text-primary text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-primary">Backend</h3>
            </div>

            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-node-js text-green-600 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark">Node.js</span>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-php text-purple-600 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark">PHP</span>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fas fa-database text-blue-500 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark"
                  >MySQL / MongoDB</span
                >
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fas fa-network-wired text-gray-600 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark"
                  >REST / GraphQL APIs</span
                >
              </li>
            </ul>
          </div>

          <!-- CMS & E-commerce -->
          <div
            class="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div class="flex items-center mb-4">
              <div
                class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4"
              >
                <i class="fas fa-shopping-cart text-primary text-xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-primary">Platforms</h3>
            </div>

            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-wordpress text-[#21759b] text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark">WordPress</span>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fab fa-shopify text-[#7AB55C] text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark">Shopify</span>
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fas fa-cloud text-blue-500 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark"
                  >AWS / Digital Ocean</span
                >
              </li>

              <li class="flex items-start">
                <div class="min-w-10 flex-shrink-0">
                  <i class="fas fa-lock text-gray-600 text-xl"></i>
                </div>
                <span class="font-medium text-primary-dark"
                  >SSL / Security</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link
            to="/technology-stack"
            class="btn-outline"
            @click="trackCtaClick('tech-stack-learn-more')"
          >
            Explore Our Full Tech Stack
          </router-link>
        </div>
      </div>
    </section>

    <section id="work-process-section">
      <WorkProcess />
    </section>
    <section id="pricing-section">
      <PricingSection />
    </section>
    <section id="contact-section">
      <ContactForm />
    </section>
  </main>
</template>
