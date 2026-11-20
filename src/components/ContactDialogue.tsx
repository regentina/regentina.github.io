import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MessageSquare, Send, Check, Copy, Sparkles, 
  ExternalLink, Globe, ArrowUpRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactDialogue: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "AEO / GEO & AI Answer Engine Optimization",
    "100/100 Core Web Vitals WordPress Speedup"
  ]);

  const topics = [
    "AEO / GEO & AI Answer Engine Optimization",
    "100/100 Core Web Vitals WordPress Speedup",
    "Proprietary AI Prompt Engineering Frameworks",
    "Southeast Asia Experiential Travel Storytelling",
    "High-Velocity 13-Page Website Deployment"
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.85 }
    });

    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const generateMessage = () => {
    let msg = `Hi Rory! I reviewed your editorial portfolio (regentina.github.io).\n\nI would love to explore collaborating with you on:\n`;
    if (selectedTopics.length > 0) {
      selectedTopics.forEach((t) => {
        msg += `• ${t}\n`;
      });
    } else {
      msg += `• General Search & AI Content Architecture\n`;
    }
    msg += `\nLooking forward to discussing details asynchronously!`;
    return msg;
  };

  const waUrl = `https://wa.me/6281122833696?text=${encodeURIComponent(generateMessage())}`;
  const mailUrl = `mailto:rygentina@gmail.com?subject=${encodeURIComponent("Collaboration Inquiry via regentina.github.io")}&body=${encodeURIComponent(generateMessage())}`;

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-white/5">
      
      {/* Ambient Lighting Node */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] ambient-glow-cyan blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark-glass hairline-border mb-4 font-mono text-xs text-amber-glow uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Chapter 04 / Direct Dialogue &amp; Async Inquiry</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight mb-4">
            Let's Engineer Something Exceptional
          </h2>
          <p className="text-ivory-muted text-base sm:text-lg leading-relaxed">
            Available for asynchronous strategic consulting, AEO entity architecture, 100/100 Core Web Vitals optimization, and high-impact Southeast Asia travel curation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Verified Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="rounded-3xl dark-glass hairline-border p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center text-amber-glow shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-glow">Direct Email</div>
                  <div className="font-mono text-sm sm:text-base text-ivory break-all font-semibold">
                    rygentina@gmail.com
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => handleCopy("rygentina@gmail.com", "email")}
                className="p-3 rounded-xl dark-glass hairline-border text-ivory hover:text-amber-glow transition-colors cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copiedItem === "email" ? (
                  <Check className="w-4 h-4 text-emerald-glow" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </motion.button>
            </div>

            {/* WhatsApp Card with 1-Click Copy & Direct Chat */}
            <div className="rounded-3xl dark-glass hairline-border p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-glow/10 border border-emerald-glow/20 flex items-center justify-center text-emerald-glow shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-glow">WhatsApp / Phone</div>
                  <div className="font-mono text-sm sm:text-base text-ivory font-semibold">
                    +62 811-2283-3696
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleCopy("+6281122833696", "wa")}
                  className="p-3 rounded-xl dark-glass hairline-border text-ivory hover:text-emerald-glow transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedItem === "wa" ? (
                    <Check className="w-4 h-4 text-emerald-glow" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
                <a
                  href="https://wa.me/6281122833696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 rounded-xl bg-emerald-glow text-obsidian font-heading font-black text-xs flex items-center gap-1 hover:bg-emerald-300 transition-colors"
                >
                  Chat <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Verified Platforms Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.links.locallytrip}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl dark-glass hairline-border p-3.5 text-center flex flex-col items-center justify-center gap-1 hover:bg-surface-elevated transition-colors group"
              >
                <Globe className="w-4 h-4 text-amber-glow group-hover:scale-110 transition-transform" />
                <span className="font-heading font-bold text-xs text-ivory">LocallyTrip</span>
                <span className="text-[10px] font-mono text-ivory-dim">LV 7 Creator</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl dark-glass hairline-border p-3.5 text-center flex flex-col items-center justify-center gap-1 hover:bg-surface-elevated transition-colors group"
              >
                <Sparkles className="w-4 h-4 text-cyan-glow group-hover:scale-110 transition-transform" />
                <span className="font-heading font-bold text-xs text-ivory">Upwork</span>
                <span className="text-[10px] font-mono text-ivory-dim">Top Rated</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl dark-glass hairline-border p-3.5 text-center flex flex-col items-center justify-center gap-1 hover:bg-surface-elevated transition-colors group"
              >
                <svg className="w-4 h-4 text-rose-glow fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z"/>
                </svg>
                <span className="font-heading font-bold text-xs text-ivory">LinkedIn</span>
                <span className="text-[10px] font-mono text-ivory-dim">Network</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Brief Builder (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl dark-glass hairline-border p-6 sm:p-8">
            <h3 className="font-heading font-black text-xl text-ivory mb-2">
              Direct Project Brief Builder
            </h3>
            <p className="text-xs sm:text-sm text-ivory-muted mb-6">
              Select key deliverables to generate an instant, structured asynchronous inquiry message:
            </p>

            {/* Topic Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {topics.map((topic) => {
                const isSelected = selectedTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-ivory text-obsidian font-bold shadow-md'
                        : 'dark-glass text-ivory-muted hover:text-ivory hairline-border'
                    }`}
                  >
                    <span>{isSelected ? '✓' : '+'}</span>
                    <span>{topic}</span>
                  </button>
                );
              })}
            </div>

            {/* Generated Preview */}
            <div className="p-4 rounded-2xl bg-surface-elevated hairline-border mb-6">
              <div className="text-[10px] font-mono text-ivory-dim uppercase tracking-wider mb-2">
                Inquiry Dispatch Preview:
              </div>
              <pre className="font-mono text-xs text-ivory whitespace-pre-wrap leading-relaxed select-all">
                {generateMessage()}
              </pre>
            </div>

            {/* Dispatch Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-glow hover:bg-emerald-300 text-obsidian font-heading font-black text-xs sm:text-sm flex-1 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch via WhatsApp</span>
              </a>

              <a
                href={mailUrl}
                className="px-6 py-3.5 rounded-2xl bg-ivory hover:bg-white text-obsidian font-heading font-black text-xs sm:text-sm flex-1 flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch via Email</span>
              </a>
            </div>

          </div>

        </div>

        {/* Copy Notification Toast */}
        <AnimatePresence>
          {copiedItem && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 right-6 z-50 dark-glass px-4 py-2.5 rounded-full text-xs font-mono font-bold text-ivory hairline-border flex items-center gap-2 shadow-2xl"
            >
              <Check className="w-4 h-4 text-emerald-glow" />
              <span>Copied {copiedItem} to clipboard! 🎉</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
