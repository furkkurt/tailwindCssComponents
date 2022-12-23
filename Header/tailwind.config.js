/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: " #f6866a",
        brightRedLight: " #fdece7",
        darkBlue: "#242d52",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans"]
      },
      rotate: {
        270: "-90deg"
      }
    },
  },
  plugins: [],
}
