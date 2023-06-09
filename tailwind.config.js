/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: { "16/23": "16 / 23" },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "986px",
          xl: "1100",
        },
      },
    },
  },
  plugins: [],
};
