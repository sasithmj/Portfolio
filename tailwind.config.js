/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': {
          500: '#FF6B6B',
          600: '#FF5252',
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        blink: 'blink 1s step-start infinite',
        blinkSlow: 'blink 4s infinite',
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        blinkSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.75' },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
    },
  },
  plugins: [],
}

