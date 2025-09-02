<template>
  <Transition name="slide-up">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-neutral-200 z-50"
    >
      <div class="container-site py-4 px-4 md:px-6">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div class="flex-1">
            <h3 class="text-lg font-medium text-primary-700 mb-1">
              We Value Your Privacy
            </h3>
            <p class="text-neutral-600 text-sm md:text-base">
              This website uses cookies to enhance your browsing experience,
              analyze site traffic, and personalize content. By clicking "Accept
              All", you consent to our use of cookies as described in our
              <router-link to="/policy" class="text-primary-600 hover:underline"
                >Cookie Policy</router-link
              >.
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            <button
              @click="acceptAllCookies"
              class="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              Accept All
            </button>
            <button
              @click="rejectNonEssentialCookies"
              class="py-2 px-4 bg-white hover:bg-neutral-100 text-primary-600 border border-primary-600 rounded-md text-sm font-medium transition-colors"
            >
              Essential Only
            </button>
            <button
              @click="showCustomizationModal = true"
              class="py-2 px-4 bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300 rounded-md text-sm font-medium transition-colors"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Customization Modal -->
  <Transition name="fade">
    <div
      v-if="showCustomizationModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <div
        class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-primary-700">
              Cookie Preferences
            </h3>
            <button
              @click="showCustomizationModal = false"
              class="text-neutral-500 hover:text-neutral-700"
            >
              <span class="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="mb-6">
            <p class="mb-4 text-neutral-600">
              Manage your cookie preferences below. Essential cookies are always
              enabled as they are necessary for the website to function
              properly.
            </p>

            <div class="space-y-4">
              <!-- Essential Cookies -->
              <div class="p-4 border border-neutral-200 rounded-md">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-primary-700">
                    Essential Cookies
                  </h4>
                  <span
                    class="bg-neutral-200 text-neutral-800 text-xs px-2 py-1 rounded"
                    >Always On</span
                  >
                </div>
                <p class="text-sm text-neutral-600">
                  These cookies are necessary for the website to function and
                  cannot be switched off. They are usually set in response to
                  actions made by you which amount to a request for services.
                </p>
              </div>

              <!-- Analytics Cookies -->
              <div class="p-4 border border-neutral-200 rounded-md">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-primary-700">
                    Analytics Cookies
                  </h4>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="cookiePreferences.analytics"
                      class="sr-only peer"
                    />
                    <div
                      class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"
                    ></div>
                  </label>
                </div>
                <p class="text-sm text-neutral-600">
                  These cookies allow us to count visits and traffic sources so
                  we can measure and improve the performance of our site.
                </p>
              </div>

              <!-- Marketing Cookies -->
              <div class="p-4 border border-neutral-200 rounded-md">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium text-primary-700">
                    Marketing Cookies
                  </h4>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="cookiePreferences.marketing"
                      class="sr-only peer"
                    />
                    <div
                      class="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"
                    ></div>
                  </label>
                </div>
                <p class="text-sm text-neutral-600">
                  These cookies are used to track visitors across websites. The
                  intention is to display ads that are relevant and engaging for
                  the individual user.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-3 pt-4 border-t border-neutral-200">
            <button
              @click="showCustomizationModal = false"
              class="py-2 px-4 bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300 rounded-md text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              @click="saveCustomPreferences"
              class="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';

// Define updateConsent as a prop
const props = defineProps({
  updateConsent: {
    type: Function,
    default: consent => {
      console.log('Consent update (mock):', consent);
    },
  },
});

const COOKIE_CONSENT_KEY = 'cookie_consent_status';
const COOKIE_PREFERENCES_KEY = 'cookie_preferences';

const isVisible = ref(false);
const showCustomizationModal = ref(false);
const cookiePreferences = ref({
  essential: true, // Always required
  analytics: false,
  marketing: false,
});

// Get analytics and consent update functions from app with fallbacks for development
const analytics = inject('analytics', {
  trackEvent: (...args) => console.log('Analytics event (mock):', ...args),
});

// Initialize component
onMounted(() => {
  // Check if user has already made a choice
  const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);

  if (!consentStatus) {
    // No previous choice, show the consent bar
    isVisible.value = true;
  } else {
    // User has made a choice before, apply those preferences
    loadSavedPreferences();
  }
});

// Load any saved preferences from localStorage
const loadSavedPreferences = () => {
  const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);

  if (savedPreferences) {
    try {
      const preferences = JSON.parse(savedPreferences);
      cookiePreferences.value = {
        ...cookiePreferences.value,
        ...preferences,
      };

      // Apply the saved preferences
      applyConsentPreferences(cookiePreferences.value);
    } catch (e) {
      console.error('Error parsing saved cookie preferences:', e);
    }
  }
};

// Apply the consent settings to the actual analytics tools
const applyConsentPreferences = preferences => {
  try {
    props.updateConsent({
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied',
    });
  } catch (error) {
    console.warn('Failed to update consent settings:', error);
  }
};

// User accepts all cookies
const acceptAllCookies = () => {
  cookiePreferences.value = {
    essential: true,
    analytics: true,
    marketing: true,
  };

  savePreferences('accepted_all');
  analytics.trackEvent('Consent', 'action', 'accept_all_cookies');
};

// User rejects non-essential cookies
const rejectNonEssentialCookies = () => {
  cookiePreferences.value = {
    essential: true,
    analytics: false,
    marketing: false,
  };

  savePreferences('essential_only');
  analytics.trackEvent('Consent', 'action', 'essential_only_cookies');
};

// Save custom preferences from the modal
const saveCustomPreferences = () => {
  savePreferences('custom');
  showCustomizationModal.value = false;
  analytics.trackEvent('Consent', 'action', 'custom_preferences', {
    analytics_enabled: cookiePreferences.value.analytics,
    marketing_enabled: cookiePreferences.value.marketing,
  });
};

// Helper function to save preferences and update UI
const savePreferences = consentType => {
  // Save the user's choice type
  localStorage.setItem(COOKIE_CONSENT_KEY, consentType);

  // Save the detailed preferences
  localStorage.setItem(
    COOKIE_PREFERENCES_KEY,
    JSON.stringify(cookiePreferences.value)
  );

  // Apply consent settings
  applyConsentPreferences(cookiePreferences.value);

  // Hide the consent bar
  isVisible.value = false;
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
