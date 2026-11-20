import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-obsidian-deep py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Personal Signature */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-surface-elevated hairline-border flex items-center justify-center text-ivory font-heading font-black text-xs">
            RR
          </div>
          <div>
            <div className="font-heading font-bold text-sm text-ivory">
              Rory Regentina
            </div>
            <p className="text-xs font-mono text-ivory-dim">
              Dark Editorial Portfolio • Bandung (UTC+7, Async Worldwide)
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full dark-glass hairline-border text-xs font-mono text-ivory hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
