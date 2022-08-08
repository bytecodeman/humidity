/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd", //"#007bff",
        primaryhover: "#0b5ed7",
        secondary: "#6c757d",
        secondaryhover: "#5c636a",
      },
    },
    plugins: [],
  },
};
