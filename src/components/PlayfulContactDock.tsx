import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MessageSquare, Send, Check, Copy, Sparkles, 
  ExternalLink, Heart, Globe, ArrowUpRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PlayfulContactDock: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "AEO / GEO & AI Answer Engine Strategy",
    "100/100 Core Web Vitals Optimization"
  ]);

  const topics = [
    "AEO / GEO & AI Answer Engine Strategy",
    "100/100 Core Web Vitals Optimization",
    "Proprietary AI Prompt Engineering",
    "Southeast Asia Travel Storytelling",
    "Rapid 13-Page Website Launch"
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    
    // Confetti celebration
    confetti({
      particleCount: 50,
      spread: 70,
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
    let msg = `Hi Rory! 👋 I was exploring your personal site (regentina.github.io).\n\nI'd love to chat with you about:\n`;
    if (selectedTopics.length > 0) {
      selectedTopics.forEach((t) => {
        msg += `• ${t}\n`;
      });
    } else {
      msg += `• General Search & AI Content Collaboration\n`;
    }
    msg += `\nLooking forward to connecting async!`;
    return msg;
  };

  const waUrl = `https://wa.me/6281122833696?text=${encodeURIComponent(generateMessage())}`;
  const mailUrl = `mailto:rygentina@gmail.com?subject=${encodeURIComponent("Saying Hi via regentina.github.io")}&body=${encodeURIComponent(generateMessage())}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="sticker-pill bg-coral-light text-coral-dark px-4 py-1 rounded-full inline-flex items-center gap-2 font-heading font-extrabold text-xs uppercase tracking-wider mb-4 border border-ink">
            <Sparkles className="w-3.5 h-3.5 text-coral" />
            <span>Say Hello</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            Let's Make the Web Joyful &amp; Fast
          </h2>
          <p className="text-ink-muted text-base sm:text-lg">
            Whether you want to dominate AI answer engine citations, speed up a WordPress site to 100/100, or chat about the best laksa in Penang—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Verified Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl p-6 border-3 border-ink shadow-sticker-lg flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-coral flex items-center justify-center text-white border-2 border-ink shadow-sticker">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-coral uppercase tracking-wide">Direct Email</div>
                  <div className="font-heading font-bold text-ink text-sm sm:text-base break-all">
                    rygentina@gmail.com
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleCopy("rygentina@gmail.com", "email")}
                className="sticker-btn bg-canvas hover:bg-marigold p-3 rounded-2xl text-ink shrink-0 cursor-pointer"
                title="Copy email"
              >
                {copiedItem === "email" ? (
                  <Check className="w-5 h-5 text-mint-dark stroke-[3]" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </motion.button>
            </motion.div>

            {/* WhatsApp Card with 1-Click Copy & Direct Link */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl p-6 border-3 border-ink shadow-sticker-lg flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-mint flex items-center justify-center text-ink border-2 border-ink shadow-sticker">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-black text-mint-dark uppercase tracking-wide">WhatsApp / Phone</div>
                  <div className="font-heading font-bold text-ink text-sm sm:text-base">
                    +62 811-2283-3696
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy("+6281122833696", "wa")}
                  className="sticker-btn bg-canvas hover:bg-marigold p-3 rounded-2xl text-ink shrink-0 cursor-pointer"
                  title="Copy number"
                >
                  {copiedItem === "wa" ? (
                    <Check className="w-5 h-5 text-mint-dark stroke-[3]" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </motion.button>
                <a
                  href="https://wa.me/6281122833696"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sticker-btn bg-mint text-ink font-heading font-black text-xs px-3.5 py-3 rounded-2xl flex items-center gap-1"
                >
                  Chat <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Profile Links Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.links.locallytrip}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn bg-marigold-light hover:bg-marigold text-ink p-3 rounded-2xl text-center flex flex-col items-center justify-center gap-1"
              >
                <Globe className="w-5 h-5 text-coral" />
                <span className="font-heading font-black text-xs">LocallyTrip</span>
                <span className="text-[10px] font-bold text-ink-muted">LV 7 Creator</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn bg-turquoise-light hover:bg-turquoise text-ink p-3 rounded-2xl text-center flex flex-col items-center justify-center gap-1 group"
              >
                <Sparkles className="w-5 h-5 text-turquoise-dark group-hover:text-white" />
                <span className="font-heading font-black text-xs group-hover:text-white">Upwork</span>
                <span className="text-[10px] font-bold text-ink-muted group-hover:text-white">Top Rated</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn bg-mint-light hover:bg-mint text-ink p-3 rounded-2xl text-center flex flex-col items-center justify-center gap-1"
              >
                <svg className="w-5 h-5 text-ink fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z"/>
                </svg>
                <span className="font-heading font-black text-xs">LinkedIn</span>
                <span className="text-[10px] font-bold text-ink-muted">Connect</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Topic Picker & Message Launcher (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-3 border-ink shadow-sticker-lg">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-ink mb-2">
              Quick Ping Builder
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-ink-muted mb-5">
              Select what you'd like to collaborate on, and click to send an instant pre-filled brief:
            </p>

            {/* Topic Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {topics.map((topic) => {
                const isSelected = selectedTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`px-3.5 py-2 rounded-2xl font-heading font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-turquoise text-white border-2 border-ink shadow-sticker'
                        : 'bg-canvas text-ink border-2 border-ink/30 hover:border-ink'
                    }`}
                  >
                    <span>{isSelected ? '✓' : '+'}</span>
                    <span>{topic}</span>
                  </button>
                );
              })}
            </div>

            {/* Generated Preview */}
            <div className="bg-canvas rounded-2xl p-4 border-2 border-ink mb-6">
              <div className="text-[11px] font-black text-ink-muted uppercase tracking-wider mb-2">
                Generated Message Preview:
              </div>
              <pre className="font-body text-xs text-ink whitespace-pre-wrap leading-relaxed select-all">
                {generateMessage()}
              </pre>
            </div>

            {/* Launch Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker-btn bg-mint hover:bg-mint-dark text-ink font-heading font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl flex-1 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch on WhatsApp</span>
              </a>

              <a
                href={mailUrl}
                className="sticker-btn bg-coral hover:bg-coral-dark text-white font-heading font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl flex-1 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email</span>
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
              className="fixed bottom-6 right-6 z-50 sticker-card bg-ink text-white font-heading font-black text-xs px-4 py-2.5 rounded-full flex items-center gap-2 shadow-sticker-lg"
            >
              <Check className="w-4 h-4 text-mint stroke-[3]" />
              <span>Copied {copiedItem} to clipboard! 🎉</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
