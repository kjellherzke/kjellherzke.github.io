/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Space Grotesk",
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#8A8A8A",
        background: "#0E0E0E",
      },
    },
  },
  plugins: [],
};
