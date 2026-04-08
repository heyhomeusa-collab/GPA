import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { assets } from '../../config/assets';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Stats() {
  const { t } = useTranslation();

  return (
    <section aria-label="Key Statistics" className="max-w-screen-2xl mx-auto px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible">
        {/* Swapped: Image now on the left */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-start z-20"
        >
          <div className="w-full max-w-sm -rotate-3 transform hover:rotate-0 transition-transform duration-500">
            <div className="aspect-[430/492] overflow-hidden rounded-xl shadow-2xl bg-white p-4">
              <img alt="GPA Global" className="w-full h-full object-cover rounded-lg" src={assets.gpa.main} />
            </div>
          </div>
        </motion.div>

        {/* Swapped: Content now on the right */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-[#000040] text-white rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group p-12 pl-16 md:pl-24 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 md:-ml-20 lg:-ml-32"
        >
          <div className="relative z-10">
            <h2 className="font-headline text-4xl font-bold mb-4">{t.stats.title}</h2>
            <p className="text-white/80 text-lg max-w-md italic">{t.stats.description}</p>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-8 mt-12">
            <div>
              <span className="block text-5xl font-headline font-bold text-[#fcd400] mb-2">{t.stats.vip}</span>
              <span className="text-sm font-label uppercase tracking-widest opacity-70">{t.stats.vipDesc}</span>
            </div>
            <div>
              <span className="block text-5xl font-headline font-bold text-[#fcd400] mb-2">{t.stats.hundred}</span>
              <span className="text-sm font-label uppercase tracking-widest opacity-70">{t.stats.hundredDesc}</span>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
            <GraduationCap className="w-64 h-64 text-white/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
