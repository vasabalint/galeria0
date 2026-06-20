import React, { useState } from 'react';
import { paintings } from './data/paintings';
import { Painting } from './types';
import { GalleryGrid } from './components/GalleryGrid';
import { PaintingLightbox } from './components/PaintingLightbox';
import { ContactSection } from './components/ContactSection';
import { motion } from 'motion/react';

export default function App() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  // Smooth scroll helper for internal links
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#33322E] font-sans selection:bg-[#E8E4DF] selection:text-[#33322E]">
      
      {/* Elegant Nav/Header */}
      <header className="absolute top-0 w-full h-20 px-6 md:px-12 flex items-center justify-between border-b border-[#E8E4DF] z-10 bg-[#FAF9F6]/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#8B7E66]"></div>
          <span className="text-lg md:text-xl tracking-widest uppercase font-serif font-medium">Eleanor Vance</span>
        </div>
        <nav className="flex space-x-6 md:space-x-10 text-xs md:text-sm uppercase tracking-widest font-sans font-semibold text-[#8B7E66]">
          <a 
            href="#contact" 
            onClick={scrollToContact} 
            className="hover:text-[#33322E] transition-colors"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Intro */}
      <header className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#5A5A40] mb-6 tracking-tight italic"
        >
          Capturing the <br className="hidden md:block"/> Ethereal Silence
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#6E6A62] uppercase tracking-[0.4em] text-[11px] md:text-sm font-semibold font-sans mb-12"
        >
          Selected Works &mdash; 2021–2024
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: '60px' }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[1px] bg-[#8B7E66]"
        />
      </header>

      {/* Gallery Section */}
      <main className="pb-32 bg-[#FAF9F6] relative">
        <div className="relative z-10">
          <GalleryGrid paintings={paintings} onSelect={setSelectedPainting} />
        </div>
      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Lightbox Overlay */}
      <PaintingLightbox 
        painting={selectedPainting} 
        onClose={() => setSelectedPainting(null)} 
      />

    </div>
  );
}
