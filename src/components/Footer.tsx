import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#060606] py-16 px-6 sm:px-10 hairline-border-t">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-zinc-500">
        
        <div>
          <span>© 2026 Rory Regentina. All rights reserved.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
