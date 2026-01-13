/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {    colors: {
        primary: '#6467f2', // replace with VetTime blue
        'primary-foreground': '#FFFFFF', // text color on primary button
        background: '#FFFFFF',
        card: '#F8FAFC',
        'card-foreground': '#111827',
        input: '#D1D5DB',
        ring: '#6467f2', // focus ring
      },},
  },
  plugins: [],
}

