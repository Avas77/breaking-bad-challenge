/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#282C33",
      primary: "#036527",
      gray: "#ABB2BF",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
