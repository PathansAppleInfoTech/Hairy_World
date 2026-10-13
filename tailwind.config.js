/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0F1113', soft: '#1A1D20', mute: '#2A2E33' },
        gold: {
          50: '#FBF6E6', 100: '#F6EBC4', 200: '#F0DE95', 300: '#E6CB62',
          400: '#D4AF37', 500: '#B8922A', 600: '#9A7620', 700: '#7A5C19',
        },
        ivory: { DEFAULT: '#FBF9F4', deep: '#F3EEE3' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 20px 50px -20px rgba(154,118,32,.45)',
        lift: '0 30px 60px -30px rgba(15,17,19,.35)',
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        ping2: { '0%': { transform: 'scale(1)', opacity: '.6' }, '100%': { transform: 'scale(1.9)', opacity: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        dash: { to: { strokeDashoffset: '0' } },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        ping2: 'ping2 2.4s cubic-bezier(0,0,.2,1) infinite',
        marquee: 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};
