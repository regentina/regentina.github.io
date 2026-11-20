import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import { PORTFOLIO_DATA, TravelRoute } from '../data/portfolioData';

interface TravelCarouselProps {
  onSelectRoute: (route: TravelRoute) => void;
}

export const TravelCarousel: React.FC<TravelCarouselProps> = ({ onSelectRoute }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="stories" className="py-20 md:py-28 relative bg-canvas/60 border-y-3 border-ink overflow-hidden">
      
      {/* Background Decorative Graphic */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="sticker-pill bg-turquoise-light text-turquoise-dark px-4 py-1 rounded-full inline-flex items-center gap-2 font-heading font-extrabold text-xs uppercase tracking-wider mb-4 border border-ink">
              <Compass className="w-3.5 h-3.5 text-turquoise-dark" />
              <span>Field Storytelling &amp; E-E-A-T</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight">
              Boots on the Ground in Southeast Asia
            </h2>
            <p className="text-ink-muted text-base sm:text-lg max-w-xl mt-3">
              Google's search guidelines reward real-world experience. Here are 6 authentic itineraries I've authored for LocallyTrip—from highland mist in Bandung to street markets in Bangkok and George Town.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="sticker-btn w-12 h-12 rounded-full bg-white text-ink flex items-center justify-center font-black text-lg hover:bg-marigold transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="sticker-btn w-12 h-12 rounded-full bg-white text-ink flex items-center justify-center font-black text-lg hover:bg-turquoise hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Feature Banner: [PHOTO_SLOT_2_FIELD_STORYTELLING] */}
        <div className="mt-10 bg-white rounded-3xl border-3 border-ink shadow-sticker-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* PHOTO SLOT 2 WRAPPER */}
          {/* ================================================================
              [PHOTO_SLOT_2_FIELD_STORYTELLING]
              TODO: Replace '/assets/images/field-storytelling-placeholder.svg'
              with Rory's travel field photo!
              ================================================================ */}
          <div className="lg:col-span-6 relative aspect-[16/10] bg-ink overflow-hidden border-b-3 lg:border-b-0 lg:border-r-3 border-ink">
            <img
              src="/assets/images/field-storytelling-placeholder.svg"
              alt="Southeast Asia Field Storytelling [PHOTO_SLOT_2_FIELD_STORYTELLING]"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 sticker-pill bg-canvas text-ink text-xs font-heading font-black px-3 py-1 rounded-full shadow-sm">
              📸 [PHOTO_SLOT_2_FIELD_STORYTELLING]
            </div>
            <div className="absolute bottom-3 left-3 bg-ink/90 backdrop-blur-sm text-canvas text-xs font-bold px-3 py-1 rounded-xl">
              📍 Southeast Asia Exploration Route
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center">
            <div className="sticker-pill bg-coral-light text-coral-dark text-xs font-heading font-black px-3 py-1 rounded-full w-max mb-3 border border-ink">
              LocallyTrip Author Spotlight
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-ink leading-snug mb-3">
              Why Sensory Detail Beats Robotic AI Scraping Every Single Time
            </h3>
            <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-6">
              When AI hallucinates travel advice, it misses the temperature of holy spring water at Tirta Empul, the fragrant wok smoke of Yaowarat, and the exact sunrise minute when tea fog lifts in Pangalengan. Authentic storytelling builds genuine audience trust that algorithms cannot fake.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-ink-muted">Swipe or click routes below to read field notes 👇</span>
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Draggable Carousel */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 max-w-7xl mx-auto pb-4 cursor-grab active:cursor-grabbing"
      >
        {PORTFOLIO_DATA.routes.map((route, index) => (
          <motion.div
            key={route.id}
            whileHover={{ y: -6, rotate: index % 2 === 0 ? -1 : 1 }}
            onClick={() => onSelectRoute(route)}
            className={`min-w-[300px] sm:min-w-[340px] max-w-[340px] ${route.color} rounded-3xl p-6 border-3 border-ink shadow-sticker-lg flex flex-col justify-between cursor-pointer group shrink-0 transition-transform`}
          >
            <div>
              {/* Header: Flag, Location & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl" title={route.country}>{route.flag}</span>
                <span className="sticker-pill bg-white text-ink text-[11px] font-heading font-black px-2.5 py-1 rounded-full border border-ink">
                  {route.coordinates}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-black text-ink-muted uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>{route.location}</span>
              </div>

              <h4 className="font-heading font-black text-lg sm:text-xl text-ink leading-snug mb-3 group-hover:text-coral transition-colors">
                {route.title}
              </h4>

              <p className="text-xs sm:text-sm font-medium text-ink/80 leading-relaxed line-clamp-3 mb-4">
                {route.storyExcerpt}
              </p>
            </div>

            <div>
              <div className="bg-white/90 p-3 rounded-2xl border-2 border-ink text-[11px] font-bold text-ink mb-4">
                <div className="text-coral-dark uppercase font-black tracking-wide text-[10px] mb-0.5">E-E-A-T Signal</div>
                <div className="line-clamp-2">{route.eeatSignal}</div>
              </div>

              <div className="pt-3 border-t-2 border-ink/15 flex items-center justify-between text-xs font-heading font-black text-ink group-hover:text-coral">
                <span>Read Field Notes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
