import { useLanguage } from '../context/LanguageContext';
import { en } from '../locales/en';
import { es } from '../locales/es';

const translations = {
  us: en,
  es: es,
  // Fallbacks for now
  br: en,
  cn: en,
  jp: en,
  tr: en,
};

export function useTranslation() {
  const { language } = useLanguage();
  
  // Use the corresponding translation, or fallback to english ('us' code originally, but mapped to en)
  const t = translations[language.code] || en;

  return { t };
}
