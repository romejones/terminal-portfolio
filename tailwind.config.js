// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#FFEE58",      // pale yellow
        accent: "#F44336",       // strong red accent for hover
      },
    },
  },
  plugins: [],
};