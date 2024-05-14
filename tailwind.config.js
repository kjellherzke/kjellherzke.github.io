/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /*   colors: {
      primary: "#e7e7e7",
      secondary: "#606060",
      slate: "#262626",
      bg: "#0e0e0e",
    }, */

    extend: {
      colors: {
        primary: "#e7e7e7",
        secondary: "#262626",
        slate: "#131313",
        bg: "#0e0e0e",
      },
    },
  },
  plugins: [],
};
