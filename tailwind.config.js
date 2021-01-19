module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      visibility: ["hover", "focus"],
    },
  },
};
