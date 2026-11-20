import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoDualWorld } from './components/BentoDualWorld';
import { TravelCarousel } from './components/TravelCarousel';
import { PhotoStrip } from './components/PhotoStrip';
import { PlayfulContactDock } from './components/PlayfulContactDock';
import { RouteModal } from './components/RouteModal';
import { Footer } from './components/Footer';
import { TravelRoute } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<TravelRoute | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const el = document.getElementById('dual-world');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-canvas text-ink font-body selection:bg-marigold selection:text-ink">
      {/* Sticky Playful Navigation Bar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* Kinetic Hero & 3D Tilt Polaroid */}
        <Hero 
          onExploreWork={scrollToWork} 
          onSayHi={scrollToContact} 
        />

        {/* Asymmetrical Bento Grid: Search Lab vs LocallyTrip & Hospitality */}
        <BentoDualWorld />

        {/* Southeast Asia Field Stories Carousel */}
        <TravelCarousel 
          onSelectRoute={(route) => setSelectedRoute(route)} 
        />

        {/* Personal Photo Strip (Polaroids with TODO markers) */}
        <PhotoStrip />

        {/* Playful Interactive Contact Dock & Message Builder */}
        <PlayfulContactDock />
      </main>

      {/* Footer */}
      <Footer />

      {/* Travel Route Deep-Dive Modal */}
      <RouteModal 
        route={selectedRoute} 
        onClose={() => setSelectedRoute(null)} 
      />
    </div>
  );
};

export default App;
