/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#2E5944', // Forest Green (primary brand color)
          dark: '#1B3D2F', // Deep Green (darker variant)
          light: '#EDF5F0', // Light Forest Green (for backgrounds)
          50: '#F4F7F5',
          100: '#E8F0EB',
          200: '#D1E1D7',
          300: '#B4CCC0',
          400: '#8EAE9D',
          500: '#5E8F77',
          600: '#2E5944', // Main primary color
          700: '#1B3D2F', // Darker primary
          800: '#17332A',
          900: '#122921',
        },
        // Accent Color
        accent: {
          DEFAULT: '#4292AC', // Steel Blue
          dark: '#357D96', // Darker Steel Blue (for hover states)
          light: '#D5E6EC', // Light Steel Blue (for backgrounds)
          50: '#F0F7FA',
          100: '#DDEEF4',
          200: '#BEE0EA',
          300: '#94CCD9',
          400: '#68B3C6',
          500: '#4292AC', // Main accent color
          600: '#357D96', // Darker accent
          700: '#2A6275',
          800: '#224E5D',
          900: '#193A46',
        },
        // Neutral Colors
        neutral: {
          cream: '#F7F3E8', // Cream (background color)
          text: '#2D2D2D', // Off Black (text color)
          50: '#F7F3E8', // Cream
          100: '#EFE9DA',
          200: '#E0D9C4',
          300: '#CAC0A5',
          400: '#B1A483',
          500: '#99895F',
          600: '#7F704A',
          700: '#665A3C',
          800: '#4D442D',
          900: '#2D2D2D', // Off Black (text)
        },
        success: '#34D399', // Green for success states
        warning: '#FBBF24', // Amber for warning states
        error: '#F87171', // Red for error states
        info: '#60A5FA', // Blue for info states
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        card: '5px',
        full: '9999px',
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.05)',
        button: '0 2px 4px rgba(0, 0, 0, 0.1)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        section: '80px',
        header: '80px', // Height of header
        footer: '200px', // Height of footer
        'nav-item': '2rem', // Spacing for navigation items
      },
      maxWidth: {
        container: '1280px', // Max width for main container
        content: '800px', // Max width for text content
        form: '600px', // Max width for forms
      },
      gridTemplateColumns: {
        services: 'repeat(auto-fit, minmax(300px, 1fr))', // For services grid layout
        portfolio: 'repeat(auto-fit, minmax(350px, 1fr))', // For portfolio grid layout
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-light': 'bounceLight 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      zIndex: {
        dropdown: '1000',
        sticky: '1020',
        fixed: '1030',
        modal: '1040',
        popover: '1050',
        tooltip: '1060',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Button Components
        '.btn-primary': {
          backgroundColor: '#4292AC',
          color: '#F7F3E8',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          fontWeight: '600',
          fontFamily: 'Montserrat, sans-serif',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 150ms ease-in-out',
          '&:hover': {
            backgroundColor: '#357D96',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(66, 146, 172, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          },
          '&:disabled': {
            backgroundColor: '#D5E6EC',
            color: '#6B7280',
            cursor: 'not-allowed',
            boxShadow: 'none',
            transform: 'none',
          },
        },
        '.btn-secondary': {
          backgroundColor: '#2E5944',
          color: '#F7F3E8',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          fontWeight: '600',
          fontFamily: 'Montserrat, sans-serif',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 150ms ease-in-out',
          '&:hover': {
            backgroundColor: '#1B3D2F',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(46, 89, 68, 0.4)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
          },
          '&:disabled': {
            backgroundColor: '#EDF5F0',
            color: '#6B7280',
            cursor: 'not-allowed',
            boxShadow: 'none',
            transform: 'none',
          },
        },
        '.btn-outline': {
          backgroundColor: 'transparent',
          color: '#2E5944',
          border: '2px solid #2E5944',
          padding: '0.5rem 1.5rem',
          borderRadius: '0.25rem',
          fontWeight: '600',
          fontFamily: 'Montserrat, sans-serif',
          transition: 'all 150ms ease-in-out',
          '&:hover': {
            backgroundColor: '#EDF5F0',
            transform: 'translateY(-1px)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(46, 89, 68, 0.3)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: 'none',
          },
          '&:disabled': {
            borderColor: '#D1D5DB',
            color: '#9CA3AF',
            cursor: 'not-allowed',
            boxShadow: 'none',
            transform: 'none',
          },
        },
        '.btn-text': {
          backgroundColor: 'transparent',
          color: '#4292AC',
          padding: '0.5rem 1rem',
          fontWeight: '600',
          fontFamily: 'Montserrat, sans-serif',
          transition: 'all 150ms ease-in-out',
          '&:hover': {
            color: '#357D96',
            textDecoration: 'underline',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(66, 146, 172, 0.2)',
          },
          '&:disabled': {
            color: '#9CA3AF',
            cursor: 'not-allowed',
          },
        },
        '.btn-sm': {
          padding: '0.25rem 0.75rem',
          fontSize: '0.875rem',
        },
        '.btn-lg': {
          padding: '0.75rem 2rem',
          fontSize: '1.125rem',
        },

        // Card Components
        '.card': {
          backgroundColor: '#FFFFFF',
          borderRadius: '5px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        },
        '.card-hover': {
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        },
        '.card-header': {
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid #EDF5F0',
        },
        '.card-body': {
          padding: '1.5rem',
        },
        '.card-footer': {
          padding: '1.25rem 1.5rem',
          borderTop: '1px solid #EDF5F0',
        },

        // Form Components
        '.form-input': {
          display: 'block',
          width: '100%',
          padding: '0.5rem 0.75rem',
          backgroundColor: '#FFFFFF',
          color: '#2D2D2D',
          borderRadius: '0.25rem',
          border: '1px solid #D1D5DB',
          transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
          '&:focus': {
            outline: 'none',
            borderColor: '#4292AC',
            boxShadow: '0 0 0 3px rgba(66, 146, 172, 0.25)',
          },
          '&:disabled': {
            backgroundColor: '#F9FAFB',
            cursor: 'not-allowed',
          },
          '&::placeholder': {
            color: '#9CA3AF',
          },
        },
        '.form-label': {
          display: 'block',
          marginBottom: '0.5rem',
          fontWeight: '500',
          color: '#2E5944',
          fontSize: '0.875rem',
        },
        '.form-error': {
          color: '#EF4444',
          fontSize: '0.75rem',
          marginTop: '0.25rem',
        },

        // Alert Components
        '.alert': {
          padding: '1rem 1.25rem',
          borderRadius: '0.25rem',
          marginBottom: '1rem',
        },
        '.alert-info': {
          backgroundColor: '#E0F2FE',
          borderLeft: '4px solid #60A5FA',
          color: '#1E3A8A',
        },
        '.alert-success': {
          backgroundColor: '#DCFCE7',
          borderLeft: '4px solid #34D399',
          color: '#065F46',
        },
        '.alert-warning': {
          backgroundColor: '#FEF3C7',
          borderLeft: '4px solid #FBBF24',
          color: '#92400E',
        },
        '.alert-error': {
          backgroundColor: '#FEE2E2',
          borderLeft: '4px solid #F87171',
          color: '#991B1B',
        },

        // Badge Components
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.125rem 0.5rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.025em',
        },
        '.badge-primary': {
          backgroundColor: '#2E5944',
          color: '#F7F3E8',
        },
        '.badge-accent': {
          backgroundColor: '#4292AC',
          color: '#F7F3E8',
        },
        '.badge-light': {
          backgroundColor: '#EDF5F0',
          color: '#2E5944',
        },

        // Container Layouts
        '.container-site': {
          width: '100%',
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 1rem',
          '@screen sm': {
            padding: '0 1.5rem',
          },
          '@screen lg': {
            padding: '0 2rem',
          },
        },
        '.section-padding': {
          paddingTop: '3rem',
          paddingBottom: '3rem',
          '@screen md': {
            paddingTop: '5rem',
            paddingBottom: '5rem',
          },
        },
      })
    },
    function ({ addBase, theme }) {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.4xl'),
          fontWeight: '700',
          lineHeight: '1.2',
          color: theme('colors.primary.DEFAULT'),
          marginBottom: '1.5rem',
          '@screen md': {
            fontSize: theme('fontSize.5xl'),
          },
        },
        h2: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.3xl'),
          fontWeight: '600',
          lineHeight: '1.25',
          color: theme('colors.primary.DEFAULT'),
          marginBottom: '1.25rem',
          '@screen md': {
            fontSize: theme('fontSize.4xl'),
          },
        },
        h3: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.2xl'),
          fontWeight: '600',
          lineHeight: '1.3',
          color: theme('colors.primary.DEFAULT'),
          marginBottom: '1rem',
        },
        h4: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.xl'),
          fontWeight: '600',
          lineHeight: '1.4',
          color: theme('colors.primary.DEFAULT'),
          marginBottom: '0.75rem',
        },
        h5: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.lg'),
          fontWeight: '500',
          lineHeight: '1.4',
          color: theme('colors.primary.DEFAULT'),
          marginBottom: '0.75rem',
        },
        h6: {
          fontFamily: theme('fontFamily.heading'),
          fontSize: theme('fontSize.base'),
          fontWeight: '500',
          lineHeight: '1.5',
          color: theme('colors.primary.DEFAULT'),
          marginBottom: '0.5rem',
        },
        p: {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.base'),
          lineHeight: '1.6',
          color: theme('colors.neutral.text'),
          marginBottom: '1rem',
        },
        a: {
          color: theme('colors.accent.DEFAULT'),
          textDecoration: 'none',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: theme('colors.accent.dark'),
          },
        },
        'ul, ol': {
          paddingLeft: '1.5rem',
          marginBottom: '1rem',
        },
        li: {
          marginBottom: '0.5rem',
        },
      })
    },
  ],
}
