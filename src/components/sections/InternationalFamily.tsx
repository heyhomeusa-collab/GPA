import React from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function InternationalFamily() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pb-[64px] pt-24 px-8 border-t border-outline-variant/10 relative group" id="international-family">
      <div className="absolute top-0 left-12 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
        <Globe className="w-60 h-60 text-primary/15" strokeWidth={1.5} />
      </div>
      <div className="max-w-screen-2xl mx-auto text-right relative z-10">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold -mt-[50px] mb-0 block">{t.internationalFamily.badge}</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight text-primary mb-6 -mb-[10px]">{t.internationalFamily.title}</h2>
        <p className="text-on-surface-variant text-lg max-w-4xl ml-auto leading-relaxed -mb-[35px]">
          {t.internationalFamily.description}
        </p>
      </div>
    </section>
  );
}
