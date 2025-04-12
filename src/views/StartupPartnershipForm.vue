<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Form state
const currentStep = ref(1);
const totalSteps = 6; // Now 6 steps including terms agreement

// Agreement state tracking
const agreements = ref({
  programStructure: false,
  developmentScope: false,
  supportTerms: false,
  clientResponsibilities: false,
  revenueRequirements: false,
  buyoutProvisions: false,
  intellectualProperty: false,
  terminationTerms: false,
  legalJurisdiction: false,
});

// Form data
const formData = ref({
  // Step 1: Program Terms Agreement
  // (checkboxes handled separately in agreements object)

  // Step 2: Basic Information
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",

  // Step 3: Business Idea
  businessDescription: "",
  problemSolved: "",
  targetMarket: "",
  competitiveDifferentiator: "",
  currentStage: "concept", // concept, prototype, mvp, revenue

  // Step 4: Market Information
  industrySize: "",
  targetCustomerProfile: "",
  competitorAnalysis: "",
  marketEntryStrategy: "",
  revenueStrategy: "",

  // Step 5: Financial Information
  initialInvestment: "",
  monthlyOperatingCosts: "",
  projectedFirstYearRevenue: "",
  projectedBreakeven: "",
  projectedMonth6Revenue: "",
  existingFunding: "no", // yes, no
  fundingDetails: "",

  // Step 6: Technical Requirements
  applicationComplexity: "medium", // simple, medium, complex
  keyFeatures: "",
  userTypes: "",
  integrationRequirements: "",
  scalabilityNeeds: "",
  timelineExpectations: "",
});

// Form validation
const validations = {
  1: computed(() => {
    return (
      agreements.value.programStructure &&
      agreements.value.developmentScope &&
      agreements.value.supportTerms &&
      agreements.value.clientResponsibilities &&
      agreements.value.revenueRequirements &&
      agreements.value.buyoutProvisions &&
      agreements.value.intellectualProperty &&
      agreements.value.terminationTerms &&
      agreements.value.legalJurisdiction
    );
  }),
  2: computed(() => {
    return (
      !!formData.value.businessName &&
      !!formData.value.contactName &&
      !!formData.value.email &&
      !!formData.value.phone
    );
  }),
  3: computed(() => {
    return (
      !!formData.value.businessDescription &&
      !!formData.value.problemSolved &&
      !!formData.value.targetMarket
    );
  }),
  4: computed(() => {
    return (
      !!formData.value.industrySize &&
      !!formData.value.targetCustomerProfile &&
      !!formData.value.revenueStrategy
    );
  }),
  5: computed(() => {
    return (
      !!formData.value.initialInvestment &&
      !!formData.value.projectedFirstYearRevenue &&
      !!formData.value.projectedBreakeven &&
      !!formData.value.projectedMonth6Revenue
    );
  }),
  6: computed(() => {
    return !!formData.value.keyFeatures && !!formData.value.userTypes;
  }),
};

// Check if current step is valid
const isCurrentStepValid = computed(() => {
  return validations[currentStep.value].value;
});

// Navigation
const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++;
    window.scrollTo(0, 0);
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
    window.scrollTo(0, 0);
  }
};

// Submit form
const submitForm = async () => {
  try {
    // Here you would typically send this data to your backend
    console.log("Form submitted:", formData.value);
    console.log("Agreements:", agreements.value);

    // Show success message and reset form
    alert(
      "Thank you for your application. Our team will review your information and contact you shortly."
    );

    // Redirect to thank you page or home
    router.push("/");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error submitting your application. Please try again.");
  }
};

// Formatted progress
const progress = computed(() => {
  return (currentStep.value / totalSteps) * 100;
});

// Helper function to determine complexity-based equity and term
const getEquityAndTerm = computed(() => {
  switch (formData.value.applicationComplexity) {
    case "simple":
      return { equity: "5%", term: "5 years" };
    case "medium":
      return { equity: "6-7%", term: "6-7 years" };
    case "complex":
      return { equity: "8%", term: "8 years" };
    default:
      return { equity: "5-8%", term: "5-8 years" };
  }
});
</script>

