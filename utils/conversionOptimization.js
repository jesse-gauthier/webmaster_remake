/**
 * Conversion optimization utilities
 */

/**
 * Track user interactions for conversion optimization
 * @param {string} action - Action being tracked
 * @param {Object} data - Additional data to track
 */
export function trackConversionEvent(action, data = {}) {
  // Track with analytics if available
  if (window.gtag) {
    window.gtag('event', 'conversion_action', {
      action_type: action,
      event_category: 'Conversion',
      event_label: data.label || action,
      value: data.value || 0,
      ...data
    })
  }
  
  // Store in localStorage for A/B testing analysis
  const conversionData = {
    action,
    timestamp: Date.now(),
    url: window.location.pathname,
    ...data
  }
  
  const stored = localStorage.getItem('conversion_events') || '[]'
  const events = JSON.parse(stored)
  events.push(conversionData)
  
  // Keep only last 50 events to prevent storage bloat
  if (events.length > 50) {
    events.splice(0, events.length - 50)
  }
  
  localStorage.setItem('conversion_events', JSON.stringify(events))
}

/**
 * Create urgency and scarcity elements
 * @param {Object} options - Urgency options
 */
export function createUrgencyElement(options = {}) {
  const {
    type = 'timer',
    message = 'Limited time offer!',
    duration = 3600000, // 1 hour
    position = 'top',
    style = 'banner'
  } = options
  
  if (type === 'timer') {
    return createCountdownTimer(duration, message, position, style)
  } else if (type === 'stock') {
    return createStockCounter(options)
  }
}

/**
 * Create countdown timer for urgency
 * @param {number} duration - Duration in milliseconds
 * @param {string} message - Urgency message
 * @param {string} position - Position on page
 * @param {string} style - Style type
 */
function createCountdownTimer(duration, message, position, style) {
  const endTime = Date.now() + duration
  
  const element = document.createElement('div')
  element.className = `urgency-timer ${style} ${position}`
  element.innerHTML = `
    <div class="urgency-content">
      <span class="urgency-message">${message}</span>
      <span class="countdown-display">00:00:00</span>
    </div>
  `
  
  // Update timer every second
  const updateTimer = () => {
    const now = Date.now()
    const remaining = Math.max(0, endTime - now)
    
    if (remaining === 0) {
      element.remove()
      return
    }
    
    const hours = Math.floor(remaining / 3600000)
    const minutes = Math.floor((remaining % 3600000) / 60000)
    const seconds = Math.floor((remaining % 60000) / 1000)
    
    const display = element.querySelector('.countdown-display')
    if (display) {
      display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
  }
  
  const interval = setInterval(updateTimer, 1000)
  updateTimer() // Initial update
  
  // Clean up on element removal
  element.addEventListener('remove', () => clearInterval(interval))
  
  return element
}

/**
 * Create stock counter for scarcity
 * @param {Object} options - Stock options
 */
function createStockCounter(options = {}) {
  const {
    initialStock = 5,
    message = 'Only {count} left in stock!',
    decreaseInterval = 300000 // 5 minutes
  } = options
  
  let currentStock = initialStock
  
  const element = document.createElement('div')
  element.className = 'stock-counter'
  
  const updateDisplay = () => {
    element.innerHTML = `
      <div class="stock-warning ${currentStock <= 2 ? 'critical' : ''}">
        <span class="stock-icon">⚠️</span>
        <span class="stock-message">${message.replace('{count}', currentStock)}</span>
      </div>
    `
  }
  
  updateDisplay()
  
  // Decrease stock periodically
  const interval = setInterval(() => {
    if (currentStock > 1) {
      currentStock--
      updateDisplay()
    } else {
      clearInterval(interval)
      setTimeout(() => element.remove(), 5000)
    }
  }, decreaseInterval)
  
  return element
}

/**
 * Exit-intent detection for popup offers
 * @param {Function} callback - Function to call on exit intent
 * @param {Object} options - Detection options
 */
export function detectExitIntent(callback, options = {}) {
  const {
    sensitivity = 10,
    delay = 1000,
    onlyOnce = true
  } = options
  
  let hasTriggered = false
  let mouseLeaveDelay = null
  
  const handleMouseLeave = (e) => {
    if (hasTriggered && onlyOnce) return
    
    // Check if mouse is leaving from the top
    if (e.clientY <= sensitivity) {
      mouseLeaveDelay = setTimeout(() => {
        if (!hasTriggered || !onlyOnce) {
          hasTriggered = true
          callback()
        }
      }, delay)
    }
  }
  
  const handleMouseEnter = () => {
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay)
      mouseLeaveDelay = null
    }
  }
  
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('mouseenter', handleMouseEnter)
  
  // Return cleanup function
  return () => {
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseenter', handleMouseEnter)
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay)
    }
  }
}

/**
 * A/B test different variations
 * @param {string} testName - Name of the test
 * @param {Array} variations - Array of variations to test
 * @param {Object} options - Test options
 */
export function runABTest(testName, variations, options = {}) {
  const {
    persist = true,
    distribution = 'equal'
  } = options
  
  const storageKey = `ab_test_${testName}`
  
  // Check if user already has a variation assigned
  if (persist) {
    const stored = localStorage.getItem(storageKey)
    if (stored && variations.find(v => v.name === stored)) {
      return variations.find(v => v.name === stored)
    }
  }
  
  // Assign new variation
  let selectedVariation
  
  if (distribution === 'equal') {
    const index = Math.floor(Math.random() * variations.length)
    selectedVariation = variations[index]
  } else {
    // Weighted distribution
    const totalWeight = variations.reduce((sum, v) => sum + (v.weight || 1), 0)
    let random = Math.random() * totalWeight
    
    for (const variation of variations) {
      random -= (variation.weight || 1)
      if (random <= 0) {
        selectedVariation = variation
        break
      }
    }
  }
  
  // Store the selection
  if (persist) {
    localStorage.setItem(storageKey, selectedVariation.name)
  }
  
  // Track the test assignment
  trackConversionEvent('ab_test_assigned', {
    test_name: testName,
    variation: selectedVariation.name,
    label: `${testName}:${selectedVariation.name}`
  })
  
  return selectedVariation
}

