const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media', // 'media' or 'class'
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.emerald,
      tertiary: colors.rose,
      slate: colors.slate,
    },
    extend: {
      spacing: {
        104: '28rem',
        128: '32rem',
      },
      maxWidth: {
        '3xs': '5rem',
        '2xs': '10rem',
      },
      maxHeight:  {
        '3xs': '5rem',
        '2xs': '10rem',
      },
    },
  },
  plugins: [],
}
