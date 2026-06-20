import React from 'react';
import { Painting } from '../types';
import { motion } from 'motion/react';

interface GalleryGridProps {
  paintings: Painting[];
  onSelect: (painting: Painting) => void;
}

export function GalleryGrid({ paintings, onSelect }: GalleryGridProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-[1400px] mx-auto px-6 py-12">
      {paintings.map((painting, index) => (
        <motion.div
          key={painting.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="break-inside-avoid cursor-pointer group rounded-[40px] overflow-hidden bg-[#E8E4DF] border border-[#E8E4DF] flex flex-col mb-8"
          onClick={() => onSelect(painting)}
        >
          {/* Image Container with delicate hover scale */}
          <div className="flex-grow overflow-hidden relative">
            <img 
              src={painting.imageUrl} 
              alt={painting.title} 
              className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
              loading="lazy"
            />
          </div>
          
          {/* Artwork Info below image */}
          <div className="p-5 bg-white flex flex-col justify-center items-start">
            <h3 className="font-serif text-lg text-[#33322E]">{painting.title}</h3>
            <p className="text-xs text-[#8B7E66] uppercase font-sans tracking-wider mt-1">
              {painting.technique} &nbsp;•&nbsp; {painting.dimensions}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
