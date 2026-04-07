import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface CustomSelectProps {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

export function CustomSelect({ options, placeholder, value, onChange }: CustomSelectProps) {
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
