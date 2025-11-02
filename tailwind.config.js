/** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}',
     ],
     theme: {
       extend: {
         colors: {
           'navy': {
             50: '#f0f4f8',
             700: '#1e3a8a',
             800: '#1e40af',
             900: '#1e293b',
           },
         },
       },
     },
     plugins: [],
   }