import { describe, it, expect } from 'vitest'
import { getGradientForCategory, getTextColorForCategory } from '@/utils/gradientUtils'

describe('gradientUtils', () => {
  describe('getGradientForCategory', () => {
    it('should return predefined gradient for known categories', () => {
      const gradient = getGradientForCategory('Web Development')
      expect(gradient).toBe('background: linear-gradient(135deg, #2E5944 0%, #4292AC 100%)')
    })

    it('should return predefined gradient for SEO category', () => {
      const gradient = getGradientForCategory('SEO')
      expect(gradient).toBe('background: linear-gradient(135deg, #4292AC 0%, #68B3C6 100%)')
    })

    it('should generate consistent gradient for unknown categories', () => {
      const gradient1 = getGradientForCategory('Unknown Category')
      const gradient2 = getGradientForCategory('Unknown Category')
      expect(gradient1).toBe(gradient2)
    })

    it('should generate different gradients for different unknown categories', () => {
      const gradient1 = getGradientForCategory('Category A')
      const gradient2 = getGradientForCategory('Category B')
      expect(gradient1).not.toBe(gradient2)
    })

    it('should handle empty strings', () => {
      const gradient = getGradientForCategory('')
      expect(gradient).toMatch(/background: linear-gradient/)
    })

    it('should return valid CSS gradient format', () => {
      const gradient = getGradientForCategory('Test Category')
      expect(gradient).toMatch(/^background: linear-gradient\(135deg, hsl\(\d+, 70%, 35%\) 0%, hsl\(\d+, 80%, 45%\) 100%\)$/)
    })
  })

  describe('getTextColorForCategory', () => {
    it('should always return white color for any category', () => {
      expect(getTextColorForCategory('Web Development')).toBe('color: white')
      expect(getTextColorForCategory('SEO')).toBe('color: white')
      expect(getTextColorForCategory('Unknown')).toBe('color: white')
      expect(getTextColorForCategory('')).toBe('color: white')
    })
  })
})