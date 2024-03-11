/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        'main' : "340px"
      },
      maxWidth : {
        'main' : "640px"
      },
      colors : {
        'main' : "#87A0E2",
        'h2' : "#4A47ED"
      },
      top : {
        '200%' : "200%"
      }
    },
  },
  plugins: [],
}

