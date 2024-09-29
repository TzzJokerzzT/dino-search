import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sm-regular": "Space Mono Regular, monospace",
        "sm-bold": "Space Mono Bold, monospace",
      },
      colors: {
        blue: "hsl(212, 100%, 50%)",
        "light-blue": "hsl(217, 20%, 51%)",
        "dark-blue": "hsl(217, 35%, 45%)",
        "dark-blue-darker": "hsl(222, 41%, 20%)",
        "very-dark-blue": "hsl(217, 21%, 21%)",
        "very-dark-blue-darker": "hsl(220, 40%, 13%)",
        "very-light-blue": "hsl(227, 100%, 98%)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#294360",
            foreground: "#505b68",
          },
        },
        light: {
          colors: {
            DEFAULT: "#c0c9d4",
            primary: "hsl(217, 21%, 21%)",
            secondary: "hsl(217, 20%, 51%)",
            warning: "#eab308",
          },
        },
      },
    }),
  ],
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui()],
};
