import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-3 border-ink bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Personal Signature */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-2xl bg-coral flex items-center justify-center text-white font-heading font-black text-sm border-2 border-ink shadow-sticker">
            RR
          </div>
          <div>
            <div className="font-heading font-black text-base text-ink">
              Rory Regentina
            </div>
            <p className="text-xs font-semibold text-ink-muted">
              Built with React, Vite, Tailwind CSS &amp; Framer Motion • Bandung (UTC+7)
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="sticker-btn bg-canvas hover:bg-marigold text-ink font-heading font-black text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
