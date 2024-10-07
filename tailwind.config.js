/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "screen1":"550px",
      "screen2":"1000px"
    },
    extend: {},
  },
  plugins: [],
}

