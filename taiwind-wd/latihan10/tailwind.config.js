const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  // prefix: "bwa-",
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "100": "#0cdbdd",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
