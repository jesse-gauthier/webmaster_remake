/**
 * Bounce Rate Optimization Utilities
 * Helps reduce bounce rate by improving user engagement and experience
 */

/**
 * Track user engagement signals
 */
export function trackEngagement() {
    let engagementScore = 0
    let isEngaged = false
    const engagementEvents = []

    // Track scroll depth
    let maxScrollDepth = 0
    function trackScrollDepth() {
        const scrollPercentage = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        )

        if (scrollPercentage > maxScrollDepth) {
            maxScrollDepth = scrollPercentage

            // Milestone tracking
            if (scrollPercentage >= 25 && !engagementEvents.includes('scroll_25')) {
                engagementEvents.push('scroll_25')
                engagementScore += 10
                trackEngagementEvent('scroll_depth', { percentage: 25 })
            }
            if (scrollPercentage >= 50 && !engagementEvents.includes('scroll_50')) {
                engagementEvents.push('scroll_50')
                engagementScore += 20
                trackEngagementEvent('scroll_depth', { percentage: 50 })
            }
            if (scrollPercentage >= 75 && !engagementEvents.includes('scroll_75')) {
                engagementEvents.push('scroll_75')
                engagementScore += 30
                trackEngagementEvent('scroll_depth', { percentage: 75 })
            }
        }
    }

    // Track time on page
    const startTime = Date.now()
    let timeCheckpoints = []

    function checkTimeEngagement() {
        const timeOnPage = Date.now() - startTime

        // 30 seconds
        if (timeOnPage >= 30000 && !timeCheckpoints.includes('30s')) {
            timeCheckpoints.push('30s')
            engagementScore += 15
            trackEngagementEvent('time_engagement', { duration: '30s' })
        }

        // 1 minute
        if (timeOnPage >= 60000 && !timeCheckpoints.includes('1m')) {
            timeCheckpoints.push('1m')
            engagementScore += 25
            isEngaged = true
            trackEngagementEvent('time_engagement', { duration: '1m' })
        }

        // 2 minutes
        if (timeOnPage >= 120000 && !timeCheckpoints.includes('2m')) {
            timeCheckpoints.push('2m')
            engagementScore += 35
            trackEngagementEvent('time_engagement', { duration: '2m' })
        }
    }

    // Track user interactions
    function trackInteraction(event) {
        if (!engagementEvents.includes('first_interaction')) {
            engagementEvents.push('first_interaction')
            engagementScore += 20
            trackEngagementEvent('first_interaction', { type: event.type })
        }
    }

    // Set up event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true })

    // Check time engagement every 10 seconds
    const timeInterval = setInterval(checkTimeEngagement, 10000)

    // Track interactions
    ['click', 'touchstart', 'keydown'].forEach(eventType => {
        document.addEventListener(eventType, trackInteraction, { once: true, passive: true })
    })

    // Clean up on page unload
    window.addEventListener('beforeunload', () => {
        clearInterval(timeInterval)
        reportEngagementScore(engagementScore, isEngaged, maxScrollDepth, Date.now() - startTime)
    })

    return {
        getEngagementScore: () => engagementScore,
        isUserEngaged: () => isEngaged,
        getScrollDepth: () => maxScrollDepth,
        getTimeOnPage: () => Date.now() - startTime
    }
}

/**
 * Track engagement events in analytics
 */
function trackEngagementEvent(action, data = {}) {
    console.log('📊 Engagement Event:', action, data)

    if (window.gtag) {
        window.gtag('event', 'user_engagement', {
            event_category: 'Engagement',
            event_label: action,
            ...data
        })
    }
}

/**
 * Report final engagement score
 */
function reportEngagementScore(score, isEngaged, scrollDepth, timeOnPage) {
    console.log('🎯 Final Engagement Score:', score)
    console.log('📈 User Engaged:', isEngaged)
    console.log('📜 Max Scroll Depth:', scrollDepth + '%')
    console.log('⏱️ Time on Page:', Math.round(timeOnPage / 1000) + 's')

    if (window.gtag) {
        window.gtag('event', 'engagement_summary', {
            event_category: 'Engagement',
            event_label: isEngaged ? 'engaged' : 'not_engaged',
            value: score,
            custom_parameter_scroll_depth: scrollDepth,
            custom_parameter_time_on_page: Math.round(timeOnPage / 1000)
        })
    }
}

