/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors:{
        "primary-100":"#283388",
        "primary-300":"#C74BD2",
        "primary-500":"#1F1F1F",
        "gradiend-100":"#3C1DFF",
        "gradiend-300": "#14C9C9",
      },
      content:{
        test100: "url('.build/img/a1.png')",
        test300: "url('.build/img/a2.png')",
      }
    },
  },
  plugins: [],
}

