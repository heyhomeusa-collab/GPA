import React from 'react';
import { motion } from 'motion/react';
import { assets } from '../../config/assets';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const programs = [
  {
    title: "Beginner English",
    tag: "Foundation",
    desc: "Build a rock-solid foundation with native speakers.",
    img: assets.programs.beginner
  },
  {
    title: "Intermediate",
    tag: "feel the difference",
    desc: "Bridging the gap to professional communication.",
    img: assets.programs.intermediate
  },
  {
    title: "Advanced",
    tag: "consolidate",
    desc: "Mastery for higher education and global careers.",
    img: assets.programs.advanced
  }
];

export function Programs() {
  return (
    <section aria-labelledby="programs-title" className="max-w-screen-2xl mx-auto px-8 py-24 relative group" id="programs">
      <div className="absolute top-0 right-12 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-60 h-60 text-primary/15">
          <rect x="2" y="3" width="20" height="16" rx="2" />
          <path d="M 6 6 H 18 V 7 H 19 V 15 H 18 V 16 H 6 V 15 H 5 V 7 H 6 Z" />
          <line x1="8" y1="9" x2="16" y2="9" />
          <line x1="8" y1="11" x2="16" y2="11" />
          <line x1="8" y1="13" x2="12" y2="13" />
          <path d="M14.5 18.5 L13 23 L16.5 21.5 L20 23 L18.5 18.5 Z" fill="#f7f9fb" />
          <circle cx="16.5" cy="16.5" r="4" fill="#f7f9fb" />
          <circle cx="16.5" cy="16.5" r="2" />
        </svg>
      </div>
      <div className="mb-16 relative z-10">
        <div className="max-w-2xl">
          <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[55px]">The ELI path</span>
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-6" id="programs-title">
            Academic Ecosystem
          </h2>
          <p className="text-on-surface-variant text-lg">ELI's unique 7 Level curriculum is designed to take you from foundational English to collagiate mastery. Each level focuses on all core linguistic pillar: Speaking, Listening, Reading, Writing and Grammar.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-surface-container h-[450px] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <img alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={p.img} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">{p.tag}</span>
              <h3 className="font-headline text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm mb-6">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
