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
    fontSize: {
      "5xl": "2rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "16xl": "9rem",
      "20xl": "13rem",
      "32xl": "18rem"
    },
    extend: {
      colors: {
        metal: "#99aaaa",
        darkerMetal: "#595a5a",
        paper: "#fec",
      },
      fontFamily: {
        concert: ["Concert One"]
      },
      spacing: {
        31: "-4rem",
        22: "4.5rem"
      }
    },
  },
  plugins: [],
}
