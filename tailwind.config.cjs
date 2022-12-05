/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow: ['Barlow Semi Condensed ', 'sans-serif']
      }
    },
  },
  plugins: [],
}
