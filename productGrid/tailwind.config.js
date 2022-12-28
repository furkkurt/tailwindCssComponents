/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "580px",
      md: "796px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        "concert": ["Concert One"],
      },
      backgroundImage: {
        "pattern": "url('/img/bg.png')",
      },
      colors: {
        transHoney: "rgba(255,255,225,0.66)"
      }
    },
  },
  plugins: [],
}
