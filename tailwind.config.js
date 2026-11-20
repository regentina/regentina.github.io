/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#090B0F",
          deep: "#06080B",
          light: "#0E1218"
        },
        surface: {
          DEFAULT: "#121721",
          elevated: "#161D2A",
          overlay: "#1A2232"
        },
        ivory: {
          DEFAULT: "#F4F6FA",
          muted: "#9AA4B2",
          dim: "#64748B"
        },
        amber: {
          glow: "#F59E0B",
          dim: "#B45309"
        },
        cyan: {
          glow: "#22D3EE",
          dim: "#0891B2"
        },
        rose: {
          glow: "#FB7185",
          dim: "#BE123C"
        },
        violet: {
          glow: "#C084FC",
          dim: "#7E22CE"
        },
        emerald: {
          glow: "#34D399",
          dim: "#059669"
        }
      },
      fontFamily: {
        heading: ["Syne", "Plus Jakarta Sans", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        'glow-amber': '0 0 40px -10px rgba(245, 158, 11, 0.25)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.25)',
        'glow-rose': '0 0 40px -10px rgba(251, 113, 133, 0.25)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)'
      }
    },
  },
  plugins: [],
}
