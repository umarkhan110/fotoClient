/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      oswald: ["Oswald"],
      cursive: ["Indie Flower", "cursive"],
    },
    colors: {
      "dark-blue": "#272C4F",
      blue: "#83A9D7",
      pink: "#E8ADBC",
      yellow: "#E7C342",
      grey: "#F8F9FA",
      "light-grey": "#ccc",
      gray: "#575756",
      transparent: "rgba(0,0,0,0)",
      white: "#fff",
      black: "#000",
      red: "red",
      maroon: "#3B1A29",
    },
    screens: {
      xs: "500px",
      sm: "770px",
      md: "950px",
      lg: "1100px",
    },
    plugins: [require("flowbite/plugin")],
  },
};
