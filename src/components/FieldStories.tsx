import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, MapPin, ArrowRight, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { PORTFOLIO_DATA, RouteItem } from '../data/portfolioData';

interface FieldStoriesProps {
  onSelectRoute: (route: RouteItem) => void;
}

export const FieldStories: React.FC<FieldStoriesProps> = ({ onSelectRoute }) => {
  const [activeCountryFilter, setActiveCountryFilter] = useState<'All' | 'Vietnam' | 'Indonesia' | 'Thailand' | 'Malaysia'>('All');

  const filteredRoutes = PORTFOLIO_DATA.routes.filter(
    (r) => activeCountryFilter === 'All' || r.country === activeCountryFilter
  );

  return (
    <section id="field-stories" className="py-24 md:py-32 relative bg-obsidian-deep/50 border-t border-white/5">
      
      {/* Ambient Lighting Node */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] ambient-glow-rose blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark-glass hairline-border mb-4 font-mono text-xs text-rose-glow uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Chapter 03 / Field Routes &amp; Experience Signals</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight">
              Boots-on-the-Ground in Southeast Asia
            </h2>
            <p className="text-ivory-muted text-base sm:text-lg max-w-xl mt-3">
              True E-E-A-T search authority cannot be simulated. Here are 6 verified travel itineraries authored for LocallyTrip—from highland tea mist in Bandung to Bangkok street food alleys.
            </p>
          </div>

          {/* Country Filter Chips */}
          <div className="flex flex-wrap gap-1.5 dark-glass p-1.5 rounded-2xl hairline-border">
            {(['All', 'Vietnam', 'Indonesia', 'Thailand', 'Malaysia'] as const).map((country) => (
              <button
                key={country}
                onClick={() => setActiveCountryFilter(country)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  activeCountryFilter === country
                    ? 'bg-ivory text-obsidian font-bold shadow-sm'
                    : 'text-ivory-dim hover:text-ivory'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Banner: [PHOTO_SLOT_2_FIELD_STORYTELLING] */}
        <div className="rounded-3xl dark-glass hairline-border overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* PHOTO SLOT 2 WRAPPER */}
          {/* ============================================================
              [PHOTO_SLOT_2_FIELD_STORYTELLING]
              TODO: Add travel / field photography to assets/images/field-storytelling.jpg
              ============================================================ */}
          <div className="lg:col-span-6 relative aspect-[16/10] bg-obsidian-deep overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 group">
            <img
              src="/assets/images/field-storytelling-placeholder.svg"
              alt="Southeast Asia Field Storytelling [PHOTO_SLOT_2_FIELD_STORYTELLING]"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />

            <div className="absolute top-4 left-4 dark-glass px-3 py-1 rounded-full text-[10px] font-mono text-ivory hairline-border">
              📸 [PHOTO_SLOT_2_FIELD_STORYTELLING]
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-ivory">
              <span>Bandung • Bali • Hanoi • Bangkok • Penang</span>
              <span className="text-amber-glow">Coordinates Active</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-glow uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LocallyTrip Creator Benchmark</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-ivory mb-3 leading-snug">
              Why Real Human Observation Destroys Algorithmic AI Cliches
            </h3>
            <p className="text-sm sm:text-base text-ivory-muted leading-relaxed mb-6">
              When generative AI hallucinates travel advice, it misses the temperature of holy spring water at Tirta Empul, the fragrant wok smoke of Yaowarat, and the exact sunrise minute when tea fog lifts in Pangalengan. Experiential storytelling creates authentic engagement that algorithms reward and readers remember.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.profile.links.locallytrip}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-ivory text-obsidian font-heading font-black text-xs flex items-center gap-1.5 hover:bg-white transition-colors"
              >
                <span>View LocallyTrip Author Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* 6 Curated Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredRoutes.map((route) => (
              <motion.div
                key={route.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectRoute(route)}
                className="rounded-2xl dark-glass hairline-border hairline-border-hover p-6 flex flex-col justify-between cursor-pointer group transition-all"
              >
                <div>
                  {/* Chapter & Coordinates Header */}
                  <div className="flex items-center justify-between text-xs font-mono text-ivory-dim mb-3 pb-3 border-b border-white/5">
                    <span>{route.chapter}</span>
                    <span className="text-amber-glow">{route.coordinates}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-glow uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{route.location}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-ivory group-hover:text-amber-glow transition-colors leading-snug mb-3">
                    {route.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed line-clamp-3 mb-4 font-normal">
                    {route.narrative}
                  </p>
                </div>

                <div>
                  <div className="p-3 rounded-xl bg-surface-elevated hairline-border text-[11px] font-mono text-ivory mb-4">
                    <div className="text-rose-glow text-[10px] uppercase font-bold tracking-wide mb-0.5">E-E-A-T Signal</div>
                    <div className="line-clamp-2">{route.eeatSignal}</div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-heading font-bold text-ivory group-hover:text-amber-glow transition-colors">
                    <span>Inspect Field Observations</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};
