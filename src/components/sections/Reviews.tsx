import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { assets } from '../../config/assets';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const testimonialsRow1 = [
  { name: "Sebastian", country: "Venezuela", quote: "Entertaining classes", fullReview: "The classes here are incredibly entertaining and engaging. I've never had so much fun learning English!", img: assets.testimonials[0] },
  { name: "Anthony", country: "USA", quote: "Friendly community", fullReview: "The community is so welcoming and friendly. I felt right at home from the very first day.", img: assets.testimonials[1] },
  { name: "Holly", country: "China", quote: "High-quality education", fullReview: "The quality of education is top-notch. The professors really care about your success and progress.", img: assets.testimonials[2] },
  { name: "Juan", country: "Colombia", quote: "World-class professionals!", fullReview: "Learning from world-class professionals has given me insights I couldn't get anywhere else.", img: assets.testimonials[3] },
  { name: "Paola", country: "Bolivia", quote: "Diverse activities program", fullReview: "The activities program is so diverse. There's always something new and exciting to do on campus.", img: assets.testimonials[4] },
  { name: "Mateo", country: "Brazil", quote: "Life-changing experience", fullReview: "This entire experience has been life-changing. I've grown so much both personally and academically.", img: assets.testimonials[5] },
];

const testimonialsRow2 = [
  { name: "Yuki", country: "Japan", quote: "Amazing campus life", fullReview: "The campus life is amazing! The facilities are beautiful and there are so many clubs to join.", img: assets.testimonials[6] },
  { name: "Elena", country: "Spain", quote: "Supportive staff", fullReview: "The staff is incredibly supportive. They helped me with everything from my visa to finding housing.", img: assets.testimonials[7] },
  { name: "Ahmed", country: "Egypt", quote: "Great teachers", fullReview: "The teachers are great and very patient. They make sure everyone understands the material.", img: assets.testimonials[8] },
  { name: "Maria", country: "Mexico", quote: "Orlando is magic", fullReview: "Living in Orlando is pure magic. The weather is perfect and there are so many theme parks nearby!", img: assets.testimonials[9] },
  { name: "David", country: "Germany", quote: "Best decision!", fullReview: "Coming here was the best decision I've ever made. I highly recommend this program to anyone.", img: assets.testimonials[10] },
  { name: "Sofia", country: "Italy", quote: "Beautiful campus", fullReview: "The campus is absolutely beautiful. I love studying outside under the palm trees.", img: assets.testimonials[11] },
];

const TestimonialBubble = ({ t }: { t: any; key?: React.Key }) => (
  <div className="relative group/bubble mx-3">
    <div className="bg-white rounded-3xl p-4 pr-8 flex items-center gap-4 shadow-sm border border-outline-variant/10 min-w-max cursor-pointer hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-full bg-[#a8d5d1] overflow-hidden flex-shrink-0 flex items-center justify-center">
        <img src={t.img} alt={t.name} className="w-12 h-12 object-cover" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-1">
          <span className="font-bold text-primary font-headline text-lg">{t.name}</span>
          <span className="bg-[#000040] text-[#fcd400] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">{t.country}</span>
        </div>
        <span className="text-on-surface-variant text-sm italic">"{t.quote}"</span>
      </div>
    </div>
    
    {/* Tooltip */}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-outline-variant/10 p-6 opacity-0 invisible group-hover/bubble:opacity-100 group-hover/bubble:visible transition-all duration-300 z-50 translate-y-2 group-hover/bubble:translate-y-0 pointer-events-none whitespace-normal">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#a8d5d1] overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img src={t.img} alt={t.name} className="w-10 h-10 object-cover" />
        </div>
        <div>
          <div className="font-bold text-primary font-headline">{t.name}</div>
          <div className="text-xs text-on-surface-variant uppercase tracking-wider">{t.country}</div>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed">"{t.fullReview}"</p>
      
      {/* Triangle pointer */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-outline-variant/10 rotate-45"></div>
    </div>
  </div>
);

export function Reviews() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-24" id="reviews">
      <div className="text-center mb-16">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[35px]">What our students say</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight">Voices of ELI</h2>
      </div>
      
      <div className="relative mb-20 overflow-visible bg-surface-container-low py-12 border-y border-outline-variant/10 flex flex-col gap-6 group -mt-[30px]">
        <div className="flex animate-marquee whitespace-nowrap items-center w-max">
          {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <TestimonialBubble key={i} t={t} />
          ))}
        </div>
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center w-max">
          {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((t, i) => (
            <TestimonialBubble key={i} t={t} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Video Card 1 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high">
          <img alt="Mateo Silva" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={assets.interviews[0].thumbnail} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Mateo Silva</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">Brazil • Advanced Program</span>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high md:scale-105 z-10">
          <img alt="Yuki Tanaka" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={assets.interviews[1].thumbnail} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Yuki Tanaka</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">Japan • Intermediate</span>
          </div>
        </div>

        {/* Video Card 3 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high">
          <img alt="Isabella Rossi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={assets.interviews[2].thumbnail} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Isabella Rossi</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">Italy • Beginner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
