const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'soft-blue': 'hsl(215, 51%, 70%)',
            cyan: 'hsl(178, 100%, 50%)',
          },
          neutral: {
            'dark-blue-main-bg': 'hsl(217, 54%, 11%)',
            'dark-blue-card-bg': 'hsl(216, 50%, 16%)',
            'dark-blue-line-bg': 'hsl(215, 32%, 27%)',
          },
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },

  plugins: [],
}

module.exports = config
