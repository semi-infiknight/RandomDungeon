/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'match1': "url('./assets/images/match1.svg')",
        'match2': "url('./assets/images/match2.svg')",
        'match3': "url('./assets/images/match3.svg')",
        'match4': "url('./assets/images/match4.svg')",
        'game': "url('./assets/images/game.svg')",
        'leftarrow': "url('./assets/images/leftarrow.svg')",
        'rightarrow': "url('./assets/images/rightarrow.svg')",
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
        'p': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}