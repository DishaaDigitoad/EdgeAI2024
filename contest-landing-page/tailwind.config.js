// @type {import('tailwindcss').Config}
module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        bone: "#F7FBF9",
        digiGreen: "#5ABB47",
        darkBlue: "#1B263B",
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
