/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontSize: {
        "18xl": "12rem"
      },
      fontFamily: {
        "slackey": ["Slackey"]
      },
      backgroundImage: {
        "gone": "url('/img/gone.png')"
      },
      backgroundSize: {
        "scale": "105% 100%"
      },
      spacing: {
        "minus64": "-64px"
      },
      colors: {
        transparentWhite: "rgba(155,255,255,0.33)",
        lessTransparentWhite: "rgba(155,255,255,0.66)"
      },
    },
  },
  plugins: [],
}
