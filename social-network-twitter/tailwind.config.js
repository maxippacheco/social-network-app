const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm': '490px',
      'md': '780px', 
      'xl': '1280px',
    }
  },
  plugins: [
      plugin(function({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',

            /* Firefox */
            'scrollbar-width': 'none',

            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }

        })
      })
  ],
}
