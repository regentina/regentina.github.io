import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CurtainAbout: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative z-10 bg-[#0D0D0D] rounded-t-[2.5rem] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pt-24 pb-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Metadata Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pb-8 hairline-border-b mb-16">
          <span>01 / Manifesto &amp; Performance</span>
          <span>Search Architecture</span>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          <div className="lg:col-span-4">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
              A Quiet Obsession with Precision &amp; Human Cadence.
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              I operate at the intersection of technical search architecture and narrative journalism. As search evolves beyond the ten blue links toward generative answer engines (AEO/GEO), visibility belongs to brands that combine flawless engineering with verified, real-world human experience.
            </p>
            <p>
              My background in Hotel Management at <span className="text-white font-normal">STIEPAR YAPARI AKTRIPA</span> gave me an unfair advantage in digital architecture: the concierge mindset. In hospitality, luxury is anticipating guest desire before they speak. In modern search, it is structuring content so readers find direct answers effortlessly, reducing cognitive friction and triggering high-confidence citations across ChatGPT, Perplexity, and Google AI Overviews.
            </p>
            <div className="pt-4 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <span>● Async-First Workflow</span>
              <span>● Sub-Second LCP Execution</span>
              <span>● Zero Technical Debt</span>
            </div>
          </div>

        </div>

        {/* Editorial Metrics Strip (Clean Hairline Grid) */}
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Verified Benchmarks
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y divide-x divide-white/10 bg-[#121212]/50">
            {PORTFOLIO_DATA.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight mb-4">
                  {metric.value}
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white font-medium mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-zinc-400 font-light leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
