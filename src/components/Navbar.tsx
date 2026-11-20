import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Send, Menu, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [time, setTime] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Live UTC+7 Bandung / Jakarta clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.1, x: 0.85 }
    });
    onContactClick();
  };

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        
        {/* Brand / Name Tag */}
        <a 
          href="#hero" 
          className="sticker-card bg-canvas hover:bg-marigold-light px-4 py-2 rounded-full flex items-center gap-2.5 font-heading font-extrabold text-ink text-base md:text-lg group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-coral flex items-center justify-center text-white text-xs font-black shadow-inner group-hover:rotate-12 transition-transform">
            RR
          </div>
          <span>Rory Regentina</span>
          <span className="hidden sm:inline-block text-xs bg-mint px-2 py-0.5 rounded-full font-bold border border-ink">
            👋 Personal Site
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-canvas/90 backdrop-blur-md px-3 py-1.5 rounded-full sticker-pill">
          <a href="#dual-world" className="px-3.5 py-1.5 rounded-full text-sm font-bold text-ink hover:bg-marigold transition-colors">
            My Dual World
          </a>
          <a href="#stories" className="px-3.5 py-1.5 rounded-full text-sm font-bold text-ink hover:bg-turquoise transition-colors hover:text-white">
            Field Stories
          </a>
          <a href="#gallery" className="px-3.5 py-1.5 rounded-full text-sm font-bold text-ink hover:bg-coral transition-colors hover:text-white">
            Photo Strip
          </a>
          <a href="#contact" className="px-3.5 py-1.5 rounded-full text-sm font-bold text-ink hover:bg-mint transition-colors">
            Get in Touch
          </a>
        </nav>

        {/* Right Utility: Live UTC+7 Badge & Contact CTA */}
        <div className="flex items-center gap-2">
          {/* UTC+7 Clock Pill */}
          <div className="hidden lg:flex items-center gap-2 bg-canvas px-3.5 py-2 rounded-full sticker-pill text-xs font-bold text-ink">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mint-dark"></span>
            </span>
            <Clock className="w-3.5 h-3.5 text-ink-muted" />
            <span>{time || 'Bandung UTC+7'}</span>
            <span className="text-ink-muted hidden xl:inline">• Async Active</span>
          </div>

          {/* Say Hi Button */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95, rotate: 1 }}
            onClick={triggerConfetti}
            className="sticker-btn bg-coral hover:bg-coral-dark text-white font-heading font-black text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sticker cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-marigold fill-marigold" />
            <span>Say Hi!</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden sticker-btn bg-canvas p-2 rounded-full text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="md:hidden pointer-events-auto mt-3 max-w-sm mx-auto bg-canvas border-2 border-ink shadow-sticker-lg rounded-2xl p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-2 border-b border-ink/15 text-xs font-bold text-ink-muted">
              <span>Bandung (UTC+7): {time}</span>
              <span className="text-mint-dark font-extrabold">● Async Ready</span>
            </div>
            <a 
              href="#dual-world" 
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 font-bold rounded-lg hover:bg-marigold text-ink transition-colors"
            >
              🎯 My Dual World (SEO &amp; Travel)
            </a>
            <a 
              href="#stories" 
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 font-bold rounded-lg hover:bg-turquoise hover:text-white text-ink transition-colors"
            >
              🌏 Southeast Asia Field Stories
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 font-bold rounded-lg hover:bg-coral hover:text-white text-ink transition-colors"
            >
              📷 Photo Strip
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileOpen(false)}
              className="py-2 px-3 font-bold rounded-lg hover:bg-mint text-ink transition-colors"
            >
              📬 Direct Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
