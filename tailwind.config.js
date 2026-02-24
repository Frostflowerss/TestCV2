module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
          100: "#E9E9ED",
          200: "#D2D2DA",
        },
        accent: {
          500: "#D9A441",
          600: "#C8922E",
        },
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.35)",
        glow: "0 20px 60px rgba(217,164,65,0.22)",
      },
      letterSpacing: {
        wide2: "0.18em",
      },
    },
  },
  plugins: [],
};
