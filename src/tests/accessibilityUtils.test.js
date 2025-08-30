import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { 
  trapFocus, 
  saveFocus,
  restoreFocus, 
  announce,
  handleArrowNavigation,
  addSkipLink,
  meetsContrastRequirements,
  getContrastRatio,
  getSrOnlyCSS,
  getFocusIndicatorCSS
} from '@/utils/accessibilityUtils'

// Mock DOM methods
const mockElement = {
  setAttribute: vi.fn(),
  removeAttribute: vi.fn(),
  focus: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  appendChild: vi.fn(),
  insertBefore: vi.fn(),
  querySelector: vi.fn(),
  querySelectorAll: vi.fn(() => []),
  style: {},
  classList: {
    add: vi.fn(),
    remove: vi.fn()
  },
  textContent: '',
  id: 'mock-element',
  firstChild: null
}

describe('accessibilityUtils', () => {
  beforeEach(() => {
    // Mock document methods
    vi.stubGlobal('document', {
      createElement: vi.fn(() => mockElement),
      body: mockElement,
      querySelector: vi.fn(() => mockElement),
      querySelectorAll: vi.fn(() => [mockElement]),
      activeElement: mockElement,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      getElementById: vi.fn(() => null)
    })
    
    // Reset all mocks
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('trapFocus', () => {
    it('should handle Tab key event within container', () => {
      const container = {
        querySelectorAll: vi.fn(() => [mockElement, mockElement])
      }
      const event = {
        key: 'Tab',
        shiftKey: false,
        preventDefault: vi.fn()
      }
      
      trapFocus(event, container)
      
      expect(container.querySelectorAll).toHaveBeenCalledWith(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    })

    it('should ignore non-Tab key events', () => {
      const container = { querySelectorAll: vi.fn() }
      const event = { key: 'Enter' }
      
      trapFocus(event, container)
      
      expect(container.querySelectorAll).not.toHaveBeenCalled()
    })

    it('should handle containers with no focusable elements', () => {
      const container = {
        querySelectorAll: vi.fn(() => [])
      }
      const event = { key: 'Tab' }
      
      expect(() => trapFocus(event, container)).not.toThrow()
    })
  })

  describe('saveFocus', () => {
    it('should return the currently active element', () => {
      const result = saveFocus()
      expect(result).toBe(mockElement)
    })
  })

  describe('restoreFocus', () => {
    it('should focus the provided element immediately', () => {
      const element = mockElement
      restoreFocus(element)
      
      expect(element.focus).toHaveBeenCalled()
    })

    it('should focus with delay when specified', async () => {
      const element = mockElement
      restoreFocus(element, 10)
      
      await new Promise(resolve => setTimeout(resolve, 15))
      expect(element.focus).toHaveBeenCalled()
    })

    it('should handle null element gracefully', () => {
      expect(() => restoreFocus(null)).not.toThrow()
    })

    it('should handle elements without focus method', () => {
      const element = {}
      expect(() => restoreFocus(element)).not.toThrow()
    })
  })

  describe('announce', () => {
    it('should create live region for announcements', () => {
      announce('Test message')
      
      expect(document.createElement).toHaveBeenCalledWith('div')
      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-live', 'polite')
    })

    it('should use assertive priority when specified', () => {
      announce('Urgent message', 'assertive')
      
      expect(mockElement.setAttribute).toHaveBeenCalledWith('aria-live', 'assertive')
    })

    it('should handle empty messages', () => {
      expect(() => announce('')).not.toThrow()
    })
  })

  describe('handleArrowNavigation', () => {
    it('should handle arrow down navigation', () => {
      const items = [mockElement, mockElement, mockElement]
      const event = { key: 'ArrowDown', preventDefault: vi.fn() }
      const onNavigate = vi.fn()
      
      const newIndex = handleArrowNavigation(event, items, 0, onNavigate)
      
      expect(event.preventDefault).toHaveBeenCalled()
      expect(newIndex).toBe(1)
      expect(onNavigate).toHaveBeenCalledWith(1)
    })

    it('should wrap around at end of list', () => {
      const items = [mockElement, mockElement, mockElement]
      const event = { key: 'ArrowDown', preventDefault: vi.fn() }
      
      const newIndex = handleArrowNavigation(event, items, 2)
      
      expect(newIndex).toBe(0)
    })

    it('should handle empty items array', () => {
      const event = { key: 'ArrowDown' }
      
      const newIndex = handleArrowNavigation(event, [], 0)
      
      expect(newIndex).toBe(0)
    })
  })

  describe('addSkipLink', () => {
    it('should create and configure skip link', () => {
      addSkipLink('main-content', 'Skip to main content')
      
      expect(document.createElement).toHaveBeenCalledWith('a')
      expect(mockElement.insertBefore).toHaveBeenCalled()
    })
  })

  describe('getContrastRatio', () => {
    it('should calculate contrast ratio between colors', () => {
      const ratio = getContrastRatio('#000000', '#ffffff')
      expect(typeof ratio).toBe('number')
      expect(ratio).toBeGreaterThan(1)
    })

    it('should handle same colors', () => {
      const ratio = getContrastRatio('#000000', '#000000')
      expect(ratio).toBe(1)
    })

    it('should handle colors without # prefix', () => {
      const ratio = getContrastRatio('000000', 'ffffff')
      expect(typeof ratio).toBe('number')
      expect(ratio).toBeGreaterThan(1)
    })
  })

  describe('meetsContrastRequirements', () => {
    it('should check AA compliance for normal text', () => {
      const result = meetsContrastRequirements('#000000', '#ffffff', 'AA', false)
      expect(typeof result).toBe('boolean')
    })

    it('should check AAA compliance for large text', () => {
      const result = meetsContrastRequirements('#000000', '#ffffff', 'AAA', true)
      expect(typeof result).toBe('boolean')
    })
  })

  describe('getSrOnlyCSS', () => {
    it('should return CSS string for screen reader only classes', () => {
      const css = getSrOnlyCSS()
      expect(typeof css).toBe('string')
      expect(css).toContain('.sr-only')
      expect(css).toContain('position: absolute')
    })
  })

  describe('getFocusIndicatorCSS', () => {
    it('should return CSS string for focus indicators', () => {
      const css = getFocusIndicatorCSS()
      expect(typeof css).toBe('string')
      expect(css).toContain(':focus')
      expect(css).toContain('outline')
    })
  })
})