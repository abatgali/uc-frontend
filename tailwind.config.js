/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-gray": "#A3A3A3",
        "brand-orange": "#F9BA40",
        "brand-yellow": "#FFCC33",
        "brand-black": "#020202",
        "brand-brown": "#3D2B08",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
