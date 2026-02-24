import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070708",
          900: "#0B0B0C",
          850: "#101012",
          800: "#141418",
          700: "#1C1C22",
        },
        paper: {
          50: "#F5F5F7",
          100: "#E9E9ED",
          200: "#D2D2DA",
          300: "#B7B7C4",
          400: "#8D8DA0",
        },
        accent: {
          500: "#D9A441", // warm gold (close to CV highlight)
          600: "#C8922E",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Inter", "Roboto", "Helvetica", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.35)",
      },
      letterSpacing: {
        wide2: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
