import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, availableLanguages } = useLanguage();
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/50 hover:bg-white/80 backdrop-blur-md border border-outline-variant/20 rounded-full py-2 px-4 text-sm font-medium transition-all"
      >
        <span className="uppercase text-xs font-bold text-on-surface-variant">{language.code}</span>
        <span>{language.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-outline-variant/10 rounded-2xl shadow-xl py-2 z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang.name}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-surface-container-low flex items-center gap-3 ${language.code === lang.code ? 'text-primary font-bold' : 'text-on-surface'}`}
            >
              <span className="uppercase text-xs font-bold text-on-surface-variant">{lang.code}</span>
              {lang.name}
              {language.code === lang.code && <Check className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
