/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rancho: ['Rancho', 'cursive']
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

