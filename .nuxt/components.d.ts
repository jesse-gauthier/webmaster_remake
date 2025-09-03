
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AsyncContactForm': typeof import("../components/forms/AsyncContactForm.vue")['default']
    'AsyncSeoAuditForm': typeof import("../components/forms/AsyncSeoAuditForm.vue")['default']
    'ContactForm': typeof import("../components/forms/ContactForm.vue")['default']
    'NewClientForm': typeof import("../components/forms/NewClientForm.vue")['default']
    'SeoAuditForm': typeof import("../components/forms/SeoAuditForm.vue")['default']
    'EmailCaptureModal': typeof import("../components/modals/EmailCaptureModal.vue")['default']
    'WebAppModal': typeof import("../components/modals/WebAppModal.vue")['default']
    'BreadcrumbStructuredData': typeof import("../components/seo/BreadcrumbStructuredData.vue")['default']
    'SeoChecklistBanner': typeof import("../components/seo/SeoChecklistBanner.vue")['default']
    'WebsiteStructuredData': typeof import("../components/seo/WebsiteStructuredData.vue")['default']
    'AppFooter': typeof import("../components/ui/AppFooter.vue")['default']
    'AppHeader': typeof import("../components/ui/AppHeader.vue")['default']
    'AwardsCarousel': typeof import("../components/ui/AwardsCarousel.vue")['default']
    'BlogCard': typeof import("../components/ui/BlogCard.vue")['default']
    'BlogPagination': typeof import("../components/ui/BlogPagination.vue")['default']
    'CalendlyEmbed': typeof import("../components/ui/CalendlyEmbed.vue")['default']
    'CookieConsentBar': typeof import("../components/ui/CookieConsentBar.vue")['default']
    'ECommerceSvg': typeof import("../components/ui/ECommerceSvg.vue")['default']
    'HomeHero': typeof import("../components/ui/HomeHero.vue")['default']
    'MaintenanceSvg': typeof import("../components/ui/MaintenanceSvg.vue")['default']
    'OptimizedImage': typeof import("../components/ui/OptimizedImage.vue")['default']
    'PricingSection': typeof import("../components/ui/PricingSection.vue")['default']
    'SeoSvg': typeof import("../components/ui/SeoSvg.vue")['default']
    'ServicesShowcase': typeof import("../components/ui/ServicesShowcase.vue")['default']
    'StartupProgramComponent': typeof import("../components/ui/StartupProgramComponent.vue")['default']
    'TestimonialComponent': typeof import("../components/ui/TestimonialComponent.vue")['default']
    'TrustSignals': typeof import("../components/ui/TrustSignals.vue")['default']
    'WebDesign': typeof import("../components/ui/WebDesign.vue")['default']
    'WebDesignSvg': typeof import("../components/ui/WebDesignSvg.vue")['default']
    'WebDevelopmentSvg': typeof import("../components/ui/WebDevelopmentSvg.vue")['default']
    'WorkProcess': typeof import("../components/ui/WorkProcess.vue")['default']
      'LazyAsyncContactForm': LazyComponent<typeof import("../components/forms/AsyncContactForm.vue")['default']>
    'LazyAsyncSeoAuditForm': LazyComponent<typeof import("../components/forms/AsyncSeoAuditForm.vue")['default']>
    'LazyContactForm': LazyComponent<typeof import("../components/forms/ContactForm.vue")['default']>
    'LazyNewClientForm': LazyComponent<typeof import("../components/forms/NewClientForm.vue")['default']>
    'LazySeoAuditForm': LazyComponent<typeof import("../components/forms/SeoAuditForm.vue")['default']>
    'LazyEmailCaptureModal': LazyComponent<typeof import("../components/modals/EmailCaptureModal.vue")['default']>
    'LazyWebAppModal': LazyComponent<typeof import("../components/modals/WebAppModal.vue")['default']>
    'LazyBreadcrumbStructuredData': LazyComponent<typeof import("../components/seo/BreadcrumbStructuredData.vue")['default']>
    'LazySeoChecklistBanner': LazyComponent<typeof import("../components/seo/SeoChecklistBanner.vue")['default']>
    'LazyWebsiteStructuredData': LazyComponent<typeof import("../components/seo/WebsiteStructuredData.vue")['default']>
    'LazyAppFooter': LazyComponent<typeof import("../components/ui/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../components/ui/AppHeader.vue")['default']>
    'LazyAwardsCarousel': LazyComponent<typeof import("../components/ui/AwardsCarousel.vue")['default']>
    'LazyBlogCard': LazyComponent<typeof import("../components/ui/BlogCard.vue")['default']>
    'LazyBlogPagination': LazyComponent<typeof import("../components/ui/BlogPagination.vue")['default']>
    'LazyCalendlyEmbed': LazyComponent<typeof import("../components/ui/CalendlyEmbed.vue")['default']>
    'LazyCookieConsentBar': LazyComponent<typeof import("../components/ui/CookieConsentBar.vue")['default']>
    'LazyECommerceSvg': LazyComponent<typeof import("../components/ui/ECommerceSvg.vue")['default']>
    'LazyHomeHero': LazyComponent<typeof import("../components/ui/HomeHero.vue")['default']>
    'LazyMaintenanceSvg': LazyComponent<typeof import("../components/ui/MaintenanceSvg.vue")['default']>
    'LazyOptimizedImage': LazyComponent<typeof import("../components/ui/OptimizedImage.vue")['default']>
    'LazyPricingSection': LazyComponent<typeof import("../components/ui/PricingSection.vue")['default']>
    'LazySeoSvg': LazyComponent<typeof import("../components/ui/SeoSvg.vue")['default']>
    'LazyServicesShowcase': LazyComponent<typeof import("../components/ui/ServicesShowcase.vue")['default']>
    'LazyStartupProgramComponent': LazyComponent<typeof import("../components/ui/StartupProgramComponent.vue")['default']>
    'LazyTestimonialComponent': LazyComponent<typeof import("../components/ui/TestimonialComponent.vue")['default']>
    'LazyTrustSignals': LazyComponent<typeof import("../components/ui/TrustSignals.vue")['default']>
    'LazyWebDesign': LazyComponent<typeof import("../components/ui/WebDesign.vue")['default']>
    'LazyWebDesignSvg': LazyComponent<typeof import("../components/ui/WebDesignSvg.vue")['default']>
    'LazyWebDevelopmentSvg': LazyComponent<typeof import("../components/ui/WebDevelopmentSvg.vue")['default']>
    'LazyWorkProcess': LazyComponent<typeof import("../components/ui/WorkProcess.vue")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AsyncContactForm: typeof import("../components/forms/AsyncContactForm.vue")['default']
