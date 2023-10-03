/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#096A2E",
        accentDark: "#ffdb4d",
        blue: "#279EFF",
        gray: "#747474",
      },
    },
  },
  plugins: [],
};
