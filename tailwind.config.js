/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",
  theme: {
    colors: {
      white: "#fafafa",
      yellow_text: "#fcb937",
      yellow_bg: "#febc18",
      purple_bg: "#9053f6",
      icon_bg: "#7f38f8",
      purple_text: "#71559e",
      light_purple: "#be90f1",
      shadow_color: "#eed9f9",
      light_black_text: "#beb5c7",
      btn_text: "#a37d18",
      icon_text: "#fedf95",
      dark_text_1: "#00000",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
