/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "color-primary": "rgb(0,12,32)",
        "color-secondary": "rgb(255,95,19)",
      }
    },
    container: {
      center: true,
      padding:  {
        DEFAULT: '20px',
        md: '50px'
      }
    },
  },
  
  plugins: [],
}
