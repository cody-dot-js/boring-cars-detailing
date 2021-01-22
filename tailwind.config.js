const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { laserwave, gray } = require("./theme/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        ...colors,
        ...gray,
        ...laserwave,
        primary: laserwave.hotPink,
        branded: "#291E27",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "16vw": "16vw",
        "12vw": "12vw",
        "10vw": "10vw",
        "8vw": "8vw",
        "6vw": "6vw",
        "5vw": "5vw",
        "1em": "1em",
        "0.5em": "0.5em",
        "0.67em": "0.67em",
        "0.75em": "0.75em",
        "0.87em": "0.87em",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      visibility: ["hover", "focus"],
    },
  },
};
