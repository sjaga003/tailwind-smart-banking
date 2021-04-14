module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        publicSans: ['Public Sans'],
      },
      colors: {
        primary: ['hsl(233, 26%, 24%)'],
        secondary: {
          100: '#F3F3F3',
          200: '#F4F5F7',
          300: 'hsl(233, 8%, 62%)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