/**
 * Create social proof notifications
 * @param {Array} notifications - Array of notification data
 * @param {Object} options - Notification options
 */
export function createSocialProofNotifications(notifications, options = {}) {
  const {
    interval = 10000,
    duration = 5000,
    position = 'bottom-left'
  } = options
  
  let currentIndex = 0
  
  const container = document.createElement('div')
  container.className = `social-proof-container ${position}`
  document.body.appendChild(container)
  
  const showNotification = () => {
    if (notifications.length === 0) return
    
    const notification = notifications[currentIndex]
    const element = document.createElement('div')
    element.className = 'social-proof-notification'
    element.innerHTML = `
      <div class="notification-content">
        <div class="notification-avatar">
          <img src="${notification.avatar || '/images/default-avatar.png'}" alt="Customer" />
        </div>
        <div class="notification-text">
          <strong>${notification.name}</strong> ${notification.action}
          <div class="notification-time">${notification.timeAgo || 'just now'}</div>
        </div>
      </div>
    `
    
    container.appendChild(element)
    
    // Animate in
    setTimeout(() => element.classList.add('show'), 100)
    
    // Remove after duration
    setTimeout(() => {
      element.classList.remove('show')
      setTimeout(() => element.remove(), 300)
    }, duration)
    
    currentIndex = (currentIndex + 1) % notifications.length
  }
  
  // Show first notification after delay
  setTimeout(showNotification, 2000)
  
  // Set interval for subsequent notifications
  const notificationInterval = setInterval(showNotification, interval)
  
  // Return cleanup function
  return () => {
    clearInterval(notificationInterval)
    container.remove()
  }
}

/**
 * Optimize call-to-action buttons
 * @param {string} selector - CSS selector for CTA buttons
 * @param {Object} options - Optimization options
 */
export function optimizeCTAButtons(selector = '.cta-button', options = {}) {
  const {
    hoverEffects = true,
    clickTracking = true,
    loadingStates = true
  } = options
  
  const buttons = document.querySelectorAll(selector)
  
  buttons.forEach(button => {
    // Add hover effects
    if (hoverEffects) {
      button.addEventListener('mouseenter', () => {
        button.classList.add('cta-hover')
      })
      
      button.addEventListener('mouseleave', () => {
        button.classList.remove('cta-hover')
      })
    }
    
    // Add click tracking
    if (clickTracking) {
      button.addEventListener('click', (_e) => {
        const buttonText = button.textContent.trim()
        const buttonId = button.id || 'unnamed'
        
        trackConversionEvent('cta_click', {
          button_text: buttonText,
          button_id: buttonId,
          page_url: window.location.pathname
        })
      })
    }
    
    // Add loading states for form submissions
    if (loadingStates && button.type === 'submit') {
      const form = button.closest('form')
      if (form) {
        form.addEventListener('submit', () => {
          button.classList.add('loading')
          button.disabled = true
        })
      }
    }
  })
}

/**
 * Progressive disclosure for complex forms
 * @param {string} formSelector - Form selector
 * @param {Array} steps - Array of step configurations
 */
export function createProgressiveForm(formSelector, steps) {
  const form = document.querySelector(formSelector)
  if (!form) return
  
  let currentStep = 0
  
  // Create step indicator
  const indicator = document.createElement('div')
  indicator.className = 'form-progress'
  indicator.innerHTML = steps.map((step, index) => 
    `<div class="step ${index === 0 ? 'active' : ''}">${step.title}</div>`
  ).join('')
  
  form.insertBefore(indicator, form.firstChild)
  
  // Show/hide form sections based on current step
  const updateStepVisibility = () => {
    steps.forEach((step, index) => {
      const fields = form.querySelectorAll(step.selector)
      fields.forEach(field => {
        field.style.display = index === currentStep ? 'block' : 'none'
      })
    })
    
    // Update progress indicator
    indicator.querySelectorAll('.step').forEach((step, index) => {
      step.classList.toggle('active', index <= currentStep)
      step.classList.toggle('completed', index < currentStep)
    })
  }
  
  // Add navigation buttons
  const navigation = document.createElement('div')
  navigation.className = 'form-navigation'
  navigation.innerHTML = `
    <button type="button" class="prev-step" style="display: none">Previous</button>
    <button type="button" class="next-step">Next</button>
  `
  
  form.appendChild(navigation)
  
  // Handle navigation
  navigation.querySelector('.next-step').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      currentStep++
      updateStepVisibility()
      
      // Show/hide navigation buttons
      navigation.querySelector('.prev-step').style.display = currentStep > 0 ? 'inline-block' : 'none'
      navigation.querySelector('.next-step').textContent = currentStep === steps.length - 1 ? 'Submit' : 'Next'
    }
  })
  
  navigation.querySelector('.prev-step').addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--
      updateStepVisibility()
      
      // Show/hide navigation buttons
      navigation.querySelector('.prev-step').style.display = currentStep > 0 ? 'inline-block' : 'none'
      navigation.querySelector('.next-step').textContent = 'Next'
    }
  })
  
  // Initial setup
  updateStepVisibility()
}

export default {
  trackConversionEvent,
  createUrgencyElement,
  detectExitIntent,
  runABTest,
  createSocialProofNotifications,
  optimizeCTAButtons,
  createProgressiveForm
}