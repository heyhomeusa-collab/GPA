import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../../config/assets';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const images = assets.carrousel;

const widths = ["w-[400px]", "w-[600px]", "w-[400px]", "w-[500px]", "w-[450px]", "w-[550px]", "w-[400px]", "w-[600px]", "w-[450px]", "w-[500px]"];

export function CampusGallery() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Set initial scroll position to the middle third
  useEffect(() => {
    if (scrollRef.current) {
      const setWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = setWidth;
      setIsReady(true);
    }
  }, []);

  const handleInfiniteScroll = useCallback(() => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const segmentWidth = scrollWidth / 3;

    // Use a more responsive jumping logic
    if (scrollLeft >= segmentWidth * 2) {
      // We've scrolled into the third segment, snap back to the start of the second segment
      scrollRef.current.scrollLeft = scrollLeft - segmentWidth;
    } else if (scrollLeft <= 5) {
      // Near the very beginning, jump to the same point in the middle segment
      scrollRef.current.scrollLeft = segmentWidth + scrollLeft;
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.05; // pixels per ms

    const autoScroll = (time: number) => {
      if (scrollRef.current && !isHovered && isReady) {
        const delta = time - lastTime;
        scrollRef.current.scrollLeft += speed * delta;
        
        handleInfiniteScroll();
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(autoScroll);
    };
    
    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isReady, handleInfiniteScroll]);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -600 : 600;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative group mr-0" id="campus">
      <div 
        className="relative mt-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={() => scrollByAmount('left')} 
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 liquid-glass p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 text-primary border border-primary/10"
          aria-label={t.campusGallery.prevImg}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={() => scrollByAmount('right')} 
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 liquid-glass p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 text-primary border border-primary/10"
          aria-label={t.campusGallery.nextImg}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
 
        <div 
          ref={scrollRef} 
          onScroll={handleInfiniteScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar px-8 pb-8 pt-4 select-none cursor-grab active:cursor-grabbing"
          style={{ opacity: isReady ? 1 : 0 }}
        >
          {/* Triple buffer: [...images, ...images, ...images] */}
          {[...images, ...images, ...images].map((img, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 ${widths[(i % images.length) % widths.length]} h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              <img alt={t.campusGallery.altCampus} className="w-full h-full object-cover pointer-events-none" src={img} referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
