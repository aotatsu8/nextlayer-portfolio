/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#00008b",
        cadetblue: "#5f9ea0",
        whitesmoke: "#f5f5f5",
      },
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
