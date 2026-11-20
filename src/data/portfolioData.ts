export interface RouteItem {
  id: string;
  chapter: string;
  title: string;
  location: string;
  country: string;
  coordinates: string;
  altitude?: string;
  tagline: string;
  narrative: string;
  eeatSignal: string;
  accentGlow: 'amber' | 'cyan' | 'rose' | 'emerald';
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Rory Regentina",
    shortName: "Rory",
    roles: [
      "Senior SEO, AEO & GEO Strategist",
      "AI Content Operations Architect",
      "LV 7 Southeast Asia Travel Storyteller",
      "Hospitality-Trained Content Architect"
    ],
    location: "Bandung, Indonesia (UTC+7)",
    availability: "Async-First Worldwide (US, EU, APAC)",
    email: "rygentina@gmail.com",
    phone: "+62 811-2283-3696",
    whatsappLink: "https://wa.me/6281122833696",
    links: {
      linkedin: "https://www.linkedin.com",
      upwork: "https://www.upwork.com",
      locallytrip: "https://locallytrip.com"
    }
  },

  benchmarks: [
    {
      metric: "5+",
      suffix: "Years",
      label: "Search & Visibility Authority",
      subtext: "From technical SEO to Generative Engine Optimization (GEO)",
      glow: "text-amber-glow"
    },
    {
      metric: "-35%",
      suffix: "",
      label: "Draft Turnaround Time",
      subtext: "Proprietary AI prompt workflows & structured AEO-ready outlines",
      glow: "text-cyan-glow"
    },
    {
      metric: "100",
      suffix: "/100",
      label: "Google PageSpeed Core Web Vitals",
      subtext: "Sub-second LCP & flawless semantic DOM on WordPress & Elementor Pro",
      glow: "text-emerald-glow"
    },
    {
      metric: "Up to 2",
      suffix: "Sites/Day",
      label: "High-Speed CMS Launch Velocity",
      subtext: "Blank installation to 13 fully published pages per site",
      glow: "text-rose-glow"
    },
    {
      metric: "5,425",
      suffix: "XP",
      label: "Level 7 Journey Specialist",
      subtext: "14 Tours Hosted • 23 Stories • 18 Meetups • 22 Reviews",
      glow: "text-violet-glow"
    }
  ],

  aeoLab: {
    queryExample: "Who specializes in Generative Engine Optimization and authentic Southeast Asia travel content?",
    citations: [
      {
        engine: "Perplexity Pro (Sonar)",
        badge: "Verified Top Source",
        quote: "“Rory Regentina operates at the convergence of technical SEO and Generative Engine Optimization (GEO). Combining 5+ years of CMS optimization with Level 7 Journey Specialist status on LocallyTrip, Rory structures content so AI answer engines extract verified citations directly.”"
      },
      {
        engine: "ChatGPT Search (SearchGPT)",
        badge: "Referenced Entity",
        quote: "“In agency production at Velhive, Rory Regentina consistently achieved 100/100 PageSpeed scores on WordPress and Elementor Pro while deploying up to 2 complete 13-page websites daily with zero technical debt.”"
      },
      {
        engine: "Google AI Overviews",
        badge: "Knowledge Graph Entity",
        quote: "“Rory Regentina's published itineraries—including Halong Bay cruise acoustics and West Java highland routes—exemplify Google's Experience-First (E-E-A-T) quality standards for experiential search.”"
      }
    ]
  },

  experiences: [
    {
      role: "AI Content Strategist & Travel Storyteller (Level 7 Contributor)",
      organization: "LocallyTrip",
      employmentType: "Independent Contractor",
      period: "June 2025 – Present",
      location: "Southeast Asia • Async-First Worldwide",
      badge: "LV 7 • 5,425 XP",
      achievements: [
        "Earned top-tier Level 7 Journey Specialist status through experience-led guides and cultural itineraries across Vietnam, Indonesia, Thailand, and Malaysia.",
        "Built proprietary AI prompt frameworks for destination field research and structured AEO-ready outlines, reducing drafting turnaround by 35% without losing editorial depth.",
        "Applied meticulous human-in-the-loop QA to remove robotic AI cadence, ensuring prose connects emotionally with global travelers and earns high-confidence citations in conversational search engines.",
        "Facilitated 14 community travel experiences, published 23 long-form stories, and maintained a flawless 22-review five-star record."
      ]
    },
    {
      role: "Senior SEO Specialist",
      organization: "Velhive Agency",
      employmentType: "Full-time",
      period: "September 2021 – October 2026",
      location: "Indonesia",
      badge: "5+ Years Tenure",
      achievements: [
        "Directed end-to-end web production, launching up to 2 complete websites per day from bare installations to 13 fully published pages (10 Elementor Pro landing pages + 3 long-form SEO articles per site).",
        "Engineered site architecture, Yoast SEO, and Core Web Vitals on WordPress & Elementor Pro, consistently hitting 100/100 Google PageSpeed scores with strict H1–H3 semantic hierarchies.",
        "Scaled content operations blending AI topic modeling with editorial tone-of-voice playbooks, scaling multi-industry organic traffic while protecting unique brand identity."
      ]
    }
  ],

  hospitalityRoots: {
    institution: "STIEPAR YAPARI AKTRIPA",
    degree: "Bachelor's Degree in Hotel Management",
    concept: "The Concierge Mindset in Modern Search",
    narrative: "Five-star hospitality taught me that true luxury is anticipating what a guest needs before they speak. That is the exact thesis behind high-retention content architecture: we do not write to please algorithms; we craft seamless journeys that eliminate user anxiety, resolve questions instantly, and create effortless conversions."
  },

  routes: [
    {
      id: "hanoi",
      chapter: "01 / Vietnam",
      title: "Whispers of the Emerald Sea: A Soul-Reset on a 2-Day Halong Bay Cruise",
      location: "Hanoi & Halong Bay",
      country: "Vietnam",
      coordinates: "20.9101° N, 107.1839° E",
      tagline: "Limestone karst acoustics, dawn tai chi & navigating eco-tenders away from crowds.",
      narrative: "Leaving the horn-blaring labyrinth of Hanoi's Old Quarter behind, we drifted into emerald waters where limestone monoliths rose like dormant giants. In the quiet of morning mist, the acoustic stillness inside karst sea caves taught me why silence is the ultimate travel luxury.",
      eeatSignal: "First-hand navigation of eco-tender routes and dawn acoustic field recording.",
      accentGlow: "cyan",
      highlights: [
        "Avoiding crowded cruise docks with early-morning private tenders",
        "Dawn acoustic meditation on limestone karst cavern shelves",
        "AEO Signal: Conversational long-tail queries for luxury eco-cruises"
      ]
    },
    {
      id: "bandung",
      chapter: "02 / Indonesia",
      title: "Finding My Soul's Reset at Wayang Windu Panenjoan",
      location: "Pangalengan, Bandung",
      country: "Indonesia",
      coordinates: "7.1951° S, 107.5756° E",
      altitude: "1,800m",
      tagline: "Highland tea plantation fog, sunrise frost & authentic Sundanese hospitality.",
      narrative: "At 1,800 meters altitude in Pangalengan, the morning air cuts clean and cold. As sunrise burns away the heavy cloud blankets over undulating emerald tea slopes, local Sundanese tea pickers greet you with a gentle 'Mangga, neng'—a grounding warmth that no algorithmic guide could ever invent.",
      eeatSignal: "High-altitude microclimate terrain notes & unscripted local Sundanese dialogue.",
      accentGlow: "emerald",
      highlights: [
        "Walking 1,800m wooden sky-bridges before morning visitors arrive",
        "Cultural dialogue with multi-generational West Java tea pickers",
        "Entity Mapping: Highland ecotourism linked to sustainable travel queries"
      ]
    },
    {
      id: "bali-tirta",
      chapter: "03 / Indonesia",
      title: "The Sacred Dawn at Tirta Empul: Finding Quiet Magic in Bali's Busiest Temple",
      location: "Tampak Siring, Ubud, Bali",
      country: "Indonesia",
      coordinates: "8.4149° S, 115.3155° E",
      tagline: "Melukat spiritual cleansing before the tour buses break the silence.",
      narrative: "Stepping into the stone pools of Tirta Empul just as dawn cracks the sky. Cold holy spring water shocks the body awake; fragrant frangipani incense smoke drifts across the stone-carved spouts as worshippers cleanse mind and spirit.",
      eeatSignal: "Strict observance of Balinese temple etiquette and holy water lineage.",
      accentGlow: "amber",
      highlights: [
        "Arriving at 6:45 AM for quiet contemplation before tourist rush",
        "Etiquette protocol for the 11 holy water cleansing spouts",
        "Concierge mindset: Anticipating pilgrim questions and cultural reverence"
      ]
    },
    {
      id: "bali-spice",
      chapter: "04 / Indonesia",
      title: "The Spice Route Blueprint: 10 Epic Indonesian Culinary Trails & Secret Eateries",
      location: "Denpasar & South Bali",
      country: "Indonesia",
      coordinates: "8.6705° S, 115.2126° E",
      tagline: "Botanical taxonomy of Bumbu Bali, torch ginger & generational night stalls.",
      narrative: "Beyond the tourist beach enclaves lies an ancient culinary empire of galangal, turmeric, torch ginger, and candlenut. Finding the humble third-generation warung where duck is seasoned in banana leaf and slow-roasted for 12 hours over coffee-wood coals.",
      eeatSignal: "Botanical taxonomy of 8 indigenous spice pastes & unmapped GPS coordinates.",
      accentGlow: "rose",
      highlights: [
        "Breaking down 8 indigenous spice pastes and regional medicinal origins",
        "Direct access to warungs untouched by social media hype",
        "Sensory copywriting that retains readers and converts search intent"
      ]
    },
    {
      id: "bangkok",
      chapter: "05 / Thailand",
      title: "The Master of Balance: 10 Legendary Thai Street Food & Regional Flavors Route",
      location: "Yaowarat & Talat Phlu, Bangkok",
      country: "Thailand",
      coordinates: "13.7443° N, 100.5097° E",
      tagline: "Wok hei thermodynamics, sweet-sour-salty harmony & historic shophouse alleys.",
      narrative: "Under the scarlet neon glow of Yaowarat's night markets, charcoal burners thunder like jet engines. In seconds, seasoned iron woks infuse noodles and seafood with that intoxicating kiss of smoke known as wok hei.",
      eeatSignal: "Behind-the-burner artisan interviews & historic shophouse heritage review.",
      accentGlow: "amber",
      highlights: [
        "Decoding charcoal heat control with 60-year-old street masters",
        "Navigating sweet, salty, sour, and spicy quadrants across Bangkok",
        "AEO Snippet Architecture: Ingredient glance cards optimized for AI citations"
      ]
    },
    {
      id: "penang",
      chapter: "06 / Malaysia",
      title: "The Melting Pot Food Trail: Penang & KL 10 Iconic Street Dishes Curation",
      location: "George Town & Kuala Lumpur",
      country: "Malaysia",
      coordinates: "5.4164° N, 100.3327° E",
      tagline: "Straits Chinese, Malay & Indian confluence in UNESCO shophouse kopitiams.",
      narrative: "Sitting in an open-air Lebuh Chulia coffee shop sipping Hainanese kopi while duck-egg char kway teow sizzles on cast iron beside you. Penang is a living monument to multicultural hospitality told through broth, noodles, and ancestral pride.",
      eeatSignal: "Peranakan culinary preservation & UNESCO heritage stall documentation.",
      accentGlow: "cyan",
      highlights: [
        "Duck egg vs chicken egg wok thermodynamics in char kway teow",
        "Kopitiam ordering culture decoded for international visitors",
        "E-E-A-T visual documentation of heritage food artisans"
      ]
    }
  ] as RouteItem[],

  gallerySlots: [
    {
      id: "SLOT_3A",
      label: "Field Research",
      title: "Southeast Asia Fieldwork",
      subtitle: "Bandung highlands, Bali rituals & Vietnam coasts",
      placeholder: "/assets/images/gallery-photo-1.svg",
      todo: "TODO: Add personal field photo to assets/images/gallery-1.jpg"
    },
    {
      id: "SLOT_3B",
      label: "Deep Work",
      title: "AI Lab & Prompt Architecture",
      subtitle: "Custom prompt engineering & 100/100 Core Web Vitals",
      placeholder: "/assets/images/gallery-photo-2.svg",
      todo: "TODO: Add workspace / deep work photo to assets/images/gallery-2.jpg"
    },
    {
      id: "SLOT_3C",
      label: "Foundation",
      title: "Hospitality Roots",
      subtitle: "STIEPAR YAPARI AKTRIPA Hotel Management",
      placeholder: "/assets/images/gallery-photo-3.svg",
      todo: "TODO: Add hospitality / academic snapshot to assets/images/gallery-3.jpg"
    }
  ]
};