export const AsyncSeoAuditForm: typeof import("../components/forms/AsyncSeoAuditForm.vue")['default']
export const ContactForm: typeof import("../components/forms/ContactForm.vue")['default']
export const NewClientForm: typeof import("../components/forms/NewClientForm.vue")['default']
export const SeoAuditForm: typeof import("../components/forms/SeoAuditForm.vue")['default']
export const EmailCaptureModal: typeof import("../components/modals/EmailCaptureModal.vue")['default']
export const WebAppModal: typeof import("../components/modals/WebAppModal.vue")['default']
export const BreadcrumbStructuredData: typeof import("../components/seo/BreadcrumbStructuredData.vue")['default']
export const SeoChecklistBanner: typeof import("../components/seo/SeoChecklistBanner.vue")['default']
export const WebsiteStructuredData: typeof import("../components/seo/WebsiteStructuredData.vue")['default']
export const AppFooter: typeof import("../components/ui/AppFooter.vue")['default']
export const AppHeader: typeof import("../components/ui/AppHeader.vue")['default']
export const AwardsCarousel: typeof import("../components/ui/AwardsCarousel.vue")['default']
export const BlogCard: typeof import("../components/ui/BlogCard.vue")['default']
export const BlogPagination: typeof import("../components/ui/BlogPagination.vue")['default']
export const CalendlyEmbed: typeof import("../components/ui/CalendlyEmbed.vue")['default']
export const CookieConsentBar: typeof import("../components/ui/CookieConsentBar.vue")['default']
export const ECommerceSvg: typeof import("../components/ui/ECommerceSvg.vue")['default']
export const HomeHero: typeof import("../components/ui/HomeHero.vue")['default']
export const MaintenanceSvg: typeof import("../components/ui/MaintenanceSvg.vue")['default']
export const OptimizedImage: typeof import("../components/ui/OptimizedImage.vue")['default']
export const PricingSection: typeof import("../components/ui/PricingSection.vue")['default']
export const SeoSvg: typeof import("../components/ui/SeoSvg.vue")['default']
export const ServicesShowcase: typeof import("../components/ui/ServicesShowcase.vue")['default']
export const StartupProgramComponent: typeof import("../components/ui/StartupProgramComponent.vue")['default']
export const TestimonialComponent: typeof import("../components/ui/TestimonialComponent.vue")['default']
export const TrustSignals: typeof import("../components/ui/TrustSignals.vue")['default']
export const WebDesign: typeof import("../components/ui/WebDesign.vue")['default']
export const WebDesignSvg: typeof import("../components/ui/WebDesignSvg.vue")['default']
export const WebDevelopmentSvg: typeof import("../components/ui/WebDevelopmentSvg.vue")['default']
export const WorkProcess: typeof import("../components/ui/WorkProcess.vue")['default']
export const LazyAsyncContactForm: LazyComponent<typeof import("../components/forms/AsyncContactForm.vue")['default']>
export const LazyAsyncSeoAuditForm: LazyComponent<typeof import("../components/forms/AsyncSeoAuditForm.vue")['default']>
export const LazyContactForm: LazyComponent<typeof import("../components/forms/ContactForm.vue")['default']>
export const LazyNewClientForm: LazyComponent<typeof import("../components/forms/NewClientForm.vue")['default']>
export const LazySeoAuditForm: LazyComponent<typeof import("../components/forms/SeoAuditForm.vue")['default']>
export const LazyEmailCaptureModal: LazyComponent<typeof import("../components/modals/EmailCaptureModal.vue")['default']>
export const LazyWebAppModal: LazyComponent<typeof import("../components/modals/WebAppModal.vue")['default']>
export const LazyBreadcrumbStructuredData: LazyComponent<typeof import("../components/seo/BreadcrumbStructuredData.vue")['default']>
export const LazySeoChecklistBanner: LazyComponent<typeof import("../components/seo/SeoChecklistBanner.vue")['default']>
export const LazyWebsiteStructuredData: LazyComponent<typeof import("../components/seo/WebsiteStructuredData.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/ui/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/ui/AppHeader.vue")['default']>
export const LazyAwardsCarousel: LazyComponent<typeof import("../components/ui/AwardsCarousel.vue")['default']>
export const LazyBlogCard: LazyComponent<typeof import("../components/ui/BlogCard.vue")['default']>
export const LazyBlogPagination: LazyComponent<typeof import("../components/ui/BlogPagination.vue")['default']>
export const LazyCalendlyEmbed: LazyComponent<typeof import("../components/ui/CalendlyEmbed.vue")['default']>
export const LazyCookieConsentBar: LazyComponent<typeof import("../components/ui/CookieConsentBar.vue")['default']>
export const LazyECommerceSvg: LazyComponent<typeof import("../components/ui/ECommerceSvg.vue")['default']>
export const LazyHomeHero: LazyComponent<typeof import("../components/ui/HomeHero.vue")['default']>
export const LazyMaintenanceSvg: LazyComponent<typeof import("../components/ui/MaintenanceSvg.vue")['default']>
export const LazyOptimizedImage: LazyComponent<typeof import("../components/ui/OptimizedImage.vue")['default']>
export const LazyPricingSection: LazyComponent<typeof import("../components/ui/PricingSection.vue")['default']>
export const LazySeoSvg: LazyComponent<typeof import("../components/ui/SeoSvg.vue")['default']>
export const LazyServicesShowcase: LazyComponent<typeof import("../components/ui/ServicesShowcase.vue")['default']>
export const LazyStartupProgramComponent: LazyComponent<typeof import("../components/ui/StartupProgramComponent.vue")['default']>
export const LazyTestimonialComponent: LazyComponent<typeof import("../components/ui/TestimonialComponent.vue")['default']>
export const LazyTrustSignals: LazyComponent<typeof import("../components/ui/TrustSignals.vue")['default']>
export const LazyWebDesign: LazyComponent<typeof import("../components/ui/WebDesign.vue")['default']>
export const LazyWebDesignSvg: LazyComponent<typeof import("../components/ui/WebDesignSvg.vue")['default']>
export const LazyWebDevelopmentSvg: LazyComponent<typeof import("../components/ui/WebDevelopmentSvg.vue")['default']>
export const LazyWorkProcess: LazyComponent<typeof import("../components/ui/WorkProcess.vue")['default']>

export const componentNames: string[]
