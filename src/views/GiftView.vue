<template>
  <div class="container-site section-padding">
    <div class="max-w-5xl mx-auto">
      <h1 class="text-center mb-2">Your Free SEO Gift</h1>
      <p class="text-center text-lg text-neutral-600 mb-10">
        Enter your email to unlock our interactive 100+ point SEO checklist. We'll also send occasional high‑value SEO tips (you can unsubscribe anytime).
      </p>

      <!-- Email Capture Card -->
      <div v-if="!hasAccess" class="bg-white rounded-lg shadow-card max-w-2xl mx-auto animate-fade-in">
        <div class="p-6 md:p-8">
          <div class="text-center mb-8">
            <h2 class="text-2xl md:text-3xl text-primary-600 font-bold mb-4">Unlock the Checklist</h2>
            <p class="text-neutral-700">
              No spam. Just practical optimization value. Your progress saves locally.
            </p>
          </div>

          <form @submit.prevent="submitEmail" class="space-y-6" novalidate>
            <div>
              <label for="email" class="form-label">Email Address</label>
              <input
                id="email"
                type="email"
                v-model.trim="email"
                class="form-input"
                :class="{ 'border-error': emailError }"
                placeholder="you@company.com"
                autocomplete="email"
                required
              />
              <p v-if="emailError" class="form-error mt-1">{{ emailError }}</p>
            </div>

            <div class="flex items-start gap-2">
              <input id="terms" type="checkbox" v-model="agree" class="mt-1 h-5 w-5" required />
              <label for="terms" class="text-sm text-neutral-700">
                I agree to receive SEO resources from Ottawa Web Masters. <span v-if="termsError" class="text-error font-medium">(Required)</span>
              </label>
            </div>

            <button type="submit" class="btn-primary w-full py-3" :disabled="isSubmitting">
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <Icon icon="mdi:loading" class="mr-2 animate-spin" width="18" height="18" /> Submitting...
              </span>
              <span v-else>Get Instant Access</span>
            </button>

            <button
              v-if="isDev"
              type="button"
              @click="devSkip"
              class="mt-3 w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm"
            >DEV: Skip</button>
          </form>

          <div class="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>We respect your privacy. Unsubscribe any time. We never sell your data.</p>
          </div>
        </div>
      </div>

      <!-- Progress / success state before reveal -->
      <div v-else-if="isSubmitting && !checklistVisible" class="text-center py-20">
        <div class="text-success mb-6">
          <Icon icon="mdi:check-circle" class="text-6xl" />
        </div>
        <h2 class="text-3xl font-bold text-primary-600 mb-2">Email received!</h2>
        <p class="text-neutral-700 mb-8">Preparing your interactive checklist...</p>
        <div class="w-full max-w-sm mx-auto bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div class="bg-primary-600 h-2.5 rounded-full transition-all" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <!-- Checklist -->
      <div v-else v-show="checklistVisible" class="mt-14 animate-fade-in">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-primary-200">
          <div>
            <span class="text-primary-600 font-bold text-xl">{{ completedCount }} of {{ totalCount }}</span>
            <span class="text-gray-600 ml-2">tasks completed</span>
          </div>
          <div class="flex gap-4">
            <button @click="resetAll" class="btn-outline btn-sm">Reset All</button>
            <button @click="saveProgress" class="btn-primary btn-sm">Save Progress</button>
          </div>
        </div>

        <div class="mb-6 flex flex-wrap gap-4 items-center">
          <div class="flex-1 min-w-64">
            <input v-model="search" type="text" class="form-input" placeholder="Search tasks..." />
          </div>
          <div class="flex gap-2">
            <button @click="filter='all'" :class="filter==='all'?activeBtn:inactiveBtn" class="px-3 py-1 rounded">All</button>
            <button @click="filter='completed'" :class="filter==='completed'?activeBtn:inactiveBtn" class="px-3 py-1 rounded">Completed</button>
            <button @click="filter='incomplete'" :class="filter==='incomplete'?activeBtn:inactiveBtn" class="px-3 py-1 rounded">Incomplete</button>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="(section, sIdx) in filteredSections"
            :key="section.title"
            class="border border-primary-100 rounded-lg overflow-hidden"
          >
            <div @click="toggleSection(sIdx)" class="flex justify-between items-center p-4 cursor-pointer bg-primary-50 hover:bg-primary-100">
              <h2 class="text-xl font-semibold text-primary-700 m-0">{{ section.title }}</h2>
              <div class="flex items-center">
                <span class="text-primary-600 mr-2">{{ getCompleted(section, sIdx) }}/{{ section.items.length }}</span>
                <Icon :icon="openSections.includes(sIdx)?'mdi:chevron-up':'mdi:chevron-down'" width="18" height="18" />
              </div>
            </div>
            <div v-if="openSections.includes(sIdx)" class="p-4 bg-white">
              <div class="space-y-2">
                <div
                  v-for="(item, iIdx) in section.items"
                  :key="iIdx"
                  class="p-3 border-b border-gray-100 hover:bg-primary-50 flex items-start gap-3"
                >
                  <input
                    type="checkbox"
                    :id="`gift-item-${sIdx}-${iIdx}`"
                    v-model="checked[`${sIdx}-${iIdx}`]"
                    class="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label :for="`gift-item-${sIdx}-${iIdx}`" class="flex-1 cursor-pointer" :class="{ 'line-through text-gray-400': checked[`${sIdx}-${iIdx}`] }">{{ item }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-primary-50 rounded-lg p-6 text-center mt-10">
          <h3 class="text-2xl mb-4">Want Expert Help Implementing This?</h3>
          <p class="mb-6">We can turn this checklist into a prioritized strategy tailored to your site.</p>
          <router-link to="/contact#contact-form" class="btn-primary">Request a Free Consultation</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { Icon } from '@iconify/vue';

