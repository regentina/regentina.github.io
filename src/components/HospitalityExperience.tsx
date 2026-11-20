import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, CheckCircle2, ChevronRight, HeartHandshake } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HospitalityExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-white/5">
      
      {/* Background Lighting Node */}
      <div className="absolute top-1/2 left-[-100px] w-[500px] h-[500px] ambient-glow-amber blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark-glass hairline-border mb-4 font-mono text-xs text-amber-glow uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>The Empathy Foundation &amp; Career Trajectory</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-tight mb-4">
            Five-Star Hospitality Applied to Search Architecture
          </h2>
          <p className="text-ivory-muted text-base sm:text-lg leading-relaxed">
            Technical SEO provides the engine; hospitality provides the soul. Here is how my background in Hotel Management at <strong>STIEPAR YAPARI AKTRIPA</strong> informs high-velocity execution at Velhive and LocallyTrip.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hospitality Roots Feature (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl dark-glass hairline-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-glow/10 border border-amber-glow/20 flex items-center justify-center text-amber-glow">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-glow">Higher Education</span>
                <h3 className="font-heading font-black text-lg text-ivory">STIEPAR YAPARI AKTRIPA</h3>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-elevated hairline-border">
              <div className="text-xs font-mono text-ivory-dim mb-1">Conferred Degree:</div>
              <div className="font-heading font-bold text-base text-ivory">Bachelor's Degree in Hotel Management</div>
            </div>

            <blockquote className="font-serif italic text-sm sm:text-base text-ivory leading-relaxed pl-4 border-l-2 border-amber-glow">
              “{PORTFOLIO_DATA.hospitalityRoots.narrative}”
            </blockquote>

            <div className="pt-4 border-t border-white/5 space-y-2 text-xs font-mono text-ivory-dim">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow" />
                <span>Anticipatory User Experience Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow" />
                <span>Frictionless Cognitive Journey (Zero Bounce)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-glow" />
                <span>Editorial QA with Five-Star Standards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Work Experience Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="rounded-3xl dark-glass hairline-border p-6 sm:p-8 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-glow uppercase tracking-wider mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.organization} • {exp.employmentType}</span>
                    </div>
                    <h3 className="font-heading font-black text-xl text-ivory leading-snug">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 border border-white/10 text-ivory">
                      {exp.badge}
                    </span>
                    <div className="text-[11px] font-mono text-ivory-dim mt-1">{exp.period}</div>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-ivory-muted leading-relaxed">
                  {exp.achievements.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="text-amber-glow mt-1 font-mono text-xs">❯</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
