/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        card: "repeat(auto-fill, minmax(150px, 1fr))",
      },
    },
  },
  plugins: [],
};
