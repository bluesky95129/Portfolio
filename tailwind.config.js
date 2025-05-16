/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        neon: {
          blue: '#00f9ff',
          purple: '#b400ff',
          pink: '#ff00d4',
          green: '#00ff9f',
          yellow: '#ffdd00',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 5px rgba(0, 249, 255, 0.5), 0 0 10px rgba(0, 249, 255, 0.3)' 
          },
          '100%': { 
            textShadow: '0 0 10px rgba(0, 249, 255, 0.8), 0 0 20px rgba(0, 249, 255, 0.5), 0 0 30px rgba(0, 249, 255, 0.3)' 
          },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 5px rgba(0, 249, 255, 0.5), 0 0 10px rgba(0, 249, 255, 0.3)',
        'neon-purple': '0 0 5px rgba(180, 0, 255, 0.5), 0 0 10px rgba(180, 0, 255, 0.3)',
        'neon-pink': '0 0 5px rgba(255, 0, 212, 0.5), 0 0 10px rgba(255, 0, 212, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};