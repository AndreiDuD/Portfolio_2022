/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        navbar: "#11322A",
        green: "#166534",
        blue: "#279EFF",
        red: "#DC4492",
        yellow: "#f4f341",
        grey: "#ededed",
        footer: "#11322A",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: () => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #55d230 7.21%, #00B5EE 45.05%, #FFBA00 78.07%)",

        "gradient-gold": "linear-gradient(90deg, #FFDEA8 0%, #FEC84E 100%)",

        "hover-gradient-gold": "linear-gradient(90deg, #DAA775 0%, #C68E3A 100%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
