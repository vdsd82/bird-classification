module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F3F4F6',
        secondary: '#3B82F6',
      },
      textColor: {
        primary: '#1F2937',
        secondary: '#FFFFFF',
      },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.primary'),
          a: {
            color: theme('colors.secondary'),
            '&:hover': {
              color: theme('colors.secondary'),
            },
          },
        },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
