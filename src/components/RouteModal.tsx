import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Sparkles, Compass, CheckCircle2, ExternalLink } from 'lucide-react';
import { TravelRoute } from '../data/portfolioData';

interface RouteModalProps {
  route: TravelRoute | null;
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
          className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', bounce: 0.25 }}
          className="relative max-w-xl w-full bg-white rounded-3xl border-3 border-ink shadow-sticker-xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 sticker-btn bg-canvas p-2 rounded-full text-ink hover:bg-coral hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">{route.flag}</span>
            <div className="sticker-pill bg-canvas text-ink text-xs font-heading font-black px-3 py-1 rounded-full border border-ink">
              {route.location} • {route.coordinates}
            </div>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-ink leading-tight mb-4">
            {route.title}
          </h3>

          <div className="p-4 rounded-2xl bg-canvas border-2 border-ink text-sm font-medium text-ink leading-relaxed mb-6 italic">
            “{route.storyExcerpt}”
          </div>

          {/* E-E-A-T Signal Highlight */}
          <div className="mb-6">
            <div className="flex items-center gap-1.5 text-xs font-heading font-black text-coral-dark uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-coral" />
              <span>Search E-E-A-T &amp; Hospitality Signal</span>
            </div>
            <div className="p-3.5 rounded-xl bg-coral-light border border-ink/40 text-xs font-bold text-ink">
              {route.eeatSignal}
            </div>
          </div>

          {/* Key Field Takeaways */}
          <div className="mb-8">
            <h4 className="font-heading font-black text-sm text-ink uppercase tracking-wider mb-3">
              Field Observations &amp; Itinerary Highlights:
            </h4>
            <div className="space-y-2">
              {route.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-semibold text-ink">
                  <CheckCircle2 className="w-4 h-4 text-mint-dark shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t-2 border-ink/10 flex-wrap">
            <span className="text-xs font-bold text-ink-muted">Published on LocallyTrip</span>
            <a
              href="https://locallytrip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker-btn bg-coral hover:bg-coral-dark text-white font-heading font-black text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5"
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
