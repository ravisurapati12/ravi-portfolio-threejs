/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','Inter','Helvetica','Arial'],
      },
      colors: {
        brand: {
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,58,237,0.25)"
      }
    },
  },
  plugins: [],
}
