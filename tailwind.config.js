/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 255, 255, 0.30)",
        fontBlack: "#081323",
        fontGray: "#828282",
        overlay: "rgba(0, 0, 0, 0.30)",
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};


