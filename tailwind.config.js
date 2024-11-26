/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',      // Path to your HTML files
    './src/**/*.{js,ts,jsx,tsx}', // Path to your JS/TS files
    './components/**/*.{js,ts,jsx,tsx}', // Path to your components
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

