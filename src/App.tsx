/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Play,
  GraduationCap,
  ArrowRight,
  Zap,
  Clock,
  Star,
  UserSearch,
  FileText,
  ShieldCheck,
  PlaneTakeoff,
  Headset,
  BadgeCheck,
  Globe,
  Shield,
  MessageCircle,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Sparkles,
} from 'lucide-react';

function PremiumButton({ onClick, children }: { onClick?: () => void, children: React.ReactNode }) {
  return (
    <div className="relative group">
      {/* Outer Glow on Hover */}
      <motion.div
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 0.4, scale: 1.05 }
        }}
        className="absolute -inset-4 bg-primary/30 blur-2xl rounded-full pointer-events-none z-0"
      />
      
      <motion.button
        onClick={onClick}
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        initial="initial"
        className="relative z-10 w-full sm:w-auto bg-primary hover:bg-primary/50 backdrop-blur-md text-white px-14 py-5 rounded-full font-bold tracking-wide shadow-2xl transition-all duration-500 overflow-hidden border border-white/10"
      >
        {/* Glassy Highlight */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        
        {/* Shimmer Sweep Effect */}
        <motion.div
          variants={{
            initial: { x: '-150%', skewX: -20 },
            hover: { x: '250%', skewX: -20 }
          }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/3 pointer-events-none"
        />

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
          <span className="group-hover:text-amber-400 transition-colors duration-300">
            {children}
          </span>
        </span>
      </motion.button>
    </div>
  );
}

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'us', name: 'English' });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'us', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'br', name: 'Português (BR)' },
    { code: 'cn', name: '简体中文' },
    { code: 'jp', name: '日本語' },
    { code: 'tr', name: 'Türkçe' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/50 hover:bg-white/80 backdrop-blur-md border border-outline-variant/20 rounded-full py-2 px-4 text-sm font-medium transition-all"
      >
        <span className="uppercase text-xs font-bold text-on-surface-variant">{selectedLanguage.code}</span>
        <span>{selectedLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-outline-variant/10 rounded-2xl shadow-xl py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.name}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-surface-container-low flex items-center gap-3 ${selectedLanguage.name === lang.name ? 'text-primary font-bold' : 'text-on-surface'}`}
            >
              <span className="uppercase text-xs font-bold text-on-surface-variant">{lang.code}</span>
              {lang.name}
              {selectedLanguage.name === lang.name && <Check className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Main Navigation" className="bg-white/70 backdrop-blur-xl font-headline font-bold tracking-tight fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <a aria-label="GPA | ELI Home" className="text-xl font-bold tracking-tighter text-primary uppercase" href="/">
          GPA | ELI
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('international-family')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">ELI</button>
          <button onClick={() => scrollToSection('programs')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">Programs</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">How It Works</button>
          <button onClick={() => scrollToSection('reviews')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">Reviews</button>
          <button onClick={() => scrollToSection('faq')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">FAQ</button>
        </div>
        <div className="flex items-center gap-4">
          <LanguageDropdown />
          <button 
            onClick={() => scrollToSection('enrollment')}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-black transition-all"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const scrollToEnrollment = () => {
    document.getElementById('enrollment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="hero-title" className="relative py-32 flex flex-col justify-center items-center px-8 overflow-hidden bg-white">
      <div className="relative z-10 max-w-5xl text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold mt-[20px] mb-6 block"
        >
          Florida Academic Excellence
        </motion.span>

        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 xl:-translate-x-24 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="bg-white p-3 pb-8 shadow-2xl w-48 xl:w-64 transition-transform hover:rotate-0 duration-500"
          >
            <div className="aspect-square overflow-hidden mb-4">
              <img alt="Global Community" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt4FFP6RxPsJapd9NXzuwwOsl76ILaHuQbgkWLs_aM6JbvfRQyZWFjUeRYNAHwN-04woT-aXsTn-vLelVGy6dYTjUV2iqdNHYLrP3mtlr5VH9Y574CUluH93bu5w4tiifpGKol8YbnktZU5bruhqfTlq3j4XV4O3v6EPr8bnM8PGuRq7geLtDZZGojbMO7f0GvBg4I9EnVotWr9Ldrq4CRr9nKuONcJ0NpGvrctUfAdVBxnTD2sWPNVXB8kji6P9Rd1TeSFaLltU1Z" />
            </div>
            <div className="px-1">
              <p className="font-headline font-bold text-primary text-sm mb-1">Global Community</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">45+ Nationalities</p>
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
          THE <span className="font-bold">AUTHENTIC</span> AMERICAN <span className="italic font-normal text-secondary">COLLEGE</span> EXPERIENCE
        </motion.h1>

        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 xl:translate-x-24 z-20">
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="bg-white p-3 pb-8 shadow-2xl w-48 xl:w-64 transition-transform hover:rotate-0 duration-500"
          >
            <div className="aspect-square overflow-hidden mb-4">
              <img alt="Florida Campus" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoWO6SfgBN2hE3uFtGtbb9mn1AYpDxcu2D_h2I3fN3okbgmrdYCMmN-UT_M3NV2yzLSJNgjL8Mtu6mUAnhdZomHoHS6HLe1y9BoxbSmfSLXqJgqyfNT95luCAA-QoQ8N7zvZl5VTE4NP4VqYaiv9q1w982YErx01x3l65hnIZtQO-QxZcDCDKcvLRr3CnnUAXgv18tN59mowvDgA4Fh_3byYRD0hngR1IxtI8ZxOTSHuj-RqO0K7nQXevvuOk_CY3VA4PXl5d5DVcA" />
            </div>
            <div className="px-1">
              <p className="font-headline font-bold text-primary text-sm mb-1">Florida Campus</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Authentic US Living</p>
            </div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Your Official Gateway to learn English in the Seminole State College's English Language Institute 
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <PremiumButton onClick={scrollToEnrollment}>
            Get Started Today
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 py-20 -mt-[60px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden group shadow-2xl"
      >
        <div className="aspect-video w-full bg-surface-container-highest relative overflow-hidden">
          <img alt="Campus Life" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt4FFP6RxPsJapd9NXzuwwOsl76ILaHuQbgkWLs_aM6JbvfRQyZWFjUeRYNAHwN-04woT-aXsTn-vLelVGy6dYTjUV2iqdNHYLrP3mtlr5VH9Y574CUluH93bu5w4tiifpGKol8YbnktZU5bruhqfTlq3j4XV4O3v6EPr8bnM8PGuRq7geLtDZZGojbMO7f0GvBg4I9EnVotWr9Ldrq4CRr9nKuONcJ0NpGvrctUfAdVBxnTD2sWPNVXB8kji6P9Rd1TeSFaLltU1Z" />
          <div className="absolute inset-0 bg-primary/40 flex items-center justify-center -mt-[20px]">
            <button className="w-24 h-24 rounded-full liquid-glass flex items-center justify-center text-primary hover:scale-110 transition-transform group/play">
              <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center animate-pulse-soft">
                <Play className="w-10 h-10 translate-x-1 fill-current" />
              </div>
            </button>
          </div>
          <div className="absolute bottom-8 left-8 text-white max-w-md">
            <h2 className="font-headline text-3xl font-bold mb-2">Live the dream at SSC</h2>
            <p className="text-white/80">Experience the vibrant energy of Seminole State College Florida campus through the eyes of our students.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Key Statistics" className="max-w-screen-2xl mx-auto px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-visible">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-primary text-white rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden group p-12 pr-16 md:pr-24 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative z-10">
            <h2 className="font-headline text-4xl font-bold mb-4">The GPA Advantage</h2>
            <p className="text-on-primary-container text-lg max-w-md">As the exclusive enrollment partner of the English Language Institute (ELI) at Seminole State College of Florida, GPA offers a seamless, guided, and stress-free enrollment for international students.</p>
          </div>
          <div className="relative z-10 grid grid-cols-2 gap-8 mt-12">
            <div>
              <span className="block text-5xl font-headline font-bold text-secondary-container mb-2">VIP</span>
              <span className="text-sm font-label uppercase tracking-widest opacity-70">Onboarding: From first hello to first class</span>
            </div>
            <div>
              <span className="block text-5xl font-headline font-bold text-secondary-container mb-2">100%</span>
              <span className="text-sm font-label uppercase tracking-widest opacity-70">Application, i-20, Visa prep, arriving support</span>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 p-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
            <GraduationCap className="w-64 h-64 text-white/5" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-end md:-ml-20 lg:-ml-32 z-20"
        >
          <div className="w-full max-w-sm rotate-3 transform hover:rotate-0 transition-transform duration-500">
            <div className="aspect-[430/492] overflow-hidden rounded-xl shadow-2xl">
              <img alt="Students Studying" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ug2zdQA-KqfEN5umjC0mlruaq_U7zyv6NM_7XFJL1wjSht9mWzN3P9VUnXte7vCSbVie007jij2tTjcI96dywmH3JrPayYC6krGcpoVz9j0FeKlbXUSwXzxd8xmofMuW1D4SShrfiaHcj-_jKgAvrHJxOvldvJ54q77W7rvMJA_R8gcjsOd4Gbx0ZtMGc_WkMAC7RsxnRFigiXdikDTrAPNb_yFEsXEL0OS74ETxERWk8aqO8I3Nc43hCeMogdtfWWGAqu-qT122w" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      title: "Beginner English",
      tag: "Foundation",
      desc: "Build a rock-solid foundation with native speakers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh7Wo7X_B-E9G96nr16GchG2aCBR5QdsRPd45WIU9S98vDfm05O4o19xj8B6K9J9U1OjsrtG4ojOB2PRH7PWVkSbu3ZPdRxR2AlYORhQOjWgEpTF3ZvqwgIMaC8gYkbekQjlhQihmYQNbwYKxRkgn7BQOiK84hUa_BPjxFyqdF-Df2FUPgAE5WjO8jnaMpBrm0bFvowpFaR9OE46gf6kfOmJobIuCTVZJx28pWx-I56eHIsaX-XCIzQdVzsg4LRCQoUCLEihxbg49B"
    },
    {
      title: "Intermediate",
      tag: "feel the difference",
      desc: "Bridging the gap to professional communication.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdl4EiCRt-xxDd98FE6oLR6BwUFVd4Yh1ntUM9bE0OTe3GuRCmBlJgtqrYloLntwECOnR-rMHeXTVlX9y_HNNYfzyPVfx7YRgyoshj6TGScBzIvzwylLmrlsB_VuEvSYvcYkd3Dvdbg33ot8HBO8bBAlQklFGEZRFTSmTqHwK47JyRGoYd3inW-MUWGx5TOrQl773w-ENM7NYsFzNFkUtgodxsw9LR4TQKhhTGD8lkrkOFgebUKL4PuBhQM6388ALPD5lUcGCNs4F-"
    },
    {
      title: "Advanced",
      tag: "consolidate",
      desc: "Mastery for higher education and global careers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFn1uH4FTCjxho-6fojP4a74YUxisAxkIngf-j3SLuYcBnIHXLWP_HTTMLNrZtWXZ01NCZEaHwtYwf-T6vQA6d5Equ1yUJJtENGFveYCmisB5QLVMydQYDupM9wOawV-pdNG1QZplbSeEPWcu0u-aHALdQBZJZJtdNHG7C5xg55orXUA8kO-03C9pyi6coEKkvAaFYiWE_auF5qDUHgBzbFQgYmB4YYHea4ZpeNtWea-D-7I31iyCJ79uphgHN2uY14Vwxp2_ySHMl"
    }
  ];

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

function ChooseProgram() {
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

function HowItWorks() {
  const steps = [
    { num: "01", icon: MessageSquare, title: "Free Consultation", desc: "Tell us about your goals and dreams. We answer every question you have." },
    { num: "02", icon: FileText, title: "Application", desc: "Gather and submit your documentation and submit your information. We handle the application process." },
    { num: "03", icon: ShieldCheck, title: "Visa Support", desc: "We will provide support and make sure you feel ready for your Visa request." },
    { num: "04", icon: PlaneTakeoff, title: "Arrival", desc: "We will help you find everything you need from your first day in USA. Airport transportation, Housing, Insurance and arrival to your first classes." },
    { num: "05", icon: Headset, title: "Student Support", desc: "Have a question? let us know! We are ready and happy to help!" }
  ];

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

function CampusIntro() {
  return (
    <section className="py-24 bg-white overflow-hidden relative" id="campus-intro">
      <div className="max-w-screen-2xl mx-auto px-8">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[100px]">Florida Campus</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Live the real American experience</h2>
        <p className="text-on-surface-variant text-lg max-w-4xl leading-relaxed mt-0 -mb-[40px]">
          Don't settle for crowded classrooms, boring lectures, and language apps that don't deliver actual results. Immerse yourself in the true American lifestyle! Study alongside thousands of American college students and top-tier native instructors on a sprawling, 100+ acre world-class campus.
        </p>
      </div>
    </section>
  );
}

function CampusGallery() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBfKAyhfSLt1q7n5-9-CW5-wT3w8W8Iyf2Hblvb27HmKzOL1qBnL5j4FvnE3UwFSOyeQrKcfQsZApIBw9BY36i3uUWJe5xopVnXU9-h4jMw2am0D1jUyLabMPw-FagzpiyRbl5zELRxIh_V-4saVpLKueG-GH9ftOC09pmO8YOExy1L3I_LeBmmGguWMbWFkoIrGViHQrKfKP6kmCAzk5oiQXtp0h5EzAK-qJNUPkuwjbMyFEURiWGOyeUO_HIICf4uxAbL8RHOV54V",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCoWO6SfgBN2hE3uFtGtbb9mn1AYpDxcu2D_h2I3fN3okbgmrdYCMmN-UT_M3NV2yzLSJNgjL8Mtu6mUAnhdZomHoHS6HLe1y9BoxbSmfSLXqJgqyfNT95luCAA-QoQ8N7zvZl5VTE4NP4VqYaiv9q1w982YErx01x3l65hnIZtQO-QxZcDCDKcvLRr3CnnUAXgv18tN59mowvDgA4Fh_3byYRD0hngR1IxtI8ZxOTSHuj-RqO0K7nQXevvuOk_CY3VA4PXl5d5DVcA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDer5YFVqvRHaKeEl4_371kiA9TJFT9yNHsKgX1sa00nHou9QwAGPE0rKAxwilwZ74JuRq8OW41McJVXnCgsJmvljGMIP2sWNA2NUdXuvWABEbOgg9ZrAQ0rGFQMzWrWNURZZD_xhS3Y7rosWmc8C4EGbpSJIzRudE9dHbc-PI_tLUdE80OM-3VY3DraJ__UcjP_NdrUr-gtG-K-WFzNHDYeI4E42Es9YXv5r-zZb8tE4uAu_wo-fgHykN3-SWlJ-qIHd3IU1i7YJtV",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCjacHJbEJXmyMBKAVuPdnITaDVpgOgidy3RT36MhE2dBocPOOu-Ps9nhDZ_dEMXGwYt5nYp6IJ__IVtCPO11zx36aeGE1pwxFMWWMMw-XSHnw0rYz_07tM_I-6YqZKxSmdpyFLmO44itQRlMBlKOkis2J5fv_FxwuclCcHaXzt_9JI2lG-ikzhzickGUBYebQ77wOBFwKGenQA1xzPEc5q5i6rQBMiMLJQGjOPzXeTD_3sqPg2l9b3-4tcfkcjL1yO4zuZQ-2zWJAh",
    "https://picsum.photos/seed/campus1/800/600",
    "https://picsum.photos/seed/campus2/800/600",
    "https://picsum.photos/seed/campus3/800/600",
    "https://picsum.photos/seed/campus4/800/600",
    "https://picsum.photos/seed/campus5/800/600",
    "https://picsum.photos/seed/campus6/800/600"
  ];
  const widths = ["w-[400px]", "w-[600px]", "w-[400px]", "w-[500px]", "w-[450px]", "w-[550px]", "w-[400px]", "w-[600px]", "w-[450px]", "w-[500px]"];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.05; // pixels per ms

    const scroll = (time: number) => {
      if (scrollRef.current && !isHovered) {
        const delta = time - lastTime;
        scrollRef.current.scrollLeft += speed * delta;
        
        // Reset to start for infinite scroll illusion
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -600 : 600;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative group mr-0" id="campus">
      <div 
        className="relative -mt-[50px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={() => scrollByAmount('left')} 
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-primary"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scrollByAmount('right')} 
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-primary"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef} 
          className="flex gap-6 overflow-x-auto no-scrollbar px-8 pb-8 pt-4"
        >
          {/* Double the images for infinite scroll effect */}
          {[...images, ...images].map((img, i) => (
            <div key={i} className={`flex-shrink-0 ${widths[i % widths.length]} h-[500px] rounded-[2rem] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}>
              <img alt="Campus" className="w-full h-full object-cover" src={img} referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const testimonialsRow1 = [
    { name: "Sebastian", country: "Venezuela", quote: "Entertaining classes", fullReview: "The classes here are incredibly entertaining and engaging. I've never had so much fun learning English!", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sebastian&backgroundColor=transparent" },
    { name: "Anthony", country: "USA", quote: "Friendly community", fullReview: "The community is so welcoming and friendly. I felt right at home from the very first day.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anthony&backgroundColor=transparent" },
    { name: "Holly", country: "China", quote: "High-quality education", fullReview: "The quality of education is top-notch. The professors really care about your success and progress.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Holly&backgroundColor=transparent" },
    { name: "Juan", country: "Colombia", quote: "World-class professionals!", fullReview: "Learning from world-class professionals has given me insights I couldn't get anywhere else.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan&backgroundColor=transparent" },
    { name: "Paola", country: "Bolivia", quote: "Diverse activities program", fullReview: "The activities program is so diverse. There's always something new and exciting to do on campus.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Paola&backgroundColor=transparent" },
    { name: "Mateo", country: "Brazil", quote: "Life-changing experience", fullReview: "This entire experience has been life-changing. I've grown so much both personally and academically.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo&backgroundColor=transparent" },
  ];

  const testimonialsRow2 = [
    { name: "Yuki", country: "Japan", quote: "Amazing campus life", fullReview: "The campus life is amazing! The facilities are beautiful and there are so many clubs to join.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki&backgroundColor=transparent" },
    { name: "Elena", country: "Spain", quote: "Supportive staff", fullReview: "The staff is incredibly supportive. They helped me with everything from my visa to finding housing.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena&backgroundColor=transparent" },
    { name: "Ahmed", country: "Egypt", quote: "Great teachers", fullReview: "The teachers are great and very patient. They make sure everyone understands the material.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=transparent" },
    { name: "Maria", country: "Mexico", quote: "Orlando is magic", fullReview: "Living in Orlando is pure magic. The weather is perfect and there are so many theme parks nearby!", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria&backgroundColor=transparent" },
    { name: "David", country: "Germany", quote: "Best decision!", fullReview: "Coming here was the best decision I've ever made. I highly recommend this program to anyone.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=transparent" },
    { name: "Sofia", country: "Italy", quote: "Beautiful campus", fullReview: "The campus is absolutely beautiful. I love studying outside under the palm trees.", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia&backgroundColor=transparent" },
  ];

  const TestimonialBubble = ({ t }: { t: any, key?: any }) => (
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
          {/* Replace img with a real <video> tag when you have the video URL */}
          <img alt="Mateo Silva" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Student Info */}
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Mateo Silva</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">Brazil • Advanced Program</span>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high md:scale-105 z-10">
          {/* Replace img with a real <video> tag when you have the video URL */}
          <img alt="Yuki Tanaka" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Student Info */}
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Yuki Tanaka</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">Japan • Intermediate</span>
          </div>
        </div>

        {/* Video Card 3 */}
        <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer bg-surface-container-high">
          {/* Replace img with a real <video> tag when you have the video URL */}
          <img alt="Isabella Rossi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000040]/90 via-[#000040]/20 to-transparent"></div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
              <Play className="w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Student Info */}
          <div className="absolute bottom-0 left-0 w-full p-8 text-white">
            <h4 className="font-headline text-2xl font-bold mb-1">Isabella Rossi</h4>
            <span className="text-xs uppercase tracking-widest text-[#fcd400] font-bold">Italy • Beginner</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomSelect({ options, placeholder, value, onChange }: { options: string[], placeholder: string, value: string, onChange: (val: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full text-sm" ref={selectRef}>
      <div 
        className={`w-full bg-white border ${isOpen ? 'border-primary/50' : 'border-outline-variant/20'} rounded-full py-4 px-6 flex justify-between items-center cursor-pointer hover:border-primary/30 transition-colors shadow-sm`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "text-on-surface" : "text-on-surface-variant/60"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-2 w-full bg-white border border-outline-variant/10 rounded-3xl shadow-xl p-2 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`flex justify-between items-center px-4 py-3 rounded-2xl cursor-pointer transition-colors ${value === option ? 'bg-surface-container-low text-primary font-medium' : 'hover:bg-surface-container-low text-on-surface'}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              <span>{option}</span>
              {value === option && <Check className="w-4 h-4 text-primary" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const countryCodes = [
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+375', country: 'Belarus', flag: '🇧🇾' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
  { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
  { code: '+1', country: 'Canada', flag: '🇨🇦' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
  { code: '+385', country: 'Croatia', flag: '🇭🇷' },
  { code: '+53', country: 'Cuba', flag: '🇨🇺' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+1', country: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+30', country: 'Greece', flag: '🇬🇷' },
  { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
  { code: '+509', country: 'Haiti', flag: '🇭🇹' },
  { code: '+504', country: 'Honduras', flag: '🇭🇳' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+36', country: 'Hungary', flag: '🇭🇺' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+98', country: 'Iran', flag: '🇮🇷' },
  { code: '+964', country: 'Iraq', flag: '🇮🇶' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+1', country: 'Jamaica', flag: '🇯🇲' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+507', country: 'Panama', flag: '🇵🇦' },
  { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+40', country: 'Romania', flag: '🇷🇴' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+381', country: 'Serbia', flag: '🇷🇸' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+963', country: 'Syria', flag: '🇸🇾' },
  { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
  { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+1', country: 'United States', flag: '🇺🇸' },
  { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
  { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+967', country: 'Yemen', flag: '🇾🇪' },
];

function PhoneInput() {
  const [phoneCode, setPhoneCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, ''); // Only allow numbers
    setPhoneNumber(val);
    
    if (phoneError && val.length >= 7 && val.length <= 15) {
      setPhoneError('');
    }
  };

  const handleBlur = () => {
    if (phoneNumber.length > 0 && (phoneNumber.length < 7 || phoneNumber.length > 15)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  };

  const selectedCountry = countryCodes.find(c => c.code === phoneCode) || countryCodes[0];

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className={`flex items-center w-full bg-surface-container-low rounded-xl focus-within:ring-2 focus-within:ring-primary/20 transition-all ${phoneError ? 'ring-2 ring-red-500/50 bg-red-50/50' : ''}`}>
        {/* Dropdown Trigger */}
        <div
          className="flex items-center gap-1.5 px-3 py-4 cursor-pointer border-r border-outline-variant/20 hover:bg-black/5 rounded-l-xl transition-colors shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {/* Input */}
        <input
          className="flex-1 min-w-0 w-full bg-transparent border-0 py-4 px-3 text-sm outline-none text-on-surface placeholder:text-on-surface-variant/60"
          placeholder="5550000000"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={handleBlur}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-2 w-80 bg-white border border-outline-variant/10 rounded-3xl shadow-xl p-2 animate-in fade-in zoom-in-95 duration-100 max-h-60 overflow-y-auto">
          {countryCodes.map((c) => (
            <div
              key={c.country + c.code}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-colors ${phoneCode === c.code ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'}`}
              onClick={() => {
                setPhoneCode(c.code);
                setIsOpen(false);
              }}
            >
              <span className="text-xl leading-none shrink-0">{c.flag}</span>
              <span className="font-medium text-sm w-12 shrink-0">{c.code}</span>
              <span className="text-xs text-on-surface-variant truncate flex-1">{c.country}</span>
              {phoneCode === c.code && <Check className="w-4 h-4 text-primary shrink-0 ml-auto" />}
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {phoneError && (
        <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2 animate-in slide-in-from-top-1">
          <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
          {phoneError}
        </div>
      )}
    </div>
  );
}

function DateSelect({ value, options, onChange, className }: { value: string | number, options: {label: string, value: string | number}[], onChange: (val: any) => void, className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && ref.current) {
      const selectedEl = ref.current.querySelector('[data-selected="true"]');
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'center' });
      }
    }
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <div 
        className="flex items-center justify-between bg-white border border-outline-variant/20 rounded-lg px-3 py-2 cursor-pointer hover:bg-surface-container-low transition-colors text-sm text-on-surface"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{options.find(o => o.value === value)?.label}</span>
        <ChevronDown className="w-4 h-4 text-on-surface-variant ml-2" />
      </div>
      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-1 w-full bg-white border border-outline-variant/10 rounded-lg shadow-xl py-1 max-h-60 overflow-y-auto scrollbar-hide">
          {options.map(opt => (
            <div 
              key={opt.value}
              data-selected={opt.value === value}
              className="flex items-center px-3 py-2 hover:bg-surface-container-low cursor-pointer text-sm text-on-surface"
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
            >
              <div className="w-4 flex justify-center mr-2">
                {opt.value === value && <Check className="w-3 h-3 text-primary" />}
              </div>
              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CustomDatePicker({ value, onChange, error, onBlur }: { value: string, onChange: (val: string) => void, error?: string, onBlur?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);
  
  const today = new Date();
  const currentRealYear = today.getFullYear();
  const currentRealMonth = today.getMonth();
  const currentRealDate = today.getDate();

  const initialDate = value ? new Date(value + 'T12:00:00Z') : null;
  const [currentMonth, setCurrentMonth] = useState(initialDate ? initialDate.getUTCMonth() : currentRealMonth);
  const [currentYear, setCurrentYear] = useState(initialDate ? initialDate.getUTCFullYear() : currentRealYear);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        if (isOpen && onBlur) onBlur();
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onBlur]);

  const handleDayClick = (day: number, monthOffset: number, isFuture: boolean) => {
    if (isFuture) return;

    let newMonth = currentMonth + monthOffset;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    
    const formatted = `${newYear}-${String(newMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    onChange(formatted);
    setIsOpen(false);
  };

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const daysInPrevMonth = getDaysInMonth(currentMonth - 1, currentYear);

  const grid = [];
  for (let i = 0; i < firstDay; i++) {
    grid.push({ day: daysInPrevMonth - firstDay + i + 1, isCurrentMonth: false, monthOffset: -1 });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    grid.push({ day: i, isCurrentMonth: true, monthOffset: 0 });
  }
  const remainingDays = 42 - grid.length;
  for (let i = 1; i <= remainingDays; i++) {
    grid.push({ day: i, isCurrentMonth: false, monthOffset: 1 });
  }

  const years = Array.from({ length: 120 }, (_, i) => currentRealYear - 119 + i).reverse();
  const availableMonths = currentYear === currentRealYear 
    ? months.slice(0, currentRealMonth + 1).map((m, i) => ({ label: m, value: i }))
    : months.map((m, i) => ({ label: m, value: i }));

  let displayValue = "";
  if (value) {
    const [y, m, d] = value.split('-').map(Number);
    const dateObj = new Date(y, m - 1, d);
    displayValue = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  return (
    <div className="relative w-full" ref={datePickerRef}>
      <div 
        className={`w-full bg-surface-container-low border-0 rounded-xl py-4 px-6 focus-within:ring-2 focus-within:ring-primary/20 text-sm outline-none transition-all cursor-pointer flex justify-between items-center ${error ? 'ring-2 ring-red-500/50 bg-red-50/50' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={displayValue ? "text-on-surface" : "text-on-surface-variant/60"}>
          {displayValue || "Select date"}
        </span>
        <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-2 p-4 bg-white border border-outline-variant/10 text-on-surface rounded-2xl shadow-xl w-[320px] animate-in fade-in zoom-in-95 duration-100">
          <div className="flex gap-2 mb-4">
            <DateSelect 
              className="flex-1"
              value={currentMonth} 
              options={availableMonths} 
              onChange={setCurrentMonth} 
            />
            <DateSelect 
              className="w-28"
              value={currentYear} 
              options={years.map(y => ({ label: y.toString(), value: y }))} 
              onChange={(newYear) => {
                setCurrentYear(newYear);
                if (newYear === currentRealYear && currentMonth > currentRealMonth) {
                  setCurrentMonth(currentRealMonth);
                }
              }} 
            />
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(d => (
              <div key={d} className="text-center text-xs font-medium text-on-surface-variant py-1">
                {d}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {grid.map((item, index) => {
              let targetMonth = currentMonth + item.monthOffset;
              let targetYear = currentYear;
              if (targetMonth < 0) {
                targetMonth = 11;
                targetYear--;
              } else if (targetMonth > 11) {
                targetMonth = 0;
                targetYear++;
              }

              const isFuture = targetYear > currentRealYear || 
                               (targetYear === currentRealYear && targetMonth > currentRealMonth) ||
                               (targetYear === currentRealYear && targetMonth === currentRealMonth && item.day > currentRealDate);

              const isSelected = value && (() => {
                const [y, m, d] = value.split('-').map(Number);
                return y === targetYear && m === targetMonth + 1 && d === item.day;
              })();
                
              return (
                <div 
                  key={index}
                  className={`
                    flex items-center justify-center h-10 rounded-lg text-sm transition-colors
                    ${isFuture ? 'text-on-surface-variant/20 cursor-not-allowed' : 
                      item.isCurrentMonth ? 'text-on-surface hover:bg-surface-container-low cursor-pointer' : 'text-on-surface-variant/40 hover:bg-surface-container-low/50 cursor-pointer'}
                    ${isSelected && !isFuture ? 'bg-primary text-white hover:bg-primary/90 font-medium' : ''}
                  `}
                  onClick={() => handleDayClick(item.day, item.monthOffset, isFuture)}
                >
                  {item.day}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Enrollment() {
  const [country, setCountry] = useState("");
  const [term, setTerm] = useState("");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setEmailError("");
    }
  };

  const handleEmailBlur = () => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateAge = (dateStr: string) => {
    if (!dateStr) return;
    const [y, m, d] = dateStr.split('-').map(Number);
    const birthDate = new Date(y, m - 1, d);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 14) {
      setDobError("You must be at least 14 years old");
    } else {
      setDobError("");
    }
  };

  const handleDobChange = (val: string) => {
    setDob(val);
    validateAge(val);
  };

  const handleDobBlur = () => {
    validateAge(dob);
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-[50px] pb-24 -mt-[40px] mb-[-10px]" id="enrollment">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mt-0">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <p className="text-on-surface-variant mb-10 text-lg">It's free and takes 2 minutes. Fill out the form and a GPA advisor will contact you within 24 hours.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Full Name</label>
                <input className="w-full bg-surface-container-low border-0 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 text-sm outline-none" placeholder="John Doe" type="text" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Email Address</label>
                <div className="relative">
                  <input 
                    className={`w-full bg-surface-container-low border-0 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all ${emailError ? 'ring-2 ring-red-500/50 bg-red-50/50' : ''}`} 
                    placeholder="john@example.com" 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                  />
                  {emailError && (
                    <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2 animate-in slide-in-from-top-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                      {emailError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">WhatsApp Number</label>
                <PhoneInput />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Date of Birth</label>
                <div className="relative">
                  <CustomDatePicker 
                    value={dob}
                    onChange={handleDobChange}
                    onBlur={handleDobBlur}
                    error={dobError}
                  />
                  {dobError && (
                    <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2 animate-in slide-in-from-top-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                      {dobError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Country of Origin</label>
                <CustomSelect 
                  placeholder="Select country" 
                  options={countryCodes.map(c => c.country)} 
                  value={country} 
                  onChange={setCountry} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Preferred Start Date</label>
                <CustomSelect 
                  placeholder="Select term" 
                  options={["Spring 2026", "Summer 2026", "Fall 2026", "Spring 2027"]} 
                  value={term} 
                  onChange={setTerm} 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">English Level</label>
                <CustomSelect 
                  placeholder="Select level" 
                  options={["Beginner (A1-A2)", "Intermediate (B1-B2)", "Advanced (C1-C2)"]} 
                  value={level} 
                  onChange={setLevel} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Program of interest</label>
                <CustomSelect 
                  placeholder="Select a program" 
                  options={["Short-Term", "Long-Term", "Professional"]} 
                  value={course} 
                  onChange={setCourse} 
                />
              </div>
            </div>
            <button className="w-full bg-primary text-white py-5 rounded-xl font-headline font-bold text-xl hover:bg-black transition-all shadow-lg hover:shadow-primary/20" type="submit">
              Apply Now
            </button>
          </form>
        </div>
        
        <div className="hidden lg:block relative bg-white p-12 flex flex-col items-center justify-center overflow-hidden">
          {/* Background Icon */}
          <div className="absolute -bottom-10 -right-10 text-primary/5 z-0">
            <MessageCircle className="w-96 h-96 animate-pulse" />
          </div>

          {/* Collage Container */}
          <div className="relative w-full max-w-xs aspect-[9/16] mb-20 z-10 mx-auto">
            {/* Background Shape */}
            <div className="absolute inset-2 bg-surface-container-high rounded-[3rem] rotate-3"></div>
            
            {/* Main Image (Blue Duotone) */}
            <div className="absolute inset-6 rounded-3xl overflow-hidden shadow-2xl z-10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer hover:z-30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group">
              <img alt="Student" className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-primary/60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent"></div>
            </div>

            {/* Top Left Polaroid */}
            <div className="absolute top-4 -left-24 w-40 bg-white p-2 pb-8 shadow-xl -rotate-12 z-20 rounded-sm hover:-translate-y-4 hover:rotate-[-4deg] hover:scale-110 transition-all duration-500 cursor-pointer hover:z-30 hover:shadow-2xl">
              <img alt="Campus Palm Trees" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?q=80&w=400&auto=format&fit=crop" />
            </div>

            {/* Bottom Right Polaroid */}
            <div className="absolute bottom-8 -right-24 w-44 bg-white p-2 pb-8 shadow-2xl rotate-12 z-20 rounded-sm hover:-translate-y-4 hover:rotate-[4deg] hover:scale-110 transition-all duration-500 cursor-pointer hover:z-30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
              <img alt="Global Community" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white border border-outline-variant/20 rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all h-fit"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="font-bold text-on-surface text-lg">{question}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
        <div className="overflow-hidden">
          <p className="text-on-surface-variant leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need a student visa for short courses?", a: "Depending on your country of origin and the duration of the course (less than 18 hours per week), you might be able to study under a tourist visa or B1/B2. However, for full-time academic studies, an F-1 visa is required." },
    { q: "Is the application free?", a: "GPA provides free consultation and guidance services. Seminole State College may have their own institutional application fee, but our support through the entire process comes at no cost to the student." },
    { q: "When are the start dates?", a: "Academic terms typically start in Spring (January), Summer (May), and Fall (August). Short-term programs often have more frequent intakes." },
    { q: "Does the college provide housing?", a: "While Seminole State is a commuter campus, GPA offers a dedicated Housing Concierge to help students find nearby apartments or homestay options that fit their budget." },
    { q: "Can I work while studying?", a: "F-1 students can work on-campus up to 20 hours per week while school is in session. Off-campus work requires special authorization." },
    { q: "What is the class size?", a: "Our classes are small, typically 10-15 students, ensuring personalized attention from instructors." }
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-8 py-24" id="faq">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary -mt-[55px]">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer aria-label="Footer" className="bg-surface-variant/30 py-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-screen-2xl mx-auto">
        <div className="col-span-1 lg:col-span-2">
          <div className="text-lg font-black text-primary mb-6">GLOBAL PARTNERS ACADEMY</div>
          <p className="text-on-surface-variant max-w-sm mb-8 leading-relaxed">
            GPA is a premier academic institution in Orlando, Florida, providing affordable, high-quality American education.
          </p>
          <div className="flex gap-4">
            <a className="text-primary/60 hover:text-primary transition-colors" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
            <a className="text-primary/60 hover:text-primary transition-colors" href="#">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline font-bold mb-6 uppercase tracking-widest text-xs">University</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Programs</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Admissions</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Campus Life</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold mb-6 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">FAQ</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Student Support</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-outline-variant/10 text-center text-on-surface-variant/60 text-sm">
        &copy; {new Date().getFullYear()} Global Partners Academy. All rights reserved.
      </div>
    </footer>
  );
}

function InternationalFamily() {
  return (
    <section className="bg-white pb-[64px] pt-24 px-8 border-t border-outline-variant/10 -mt-[20px] -mb-[50px] relative group" id="international-family">
      <div className="absolute top-0 left-12 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
        <Globe className="w-60 h-60 text-primary/15" strokeWidth={1.5} />
      </div>
      <div className="max-w-screen-2xl mx-auto text-right relative z-10">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold -mt-[50px] mb-0 block">Global Community</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight text-primary mb-6 -mb-[10px]">ELI: an international family</h2>
        <p className="text-on-surface-variant text-lg max-w-4xl ml-auto leading-relaxed -mb-[35px]">
          Connect with students from around the world who are ready to transform their lives through 100% immersion. With a calendar packed with american traditions, weekly activities, field trips and elective classes in the vacation capital of the world, your learning doesn't stop when the bell rings. In ELI you don't just learn the language—you live it every single day!
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-white font-body text-on-background min-h-screen selection:bg-secondary-container selection:text-on-secondary-container">
      <div className="grain-overlay"></div>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <CampusIntro />
        <VideoShowcase />
        <InternationalFamily />
        <CampusGallery />
        <section className="py-12 text-left max-w-screen-2xl mx-auto px-8 relative group">
          <div className="absolute top-0 right-12 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
            <BadgeCheck className="w-60 h-60 text-primary/15" />
          </div>
          <h2 className="font-headline text-xs font-bold tracking-tight mb-2 text-secondary">Global Partners Academy</h2>
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Your VIP Admission Concierge</h2>
          <p className="text-on-surface-variant text-lg max-w-4xl leading-relaxed mb-[-20px]">
            We make your journey to Seminole State College's ELI as smooth as possible. By providing expert help with every form and requirement, we eliminate the guesswork, delays, and stress that often come with studying abroad. Our team handles the administrative details from start to finish; you simply focus on the dream of mastering English and experiencing life in the US.
          </p>
        </section>
        <Stats />
        <Programs />
        <ChooseProgram />
        <HowItWorks />
        <Reviews />
        <section className="max-w-screen-2xl mx-auto px-8 py-24 text-center">
          <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block">Apply now</span>
          <h2 className="font-headline text-5xl font-bold tracking-tight text-primary mb-[-200px]">Start your journey today!</h2>
        </section>
        <Enrollment />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
