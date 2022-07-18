const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              fontWeight:'400',
              color: theme('colors.cyan.500'),
              maxWidth:'20rem',
              '&:hover': {
                color: theme('colors.cyan.600'),
              },
              code: { color: theme('colors.cyan.400') },
            },
            h1: {
              fontWeight: '500',
              fontSize: theme('fontSize.3xl'),
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '500',
              fontSize: theme('fontSize.2xl'),
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '500',
              fontSize: theme('fontSize.xl'),
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              fontWeight: '400',
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.gray.50'),
            },
            code: {
              color: "#d400ff",
              backgroundColor: theme('colors.white'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            details: {
              backgroundColor: theme('colors.white'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { 
              fontWeight:'400',
              color: theme('colors.gray.900')
            },
            blockquote: {
              fontWeight:'400',
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
            'th': {
              fontWeight:'400'
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            p: {
              color: theme('colors.gray.400'),
            },
            a: {
              color: theme('colors.gray.400'),
              '&:hover': {
                color: theme('colors.gray.300'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '500',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.300'),
            },
            h2: {
              fontWeight: '500',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.300'),
            },
            h3: {
              fontWeight: '500',
              color: theme('colors.gray.300'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.300'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: "#d400ff",
              backgroundColor: theme('colors.gray.800'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'li':{ color: theme('colors.gray.400')},
            'span':{ color: theme('colors.gray.300')},
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
