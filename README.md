# Rory Regentina — Personal Portfolio & Modern Search Showcase
> **Senior SEO Strategist (SEO, AEO & GEO), AI Content Strategist & Travel Storyteller**  
> Live at: [https://regentina.github.io](https://regentina.github.io)

A vibrant, energetic, high-craft personal portfolio web application blending strategic search authority with authentic Southeast Asian travel storytelling and a warm hospitality-first mindset.

---

## 🎨 Design & Aesthetic Highlights
- **Vibrant & Sunlit Palette:** Warm, sunlit off-white surfaces (`#FFFDF9`) paired with rich tropical turquoise (`#06B6D4`), sunlit amber (`#F59E0B`), coral pink (`#F43F5E`), and emerald lime (`#10B981`).
- **High-Contrast Readability:** Dark ink typography (`#0F172A`) ensuring effortless readability and WCAG AA contrast compliance (`>= 4.5:1`).
- **Modern Search Readiness (SEO, AEO & GEO):**
  - Fully articulated `Schema.org` JSON-LD structured data for `Person` and `WebSite`.
  - Semantic `H1`–`H3` hierarchy and meta tags for Google AI Overviews, Perplexity, and ChatGPT search citations.
- **Interactive Features:**
  - 🟢 **Live UTC+7 Clock:** Real-time Indonesia (Jakarta) time indicator for worldwide asynchronous collaboration.
  - 📊 **Animated Stat Counters:** Metrics ticker displaying 5+ years experience, 100/100 PageSpeed scores, -35% AI drafting velocity, and Level 7 LocallyTrip XP (5,425 XP).
  - 🤖 **AEO Citation Simulator:** Interactive preview comparing Perplexity Pro, ChatGPT Search, and Google AI Overviews.
  - 🗺️ **Travel Route Reader Modal:** Interactive field notes for 6 Southeast Asian itineraries (Hanoi, Bandung, Bali, Bangkok, Penang).
  - 💬 **Async Project Inquiry Builder:** Generates ready-to-send briefs directly for WhatsApp (`+62 811-2283-3696`) and Email (`rygentina@gmail.com`).

---

## 📸 Personal Photo Slots (How to Upload Your Photos)

We've prepared dedicated, perfectly framed photo slots with high-visibility placeholders:

| Photo Slot | Location | Recommended File | Dimensions / Aspect Ratio |
| :--- | :--- | :--- | :--- |
| **`[PHOTO_SLOT_1_HERO_PORTRAIT]`** | Hero / About section | `assets/images/hero-portrait.jpg` | ~4:5 (e.g., 800×1000px) |
| **`[PHOTO_SLOT_2_FIELD_STORYTELLING]`** | Travel & Hospitality showcase | `assets/images/field-storytelling.jpg` | ~16:10 or 16:9 (e.g., 1200×750px) |
| **`[PHOTO_SLOT_3A_FIELD_RESEARCH]`** | Gallery Slot 3A (Southeast Asia) | `assets/images/gallery-1.jpg` | ~4:5 (e.g., 600×700px) |
| **`[PHOTO_SLOT_3B_AI_OPERATIONS]`** | Gallery Slot 3B (Deep Work Setup) | `assets/images/gallery-2.jpg` | ~4:5 (e.g., 600×700px) |
| **`[PHOTO_SLOT_3C_HOSPITALITY_ROOTS]`** | Gallery Slot 3C (Hospitality / STIEPAR) | `assets/images/gallery-3.jpg` | ~4:5 (e.g., 600×700px) |

### How to update in `index.html`:
Simply replace the placeholder paths (e.g., `assets/images/hero-portrait-placeholder.svg`) with your uploaded JPG/PNG images in `index.html`.

---

## 🚀 Local Development & Preview

You can open `index.html` directly in any web browser, or run a local lightweight server:

```bash
# Using Python 3:
python3 -m http.server 3000
# Then open: http://localhost:3000

# Or using npx serve:
npx serve .
```

---

## 🌐 Deploying to GitHub Pages

1. Add and commit all files:
   ```bash
   git add .
   git commit -m "Initial launch: Rory Regentina vibrant portfolio web application"
   ```
2. Push to GitHub:
   ```bash
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, ensure **Source** is set to **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Your site will be published at `https://regentina.github.io/`!
