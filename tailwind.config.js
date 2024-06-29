/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      animation: {
        'impulse': 'impulsing 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
      },
      keyframes: {
        impulsing: {
          '75%, 100%': { transform: 'scale(1.3)', opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}

