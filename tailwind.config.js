/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New calming color palette
        primary: {
          50: '#f8f6ff',
          100: '#f0ebff',
          200: '#e4d9ff',
          300: '#d1bbff',
          400: '#b794ff',
          500: '#9d6bff',
          600: '#8b47ff',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#fbf2e0',
          300: '#f7e6c7',
          400: '#f1d4a3',
          500: '#e9bc7b',
          600: '#dfa355',
          700: '#c8873d',
          800: '#a36d32',
          900: '#85592b',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d2c7',
          300: '#a3b5a3',
          400: '#7a927a',
          500: '#5a735a',
          600: '#475a47',
          700: '#3a4a3a',
          800: '#2f3d2f',
          900: '#283328',
        }
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};