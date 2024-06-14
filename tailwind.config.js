/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "mani-primary": "yellow",
      "mani-background": "blue",
      "mani-text": "red",
    },
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography')],
}