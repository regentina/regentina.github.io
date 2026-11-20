import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Search, Sparkles, Trophy, Award, Map, 
  Heart, Coffee, Clock, CheckCircle2, ChevronRight, Zap, Flame 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const BentoDualWorld: React.FC = () => {
  const [activeLabTab, setActiveLabTab] = useState<'aeo' | 'traditional'>('aeo');

  return (
    <section id="dual-world" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="sticker-pill bg-marigold-light text-marigold-dark px-4 py-1 rounded-full inline-flex items-center gap-2 font-heading font-extrabold text-xs uppercase tracking-wider mb-4 border border-ink">
            <Sparkles className="w-3.5 h-3.5 text-coral" />
            <span>My Dual World</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Where Deep Search Tech Meets Pure Wanderlust
          </h2>
          <p className="text-ink-muted text-base sm:text-lg">
            I don't fit into a corporate agency box. By day, I architect AI answer citations and 100/100 PageSpeed sites. By heart, I guide travelers and uncover secret culinary trails across Southeast Asia.
          </p>
        </div>

        {/* Asymmetrical Colorful Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ================================================================
              CARD A: Search & AI Lab (7 cols on md+)
              Interactive Toggle: Traditional SEO vs AI Answer Optimization
              ================================================================ */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-3 border-ink shadow-sticker-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-turquoise flex items-center justify-center text-white border-2 border-ink shadow-sticker">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-ink">The Search &amp; AI Lab</h3>
                    <p className="text-xs font-bold text-ink-muted">Modern GEO / AEO vs. Legacy SEO</p>
                  </div>
                </div>

                {/* Interactive Toggle */}
                <div className="bg-canvas border-2 border-ink p-1 rounded-2xl flex gap-1 shadow-sm">
                  <button
                    onClick={() => setActiveLabTab('aeo')}
                    className={`px-3 py-1.5 rounded-xl font-heading font-black text-xs transition-all ${
                      activeLabTab === 'aeo'
                        ? 'bg-turquoise text-white border-2 border-ink shadow-sticker'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    ⚡ Modern AEO / GEO
                  </button>
                  <button
                    onClick={() => setActiveLabTab('traditional')}
                    className={`px-3 py-1.5 rounded-xl font-heading font-black text-xs transition-all ${
                      activeLabTab === 'traditional'
                        ? 'bg-marigold text-ink border-2 border-ink shadow-sticker'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    Standard SEO
                  </button>
                </div>
              </div>

              {/* Dynamic View Content */}
              <AnimatePresence mode="wait">
                {activeLabTab === 'aeo' ? (
                  <motion.div
                    key="aeo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-2xl bg-turquoise-light border-2 border-ink">
                      <div className="flex items-center gap-2 font-heading font-black text-xs text-turquoise-dark uppercase tracking-wide mb-1">
                        <Flame className="w-4 h-4 text-coral" /> Answer Engine Optimization
                      </div>
                      <p className="text-sm font-semibold text-ink leading-relaxed">
                        “Helping brands get directly quoted in ChatGPT Search, Perplexity Pro &amp; Google AI Overviews using conversational entity mapping and structured Schema.org JSON-LD.”
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-canvas border border-ink/30 text-center">
                        <div className="font-heading font-black text-2xl text-coral">5+ Yrs</div>
                        <div className="text-[11px] font-bold text-ink-muted">Search Authority</div>
                      </div>
                      <div className="p-3 rounded-xl bg-canvas border border-ink/30 text-center">
                        <div className="font-heading font-black text-2xl text-mint-dark">-35%</div>
                        <div className="text-[11px] font-bold text-ink-muted">AI Draft Time</div>
                      </div>
                      <div className="p-3 rounded-xl bg-canvas border border-ink/30 text-center">
                        <div className="font-heading font-black text-2xl text-turquoise-dark">100/100</div>
                        <div className="text-[11px] font-bold text-ink-muted">PageSpeed CWV</div>
                      </div>
                      <div className="p-3 rounded-xl bg-canvas border border-ink/30 text-center">
                        <div className="font-heading font-black text-2xl text-marigold-dark">2 Sites</div>
                        <div className="text-[11px] font-bold text-ink-muted">Daily Full Launch</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="traditional"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-2xl bg-marigold-light border-2 border-ink">
                      <div className="flex items-center gap-2 font-heading font-black text-xs text-marigold-dark uppercase tracking-wide mb-1">
                        <Search className="w-4 h-4 text-ink" /> The 10-Blue-Links Era
                      </div>
                      <p className="text-sm font-semibold text-ink leading-relaxed">
                        Traditional keyword stuffing and rigid anchor text hunting are dying. Users want direct, trustworthy answers without digging through ad-choked search results.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-canvas border border-ink/20 text-xs font-semibold text-ink-muted leading-relaxed">
                      💡 <strong>Rory's Stance:</strong> Instead of fighting AI summaries, I structure content so AI models treat our website as the canonical knowledge graph authority.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Proof Strip */}
            <div className="mt-6 pt-4 border-t-2 border-ink/10 flex items-center justify-between text-xs font-bold text-ink-muted">
              <span>Stack: WordPress, Elementor Pro, Custom Prompts &amp; Schema</span>
              <span className="text-mint-dark">● Zero Technical Debt</span>
            </div>
          </motion.div>

          {/* ================================================================
              CARD B: LocallyTrip Creator Card (5 cols on md+)
              Gamified XP Bar & Verified Contributor Metrics
              ================================================================ */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="md:col-span-5 bg-marigold-light rounded-3xl p-6 sm:p-8 border-3 border-ink shadow-sticker-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="sticker-pill bg-coral text-white text-xs font-heading font-black px-3 py-1 rounded-full shadow-sticker flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-marigold fill-marigold" />
                  <span>LocallyTrip Verified</span>
                </div>
                <span className="font-heading font-black text-xs text-ink uppercase tracking-wide">
                  Top 1% Creator
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-heading font-black text-2xl text-ink mb-1">
                  LV 7 • Journey Specialist
                </h3>
                <p className="text-xs font-bold text-ink-muted">
                  Storyteller &amp; Cultural Experience Curator across Southeast Asia
                </p>
              </div>

              {/* Gamified XP Progress Bar */}
              <div className="bg-white p-4 rounded-2xl border-2 border-ink mb-4 shadow-sm">
                <div className="flex justify-between items-center text-xs font-heading font-black text-ink mb-2">
                  <span>Level 7 Progress</span>
                  <span className="text-coral">5,425 XP</span>
                </div>
                <div className="w-full h-3.5 bg-canvas rounded-full border-2 border-ink overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '84%' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-coral via-marigold to-mint rounded-full"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-ink-muted mt-1.5">
                  <span>Level 6 (3,500 XP)</span>
                  <span>Level 8 (6,000 XP)</span>
                </div>
              </div>

              {/* Creator Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-ink/40">
                  <div className="font-heading font-black text-lg text-ink">14</div>
                  <div className="text-[11px] font-bold text-ink-muted">Tours Hosted</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-ink/40">
                  <div className="font-heading font-black text-lg text-ink">23</div>
                  <div className="text-[11px] font-bold text-ink-muted">Stories Published</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-ink/40">
                  <div className="font-heading font-black text-lg text-ink">18</div>
                  <div className="text-[11px] font-bold text-ink-muted">Meetups</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-ink/40">
                  <div className="font-heading font-black text-lg text-mint-dark">22 ★★★★★</div>
                  <div className="text-[11px] font-bold text-ink-muted">Guest Reviews</div>
                </div>
              </div>
            </div>

            <a 
              href="https://locallytrip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-5 sticker-btn bg-white hover:bg-canvas text-ink text-xs font-heading font-black py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-center"
            >
              <span>View Verified LocallyTrip Profile</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* ================================================================
              CARD C: Hospitality Roots (Hotel Management STIEPAR)
              (6 cols on md+)
              ================================================================ */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="md:col-span-6 bg-mint-light rounded-3xl p-6 sm:p-8 border-3 border-ink shadow-sticker-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-mint flex items-center justify-center border-2 border-ink">
                  <Heart className="w-4 h-4 text-ink" />
                </div>
                <span className="font-heading font-black text-xs text-mint-dark uppercase tracking-wider">
                  Academic Foundation
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-ink mb-1">
                The Hotelier's Secret in SEO
              </h3>
              <p className="text-xs font-bold text-ink-muted mb-4">
                Bachelor's Degree in Hotel Management • <strong>STIEPAR YAPARI AKTRIPA</strong>
              </p>

              <blockquote className="p-4 rounded-2xl bg-white border-2 border-ink text-sm text-ink leading-relaxed font-medium italic relative">
                “In hotel management, luxury isn't marble floors; it's anticipating what your guest needs before they speak. That's how I write content. Every heading and sentence resolves user anxiety before they bounce.”
              </blockquote>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
              <span className="bg-white px-3 py-1 rounded-full border border-ink/40">🛎️ Anticipatory UX</span>
              <span className="bg-white px-3 py-1 rounded-full border border-ink/40">✨ Empathy-Led Copy</span>
              <span className="bg-white px-3 py-1 rounded-full border border-ink/40">🎯 Zero Bounce Rate</span>
            </div>
          </motion.div>

          {/* ================================================================
              CARD D: Now / Async Rhythm (UTC+7 Bandung)
              (6 cols on md+)
              ================================================================ */}
          <motion.div 
            whileHover={{ y: -3 }}
            className="md:col-span-6 bg-coral-light rounded-3xl p-6 sm:p-8 border-3 border-ink shadow-sticker-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-coral flex items-center justify-center text-white border-2 border-ink">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-black text-xs text-coral-dark uppercase tracking-wider">
                    Working Rhythm
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-mint-dark bg-white px-2.5 py-1 rounded-full border border-ink">
                  <span className="w-2 h-2 rounded-full bg-mint-dark animate-pulse"></span>
                  <span>Async-First</span>
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl text-ink mb-1">
                Bandung to Everywhere Worldwide
              </h3>
              <p className="text-xs font-bold text-ink-muted mb-4">
                Autonomous collaboration across US, Europe &amp; APAC timezones
              </p>

              <div className="space-y-2 text-xs font-semibold text-ink">
                <div className="p-2.5 rounded-xl bg-white border border-ink/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mint-dark shrink-0" />
                  <span>Clear Loom video overviews &amp; detailed Notion documentation</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-ink/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mint-dark shrink-0" />
                  <span>Proactive daily standups with zero micro-management required</span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t-2 border-ink/10 flex items-center justify-between text-xs font-bold text-ink-muted">
              <span>Timezone: UTC+7 (Asia/Jakarta)</span>
              <span className="text-ink font-extrabold">🚀 Available for Global Projects</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
