<template>
  <div class="bg-white">
    <!-- Social Proof Stats -->
    <div class="py-12 bg-gradient-to-r from-primary to-primary-dark">
      <div class="container-site">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="text-white" v-for="stat in stats" :key="stat.label">
            <div class="text-3xl md:text-4xl font-bold mb-2">
              <CountUp :value="stat.value" :suffix="stat.suffix" />
            </div>
            <div class="text-primary-light text-sm md:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Client Logos -->
    <div class="py-12 bg-gray-50">
      <div class="container-site text-center">
        <h3 class="text-2xl font-semibold text-primary mb-8">
          Trusted by Growing Businesses
        </h3>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <div
            v-for="client in clients"
            :key="client.name"
            class="flex items-center justify-center"
          >
            <OptimizedImage
              :src="client.logo"
              :alt="client.name"
              :lazy="true"
              sizes="120px"
              container-class="flex items-center justify-center max-h-12"
              image-class="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Trust Badges -->
    <div class="py-8 bg-white">
      <div class="container-site">
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div
            v-for="badge in trustBadges"
            :key="badge.name"
            class="flex items-center space-x-2"
          >
            <div
              class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="text-sm text-gray-600">{{ badge.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Money-Back Guarantee -->
    <div class="py-12 bg-accent-light">
      <div class="container-site text-center">
        <div class="max-w-2xl mx-auto">
          <div
            class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-primary mb-4">
            100% Satisfaction Guarantee
          </h3>
          <p class="text-gray-600">
            We stand behind our work with a 30-day money-back guarantee. If
            you're not completely satisfied with your website, we'll refund your
            investment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OptimizedImage from '~/components/ui/OptimizedImage.vue';

// Component for counting up numbers
const CountUp = {
  props: ['value', 'suffix'],
  setup(props) {
    const displayValue = ref(0);

    onMounted(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = props.value / steps;
      const stepTime = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= props.value) {
          displayValue.value = props.value;
          clearInterval(timer);
        } else {
          displayValue.value = Math.floor(current);
        }
      }, stepTime);
    });

    return { displayValue };
  },
  template: '<span>{{ displayValue }}{{ suffix }}</span>',
};

// Social proof statistics
const stats = ref([
  { value: 150, suffix: '+', label: 'Websites Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: 'h', label: 'Average Response' },
  { value: 5, suffix: '/5', label: 'Average Rating' },
]);

// Client logos (you would replace these with actual client logos)
const clients = ref([
  { name: 'County Cooperage', logo: '/src/assets/countycooperage.svg' },
  { name: 'Gotta Go Ottawa', logo: '/src/assets/gottago.svg' },
  { name: 'UpMedia', logo: '/src/assets/upmedia.svg' },
  { name: 'Luma CRM', logo: '/src/assets/lumacrm.svg' },
]);

// Trust badges
const trustBadges = ref([
  { name: 'SSL Secured' },
  { name: 'Mobile Optimized' },
  { name: 'SEO Ready' },
  { name: 'Fast Loading' },
  { name: 'GDPR Compliant' },
]);
</script>

<style scoped>
@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.count-up {
  animation: countUp 0.5s ease-out;
}
</style>
