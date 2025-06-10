/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',     
    './public/**/*.html',                 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5bae84',
        secondary: '#12221a',
      },
      fontFamily: {
        sans: ['Futuru', 'sans-serif'],
      },
    },
  },
  plugins: [],
}