<template>
  <div class="container-site section-padding">
    <h1 class="text-3xl mb-8">Startup Partnership Program Application</h1>

    <!-- Progress bar -->
    <div class="mb-8">
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div
          class="bg-primary h-2.5 rounded-full"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      <p class="text-sm text-right mt-1">
        Step {{ currentStep }} of {{ totalSteps }}
      </p>
    </div>

    <!-- Form -->
    <div class="card p-6">
      <!-- Step 1: Terms Agreement -->
      <div v-if="currentStep === 1">
        <h2 class="text-2xl mb-6">Partnership Terms Agreement</h2>
        <p class="mb-4">
          Please review and agree to each section of our partnership terms
          below. All sections require agreement to proceed.
        </p>

        <div class="space-y-8">
          <!-- Program Structure Section -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Program Structure</h3>
            <div class="mb-4">
              <p>
                This document outlines the legal framework and operational
                details of WebMaster's Startup Partnership Program, designed to
                assist entrepreneurs in developing web-based SaaS applications
                while minimizing upfront costs.
              </p>
              <ul class="list-disc ml-6 my-3">
                <li>Initial administrative fee: $1,500 (non-refundable)</li>
                <li>Equity stake: 5-8% of your business</li>
                <li>Term duration: 5-8 years from application launch</li>
                <li>
                  Equity percentage and term length determined by application
                  complexity and scope
                </li>
                <li>
                  Minimum revenue requirement: $1,000/month by month 6
                  post-launch
                </li>
              </ul>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.programStructure"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Program Structure terms</span
                >
              </label>
            </div>
          </div>

          <!-- Development Scope Section -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Development Scope</h3>
            <div class="mb-4">
              <p>
                The partnership covers the development of a custom web-based
                SaaS application as defined and agreed upon in the scope
                document. Any features or functionality not explicitly included
                in the signed scope document will be considered outside the
                initial development agreement.
              </p>
              <p class="mt-2">This includes:</p>
              <ul class="list-disc ml-6 my-3">
                <li>Custom SaaS application development</li>
                <li>Responsive design for all devices</li>
                <li>Secure database architecture</li>
                <li>Initial branding support</li>
              </ul>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.developmentScope"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Development Scope terms</span
                >
              </label>
            </div>
          </div>

          <!-- Support Terms Section -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Support Terms</h3>
            <div class="mb-4">
              <p>During the partnership term, WebMaster will provide:</p>
              <ul class="list-disc ml-6 my-3">
                <li>Bug fixes for issues related to the original scope</li>
                <li>Basic scaling support as user numbers increase</li>
                <li>Security updates and critical patches</li>
              </ul>
              <p>
                New feature development, substantial modifications, or major
                upgrades will require additional investment outside the
                partnership agreement.
              </p>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.supportTerms"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Support Terms</span
                >
              </label>
            </div>
          </div>

          <!-- Client Responsibilities -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Client Responsibilities</h3>
            <div class="mb-4">
              <p>As the client, you will be responsible for:</p>
              <ul class="list-disc ml-6 my-3">
                <li>Payment of hosting costs and third-party service fees</li>
                <li>Content creation and management</li>
                <li>Marketing and user acquisition</li>
                <li>Customer support for end users</li>
                <li>Compliance with applicable laws and regulations</li>
              </ul>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.clientResponsibilities"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Client Responsibilities</span
                >
              </label>
            </div>
          </div>

          <!-- Revenue Requirements -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Revenue Requirements</h3>
            <div class="mb-4">
              <p>
                As part of this partnership agreement, the following revenue
                requirements apply:
              </p>
              <ul class="list-disc ml-6 my-3">
                <li>
                  The application must generate a minimum of $1,000 per month in
                  revenue by the end of month 6 following launch
                </li>
                <li>
                  If this revenue threshold is not met, the client agrees to
                  repay WebMaster the base development cost of the application
                </li>
                <li>
                  The base development cost will be calculated and documented in
                  the partnership agreement before signing
                </li>
                <li>
                  A payment plan may be negotiated if the client is unable to
                  pay the full amount immediately
                </li>
                <li>
                  Revenue will be verified through access to application
                  analytics and payment processing accounts
                </li>
              </ul>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.revenueRequirements"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Revenue Requirements</span
                >
              </label>
            </div>
          </div>

          <!-- Buyout Provisions -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Buyout Provisions</h3>
            <div class="mb-4">
              <p>
                The client may buy out WebMaster's equity stake at any point
                during the partnership term. The buyout value will be calculated
                based on:
              </p>
              <ul class="list-disc ml-6 my-3">
                <li>Application complexity and development value</li>
                <li>Time and resources invested by WebMaster</li>
                <li>Current and projected business performance</li>
                <li>Percentage of remaining term</li>
              </ul>
              <p>The specific buyout formula is:</p>
              <div class="bg-neutral-50 p-4 rounded my-3">
                <p class="font-mono">
                  Buyout Value = (Base Development Value + Business Value
                  Factor) × Remaining Term Percentage
                </p>
              </div>
              <p>
                All buyout agreements must be executed in writing and approved
                by both parties.
              </p>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.buyoutProvisions"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Buyout Provisions</span
                >
              </label>
            </div>
          </div>

          <!-- Intellectual Property -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Intellectual Property</h3>
            <div class="mb-4">
              <p>
                Upon full payment of the administrative fee and execution of the
                partnership agreement:
              </p>
              <ul class="list-disc ml-6 my-3">
                <li>
                  The client retains full ownership of the business concept and
                  brand
                </li>
                <li>The client owns the application's content and data</li>
                <li>
                  WebMaster retains rights to the underlying technical
                  implementations that are not unique to the client's business
                </li>
              </ul>
              <p>
                Upon completion of the partnership term or execution of the
                buyout option, all rights to the application transfer fully to
                the client.
              </p>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.intellectualProperty"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Intellectual Property
                  terms</span
                >
              </label>
            </div>
          </div>

          <!-- Termination -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Termination</h3>
            <div class="mb-4">
              <p>
                The partnership may be terminated under the following
                conditions:
              </p>
              <ul class="list-disc ml-6 my-3">
                <li>Mutual agreement of both parties</li>
                <li>Execution of the buyout option</li>
                <li>Material breach of the agreement by either party</li>
                <li>
                  Failure to launch the application within 12 months of
                  agreement execution
                </li>
                <li>
                  Abandonment of the business for a period exceeding 6 months
                </li>
                <li>
                  Failure to meet the minimum revenue requirement and subsequent
                  non-payment of the base development cost
                </li>
              </ul>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.terminationTerms"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Termination terms</span
                >
              </label>
            </div>
          </div>

          <!-- Legal Jurisdiction -->
          <div class="border border-neutral-200 rounded-lg p-5">
            <h3 class="text-xl mb-3">Legal Jurisdiction</h3>
            <div class="mb-4">
              <p>
                This agreement is governed by the laws of [Your State/Country],
                and any disputes will be resolved through arbitration according
                to the rules of the [Relevant Arbitration Association].
              </p>
            </div>
            <div class="bg-primary-50 p-3 rounded">
              <label class="flex items-start cursor-pointer group">
                <div class="relative flex items-center h-5">
                  <input
                    type="checkbox"
                    v-model="agreements.legalJurisdiction"
                    class="sr-only peer"
                  />
                  <div
                    class="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors"
                  ></div>
                  <div
                    class="absolute opacity-0 w-3 h-2 top-[4px] left-[3px] border-b-2 border-l-2 border-white rotate-[-45deg] peer-checked:opacity-100 transition-opacity"
                  ></div>
                </div>
                <span class="ml-3 text-sm"
                  >I have read and agree to the Legal Jurisdiction terms</span
                >
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 2: Basic Information -->
      <div v-if="currentStep === 2">
        <h2 class="text-2xl mb-6">Basic Information</h2>

        <div class="mb-4">
          <label for="businessName" class="form-label">Business Name *</label>
          <input
            type="text"
            id="businessName"
            v-model="formData.businessName"
            class="form-input"
            required
          />
        </div>

        <div class="mb-4">
          <label for="contactName" class="form-label">Contact Name *</label>
          <input
            type="text"
            id="contactName"
            v-model="formData.contactName"
            class="form-input"
            required
          />
        </div>

        <div class="mb-4">
          <label for="email" class="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            class="form-input"
            required
          />
        </div>

        <div class="mb-4">
          <label for="phone" class="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            v-model="formData.phone"
            class="form-input"
            required
          />
        </div>

        <div class="mb-4">
          <label for="website" class="form-label"
            >Website (if applicable)</label
          >
          <input
            type="url"
            id="website"
            v-model="formData.website"
            class="form-input"
          />
        </div>
      </div>

      <!-- Step 3: Business Idea -->
      <div v-if="currentStep === 3">
        <h2 class="text-2xl mb-6">Business Concept</h2>

        <div class="mb-4">
          <label for="businessDescription" class="form-label"
            >Business Description *</label
          >
          <textarea
            id="businessDescription"
            v-model="formData.businessDescription"
            rows="4"
            class="form-input"
            placeholder="Describe your business concept in detail"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="problemSolved" class="form-label">Problem Solved *</label>
          <textarea
            id="problemSolved"
            v-model="formData.problemSolved"
            rows="3"
            class="form-input"
            placeholder="What problem does your business solve for customers?"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="targetMarket" class="form-label">Target Market *</label>
          <textarea
            id="targetMarket"
            v-model="formData.targetMarket"
            rows="3"
            class="form-input"
            placeholder="Describe your target customers and market size"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="competitiveDifferentiator" class="form-label"
            >Competitive Advantage</label
          >
          <textarea
            id="competitiveDifferentiator"
            v-model="formData.competitiveDifferentiator"
            rows="3"
            class="form-input"
            placeholder="What makes your solution better than existing alternatives?"
          ></textarea>
        </div>

        <div class="mb-4">
          <label class="form-label">Current Stage</label>
          <div class="flex flex-wrap gap-4 mb-2">
            <label class="inline-flex items-center cursor-pointer">
              <div class="relative flex items-center h-5">
                <input
                  type="radio"
                  v-model="formData.currentStage"
                  value="concept"
                  class="sr-only peer"
                />
                <div
                  class="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-2 peer-checked:border-primary transition-colors"
                ></div>
                <div
                  class="absolute opacity-0 w-2 h-2 top-1.5 left-1.5 bg-primary rounded-full peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
              <span class="ml-2">Concept</span>
            </label>
            <label class="inline-flex items-center cursor-pointer">
              <div class="relative flex items-center h-5">
                <input
                  type="radio"
                  v-model="formData.currentStage"
                  value="prototype"
                  class="sr-only peer"
                />
                <div
                  class="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-2 peer-checked:border-primary transition-colors"
                ></div>
                <div
                  class="absolute opacity-0 w-2 h-2 top-1.5 left-1.5 bg-primary rounded-full peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
              <span class="ml-2">Prototype</span>
            </label>
            <label class="inline-flex items-center cursor-pointer">
              <div class="relative flex items-center h-5">
                <input
                  type="radio"
                  v-model="formData.currentStage"
                  value="mvp"
                  class="sr-only peer"
                />
                <div
                  class="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-2 peer-checked:border-primary transition-colors"
                ></div>
                <div
                  class="absolute opacity-0 w-2 h-2 top-1.5 left-1.5 bg-primary rounded-full peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
              <span class="ml-2">MVP</span>
            </label>
            <label class="inline-flex items-center cursor-pointer">
              <div class="relative flex items-center h-5">
                <input
                  type="radio"
                  v-model="formData.currentStage"
                  value="revenue"
                  class="sr-only peer"
                />
                <div
                  class="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-2 peer-checked:border-primary transition-colors"
                ></div>
                <div
                  class="absolute opacity-0 w-2 h-2 top-1.5 left-1.5 bg-primary rounded-full peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
              <span class="ml-2">Revenue Generating</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Step 4: Market Information -->
      <div v-if="currentStep === 4">
        <h2 class="text-2xl mb-6">Market Information</h2>

        <div class="mb-4">
          <label for="industrySize" class="form-label"
            >Industry Size and Growth *</label
          >
          <textarea
            id="industrySize"
            v-model="formData.industrySize"
            rows="3"
            class="form-input"
            placeholder="What is the total market size? What is the growth rate?"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="targetCustomerProfile" class="form-label"
            >Target Customer Profile *</label
          >
          <textarea
            id="targetCustomerProfile"
            v-model="formData.targetCustomerProfile"
            rows="3"
            class="form-input"
            placeholder="Demographics, behaviors, needs, and pain points of your ideal customers"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="competitorAnalysis" class="form-label"
            >Competitor Analysis</label
          >
          <textarea
            id="competitorAnalysis"
            v-model="formData.competitorAnalysis"
            rows="4"
            class="form-input"
            placeholder="List your main competitors and how your solution compares"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="marketEntryStrategy" class="form-label"
            >Market Entry Strategy</label
          >
          <textarea
            id="marketEntryStrategy"
            v-model="formData.marketEntryStrategy"
            rows="3"
            class="form-input"
            placeholder="How will you acquire your first customers?"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="revenueStrategy" class="form-label"
            >Revenue Generation Strategy *</label
          >
          <textarea
            id="revenueStrategy"
            v-model="formData.revenueStrategy"
            rows="3"
            class="form-input"
            placeholder="Describe your strategy to generate at least $1,000/month by month 6 post-launch"
          ></textarea>
          <p class="text-sm text-primary-700 mt-1">
            Must meet the $1,000/month requirement by month 6 to avoid repayment
            obligation
          </p>
        </div>
      </div>

      <!-- Step 5: Financial Information -->
      <div v-if="currentStep === 5">
        <h2 class="text-2xl mb-6">Financial Information</h2>

        <div class="mb-4">
          <label for="initialInvestment" class="form-label"
            >Initial Investment Required *</label
          >
          <input
            type="text"
            id="initialInvestment"
            v-model="formData.initialInvestment"
            class="form-input"
            placeholder="Estimated capital needed to start the business"
          />
        </div>

        <div class="mb-4">
          <label for="monthlyOperatingCosts" class="form-label"
            >Monthly Operating Costs</label
          >
          <input
            type="text"
            id="monthlyOperatingCosts"
            v-model="formData.monthlyOperatingCosts"
            class="form-input"
            placeholder="Estimated monthly expenses"
          />
        </div>

        <div class="mb-4">
          <label for="projectedFirstYearRevenue" class="form-label"
            >Projected First Year Revenue *</label
          >
          <input
            type="text"
            id="projectedFirstYearRevenue"
            v-model="formData.projectedFirstYearRevenue"
            class="form-input"
          />
        </div>

        <div class="mb-4">
          <label for="projectedMonth6Revenue" class="form-label"
            >Projected Month 6 Revenue *</label
          >
          <input
            type="text"
            id="projectedMonth6Revenue"
            v-model="formData.projectedMonth6Revenue"
            class="form-input"
            placeholder="Projected monthly revenue by month 6 post-launch"
          />
          <p class="text-sm text-primary-700 mt-1">
            Must be at least $1,000/month to avoid repayment obligation
          </p>
        </div>

        <div class="mb-4">
          <label for="projectedBreakeven" class="form-label"
            >Projected Breakeven Point *</label
          >
          <input
            type="text"
            id="projectedBreakeven"
            v-model="formData.projectedBreakeven"
            class="form-input"
            placeholder="When do you expect to reach profitability?"
          />
        </div>

        <div class="mb-4">
          <label class="form-label">Existing Funding</label>
          <div class="mb-4 p-4 border border-primary-200 bg-primary-50 rounded">
            <label class="flex items-start cursor-pointer">
              <div class="relative flex items-center h-5 mt-1">
                <input
                  type="radio"
                  v-model="formData.existingFunding"
                  value="yes"
                  class="sr-only peer"
                />
                <div
                  class="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-2 peer-checked:border-primary transition-colors"
                ></div>
                <div
                  class="absolute opacity-0 w-2 h-2 top-1.5 left-1.5 bg-primary rounded-full peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
              <span class="ml-3">Yes</span>
            </label>
            <label class="flex items-start cursor-pointer mt-2">
              <div class="relative flex items-center h-5 mt-1">
                <input
                  type="radio"
                  v-model="formData.existingFunding"
                  value="no"
                  class="sr-only peer"
                />
                <div
                  class="w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:border-2 peer-checked:border-primary transition-colors"
                ></div>
                <div
                  class="absolute opacity-0 w-2 h-2 top-1.5 left-1.5 bg-primary rounded-full peer-checked:opacity-100 transition-opacity"
                ></div>
              </div>
              <span class="ml-3">No</span>
            </label>
          </div>
          <div v-if="formData.existingFunding === 'yes'">
            <label for="fundingDetails" class="form-label"
              >Funding Details</label
            >
            <textarea
              id="fundingDetails"
              v-model="formData.fundingDetails"
              rows="2"
              class="form-input"
              placeholder="Describe any existing funding, investments, or loans"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Step 6: Technical Requirements -->
      <div v-if="currentStep === 6">
        <h2 class="text-2xl mb-6">Technical Requirements</h2>

        <div class="mb-4">
          <label class="form-label">Application Complexity</label>
          <div class="flex flex-wrap gap-4 mb-2">
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="formData.applicationComplexity"
                value="simple"
                class="mr-2"
              />
              <span>Simple (5% equity, 5 years)</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="formData.applicationComplexity"
                value="medium"
                class="mr-2"
              />
              <span>Medium (6-7% equity, 6-7 years)</span>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                v-model="formData.applicationComplexity"
                value="complex"
                class="mr-2"
              />
              <span>Complex (8% equity, 8 years)</span>
            </label>
          </div>
          <p class="text-sm text-gray-600 mt-1">
            Based on your selection, our equity stake would be approximately
            {{ getEquityAndTerm.equity }} for {{ getEquityAndTerm.term }}.
          </p>
        </div>

        <div class="mb-4">
          <label for="keyFeatures" class="form-label"
            >Key Features Required *</label
          >
          <textarea
            id="keyFeatures"
            v-model="formData.keyFeatures"
            rows="4"
            class="form-input"
            placeholder="List the essential features your application needs"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="userTypes" class="form-label">User Types/Roles *</label>
          <textarea
            id="userTypes"
            v-model="formData.userTypes"
            rows="3"
            class="form-input"
            placeholder="Describe the different types of users (admin, customer, etc.)"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="integrationRequirements" class="form-label"
            >Integration Requirements</label
          >
          <textarea
            id="integrationRequirements"
            v-model="formData.integrationRequirements"
            rows="3"
            class="form-input"
            placeholder="List any third-party services or APIs needed"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="scalabilityNeeds" class="form-label"
            >Scalability Needs</label
          >
          <textarea
            id="scalabilityNeeds"
            v-model="formData.scalabilityNeeds"
            rows="2"
            class="form-input"
            placeholder="Describe your expected user growth and scalability requirements"
          ></textarea>
        </div>

        <div class="mb-4">
          <label for="timelineExpectations" class="form-label"
            >Timeline Expectations</label
          >
          <textarea
            id="timelineExpectations"
            v-model="formData.timelineExpectations"
            rows="2"
            class="form-input"
            placeholder="When do you hope to launch the application?"
          ></textarea>
        </div>
      </div>

      <!-- Form navigation buttons -->
      <div class="flex justify-between mt-8">
        <button v-if="currentStep > 1" @click="prevStep" class="btn-outline">
          Previous
        </button>
        <div v-else></div>

        <div>
          <button
            v-if="currentStep < totalSteps"
            @click="nextStep"
            class="btn-primary"
            :disabled="!isCurrentStepValid"
          >
            Next
          </button>
          <button
            v-else
            @click="submitForm"
            class="btn-primary"
            :disabled="!isCurrentStepValid"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>

    <div class="mt-6 text-sm text-gray-600">
      <p>* Required fields</p>
      <p class="mt-2">
        By submitting this form, you agree to all terms and conditions described
        above, and acknowledge that the information provided will be used to
        evaluate your business for our Startup Partnership Program.
      </p>
    </div>
  </div>
</template>
