/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerDarkBg: "#252734",
        headerLightBg: "#2a2c39",
        navText: "#e7e5e1",
      },
      backgroundImage: {
        homePage: "linear-gradient(90deg, #b8bdbd, #dbdadd, #c2c6c7,  #f2f2f2)",
      },
    },
  },
  plugins: [],
};
