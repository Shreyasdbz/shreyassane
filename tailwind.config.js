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
    extend: {},
  },
  plugins: [],
}
