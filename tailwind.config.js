module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg': "url('blob-haikei.svg')",
      }
    },

    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'volkhov': ['Volkhov', 'sans-serif']


    },



  },
  variants: {
    extend: {},
  },
  plugins: [],
}
