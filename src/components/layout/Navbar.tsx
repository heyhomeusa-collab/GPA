import React from 'react';
import { LanguageDropdown } from '../ui/LanguageDropdown';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Navbar() {
  const { t } = useTranslation();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav aria-label="Main Navigation" className="bg-white/70 backdrop-blur-xl font-headline font-bold tracking-tight fixed w-full top-0 z-50">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <a aria-label="GPA | ELI Home" className="text-xl font-bold tracking-tighter text-primary uppercase" href="/">
          {t.nav.home}
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('international-family')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t.nav.eli}</button>
          <button onClick={() => scrollToSection('programs')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t.nav.programs}</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t.nav.howItWorks}</button>
          <button onClick={() => scrollToSection('reviews')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t.nav.reviews}</button>
          <button onClick={() => scrollToSection('faq')} className="text-on-surface-variant font-medium hover:text-primary transition-colors">{t.nav.faq}</button>
        </div>
        <div className="flex items-center gap-4">
          <LanguageDropdown />
          <button 
            onClick={() => scrollToSection('enrollment')}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-label text-xs uppercase tracking-widest hover:bg-black transition-all"
          >
            {t.nav.applyNow}
          </button>
        </div>
      </div>
    </nav>
  );
}
