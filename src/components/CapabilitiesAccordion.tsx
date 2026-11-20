import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CapabilitiesAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("modern-search");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="capabilities" className="relative z-10 bg-[#0D0D0D] py-24 px-6 sm:px-10 hairline-border-t">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pb-8 hairline-border-b mb-12">
          <span>02 / Capabilities</span>
          <span>Core Competencies</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight mb-4">
            Four Strategic Pillars for Algorithmic &amp; Human Authority.
          </h2>
          <p className="text-zinc-400 font-light text-base leading-relaxed">
            Minimal friction. Clean semantic markup. Proven workflows tested across high-velocity agency production and independent international publications.
          </p>
        </div>

        {/* Minimalist Full-Width Accordion Rows */}
        <div className="border-t border-white/10">
          {PORTFOLIO_DATA.capabilities.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-white/10 transition-colors"
              >
                {/* Clickable Header Row */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`w-full py-8 sm:py-10 flex items-center justify-between gap-6 text-left transition-all duration-300 cursor-pointer ${
                    isOpen ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 sm:gap-12 flex-1">
                    <span className="font-mono text-xs tracking-widest text-zinc-500">
                      {item.number}
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-light text-white">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-zinc-500">
                      {item.category}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-90 bg-white text-black' : ''}`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Smooth Expandable Content Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/5">
                        
                        <div className="lg:col-span-5">
                          <p className="text-zinc-300 font-light text-base sm:text-lg leading-relaxed mb-6">
                            {item.summary}
                          </p>
                          <div className="text-xs font-mono tracking-widest uppercase text-[#E5D5C5]">
                            Key Deliverable: {item.deliverable}
                          </div>
                        </div>

                        <div className="lg:col-span-7">
                          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                            Operational Execution:
                          </div>
                          <ul className="space-y-3">
                            {item.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light">
                                <span className="text-[#E5D5C5] font-mono text-xs mt-0.5">❯</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
