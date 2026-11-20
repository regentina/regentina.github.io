import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Clock, Sparkles, Send, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScrollHUDProps {
  onContactClick: () => void;
}

export const ScrollHUD: React.FC<ScrollHUDProps> = ({ onContactClick }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeChapter, setActiveChapter] = useState<'01' | '02' | '03' | '04'>('01');
  const [currentTime, setCurrentTime] = useState<string>('');

  // Live UTC+7 Bandung / Indonesia Time
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      setCurrentTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update active chapter based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const labEl = document.getElementById('search-lab');
      const storiesEl = document.getElementById('field-stories');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveChapter('04');
      } else if (storiesEl && scrollPos >= storiesEl.offsetTop) {
        setActiveChapter('03');
      } else if (labEl && scrollPos >= labEl.offsetTop) {
        setActiveChapter('02');
      } else {
        setActiveChapter('01');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDialogue = () => {
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.1, x: 0.85 }
    });
    onContactClick();
  };

  const chapterNames = {
    '01': '01 Stage',
    '02': '02 Search & AI',
    '03': '03 Field Routes',
    '04': '04 Dialogue'
  };

  return (
    <>
      {/* Top Thin Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-glow via-cyan-glow to-rose-glow origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Dark Glass HUD Navbar */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
          
          {/* Brand Tag */}
          <a
            href="#stage"
            className="dark-glass px-4 py-2 rounded-full flex items-center gap-3 text-sm font-heading font-extrabold text-ivory hairline-border hairline-border-hover transition-colors group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-glow to-rose-glow flex items-center justify-center text-obsidian text-xs font-black shadow-inner group-hover:scale-105 transition-transform">
              RR
            </div>
            <span className="tracking-tight">Rory Regentina</span>
            <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-ivory-dim px-2 py-0.5 rounded-full bg-surface-elevated border border-white/5">
              Editorial Portfolio
            </span>
          </a>

          {/* Center Story Chapter HUD Indicator */}
          <div className="hidden md:flex items-center gap-1.5 dark-glass px-3.5 py-1.5 rounded-full text-xs font-mono">
            {(['01', '02', '03', '04'] as const).map((chap) => {
              const isActive = activeChapter === chap;
              const targets = {
                '01': '#stage',
                '02': '#search-lab',
                '03': '#field-stories',
                '04': '#contact'
              };
              return (
                <a
                  key={chap}
                  href={targets[chap]}
                  className={`px-3 py-1 rounded-full transition-all duration-300 font-semibold ${
                    isActive
                      ? 'bg-white/10 text-ivory border border-white/15 shadow-sm'
                      : 'text-ivory-dim hover:text-ivory'
                  }`}
                >
                  {chapterNames[chap]}
                </a>
              );
            })}
          </div>

          {/* Right Status (Live UTC+7 Clock & Direct Contact Action) */}
          <div className="flex items-center gap-2.5">
            {/* Live Clock Pill */}
            <div 
              className="hidden lg:flex items-center gap-2 dark-glass px-3.5 py-2 rounded-full text-xs font-mono text-ivory-muted"
              title="Indonesia Timezone (Asia/Jakarta)"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-glow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-glow"></span>
              </span>
              <Clock className="w-3.5 h-3.5 text-ivory-dim" />
              <span>{currentTime || 'Bandung UTC+7'}</span>
              <span className="text-emerald-glow text-[11px] font-bold hidden xl:inline">• Async Active</span>
            </div>

            {/* Direct Dialogue Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={triggerDialogue}
              className="px-4 py-2 rounded-full bg-ivory text-obsidian font-heading font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-white/5 hover:bg-white transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-glow fill-amber-glow" />
              <span>Direct Dialogue</span>
            </motion.button>
          </div>

        </div>
      </header>
    </>
  );
};
