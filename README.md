# Rory Regentina — Dark Editorial Portfolio
> **Senior SEO & GEO Strategist, AI Content Operations Architect & Level 7 LocallyTrip Storyteller**  
> Live at: [https://regentina.github.io](https://regentina.github.io)

An ultra-elegant, quiet-luxury **Dark Editorial Personal Portfolio** built with **React 19, TypeScript, Tailwind CSS, and Framer Motion**, deployed via **Vite + GitHub Actions** to GitHub Pages (`regentina.github.io`).

---

## 🖤 Design Direction & Minimalist Monochrome Aesthetic
- **Strict Monochrome Palette (No Neon / No Rainbow):**
  - **Canvas Canvas:** Pure Obsidian & Matte Black (`#060606` and `#0D0D0D`).
  - **Surface & Stacking Cards:** Deep Charcoal (`#121212` / `#161616`) with hairline borders (`border-white/10`).
  - **Typography:** Pure White (`#FFFFFF`) for headlines, Soft Off-White (`#D4D4D8`) for body, and Muted Gray (`#71717A`) for labels.
  - **Accent:** Subtle warm champagne tone (`#E5D5C5`) and pure white-on-black inversion.
- **High-Fashion Editorial Typography:**
  - **Headlines:** `Cormorant Garamond` (light/regular weight, tight tracking) for a dramatic, quiet-luxury gallery presence.
  - **Body & UI:** `Plus Jakarta Sans` / `Inter` (regular 400, generous line-height `1.7`, crisp legibility).

---

## 🎬 Scroll Overlay Mechanics (Sticky Curtain & Stacking Cards)
1. **Sticky Hero Curtain Overlay:**
   - The Hero section is anchored (`sticky top-0 min-h-dvh z-0`) so `me.jpg` and the editorial headline stay pinned while slightly scaling down (`1` -> `0.94`) and dimming (`opacity: 1` -> `0.35`) on scroll.
   - The **About & Philosophy** section slides smoothly **OVER** the pinned hero (`relative z-10 bg-[#0D0D0D] rounded-t-[2.5rem] border-t border-white/10 shadow-2xl`) like a tactile editorial curtain.
2. **Seamless Portrait Integration (`me.jpg`):**
   - The personal portrait dissolves naturally into the `#060606` canvas using CSS gradient masks (`portrait-editorial-mask`), creating a dramatic studio look without glowing boxes or card borders.
3. **Editorial Metrics Strip (Clean Hairline Grid):**
   - Minimalist 4-column hairline grid: `5+ Yrs` (Search Visibility), `100/100` (Google PageSpeed), `-35%` (AI Draft Turnaround), and `LV 7 • 5,425 XP` (LocallyTrip Host).
4. **Interactive Capabilities Accordion:**
   - Sleek full-width rows with hairline borders (`border-white/10`) and right arrows that smoothly expand on click/hover with white-on-black active inversion:
     - *01 / Modern Search (SEO, AEO & GEO)*
     - *02 / Technical & CMS Optimization*
     - *03 / AI Content Operations*
     - *04 / Travel & Hospitality Storytelling*
5. **Sticky Stacking Overlay Cards:**
   - A vertical Sticky Stacking Card sequence (`sticky top-24` with incremental offsets) where each Southeast Asia route card physically glides **OVER** the previous card as the user scrolls down.
6. **Mobile-First Smoothness:**
   - Root elements use `overflow-x: clip` so `position: sticky` never breaks on mobile or desktop viewports.

---

## 📸 Personal Photo Slots

| Slot | File Path | Status |
| :--- | :--- | :--- |
| **`[PHOTO_SLOT_1_HERO_PORTRAIT]`** | `./src/assets/me.jpg` & `/public/me.jpg` | ✅ Active (Rory's personal portrait seamlessly dissolved) |
| **`[PHOTO_SLOT_2_FIELD_STORYTELLING]`** | `/public/assets/images/field-storytelling-placeholder.svg` | Ready to swap in routes |
| **`[PHOTO_SLOT_3_GALLERY_GRID]`** | `/public/assets/images/gallery-photo-1.svg` etc. | Ready to swap in gallery |

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

## 🚀 GitHub Actions Deployment to GitHub Pages

Every commit pushed to branch `main` automatically triggers `.github/workflows/deploy.yml` which builds and publishes the production site to **[https://regentina.github.io/](https://regentina.github.io/)**.
