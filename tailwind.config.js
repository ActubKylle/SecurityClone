/** @type {import('tailwindcss').Config} */
export default {
    prefix: 'mkt-',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gikuha gikan sa imong gi-inspect nga variables (--whl-color_blue-dark)
        'securitize-dark': '#030B1E',
        'securitize-blue': '#00173d',
        'securitize-light-blue': '#9abee7',
      },
      fontFamily: {
        // Gikuha gikan sa: font-family: Geist, PP Editorial New, sans-serif;
        sans: ['Geist', 'Inter', 'sans-serif'],
        serif: ['"PP Editorial New"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}