<template>
  <div class="container-site py-16">
    <section class="prose max-w-3xl mx-auto">
      <h1>Custom Web Application Development</h1>
      <p>
        We build scalable, secure, and performant web applications tailored to
        your business model. This standalone page exists to support the footer
        navigation item and provide a focused entry point for users specifically
        searching for "web application development" services.
      </p>
      <p>
        For a broader overview of all our offerings, visit the
        <router-link to="/services">Services page</router-link>.
      </p>
      <h2>Our Process</h2>
      <ul>
        <li>
          <strong>Discovery & Strategy:</strong> Define goals, success metrics,
          and core feature set.
        </li>
        <li>
          <strong>Architecture & UX:</strong> Plan scalable infrastructure and
          user-centric flows.
        </li>
        <li>
          <strong>Agile Delivery:</strong> Ship iteratively with transparent
          progress updates.
        </li>
        <li>
          <strong>Optimization:</strong> Performance, accessibility, analytics,
          and security baked in.
        </li>
        <li>
          <strong>Growth Partnership:</strong> Ongoing maintenance, iteration,
          and conversion optimization.
        </li>
      </ul>
      <h2>Get Started</h2>
      <p>
        Ready to validate an idea or modernize an internal tool? Reach out and
        we'll prepare a free technical roadmap & opportunity assessment.
      </p>
      <router-link to="/contact" class="btn-primary inline-block mt-4"
        >Request a Consultation</router-link
      >
    </section>
  </div>
</template>

<script setup>
import { useSeo } from '~/composables/useSeo';
useSeo({
  title: 'Custom Web Application Development',
  description:
    'Design and development of performant, maintainable, and scalable custom web applications.',
  url: '/web-applications',
  type: 'service',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom Web Application Development',
      provider: { '@type': 'Organization', name: 'Ottawa Web Masters' },
      serviceType: 'Web Application Development',
    },
  ],
});
</script>
