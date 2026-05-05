import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
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
};

export function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    { q: t.faq.items.q1, a: t.faq.items.a1 },
    { q: t.faq.items.q2, a: t.faq.items.a2 },
    { q: t.faq.items.q3, a: t.faq.items.a3 },
    { q: t.faq.items.q4, a: t.faq.items.a4 },
    { q: t.faq.items.q5, a: t.faq.items.a5 },
    { q: t.faq.items.q6, a: t.faq.items.a6 }
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-8 py-24" id="faq">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary -mt-[55px]">
          {t.faq.title1} <span className="text-secondary">{t.faq.title2}</span>
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}
