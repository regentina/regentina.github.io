import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CurtainAbout } from './components/CurtainAbout';
import { CapabilitiesAccordion } from './components/CapabilitiesAccordion';
import { StickyStackingRoutes } from './components/StickyStackingRoutes';
import { HospitalityExperience } from './components/HospitalityExperience';
import { ContactSection } from './components/ContactSection';
import { RouteModal } from './components/RouteModal';
import { Footer } from './components/Footer';
import { RouteCard } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<RouteCard | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-dvh bg-[#060606] text-[#D4D4D8] selection:bg-[#E5D5C5] selection:text-[#060606] relative">
      {/* Ultra-Minimal Top Navigation */}
      <Navbar onContactClick={scrollToContact} />

      <main className="relative">
        {/* 1. True Sticky Hero Stage (Anchored at top-0, z-0) with Seamless Portrait Blending */}
        <Hero 
          onContactClick={scrollToContact}
          onExploreClick={scrollToAbout}
        />

        {/* 2. Sticky Curtain: Slides OVER the Hero with border-t & rounded-t-[2.5rem] */}
        <CurtainAbout />

        {/* 3. Interactive Accordion for Capabilities (01 to 04) */}
        <CapabilitiesAccordion />

        {/* 4. Vertical Sticky Stacking Cards for Featured Southeast Asia Routes */}
        <StickyStackingRoutes 
          onSelectRoute={(route) => setSelectedRoute(route)}
        />

        {/* 5. Hospitality Foundation (STIEPAR) & Career Milestones */}
        <HospitalityExperience />

        {/* 6. Contact Dialogue & Asynchronous Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Route Deep-Dive Modal */}
      <RouteModal 
        route={selectedRoute}
        onClose={() => setSelectedRoute(null)}
      />
    </div>
  );
};

export default App;
