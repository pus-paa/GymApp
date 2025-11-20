/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gym-dark': '#0a0a0a',
        'gym-darker': '#050505',
        'gym-gray': '#1a1a1a',
        'gym-red': '#dc2626',
        'gym-red-dark': '#b91c1c',
        'gym-red-light': '#ef4444',
        'gym-orange': '#f97316',
        'gym-orange-dark': '#ea580c',
        'gym-orange-light': '#fb923c',
        'gym-primary': '#f97316',
      },
    },
    screens: {
      // 'xs': '300px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}