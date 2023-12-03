/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        kdam: ["Kdam Thmor Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        smooch: ["Smooch Sans", "sans-serif"],
      },
      colors: {
        bodyColor: "#00040e",
        customPurple: "#08020d",
      },
      spacing: {
        halfScreen: "50vh",
        doubleScreen: "200vh",
        128: "32rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        xs: ".7rem",
      },
      lineHeight: {
        xs: "1rem",
      },
    },
  },
  plugins: [],
};
