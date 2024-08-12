import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "black-10": "#17191c",
        "black-20": "#2e3038",
        "black-30": "#455854",
        "black-40": "#5c6070",
        "black-50": "#73778c",
        "black-60": "#8F93A3",
        "black-70": "#ABAEBA",
        "black-80": "#C7C9D1",
        "black-90": "#E3E4E8",
        white: "#FFFFFF",

        pink: "#CD1DA7",
        "pink-10": "#D435B2",
        "pink-20": "#D94ABA",
        "pink-30": "#DD64C3",
        "pink-40": "#E278CB",
        "pink-50": "#E78DD4",
        "pink-60": "#ECA7DD",
        "pink-70": "#F1BCE5",
        "pink-80": "#F5D1ED",
        "pink-90": "#FAEAF7",

        green: "#8BCF1E",
        "green-10": "#97D435",
        "green-20": "#A2D94B",
        "green-30": "#AEDD62",
        "green-40": "#B9E278",
        "green-50": "#C5E78F",
        "green-60": "#D1ECA5",
        "green-70": "#DCF1BC",
        "green-80": "#E8F5D2",
        "green-90": "#F3FAE9",
      },
    },
  },
  plugins: [],
};
export default config;
