import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { RouteItem } from '../data/portfolioData';

interface RouteModalProps {
  route: RouteItem | null;
  onClose: () => void;
}

export const RouteModal: React.FC<RouteModalProps> = ({ route, onClose }) => {
  if (!route) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian-deep/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', bounce: 0.2 }}
          className="relative max-w-2xl w-full dark-glass rounded-3xl hairline-border p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full dark-glass hairline-border text-ivory hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-glow uppercase tracking-wider">
              {route.chapter}
            </span>
            <span className="text-ivory-dim">•</span>
            <span className="text-xs font-mono text-amber-glow">{route.coordinates}</span>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-ivory leading-tight mb-4">
            {route.title}
          </h3>

          <div className="p-4 rounded-2xl bg-surface-elevated hairline-border font-serif italic text-sm sm:text-base text-ivory leading-relaxed mb-6">
            “{route.narrative}”
          </div>

          {/* E-E-A-T Signal Highlight */}
          <div className="mb-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-rose-glow uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Search E-E-A-T Signal</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-elevated hairline-border text-xs font-mono text-ivory">
              {route.eeatSignal}
            </div>
          </div>

          {/* Key Field Takeaways */}
          <div className="mb-8">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-ivory-dim mb-3">
              Field Observations &amp; Itinerary Highlights:
            </h4>
            <div className="space-y-2">
              {route.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory-muted">
                  <CheckCircle2 className="w-4 h-4 text-emerald-glow shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5 flex-wrap">
            <span className="text-xs font-mono text-ivory-dim">LocallyTrip Verified Itinerary</span>
            <a
              href="https://locallytrip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-ivory text-obsidian font-heading font-black text-xs flex items-center gap-1.5 hover:bg-white transition-colors"
            >
              <span>Explore on LocallyTrip</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
