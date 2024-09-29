/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      // Colors used in the project
      colors: {
        primary: "#0F90F8",
        background: "#040B1C",
        cardBg: "#061840",
        white: "#FBFBFB",

        navBg: "#0A214E",

        overlayBg: "rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
