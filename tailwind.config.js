/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enabling dark mode based on class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'light-bg': '#FFFFFF',
        'dark-bg': '#000000',
      },
      boxShadow: {
        'neu-light': '-5px -5px 10px rgba(240,240,240,1), 5px 5px 10px rgba(200,200,200,0.5)',
        'neu-light-sm': '-3px -3px 6px rgba(240,240,240,1), 3px 3px 6px rgba(200,200,200,0.5)',
        'neu-light-pressed': 'inset -5px -5px 10px rgba(240,240,240,1), inset 5px 5px 10px rgba(200,200,200,0.5)',
        'neu-dark': '-8px -8px 16px rgba(255, 255, 255, 0.03), 8px 8px 16px rgba(0, 0, 0, 0.3)',
        'neu-dark-sm': '-4px -4px 8px rgba(255, 255, 255, 0.03), 4px 4px 8px rgba(0, 0, 0, 0.3)',
        'neu-dark-pressed': 'inset -8px -8px 16px rgba(255, 255, 255, 0.03), inset 8px 8px 16px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
