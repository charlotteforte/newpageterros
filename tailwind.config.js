/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#58739c',
          focus: '#4a5f7f', // a darker shade for hover/focus
          light: '#f0f4f9', // a very light shade for backgrounds
        },
        secondary: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
        accent: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
        },
        background: '#FFFFFF',
        foreground: '#1F2937',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      borderRadius: {
        'lg': '0.75rem',
        'xl': '1rem',
      },
    },
  },
  plugins: [require("daisyui")],
}
