/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),

  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
