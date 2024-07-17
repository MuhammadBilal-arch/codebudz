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
        "yellow-gradient": "linear-gradient(to right,  #F7811F,#6E2482)",
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
          medium: "#6D56FE",
        },
        pink:{
          medium:'#C11574'
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
          indigo: '#3538CD'

        },
        gray: {

          light: "#C8C8C8",
          medium:"#F8FCFC",   

          lightdark:'#909090',
          dark: "#7C7C7C",
          extradark: "#545454",   
          extradark2: "#2E353D",    
          bluegray:"#CBD5E1"


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
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        move: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateX(-2%)' },
          '50%': { transform: 'translateY(-2%)' },
          '70%': { transform: 'translateX(-2%)' },
        },
      },

      animation: {
        rotate: 'rotate 30s linear infinite',
        move: 'move 5s ease-in-out infinite',
        moveUpDown: 'moveUpDown 20s ease-in-out infinite alternate',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      }
    },
  },
  plugins: [require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          'color': 'transparent',
          '-webkit-text-stroke': '1px black', // Adjust stroke width and color here
        },
        '.text-stroke-white': {
          'color': 'transparent',
          '-webkit-text-stroke': '1px white', // White stroke
        },
        '.text-stroke-red': {
          'color': 'transparent',
          '-webkit-text-stroke': '1px red', // Red stroke
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px', // Adjust stroke width
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],

}