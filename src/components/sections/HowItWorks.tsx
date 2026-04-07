import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, FileText, ShieldCheck, PlaneTakeoff, Headset } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const steps = [
  { num: "01", icon: MessageSquare, title: "Free Consultation", desc: "Tell us about your goals and dreams. We answer every question you have." },
  { num: "02", icon: FileText, title: "Application", desc: "Gather and submit your documentation and submit your information. We handle the application process." },
  { num: "03", icon: ShieldCheck, title: "Visa Support", desc: "We will provide support and make sure you feel ready for your Visa request." },
  { num: "04", icon: PlaneTakeoff, title: "Arrival", desc: "We will help you find everything you need from your first day in USA. Airport transportation, Housing, Insurance and arrival to your first classes." },
  { num: "05", icon: Headset, title: "Student Support", desc: "Have a question? let us know! We are ready and happy to help!" }
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-[#000040] text-white relative overflow-hidden" id="how-it-works">
      <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24 mt-0 -mb-[70px]">
          <span className="font-label text-xs uppercase tracking-widest text-[#fcd400] font-bold mb-4 block -mt-[70px]">We got your back in every step</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">How it works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="text-[10rem] font-headline font-bold text-white/[0.03] group-hover:text-[#fcd400]/30 transition-colors duration-500 absolute -top-20 -left-6 pointer-events-none select-none leading-none">{s.num}</div>
              <div className="relative">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-2xl border border-white/5">
                  <s.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-on-primary-container text-base leading-relaxed opacity-80">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-full bg-gradient-to-l from-white/10 to-transparent skew-x-[-15deg] translate-x-1/2"></div>
      </div>
    </section>
  );
}
