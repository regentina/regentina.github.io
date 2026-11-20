# Rory Regentina 👋 — Personal Website
> **Senior SEO & GEO Strategist, AI Content Architect & Level 7 LocallyTrip Storyteller**  
> Live at: [https://regentina.github.io](https://regentina.github.io)

A vibrant, joyful, highly animated personal website built from scratch with **React 19, TypeScript, Tailwind CSS, and Framer Motion**, deployed via **Vite + GitHub Actions** to GitHub Pages.

---

## 🎨 Personal Vibe & Design Direction
- **No Stiff Corporate Layouts:** Written in Rory's genuine first-person voice ("Hi, I'm Rory 👋", "My Dual World", "Field notes from Bandung to Southeast Asia").
- **Bright, Playful Color Palette:**
  - **Canvas Cream:** `#FFFDF7` (sunlit warm surface)
  - **Electric Coral:** `#FF5A5F`
  - **Tropical Turquoise:** `#00B4D8`
  - **Marigold Yellow:** `#FFB703`
  - **Mint Green:** `#06D6A0`
  - **Deep Ink:** `#1E1B4B` (ultra crisp contrast typography)
- **Real-World Tactile Motion (Framer Motion):**
  - Kinetic spring-physics headline reveal with rotating role pill.
  - Interactive polaroid card with 3D mouse parallax tilt and draggable stickers (`100/100 PageSpeed`, `LV 7 • 5425 XP`, `UTC+7 Async`).
  - Asymmetric Bento Grid comparing modern AEO/GEO vs old-school SEO.
  - Interactive horizontal drag carousel for 6 Southeast Asia field routes with detailed modal.
  - Interactive quick ping generator with 1-click clipboard copy + confetti explosion!

---

## 🛠️ Tech Stack & Architecture
- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Motion:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Confetti:** Canvas Confetti
- **Build & Bundler:** Vite 6
- **CI/CD:** Automated GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📸 Personal Photo Slots

| Slot | File Path | Status |
| :--- | :--- | :--- |
| **`[PHOTO_SLOT_1_HERO_PORTRAIT]`** | `/assets/me.jpg` | ✅ Active (Rory's personal portrait) |
| **`[PHOTO_SLOT_2_FIELD_STORYTELLING]`** | `/public/assets/images/field-storytelling-placeholder.svg` | Ready to swap with field photo |
| **`[PHOTO_SLOT_3A_FIELD_RESEARCH]`** | `/public/assets/images/gallery-photo-1.svg` | Ready to swap in gallery |
| **`[PHOTO_SLOT_3B_AI_OPERATIONS]`** | `/public/assets/images/gallery-photo-2.svg` | Ready to swap in gallery |
| **`[PHOTO_SLOT_3C_HOSPITALITY_ROOTS]`** | `/public/assets/images/gallery-photo-3.svg` | Ready to swap in gallery |

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment (GitHub Actions to GitHub Pages)

Pushing commits to the `main` branch automatically triggers `.github/workflows/deploy.yml`:
1. Checks out repository.
2. Installs dependencies (`npm ci`).
3. Runs `npm run build` (TypeScript check + Vite build).
4. Deploys the `./dist` folder directly to GitHub Pages.
