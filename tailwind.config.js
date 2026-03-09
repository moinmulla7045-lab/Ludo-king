/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ludoGreen: '#32A852',
        ludoRed: '#FF5C5C',
        ludoYellow: '#FFD93D',
        ludoBlue: '#3DB2FF',
      },
    },
  },
  plugins: [],
};
