import React from 'react';
import { BadgeCheck } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function VipConcierge() {
  return (
    <section className="py-12 text-left max-w-screen-2xl mx-auto px-8 relative group">
      <div className="absolute top-0 right-12 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none animate-float-alt">
        <BadgeCheck className="w-60 h-60 text-primary/15" />
      </div>
      <h2 className="font-headline text-xs font-bold tracking-tight mb-2 text-secondary">Global Partners Academy</h2>
      <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">Your VIP Admission Concierge</h2>
      <p className="text-on-surface-variant text-lg max-w-4xl leading-relaxed mb-[-20px]">
        We make your journey to Seminole State College's ELI as smooth as possible. By providing expert help with every form and requirement, we eliminate the guesswork, delays, and stress that often come with studying abroad. Our team handles the administrative details from start to finish; you simply focus on the dream of mastering English and experiencing life in the US.
      </p>
    </section>
  );
}