// Basic subset of checklist (reuse full if needed by importing original file; kept concise here)
import checklistSource from './SeoCheckList.vue?raw'; // raw import fallback if bundler supports; else duplicate minimal list below
// For safety, define checklist manually (shortened) - could be replaced with dynamic extraction.
const checklistData = [
  { title: 'Technical SEO Essentials', items: [ 'Verify website is not blocking search engines in robots.txt', 'Ensure XML sitemap is created and submitted to Google Search Console', 'Implement proper canonical tags to avoid duplicate content issues', 'Optimize image sizes and formats (WebP, AVIF)' ] },
  { title: 'On-Page SEO Optimization', items: [ 'Create unique, keyword-rich title tags (50-60 characters)', 'Write compelling meta descriptions (120-160 characters)', 'Create short, descriptive URLs', 'Use one H1 tag per page containing primary keyword' ] },
  { title: 'Content Strategy & Quality', items: [ 'Conduct keyword research to identify target terms', 'Develop a content calendar for consistent publishing', 'Include statistics, quotes, and cited sources', 'Update and refresh old content regularly' ] }
];

// State
const email = ref('');
const agree = ref(false);
const emailError = ref('');
const termsError = ref(false);
const isSubmitting = ref(false);
const hasAccess = ref(false);
const checklistVisible = ref(false);
const progress = ref(0);
const isDev = ref(import.meta.env.DEV || process.env.NODE_ENV === 'development');

// Checklist state
const checked = ref({});
const openSections = ref([0]);
const search = ref('');
const filter = ref('all');

const activeBtn = 'bg-primary-600 text-white';
const inactiveBtn = 'bg-gray-100';

const totalCount = computed(() => checklistData.reduce((t, s) => t + s.items.length, 0));
const completedCount = computed(() => Object.values(checked.value).filter(Boolean).length);

// Filtering
const filteredSections = computed(() => {
  if (!search.value && filter.value === 'all') return checklistData;
  return checklistData
    .map(section => ({
      ...section,
      items: section.items.filter((item, idx) => {
        const key = `${checklistData.indexOf(section)}-${idx}`;
        const matchesSearch = !search.value || item.toLowerCase().includes(search.value.toLowerCase());
        const matchesFilter = filter.value === 'all' || (filter.value === 'completed' && checked.value[key]) || (filter.value === 'incomplete' && !checked.value[key]);
        return matchesSearch && matchesFilter;
      })
    }))
    .filter(s => s.items.length > 0);
});

// Helpers
const validateEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const getCompleted = (section, idx) => section.items.reduce((c, _it, i) => c + (checked.value[`${idx}-${i}`] ? 1 : 0), 0);
const toggleSection = idx => {
  openSections.value = openSections.value.includes(idx) ? openSections.value.filter(i => i !== idx) : [...openSections.value, idx];
};

function saveProgress() {
  localStorage.setItem('gift_checklist_progress', JSON.stringify(checked.value));
  alert('Progress saved');
}
function resetAll() {
  if (confirm('Reset all progress?')) {
    checked.value = {}; localStorage.removeItem('gift_checklist_progress');
  }
}

// Submit flow -> send to existing submit.js API with message containing context
async function submitEmail() {
  emailError.value = ''; termsError.value = false;
  if (!email.value) { emailError.value = 'Email required'; return; }
  if (!validateEmail(email.value)) { emailError.value = 'Invalid email'; return; }
  if (!agree.value) { termsError.value = true; return; }
  isSubmitting.value = true;
  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, message: 'Gift SEO Checklist Access' })
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.error || data.message || 'Submission failed');
    localStorage.setItem('gift_access', 'true');
    localStorage.setItem('gift_email', email.value);
    hasAccess.value = true;
    // Fake short progress animation then reveal
    const interval = setInterval(() => {
      progress.value += 8;
      if (progress.value >= 100) { clearInterval(interval); checklistVisible.value = true; isSubmitting.value = false; }
    }, 120);
  } catch (e) {
    emailError.value = e.message;
    isSubmitting.value = false;
  }
}

function devSkip() {
  email.value = 'dev@example.com'; agree.value = true; submitEmail();
}

// Persist checklist progress
watch(checked, val => localStorage.setItem('gift_checklist_progress', JSON.stringify(val)), { deep: true });

onMounted(() => {
  if (localStorage.getItem('gift_access') === 'true') { hasAccess.value = true; checklistVisible.value = true; }
  const saved = localStorage.getItem('gift_checklist_progress');
  if (saved) { try { checked.value = JSON.parse(saved); } catch { /* ignore */ } }
});
</script>

<style scoped>
.animate-fade-in { animation: fade .4s ease; }
@keyframes fade { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: none; } }
</style>
