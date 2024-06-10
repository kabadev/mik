/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#FFFFFF",
        primary: "#ff353b",
        secondary: "#b4b4f3",
        accent: "#232F3E",
      },
    },
  },
  plugins: [],
};
