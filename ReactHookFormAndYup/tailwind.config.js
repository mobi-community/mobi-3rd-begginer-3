import { COLOR, FONT_SIZE } from "./src/design"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...COLOR,
      },
      fontSize: FONT_SIZE,
    },
  },
  plugins: [],
}
