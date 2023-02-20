const withWT = require('@webaverse-studios/uikit').withWT;
const defaultTheme = require('tailwindcss/defaultTheme');

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
    screens: {
      ultra: '2520px',
      ...defaultTheme.screens,
    },
    extend: {
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
        degen: "url('../public/images/bg/bg_degen.png')",
        'mint-modal': "url('../public/images/bg/bg_modal_frame.png')",
      },
      keyframes: {
        pulse: {
          '50%': {
            opacity: '40%',
          },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s linear infinite',
      },
    },
  },
  corePlugins: { fontFamily: true },
  plugins: [
    require('@tailwindcss/typography'),
    require('@mertasan/tailwindcss-variables'),
  ],
});
