// @type {import('tailwindcss').Config}
module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        beige: "#f5f5dc",
      },
      fontFamily: {
        sans: ['"Roboto Serif"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
