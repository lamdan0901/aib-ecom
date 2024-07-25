import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#B4916C",
        900: "#B4916C",
        800: "#D9A767",
        700: "#DBBCB4",
        600: "#A35427",
        400: "#FF9B1E",
        350: "#FAB55A",
        300: "#FFC961",
        200: "#F3C796",
        100: "#EFEBE8",
      },
      dark: {
        DEFAULT: "#242424",
        900: "#242424",
        850: "#222222",
        700: "#383838",
        600: "#444444",
        500: "#626262",
        400: "#939CAB",
        300: "#B9B9B9",
        200: "#D3CDC7",
        100: "#ccc",
      },
      white: {
        DEFAULT: "#FFFFFF",
        900: "#F5F5F5",
        800: "#F9F9F9",
        700: "#D9D9D9",
        500: "#E7E7E7",
        400: "#E8E7E7",
        300: "#F5F5F5",
        200: "#EBEBEB",
      },
      yellow: {
        DEFAULT: "#F9A825",
        900: "#F5CF05",
      },
      red: {
        DEFAULT: "#FC2B2B",
        900: "#FC2B2B",
        800: "#E01020",
        700: "#CF5763",
        500: "#EB5757",
        300: "#FA6338",
      },
      blue: {
        800: "#0089ED",
        500: "#33496C",
      },
      gray: {
        DEFAULT: "#939CAB",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fill: {
        hover: {
          blue: "#4299e1",
          red: "#f56565",
        },
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            top: "50%",
            opacity: "0",
          },
          "100%": {
            top: "100%",
            opacity: "1",
          },
        },
        fadeInUp: {
          "0%": {
            bottom: "50%",
            opacity: "0",
          },
          "100%": {
            bottom: "100%",
            opacity: "1",
          },
        },
        changeColor: {
          "0%": {
            backgroundSize: "0 100%",
            backgroundColor: "#B9B9B9",
          },
          "100%": {
            backgroundSize: "100% 100%",
            backgroundColor: "#B4916C",
          },
        },
      },
    },
  },
  variants: {
    fill: ["hover"],
  },
  plugins: [],
};

export default config;
