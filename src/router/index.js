// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import { seoConfig } from "@/config/seo.config";

const routes = [
  {
    path: '/web-applications',
    name: 'Web Applications',
    component: () => import('@/views/VueDevLandingView.vue'),
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
    component: () => import('@/views/StartupPartnershipView.vue'),
    meta: {
      seo: {
        title: "Startup Partnership Program | Web Application Development | WebMaster",
        description: "Our Startup Partnership Program offers premium web application development with just $1,500 upfront and a 5-8% equity stake. Get a dedicated technical partner invested in your long-term success.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    }
  },
  {
    path: '/startup-application',
    name: 'Startup Partnership Application',
    component: () => import('@/views/StartupPartnershipForm.vue'),
    meta: {
      seo: {
        title: "Apply for Startup Partnership | WebMaster",
        description: "Apply for our Startup Partnership Program and get premium web application development with minimal upfront investment.",
        image: seoConfig.defaultImage,
        type: "service",
      },
    }
  },
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/HomeView.vue'),
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
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      seo: {
        title: "Web Development Services | WebMaster",
        description:
          "Explore our comprehensive web development services including custom websites, e-commerce solutions, and website maintenance.",
        image: seoConfig.socialImage,
        type: "website",
        structuredData: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development Services",
            "description": "Explore our comprehensive web development services including custom websites, e-commerce solutions, and website maintenance.",
            "provider": {
              "@type": "Organization",
              "name": "Ottawa Web Masters",
              "url": "https://ottawawebmasters.ca"
            }
          }
        ]
      },
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import('@/views/PortfolioView.vue'),
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
    component: () => import('@/views/ContactView.vue'),
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
    component: () => import('@/views/AboutView.vue'),
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
    component: () => import('@/views/WordPressView.vue'),
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
    component: () => import('@/views/ShopifyView.vue'),
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
    component: () => import('@/views/MaintenanceView.vue'),
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
    component: () => import('@/views/ConsultationsView.vue'),
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
    component: () => import('@/views/PolicyView.vue'),
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
    component: () => import('@/components/NewClientForm.vue'),
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
    component: () => import('@/views/LandingSeoView.vue'),
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
    component: () => import('@/views/SeoCheckList.vue'),
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
    component: () => import('@/views/BlogsView.vue'),
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
    component: () => import('@/views/BlogArticleView.vue'),
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

// SEO route guard - prepare SEO data but don't call useSeo directly
router.beforeEach(async (to, from, next) => {
  // Check if the route has SEO meta
  if (to.meta.seo) {
    // For dynamic blog articles, fetch SEO data from the article content
    if (to.name === "BlogArticle") {
      try {
        const module = await import("@/data/blogs.json");
        const blogs = module.default;
        const slug = to.params.slug;
        const article = blogs.find((blog) => blog.slug === slug);

        if (article) {
          // Set SEO data in the route meta for the component to use
          to.meta.seoData = {
            ...to.meta.seo,
            title: `${article.title} | WebMaster Blog`,
            description: article.excerpt,
            url: to.path,
            image: article.featuredImage || seoConfig.defaultImage,
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
          };
        }
      } catch (error) {
        console.error("Error loading blog data:", error);
      }
    } else {
      // For static routes, store SEO data in route meta
      to.meta.seoData = {
        title: to.meta.seo.title,
        description: to.meta.seo.description,
        url: to.path,
        type: to.meta.seo.type || "website",
        image: to.meta.seo.image,
        structuredData: to.meta.seo.structuredData,
      };
    }

    // Handle noindex pages
    if (to.meta.seo.noindex) {
      const metaTag = document.querySelector('meta[name="robots"]');
      if (metaTag) {
        metaTag.setAttribute("content", "noindex, nofollow");
      } else {
        const newMetaTag = document.createElement("meta");
        newMetaTag.setAttribute("name", "robots");
        newMetaTag.setAttribute("content", "noindex, nofollow");
        document.head.appendChild(newMetaTag);
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
