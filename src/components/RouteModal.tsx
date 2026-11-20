import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, RouteCard } from '../data/portfolioData';

interface RouteModalProps {
  route: RouteCard | null;
  onClose: () => void;
}

export const RouteModal: React.FC<RouteModalProps> = ({ route, onClose }) => {
  if (!route) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060606]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative max-w-2xl w-full bg-[#121212] border border-white/15 rounded-3xl p-8 sm:p-10 z-10 max-h-[85vh] overflow-y-auto shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Chapter Metadata */}
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
            <span>{route.number} / {route.country}</span>
            <span>•</span>
            <span className="text-[#E5D5C5]">{route.coordinates}</span>
          </div>

          <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light leading-tight mb-4">
            {route.title}
          </h3>

          <p className="font-editorial italic text-base sm:text-lg text-zinc-300 font-light leading-relaxed pl-4 border-l border-white/20 mb-8">
            “{route.narrative}”
          </p>

          {/* E-E-A-T Signal */}
          <div className="mb-8 p-5 rounded-2xl bg-[#161616] border border-white/5 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#E5D5C5]">
              Verified E-E-A-T Experience Signal:
            </div>
            <div className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {route.eeatSignal}
            </div>
          </div>

          {/* Key Field Observations */}
          <div className="mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Field Observations &amp; Itinerary Takeaways:
            </div>
            <div className="space-y-2.5">
              {route.takeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light">
                  <span className="text-[#E5D5C5] font-mono text-xs mt-0.5">❯</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
            <span className="text-xs font-mono text-zinc-500">LocallyTrip Verified Itinerary</span>
            <a
              href={PORTFOLIO_DATA.profile.links.locallytrip}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#E5D5C5] transition-colors flex items-center gap-1.5"
            >
              <span>Explore on LocallyTrip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
