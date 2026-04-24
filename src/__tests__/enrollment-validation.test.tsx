import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from '../context/LanguageContext';
import { Enrollment } from '../components/sections/Enrollment';

describe('enrollment form validation', () => {
  it('shows and clears email validation error on blur', async () => {
    render(
      <LanguageProvider>
        <Enrollment />
      </LanguageProvider>
    );

    const emailInput = screen.getByPlaceholderText('john@example.com');
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.tab();

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();

    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.tab();

    expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument();
  });
});
