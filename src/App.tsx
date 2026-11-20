import React, { useState } from 'react';
import { ScrollHUD } from './components/ScrollHUD';
import { HeroStage } from './components/HeroStage';
import { SearchAeoLab } from './components/SearchAeoLab';
import { FieldStories } from './components/FieldStories';
import { HospitalityExperience } from './components/HospitalityExperience';
import { FieldGallery } from './components/FieldGallery';
import { ContactDialogue } from './components/ContactDialogue';
import { RouteModal } from './components/RouteModal';
import { Footer } from './components/Footer';
import { RouteItem } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<RouteItem | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearchLab = () => {
    const el = document.getElementById('search-lab');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian text-ivory selection:bg-amber-glow selection:text-obsidian relative">
      {/* Top Floating Scroll HUD & Story Progress */}
      <ScrollHUD onContactClick={scrollToContact} />

      {/* Main Content Chapters */}
      <main>
        {/* Chapter 01: Hero Stage with Parallax Portrait (`me.jpg`) & Overlays */}
        <HeroStage 
          onExploreClick={scrollToSearchLab}
          onContactClick={scrollToContact}
        />

        {/* Chapter 02: The Search & AI Lab (AEO/GEO & Benchmarks) */}
        <SearchAeoLab />

        {/* Chapter 03: Field Notes & Curated Southeast Asia Routes */}
        <FieldStories 
          onSelectRoute={(route) => setSelectedRoute(route)}
        />

        {/* Empathy Foundation: Hospitality Roots (STIEPAR) & Career Milestones */}
        <HospitalityExperience />

        {/* Visual Field Gallery: [PHOTO_SLOT_3_GALLERY_GRID] */}
        <FieldGallery />

        {/* Chapter 04: Direct Dialogue & Async Project Inquiry */}
        <ContactDialogue />
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
