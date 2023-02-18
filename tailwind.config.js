const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: { center: true },
    screens: {
      xxxs: '320px',
      xs: '475px',
      ultra: '2520px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        electro: ['Electro'],
        sans: ['Electro', 'sans-serif'],
      },
      // https://vercel.com/design/color
      colors: {
        vercel: {
          pink: '#FF0080',
          blue: '#0070F3',
          cyan: '#50E3C2',
          orange: '#F5A623',
          violet: '#7928CA',
        },
      },
      backgroundImage: {
        degen: "url('../public/images/bg_theDegens_2.png')",
      },
    },
  },
  corePlugins: {
    fontFamily: true,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@mertasan/tailwindcss-variables'),
  ],
};
