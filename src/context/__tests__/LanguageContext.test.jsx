import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LanguageProvider, useLanguage } from '../LanguageContext';

// Test consumer that exposes context values
const TestConsumer = () => {
  const { language, t, toggleLanguage, isIndonesian } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="is-id">{isIndonesian ? 'yes' : 'no'}</span>
      <span data-testid="nav-home">{t('nav.home')}</span>
      <span data-testid="nav-about">{t('nav.about')}</span>
      <span data-testid="missing-key">{t('nonexistent.deep.key')}</span>
      <button onClick={toggleLanguage}>Toggle</button>
    </div>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('lang-switching');
  });

  it('defaults to English when no localStorage value exists', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('is-id').textContent).toBe('no');
  });

  it('restores language from localStorage', () => {
    // Use the actual STORAGE_KEY used by the context
    localStorage.setItem('portfolio-lang-v1', 'id');
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang').textContent).toBe('id');
    expect(screen.getByTestId('is-id').textContent).toBe('yes');
  });

  it('translates nested keys correctly in English', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId('nav-home').textContent).toBe('fadlyzaki');
    expect(screen.getByTestId('nav-about').textContent).toBe('About');
  });

  it('falls back to the raw key for missing translations', () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );
    expect(screen.getByTestId('missing-key').textContent).toBe('nonexistent.deep.key');
  });

  it('toggles language from en → id and persists to localStorage', async () => {
    const user = userEvent.setup();

    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId('lang').textContent).toBe('en');

    await user.click(screen.getByText('Toggle'));

    expect(screen.getByTestId('lang').textContent).toBe('id');
    expect(screen.getByTestId('is-id').textContent).toBe('yes');
    expect(screen.getByTestId('nav-about').textContent).toBe('Tentang');
    expect(localStorage.getItem('portfolio-lang-v1')).toBe('id');
  });

  it('toggles language back from id → en', async () => {
    const user = userEvent.setup();
    localStorage.setItem('portfolio-lang-v1', 'id');

    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId('lang').textContent).toBe('id');
    await user.click(screen.getByText('Toggle'));
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(localStorage.getItem('portfolio-lang-v1')).toBe('en');
  });
});
