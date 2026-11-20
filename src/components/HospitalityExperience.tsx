import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HospitalityExperience: React.FC = () => {
  return (
    <section id="experience" className="relative z-10 bg-[#0D0D0D] py-24 px-6 sm:px-10 hairline-border-t">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 pb-8 hairline-border-b mb-12">
          <span>04 / Foundation &amp; Trajectory</span>
          <span>Career Milestones</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Hospitality Foundation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#E5D5C5]">
              Academic Foundation
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light leading-tight">
              {PORTFOLIO_DATA.hospitality.institution}
            </h3>
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              {PORTFOLIO_DATA.hospitality.degree}
            </div>
            <blockquote className="font-editorial italic text-base sm:text-lg text-zinc-300 font-light leading-relaxed pl-4 border-l border-white/20">
              “{PORTFOLIO_DATA.hospitality.description}”
            </blockquote>
          </div>

          {/* Right Column: Work Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            {PORTFOLIO_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="pb-10 border-b border-white/10 last:border-b-0 space-y-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-1">
                      {exp.period}
                    </div>
                    <h4 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                      {exp.role}
                    </h4>
                    <div className="font-mono text-xs text-zinc-400 mt-1">
                      {exp.company}
                    </div>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 border border-white/10 text-white rounded-full bg-white/[0.02]">
                    {exp.status}
                  </span>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {exp.achievements.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      <span className="text-[#E5D5C5] font-mono text-xs mt-0.5">❯</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
