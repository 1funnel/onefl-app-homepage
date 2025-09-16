// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FDF0EB',
          200: '#FDCFBE',
          300: '#FBAE93',
          400: '#F98C69',
          500: '#F96A3D', // from primary/500
          600: '#EA572B',
          700: '#C84219',
          800: '#A5320B',
          900: '#842001',
        },
        secondary: {
          100: '#EEF7FF',
          500: '#8AA4EF',
          900: '#213466',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #0E1550 0%, #06193C 100%)',
      },
    },
  },
};
