/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      primary: '#443333',
      secondary: '#EEA849',
      contrast: '#FFFFFF',
      error: '#FF5B14',
      success: '#FF5B14',
    },
  },
  plugins: [],
};
