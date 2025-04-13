// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import { useSeo } from "@/composables/useSeo";
import { seoConfig } from "@/config/seo.config";

// Import views
import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/ServicesView.vue";
import PortfolioView from "@/views/PortfolioView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import WordPressView from "@/views/WordPressView.vue";
import ShopifyView from "@/views/ShopifyView.vue";
import MaintenanceView from "@/views/MaintenanceView.vue";
import ConsultationsView from "@/views/ConsultationsView.vue";
import PolicyView from "@/views/PolicyView.vue";
import NewClientForm from "@/components/NewClientForm.vue";
import BlogsView from "@/views/BlogsView.vue";
import BlogArticleView from "@/views/BlogArticleView.vue";
import LandingSeoView from "@/views/LandingSeoView.vue";
import SeoCheckList from "@/views/SeoCheckList.vue";
import VueDevLandingView from "@/views/VueDevLandingView.vue";
import StartupPartnershipForm from "@/views/StartupPartnershipForm.vue";

const routes = [
  {
    path: '/web-applications',
    name: 'Web Applications',
    component: VueDevLandingView,
    meta: {
      seo: {
        title: "Vue Application Development | WebMaster",
        description: "Custom Vue application development with flexible pricing models including equity partnerships and traditional payment options.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    }
  },
  {
    path: '/startup',
    name: 'Startup Partnership Program',
    component: StartupPartnershipForm
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      seo: {
        title: seoConfig.defaultTitle || "Web Development Services | WebMaster",
        description:
          seoConfig.defaultDescription ||
          "Professional web development services for businesses and individuals. Custom websites, e-commerce solutions, and more.",
        image: seoConfig.socialImage,
        type: "website",
      },
    },
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
    meta: {
      seo: {
        title: "Web Development Services | WebMaster",
        description:
          "Explore our comprehensive web development services including custom websites, e-commerce solutions, and website maintenance.",
        image: seoConfig.socialImage,
        type: "website",
      },
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioView,
    meta: {
      seo: {
        title: "Web Development Portfolio | WebMaster",
        description:
          "View our portfolio of custom websites, e-commerce stores, and web applications for clients across various industries.",
        image: seoConfig.defaultImage,
        type: "website",
      },
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
    meta: {
      seo: {
        title: "Contact Us | WebMaster",
        description:
          "Get in touch with our web development team for quotes, project inquiries, or technical support.",
        image: seoConfig.defaultImage,
        type: "website",
      },
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: {
      seo: {
        title: "About Our Web Development Agency | WebMaster",
        description:
          "Learn about our web development agency, our team, values, and approach to creating exceptional websites.",
        image: seoConfig.defaultImage,
        type: "website",
      },
    },
  },
  {
    path: "/wordpress",
    name: "WordPress",
    component: WordPressView,
    meta: {
      seo: {
        title: "WordPress Development Services | WebMaster",
        description:
          "Professional WordPress development services including custom themes, plugins, and optimization for your business website.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    },
  },
  {
    path: "/shopify",
    name: "Shopify",
    component: ShopifyView,
    meta: {
      seo: {
        title: "Shopify Development & E-commerce Solutions | WebMaster",
        description:
          "Expert Shopify development services to create, customize, and optimize your online store for maximum sales and efficiency.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    },
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: MaintenanceView,
    meta: {
      seo: {
        title: "Website Maintenance Services | WebMaster",
        description:
          "Comprehensive website maintenance services to keep your site secure, updated, and performing at its best.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    },
  },
  {
    path: "/consultations",
    name: "Consultations",
    component: ConsultationsView,
    meta: {
      seo: {
        title: "Web Development Consultations | WebMaster",
        description:
          "Expert web development consultations to guide your digital strategy, technical decisions, and website optimization.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    },
  },
  {
    path: "/policies",
    name: "Policy",
    component: PolicyView,
    meta: {
      seo: {
        title: "Privacy & Terms of Service | WebMaster",
        description:
          "Our privacy policy and terms of service for website development and maintenance services.",
        image: seoConfig.defaultImage,
        type: "website",
        noindex: false,
      },
    },
  },
  {
    path: "/new-client-form",
    name: "NewClientForm",
    component: NewClientForm,
    meta: {
      seo: {
        title: "New Client Form | WebMaster",
        description:
          "Fill out the new client form to get started with our web development services.",
        image: seoConfig.defaultImage,
        type: "website",
      },
    },
  },
  {
    path: "/seo",
    name: "LandingSeo",
    component: LandingSeoView,
    meta: {
      seo: {
        title: "SEO Services & Optimization | WebMaster",
        description:
          "Professional search engine optimization services to improve your website's visibility and rankings in search results.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    }
  },
  {
    path: "/seo-checklist",
    name: "SeoCheckList",
    component: SeoCheckList,
    meta: {
      seo: {
        title: "SEO Checklist | OttawaWebMasters",
        description:
          "Use this SEO checklist to optimize your website for search engines and improve your online visibility.",
        image: seoConfig.defaultImage,
        type: "website",
      },
    },
  },
  // Blog routes
  {
    path: "/blog",
    name: "Blog",
    component: BlogsView,
    meta: {
      seo: {
        title: "Web Development Blog | WebMaster",
        description:
          "Insights, tutorials, and expert advice on web development, e-commerce, and digital strategy.",
        image: seoConfig.defaultImage,
        type: "website",
      },
    },
  },
  {
    path: "/blog/:slug",
    name: "BlogArticle",
    component: BlogArticleView,
    props: true,
    meta: {
      seo: {
        type: "article",
      },
    },
  },
  // 404 page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      seo: {
        title: "Page Not Found",
        description: "The page you are looking for does not exist",
        noindex: true, // Tell search engines not to index 404 pages
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Improved scroll behavior to ensure scrolling to top with smooth animation on every navigation
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top with smooth behavior
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

// SEO route guard
router.beforeEach((to, from, next) => {
  // Check if the route has SEO meta
  if (to.meta.seo) {
    // For dynamic blog articles, fetch SEO data from the article content
    if (to.name === "BlogArticle") {
      import("@/data/blogs.json").then((module) => {
        const blogs = module.default;
        const slug = to.params.slug;
        const article = blogs.find((blog) => blog.slug === slug);

        if (article) {
          const seoData = {
            ...to.meta.seo,
            title: `${article.title} | WebMaster Blog`,
            description: article.excerpt,
            image: article.featuredImage || seoConfig.defaultImage,
          };

          // Apply SEO data
          useSeo({
            title: seoData.title,
            description: seoData.description,
            url: to.path,
            type: seoData.type,
            image: seoData.image,
            structuredData: {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: article.title,
              image: article.featuredImage,
              datePublished: article.date,
              author: {
                "@type": "Person",
                name: article.author,
              },
            },
          });
        }
      });
    } else {
      const seoData = to.meta.seo;

      // Apply SEO data
      useSeo({
        title: seoData.title,
        description: seoData.description,
        url: to.path,
        type: seoData.type || "website",
        image: seoData.image,
        structuredData: seoData.structuredData,
      });

      // Handle noindex pages
      if (seoData.noindex) {
        const metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "robots");
        metaTag.setAttribute("content", "noindex, nofollow");
        document.head.appendChild(metaTag);
      }
    }
  }

  next();
});

router.afterEach((to, from) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Track route changes in Clarity
router.afterEach((to) => {
  // Send page view to Clarity when available
  if (window.clarity) {
    // Track the page view
    window.clarity('set', 'page_path', to.path);
    window.clarity('set', 'page_name', to.name || '');

    // Optional: track page view as an event
    if (typeof window.clarity === 'function') {
      window.clarity('pageview');
    }
  }
});

export default router;
