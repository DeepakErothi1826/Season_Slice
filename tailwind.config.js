/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE6D6',
          light: '#FAF8F4',
        },
        coffee: {
          DEFAULT: '#3C2415',
          light: '#6B4226',
          medium: '#8B5E3C',
          pale: '#A67B5B',
        },
        gold: {
          DEFAULT: '#C8A96E',
          light: '#E8D5A8',
          dark: '#A68B4B',
        },
        rose: {
          DEFAULT: '#D4918E',
          light: '#E8B4B1',
        },
        matcha: {
          DEFAULT: '#A8B88C',
          light: '#C4D1A8',
        },
        berry: {
          DEFAULT: '#7B6B8A',
          light: '#A599B0',
        },
        caramel: {
          DEFAULT: '#C89B5E',
          light: '#E0BF8A',
        },
        seasonal: {
          spring: {
            DEFAULT: '#10B981',
            light: '#6EE7B7',
            dark: '#047857',
          },
          summer: {
            DEFAULT: '#F59E0B',
            light: '#FCD34D',
            dark: '#D97706',
          },
          autumn: {
            DEFAULT: '#EA580C',
            light: '#FB923C',
            dark: '#C2410C',
          },
          winter: {
            DEFAULT: '#64748B',
            light: '#94A3B8',
            dark: '#475569',
          },
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
