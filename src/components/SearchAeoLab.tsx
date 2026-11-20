import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Search, Sparkles, Terminal, Flame, Zap, 
  CheckCircle2, ArrowRight, ShieldCheck, Layers 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SearchAeoLab: React.FC = () => {
  const [selectedEngineIndex, setSelectedEngineIndex] = useState(0);

  const engines = PORTFOLIO_DATA.aeoLab.citations;

  return (
    <section id="search-lab" className="py-24 md:py-32 relative">
      
      {/* Background Lighting Node */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] ambient-glow-cyan blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark-glass hairline-border mb-4 font-mono text-xs text-cyan-glow uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Chapter 02 / The Search &amp; AI Lab</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight mb-4">
            Engineered for Modern Answer Engines. Crafted for Humans.
          </h2>
          <p className="text-ivory-muted text-base sm:text-lg leading-relaxed">
            Standard search has shifted from ten blue links to conversational answer engines. Here is how I combine technical CMS precision, Schema entity mapping, and proprietary prompt engineering to earn high-confidence citations.
          </p>
        </div>

        {/* Key Benchmarks Grid (Sticky / Scroll-Linked Metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {PORTFOLIO_DATA.benchmarks.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-2xl dark-glass hairline-border hairline-border-hover transition-all ${
                idx === 4 ? 'col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`font-heading font-black text-3xl sm:text-4xl ${item.glow}`}>
                  {item.metric}
                </span>
                <span className="font-heading font-bold text-sm text-ivory-muted">
                  {item.suffix}
                </span>
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-ivory mb-1">
                {item.label}
              </h3>
              <p className="text-[11px] text-ivory-dim leading-snug">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-Column Matrix: Technical Architecture vs Interactive Citation Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 4 Core Pillars of Search & AI (6 cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            
            {/* Pillar 1: AEO & GEO Architecture */}
            <div className="p-6 rounded-2xl dark-glass hairline-border hairline-border-hover transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-glow/10 border border-cyan-glow/20 flex items-center justify-center text-cyan-glow">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-ivory">Answer Engine Optimization (AEO/GEO)</h3>
                  <div className="text-[11px] font-mono text-cyan-glow">Perplexity Pro • ChatGPT Search • AI Overviews</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed">
                Structuring digital entities with comprehensive Schema.org JSON-LD and conversational H1–H3 answering blocks so AI models cite your domain as the canonical authority.
              </p>
            </div>

            {/* Pillar 2: 100/100 Core Web Vitals */}
            <div className="p-6 rounded-2xl dark-glass hairline-border hairline-border-hover transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-glow/10 border border-emerald-glow/20 flex items-center justify-center text-emerald-glow">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-ivory">Technical CMS &amp; Core Web Vitals</h3>
                  <div className="text-[11px] font-mono text-emerald-glow">WordPress • Elementor Pro • Yoast SEO</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed">
                Consistently hitting 100/100 Google PageSpeed scores with zero layout shift (CLS), sub-second Largest Contentful Paint (LCP), and high-velocity launches of up to 2 complete sites/day.
              </p>
            </div>

            {/* Pillar 3: AI Prompt Operations & Editorial QA */}
            <div className="p-6 rounded-2xl dark-glass hairline-border hairline-border-hover transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center text-amber-glow">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base text-ivory">Custom Prompt Frameworks &amp; Human QA</h3>
                  <div className="text-[11px] font-mono text-amber-glow">35% Faster Drafting • Zero AI Sludge</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed">
                Multi-step research and structuring prompts paired with human-in-the-loop editing to eliminate hallucination, ensure E-E-A-T compliance, and protect authentic voice.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive AI Citation Simulator (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl dark-glass hairline-border p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-glow">Interactive Simulator</span>
                  <h3 className="font-heading font-black text-xl text-ivory">How Rory's Architecture Gets Cited</h3>
                </div>
                
                {/* Engine Selector Buttons */}
                <div className="flex gap-1 bg-surface-elevated p-1 rounded-xl hairline-border">
                  {engines.map((engine, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedEngineIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                        selectedEngineIndex === idx
                          ? 'bg-white/10 text-ivory border border-white/20 font-bold'
                          : 'text-ivory-dim hover:text-ivory'
                      }`}
                    >
                      {engine.engine.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Query Bar */}
              <div className="p-3.5 rounded-xl bg-obsidian-deep hairline-border mb-6">
                <div className="text-[10px] font-mono text-ivory-dim uppercase tracking-wider mb-1">
                  Query String:
                </div>
                <div className="font-mono text-xs sm:text-sm text-amber-glow">
                  &gt; "{PORTFOLIO_DATA.aeoLab.queryExample}"
                </div>
              </div>

              {/* Engine Response Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEngineIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-2xl bg-surface-elevated hairline-border border-l-4 border-l-cyan-glow mb-6"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-heading font-bold text-xs text-ivory uppercase tracking-wide">
                      {engines[selectedEngineIndex].engine}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-glow bg-emerald-glow/10 px-2 py-0.5 rounded-full border border-emerald-glow/20">
                      ✓ {engines[selectedEngineIndex].badge}
                    </span>
                  </div>

                  <p className="font-serif italic text-sm sm:text-base text-ivory leading-relaxed mb-4">
                    {engines[selectedEngineIndex].quote}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-ivory-dim">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-glow" />
                    <span>Entity: Rory Regentina • Schema: Person • E-E-A-T Verified</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-ivory-dim">
              <span>Verified Search Signal</span>
              <span className="text-cyan-glow">Deterministic Citation Probability: 99.4%</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
