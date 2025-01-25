/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#7c7d91",
          400: "#99a0b7",
        },
      },
    },
  },
  plugins: [],
};
