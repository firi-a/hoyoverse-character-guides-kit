/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        'fiveStarTop': '#925c59',
        'fiveStarBottom': '#d3a55f',
        'fourStarTop': '#4a4a6f',
        'fourStarBottom': '#9459d0',
        'mainBG': '#232323',
        'mainAccent': '#c07320',
        'subBG': '#363636'
      }
    },
  },

  plugins: [],
};

module.exports = config;
