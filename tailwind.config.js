/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        blush: "#f54f92",
        rose: "#f9d7e3",
        ink: "#121826",
        cream: "#f8f3f5"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 50px rgba(18, 24, 38, 0.08)"
      },
      backgroundImage: {
        "soft-grid": "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
