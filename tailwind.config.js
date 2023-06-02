/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      backgroundImage: {
        'black-neural': "url('/public/assets/background/black-neural.jpg')",
        'big-idea': "url('/public/assets/background/big-idea.jpg')",
        'black-message': "url('/public/assets/background/black-message.jpg')",
        'glass': "url('/public/assets/background/glass.jpg')",
        'main': "url('/public/assets/background/main.jpg')",
        'register': "url('/public/assets/background/register.jpg')",
        'dashboard': "url('/public/assets/background/dashboard.jpg')",
      },
      keyframes:{
        fade: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      navLeft: {
        '0%': { left: '-15%' },
        '100%': { left: '0%' }
      }
    },
  },
  plugins: [],
}}