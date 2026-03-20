/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primaries
        'brand-dark':     '#05002F',   // dark navy background
        'brand-primary':  '#3924E0',   // primary blue/purple CTA

        // Category accents
        food: {
          DEFAULT: '#A136FF',          // Food vertical
          card:    '#A136FF',
        },
        grocery: {
          DEFAULT: '#009A49',          // Grocery vertical
          card:    '#009A49',
        },
        pharmacy: {
          DEFAULT: '#316AFF',          // Pharmacy vertical
          card:    '#316AFF',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3924E0 0%, #A136FF 100%)',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