/**
 * Implement exit-intent detection
 */
export function detectExitIntent() {
    let exitIntentShown = false

    function handleMouseLeave(e) {
        // Only trigger on upward mouse movement near top of viewport
        if (!exitIntentShown && e.clientY <= 50 && e.relatedTarget === null) {
            exitIntentShown = true

            console.log('🚪 Exit intent detected')
            trackEngagementEvent('exit_intent_detected')

            // Trigger exit intent popup or intervention
            showExitIntentModal()
        }
    }

    // Only on desktop (mobile has different UX patterns)
    if (window.innerWidth > 768) {
        document.addEventListener('mouseleave', handleMouseLeave)
    }

    return {
        isExitIntentShown: () => exitIntentShown
    }
}

/**
 * Show exit intent modal to reduce bounce rate
 */
function showExitIntentModal() {
    // Create and show exit intent modal
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
    modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-md mx-4 relative">
      <button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onclick="this.closest('.fixed').remove()">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <h3 class="text-xl font-bold mb-4">Wait! Before you go...</h3>
      <p class="text-gray-600 mb-6">Get your free website audit and discover how to improve your online presence!</p>
      <div class="flex gap-3">
        <a href="/contact" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex-1 text-center">
          Get Free Audit
        </a>
        <button onclick="this.closest('.fixed').remove()" class="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
          Maybe Later
        </button>
      </div>
    </div>
  `

    document.body.appendChild(modal)

    // Remove modal after 30 seconds if no interaction
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove()
        }
    }, 30000)
}

/**
 * Implement smart content recommendations to increase engagement
 */
export function showSmartRecommendations() {
    const currentPath = window.location.pathname
    let recommendations = []

    // Define content recommendations based on current page
    const contentMap = {
        '/': [
            { title: 'See Our Portfolio', url: '/portfolio', reason: 'View our recent work' },
            { title: 'Get Free Quote', url: '/contact', reason: 'Start your project today' },
            { title: 'Our Services', url: '/services', reason: 'Explore what we offer' }
        ],
        '/services': [
            { title: 'View Portfolio', url: '/portfolio', reason: 'See our work examples' },
            { title: 'Get Quote', url: '/contact', reason: 'Start your project' },
            { title: 'About Us', url: '/about', reason: 'Learn about our team' }
        ],
        '/about': [
            { title: 'Our Services', url: '/services', reason: 'See what we offer' },
            { title: 'Contact Us', url: '/contact', reason: 'Get in touch' },
            { title: 'Portfolio', url: '/portfolio', reason: 'View our work' }
        ],
        '/contact': [
            { title: 'Our Portfolio', url: '/portfolio', reason: 'See our work' },
            { title: 'Services', url: '/services', reason: 'Learn about our offerings' },
            { title: 'About Us', url: '/about', reason: 'Meet the team' }
        ]
    }

    recommendations = contentMap[currentPath] || contentMap['/']

    // Show recommendations after user has been on page for 45 seconds
    setTimeout(() => {
        showRecommendationBanner(recommendations)
    }, 45000)
}

/**
 * Show recommendation banner
 */
function showRecommendationBanner(recommendations) {
    if (document.querySelector('.recommendation-banner')) return // Don't show if already visible

    const banner = document.createElement('div')
    banner.className = 'recommendation-banner fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-40 border'
    banner.innerHTML = `
    <div class="flex justify-between items-start mb-3">
      <h4 class="font-semibold text-gray-800">You might also like:</h4>
      <button class="text-gray-400 hover:text-gray-600" onclick="this.closest('.recommendation-banner').remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="space-y-2">
      ${recommendations.map(rec => `
        <a href="${rec.url}" class="block p-2 rounded hover:bg-gray-50 border border-gray-200">
          <div class="font-medium text-sm text-blue-600">${rec.title}</div>
          <div class="text-xs text-gray-500">${rec.reason}</div>
        </a>
      `).join('')}
    </div>
  `

    document.body.appendChild(banner)

    trackEngagementEvent('recommendation_shown', {
        page: window.location.pathname,
        recommendations: recommendations.length
    })

    // Auto-hide after 60 seconds
    setTimeout(() => {
        if (banner.parentNode) {
            banner.remove()
        }
    }, 60000)
}

/**
 * Implement scroll-triggered content reveals to increase engagement
 */
export function addScrollTriggers() {
    if (typeof document === 'undefined') return

    const scrollElements = document.querySelectorAll('.scroll-reveal')

    if (!scrollElements || scrollElements.length === 0) return

    const observer = new IntersectionObserver((entries) => {
        if (!entries || !Array.isArray(entries)) return
        
        entries.forEach(entry => {
            if (entry && entry.isIntersecting && entry.target) {
                entry.target.classList.add('revealed')
                trackEngagementEvent('content_revealed', {
                    element: entry.target.id || entry.target.className
                })
            }
        })
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    })

    scrollElements.forEach(el => {
        if (el) observer.observe(el)
    })
}

/**
 * Add floating action button for quick contact
 */
export function addFloatingCTA() {
    // Don't show on contact page
    if (window.location.pathname === '/contact') return

    const fab = document.createElement('div')
    fab.className = 'fixed bottom-6 left-6 z-40'
    fab.innerHTML = `
    <a href="/contact" class="flex items-center bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.419L3 21l2.419-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"></path>
      </svg>
      <span class="text-sm font-medium">Get Quote</span>
    </a>
  `

    document.body.appendChild(fab)

    // Show after 30 seconds
    setTimeout(() => {
        fab.style.opacity = '0'
        fab.style.transform = 'translateY(100px)'
        fab.style.transition = 'all 0.3s ease'

        setTimeout(() => {
            fab.style.opacity = '1'
            fab.style.transform = 'translateY(0)'
        }, 100)
    }, 30000)
}

/**
 * Initialize all bounce rate optimization features
 */
export function initBounceRateOptimization() {
    console.log('🎯 Initializing Bounce Rate Optimization')

    if (typeof window === 'undefined' || typeof document === 'undefined') {
        console.warn('Bounce Rate Optimization: Browser environment not available')
        return null
    }

    // Wait for DOM to be ready
    const initialize = () => {
        // Start engagement tracking
        const engagementTracker = trackEngagement()

        // Set up exit intent detection
        const exitIntentDetector = detectExitIntent()

        // Show smart recommendations
        showSmartRecommendations()

        // Add scroll triggers
        addScrollTriggers()

        // Add floating CTA
        addFloatingCTA()

        return {
            engagement: engagementTracker,
            exitIntent: exitIntentDetector
        }
    }

    // Initialize immediately if DOM is already loaded, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize)
        return null
    } else {
        return initialize()
    }
}

/**
 * Page speed optimization to reduce bounce rate
 */
export function optimizePageSpeed() {
    if (typeof document === 'undefined') return

    // Lazy load images below the fold
    const lazyImages = document.querySelectorAll('img[data-src]')

    if (lazyImages && lazyImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            if (!entries || !Array.isArray(entries)) return
            
            entries.forEach(entry => {
                if (entry && entry.isIntersecting && entry.target) {
                    const img = entry.target
                    if (img.dataset && img.dataset.src) {
                        img.src = img.dataset.src
                        img.removeAttribute('data-src')
                        imageObserver.unobserve(img)
                    }
                }
            })
        })

        lazyImages.forEach(img => {
            if (img) imageObserver.observe(img)
        })
    }

    // Preload critical pages
    const criticalPages = ['/services', '/contact', '/portfolio']
    criticalPages.forEach(page => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
    })
}
