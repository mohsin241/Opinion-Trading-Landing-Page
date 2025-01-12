/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backdropBlur: {
        '60px': '60px', // Custom blur value
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, rgba(201, 201, 201, 0.8) 0%, rgba(196, 196, 196, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}

