<!-- src/views/SeoChecklistView.vue -->
<template>
  <div class="container-site section-padding">
    <h1 class="text-center mb-8">Ultimate SEO Checklist</h1>

    <!-- Email capture form when user hasn't provided email yet -->
    <div
      v-if="!hasAccess"
      class="bg-white rounded-lg shadow-card max-w-2xl mx-auto animate-fade-in"
    >
      <div class="p-6 md:p-8">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl text-primary-600 font-bold mb-4">
            Access Your Interactive SEO Checklist
          </h2>
          <p class="text-neutral-700">
            Get instant access to our comprehensive SEO checklist with 100+
            actionable tasks to improve your website's search engine visibility.
          </p>
        </div>

        <div v-if="!isSubmitted">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="email" class="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-input"
                :class="{ 'border-error': emailError }"
                placeholder="your@email.com"
                required
              />
              <p v-if="emailError" class="form-error mt-1">{{ emailError }}</p>
            </div>

            <div class="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                v-model="agreeToTerms"
                class="mt-1 h-5 w-5"
                required
              />
              <label for="terms" class="text-sm text-neutral-700">
                I agree to receive emails from Ottawa Web Masters. You can
                unsubscribe at any time.
                <span v-if="termsError" class="text-error font-medium">
                  (Required)</span
                >
              </label>
            </div>

            <button
              type="submit"
              class="btn-primary w-full py-3"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">
                <i class="fas fa-circle-notch fa-spin mr-2"></i>
                Submitting...
              </span>
              <span v-else> Get Instant Access </span>
            </button>

            <!-- Development mode skip button -->
            <button
              v-if="isDevelopment"
              type="button"
              @click="skipEmailForm"
              class="mt-3 w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm"
            >
              DEV MODE: Skip Email Form
            </button>
          </form>

          <div
            class="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600"
          >
            <p>
              We respect your privacy. Your information will never be shared or
              sold to third parties.
            </p>
          </div>
        </div>

        <div v-else class="text-center py-6">
          <div class="text-success mb-4">
            <i class="fas fa-check-circle text-5xl"></i>
          </div>
          <h3 class="text-2xl text-primary-600 font-bold mb-2">Thank You!</h3>
          <p class="text-neutral-700 mb-6">
            Your SEO checklist is being prepared. You'll see it in just a
            moment.
          </p>
          <div class="flex justify-center">
            <div class="w-full bg-gray-200 rounded-full h-2.5 max-w-xs">
              <div
                class="bg-primary-600 h-2.5 rounded-full"
                :style="{ width: `${redirectProgress}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The actual checklist content (only visible after email submission) -->
    <div v-else>
      <div class="bg-white rounded-lg shadow-card p-6 mb-10">
        <p class="text-lg mb-6">
          Use this interactive checklist to track your SEO progress. Your
          progress will be saved automatically in your browser.
        </p>

        <div
          class="flex items-center justify-between mb-6 pb-4 border-b border-primary-200"
        >
          <div>
            <span class="text-primary-600 font-bold text-xl"
              >{{ completedCount }} of {{ totalCount }}</span
            >
            <span class="text-gray-600 ml-2">tasks completed</span>
          </div>
          <div class="flex gap-4">
            <button @click="resetAllChecks" class="btn-outline btn-sm">
              Reset All
            </button>
            <button @click="saveProgress" class="btn-primary btn-sm">
              Save Progress
            </button>
          </div>
        </div>

        <!-- Search and filter controls -->
        <div class="mb-6">
          <div class="flex gap-4 flex-wrap">
            <div class="flex-1 min-w-64">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search tasks..."
                class="form-input"
              />
            </div>
            <div class="flex gap-2">
              <button
                @click="filterStatus = 'all'"
                class="px-3 py-1 rounded"
                :class="
                  filterStatus === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100'
                "
              >
                All
              </button>
              <button
                @click="filterStatus = 'completed'"
                class="px-3 py-1 rounded"
                :class="
                  filterStatus === 'completed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100'
                "
              >
                Completed
              </button>
              <button
                @click="filterStatus = 'incomplete'"
                class="px-3 py-1 rounded"
                :class="
                  filterStatus === 'incomplete'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100'
                "
              >
                Incomplete
              </button>
            </div>
          </div>
        </div>

        <!-- Accordion sections for each category -->
        <div class="space-y-4">
          <div
            v-for="(section, sectionIndex) in filteredSections"
            :key="sectionIndex"
            class="border border-primary-100 rounded-lg overflow-hidden"
          >
            <div
              @click="toggleSection(sectionIndex)"
              class="flex justify-between items-center p-4 cursor-pointer bg-primary-50 hover:bg-primary-100"
            >
              <h2 class="text-xl font-semibold text-primary-700 m-0">
                {{ section.title }}
              </h2>
              <div class="flex items-center">
                <span class="text-primary-600 mr-2"
                  >{{ getCompletedCountForSection(section) }}/{{
                    section.items.length
                  }}</span
                >
                <i
                  class="fas"
                  :class="
                    openSections.includes(sectionIndex)
                      ? 'fa-chevron-up'
                      : 'fa-chevron-down'
                  "
                ></i>
              </div>
            </div>

            <div
              v-if="openSections.includes(sectionIndex)"
              class="p-4 bg-white"
            >
              <div v-if="section.description" class="mb-4 text-gray-700">
                {{ section.description }}
              </div>

              <div class="space-y-2">
                <div
                  v-for="(item, itemIndex) in section.items"
                  :key="itemIndex"
                  class="p-3 border-b border-gray-100 hover:bg-primary-50 flex items-start gap-3"
                >
                  <div class="flex-shrink-0 pt-0.5">
                    <input
                      type="checkbox"
                      :id="`item-${sectionIndex}-${itemIndex}`"
                      v-model="checkedItems[`${sectionIndex}-${itemIndex}`]"
                      class="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </div>
                  <label
                    :for="`item-${sectionIndex}-${itemIndex}`"
                    class="flex-1 cursor-pointer"
                    :class="{
                      'line-through text-gray-400':
                        checkedItems[`${sectionIndex}-${itemIndex}`],
                    }"
                  >
                    {{ item }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="bg-primary-50 rounded-lg p-6 text-center">
        <h3 class="text-2xl mb-4">Need Help With Your SEO Strategy?</h3>
        <p class="mb-6">
          Our team at Ottawa Web Masters can create a personalized SEO plan to
          improve your website's visibility and rankings.
        </p>
        <router-link to="/contact#contact-form" class="btn-primary"
          >Get a Free Consultation</router-link
        >
      </div>
    </div>
  </div>

  <!-- Consultation Modal -->
  <div
    v-if="showConsultModal"
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
  >
    <div
      class="bg-white rounded-lg shadow-xl max-w-md w-full animate-fade-in relative"
    >
      <button
        @click="closeModal"
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        <i class="fas fa-times text-xl"></i>
      </button>
      <div class="p-6">
        <h3 class="text-2xl font-bold text-primary-600 mb-4">
          SEO doesn't have to be hard
        </h3>
        <p class="text-lg text-neutral-700 mb-6">
          Let our experts handle your SEO strategy while you focus on growing
          your business. Book a free consultation with us today.
        </p>
        <div class="flex justify-center">
          <router-link
            to="/contact#contact-form"
            @click="closeModal"
            class="btn-primary px-8 py-3 hover:text-white"
          >
            Book Your Free Consultation
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from "vue";
// Add development mode detection
const isDevelopment = ref(process.env.NODE_ENV === "development");

// Modal state
const showConsultModal = ref(false);
const modalHasBeenShown = ref(false);
const checklistInteractions = ref(0);
let pageTimer = null;

// Email form state
const email = ref("");
const agreeToTerms = ref(false);
const emailError = ref("");
const termsError = ref(false);
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const redirectProgress = ref(0);
const hasAccess = ref(false);
let progressInterval = null;

// Checklist data structure
const checklistData = [
  {
    title: "Technical SEO Essentials",
    items: [
      "Verify website is not blocking search engines in robots.txt",
      "Ensure XML sitemap is created and submitted to Google Search Console",
      "Check index coverage in Google Search Console for indexing issues",
      "Implement proper canonical tags to avoid duplicate content issues",
      "Create a logical site structure with clear navigation hierarchy",
      "Limit main navigation to 7-8 items maximum",
      "Keep important pages within 3 clicks from homepage",
      "Implement breadcrumb navigation for deeper pages",
      "Optimize image sizes and formats (WebP, AVIF)",
      "Enable browser caching",
      "Minify CSS, JavaScript, and HTML",
      "Implement lazy loading for images",
      "Use a content delivery network (CDN)",
      "Ensure website is fully responsive",
      "Pass Google's Mobile-Friendly Test",
      "Check for mobile usability issues in Google Search Console",
      "Ensure touch elements are properly sized and spaced",
      "Implement HTTPS security across entire site",
      "Fix broken links and 404 errors",
      "Set up proper 301 redirects for changed URLs",
      "Configure proper URL parameters in Google Search Console",
    ],
  },
  {
    title: "On-Page SEO Optimization",
    items: [
      "Create unique, keyword-rich title tags (50-60 characters)",
      "Write compelling meta descriptions (120-160 characters)",
      "Include primary keywords early in titles and descriptions",
      "Avoid duplicate title tags and meta descriptions",
      "Create short, descriptive URLs",
      "Include target keywords in URLs",
      "Use hyphens to separate words",
      "Maintain a consistent URL structure throughout the site",
      "Use one H1 tag per page containing primary keyword",
      "Implement logical H2, H3, etc. subheadings",
      "Include relevant keywords in subheadings",
      "Maintain proper heading hierarchy",
      "Place primary keywords in the first 100 words",
      "Maintain optimal keyword density (1-2%)",
      "Use semantic keywords and related terms",
      "Update content regularly to keep it fresh",
      "Format content for readability (short paragraphs, bullet points)",
      "Add descriptive, keyword-rich alt text to all images",
      "Use descriptive file names for images",
      "Include image captions where relevant",
      "Implement schema markup for important images",
    ],
  },
  {
    title: "Content Strategy & Quality",
    items: [
      "Conduct keyword research to identify target terms",
      "Create content for different stages of the buyer's journey",
      "Develop a content calendar for consistent publishing",
      "Identify content gaps compared to competitors",
      "Ensure content exceeds 1,000 words for key pages",
      "Create comprehensive, authoritative content on your topics",
      "Include statistics, quotes, and cited sources",
      "Incorporate original research or data when possible",
      "Publish how-to guides and tutorials",
      "Create case studies and success stories",
      "Develop informative blog posts on industry topics",
      "Consider infographics, videos, and other visual content",
      "Link to relevant internal pages within content",
      "Include outbound links to authoritative sources",
      "Update and refresh old content regularly",
      "Consider creating topic clusters around pillar content",
    ],
  },
  {
    title: "Off-Page SEO & Link Building",
    items: [
      "Identify high-quality, relevant sites for outreach",
      "Create shareable, link-worthy content",
      "Monitor competitors' backlinks for opportunities",
      "Develop a diverse backlink profile",
      "Guest post on industry blogs and publications",
      "Get listed in relevant industry directories",
      "Create and distribute infographics with embed codes",
      "Connect with influencers for content promotion",
      "Monitor brand mentions across the web",
      "Convert unlinked mentions to backlinks",
      "Engage with mentions on social media",
      "Create newsworthy content for PR opportunities",
      "Regularly audit backlinks for toxic links",
      "Disavow harmful links through Google Search Console",
      "Focus on relevance over quantity of backlinks",
      "Target links from domains with high authority",
    ],
  },
  {
    title: "Local SEO Optimization",
    items: [
      "Claim and verify Google Business Profile",
      "Complete all business information fields",
      "Add high-quality photos of your business",
      "Collect and respond to Google reviews",
      "Create location-specific pages for multiple locations",
      "Include local keywords in content",
      "Create content addressing local events or issues",
      "Develop a local content strategy",
      "Ensure Name, Address, Phone number consistency across all listings",
      "Update all directory listings with consistent information",
      "Fix any discrepancies in business citations",
      "Include structured data markup for local business",
      "Get listed in local business directories",
      "Join local business associations",
      "Sponsor local events or organizations",
      "Partner with complementary local businesses",
    ],
  },
  {
    title: "E-commerce SEO Enhancements",
    items: [
      "Write unique product descriptions for each item",
      "Include target keywords in product titles",
      "Add ALT text to all product images",
      "Implement product schema markup",
      "Optimize category page titles and descriptions",
      "Create unique content for each category page",
      "Implement proper internal linking between categories",
      "Use breadcrumb navigation on category pages",
      "Enable customer reviews on product pages",
      "Implement review schema markup",
      "Respond to customer reviews",
      "Feature highlighted reviews prominently",
      "Implement proper canonical tags for filtered pages",
      "Create an optimized XML sitemap for products",
      "Set up product structured data",
      "Handle out-of-stock products appropriately",
    ],
  },
  {
    title: "User Experience & Core Web Vitals",
    items: [
      "Optimize Largest Contentful Paint (LCP) < 2.5s",
      "Minimize First Input Delay (FID) < 100ms",
      "Reduce Cumulative Layout Shift (CLS) < 0.1",
      "Test regularly across different devices and browsers",
      "Reduce bounce rate with engaging content",
      "Increase time on site with related content suggestions",
      "Optimize conversion paths and calls-to-action",
      "Implement clear navigation and search functionality",
      "Ensure proper color contrast for text readability",
      "Add descriptive alt text for screen readers",
      "Implement keyboard navigation support",
      "Follow WCAG accessibility guidelines",
      "Monitor and optimize click-through rates from search",
      "Track user behavior with analytics tools",
      "A/B test page layouts and content",
      "Analyze and improve conversion rates",
    ],
  },
  {
    title: "SEO Monitoring & Maintenance",
    items: [
      "Conduct quarterly technical SEO audits",
      "Monitor keyword rankings weekly",
      "Review and update content performance monthly",
      "Track backlink profile changes",
      "Set up proper Google Analytics 4 tracking",
      "Configure conversion tracking",
      "Create custom dashboards for SEO metrics",
      "Set up automated reporting",
      "Monitor competitor keyword performance",
      "Analyze competitor content strategies",
      "Track competitor backlink acquisition",
      "Identify new industry trends and opportunities",
      "Stay informed about Google algorithm updates",
      "Adjust strategies based on new best practices",
      "Follow industry news and SEO trends",
      "Update tactics to align with search engine changes",
    ],
  },
];

// Checklist state management
const checkedItems = ref({});
const openSections = ref([0]); // First section open by default
const searchQuery = ref("");
const filterStatus = ref("all");

// Calculate total number of checklist items
const totalCount = computed(() => {
  return checklistData.reduce(
    (total, section) => total + section.items.length,
    0
  );
});

// Calculate number of completed items
const completedCount = computed(() => {
  return Object.values(checkedItems.value).filter(Boolean).length;
});

// Filter sections based on search query and completion status
const filterItems = (section) => {
  return section.items.filter((item, index) => {
    const itemKey = `${checklistData.indexOf(section)}-${index}`;
    const matchesSearch =
      !searchQuery.value ||
      item.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesFilter =
      filterStatus.value === "all" ||
      (filterStatus.value === "completed" && checkedItems.value[itemKey]) ||
      (filterStatus.value === "incomplete" && !checkedItems.value[itemKey]);

    return matchesSearch && matchesFilter;
  });
};

const filteredSections = computed(() => {
  if (!searchQuery.value && filterStatus.value === "all") {
    return checklistData;
  }

  return checklistData
    .map((section) => {
      const filteredItems = filterItems(section);
      return {
        ...section,
        items: filteredItems,
      };
    })
    .filter((section) => section.items.length > 0);
});

// Email form validation and submission
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Validate form inputs and return whether the form is valid
const validateForm = () => {
  // Reset errors
  emailError.value = "";
  termsError.value = false;

  let isValid = true;

  // Validate email
  if (!email.value.trim()) {
    emailError.value = "Email address is required";
    isValid = false;
  } else if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    isValid = false;
  }

  // Validate terms agreement
  if (!agreeToTerms.value) {
    termsError.value = true;
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  // First validate the form
  if (!validateForm()) {
    return;
  }

  // Set submitting state
  isSubmitting.value = true;

  try {
    // Send data to PHP backend
    const response = await fetch("/php/seo-checklist.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({
        email: email.value,
        agreeToTerms: agreeToTerms.value,
        source: "SEO Checklist Page",
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Submission failed");
    }

    // Handle successful submission
    handleSuccessfulSubmission();
  } catch (error) {
    // Handle submission error
    handleSubmissionError(error);
  }
};

const handleSuccessfulSubmission = () => {
  // Track lead capture event
  if (
    process.env.NODE_ENV === "production" &&
    typeof window.trackEvent === "function"
  ) {
    window.trackEvent("lead_capture", {
      form_type: "seo_checklist_access",
      source: "checklist_page",
    });
  }

  // Update state to show success message
  isSubmitting.value = false;
  isSubmitted.value = true;

  // Store email in localStorage for persistence
  localStorage.setItem("seo_checklist_email", email.value);
  localStorage.setItem("seo_checklist_access", "true");

  // Start progress animation
  startProgressAnimation();
};

const handleSubmissionError = (error) => {
  console.error("Form submission error:", error);
  isSubmitting.value = false;
  emailError.value = error.message || "Something went wrong. Please try again.";
};

// Progress animation
const startProgressAnimation = () => {
  const showDelay = 2000; // 2 seconds
  const increment = 100 / (showDelay / 100);

  progressInterval = setInterval(() => {
    redirectProgress.value += increment;

    if (redirectProgress.value >= 100) {
      clearInterval(progressInterval);
      redirectProgress.value = 100;

      // Show the checklist
      hasAccess.value = true;
    }
  }, 100);
};

// Get completed count for a specific section
const getCompletedCountForSection = (section) => {
  const sectionIndex = checklistData.findIndex(
    (s) => s.title === section.title
  );
  let count = 0;

  for (let i = 0; i < section.items.length; i++) {
    if (checkedItems.value[`${sectionIndex}-${i}`]) {
      count++;
    }
  }

  return count;
};

// Toggle section expansion
const toggleSection = (index) => {
  if (openSections.value.includes(index)) {
    openSections.value = openSections.value.filter((i) => i !== index);
  } else {
    openSections.value.push(index);
  }
};

// Save progress to localStorage
const saveProgress = () => {
  localStorage.setItem(
    "seo-checklist-progress",
    JSON.stringify(checkedItems.value)
  );

  // Track event if in production
  if (
    process.env.NODE_ENV === "production" &&
    typeof window.trackEvent === "function"
  ) {
    window.trackEvent("save_checklist_progress", {
      completed_items: completedCount.value,
      completion_percentage: Math.round(
        (completedCount.value / totalCount.value) * 100
      ),
    });
  }

  // Show success message
  alert("Your progress has been saved successfully!");
};

// Reset all checks
const resetAllChecks = () => {
  if (confirm("Are you sure you want to reset all your progress?")) {
    checkedItems.value = {};
    localStorage.removeItem("seo-checklist-progress");
  }
};

// Cleanup function for progress interval
const cleanup = () => {
  if (progressInterval) {
    clearInterval(progressInterval);
  }
};

// Skip email form for development mode
const skipEmailForm = () => {
  if (isDevelopment.value) {
    // Store a flag in localStorage to simulate email submission
    localStorage.setItem("seo_checklist_email", "dev@example.com");
    localStorage.setItem("seo_checklist_access", "true");

    // Set hasAccess to true to immediately show the checklist
    hasAccess.value = true;

    // Track for debugging purposes
    console.log("[DEV MODE] Email form skipped");
  }
};

// Function to show the modal
const showModal = () => {
  if (!modalHasBeenShown.value && hasAccess.value) {
    showConsultModal.value = true;
    modalHasBeenShown.value = true;

    // Track modal view if analytics available
    if (
      process.env.NODE_ENV === "production" &&
      typeof window.trackEvent === "function"
    ) {
      window.trackEvent("modal_view", {
        modal_type: "seo_consultation",
        trigger: checklistInteractions.value >= 3 ? "interaction" : "time",
      });
    }
  }
};

// Function to close the modal
const closeModal = () => {
  showConsultModal.value = false;
};

// Initialize component on mount
onMounted(() => {
  // Existing initialization code
  // Check if user already has access
  const hasStoredAccess =
    localStorage.getItem("seo_checklist_access") === "true";
  if (hasStoredAccess) {
    hasAccess.value = true;
  }

  // Load saved progress from localStorage if available
  const savedProgress = localStorage.getItem("seo-checklist-progress");
  if (savedProgress) {
    checkedItems.value = JSON.parse(savedProgress);
  }

  // Add dev mode auto-skip option (uncomment to enable automatic skipping)
  // if (isDevelopment.value && !hasAccess.value) {
  //     skipEmailForm();
  // }

  // Set timer for 40 seconds to show modal
  if (hasAccess.value) {
    pageTimer = setTimeout(() => {
      showModal();
    }, 40000);
  }
});

// Watch for changes to checked items
watch(
  checkedItems,
  (newVal, oldVal) => {
    // Save progress
    localStorage.setItem("seo-checklist-progress", JSON.stringify(newVal));

    // Count interactions for modal trigger
    if (hasAccess.value && !modalHasBeenShown.value) {
      const oldCheckedCount = Object.values(oldVal).filter(Boolean).length;
      const newCheckedCount = Object.values(newVal).filter(Boolean).length;

      if (newCheckedCount > oldCheckedCount) {
        checklistInteractions.value += 1;

        // Show modal after 3 interactions
        if (checklistInteractions.value >= 3) {
          showModal();
        }
      }
    }
  },
  { deep: true }
);

// Cleanup on component unmount
onBeforeUnmount(() => {
  cleanup();

  // Clear the page timer
  if (pageTimer) {
    clearTimeout(pageTimer);
  }
});
</script>
