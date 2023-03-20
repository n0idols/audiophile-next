/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-man)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero.jpg')",
      },
      colors: {
        primary: "#D87D4A",
        primaryHover: "#fbaf85",
        seconday: {
          one: "#101010",
          two: "#F1F1F1",
          three: "#FAFAFA",
        },
        grey: "#d9d9d9",

        // black: {
        //   800: "#151515",
        //   900: "#242424",
        // },
      },
    },
  },
  plugins: [],
};
