/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Forest palette
        forest: {
          50: '#e8f5ee',
          100: '#c4e4d2',
          200: '#8fc9a8',
          300: '#5a9e78',
          400: '#3d7a5a',
          500: '#2d5e42',
          600: '#254d38',
          700: '#1a3a2a',
          800: '#0f2818',
          900: '#0a1f12',
        },
        // Amber palette
        amber: {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fbbf24',
          300: '#f59e0b',
          400: '#d97706',
          500: '#b45309',
          600: '#92400e',
        },
        // Cream palette
        cream: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#e8e0d4',
          300: '#d4c9b8',
          400: '#b8a996',
          500: '#9c8d7a',
          600: '#7a6e5e',
          700: '#5c5348',
          800: '#3d3730',
          900: '#1f1c18',
        },
        // Legacy aliases for backward compat
        bg: '#0a1f12',
        surface: '#0f2818',
        'surface-light': '#1a3a2a',
        'surface-elevated': '#1a3a2a',
        border: 'rgba(212, 201, 184, 0.12)',
        'border-light': 'rgba(212, 201, 184, 0.2)',
        primary: '#f59e0b',
        'primary-dark': '#d97706',
        'primary-glow': 'rgba(245, 158, 11, 0.3)',
        secondary: '#8fc9a8',
        'secondary-glow': 'rgba(143, 201, 168, 0.3)',
        accent: '#fbbf24',
        'accent-glow': 'rgba(251, 191, 36, 0.3)',
        text: '#f5f0e8',
        'text-muted': '#b8a996',
        'text-dim': '#9c8d7a',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.4)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(-5px, -25px)' },
          '75%': { transform: 'translate(-15px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'slide-up': {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
