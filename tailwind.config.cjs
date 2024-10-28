/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        grayDark: '#2E2E2E',
        grayLight: '#4F4F4F',
        orangeDark: '#D35400',
        orange: '#E67E22',
        orangeHover: '#C0392B',
        white: '#FFFFFF'
      }
    }
  },
  plugins: [],
};
