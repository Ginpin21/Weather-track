/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      maxWidth:{
        'half':'50%'
    },
      minWidth:{
        'half':'50%'
    },
      width:{
        'half':'50%'
    }
  },
  },
  plugins: [],
}
