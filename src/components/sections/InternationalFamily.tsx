import React from 'react';
import { Globe } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function InternationalFamily() {
  return (
    <section className="bg-white pb-[64px] pt-24 px-8 border-t border-outline-variant/10 relative group" id="international-family">
      <div className="absolute top-0 left-12 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
        <Globe className="w-60 h-60 text-primary/15" strokeWidth={1.5} />
      </div>
      <div className="max-w-screen-2xl mx-auto text-right relative z-10">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold -mt-[50px] mb-0 block">Global Community</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight text-primary mb-6 -mb-[10px]">ELI: an international family</h2>
        <p className="text-on-surface-variant text-lg max-w-4xl ml-auto leading-relaxed -mb-[35px]">
          Connect with students from around the world who are ready to transform their lives through 100% immersion. With a calendar packed with american traditions, weekly activities, field trips and elective classes in the vacation capital of the world, your learning doesn't stop when the bell rings. In ELI you don't just learn the language—you live it every single day!
        </p>
      </div>
    </section>
  );
}
