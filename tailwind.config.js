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
        bgImage: "url('/src/assets/bg.jpg')",
        leftArrow: "url('/src/assets/left-chevron.png')",
        rightArrow: "url('/src/assets/chevron.png')",
        notFound: "url('/src/assets/Not-Found.svg')",
        loginBg: "url('/src/assets/loginArt.png')",
        loginBgRight: "url('/src/assets/bgLogin.png')",
      },
    },
  },
  plugins: [],
};
