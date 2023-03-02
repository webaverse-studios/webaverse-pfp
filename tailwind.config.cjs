const withWT = require('@webaverse-studios/uikit').withWT;
const plugin = require('tailwindcss/plugin');

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
        'pulse-low': 'pulse_low 3s linear infinite',
        'pulse-slow': 'pulse 6s linear infinite',
      },
      backgroundImage: {
        degen: "url('../public/images/bg/bg_degen.jpg')",
        'mint-modal': "url('../public/images/bg/bg_modal_frame.png')",
      },
      backgroundColor: "#001c2b",
      // https://vercel.com/design/color
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      keyframes: {
        pulse: {
          '50%': {
            opacity: '75%',
          },
        },
        pulse_low: {
          '50%': {
            opacity: '50%',
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
  plugins: [
    plugin(function ({ addUtilities }) {
      const directions = {
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      };

      const steps = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%'];

      const utilities = Object.entries(directions).reduce((result, [shorthand, direction]) => {
        const variants = steps.map((step) => {
          const className = `.gradient-mask-${shorthand}-${step}`;
          return {
            [className]: {
              maskImage: `linear-gradient(${direction}, rgba(0, 0, 0, 1.0) ${step}, transparent 100%)`,
            },
          };
        });

        const stepClasses = Object.assign(...variants);
        return {
          ...result,
          ...stepClasses,
        };
      }, {});

      addUtilities(utilities);
    }),
    require('@tailwindcss/typography'),
    require('@mertasan/tailwindcss-variables'),
  ],
});
