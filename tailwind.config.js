/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f97316",
          secondary: "#fdba74",
          accent: "#ffffff",
          neutral: "#ffffff",
          "base-100": "#ffffff",
          info: "#ffffff",
          success: "#15803d",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
// #ec6708
