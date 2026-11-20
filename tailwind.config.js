/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#060606",
          subtle: "#0D0D0D",
          deep: "#040404"
        },
        card: {
          DEFAULT: "#121212",
          elevated: "#161616",
          overlay: "#1A1A1A"
        },
        champagne: {
          DEFAULT: "#E5D5C5",
          muted: "#B8A796",
          subtle: "rgba(229, 213, 197, 0.15)"
        }
      },
      fontFamily: {
        editorial: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"]
      },
      letterSpacing: {
        widest: "0.2em",
        mega: "0.25em"
      }
    },
  },
  plugins: [],
}
