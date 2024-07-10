// @type {import('tailwindcss').Config}
module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        bone: "#F7FBF9",
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
