import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export function CustomDatePicker({ value, onChange, error, onBlur }: { value: string, onChange: (val: string) => void, error?: string, onBlur?: () => void }) {
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
