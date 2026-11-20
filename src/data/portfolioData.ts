export interface RouteCard {
  id: string;
  number: string;
  title: string;
  destination: string;
  country: string;
  coordinates: string;
  tagline: string;
  narrative: string;
  eeatSignal: string;
  takeaways: string[];
}

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  deliverable: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Rory Regentina",
    headline: "Senior SEO & GEO Strategist",
    subheadline: "AI Content Operations & Travel Storyteller",
    location: "Indonesia",
    timezone: "UTC+7, Async-First Worldwide",
    email: "rygentina@gmail.com",
    phone: "+62 811-2283-3696",
    whatsappLink: "https://wa.me/6281122833696",
    links: {
      linkedin: "https://www.linkedin.com",
      upwork: "https://www.upwork.com",
      locallytrip: "https://locallytrip.com"
    }
  },

  metrics: [
    {
      value: "5+ Yrs",
      label: "Search Visibility",
      description: "From technical SEO to Generative Engine Optimization (AEO/GEO)."
    },
    {
      value: "100/100",
      label: "Google PageSpeed",
      description: "Consistently delivered with clean semantic H1–H3 architecture."
    },
    {
      value: "-35%",
      label: "Draft Turnaround",
      description: "Proprietary AI prompt workflows & structured citation outlines."
    },
    {
      value: "LV 7 • 5,425 XP",
      label: "LocallyTrip Creator",
      description: "14 Tours Hosted • 23 Published Stories • 22 Five-Star Reviews."
    }
  ],

  capabilities: [
    {
      id: "modern-search",
      number: "01",
      title: "Modern Search (SEO, AEO & GEO)",
      category: "Answer Engine Architecture",
      summary: "Structuring brand entities and content so conversational AI engines cite your domain as the primary canonical source.",
      details: [
        "Entity mapping & conversational query targeting for ChatGPT, Perplexity & AI Overviews",
        "Semantic DOM structuring with strict H1–H3 hierarchy and Schema.org JSON-LD",
        "E-E-A-T compliance modeling and search intent gap analysis",
        "Internal linking cluster silos that protect topical authority"
      ],
      deliverable: "Deterministic Answer Engine Citations & Knowledge Graph Alignment"
    },
    {
      id: "tech-cms",
      number: "02",
      title: "Technical & CMS Optimization",
      category: "Core Web Vitals & Speed",
      summary: "High-velocity web execution delivering flawless 100/100 PageSpeed scores with zero layout shift or visual compromise.",
      details: [
        "WordPress & Elementor Pro custom architecture with sub-second LCP",
        "Yoast SEO optimization & technical indexing blocker resolution",
        "High-velocity deployment: up to 2 complete 13-page websites launched per day",
        "Comprehensive content decay audits and crawl budget preservation"
      ],
      deliverable: "100/100 Core Web Vitals & High-Velocity Deployment Pipelines"
    },
    {
      id: "ai-ops",
      number: "03",
      title: "AI Content Operations",
      category: "Scalable Editorial Engines",
      summary: "Custom prompt engineering workflows coupled with rigorous human-in-the-loop editorial quality assurance.",
      details: [
        "Multi-step prompt chains for deep subject-matter research and AEO-ready outlines",
        "AI output humanization: eliminating robotic cadence while preserving brand voice",
        "35% reduction in initial draft production turnaround time",
        "Fact-checking protocols that eliminate hallucinations and protect editorial integrity"
      ],
      deliverable: "Scalable Content Workflows with Strict Human Editorial QA"
    },
    {
      id: "hospitality-storytelling",
      number: "04",
      title: "Travel & Hospitality Storytelling",
      category: "Experiential Retention",
      summary: "Infusing sensory narrative depth, real-world field observation, and hospitality empathy into travel guides and lifestyle publications.",
      details: [
        "First-hand boots-on-the-ground research across Vietnam, Indonesia, Thailand & Malaysia",
        "Concierge-inspired user journeys informed by Hotel Management education (STIEPAR)",
        "Sensory copywriting that turns search intent into high-retention dwell time",
        "Indonesian market localization & global English publication standards"
      ],
      deliverable: "High-Dwell-Time Editorial That Resonates with Humans & Algorithms"
    }
  ] as CapabilityItem[],

  routes: [
    {
      id: "hanoi",
      number: "01",
      title: "Whispers of the Emerald Sea: 2-Day Halong Bay Cruise",
      destination: "Hanoi & Halong Bay",
      country: "Vietnam",
      coordinates: "20.9101° N, 107.1839° E",
      tagline: "Limestone karst acoustics, dawn tai chi & navigating eco-tenders away from crowds.",
      narrative: "Leaving behind the frantic horn-blares of Hanoi's Old Quarter, gliding through emerald waters where limestone karsts rise like dormant monoliths. In the quiet of morning mist, the acoustic resonance inside karst caves teaches you why silence is the ultimate travel luxury.",
      eeatSignal: "First-hand navigation of eco-tender routes & dawn acoustic field notes.",
      takeaways: [
        "Avoiding tourist-crowded cruise docks through private early tenders",
        "Dawn acoustic meditation on limestone karst cavern shelves",
        "Conversational long-tail query optimization for luxury eco-cruises"
      ]
    },
    {
      id: "bandung",
      number: "02",
      title: "Finding My Soul's Reset at Wayang Windu Panenjoan",
      destination: "Pangalengan, Bandung",
      country: "Indonesia",
      coordinates: "7.1951° S, 107.5756° E",
      tagline: "Highland tea plantation fog, 1,800m altitude sunrise & Sundanese hospitality.",
      narrative: "At 1,800 meters altitude in Pangalengan, the morning air cuts clean and cold. As sunrise burns through cloud blankets over undulating emerald tea slopes, local Sundanese tea pickers offer a warm 'Mangga, neng'—an authentic cultural grounding that algorithms can never fabricate.",
      eeatSignal: "High-altitude microclimate terrain notes & unscripted Sundanese dialogue.",
      takeaways: [
        "Walking 1,800m wooden sky-bridges before morning visitors arrive",
        "Generational tea farmer dialogue documenting West Java heritage",
        "Highland ecotourism entity mapping linked to sustainable travel queries"
      ]
    },
    {
      id: "bali-tirta",
      number: "03",
      title: "The Sacred Dawn at Tirta Empul",
      destination: "Tampak Siring, Ubud, Bali",
      country: "Indonesia",
      coordinates: "8.4149° S, 115.3155° E",
      tagline: "Melukat spiritual cleansing before tour buses break the quiet.",
      narrative: "Stepping into the stone pools of Tirta Empul at first light. Cold holy spring water shocks every nerve awake; fragrant frangipani incense drifts across carved stone spouts as worshippers cleanse mind and spirit.",
      eeatSignal: "Strict adherence to Balinese temple etiquette and holy water lineage.",
      takeaways: [
        "Arriving at 6:45 AM for contemplative stillness before tour groups arrive",
        "Cultural protocol guide for the 11 holy water cleansing spouts",
        "Concierge mindset: Anticipating pilgrim questions and cultural reverence"
      ]
    },
    {
      id: "bali-spice",
      number: "04",
      title: "The Spice Route Blueprint: 10 Indonesian Culinary Trails",
      destination: "Denpasar & South Bali",
      country: "Indonesia",
      coordinates: "8.6705° S, 115.2126° E",
      tagline: "Botanical taxonomy of Bumbu Bali, torch ginger & generational night stalls.",
      narrative: "Beyond tourist beach strips lies an aromatic empire of galangal, turmeric, torch ginger, and candlenut. Finding the generational warung where duck is seasoned in banana bark and slow-roasted for 12 hours over coffee-wood coals.",
      eeatSignal: "Botanical taxonomy of 8 indigenous spice pastes & unmapped GPS coordinates.",
      takeaways: [
        "Deconstructing 8 indigenous spice pastes and regional medicinal origins",
        "Direct access to warungs untouched by social media hype",
        "Sensory copywriting that retains readers and converts search intent"
      ]
    },
    {
      id: "bangkok",
      number: "05",
      title: "The Master of Balance: 10 Thai Street Food Routes",
      destination: "Yaowarat & Talat Phlu, Bangkok",
      country: "Thailand",
      coordinates: "13.7443° N, 100.5097° E",
      tagline: "Wok hei thermodynamics, sweet-sour-salty balance & alleyway masters.",
      narrative: "Under the scarlet neon glow of Yaowarat's night markets, charcoal burners roar like jet engines. In seconds, seasoned iron woks infuse noodles and seafood with that intoxicating kiss of smoke known as wok hei.",
      eeatSignal: "Behind-the-burner artisan interviews & historic shophouse heritage review.",
      takeaways: [
        "Decoding charcoal heat control with 60-year-old street masters",
        "Navigating sweet, salty, sour, and spicy quadrants across Bangkok",
        "AEO Snippet Architecture: Ingredient glance cards optimized for AI citations"
      ]
    },
    {
      id: "penang",
      number: "06",
      title: "The Melting Pot Food Trail: Penang & KL",
      destination: "George Town & Kuala Lumpur",
      country: "Malaysia",
      coordinates: "5.4164° N, 100.3327° E",
      tagline: "Straits Chinese, Malay & Indian confluence in UNESCO shophouse kopitiams.",
      narrative: "Sitting in an open-air Lebuh Chulia coffee shop sipping Hainanese kopi while duck-egg char kway teow sizzles on cast iron beside you. Penang is living history told through broth, noodles, and ancestral pride.",
      eeatSignal: "Peranakan culinary preservation & UNESCO heritage stall documentation.",
      takeaways: [
        "Duck egg vs chicken egg wok thermodynamics in char kway teow",
        "Kopitiam ordering culture decoded for international visitors",
        "E-E-A-T visual documentation of heritage food artisans"
      ]
    }
  ] as RouteCard[],

  experiences: [
    {
      role: "AI Content Strategist & Travel Storyteller",
      company: "LocallyTrip (Independent Contractor)",
      period: "June 2025 – Present",
      status: "Level 7 Journey Specialist • 5,425 XP",
      achievements: [
        "Achieved top-tier Level 7 creator status through experience-led guides and itineraries across Southeast Asia built on real-world E-E-A-T signals.",
        "Built proprietary AI prompt frameworks for destination research and structured AEO-ready outlines, cutting drafting turnaround by 35% while preserving editorial depth.",
        "Applied human-in-the-loop editing to eliminate robotic phrasing, connecting emotionally with global travelers and meeting AI search citation standards.",
        "Hosted 14 community tours, published 23 long-form stories, and maintained 22 five-star guest reviews."
      ]
    },
    {
      role: "Senior SEO Specialist",
      company: "Velhive Agency (Full-time)",
      period: "September 2021 – October 2026",
      status: "5+ Years Tenure",
      achievements: [
        "Directed end-to-end website content production, launching up to 2 complete websites per day from blank installations to 13 fully published pages (10 Elementor Pro landing pages + 3 long-form SEO articles per site).",
        "Optimized site architecture, Yoast SEO, and technical performance on WordPress & Elementor Pro, consistently hitting 100/100 Google PageSpeed scores with strict H1–H3 hierarchy.",
        "Scaled content workflows combining AI research with human editorial guidelines to grow organic visibility across multi-industry clients without compromising brand voice."
      ]
    }
  ],

  hospitality: {
    institution: "STIEPAR YAPARI AKTRIPA",
    degree: "Bachelor's Degree in Hotel Management",
    thesis: "Anticipating Guest Needs in Digital Architecture",
    description: "In luxury hotel management, five-star service is defined by resolving what a guest desires before they speak. Applied to search architecture, we craft frictionless user journeys where cognitive strain drops to zero, bounce rates disappear, and AI engines cite our content as the definitive authority."
  }
};
