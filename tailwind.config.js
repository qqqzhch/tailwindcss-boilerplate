/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-dianne': {
          50: '#f2fbf9',
          100: '#d2f5f0',
          200: '#a5eae0',
          300: '#6fd9cd',
          400: '#42bfb4',
          500: '#28a49b',
          600: '#1e837e',
          700: '#1c6966',
          800: '#1b5454',
          900: '#194342'
        }
      }
    },
    fontFamily: {
      Poppins: ['Roboto', 'sans-serif']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
      
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
     
      }
    }
  },
  plugins: []
}
