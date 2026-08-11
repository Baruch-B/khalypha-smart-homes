import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fbeaea",
          100: "#f3caca",
          200: "#e29a9a",
          300: "#cc6666",
          400: "#a83a3a",
          500: "#7a1f1f",
          600: "#6b1a1a",
          700: "#5c1616",
          800: "#4a1212",
          900: "#3a0e0e",
        },
        gold: {
          50: "#fdf8ec",
          100: "#f9edc9",
          200: "#f0d98d",
          300: "#e6c257",
          400: "#d6a92e",
          500: "#b8891e",
          600: "#946c18",
          700: "#6f5112",
        },
        cream: "#faf5ec",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
