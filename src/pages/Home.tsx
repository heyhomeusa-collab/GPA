import React from 'react';
import { Hero } from '../components/sections/Hero';
import { CampusIntro } from '../components/sections/CampusIntro';
import { VideoShowcase } from '../components/sections/VideoShowcase';
import { InternationalFamily } from '../components/sections/InternationalFamily';
import { CampusGallery } from '../components/sections/CampusGallery';
import { VipConcierge } from '../components/sections/VipConcierge';
import { Stats } from '../components/sections/Stats';
import { Programs } from '../components/sections/Programs';
import { ChooseProgram } from '../components/sections/ChooseProgram';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Reviews } from '../components/sections/Reviews';
import { Enrollment } from '../components/sections/Enrollment';
import { FAQ } from '../components/sections/FAQ';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <CampusIntro />
      <VideoShowcase />
      <InternationalFamily />
      <CampusGallery />
      <VipConcierge />
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
  );
}
