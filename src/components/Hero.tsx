import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, MapPin, Compass, ArrowRight, Zap, Trophy, Globe } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onSayHi: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onSayHi }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Role pill rotator
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.profile.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // 3D Mouse Parallax Tilt for Photo Slot 1
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Playful Floating Geometric Background Blobs */}
      <div className="absolute top-16 right-10 w-72 h-72 rounded-full bg-marigold/25 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-80 h-80 rounded-full bg-turquoise/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-coral/15 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Voice & Kinetic Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Friendly Greeting Sticker */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -3 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="sticker-card bg-marigold text-ink px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6"
            >
              <span className="text-lg">👋</span>
              <span className="font-heading font-black text-xs md:text-sm tracking-wide">
                Hi, I'm Rory Regentina
              </span>
              <span className="bg-canvas px-2 py-0.5 rounded-full text-xs font-bold border border-ink flex items-center gap-1">
                <MapPin className="w-3 h-3 text-coral" /> Bandung, Indonesia
              </span>
            </motion.div>

            {/* Kinetic Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.08] tracking-tight mb-6">
              I build <span className="bg-gradient-to-r from-coral to-marigold bg-clip-text text-transparent underline decoration-ink decoration-wavy decoration-2">search visibility</span> that feels human, and tell stories that <span className="inline-block bg-turquoise-light px-2 rounded-lg border-2 border-ink -rotate-1 shadow-sticker">move people</span>.
            </h1>

            {/* Rotating Role Pill */}
            <div className="mb-6 flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-ink-muted">Currently obsessed with:</span>
              <div className="h-9 relative overflow-hidden inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="sticker-pill bg-mint text-ink font-heading font-extrabold text-sm md:text-base px-3.5 py-1 rounded-full shadow-sticker"
                  >
                    ✨ {PORTFOLIO_DATA.profile.roles[roleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Personal First-Person Storytelling Intro */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
              I help brands rank #1 on Google and get cited across modern answer engines (<strong className="text-ink">ChatGPT, Perplexity &amp; AI Overviews</strong>). By marrying <strong className="text-ink">100/100 WordPress execution</strong> with bespoke AI prompt engineering and <strong className="text-ink">hospitality-first empathy</strong>, I turn complex search algorithms into warm, high-converting reader experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onSayHi}
                className="sticker-btn bg-coral hover:bg-coral-dark text-white font-heading font-black text-sm md:text-base px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-sticker cursor-pointer"
              >
                <span>Let's Build Something Joyful</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreWork}
                className="sticker-btn bg-canvas hover:bg-marigold text-ink font-heading font-bold text-sm md:text-base px-5 py-3.5 rounded-2xl flex items-center gap-2 shadow-sticker cursor-pointer"
              >
                <Compass className="w-4 h-4 text-turquoise-dark" />
                <span>Explore My Dual World</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column: [PHOTO_SLOT_1_HERO_PORTRAIT] with 3D Tilt Polaroid & Draggable Stickers */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* 3D Tilt Wrapper */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-grab active:cursor-grabbing perspective-1000"
            >
              
              {/* Polaroid Card Frame */}
              <div className="w-[300px] sm:w-[340px] bg-white p-4 pt-5 pb-8 rounded-3xl border-3 border-ink shadow-sticker-xl rotate-2 transition-transform duration-200">
                
                {/* Washi Tape Pin on top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-marigold/80 border border-ink/40 -rotate-2 shadow-sm rounded-sm z-20 pointer-events-none" />

                {/* PHOTO SLOT 1 WRAPPER */}
                {/* ============================================================
                    [PHOTO_SLOT_1_HERO_PORTRAIT]
                    Using Rory's personal portrait from /assets/me.jpg!
                    ============================================================ */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-ink bg-canvas">
                  <img
                    src="/assets/me.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/hero-portrait-placeholder.svg';
                    }}
                    alt="Rory Regentina - Senior SEO & GEO Strategist [PHOTO_SLOT_1_HERO_PORTRAIT]"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-ink/90 backdrop-blur-sm text-canvas text-[11px] font-bold py-1 px-2.5 rounded-lg border border-ink/40 text-center flex items-center justify-center gap-1.5">
                    <span>✨</span>
                    <span>Rory Regentina • Bandung (UTC+7)</span>
                  </div>
                </div>

                {/* Polaroid Caption */}
                <div className="mt-4 px-1 flex items-center justify-between">
                  <div>
                    <h2 className="font-heading font-black text-ink text-base">Rory Regentina</h2>
                    <p className="text-xs font-semibold text-ink-muted">SEO / AEO • Southeast Asia Storyteller</p>
                  </div>
                  <span className="text-2xl" title="Indonesia">🇮🇩</span>
                </div>

              </div>

              {/* Draggable Sticker 1: 100/100 PageSpeed */}
              <motion.div
                drag
                dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="absolute -top-6 -left-6 z-30 sticker-card bg-mint text-ink font-heading font-black text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sticker cursor-move select-none"
              >
                <Zap className="w-3.5 h-3.5 text-ink fill-marigold" />
                <span>100/100 PageSpeed</span>
              </motion.div>

              {/* Draggable Sticker 2: LocallyTrip Level 7 */}
              <motion.div
                drag
                dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="absolute -bottom-6 -right-4 z-30 sticker-card bg-coral text-white font-heading font-black text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sticker cursor-move select-none"
              >
                <Trophy className="w-3.5 h-3.5 text-marigold fill-marigold" />
                <span>LV 7 • 5,425 XP</span>
              </motion.div>

              {/* Draggable Sticker 3: UTC+7 Async Worldwide */}
              <motion.div
                drag
                dragConstraints={{ left: -25, right: 25, top: -25, bottom: 25 }}
                whileHover={{ scale: 1.08 }}
                className="absolute top-1/2 -right-8 z-30 sticker-card bg-turquoise text-white font-heading font-extrabold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sticker cursor-move select-none rotate-6"
              >
                <Globe className="w-3 h-3 text-white" />
                <span>UTC+7 Async</span>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
};
