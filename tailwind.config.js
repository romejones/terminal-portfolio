/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Geist Sans"', 'sans-serif'],
      },
      colors: {
        background: '#F7F5E6',    // light beige (replacing old #f5f5f5)
        sidebar: '#C7E8D4',       // mint green for sidebar
        yellowAccent: '#FFEE58',  // yellow blocks (Professional info)
        pinkAccent: '#F7D1FF',    // pink highlights
        black: '#000000',         // black for borders and text outlines
        foreground: '#171717',    // main text color
        accent: '#FF5F57',        // keep your existing accent if you like
      },
    },
  },
  plugins: [],
}