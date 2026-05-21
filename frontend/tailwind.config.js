/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#FACC15', dark: '#EAB308' },
        dark: { DEFAULT: '#0A0A0A', card: '#1E1E1E', surface: '#121212' },
        muted: '#A0A0A0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
