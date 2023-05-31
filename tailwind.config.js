/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'black-neural': "url('/public/assets/background/black-neural.jpg')",
        'glass': "url('/public/assets/background/glass.jpg')"
      }
    },
  },
  plugins: [],
}

