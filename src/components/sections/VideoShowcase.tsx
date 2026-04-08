import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { assets } from '../../config/assets';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-8 py-20 -mt-[60px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl bg-black"
      >
        <div className="aspect-video w-full bg-surface-container-highest relative overflow-hidden">
          {!isPlaying ? (
            <>
              <img alt="Campus Life" className="w-full h-full object-cover" src={assets.video.thumbnail} />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center -mt-[20px]">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 rounded-full liquid-glass flex items-center justify-center text-primary hover:scale-110 transition-transform group/play"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center animate-pulse-soft">
                    <Play className="w-10 h-10 translate-x-1 fill-current" />
                  </div>
                </button>
              </div>
              <div className="absolute bottom-8 left-8 text-white max-w-md pointer-events-none">
                <h2 className="font-headline text-3xl font-bold mb-2">{t.videoShowcase.title}</h2>
                <p className="text-white/80">{t.videoShowcase.description}</p>
              </div>
            </>
          ) : (
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              onEnded={() => setIsPlaying(false)}
            >
              <source src={assets.video.source} type="video/mp4" />
            </video>
          )}
        </div>
      </motion.div>
    </section>
  );
}
