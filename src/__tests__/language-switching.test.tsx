import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

function LanguageHarness() {
  const { t } = useTranslation();
  const { setLanguage, availableLanguages } = useLanguage();

  return (
    <div>
      <p>{t.nav.programs}</p>
      <button onClick={() => setLanguage(availableLanguages[1])} type="button">
        Switch To Spanish
      </button>
    </div>
  );
}

describe('language switching', () => {
  it('switches translated text and persists selected language', async () => {
    localStorage.removeItem('gpa-lang');

    render(
      <LanguageProvider>
        <LanguageHarness />
      </LanguageProvider>
    );

    expect(screen.getByText('Programs')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Switch To Spanish' }));

    expect(screen.getByText('Programas')).toBeInTheDocument();
    expect(localStorage.getItem('gpa-lang')).toBe('es');
  });
});
