/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xxxsm: "240px",
      xxsm: "360px",
      xsm: "480px",
      sm: "720px"
    },
    extend: {
      colors: {
        veryDarkBlue: "#141519",
        lessDarkBlue: "#222933",
        grayishBlue: "#262f38",
        newGray: "#7c8898",
        darkerThanLessBlue: "#171e28",
        brightOrange: "#fc7613",
        lightGray: "hsl(0, 0%, 64%)"
      },
      fontFamily:{
        kumbh: ["Kumbh Sans"]
      }
    },
  },
  plugins: [],
}
