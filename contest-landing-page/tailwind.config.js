// @type {import('tailwindcss').Config}
module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        bone: "#F7FBF9",
        digiGreen: "#5ABB47",
        darkBlue: "#141D2A",
        "dark-green": "#004d00",
      },
      fontFamily: {
        sans: ["Open Sans", "Libre Franklin", '"Roboto Serif"', "sans-serif"],
      },
      screens: {
        "lg-custom": "1080px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
