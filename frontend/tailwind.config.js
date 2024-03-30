/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "rgb(31, 246, 155)",
      },
    },
  },
  plugins: [],
};
