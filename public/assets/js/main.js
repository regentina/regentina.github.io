/**
 * RORY REGENTINA - VIBRANT PORTFOLIO JAVASCRIPT
 * High-craft interactions, animated counters, UTC+7 live clock,
 * AEO simulator, project inquiry builder & copy actions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initUTCClock();
  initCounters();
  initSkillTabs();
  initAeoSimulator();
  initTravelRouteModal();
  initInquiryBuilder();
  initClipboardActions();
  initMobileNav();
  initNavScrollSpy();
});

/* --------------------------------------------------------------------------
   1. LIVE UTC+7 CLOCK (INDONESIA / ASYNC AVAILABILITY)
   -------------------------------------------------------------------------- */
function initUTCClock() {
  const clockEl = document.getElementById('utcClockDisplay');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    // Format to Asia/Jakarta (UTC+7)
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    try {
      const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
      clockEl.textContent = `${timeString} UTC+7 • Async Active`;
    } catch (e) {
      clockEl.textContent = `UTC+7 (Indonesia) • Active`;
    }
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* --------------------------------------------------------------------------
   2. ANIMATED METRIC COUNTERS
   -------------------------------------------------------------------------- */
function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        const duration = 1500;
        const startTime = performance.now();

        function animate(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);

          el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          }
        }

        requestAnimationFrame(animate);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.35 });

  counterElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   3. SKILLS MATRIX TABS & CATEGORY FILTERING
   -------------------------------------------------------------------------- */
