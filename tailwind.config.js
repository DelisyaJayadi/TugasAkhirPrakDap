/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    margin: ["hover"],
    margin: ["responsive", "hover"],
  },
  content: ["./src/**/*.{html,js}", "index.html", "index.html"],
  theme: {
    extend: {
      colors: {
        secondary: "pink",
      },
    },
  },
  plugins: [],
};
