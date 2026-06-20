import React, { useEffect } from 'react';
import { Painting } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaintingLightboxProps {
  painting: Painting | null;
  onClose: () => void;
}

export function PaintingLightbox({ painting, onClose }: PaintingLightboxProps) {
  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (painting) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [painting]);

  return (
    <AnimatePresence>
      {painting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF9F6]/95 backdrop-blur-md p-4 md:p-8 lg:p-12"
          onClick={onClose}
        >
          {/* Close button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-[#8B7E66] hover:text-[#33322E] transition-colors z-50 p-2 bg-white rounded-full shadow-sm border border-[#E8E4DF]"
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          {/* Main Modal Container */}
          <div 
            className="flex flex-col lg:flex-row w-full max-w-7xl max-h-[90vh] lg:h-[85vh] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-[#E8E4DF]" 
            onClick={e => e.stopPropagation()} // Prevent clicking inner modal from closing it
          >
            {/* Image Side */}
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-full bg-[#E8E4DF] relative flex items-center justify-center p-4 md:p-12">
              <img 
                src={painting.imageUrl} 
                className="max-w-full max-h-full object-contain shadow-md rounded-sm" 
                alt={painting.title} 
              />
            </div>

            {/* Details Side */}
            <div className="w-full lg:w-1/3 p-8 lg:p-16 flex flex-col justify-center bg-white overflow-y-auto">
              <span className="text-[#8B7E66] text-xs font-sans font-bold tracking-widest uppercase mb-4 block">Selected Work</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-[#5A5A40] leading-tight italic">
                {painting.title}
              </h2>
              
              <div className="space-y-6 text-[#6E6A62] font-sans text-sm md:text-base leading-relaxed">
                <div>
                  <strong className="block font-bold text-[#8B7E66] uppercase tracking-widest text-[10px] mb-1">Technique</strong>
                  <span className="font-medium text-[#33322E]">{painting.technique}</span>
                </div>
                
                <div>
                  <strong className="block font-bold text-[#8B7E66] uppercase tracking-widest text-[10px] mb-1">Dimensions</strong>
                  <span className="font-medium text-[#33322E]">{painting.dimensions}</span>
                </div>
                
                <div>
                  <strong className="block font-bold text-[#8B7E66] uppercase tracking-widest text-[10px] mb-1">Year</strong>
                  <span className="font-medium text-[#33322E]">{painting.year}</span>
                </div>

                {painting.description && (
                  <div className="pt-6 mt-6 border-t border-[#E8E4DF]">
                    <p className="text-[#6E6A62] italic font-serif leading-relaxed text-lg">
                      "{painting.description}"
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <a 
                href={`mailto:studio@eleanorvance.art?subject=Inquiry: ${painting.title}`} 
                onClick={onClose} 
                className="mt-12 inline-flex items-center justify-center gap-3 bg-[#5A5A40] px-8 py-4 text-center text-white uppercase tracking-widest text-xs font-sans rounded-full hover:bg-[#4A4A35] transition-all duration-300 w-full lg:w-auto"
              >
                Inquire About Artwork
                <ExternalLink size={14} className="opacity-70" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
