import React from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function CampusIntro() {
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
