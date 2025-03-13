<template>
    <div class="landing-page">
        <!-- Hero Section -->
        <section class="bg-primary-light py-16 md:py-24">
            <div class="container-site">
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="animate-fade-in">
                        <h1 class="mb-4">Expert SEO Services to Boost Your Online Visibility</h1>
                        <p class="text-lg mb-8">
                            Drive more organic traffic, improve rankings, and increase conversions with our data-driven
                            SEO strategies tailored to your business goals.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <router-link to="/contact" class="btn-primary btn-lg hover:text-white">
                                Get Free SEO Audit
                            </router-link>
                            <router-link to="/portfolio" class="btn-outline btn-lg">
                                View SEO Results
                            </router-link>
                        </div>
                    </div>
                    <div class="animate-slide-up">
                        <img src="/images/hero-image.jpg" alt="SEO services and search engine optimization"
                            class="rounded-lg shadow-lg w-full" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-16 bg-white section-padding">
            <div class="container-site">
                <div class="text-center mb-12">
                    <h2>Our SEO Services</h2>
                    <p class="max-w-2xl mx-auto">
                        We offer comprehensive SEO solutions to improve your search visibility and drive targeted
                        organic traffic.
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Service Card 1 -->
                    <div class="card card-hover">
                        <div class="card-body">
                            <div class="mb-4 text-accent text-4xl">
                                <i class="fas fa-search"></i>
                            </div>
                            <h3 class="text-xl mb-2">On-Page SEO</h3>
                            <p>
                                Optimization of content, meta tags, headings, and site structure to improve search
                                engine visibility.
                            </p>

                        </div>
                    </div>

                    <!-- Service Card 2 -->
                    <div class="card card-hover">
                        <div class="card-body">
                            <div class="mb-4 text-accent text-4xl">
                                <i class="fas fa-link"></i>
                            </div>
                            <h3 class="text-xl mb-2">Off-Page SEO</h3>
                            <p>
                                Strategic link building, brand mentions, and authority-building tactics to boost your
                                site's credibility.
                            </p>

                        </div>
                    </div>

                    <!-- Service Card 3 -->
                    <div class="card card-hover">
                        <div class="card-body">
                            <div class="mb-4 text-accent text-4xl">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <h3 class="text-xl mb-2">Content Strategy</h3>
                            <p>
                                Data-driven content planning that targets valuable keywords and meets user intent to
                                drive organic traffic.
                            </p>
                        </div>
                    </div>

                    <!-- Service Card 4 -->
                    <div class="card card-hover">
                        <div class="card-body">
                            <div class="mb-4 text-accent text-4xl">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h3 class="text-xl mb-2">Technical SEO</h3>
                            <p>
                                Site speed optimization, mobile-friendliness, structured data, and crawlability
                                improvements.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="my-3">
            <ContactForm />
        </section>
        <!-- Why Choose Us Section -->
        <section class="py-16 bg-neutral-50 section-padding">
            <div class="container-site">
                <div class="text-center mb-12">
                    <h2>Why Choose Our SEO Services</h2>
                    <p class="max-w-2xl mx-auto">
                        We combine data-driven strategies with years of SEO expertise to deliver measurable results
                        for
                        your business.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="flex flex-col items-center text-center">
                        <div class="bg-accent-light p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                            <i class="fas fa-chart-bar text-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl mb-2">Data-Driven Approach</h3>
                        <p>
                            Our SEO strategies are based on comprehensive analytics, competitor research, and
                            industry
                            benchmarks.
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="flex flex-col items-center text-center">
                        <div class="bg-accent-light p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                            <i class="fas fa-cogs text-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl mb-2">Custom Strategy</h3>
                        <p>
                            We develop personalized SEO plans tailored to your specific industry, audience, and
                            business
                            objectives.
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="flex flex-col items-center text-center">
                        <div class="bg-accent-light p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                            <i class="fas fa-file-contract text-accent text-2xl"></i>
                        </div>
                        <h3 class="text-xl mb-2">Transparent Reporting</h3>
                        <p>
                            Receive clear monthly reports showing your ranking improvements, traffic growth, and ROI
                            from our SEO efforts.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-16 bg-neutral-50 section-padding">
            <div class="container-site">
                <div class="text-center mb-12">
                    <h2>Frequently Asked Questions About SEO</h2>
                    <p class="max-w-2xl mx-auto">
                        Get answers to common questions about search engine optimization and our services.
                    </p>
                </div>

                <div class="max-w-3xl mx-auto">
                    <!-- FAQ Item 1 -->
                    <div class="mb-6">
                        <div class="bg-white p-6 rounded-lg shadow-sm">
                            <h3 class="text-xl mb-3">How long does it take to see results from SEO?</h3>
                            <p>
                                SEO is a long-term strategy, not a quick fix. While you may start seeing initial
                                improvements within 2-3 months, significant results typically emerge around 4-6
                                months.
                                The timeline varies based on your industry competitiveness, website history, and
                                starting point.
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="mb-6">
                        <div class="bg-white p-6 rounded-lg shadow-sm">
                            <h3 class="text-xl mb-3">What makes your SEO services different?</h3>
                            <p>
                                We focus on sustainable, white-hat SEO strategies that build long-term value. Our
                                approach combines technical expertise, quality content creation, and data-driven
                                decision making. We prioritize transparency with detailed monthly reporting and a
                                clear
                                ROI focus.
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="mb-6">
                        <div class="bg-white p-6 rounded-lg shadow-sm">
                            <h3 class="text-xl mb-3">Do you guarantee first-page rankings?</h3>
                            <p>
                                No reputable SEO agency can guarantee specific rankings, as search algorithms are
                                complex and constantly evolving. However, we have a proven track record of improving
                                rankings for our clients. We focus on measurable metrics like organic traffic
                                growth,
                                lead generation, and revenue increase.
                            </p>
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="mb-6">
                        <div class="bg-white p-6 rounded-lg shadow-sm">
                            <h3 class="text-xl mb-3">What does your free SEO audit include?</h3>
                            <p>
                                Our free SEO audit provides an overview of your website's current performance,
                                identifying critical issues affecting your rankings. It includes technical SEO
                                assessment, content evaluation, competitive analysis, keyword opportunities, and
                                actionable recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSeo } from '@/composables/useSeo';
import ContactForm from '@/components/ContactForm.vue';

// SEO configuration
onMounted(() => {
    useSeo({
        title: 'Professional Web Development Services | WebMaster',
        description: 'Custom websites, e-commerce solutions, and ongoing maintenance to help your business thrive online. Get a free consultation today.',
        url: window.location.pathname,
        type: 'website',
        image: '/images/social-share.jpg',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'WebMaster Web Development',
            url: window.location.origin,
            potentialAction: {
                '@type': 'SearchAction',
                target: `${window.location.origin}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
            }
        }
    });
});

// Track page view
onMounted(() => {
    if (typeof window.trackEvent === 'function') {
        window.trackEvent('page_view', {
            page_title: 'Seo Landing Page',
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
});
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>