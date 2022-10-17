module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      // padding: "1rem",
    },
    deliciousHamburgers: {
      size: "30px", // must be in px.
      color: "#000",
      colorLight: "#fff8f4",
      padding: "4px", // must be in px.
      animationSpeed: 1,
    },
    extend: {
      colors: {},
      fontFamily: {
        // sans: ["Vazir"],
        // Poppins: ["Poppins", "sans - serif"],
        dana: ["Dana"],
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
      },
      screens: {
        "2xs": "375px",
        xs: "425px",
        md: "768px",
        lg: "991px",
        xl: "1024px",
        "2xl": "1333px",
        "3xl": "1440px",
      },
      corePlugins: {
        aspectRatio: false,
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-delicious-hamburgers"), require("@tailwindcss/line-clamp")],
};
