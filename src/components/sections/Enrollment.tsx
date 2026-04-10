import React, { useState } from 'react';
import { MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { PhoneInput, countryCodes } from '../ui/PhoneInput';
import { CustomDatePicker } from '../ui/CustomDatePicker';
import { CustomSelect } from '../ui/CustomSelect';
import { assets } from '../../config/assets';
import { useTranslation } from '../../hooks/useTranslation';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Enrollment() {
  const { t } = useTranslation();
  const [country, setCountry] = useState("");
  const [term, setTerm] = useState("");
  const [level, setLevel] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setEmailError("");
    }
  };

  const handleEmailBlur = () => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validateAge = (dateStr: string) => {
    if (!dateStr) return;
    const [y, m, d] = dateStr.split('-').map(Number);
    const birthDate = new Date(y, m - 1, d);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 14) {
      setDobError("You must be at least 14 years old");
    } else {
      setDobError("");
    }
  };

  const handleDobChange = (val: string) => {
    setDob(val);
    validateAge(val);
  };

  const handleDobBlur = () => {
    validateAge(dob);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (emailError || dobError) return;
    if (!agreeTerms || !consentMarketing) {
      setErrorMessage("Please accept the terms and communication consent to proceed.");
      setSubmitStatus("error");
      return;
    }
    if (!fullName || !email || !country || !term || !level || !course) {
      setErrorMessage("Please fill all required fields (WhatsApp & DOB are optional).");
      setSubmitStatus("error");
      return;
    }
    
    setErrorMessage("");
    setSubmitStatus("idle");
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-enrollment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, whatsapp, dob, country, term, level, course })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to send");
      }

      setSubmitStatus("success");
      // Clear form except non-controlled inputs (PhoneInput internal state resets aren't implemented, but parent clears)
      setFullName("");
      setEmail("");
      setDob("");
      setCountry("");
      setTerm("");
      setLevel("");
      setLevel("");
      setCourse("");
      setAgreeTerms(false);
      setConsentMarketing(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "System error: Could not send enrollment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-8 pt-[50px] pb-24 -mt-[40px] mb-[-10px]" id="enrollment">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mt-0">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <p className="text-on-surface-variant mb-10 text-lg">{t.enrollment.description}</p>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.fullName}</label>
                <input 
                  className="w-full bg-surface-container-low border-0 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 text-sm outline-none" 
                  placeholder={t.enrollment.form.fullNamePlaceholder} 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.email}</label>
                <div className="relative">
                  <input 
                    className={`w-full bg-surface-container-low border-0 rounded-xl py-4 px-6 focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all ${emailError ? 'ring-2 ring-red-500/50 bg-red-50/50' : ''}`} 
                    placeholder={t.enrollment.form.emailPlaceholder} 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                  />
                  {emailError && (
                    <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2 animate-in slide-in-from-top-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                      {emailError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.whatsapp}</label>
                <PhoneInput onChange={setWhatsapp} />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.dob}</label>
                <div className="relative">
                  <CustomDatePicker 
                    value={dob}
                    onChange={handleDobChange}
                    onBlur={handleDobBlur}
                    error={dobError}
                  />
                  {dobError && (
                    <div className="text-red-500 text-xs font-medium flex items-center gap-1 mt-2 animate-in slide-in-from-top-1">
                      <span className="w-1 h-1 rounded-full bg-red-500 inline-block"></span>
                      {dobError}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.country}</label>
                <CustomSelect 
                  placeholder={t.enrollment.form.countryPlaceholder} 
                  options={countryCodes.map(c => c.country)} 
                  value={country} 
                  onChange={setCountry} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.term}</label>
                <CustomSelect 
                  placeholder={t.enrollment.form.termPlaceholder} 
                  options={["Spring 2026", "Summer 2026", "Fall 2026", "Spring 2027"]} 
                  value={term} 
                  onChange={setTerm} 
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.level}</label>
                <CustomSelect 
                  placeholder={t.enrollment.form.levelPlaceholder} 
                  options={["Beginner (A1-A2)", "Intermediate (B1-B2)", "Advanced (C1-C2)"]} 
                  value={level} 
                  onChange={setLevel} 
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">{t.enrollment.form.program}</label>
                <CustomSelect 
                  placeholder={t.enrollment.form.programPlaceholder} 
                  options={["Short-Term", "Long-Term", "Professional"]} 
                  value={course} 
                  onChange={setCourse} 
                />
              </div>
            </div>

            <div className="space-y-4 py-4">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="mt-1 w-6 h-6 shrink-0 rounded-lg border-2 border-outline-variant/30 text-primary focus:ring-primary/20 transition-all cursor-pointer appearance-auto"
                />
                <span className="text-sm text-on-surface-variant leading-relaxed">
                  {t.enrollment.form.consentTerms
                    .replace('{terms}', '___TERMS___')
                    .replace('{privacy}', '___PRIVACY___')
                    .split('___').map((part, i) => {
                      if (part === 'TERMS') return <a key={i} href="/terms" target="_blank" className="text-primary font-bold hover:underline">{t.enrollment.form.termsLink}</a>;
                      if (part === 'PRIVACY') return <a key={i} href="/privacy" target="_blank" className="text-primary font-bold hover:underline">{t.enrollment.form.privacyLink}</a>;
                      return part;
                    })
                  }
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={consentMarketing}
                  onChange={(e) => setConsentMarketing(e.target.checked)}
                  className="mt-1 w-6 h-6 shrink-0 rounded-lg border-2 border-outline-variant/30 text-primary focus:ring-primary/20 transition-all cursor-pointer appearance-auto"
                />
                <span className="text-sm text-on-surface-variant leading-relaxed">
                  {t.enrollment.form.consentMarketing}
                </span>
              </label>
            </div>

            <button 
              className="w-full bg-primary text-white py-5 rounded-xl font-headline font-bold text-xl hover:bg-black transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3" 
              type="submit"
              disabled={isLoading || !agreeTerms || !consentMarketing}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Sending...
                </>
              ) : (
                t.enrollment.form.submit
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <p className="text-sm font-medium">Your enrollment has been successfully submitted. Our team will contact you soon!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
        
        <div className="hidden lg:block relative bg-white p-12 flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute -bottom-10 -right-10 text-primary/5 z-0">
            <MessageCircle className="w-96 h-96 animate-pulse" />
          </div>

          <div className="relative w-full max-w-xs aspect-[9/16] mb-20 z-10 mx-auto">
            <div className="absolute inset-2 bg-surface-container-high rounded-[3rem] rotate-3"></div>
            
            <div className="absolute inset-6 rounded-3xl overflow-hidden shadow-2xl z-10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer hover:z-30 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group">
              <img alt="Student" className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-transform duration-700 group-hover:scale-110" src={assets.form.mainStudent} />
              <div className="absolute inset-0 bg-primary/60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent"></div>
            </div>

            <div className="absolute top-4 -left-24 w-40 bg-white p-2 pb-8 shadow-xl -rotate-12 z-20 rounded-sm hover:-translate-y-4 hover:rotate-[-4deg] hover:scale-110 transition-all duration-500 cursor-pointer hover:z-30 hover:shadow-2xl">
              <img alt="Campus Palm Trees" className="w-full aspect-square object-cover" src={assets.form.polaroid1} />
            </div>

            <div className="absolute bottom-8 -right-24 w-44 bg-white p-2 pb-8 shadow-2xl rotate-12 z-20 rounded-sm hover:-translate-y-4 hover:rotate-[4deg] hover:scale-110 transition-all duration-500 cursor-pointer hover:z-30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
              <img alt="Global Community" className="w-full aspect-square object-cover" src={assets.form.polaroid2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
