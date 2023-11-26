/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#3B82F6",
      },
      fontFamily: {
        poppinsLight: "PoppinsLight",
        poppinsRegular: "PoppinsRegular",
        poppinsMedium: "PoppinsMedium",
      },
    },
  },
  plugins: [],
};
