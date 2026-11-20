import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [time, setTime] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-[#060606]/85 backdrop-blur-md hairline-border-b' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between pointer-events-auto">
          
          {/* Logo on Left */}
          <a 
            href="#hero" 
            className="font-editorial text-2xl sm:text-3xl text-white tracking-tight hover:opacity-80 transition-opacity font-normal"
          >
            Rory<span className="text-[#E5D5C5]">.</span>
          </a>

          {/* Center / Status */}
          <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
              <span>Indonesia {time && `[${time} UTC+7]`}</span>
            </span>
            <span className="text-zinc-600">/</span>
            <span>Async Worldwide</span>
          </div>

          {/* Right Navigation Links & Minimal CTA */}
          <div className="flex items-center gap-6 text-xs font-mono tracking-widest uppercase">
            <nav className="hidden lg:flex items-center gap-8 text-zinc-400">
              <a href="#about" className="hover:text-white transition-colors">01 About</a>
              <a href="#capabilities" className="hover:text-white transition-colors">02 Capabilities</a>
              <a href="#routes" className="hover:text-white transition-colors">03 Fieldwork</a>
            </nav>

            <button
              onClick={onContactClick}
              className="px-4 py-2 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
