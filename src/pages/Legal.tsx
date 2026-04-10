import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowLeft, FileText, ShieldCheck, Phone, Mail, HelpCircle, Lock, Globe } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Legal() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10">
      {/* Decorative grain overlay */}
      <div className="grain-overlay opacity-50"></div>

      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-outline-variant/10 px-8 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-xl font-black text-primary tracking-tighter cursor-pointer" onClick={() => window.location.href = '/'}>
            GPA | ELI
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-primary font-bold hover:scale-105 transition-all text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.legal.backToHome}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-8 max-w-screen-md mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-4 border-b border-outline-variant/10 pb-12">
            <h2 className="text-primary font-black text-2xl tracking-tighter">GLOBAL PROGRAMS ACADEMY</h2>
            <p className="text-on-surface-variant font-medium text-sm">{t.legal.header.partnership}</p>
            <p className="text-primary/60 text-xs font-mono">www.globalpacademy.com</p>
            <h1 className="text-3xl font-headline font-black text-on-surface uppercase tracking-tight pt-4">
              {t.legal.header.title}
            </h1>
            <p className="text-on-surface-variant/60 text-[10px] font-bold uppercase tracking-[0.2em]">
              {t.legal.lastUpdated} | Version 1.0
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-on-surface-variant leading-relaxed">
            <p className="font-bold text-on-surface italic">
              {t.legal.intro.important}
            </p>
            
            <p>
              {t.legal.intro.governance}
            </p>

            {/* Section 1 */}
            <div className="mt-12 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Globe className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s1.title}</h2>
              </div>
              <p>{t.legal.sections.s1.p1}</p>
              <p>{t.legal.sections.s1.p2}</p>
            </div>

            {/* Section 2 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s2.title}</h2>
              </div>
              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s2.h1}</h3>
              <p>{t.legal.sections.s2.p1}</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{t.legal.sections.s2.li1}</li>
              </ul>
              
              <p className="mt-4 font-bold">{t.legal.sections.s2.p2}</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{t.legal.sections.s2.li2a}</li>
                <li>{t.legal.sections.s2.li2b}</li>
                <li>{t.legal.sections.s2.li2c}</li>
                <li>{t.legal.sections.s2.li2d}</li>
              </ul>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s2.h2}</h3>
              <p>{t.legal.sections.s2.p3}</p>
            </div>

            {/* Section 3 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <FileText className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s3.title}</h2>
              </div>
              <p>{t.legal.sections.s3.p1}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.legal.sections.s3.li.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t.legal.sections.s3.p2}</p>
            </div>

            {/* Section 4 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s4.title}</h2>
              </div>
              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s4.h1}</h3>
              <p>{t.legal.sections.s4.p1}</p>
              <p className="font-bold underline">{t.legal.sections.s4.address}</p>
              <p>{t.legal.sections.s4.p2}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s4.h2}</h3>
              <p>{t.legal.sections.s4.p3}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s4.h3}</h3>
              <p>{t.legal.sections.s4.p4}</p>
            </div>

            {/* Section 5 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s5.title}</h2>
              </div>
              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s5.h1}</h3>
              <p>{t.legal.sections.s5.p1}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.legal.sections.s5.li.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t.legal.sections.s5.p2}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s5.h2}</h3>
              <p>{t.legal.sections.s5.p3}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s5.h3}</h3>
              <p>{t.legal.sections.s5.p4}</p>
            </div>

            {/* Section 6 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s6.title}</h2>
              </div>
              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s6.h1}</h3>
              <p>{t.legal.sections.s6.p1}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s6.h2}</h3>
              <p>{t.legal.sections.s6.p2}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s6.h3}</h3>
              <p>{t.legal.sections.s6.p3}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s6.h4}</h3>
              <p>{t.legal.sections.s6.p4}</p>
            </div>

            {/* Section 7 */}
            <div className="mt-12 bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider m-0">{t.legal.sections.s7.title}</h2>
              </div>
              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2 underline">{t.legal.sections.s7.h1}</h3>
              <p className="font-bold">{t.legal.sections.s7.p1}</p>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2">{t.legal.sections.s7.h2}</h3>
              <p>{t.legal.sections.s7.p2}</p>
              <ul className="list-disc pl-6 space-y-1">
                {t.legal.sections.s7.li.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-on-surface mt-6 mb-2 underline">{t.legal.sections.s7.h3}</h3>
              <p>{t.legal.sections.s7.p3}</p>
              <p>{t.legal.sections.s7.p4}</p>
            </div>

            {/* Remaining Sections */}
            <div className="mt-12 space-y-10">
              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s8.title}</h2>
                <p>{t.legal.sections.s8.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s9.title}</h2>
                <p>{t.legal.sections.s9.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s10.title}</h2>
                <p>{t.legal.sections.s10.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s11.title}</h2>
                <p>{t.legal.sections.s11.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s12.title}</h2>
                <p>{t.legal.sections.s12.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s13.title}</h2>
                <p>{t.legal.sections.s13.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s14.title}</h2>
                <p>{t.legal.sections.s14.p1}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4">{t.legal.sections.s15.title}</h2>
                <p>{t.legal.sections.s15.p1}</p>
              </section>

              <section className="bg-surface-variant/20 p-8 rounded-2xl border border-outline-variant/10">
                <h2 className="text-xl font-bold text-on-surface uppercase tracking-wider mb-4 m-0">{t.legal.sections.s16.title}</h2>
                <div className="mt-4 space-y-2 text-sm">
                  <p><strong>Global Programs Academy</strong></p>
                  <p>Website: www.globalpacademy.com</p>
                  <p>Email: globalpacademy1@gmail.com</p>
                  <p>Program Partner: Seminole State College of Florida — ELI | 100 Weldon Blvd, Sanford, FL 32773, USA</p>
                </div>
              </section>
            </div>
          </div>

          <div className="text-center pt-8 text-[10px] text-on-surface-variant/40 italic">
            <p>&copy; 2026 Global Programs Academy. All rights reserved. | This document does not constitute legal advice.</p>
          </div>
        </div>
      </main>

      <footer className="bg-white py-12 px-8 border-t border-outline-variant/10 text-center">
        <p className="text-on-surface-variant/40 text-xs tracking-widest uppercase">
          GPA &bull; SSC &bull; ELI
        </p>
      </footer>
    </div>
  );
}
