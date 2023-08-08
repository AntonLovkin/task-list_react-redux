/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'red': '#d75454',
      'purple': '#7e5bef',
      'green': '#4caf4fa7',
      'orange': '#ff7849',
      'blue': '#3498db',
      'blue-light': '#87cefa95',
      'yellow': '#ffc82c',
      'gray': '#8492a6',
      'gray-light': '#ffffffbe',
      'gray-dark': '#273444',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }, 
  },
  plugins: [],
}