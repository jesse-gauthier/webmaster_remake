<!-- src/views/SeoChecklistView.vue -->
<template>
    <div class="container-site section-padding">
        <h1 class="text-center mb-8">Ultimate SEO Checklist</h1>

        <div class="bg-white rounded-lg shadow-card p-6 mb-10">
            <p class="text-lg mb-6">
                Use this interactive checklist to track your SEO progress. Your progress will be saved automatically in
                your browser.
            </p>

            <div class="flex items-center justify-between mb-6 pb-4 border-b border-primary-200">
                <div>
                    <span class="text-primary-600 font-bold text-xl">{{ completedCount }} of {{ totalCount }}</span>
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
                        <input type="text" v-model="searchQuery" placeholder="Search tasks..." class="form-input" />
                    </div>
                    <div class="flex gap-2">
                        <button @click="filterStatus = 'all'" class="px-3 py-1 rounded"
                            :class="filterStatus === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-100'">
                            All
                        </button>
                        <button @click="filterStatus = 'completed'" class="px-3 py-1 rounded"
                            :class="filterStatus === 'completed' ? 'bg-primary-600 text-white' : 'bg-gray-100'">
                            Completed
                        </button>
                        <button @click="filterStatus = 'incomplete'" class="px-3 py-1 rounded"
                            :class="filterStatus === 'incomplete' ? 'bg-primary-600 text-white' : 'bg-gray-100'">
                            Incomplete
                        </button>
                    </div>
                </div>
            </div>

            <!-- Accordion sections for each category -->
            <div class="space-y-4">
                <div v-for="(section, sectionIndex) in filteredSections" :key="sectionIndex"
                    class="border border-primary-100 rounded-lg overflow-hidden">
                    <div @click="toggleSection(sectionIndex)"
                        class="flex justify-between items-center p-4 cursor-pointer bg-primary-50 hover:bg-primary-100">
                        <h2 class="text-xl font-semibold text-primary-700 m-0">{{ section.title }}</h2>
                        <div class="flex items-center">
                            <span class="text-primary-600 mr-2">{{ getCompletedCountForSection(section) }}/{{
                                section.items.length }}</span>
                            <i class="fas"
                                :class="openSections.includes(sectionIndex) ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                        </div>
                    </div>

                    <div v-if="openSections.includes(sectionIndex)" class="p-4 bg-white">
                        <div v-if="section.description" class="mb-4 text-gray-700">
                            {{ section.description }}
                        </div>

                        <div class="space-y-2">
                            <div v-for="(item, itemIndex) in section.items" :key="itemIndex"
                                class="p-3 border-b border-gray-100 hover:bg-primary-50 flex items-start gap-3">
                                <div class="flex-shrink-0 pt-0.5">
                                    <input type="checkbox" :id="`item-${sectionIndex}-${itemIndex}`"
                                        v-model="checkedItems[`${sectionIndex}-${itemIndex}`]"
                                        class="w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                                </div>
                                <label :for="`item-${sectionIndex}-${itemIndex}`" class="flex-1 cursor-pointer"
                                    :class="{ 'line-through text-gray-400': checkedItems[`${sectionIndex}-${itemIndex}`] }">
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
            <p class="mb-6">Our team at Ottawa Web Masters can create a personalized SEO plan to improve your website's
                visibility and rankings.</p>
            <router-link to="/contact" class="btn-primary">Get a Free Consultation</router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useSeo } from '@/composables/useSeo';

// SEO configuration
useSeo({
    title: "Interactive SEO Checklist | Ottawa Web Masters",
    description: "Track your website's SEO progress with our interactive checklist featuring 100+ actionable optimization tasks.",
    type: "tool",
});

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
            "Configure proper URL parameters in Google Search Console"
        ]
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
            "Implement schema markup for important images"
        ]
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
            "Consider creating topic clusters around pillar content"
        ]
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
            "Target links from domains with high authority"
        ]
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
            "Partner with complementary local businesses"
        ]
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
            "Handle out-of-stock products appropriately"
        ]
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
            "Analyze and improve conversion rates"
        ]
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
            "Update tactics to align with search engine changes"
        ]
    }
];

// State management
const checkedItems = ref({});
const openSections = ref([0]); // First section open by default
const searchQuery = ref('');
const filterStatus = ref('all');

// Calculate total number of checklist items
const totalCount = computed(() => {
    return checklistData.reduce((total, section) => total + section.items.length, 0);
});

// Calculate number of completed items
const completedCount = computed(() => {
    return Object.values(checkedItems.value).filter(Boolean).length;
});

// Filter sections based on search query and completion status
const filteredSections = computed(() => {
    if (!searchQuery.value && filterStatus.value === 'all') {
        return checklistData;
    }

    return checklistData.map(section => {
        const filteredItems = section.items.filter((item, index) => {
            const itemKey = `${checklistData.indexOf(section)}-${index}`;
            const matchesSearch = !searchQuery.value ||
                item.toLowerCase().includes(searchQuery.value.toLowerCase());

            const matchesFilter =
                filterStatus.value === 'all' ||
                (filterStatus.value === 'completed' && checkedItems.value[itemKey]) ||
                (filterStatus.value === 'incomplete' && !checkedItems.value[itemKey]);

            return matchesSearch && matchesFilter;
        });

        return {
            ...section,
            items: filteredItems
        };
    }).filter(section => section.items.length > 0);
});

// Get completed count for a specific section
const getCompletedCountForSection = (section) => {
    const sectionIndex = checklistData.findIndex(s => s.title === section.title);
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
        openSections.value = openSections.value.filter(i => i !== index);
    } else {
        openSections.value.push(index);
    }
};

// Save progress to localStorage
const saveProgress = () => {
    localStorage.setItem('seo-checklist-progress', JSON.stringify(checkedItems.value));

    // Track event if in production
    if (process.env.NODE_ENV === 'production' && typeof window.trackEvent === 'function') {
        window.trackEvent('save_checklist_progress', {
            'completed_items': completedCount.value,
            'completion_percentage': Math.round((completedCount.value / totalCount.value) * 100)
        });
    }

    // Show success message (you could use a toast notification here)
    alert('Your progress has been saved successfully!');
};

// Reset all checks
const resetAllChecks = () => {
    if (confirm('Are you sure you want to reset all your progress?')) {
        checkedItems.value = {};
        localStorage.removeItem('seo-checklist-progress');
    }
};

// Load saved progress from localStorage on component mount
onMounted(() => {
    const savedProgress = localStorage.getItem('seo-checklist-progress');
    if (savedProgress) {
        checkedItems.value = JSON.parse(savedProgress);
    }
});

// Watch for changes to checked items and save automatically
watch(checkedItems.value, () => {
    localStorage.setItem('seo-checklist-progress', JSON.stringify(checkedItems.value));
}, { deep: true });
</script>