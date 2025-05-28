
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        majky: {
          50: "#effefc",
          100: "#c7fff6",
          200: "#90ffed",
          300: "#51f7e3",
          400: "#1de4d3",
          500: "#04c8ba",
          600: "#00b4ab",
          700: "#05807b",
          800: "#0a6563",
          900: "#0d5452",
          950: "#003233",
        },
        light: {
          background: "#ffffff", 
          text: "#000000", 
        },
        dark: {
          background: "rgb(15 23 42 / 1)", 
          text: "rgb(29 228 211 / 1)", 
        },
      },
      // screens: {
      //   xs: "360px",
      //   lg: "935px",
      // },
    },
  },
  plugins: [],
  darkMode: 'class'
};

