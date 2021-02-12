const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { laserwave, gray } = require("./theme/colors");

module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
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
      height: {
        128: "29rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.50"),
            a: {
              color: theme("colors.pink.300"),
              "&:hover": {
                color: theme("colors.pink.500"),
              },
            },
            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },
            strong: {
              color: theme("colors.gray.500"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
            },
            blockquote: {
              color: theme("colors.gray.500"),
            },
            thead: {
              color: theme("colors.gray.500"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      visibility: ["hover", "focus"],
      borderRadius: ["hover", "focus"],
      zIndex: ["hover", "active"],
      cursor: ["hover", "focus", "disabled"],
    },
  },
};
