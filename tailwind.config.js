/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#4B32FB",
          400: "#54BDC8",
          500: "#4B32FB",
          600: "#136289",
          700: "#0C4368",
          800: "#06314C",
          900: "#0E0E43",
        },
        dwhite: "#FFFFFF",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
}

