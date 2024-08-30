/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ade80",
        secondry: "#22c55e",
        light: "#dcfce7",
        dark: "#16a34a",
      },
      backgroundImage: {
        bgImage: "url('/MyDashboard/src/assets/bg.jpg')",
        leftArrow: "url('/MyDashboard/src/assets/left-chevron.png')",
        rightArrow: "url('/MyDashboard/src/assets/chevron.png')",
        notFound: "url('/MyDashboard/src/assets/Not-Found.svg')",
      },
    },
  },
  plugins: [],
};
