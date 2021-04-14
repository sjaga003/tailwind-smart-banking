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
          100: 'hsl(0, 0%, 98%)',
          200: 'hsl(220, 16%, 96%)',
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
