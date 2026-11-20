# Rory Regentina — Dark Editorial Portfolio
> **Senior SEO, AEO & GEO Strategist, AI Content Operations Architect & Level 7 LocallyTrip Storyteller**  
> Live at: [https://regentina.github.io](https://regentina.github.io)

A moody, high-craft, personal portfolio web application centered around **scroll-driven overlay animations** and personal portrait photography (`me.jpg`), built with **React 19, TypeScript, Tailwind CSS, and Framer Motion**, deployed via **Vite + GitHub Actions** to GitHub Pages (`regentina.github.io`).

---

## 🖤 Design Direction & Dark Editorial Palette
- **Aesthetic Taxonomy:** One Page Love (`Dark`, `Scroll Effects`, `Editorial`, `Typographic`, `Portfolio`, `Personal`, `Case Study`).
- **Surface Hierarchy:**
  - **Deep Obsidian Background:** `#090B0F` to `#0E1218`
  - **Elevated Surfaces / Overlay Cards:** Dark Slate (`#121721` / `#161D2A`) with subtle 1px hairline borders (`rgba(255,255,255,0.08)`) and backdrop blur (`backdrop-blur-xl`).
  - **High-Contrast Typography:** Crisp Ivory (`#F4F6FA`) on dark background (contrast `> 14:1`, exceeding WCAG AAA).
  - **Accents:** Warm Amber (`#F59E0B`), Cyan (`#22D3EE`), and Soft Rose (`#FB7185`).

---

## 🎬 Scroll Overlay Animation System (Framer Motion)
1. **Top Floating Scroll HUD & Chapter Progress:** Slim gradient scroll-progress line + active story chapter indicator (*01 Stage*, *02 Search & AI*, *03 Field Routes*, *04 Dialogue*) + live UTC+7 Bandung / Indonesia clock.
2. **Hero Stage Parallax Portrait:**
   - Features `me.jpg` with `useScroll` + `useTransform` parallax panning and subtle zoom.
   - Smooth edge vignette blending directly into the dark canvas.
   - Floating glass overlay cards and badges gliding at varying parallax speeds.
3. **The Search & AI Lab:**
   - Sticky/parallax overlay cards comparing modern AEO/GEO vs legacy SEO.
   - Interactive Citation Simulator comparing Perplexity Pro, ChatGPT Search, and Google AI Overviews.
   - Key verified benchmarks: `5+ Years`, `-35% Turnaround`, `100/100 PageSpeed`, `Up to 2 Sites/Day`, `5,425 XP`.
4. **Field Notes & Southeast Asia Routes (LocallyTrip Showcase):**
   - Feature banner for `[PHOTO_SLOT_2_FIELD_STORYTELLING]` with dark vignette mask.
   - 6 Curated Route Cards (Hanoi, Bandung, Ubud Bali, Spice Route Denpasar, Bangkok, Penang & KL) with interactive field notes modal.
5. **Hospitality Roots & Career Trajectory:**
   - Hotel Management degree at **STIEPAR YAPARI AKTRIPA** informing user-first content architecture.
   - Milestones at Velhive Agency (Sept 2021 – Oct 2026) and LocallyTrip (June 2025 – Present).
6. **Field Gallery Strip (`[PHOTO_SLOT_3_GALLERY_GRID]`):**
   - 3 dark editorial frames ready for direct personal/field photo integration.
7. **Contact Dialogue & Project Brief Launcher:**
   - 1-click clipboard copy for email (`rygentina@gmail.com`) and phone (`+62 811-2283-3696`) with toast + confetti.
   - Direct launch links for WhatsApp, Email, LinkedIn, Upwork, and LocallyTrip.

---

## 📸 Personal Photo Slots

| Slot | File Path | Status |
| :--- | :--- | :--- |
| **`[PHOTO_SLOT_1_HERO_PORTRAIT]`** | `./src/assets/me.jpg` & `/public/me.jpg` | ✅ Active (Rory's personal portrait) |
| **`[PHOTO_SLOT_2_FIELD_STORYTELLING]`** | `/public/assets/images/field-storytelling-placeholder.svg` | Optional: ready to swap with field photo |
| **`[PHOTO_SLOT_3A_FIELD_RESEARCH]`** | `/public/assets/images/gallery-photo-1.svg` | Optional: ready to swap in gallery |
| **`[PHOTO_SLOT_3B_AI_OPERATIONS]`** | `/public/assets/images/gallery-photo-2.svg` | Optional: ready to swap in gallery |
| **`[PHOTO_SLOT_3C_HOSPITALITY_ROOTS]`** | `/public/assets/images/gallery-photo-3.svg` | Optional: ready to swap in gallery |

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
