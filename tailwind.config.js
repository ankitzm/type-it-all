module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'bangers': ['bangers', 'system-ui'],
    },
    extend: {
      width: {
        '35vw': '35vw',
        '40vw': '40vw',
        '80vw': '80vw'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
