/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Biru profesional
        dark: "#0f172a",    // Background gelap modern
      }
    },
  },
  plugins: [],
}