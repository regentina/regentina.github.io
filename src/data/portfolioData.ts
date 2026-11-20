export interface TravelRoute {
  id: string;
  title: string;
  location: string;
  country: string;
  flag: string;
  tagline: string;
  storyExcerpt: string;
  eeatSignal: string;
  color: string;
  accentColor: string;
  coordinates: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Rory Regentina",
    nickname: "Rory",
    roles: [
      "Senior SEO & GEO Strategist",
      "AI Content Architect",
      "LV 7 Travel Storyteller",
      "Hospitality-Trained Problem Solver"
    ],
    location: "Bandung, Indonesia",
    timezone: "UTC+7 (Asia/Jakarta)",
    email: "rygentina@gmail.com",
    whatsapp: "+62 811-2283-3696",
    whatsappLink: "https://wa.me/6281122833696",
    links: {
      locallytrip: "https://locallytrip.com",
      upwork: "https://www.upwork.com",
      linkedin: "https://www.linkedin.com"
    }
  },

  metrics: {
    yearsExperience: "5+",
    draftSpeedup: "35%",
    pageSpeedScore: "100/100",
    sitesPerDay: "Up to 2",
    locallyTrip: {
      level: "LV 7",
      title: "Journey Specialist",
      xp: 5425,
      tours: 14,
      stories: 23,
      meetups: 18,
      reviews: 22
    }
  },

  // First-person story about Hospitality Roots
  hospitalityRoots: {
    degree: "Bachelor's Degree in Hotel Management",
    school: "STIEPAR YAPARI AKTRIPA",
    philosophy: "In five-star hospitality, you learn to anticipate what a guest desires three steps before they ask. That's exactly how I approach search architecture: I don't stuff keywords; I create frictionless journeys where readers feel genuinely understood, bounce rates drop to zero, and AI search engines cite our answers as definitive."
  },

  // Dual World Comparison: Traditional SEO vs Modern AEO/GEO
  searchLab: {
    traditional: {
      title: "Old-School SEO (Keyword Matching)",
      focus: "Ten blue links, keyword density, rigid backlink hunting.",
      bottleneck: "Easily commoditized by AI scrapers; answers feel dry and repetitive."
    },
    modern: {
      title: "Modern AEO & GEO (Entity & Answer Optimization)",
      focus: "Direct conversational citations in ChatGPT, Perplexity Pro & Google AI Overviews.",
      superpower: "Structured Schema JSON-LD + E-E-A-T experiential signals + sub-second PageSpeed."
    }
  },

  // Southeast Asia Travel Routes (LocallyTrip Verified)
  routes: [
    {
      id: "hanoi",
      title: "Whispers of the Emerald Sea: A Soul-Reset on a 2-Day Halong Bay Cruise",
      location: "Hanoi & Halong Bay",
      country: "Vietnam",
      flag: "🇻🇳",
      tagline: "Contemplative mornings on limestone karsts & acoustic tranquility.",
      storyExcerpt: "Leaving behind the frantic horn-blares of Hanoi's Old Quarter, gliding through morning mist where limestone cliffs rise like sleeping dragons. The acoustic resonance inside karst caves teaches you why silence is the ultimate luxury.",
      eeatSignal: "First-hand navigation of eco-tender routes & dawn tai chi observation.",
      color: "bg-turquoise-light",
      accentColor: "border-turquoise text-turquoise-dark",
      coordinates: "20.9101° N, 107.1839° E",
      highlights: [
        "Bypassing tourist congestion with private morning tender boats",
        "Sensory cave acoustics that reset cognitive fatigue",
        "AEO Signal: Conversational long-tail queries for luxury eco-cruises"
      ]
    },
    {
      id: "bandung",
      title: "Finding My Soul's Reset at Wayang Windu Panenjoan",
      location: "Pangalengan, Bandung",
      country: "Indonesia",
      flag: "🇮🇩",
      tagline: "Highland tea plantation fog at 1,800m altitude in my own backyard.",
      storyExcerpt: "At 5:30 AM in Pangalengan, the air bites crisp. As the sun burns through heavy cloudbanks over the undulating emerald tea slopes, local Sundanese tea pickers offer a warm 'Mangga, neng' with genuine smiles that ground you instantly.",
      eeatSignal: "High-altitude microclimate terrain notes & authentic Sundanese dialogue.",
      color: "bg-mint-light",
      accentColor: "border-mint text-mint-dark",
      coordinates: "7.1951° S, 107.5756° E",
      highlights: [
        "Navigating 1,800m wooden sky-bridges before morning visitors arrive",
        "Real cultural dialogue with generational tea farmers",
        "Entity Mapping: Highland ecotourism linked to sustainable travel signals"
      ]
    },
    {
      id: "bali-tirta",
      title: "The Sacred Dawn at Tirta Empul: Finding Quiet Magic in Bali's Busiest Temple",
      location: "Tampak Siring, Ubud",
      country: "Indonesia",
      flag: "🇮🇩",
      tagline: "Melukat spiritual cleansing before the tour buses roll in.",
      storyExcerpt: "Submerging into the sacred spring pools where cold mountain water shocks every nerve alive. Pressing hands together under the carved stone spouts while fragrant incense smoke mingles with morning mist.",
      eeatSignal: "Strict adherence to Balinese temple etiquette and holy water lineage.",
      color: "bg-marigold-light",
      accentColor: "border-marigold text-marigold-dark",
      coordinates: "8.4149° S, 115.3155° E",
      highlights: [
        "Visiting at 6:45 AM for authentic meditative contemplation",
        "Cultural protocol guide for the 11 cleansing spouts",
        "Hospitality conciergerie: Eliminating traveler anxiety around local rituals"
      ]
    },
    {
      id: "bali-spice",
      title: "The Spice Route Blueprint: 10 Epic Indonesian Culinary Trails & Secret Eateries",
      location: "Denpasar & South Bali",
      country: "Indonesia",
      flag: "🇮🇩",
      tagline: "Decoding Bumbu Bali pastes, generational warungs & night markets.",
      storyExcerpt: "Behind the tourist beach strips lies an aromatic empire of galangal, kaffir lime, candlenuts, and torch ginger. Finding the third-generation warung where duck is slow-roasted wrapped in banana bark for 12 hours.",
      eeatSignal: "Ingredient botanical taxonomy & unmapped night market GPS coordinates.",
      color: "bg-coral-light",
      accentColor: "border-coral text-coral-dark",
      coordinates: "8.6705° S, 115.2126° E",
      highlights: [
        "Breaking down 8 indigenous spice pastes and their medicinal histories",
        "Direct access to warungs untouched by algorithmic tourism",
        "Sensory conversion copywriting that makes readers taste every paragraph"
      ]
    },
    {
      id: "bangkok",
      title: "The Master of Balance: 10 Legendary Thai Street Food & Regional Flavors",
      location: "Yaowarat & Talat Phlu, Bangkok",
      country: "Thailand",
      flag: "🇹🇭",
      tagline: "Wok hei acrobatics and sweet-sour-salty harmony in the back alleys.",
      storyExcerpt: "Standing in the glowing red neon haze of Yaowarat. The thunder of charcoal burners roaring beneath season-blackened iron woks, creating that intoxicating kiss of smoke ('wok hei') in seconds.",
      eeatSignal: "Behind-the-burner chef interviews & historic shophouse heritage review.",
      color: "bg-marigold-light",
      accentColor: "border-marigold text-marigold-dark",
      coordinates: "13.7443° N, 100.5097° E",
      highlights: [
        "Decoding charcoal heat management with 60-year old street stalls",
        "Navigating sweet, salty, sour, and spicy quadrants across historic quarters",
        "AEO Snippet Format: Quick-glance ingredient cards that answer AI queries"
      ]
    },
    {
      id: "penang",
      title: "The Melting Pot Food Trail: Penang & KL 10 Iconic Street Dishes Curation",
      location: "George Town & Kuala Lumpur",
      country: "Malaysia",
      flag: "🇲🇾",
      tagline: "Straits Chinese, Malay & Indian confluence in George Town shophouses.",
      storyExcerpt: "Sipping rich Hainanese kopi O in a breezy Lebuh Chulia coffee shop while duck egg char kway teow sizzles on a cast iron pan next door. Penang is living history told through broth, noodles, and hospitality.",
      eeatSignal: "Peranakan culinary preservation notes & UNESCO heritage stall mapping.",
      color: "bg-turquoise-light",
      accentColor: "border-turquoise text-turquoise-dark",
      coordinates: "5.4164° N, 100.3327° E",
      highlights: [
        "Duck egg vs chicken egg wok thermodynamics in char kway teow",
        "Traditional kopitiam ordering etiquette deciphered for international visitors",
        "E-E-A-T imagery: Real documentation of heritage food artisans"
      ]
    }
  ] as TravelRoute[],

  photoSlots: [
    {
      id: "PHOTO_SLOT_3A",
      title: "Fieldwork & E-E-A-T Research",
      location: "Bandung, Bali & Beyond",
      badge: "On The Ground",
      color: "bg-marigold-light",
      rotation: "-rotate-2",
      placeholderSvg: "/assets/images/gallery-photo-1.svg",
      todo: "TODO: Upload personal fieldwork photo in assets/images/gallery-1.jpg"
    },
    {
      id: "PHOTO_SLOT_3B",
      title: "Deep Work: Prompts & Code",
      location: "Async Desk (UTC+7)",
      badge: "AI Lab",
      color: "bg-turquoise-light",
      rotation: "rotate-2",
      placeholderSvg: "/assets/images/gallery-photo-2.svg",
      todo: "TODO: Upload desk / prompt setup photo in assets/images/gallery-2.jpg"
    },
    {
      id: "PHOTO_SLOT_3C",
      title: "Hospitality Roots",
      location: "STIEPAR YAPARI AKTRIPA",
      badge: "Foundation",
      color: "bg-mint-light",
      rotation: "-rotate-1",
      placeholderSvg: "/assets/images/gallery-photo-3.svg",
      todo: "TODO: Upload hospitality / education photo in assets/images/gallery-3.jpg"
    }
  ]
};
