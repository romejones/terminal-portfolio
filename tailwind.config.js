// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#FFF176",      // Sidebar yellow
        topbar: "#FFFDE7",       // Topbar cream
        panel: "#FFECB3",        // Content sections
        textPrimary: "#2B2B2B",  // Main headings
        textSecondary: "#4E4E4E",// Body text
        accent: "#FF5252"        // Hover / accent
      },
    },
  },
  plugins: [],
};
