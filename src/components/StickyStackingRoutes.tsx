import React from 'react';
import { ArrowUpRight, Compass, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA, RouteCard } from '../data/portfolioData';

interface StickyStackingRoutesProps {
  onSelectRoute: (route: RouteCard) => void;
}

export const StickyStackingRoutes: React.FC<StickyStackingRoutesProps> = ({ onSelectRoute }) => {
  return (
    <section id="routes" className="relative z-10 bg-[#060606] py-24 px-6 sm:px-10 hairline-border-t">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pb-8 hairline-border-b mb-12">
          <span>03 / Experiential E-E-A-T</span>
          <span>Southeast Asia Stories</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight mb-4">
            Fieldwork Across Southeast Asia.
          </h2>
          <p className="text-zinc-400 font-light text-base leading-relaxed">
            Real search experience signals require boots on the ground. Six published itineraries for LocallyTrip documenting local heritage, high-altitude terrain, and street food masters.
          </p>
        </div>

        {/* ============================================================
            VERTICAL STICKY STACKING CARD SEQUENCE
            Each card has `sticky top-24` with incremental offset
            so subsequent cards glide OVER previous ones!
            ============================================================ */}
        <div className="space-y-12 pb-16">
          {PORTFOLIO_DATA.routes.map((route, index) => {
            // Incremental sticky top offsets so they stack elegantly
            const stickyTop = 96 + index * 12; // 96px, 108px, 120px...

            return (
              <div
                key={route.id}
                style={{ top: `${stickyTop}px` }}
                className="sticky rounded-3xl bg-[#121212] border border-white/10 shadow-[0_-10px_35px_rgba(0,0,0,0.6)] p-8 sm:p-12 transition-all duration-300 group cursor-pointer hover:border-white/20"
                onClick={() => onSelectRoute(route)}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Index & Location (4 cols) */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
                        <span>{route.number} / {route.country}</span>
                        <span className="text-[#E5D5C5] font-normal">{route.coordinates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{route.destination}</span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light leading-snug group-hover:text-[#E5D5C5] transition-colors">
                        {route.title}
                      </h3>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono tracking-widest uppercase text-zinc-500 group-hover:text-white transition-colors">
                      <span>Read Field Notes</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Right Column: Narrative & E-E-A-T Signal (8 cols) */}
                  <div className="lg:col-span-8 space-y-6">
                    <p className="font-editorial italic text-lg sm:text-xl text-zinc-200 font-light leading-relaxed pl-4 border-l border-white/15">
                      “{route.narrative}”
                    </p>

                    <div className="p-5 rounded-2xl bg-[#161616] border border-white/5 space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#E5D5C5]">
                        Verified E-E-A-T Signal:
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        {route.eeatSignal}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {route.takeaways.map((takeaway, tIdx) => (
                        <div key={tIdx} className="p-3 rounded-xl bg-[#0D0D0D] border border-white/5 text-[11px] text-zinc-400 font-light leading-snug">
                          {takeaway}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
