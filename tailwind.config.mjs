/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3B8A',
        secondary: '#FF3333',
        accent: '#FF6633',
      },
    },
  },
  plugins: [],
}