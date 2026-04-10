import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Star, Rocket, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function ChooseProgram() {
  const { t } = useTranslation();

  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-outline-variant/10">
      <div className="text-center mb-16">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[75px]">{t.chooseProgram.badge}</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight text-primary -mb-[25px]">{t.chooseProgram.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none animate-pulse-soft">
              <GraduationCap className="w-64 h-64 text-primary/5" />
            </div>
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <GraduationCap className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">{t.chooseProgram.fullTerm.title}</h3>
            <div className="text-on-surface-variant mb-8 flex-grow relative z-10">
              <p>{t.chooseProgram.fullTerm.desc}</p>
              <div className="mt-4 space-y-1">
                <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> {t.chooseProgram.fullTerm.bullet1}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> {t.chooseProgram.fullTerm.bullet2}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> {t.chooseProgram.fullTerm.bullet3}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> {t.chooseProgram.fullTerm.bullet4}</div>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-black transition-colors relative z-10">{t.chooseProgram.fullTerm.cta}</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col h-full relative overflow-hidden group hover:-translate-y-2 transition-all duration-300">
            <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none animate-pulse-soft">
              <Star className="w-64 h-64 text-white/5" />
            </div>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Star className="text-white w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">{t.chooseProgram.shortTerm.title}</h3>
            <div className="text-on-primary-container mb-8 flex-grow relative z-10">
              <p>{t.chooseProgram.shortTerm.desc}</p>
              <div className="mt-4 space-y-1">
                <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> {t.chooseProgram.shortTerm.bullet1}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> {t.chooseProgram.shortTerm.bullet2}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> {t.chooseProgram.shortTerm.bullet3}</div>
                <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> {t.chooseProgram.shortTerm.bullet4}</div>
              </div>
            </div>
            <button className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl font-bold hover:brightness-110 transition-colors relative z-10">{t.chooseProgram.shortTerm.cta}</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none animate-pulse-soft">
              <Rocket className="w-64 h-64 text-primary/5" />
            </div>
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 relative z-10">
              <Rocket className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">{t.chooseProgram.profDev.title}</h3>
            <p className="text-on-surface-variant mb-8 flex-grow relative z-10">{t.chooseProgram.profDev.desc}</p>
            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-black transition-colors relative z-10">{t.chooseProgram.profDev.cta}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
