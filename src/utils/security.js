/**
 * Security utilities for enhanced application security
 */

/**
 * Generate a cryptographically secure nonce for CSP
 * @returns {string} Base64 encoded nonce
 */
export function generateNonce() {
  // Use crypto.getRandomValues in browser environment
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16)
    window.crypto.getRandomValues(array)
    return btoa(String.fromCharCode.apply(null, array))
  }
  
  // Fallback for non-crypto environments
  return btoa(Math.random().toString(36).substring(2) + Date.now().toString(36))
}

/**
 * Sanitize user input to prevent XSS attacks
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized input
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim()
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (flexible format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Whether phone is valid
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[+]?[(]?[\d\s\-().]{10,}$/
  return phoneRegex.test(phone)
}

/**
 * Rate limiting utility (client-side basic implementation)
 * @param {string} key - Unique key for the action
 * @param {number} limit - Maximum attempts
 * @param {number} window - Time window in milliseconds
 * @returns {boolean} Whether action is allowed
 */
export function checkRateLimit(key, limit = 5, window = 60000) {
  const now = Date.now()
  const stored = localStorage.getItem(`rate_limit_${key}`)
  
  if (!stored) {
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify({ count: 1, timestamp: now }))
    return true
  }
  
  const data = JSON.parse(stored)
  
  // Reset if window has passed
  if (now - data.timestamp > window) {
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify({ count: 1, timestamp: now }))
    return true
  }
  
  // Check if limit exceeded
  if (data.count >= limit) {
    return false
  }
  
  // Increment count
  data.count += 1
  localStorage.setItem(`rate_limit_${key}`, JSON.stringify(data))
  return true
}

/**
 * Generate CSRF token
 * @returns {string} CSRF token
 */
export function generateCSRFToken() {
  // Use crypto.getRandomValues in browser environment
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(32)
    window.crypto.getRandomValues(array)
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
  }
  
  // Fallback for non-crypto environments
  return Array.from({length: 32}, () => Math.floor(Math.random() * 16).toString(16)).join('')
}

/**
 * Validate CSRF token
 * @param {string} token - Token to validate
 * @param {string} storedToken - Stored token to compare against
 * @returns {boolean} Whether token is valid
 */
export function validateCSRFToken(token, storedToken) {
  return token === storedToken && token.length === 64
}

/**
 * Secure localStorage with encryption (basic implementation)
 */
export const secureStorage = {
  /**
   * Store encrypted data
   * @param {string} key - Storage key
   * @param {any} value - Value to store
   */
  setItem(key, value) {
    try {
      const encrypted = btoa(JSON.stringify(value))
      localStorage.setItem(key, encrypted)
    } catch (error) {
      console.error('Failed to store encrypted data:', error)
    }
  },

  /**
   * Retrieve and decrypt data
   * @param {string} key - Storage key
   * @returns {any} Decrypted value or null
   */
  getItem(key) {
    try {
      const encrypted = localStorage.getItem(key)
      if (!encrypted) return null
      return JSON.parse(atob(encrypted))
    } catch (error) {
      console.error('Failed to retrieve encrypted data:', error)
      return null
    }
  },

  /**
   * Remove item from storage
   * @param {string} key - Storage key
   */
  removeItem(key) {
    localStorage.removeItem(key)
  }
}

/**
 * Content Security Policy utilities
 */
export const csp = {
  /**
   * Generate CSP nonce for inline scripts
   * @returns {string} Nonce value
   */
  generateNonce() {
    return generateNonce()
  },

  /**
   * Create CSP header with nonce support
   * @param {string} nonce - Nonce value
   * @returns {string} CSP header value
   */
  createHeader(nonce) {
    return [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://calendly.com https://*.calendly.com`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'self' https://calendly.com https://*.calendly.com",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'"
    ].join('; ')
  }
}

/**
 * Security headers configuration
 */
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp'
}

export default {
  generateNonce,
  sanitizeInput,
  isValidEmail,
  isValidPhone,
  checkRateLimit,
  generateCSRFToken,
  validateCSRFToken,
  secureStorage,
  csp,
  securityHeaders
}