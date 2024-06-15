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
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
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
        green: {
          default:"",
          "25":"#ECFDF3",
          "100": "#12B76A",
          "200": "#027A48",

        },
        white: "#FFFFFF",
        black: "#000000",
        gray: {
         DEFAULT: "#101828",
         "100":"#98A2B3",

        },
        red:"red",
        transparent: "transparent",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))"  ,
        purple: {
          DEFAULT: "#010A3F",
          "25":"#EBEEFF",
          "50": "#B4BEFE",

          "100": "#27316A",
          "200": "#101828",
        },
        orange:{
          DEFAULT: "#FC9803",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'equal': '0 0 5px rgba(0, 0, 0, 0.2)', // Adjust values as needed
      },
      fontFamily: {
        quicksand: ['Quicksand', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],

}