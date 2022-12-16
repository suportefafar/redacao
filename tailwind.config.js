/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
    color: {
      NAVBAR_BACKGROUND: "rgba(255,255,255,0.75)",
      PRIMARY_BLUE: "#4D8EF5",
      PRIMARY_GREEN: "#0BA05B",
      PRIMARY_BLACK: "#5C5C5C",
      PRIMARY_RED: "#DF5447",
    },
  },
  plugins: [],
};
