// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#C7F2A4",       // green sidebar
        mainbg: "#FFE993",        // yellow content card
        cardText: "#2B2B2B",      // dark text
        cardMuted: "#4E4E4E",     // muted text
        accent: "#F44336",        // red hover
      },
    },
  },
  plugins: [],
}