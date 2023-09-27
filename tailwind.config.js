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
        'live-hero': "url('https://res.cloudinary.com/dtyw96fds/video/upload/v1695775459/pexels-kelly-lacy-5677397_2160p_mnl65a.mp4')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
