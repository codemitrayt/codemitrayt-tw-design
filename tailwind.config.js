/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "progress-bar":
          "inset 0 5px 10px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.75),0 -2px 2px rgba(255,255,255,0.5),inset 0 4px 2px rgba(0,0,0,0.25),inset 0 -2px 2px rgba(255,255,255,0.5)",
      },
    },
  },
  plugins: [],
};
