import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';

const DraggablePhoto = () => {
  const [index, setIndex] = useState(0);

  // Using placeholders for now - in a real scenario these would be actual image URLs
  // For the first item, we keep the original "Identity Anchor" style
  const items = [
    { type: 'identity' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop', alt: 'Coding Setup' }, // Example: Coding/Tech
    { type: 'image', src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop', alt: 'Abstract Design' }, // Example: Abstract/Design
    { type: 'image', src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', alt: 'Code Screen' }, // Example: Code
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[index];

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.05, cursor: 'grab' }}
      whileTap={{ scale: 0.95, cursor: 'grabbing' }}
      onClick={handleNext}
      className="md:block relative cursor-grab active:cursor-grabbing w-full aspect-square mb-6"
    >
        <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
            >
                {currentItem.type === 'identity' ? (
                     <div className="w-full h-full bg-[var(--bg-card)] border border-[var(--border-color)] relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 select-none">
                        <div className="absolute inset-0 flex items-center justify-center text-[var(--text-secondary)]">
                        <User size={64} strokeWidth={1} />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#111] to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-4 font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-void)] px-2 py-1">
                        Fadly Uzzaki
                        </div>
                         {/* Helper Label */}
                        <div className="absolute top-2 right-2 font-mono text-[10px] text-[var(--accent-amber)] opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--bg-void)] px-1 border border-[var(--accent-amber)]">
                            DRAG_ME // TAP_TO_SWITCH
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full border border-[var(--border-color)] overflow-hidden relative select-none">
                         <img 
                            src={currentItem.src} 
                            alt={currentItem.alt} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none" 
                         />
                         <div className="absolute inset-0 ring-1 ring-inset ring-[var(--border-color)]"></div>
                         <div className="absolute bottom-4 left-4 font-mono text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1">
                            {currentItem.alt}
                        </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
        
        {/* Shadow/Depth effect for the whole draggable container */}
        <div className="absolute -inset-2 bg-[var(--accent-blue)]/20 -z-10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full"></div>

    </motion.div>
  );
};

export default DraggablePhoto;