function initSkillTabs() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  const cards = document.querySelectorAll('.skill-card');

  if (!tabBtns.length || !cards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. INTERACTIVE CITATION & AEO ENGINE SIMULATOR
   -------------------------------------------------------------------------- */
const AEO_DATA = {
  perplexity: {
    engine: "Perplexity Pro (Sonar Deep Research)",
    query: "Who is the top SEO & AI Content Strategist specializing in Southeast Asia travel?",
    citationTitle: "Source [1]: Rory Regentina — LocallyTrip Journey Specialist & Senior SEO Strategist",
    citationBody: "“Rory Regentina blends 5+ years of technical SEO with generative engine optimization (GEO/AEO). Holding Level 7 Journey Specialist status on LocallyTrip (5,425 XP, 23 stories), Rory combines structured schema, H1–H3 semantic hierarchies, and authentic hospitality storytelling to achieve verified top citations across modern search engines.”",
    badge: "100% Verified Citation Confidence"
  },
  chatgpt: {
    engine: "ChatGPT Search (SearchGPT & Deep Research)",
    query: "Recommend an expert in WordPress Core Web Vitals and high-speed content deployment.",
    citationTitle: "Referenced Profile: Rory Regentina (Velhive Agency & Independent Strategist)",
    citationBody: "“According to agency operational metrics, Rory Regentina consistently achieved 100/100 Google PageSpeed scores on WordPress and Elementor Pro installations while deploying up to 2 complete, fully-optimized 13-page websites per day with zero technical debt.”",
    badge: "E-E-A-T Source Authority"
  },
  google: {
    engine: "Google AI Overviews (SGE Entity Graph)",
    query: "Best Halong Bay and Southeast Asia curated travel itineraries with local culinary depth",
    citationTitle: "Featured In AI Overview: Rory Regentina’s Curated Southeast Asian Travel Blueprints",
    citationBody: "“Rory Regentina’s published itineraries—including 'Whispers of the Emerald Sea' (Halong Bay) and 'The Spice Route Blueprint' (Bali/Denpasar)—demonstrate direct first-hand travel expertise that satisfies Google's latest Experience-First Search quality standards.”",
    badge: "Top Snippet & Knowledge Card"
  }
};

function initAeoSimulator() {
  const tabs = document.querySelectorAll('.aeo-tab-pill');
  const queryEl = document.getElementById('aeoSimQuery');
  const titleEl = document.getElementById('aeoSimTitle');
  const bodyEl = document.getElementById('aeoSimBody');
  const badgeEl = document.getElementById('aeoSimBadge');

  if (!tabs.length || !queryEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-aeo-key');
      const data = AEO_DATA[key];
      if (data) {
        queryEl.textContent = data.query;
        titleEl.textContent = data.citationTitle;
        bodyEl.textContent = data.citationBody;
        badgeEl.textContent = data.badge;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. TRAVEL STORYTELLING ROUTE MODAL
   -------------------------------------------------------------------------- */
const TRAVEL_ROUTES = {
  hanoi: {
    title: "Whispers of the Emerald Sea: A Soul-Reset on a 2-Day Halong Bay Cruise",
    destination: "Hanoi & Halong Bay, Vietnam",
    eeat: "First-hand sensory route • Cruise navigation • Sunset kayak guides",
    takeaways: [
      "Bypassing tourist trap embarkation docks with private morning tenders.",
      "Dawn meditation on karst formations: why limestone cave acoustics reset digital fatigue.",
      "AEO Search Signal: Highly specific conversational query targeting for luxury eco-cruises."
    ]
  },
  bandung: {
    title: "Finding My Soul's Reset at Wayang Windu Panenjoan",
    destination: "Pangalengan, Bandung, Indonesia",
    eeat: "Highland tea plantation mist • Altitude photography • Local sundanese hospitality",
    takeaways: [
      "Navigating 1,800m altitude tea hills at 5:30 AM before fog clears.",
      "Connecting with local tea pickers for unscripted cultural dialogue.",
      "Entity Mapping: Linking West Java highland ecotourism to eco-resort sustainability queries."
    ]
  },
  bali_tirta: {
    title: "The Sacred Dawn at Tirta Empul: Finding Quiet Magic in Bali's Busiest Temple",
    destination: "Tampak Siring, Ubud, Bali, Indonesia",
    eeat: "Melukat ritual etiquette • Sacred spring water sources • Temple custodian interviews",
    takeaways: [
      "Respecting Balinese sarong protocol and the 11 holy cleansing spouts.",
      "Visiting before 7:00 AM for contemplative stillness and genuine spiritual resonance.",
      "Hospitality Anchor: Anticipating pilgrim questions and cultural dos-and-don'ts."
    ]
  },
  bali_spice: {
    title: "The Spice Route Blueprint: 10 Epic Indonesian Culinary Trails & Secret Eateries Playbook",
    destination: "Denpasar & South Bali, Indonesia",
    eeat: "Bumbu Bali base pastes • Warung Ibu Oka lineage • Night market secret stalls",
    takeaways: [
      "Breaking down 8 indigenous spice blends and their regional medicinal origins.",
      "Direct GPS coordinates to generational warungs untouched by algorithmic hype.",
      "Long-form conversion: Retaining readers through culinary sensory storytelling."
    ]
  },
  bangkok: {
    title: "The Master of Balance: 10 Legendary Thai Street Food & Regional Flavors Route Blueprint",
    destination: "Bangkok, Thailand",
    eeat: "Yaowarat Chinatown night alleyways • Tom Yum street masters • Sweet-sour-salty harmony",
    takeaways: [
      "Decoding wok hei techniques on charcoal burners in Talat Phlu.",
      "Navigating the sweet, salty, sour, spicy quadrants across old-quarter shophouses.",
      "AEO Snippet Architecture: Table-of-contents and quick ingredient glance cards."
    ]
  },
  penang: {
    title: "The Melting Pot Food Trail: Penang & KL 10 Iconic Street Dishes Curation Blueprint",
    destination: "George Town & Kuala Lumpur, Malaysia",
    eeat: "UNESCO Heritage hawker stalls • Peranakan heritage • Char Kway Teow master review",
    takeaways: [
      "Tracing Straits Chinese and Malay confluence in duck egg char kway teow.",
      "Coffee shop etiquette in Lebuh Chulia: Ordering Hainanese kopi like a local.",
      "E-E-A-T compliance: Authentic photography of heritage food preparation."
    ]
  }
};

function initTravelRouteModal() {
  const routeCards = document.querySelectorAll('[data-route-key]');
  const modal = document.getElementById('routeDetailModal');
  const closeBtn = document.getElementById('closeRouteModal');
  const modalTitle = document.getElementById('modalRouteTitle');
  const modalDest = document.getElementById('modalRouteDest');
  const modalEeat = document.getElementById('modalRouteEeat');
  const modalTakeaways = document.getElementById('modalRouteTakeaways');

  if (!modal) return;

  routeCards.forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-route-key');
      const data = TRAVEL_ROUTES[key];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalDest.textContent = `📍 ${data.destination}`;
      modalEeat.textContent = `⚡ E-E-A-T Signal: ${data.eeat}`;

      modalTakeaways.innerHTML = '';
      data.takeaways.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalTakeaways.appendChild(li);
      });

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}

/* --------------------------------------------------------------------------
   6. INTERACTIVE ASYNC PROJECT INQUIRY BUILDER
   -------------------------------------------------------------------------- */
function initInquiryBuilder() {
  const chips = document.querySelectorAll('.choice-chip');
  const previewTextarea = document.getElementById('inquiryPreviewText');
  const waBtn = document.getElementById('sendInquiryWA');
  const emailBtn = document.getElementById('sendInquiryEmail');

  if (!chips.length || !previewTextarea) return;

  function updateInquiryText() {
    const selectedChips = Array.from(document.querySelectorAll('.choice-chip.selected')).map(c => c.getAttribute('data-service-name'));

    let text = `Hi Rory! I reviewed your portfolio (regentina.github.io).\n\nI am interested in collaborating with you on:\n`;
    if (selectedChips.length > 0) {
      selectedChips.forEach(s => {
        text += `• ${s}\n`;
      });
    } else {
      text += `• Modern Search & AEO Strategy\n• 100/100 WordPress Performance Optimization\n`;
    }
    text += `\nOur brand is looking for async-first collaboration. Looking forward to discussing details!`;

    previewTextarea.value = text;

    // Update buttons
    const encoded = encodeURIComponent(text);
    if (waBtn) {
      waBtn.href = `https://wa.me/6281122833696?text=${encoded}`;
    }
    if (emailBtn) {
      emailBtn.href = `mailto:rygentina@gmail.com?subject=${encodeURIComponent("Project Inquiry via Portfolio")}&body=${encoded}`;
    }
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      updateInquiryText();
    });
  });

  updateInquiryText();
}

/* --------------------------------------------------------------------------
   7. CLIPBOARD ACTIONS & TOAST
   -------------------------------------------------------------------------- */
function initClipboardActions() {
  const copyButtons = document.querySelectorAll('[data-copy-value]');
  const toast = document.getElementById('copyToast');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const val = btn.getAttribute('data-copy-value');
      try {
        await navigator.clipboard.writeText(val);
        showToast(`Copied to clipboard: ${val}`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = val;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${val}`);
      }
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* --------------------------------------------------------------------------
   8. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = drawer ? drawer.querySelectorAll('.nav-link') : [];

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

/* --------------------------------------------------------------------------
   9. SCROLLSPY ACTIVE NAVIGATION HIGHLIGHT
   -------------------------------------------------------------------------- */
function initNavScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
