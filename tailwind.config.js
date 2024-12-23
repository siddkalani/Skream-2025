/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'abc-whyte': ['ABC Whyte', 'sans-serif'],
        'kaftan' : ['Kaftan Serif', 'serif'],
        'lakeshore' : ['Lakeshore', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

