import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Compass, ArrowDown, Sparkles, Zap, Trophy, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Import local asset with safe fallback
import mePortraitLocal from '../assets/me.jpg';

interface HeroStageProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroStage: React.FC<HeroStageProps> = ({ onExploreClick, onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Layered Scroll Transforms
  // 1. Portrait: Parallax panning and subtle scale expansion
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.85, 0.3]);

  // 2. Foreground Overlays: Move faster to create depth
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section 
      id="stage" 
      ref={containerRef}
      className="relative min-h-[110vh] lg:min-h-[125vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      
      {/* Ambient Lighting Cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ambient-glow-amber blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-[-100px] w-[500px] h-[500px] ambient-glow-cyan blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-100px] w-[500px] h-[500px] ambient-glow-rose blur-3xl pointer-events-none -z-10" />

      {/* Subtle Hairline Background Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left / Editorial Identity Copy (7 cols) */}
          <motion.div 
            style={{ y: overlayY }}
            className="lg:col-span-7 z-20 flex flex-col items-start"
          >
            
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full dark-glass hairline-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-glow animate-pulse" />
              <span className="font-mono text-xs font-semibold text-ivory tracking-wide">
                Rory Regentina • Editorial Stage
              </span>
              <span className="text-[11px] text-ivory-dim font-mono border-l border-white/10 pl-2">
                Indonesia (UTC+7)
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-ivory leading-[1.08] tracking-tight mb-6"
            >
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-glow via-rose-glow to-cyan-glow">Search Intelligence</span> Meets <span className="italic font-serif font-normal text-ivory">Soulful</span> Storytelling.
            </motion.h1>

            {/* Rotating Role Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 flex-wrap mb-6 text-sm sm:text-base font-mono text-ivory-muted"
            >
              <span className="text-amber-glow">❯</span>
              <span>Senior SEO, AEO &amp; GEO Strategist</span>
              <span className="text-ivory-dim hidden sm:inline">•</span>
              <span className="text-cyan-glow">AI Content Operations</span>
              <span className="text-ivory-dim hidden sm:inline">•</span>
              <span className="text-rose-glow">LocallyTrip Level 7 Contributor</span>
            </motion.div>

            {/* Grounded First-Person Introduction */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-ivory-muted leading-relaxed max-w-xl mb-8"
            >
              I help modern brands win search visibility across traditional Google rankings and conversational answer engines (<strong className="text-ivory font-semibold">AI Overviews, ChatGPT, and Perplexity</strong>). By combining <strong className="text-ivory font-semibold">100/100 Core Web Vitals execution</strong> on WordPress and Elementor Pro with bespoke prompt engineering and <strong className="text-ivory font-semibold">hospitality-first empathy</strong>, I build digital architecture that both algorithms and humans cite as authoritative.
            </motion.p>

            {/* Action Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-2xl bg-ivory text-obsidian font-heading font-black text-sm flex items-center gap-2 hover:bg-white transition-all shadow-lg shadow-white/5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-glow" />
                <span>Explore the Search &amp; AI Lab</span>
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-2xl dark-glass text-ivory font-heading font-bold text-sm hairline-border hairline-border-hover transition-all cursor-pointer hover:bg-surface-elevated"
              >
                <span>Initiate Dialogue</span>
              </button>
            </motion.div>

          </motion.div>

          {/* Right / [PHOTO_SLOT_1_HERO_PORTRAIT] (`me.jpg`) with Scroll Parallax & Vignette Mask (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Halo Behind Portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-glow/20 via-rose-glow/15 to-cyan-glow/20 rounded-3xl blur-2xl -z-10" />

            {/* Parallax Container for Portrait */}
            <motion.div 
              style={{ y: portraitY, scale: portraitScale, opacity: portraitOpacity }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl p-1 dark-glass hairline-border shadow-2xl"
            >
              
              {/* PHOTO SLOT 1 WRAPPER */}
              {/* ============================================================
                  [PHOTO_SLOT_1_HERO_PORTRAIT]
                  Primary personal portrait (`me.jpg`) with dark vignette mask
                  and fallback protection for GitHub Pages deployment.
                  ============================================================ */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-obsidian-deep">
                <img
                  src={mePortraitLocal}
                  onError={(e) => {
                    // Safe fallback to public/assets/me.jpg or placeholder
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('public/me.jpg')) {
                      target.src = '/me.jpg';
                    } else {
                      target.src = '/assets/images/hero-portrait-placeholder.svg';
                    }
                  }}
                  alt="Rory Regentina - Personal Portrait [PHOTO_SLOT_1_HERO_PORTRAIT]"
                  className="w-full h-full object-cover vignette-mask bottom-fade-mask transition-transform duration-700"
                  loading="eager"
                  width="400"
                  height="500"
                />

                {/* Subtle Inner Dark Editorial Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Micro-Badge Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 dark-glass px-3.5 py-2 rounded-xl hairline-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-glow" />
                    <span className="text-xs font-mono font-bold text-ivory">Bandung, ID</span>
                  </div>
                  <span className="text-[11px] font-mono text-ivory-dim">UTC+7 • Async Worldwide</span>
                </div>
              </div>

              {/* Floating Scroll Overlay Badges */}
              {/* Badge 1: 100/100 PageSpeed */}
              <motion.div 
                style={{ y: badgeY }}
                className="absolute -top-4 -right-4 dark-glass px-3.5 py-2 rounded-xl hairline-border flex items-center gap-2 shadow-dark-card"
              >
                <Zap className="w-4 h-4 text-emerald-glow" />
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-ivory-dim">Audit Score</div>
                  <div className="text-xs font-heading font-black text-emerald-glow">100/100 Core Web Vitals</div>
                </div>
              </motion.div>

              {/* Badge 2: LocallyTrip Level 7 */}
              <motion.div 
                style={{ y: badgeY }}
                className="absolute -bottom-4 -left-4 dark-glass px-3.5 py-2 rounded-xl hairline-border flex items-center gap-2 shadow-dark-card"
              >
                <Trophy className="w-4 h-4 text-amber-glow" />
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-ivory-dim">LocallyTrip Contributor</div>
                  <div className="text-xs font-heading font-black text-amber-glow">LV 7 • 5,425 XP</div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>

        {/* Scroll Indicator Prompt */}
        <div className="mt-16 flex justify-center">
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex items-center gap-2 text-xs font-mono text-ivory-dim uppercase tracking-widest cursor-pointer"
            onClick={onExploreClick}
          >
            <span>Scroll to Enter Chapter 02 (The Search Lab)</span>
            <ArrowDown className="w-3.5 h-3.5 text-amber-glow" />
          </motion.div>
        </div>

      </div>

    </section>
  );
};
