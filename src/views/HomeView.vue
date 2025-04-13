<script setup>
import HomeHero from "@/components/HomeHero.vue";
import ServicesShowcase from "@/components/ServicesShowcase.vue";
import WorkProcess from "@/components/WorkProcess.vue";
import PricingSection from "@/components/PricingSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import AwardsCarousel from "@/components/AwardsCarousel.vue";
import { onMounted, onUnmounted, ref, inject } from "vue";

const analytics = inject("analytics");
const observerRef = ref(null);
const visibleSections = ref(new Set());

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
      <a
        href="#services"
        @click="trackCtaClick('hero_services_button')"
        class="btn-primary"
      >
        Explore Our Services
      </a>
    </section>
    <section id="services-section" class="py-16 bg-white">
      <ServicesShowcase />
      <div v-for="service in services" :key="service.id" class="card">
        <a
          :href="service.link"
          @click="trackCtaClick(`service_${service.id}_button`)"
          class="btn-text"
        >
          Learn More →
        </a>
      </div>
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
