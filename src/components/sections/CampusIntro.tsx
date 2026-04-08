import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function CampusIntro() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="campus-intro">
      <div className="max-w-screen-2xl mx-auto px-8">
        <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold mb-4 block -mt-[100px]">{t.campusIntro.badge}</span>
        <h2 className="font-headline text-5xl font-bold tracking-tight mb-6">{t.campusIntro.title}</h2>
        <p className="text-on-surface-variant text-lg max-w-4xl leading-relaxed mt-0 -mb-[40px]">
          {t.campusIntro.description}
        </p>
      </div>
    </section>
  );
}
