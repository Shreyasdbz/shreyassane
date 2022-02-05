const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // 'media' or 'class'
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
    },
  },
  plugins: [],
}
