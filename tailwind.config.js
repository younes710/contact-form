/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
  extend: {
   fontFamily: {
    'en-karla': ['en-roboto', 'Arial', 'sans-serif'].join(','),
   },
  },
 },
 plugins: [],
};
