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
        'light-bg': '#dde9e2',
        'dark-bg': '#373e3a',
      },
      boxShadow: {
        'neu-light': '-15px 15px 30px #ffffff, 15px -15px 30px #828985',
        'neu-light-sm': '-6px 6px 12px #ffffff, 6px -6px 12px #828985',
        'neu-light-pressed': 'inset -10px 10px 20px #ffffff, inset 10px -10px 20px #828985',
        'neu-dark': '-15px 15px 30px #4e5752, 15px -15px 30px #202522',
        'neu-dark-sm': '-6px 6px 12px #4e5752, 6px -6px 12px #202522',
        'neu-dark-pressed': 'inset -10px 10px 20px #4e5752, inset 10px -10px 20px #202522',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [],
}
