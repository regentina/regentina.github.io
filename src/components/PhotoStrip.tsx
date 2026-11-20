import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Upload } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PhotoStrip: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="sticker-pill bg-mint-light text-mint-dark px-4 py-1 rounded-full inline-flex items-center gap-2 font-heading font-extrabold text-xs uppercase tracking-wider mb-4 border border-ink">
            <Camera className="w-3.5 h-3.5 text-mint-dark" />
            <span>Personal Photo Strip</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Snapshots From the Journey
          </h2>
          <p className="text-ink-muted text-base sm:text-lg">
            High-craft placeholder slots ready for personal portraits, field exploration, and prompt engineering workspace photos.
          </p>
        </div>

        {/* 3 Polaroid Cards Grid: [PHOTO_SLOT_3_GALLERY_GRID] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.photoSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              whileHover={{ scale: 1.03, y: -8, rotate: 0 }}
              className={`bg-white p-5 pb-8 rounded-3xl border-3 border-ink shadow-sticker-lg ${slot.rotation} transition-all duration-300 relative group`}
            >
              {/* Top Washi Tape accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-marigold/70 border border-ink/40 -rotate-1 rounded-sm shadow-sm z-10 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-ink bg-canvas mb-5">
                <img
                  src={slot.placeholderSvg}
                  alt={`${slot.title} [${slot.id}]`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Slot Identifier Overlay */}
                <div className="absolute top-3 left-3 sticker-pill bg-white/95 text-ink text-[10px] font-heading font-black px-2.5 py-1 rounded-full shadow-sm">
                  {slot.badge}
                </div>

                <div className="absolute bottom-2 left-2 right-2 bg-ink/90 backdrop-blur-sm text-canvas text-[11px] font-bold py-1 px-2 rounded-lg border border-ink/40 text-center">
                  {slot.todo}
                </div>
              </div>

              {/* Caption */}
              <div className="px-1">
                <div className="text-xs font-black text-coral uppercase tracking-wider mb-1">
                  {slot.location}
                </div>
                <h3 className="font-heading font-black text-lg text-ink mb-1">
                  {slot.title}
                </h3>
                <p className="text-xs font-semibold text-ink-muted">
                  Ready for direct image swap in code or assets folder.
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
