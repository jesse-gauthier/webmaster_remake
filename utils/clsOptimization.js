/**
 * CLS (Cumulative Layout Shift) measurement and optimization utilities
 */

/**
 * Measure and report CLS using the Performance Observer API
 */
export function measureCLS() {
    if (!window.PerformanceObserver) {
        console.warn('Performance Observer not supported')
        return
    }

    let clsValue = 0
    let sessionValue = 0
    let clsEntries = []

    const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()

        for (const entry of entries) {
            // Only count layout shift entries that haven't been excluded
            if (!entry.hadRecentInput) {
                clsValue += entry.value
                sessionValue += entry.value
                clsEntries.push(entry)

                // Report to analytics if CLS threshold exceeded
                if (clsValue > 0.1) {
                    console.warn('CLS threshold exceeded:', clsValue)
                    reportCLSIssue(entry, clsValue)
                }
            }
        }
    })

    observer.observe({ type: 'layout-shift', buffered: true })

    // Report final CLS on page unload
    window.addEventListener('beforeunload', () => {
        reportFinalCLS(clsValue, clsEntries)
    })

    return {
        getCurrentCLS: () => clsValue,
        getSessionCLS: () => sessionValue,
        getCLSEntries: () => clsEntries
    }
}

/**
 * Report CLS issues for debugging
 */
function reportCLSIssue(entry, totalCLS) {
    console.group('⚠️ Layout Shift Detected')
    console.log('Current CLS:', totalCLS.toFixed(4))
    console.log('Shift value:', entry.value.toFixed(4))
    console.log('Sources:', entry.sources)
    console.log('Time:', entry.startTime)
    console.groupEnd()

    // Track in analytics if available
    if (window.gtag) {
        window.gtag('event', 'layout_shift', {
            event_category: 'Performance',
            event_label: 'CLS Issue',
            value: Math.round(totalCLS * 1000), // Convert to integer
            custom_parameter_cls_value: totalCLS,
            custom_parameter_shift_sources: entry.sources?.length || 0
        })
    }
}

/**
 * Report final CLS score
 */
function reportFinalCLS(finalCLS, entries) {
    console.log('🎯 Final CLS Score:', finalCLS.toFixed(4))

    // Determine rating
    let rating = 'good'
    if (finalCLS > 0.25) rating = 'poor'
    else if (finalCLS > 0.1) rating = 'needs-improvement'

    console.log('📊 CLS Rating:', rating)

    // Track in analytics
    if (window.gtag) {
        window.gtag('event', 'cls_measurement', {
            event_category: 'Performance',
            event_label: rating,
            value: Math.round(finalCLS * 1000),
            custom_parameter_final_cls: finalCLS,
            custom_parameter_shift_count: entries.length
        })
    }
}

/**
 * Initialize image placeholders to prevent layout shift
 */
export function initImagePlaceholders() {
    const images = document.querySelectorAll('img[data-src]:not([src])')

    images.forEach(img => {
        // Set placeholder dimensions if not already set
        if (!img.style.width && !img.style.height) {
            const width = img.getAttribute('width')
            const height = img.getAttribute('height')

            if (width && height) {
                // Calculate aspect ratio and set container
                const aspectRatio = height / width
                img.style.aspectRatio = `${width} / ${height}`
                img.style.width = '100%'
                img.style.height = 'auto'
            }
        }
    })
}

/**
 * Reserve space for dynamic content to prevent layout shift
 */
export function reserveContentSpace(selector, minHeight = '200px') {
    const elements = document.querySelectorAll(selector)

    elements.forEach(element => {
        if (!element.style.minHeight) {
            element.style.minHeight = minHeight
        }
    })
}

/**
 * Monitor font loading to prevent layout shift
 */
export function monitorFontLoading() {
    if (!document.fonts) {
        console.warn('Font Loading API not supported')
        return
    }

    // Track font loading completion
    document.fonts.ready.then(() => {
        console.log('✅ All fonts loaded')

        // Track in analytics
        if (window.gtag) {
            window.gtag('event', 'fonts_loaded', {
                event_category: 'Performance',
                event_label: 'Font Loading Complete'
            })
        }
    })

    // Monitor individual font loads
    document.fonts.addEventListener('loadingdone', (event) => {
        if (event.fontface && event.fontface.family) {
            console.log('Font loaded:', event.fontface.family)
        }
    })

    document.fonts.addEventListener('loadingerror', (event) => {
        if (event.fontface && event.fontface.family) {
            console.error('Font loading error:', event.fontface.family)
        }
    })
}

/**
 * Optimize critical CSS delivery
 */
export function optimizeCriticalCSS() {
    // Preload critical CSS
    const criticalCSS = [
        '/css/critical.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ]

    criticalCSS.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'style'
        link.href = href
        link.onload = function () {
            this.onload = null
            this.rel = 'stylesheet'
        }
        document.head.appendChild(link)
    })
}

/**
 * Add layout shift prevention classes dynamically
 */
export function preventLayoutShifts() {
    // Add aspect ratio containers for images without dimensions
    const images = document.querySelectorAll('img:not([width]):not([height])')

    images.forEach(img => {
        if (!img.closest('.img-container')) {
            const container = document.createElement('div')
            container.className = 'img-container aspect-16-9'
            img.parentNode.insertBefore(container, img)
            container.appendChild(img)
            img.className += ' absolute inset-0 w-full h-full object-cover'
        }
    })

    // Reserve space for buttons and form elements
    const buttons = document.querySelectorAll('button:not([style*="height"])')
    buttons.forEach(btn => {
        if (!btn.style.minHeight) {
            btn.style.minHeight = '44px'
        }
    })

    // Reserve space for form inputs
    const inputs = document.querySelectorAll('input:not([style*="height"]), textarea:not([style*="height"])')
    inputs.forEach(input => {
        if (!input.style.minHeight) {
            input.style.minHeight = input.type === 'textarea' ? '120px' : '44px'
        }
    })
}

/**
 * Initialize all CLS prevention measures
 */
export function initCLSPrevention() {
    console.log('🛡️ Initializing CLS Prevention')

    // Start measuring CLS
    const clsMonitor = measureCLS()

    // Set up other prevention measures
    initImagePlaceholders()
    monitorFontLoading()
    preventLayoutShifts()

    // Reserve space for common dynamic content
    reserveContentSpace('.dynamic-content')
    reserveContentSpace('.loading-content', '300px')

    // Return CLS monitor for external use
    return clsMonitor
}

/**
 * Performance monitoring for Core Web Vitals
 */
export function initCoreWebVitals() {
    if (!window.PerformanceObserver) return

    // Monitor CLS
    const clsMonitor = measureCLS()

    // Monitor LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]

        console.log('🚀 LCP:', lastEntry.startTime.toFixed(2) + 'ms')

        if (window.gtag) {
            window.gtag('event', 'lcp_measurement', {
                event_category: 'Performance',
                value: Math.round(lastEntry.startTime)
            })
        }
    })

    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    // Monitor FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach(entry => {
            console.log('⚡ FID:', entry.processingStart - entry.startTime + 'ms')

            if (window.gtag) {
                window.gtag('event', 'fid_measurement', {
                    event_category: 'Performance',
                    value: Math.round(entry.processingStart - entry.startTime)
                })
            }
        })
    })

    fidObserver.observe({ type: 'first-input', buffered: true })

    return { clsMonitor, lcpObserver, fidObserver }
}
