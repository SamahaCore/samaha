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
        'samBlue': '#48BEFF',
        'turq': '#36D1DC',
        'bleu': '#5B86E5'
      }),
      backgroundImage: theme => ({
        'middle-pattern': "url('/src/assets/yer.jpg')",
      }),
      textColor: theme => ({
        'myGray': '#f2f2f2',
        'samBlue': '#48BEFF'
      }),
      gradientColorStops: theme => ({
        'turq': '#36D1DC',
        'bleu': '#5B86E5'
      }),
    },
  },
  variants: {},
  plugins: [],
}
