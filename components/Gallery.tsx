import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';

const galleryImages = [
  'https://lh3.googleusercontent.com/p/AF1QipM6apLo4XW1ysRvv0KugYcohn7MImzz4v8o_ynj=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipPc4CTHNXMEw7GRxx_jKEjtgqyPwkN20IStYhN3=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipNZFJBzRypOUHZh8gkepeJ7GuiSZlVrT8HmByK6=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/p/AF1QipM-KV98ZERnUgEsAQcgW27KbmR592Xoi9ZXbrcc=s1360-w1360-h1020-rw',
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerIW89L2NWatPITW94hM29uqhJoGLfNcULrqDROZtkWRh-SRkc58wCFKpG2t1DRxJGxDbLaxjFrEh9JRe151eiQrvRRyM2fziLcdwOxiKxKCijwPEqPhOGUhvznCLhvGXNPenreEw=s1360-w1360-h1020-rw',
];

export const Gallery: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <SectionHeading 
          title="Our Gallery" 
          subtitle="Glimpses of our vibrant learning environment and student activities."
        />
      </div>

      <div className="px-4">
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index} 
                className="min-w-[300px] md:min-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group relative"
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Swipe to explore
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
};
