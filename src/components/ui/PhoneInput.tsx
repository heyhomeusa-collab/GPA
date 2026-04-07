import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export { countryCodes };

export function PhoneInput() {
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
        <div
          className="flex items-center gap-1.5 px-3 py-4 cursor-pointer border-r border-outline-variant/20 hover:bg-black/5 rounded-l-xl transition-colors shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg leading-none">{selectedCountry.flag}</span>
          <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        <input
          className="flex-1 min-w-0 w-full bg-transparent border-0 py-4 px-3 text-sm outline-none text-on-surface placeholder:text-on-surface-variant/60"
          placeholder="5550000000"
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          onBlur={handleBlur}
        />
      </div>

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

      {phoneError && (
        <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2 animate-in slide-in-from-top-1">
          <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
          {phoneError}
        </div>
      )}
    </div>
  );
}
