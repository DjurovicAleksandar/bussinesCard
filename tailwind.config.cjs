/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        headerWidth: "31.7rem",
      },
      textColor: {
        titleColor: "#FFFFFF",
        textColor: "#DCDCDC",
        subColor: "#F3BF99",
      },
      backgroundColor: {
        mainBg: "#1A1B21",
        footerBg: "#161619",
      },
      fontSize: {
        title: "2.5rem",
        h2: "2.1rem",
        subTitle: "1.3rem",
        paragraph: "1rem",
      },
      padding: {
        cardY: "2.5rem",
        cardX: "3.5rem",
      },
    },
  },
  plugins: [],
};
