/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        condensed: ['Oswald', 'sans-serif'],
        logo: ['Bebas Neue', 'cursive'],
      },
      colors: {
        'logo-red': '#EF4444',
      },
    },
  },
  plugins: [],
}