/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        orange: "#ff9f0d",
        "drak-grey": "#484848",
        "light-grey": "#717171",
        light: "#f1f6f5",
        "light-100": "#f7f7f7",
        brown: "#473c33",
        red: "#850000",
      }
    },
  },
  plugins: [],
}