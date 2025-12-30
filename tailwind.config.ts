import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CDFF3C",
          light: "#E0FF7A",
          dark: "#B8E834",
        },
        dark: {
          DEFAULT: "#000000",
          light: "#1A1A1A",
        },
        light: {
          DEFAULT: "#FFFFFF",
          gray: "#F5F5F5",
        },
        text: {
          primary: "#000000",
          secondary: "#666666",
        },
      },
      fontFamily: {
        sans: ["Open Sans Hebrew", "Open Sans", "system-ui", "sans-serif"],
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
