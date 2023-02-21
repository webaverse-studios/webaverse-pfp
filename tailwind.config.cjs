const withWT = require('@webaverse-studios/uikit').withWT;

/** @type {import('tailwindcss').Config} */
module.exports = withWT({
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './node_modules/@webaverse-studios/uikit/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s linear infinite',
      },
      backgroundImage: {
        degen: "url('../public/images/bg/bg_degen.png')",
        'mint-modal': "url('../public/images/bg/bg_modal_frame.png')",
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
      keyframes: {
        pulse: {
          '50%': {
            opacity: '75%',
          },
        },
      },
      screens: {
        '3xl': '1920px',
        ultra: '2520px',
      },
      fontFamily: {
        body: ['TT-Squares', 'sans-serif'],
      },
    },
  },
  corePlugins: { fontFamily: true },
  plugins: [require('@tailwindcss/typography'), require('@mertasan/tailwindcss-variables')],
});
