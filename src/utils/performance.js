/**
 * Performance optimization utilities
 */

/**
 * Preload critical resources
 * @param {Array} resources - Array of resources to preload
 */
export function preloadCriticalResources(resources = []) {
  const defaultResources = [
    { href: '/images/hero-image.jpg', as: 'image', priority: 'high' },
    { href: '/images/logo_icon.png', as: 'image', priority: 'high' },
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style', priority: 'high' }
  ]
  
  const allResources = [...defaultResources, ...resources]
  
  allResources.forEach(resource => {
    if (document.querySelector(`link[href="${resource.href}"]`)) return // Already exists
    
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource.href
    link.as = resource.as
    
    if (resource.priority) {
      link.fetchPriority = resource.priority
    }
    
    if (resource.crossorigin) {
      link.crossOrigin = resource.crossorigin
    }
    
    if (resource.type) {
      link.type = resource.type
    }
    
    document.head.appendChild(link)
  })
}

/**
 * Prefetch non-critical resources
 * @param {Array} resources - Array of resources to prefetch
 */
export function prefetchResources(resources = []) {
  if (!('requestIdleCallback' in window)) {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => prefetchResourcesNow(resources), 2000)
    return
  }
  
  requestIdleCallback(() => {
    prefetchResourcesNow(resources)
  })
}

function prefetchResourcesNow(resources) {
  resources.forEach(href => {
    if (document.querySelector(`link[href="${href}"]`)) return // Already exists
    
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    document.head.appendChild(link)
  })
}

/**
 * Lazy load non-critical components
 * @param {Function} importFn - Dynamic import function
 * @param {Object} options - Loading options
 * @returns {Promise} Component promise
 */
export function lazyLoadComponent(importFn, options = {}) {
  const { 
    delay = 0,
    retry = 3,
    retryDelay = 1000,
    fallback = null 
  } = options
  
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      let attempts = 0
      
      const attemptLoad = async () => {
        try {
          const component = await importFn()
          resolve(component)
        } catch (error) {
          attempts++
          if (attempts < retry) {
            setTimeout(attemptLoad, retryDelay)
          } else if (fallback) {
            resolve(fallback)
          } else {
            reject(error)
          }
        }
      }
      
      attemptLoad()
    }, delay)
  })
}

/**
 * Monitor Core Web Vitals
 */
export function setupPerformanceMonitoring() {
  // Largest Contentful Paint
  const observeLCP = () => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      // Send to analytics if available
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: lastEntry.startTime,
          event_category: 'Performance'
        })
      }
      
      console.log('LCP:', lastEntry.startTime)
    }).observe({ entryTypes: ['largest-contentful-paint'] })
  }
  
  // First Input Delay
  const observeFID = () => {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      
      entries.forEach((entry) => {
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            event_category: 'Performance'
          })
        }
        
        console.log('FID:', entry.processingStart - entry.startTime)
      })
    }).observe({ entryTypes: ['first-input'] })
  }
  
  // Cumulative Layout Shift
  const observeCLS = () => {
    let clsValue = 0
    
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      })
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: clsValue,
          event_category: 'Performance'
        })
      }
      
      console.log('CLS:', clsValue)
    }).observe({ entryTypes: ['layout-shift'] })
  }
  
  // Time to First Byte
  const observeTTFB = () => {
    const navigationEntry = performance.getEntriesByType('navigation')[0]
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'TTFB',
          value: ttfb,
          event_category: 'Performance'
        })
      }
      
      console.log('TTFB:', ttfb)
    }
  }
  
  // Setup observers
  if ('PerformanceObserver' in window) {
    observeLCP()
    observeFID()
    observeCLS()
  }
  
  // TTFB can be measured immediately
  observeTTFB()
}

/**
 * Optimize font loading
 */
export function optimizeFontLoading() {
  // Preload critical fonts
  const criticalFonts = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
  ]
  
  criticalFonts.forEach(href => {
    if (document.querySelector(`link[href="${href}"]`)) return
    
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = 'font'
    link.type = 'font/woff2'
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })
}

/**
 * Setup service worker for caching
 */
export function setupServiceWorker() {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/'
        })
        
        console.log('Service Worker registered:', registration)
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          
          newWorker?.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Show update notification to user
              console.log('New version available - please refresh')
            }
          })
        })
        
      } catch (error) {
        console.log('Service Worker registration failed:', error)
      }
    })
  }
}

/**
 * Optimize third-party scripts loading
 * @param {Object} scripts - Scripts configuration
 */
export function optimizeThirdPartyScripts(scripts = {}) {
  const defaultScripts = {
    analytics: {
      src: 'https://www.googletagmanager.com/gtag/js',
      defer: true,
      async: true,
      priority: 'low'
    }
  }
  
  const allScripts = { ...defaultScripts, ...scripts }
  
  Object.entries(allScripts).forEach(([_name, config]) => {
    if (document.querySelector(`script[src*="${config.src}"]`)) return
    
    const script = document.createElement('script')
    script.src = config.src
    
    if (config.async) script.async = true
    if (config.defer) script.defer = true
    if (config.crossOrigin) script.crossOrigin = config.crossOrigin
    
    // Load non-critical scripts after page load
    if (config.priority === 'low') {
      window.addEventListener('load', () => {
        document.head.appendChild(script)
      })
    } else {
      document.head.appendChild(script)
    }
  })
}

/**
 * Create performance budget monitoring
 * @param {Object} budget - Performance budget configuration
 */
export function monitorPerformanceBudget(budget = {}) {
  const defaultBudget = {
    lcp: 2500,    // 2.5s
    fid: 100,     // 100ms
    cls: 0.1,     // 0.1
    ttfb: 800     // 800ms
  }
  
  const finalBudget = { ...defaultBudget, ...budget }
  
  // Monitor after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType('navigation')[0]
      
      // Check various metrics
      const metrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        ttfb: navigation.responseStart - navigation.requestStart
      }
      
      Object.entries(metrics).forEach(([metric, value]) => {
        if (finalBudget[metric] && value > finalBudget[metric]) {
          console.warn(`Performance budget exceeded for ${metric}: ${value}ms (budget: ${finalBudget[metric]}ms)`)
        }
      })
    }, 1000)
  })
}

export default {
  preloadCriticalResources,
  prefetchResources,
  lazyLoadComponent,
  setupPerformanceMonitoring,
  optimizeFontLoading,
  setupServiceWorker,
  optimizeThirdPartyScripts,
  monitorPerformanceBudget
}