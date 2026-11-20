import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const FieldGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark-glass hairline-border mb-4 font-mono text-xs text-rose-glow uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Field Captures &amp; Personal Gallery</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight mb-4">
            Visual Notes from the Journey
          </h2>
          <p className="text-ivory-muted text-base sm:text-lg leading-relaxed">
            Dark editorial frames reserved for personal fieldwork photos, deep work setups, and hospitality roots.
          </p>
        </div>

        {/* 3 Dark Editorial Cards Grid: [PHOTO_SLOT_3_GALLERY_GRID] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.gallerySlots.map((slot) => (
            <motion.div
              key={slot.id}
              whileHover={{ y: -6 }}
              className="rounded-3xl dark-glass hairline-border p-4 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Media Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-obsidian-deep hairline-border mb-4">
                <img
                  src={slot.placeholder}
                  alt={`${slot.title} [${slot.id}]`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-70" />

                <div className="absolute top-3 left-3 dark-glass px-3 py-1 rounded-full text-[10px] font-mono text-ivory hairline-border">
                  {slot.label}
                </div>

                <div className="absolute bottom-3 left-3 right-3 dark-glass px-3 py-1.5 rounded-xl text-[11px] font-mono text-ivory-dim hairline-border text-center">
                  {slot.todo}
                </div>
              </div>

              {/* Caption */}
              <div className="px-2 pb-2">
                <h3 className="font-heading font-bold text-base text-ivory mb-0.5 group-hover:text-amber-glow transition-colors">
                  {slot.title}
                </h3>
                <p className="text-xs text-ivory-dim">
                  {slot.subtitle}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
