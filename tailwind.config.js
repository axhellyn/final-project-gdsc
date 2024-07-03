/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
      },
      colors:{
        'pink':'#F1BCFF',
        'darkPink': '#E697FA',
        'purple':'#BBB6FF',
        'darkPurple':'#9188FF',
        'gray':'#626262'
      }
    },
  },
  plugins: [],
};
