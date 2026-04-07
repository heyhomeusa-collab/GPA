import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

function FAQItem({ question, answer }: { question: string, answer: string }) {
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

export function FAQ() {
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
