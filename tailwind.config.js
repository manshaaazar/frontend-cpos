module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Roboto,Open Sans"],
        detail: ["Montserrat,Open Sans"],
      },

      colors: {
        ocean: {
          light: "#37616d",
          DEFAULT: "#053742",
          dark: "#00121b",
        },
      },
      boxShadow: {
        "inner-ocean-sm": "inset 0 1px 2px 0 #053742",
        "inner-ocean-md": "inset 0 4px 6px -1px #053742",
        "inner-ocean-lg": "inset 0 10px 15px -3px  #053742",
        "ocean-sm": "0 1px 2px 0 #053742",
        "ocean-md": "0 4px 6px -1px #053742",
        "ocean-lg": "0 10px 15px -3px  #053742",
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/5": "75%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/custom-forms"),
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
