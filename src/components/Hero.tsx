import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import mePortraitLocal from '../assets/me.jpg';

interface HeroProps {
  onContactClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreClick }) => {
  // Global page scroll for sticky curtain transformation
  const { scrollY } = useScroll();

  // As the user scrolls through the first ~600px, the pinned hero subtly scales down and dims
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.94]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  const heroY = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section 
      id="hero" 
      className="sticky top-0 min-h-dvh z-0 flex items-center justify-center bg-[#060606] overflow-hidden px-6 sm:px-10"
    >
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-dvh py-24 sm:py-28"
      >
        
        {/* Left Typography Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 order-2 lg:order-1">
          
          {/* Subtle Metadata Label */}
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5D5C5]" />
            <span>Senior SEO &amp; GEO Strategist</span>
            <span className="text-zinc-600">/</span>
            <span>+5 Years of Authority</span>
          </div>

          {/* Massive Editorial Headline */}
          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[0.98] mb-6">
            Rory <br />
            <span className="italic font-light text-[#E5D5C5]">Regentina.</span>
          </h1>

          {/* Subtitle / Positioning Statement */}
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl mb-10">
            Driving organic search dominance across traditional algorithms and generative answer engines (<span className="text-white font-medium">ChatGPT, Perplexity &amp; Google AI Overviews</span>). Combining sub-second WordPress execution with bespoke AI prompt engineering and hospitality-driven storytelling.
          </p>

          {/* Minimal Action Row */}
          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onContactClick}
              className="px-6 py-3.5 border border-white/20 text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center gap-2 group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onExploreClick}
              className="px-6 py-3.5 text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Read Manifesto</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Right / Seamless Portrait Column (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
          
          {/* Portrait Container - Seamless edge dissolve into pure #060606 */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
            
            {/* The Portrait Image with Gradient Masks */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={mePortraitLocal}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('/me.jpg')) {
                    target.src = '/me.jpg';
                  }
                }}
                alt="Rory Regentina — Senior SEO & GEO Strategist"
                className="w-full h-full object-cover portrait-editorial-mask filter grayscale contrast-[1.08] brightness-[0.92]"
                loading="eager"
              />

              {/* Edge Gradient Dissolve Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-90 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/60 via-transparent to-[#060606]/60 pointer-events-none" />
            </div>

            {/* Subtle Studio Label */}
            <div className="absolute bottom-2 right-4 text-[11px] font-mono tracking-widest uppercase text-zinc-500">
              [Studio 01 • Bandung]
            </div>

          </div>

        </div>

      </motion.div>

      {/* Floating Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 pointer-events-none">
        <span>Scroll to Explore Curtain</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </div>
    </section>
  );
};
