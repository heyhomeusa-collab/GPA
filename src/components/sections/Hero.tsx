import React from 'react';
import { motion } from 'motion/react';
import { PremiumButton } from '../ui/PremiumButton';
import { assets } from '../../config/assets';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Hero() {
  const { t } = useTranslation();
  
  const scrollToEnrollment = () => {
    document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="hero-title" className="relative pt-8 pb-32 flex flex-col justify-center items-center px-8 overflow-hidden bg-white">
      <div className="relative z-10 max-w-5xl text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-6 block"
        >
          {t.hero.badge}
        </motion.span>

        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 xl:-translate-x-32 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white p-3 shadow-2xl w-52 xl:w-72 transition-transform hover:rotate-0 duration-500"
          >
            <div className="aspect-square overflow-hidden">
              <img alt="Global Community" className="w-full h-full object-cover" src={assets.hero.globalCommunity} />
            </div>
          </motion.div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-5xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.95] text-primary mb-8" 
          id="hero-title"
        >
          {t.hero.titleLine1} <span className="font-bold">{t.hero.titleLine2Authentic}</span> {t.hero.titleLine3American} <span className="italic font-normal text-secondary">{t.hero.titleLine4College}</span> {t.hero.titleLine5Experience}
        </motion.h1>

        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 xl:translate-x-32 z-20">
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="bg-white p-3 shadow-2xl w-52 xl:w-72 transition-transform hover:rotate-0 duration-500"
          >
            <div className="aspect-square overflow-hidden">
              <img alt="Florida Campus" className="w-full h-full object-cover" src={assets.hero.floridaCampus} />
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <PremiumButton onClick={scrollToEnrollment}>
            {t.hero.cta}
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}
