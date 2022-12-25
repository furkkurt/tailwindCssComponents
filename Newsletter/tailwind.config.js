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
        veryDarkBlue: "#012",
        grayishBlue: "#256",
        blueishWhite: "#BDF",
        dimmerGrayishWhite: "#79B",
        transparent: "rgba(0,0,0,0.1)"
      },
      fontFamily: {
        "kumbh": ["Kumbh Sans"]
      },
      spacing: {
      }
    },
  },
  plugins: [],
}
