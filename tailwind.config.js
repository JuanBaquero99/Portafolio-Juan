module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arima': ['Arima Madurai', 'serif'],
        'chivo': ['Chivo', 'sans-serif'],
        'overpass': ['Overpass', 'sans-serif'],
        'tiny5': ['Tiny5', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        'olive': '#3C763D', 
        'brown-dark': '#654321',
        'pastel-blue': '#A2D2FF',
      }
    },
  },
  plugins: [],
}