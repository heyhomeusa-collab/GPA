import { useLanguage } from '../context/LanguageContext';
import { en } from '../locales/en';
import { es } from '../locales/es';
import { pt } from '../locales/pt';
import { tr } from '../locales/tr';

const translations = {
  us: en,
  es: es,
  br: pt,
  tr: tr,
};

export function useTranslation() {
  const { language } = useLanguage();
  
  // Use the corresponding translation, or fallback to english ('us' code originally, but mapped to en)
  const t = translations[language.code] || en;

  return { t };
}
