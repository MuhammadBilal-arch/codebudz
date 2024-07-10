/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "red-gradient": "linear-gradient(to bottom right, #880808, #FA5F55)",
        "green-gradient": "linear-gradient(to right, #145B13, #1EB61A)",
        "green-secondary-gradient":
          "linear-gradient(to right,#1EB61A, #145B13 )",
        "multi-gradient":
          "linear-gradient(to right, #00E5BC,#32CC2E )",
        "blue-gradient": "linear-gradient(to bottom right, #012C5F, #044A9D)",
        "blue-normal-gradient":
          "linear-gradient(to bottom right, #044A9D,#012C5F)",
        "blue-secondary-gradient":
          "linear-gradient(to bottom right,#0461CD, #012C5F )",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        white: "#FFFFFF",
        black: {
          footer: "#1A1A1A",
          text: "#333333"},
        red:"red",
        transparent: "transparent",
        primary: {
          DEFAULT: "#6E2482",
          dark:"#8A226F",
          medium: "#6D56FE"
        },
        secondary: {
          DEFAULT: "#F7811F"
        },
        yellow: {
          DEFAULT: "#FCD240",
        },
        blue:{
          DEFAULT : "#32ADE6",
          light: "#12C2E9",
          medium: "#98DBDB",
          extraLight:"#F8FCFC",   

        },
        gray: {

          light: "#C8C8C8",
          medium:"#F8FCFC",   

          lightdark:'#909090',
          dark: "#7C7C7C",
          extradark: "#545454",       


        }
      },
      boxShadow: {
        'equal': '0 0 5px rgba(0, 0, 0, 0.2)', // Adjust values as needed
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        jost: ['Jost', 'sans-serif'],
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],

}