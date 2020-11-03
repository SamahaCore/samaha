module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat'],
        'lato': ['Lato'],
        'pop': ['Poppins'],
        'raleway': ['Raleway']
      },
      backgroundColor: theme => ({
        'myGray': '#f2f2f2',
        'samBlue': '#48BEFF'
      }),
      backgroundImage: theme => ({
        'middle-pattern': "url('/src/assets/middleBannerBg-min.jpg')",
      })
    },
  },
  variants: {},
  plugins: [],
}
