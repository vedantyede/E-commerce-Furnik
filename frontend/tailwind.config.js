/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      roboto:["Roboto", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
