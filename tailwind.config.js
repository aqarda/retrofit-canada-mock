/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rc: {
          primary: '#ea3f3f',     // Retrofit Canada Red
          secondary: '#2e3249',   // Retrofit Canada Navy / Dark Slate Blue
          tertiary: '#faa627',    // Retrofit Canada Yellow / Amber Accent
          quaternary: '#ffdbb4',  // Light Peach / Cream
          dark: '#141410',        // Text color
          light: '#e5e1e1',       // Light gray border
          bgLight: '#f9f9f9',
          navy: '#2e3249',
          red: '#ea3f3f',
          amber: '#faa627',
        },
      },
      fontFamily: {
        saira: ['Saira', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
