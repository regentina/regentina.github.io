/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFDF7", // warm sunlit cream
        coral: {
          DEFAULT: "#FF5A5F",
          light: "#FFEAEB",
          dark: "#E03E43"
        },
        turquoise: {
          DEFAULT: "#00B4D8",
          light: "#E0F7FC",
          dark: "#0096B4"
        },
        marigold: {
          DEFAULT: "#FFB703",
          light: "#FFF4D4",
          dark: "#E09E00"
        },
        mint: {
          DEFAULT: "#06D6A0",
          light: "#D8FBF0",
          dark: "#05B284"
        },
        ink: {
          DEFAULT: "#1E1B4B", // deep indigo for crisp text
          muted: "#475569",
          soft: "#64748B"
        }
      },
      fontFamily: {
        heading: ["Syne", "Plus Jakarta Sans", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        hand: ["Playfair Display", "serif"]
      },
      boxShadow: {
        sticker: "3px 3px 0px 0px #1E1B4B",
        "sticker-lg": "5px 5px 0px 0px #1E1B4B",
        "sticker-xl": "8px 8px 0px 0px #1E1B4B",
        "sticker-hover": "6px 6px 0px 0px #1E1B4B"
      }
    },
  },
  plugins: [],
}
