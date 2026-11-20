import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2500);
  };

  return (
    <section id="contact" className="relative z-10 bg-[#060606] py-28 px-6 sm:px-10 hairline-border-t">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pb-8 hairline-border-b mb-16">
          <span>05 / Dialogue</span>
          <span>Async Inquiries</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-[1.05]">
              Let's Engineer Something <br />
              <span className="italic font-light text-[#E5D5C5]">Definitive.</span>
            </h2>
            <p className="text-zinc-400 font-light text-base sm:text-lg leading-relaxed max-w-lg">
              Available for asynchronous strategic engagements, AEO/GEO entity architecture, 100/100 Core Web Vitals optimization, and experiential Southeast Asia travel editorial.
            </p>
            <div className="pt-2 text-xs font-mono uppercase tracking-widest text-zinc-500">
              Location: Indonesia (UTC+7) • Global Asynchronous Rhythm
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Electronic Mail
                </div>
                <div className="font-mono text-sm sm:text-base text-white font-light">
                  {PORTFOLIO_DATA.profile.email}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.profile.email, "email")}
                  className="px-4 py-2 border border-white/20 text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  {copiedItem === "email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="p-2 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-colors"
                  aria-label="Send email"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* WhatsApp Card with 1-Click Copy & Direct Chat */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 flex items-center justify-between gap-4 hover:border-white/20 transition-colors">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  WhatsApp / Phone
                </div>
                <div className="font-mono text-sm sm:text-base text-white font-light">
                  {PORTFOLIO_DATA.profile.phone}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy("+6281122833696", "wa")}
                  className="px-4 py-2 border border-white/20 text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  {copiedItem === "wa" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={PORTFOLIO_DATA.profile.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[#E5D5C5] transition-colors flex items-center gap-1.5"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Verified Profile Links */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.profile.links.locallytrip}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-[#0D0D0D] text-center hover:bg-white hover:text-black transition-all group"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-black">
                  LocallyTrip
                </div>
                <div className="text-[10px] font-mono text-zinc-500 group-hover:text-black/70 mt-1">
                  LV 7 Specialist
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-[#0D0D0D] text-center hover:bg-white hover:text-black transition-all group"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-black">
                  Upwork
                </div>
                <div className="text-[10px] font-mono text-zinc-500 group-hover:text-black/70 mt-1">
                  Top Rated
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/10 bg-[#0D0D0D] text-center hover:bg-white hover:text-black transition-all group"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-black">
                  LinkedIn
                </div>
                <div className="text-[10px] font-mono text-zinc-500 group-hover:text-black/70 mt-1">
                  Connect
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
