/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {

        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        // NoeDisplay: ["sans-serif"]
      },
      colors: {
        primaryMain: "#3b82f6",
        secondary: "#FF7324",
        lightTextMain: "#000",
        darkTextMain: "#fff",
        darkTextPrimary: "#BDBDBD",
        lightBgMain: "#fff",
        darkBgMain: "#222222",
        darkBgPrimary: "#323232",
        darkBorderAll: "#2D3332",
      },
      boxShadow: {},
      backgroundImage: {},
      screens: {},
    },
  },
  plugins: [],
};
