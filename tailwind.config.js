/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF5F7',
          100: '#FFE8EE',
          200: '#FFD0DC',
          300: '#FFB3C6',
          400: '#FF8FAB',
          500: '#FF6B95',
          600: '#F04E7E',
          700: '#C93A64',
          800: '#A02D4F',
          900: '#7A223D',
        },
        cream: {
          50: '#FFFEFC',
          100: '#FFF9F5',
          200: '#FFF3EB',
          300: '#FFE8D9',
        },
        gold: {
          100: '#FBF3D9',
          200: '#F5E6B8',
          300: '#ECD58A',
          400: '#DDBF5C',
          500: '#C9A838',
          600: '#AE8E2A',
          700: '#8A6F22',
        },
        ink: {
          700: '#3D2B2F',
          800: '#2A1D20',
          900: '#1A1214',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', '"Inter"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
