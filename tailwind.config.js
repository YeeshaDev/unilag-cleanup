/** @type {import('tailwindcss').Config}*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xsm:  {'max': '330px'},
      },
      colors:{
        menu:'#1D1918B2',
        orange:'#F2BF00',
        brown:'#1D1818'
      }
    },
  },
  plugins: [],
} 
