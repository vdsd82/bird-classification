module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#E5F4FE',
        'secondary': '#FFD700',
      },
      textColor: {
        'primary': '#1D3B4F',
        'secondary': '#FF6F00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}