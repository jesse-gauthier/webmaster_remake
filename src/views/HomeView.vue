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
