/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FCFBF9', // The exact off-white background
        coral: {
          50: '#FDF2F0',  // Very light peach for backgrounds
          100: '#FADCD9', // Active sidebar peach
          800: '#B85C53', // Dark text for badges
          900: '#994138', // Deep reddish-brown for accents
        }
      },
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}