const width = {
  'sm-icon': '50px',
  'md-icon': '75px',
  'lg-icon': '100px',
  '1/6': '15%',
  '1/4': '25%',
  '1/3': '33.3%',
  '1/2': '50%',
  '4/6': '66.6%',
  '3/4': '75%',
  '5/6': '83.3%',
}

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width,
      maxWidth: { ...width },
      screens: {
        xs: '418px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        vblue: '#2c3e50',
      },
    },
  },
}
