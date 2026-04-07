import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Star, Rocket, ShieldCheck } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function ChooseProgram() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-24 border-t border-outline-variant/10">
      <div className="text-center mb-16">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[75px]">Study Options</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight text-primary -mb-[25px]">Choose Your Program</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
        >
          <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
            <GraduationCap className="w-64 h-64 text-primary/5" />
          </div>
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 relative z-10">
            <GraduationCap className="text-primary w-8 h-8" />
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">Full Academic Term</h3>
          <div className="text-on-surface-variant mb-8 flex-grow relative z-10">
            <p>Experience a fully immersive, intensive English program designed for international students planning to study in the USA for a semester or more. Secure your F-1 student status, live the authentic American college experience, and earn your official completion certificate from Seminole State College.</p>
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> I-20 form issuance</div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> F-1 Visa process support</div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> 16-week intensive semesters</div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-primary w-4 h-4" /> Academic Certificate</div>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-black transition-colors relative z-10">Apply for Long-Term</button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col h-full relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
        >
          <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
            <Star className="w-64 h-64 text-white/5" />
          </div>
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
            <Star className="text-white w-8 h-8" />
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">Short-Term English</h3>
          <div className="text-on-primary-container mb-8 flex-grow relative z-10">
            <p>Perfect for tourists, professionals or anyone 16+ looking to boost their English skills during a short time or vacation. ELI's unique 4-12 week programs with cultural activities included, will make you have an unforgetable and authentic experience!</p>
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> No F1 visa required</div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> Flexible start dates year-round</div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> Full Campus facilities access</div>
              <div className="flex items-center gap-2"><ShieldCheck className="text-secondary-container w-4 h-4" /> Attendance Certificate</div>
            </div>
          </div>
          <button className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl font-bold hover:brightness-110 transition-colors relative z-10">Apply for Short-Term</button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-10 rounded-[2.5rem] border border-outline-variant/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
        >
          <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
            <Rocket className="w-64 h-64 text-primary/5" />
          </div>
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 relative z-10">
            <Rocket className="text-primary w-8 h-8" />
          </div>
          <h3 className="font-headline text-2xl font-bold mb-4 relative z-10">Professional Development</h3>
          <p className="text-on-surface-variant mb-8 flex-grow relative z-10">One-on-one tailored instruction focusing on your specific professional or academic goals.</p>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-black transition-colors relative z-10">Enquire Now</button>
        </motion.div>
      </div>
    </section>
  );
}
