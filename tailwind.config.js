const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700
    },
    extend: {
      colors: {
        primary: "#fdba31",
        primaryLight: "#ebf8f1",
        primaryText: "rgba(0, 0, 0, 0.85)",
        primaryBg: "#F0F2F5"
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
      }
    },
    keyframes: {
      dashedStroke: {
        "0%": { strokeDashoffset: 0 },
        "100%": { strokeDashoffset: 10000 }
      }
    },
    animation: {
      dashedStroke: "dashedStroke 300s infinite linear"
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwind-scrollbar")({ nocompatible: true })
  ]
};
