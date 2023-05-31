/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'black-neural': "url('/public/assets/background/black-neural.jpg')",
        'big-idea': "url('/public/assets/background/big-idea.jpg')",
        'black-message': "url('/public/assets/background/black-message.jpg')",
        'glass': "url('/public/assets/background/glass.jpg')",
        'main': "url('/public/assets/background/main.jpg')",
        'register': "url('/public/assets/background/register.jpg')",
      },
      keyframes:{
        fadeIn: {
        '0%, 50%': { opacity: '0' },
        '75%, 100%': { opacity: '1' },
      },
    },
  },
  plugins: [],
}}