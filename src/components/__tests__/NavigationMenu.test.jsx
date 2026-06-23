import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import NavigationMenu from '../NavigationMenu';

// Mock context providers
vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ isDark: true, setIsDark: vi.fn() }),
}));

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    t: (key) => {
      const map = {
        'nav.system_directory': 'SYSTEM DIRECTORY',
        'nav.contact': 'CONTACT',
        'nav.resume': 'RESUME / CV',
        'nav.language': 'Language',
        'nav.recruiter_mode': 'Recruiter Mode',
        'nav.theme': 'Theme',
        'nav.system_preferences': 'SYSTEM PREFERENCES',
      };
      return map[key] || key;
    },
    language: 'en',
    toggleLanguage: vi.fn(),
  }),
}));

vi.mock('../../context/RecruiterModeContext', () => ({
  useRecruiterMode: () => ({
    isRecruiterMode: false,
    toggleRecruiterMode: vi.fn(),
  }),
}));

const renderMenu = (props = {}) =>
  render(
    <MemoryRouter>
      <NavigationMenu isOpen={true} onClose={vi.fn()} {...props} />
    </MemoryRouter>
  );

describe('NavigationMenu', () => {
  it('renders when isOpen is true', () => {
    renderMenu();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <MemoryRouter>
        <NavigationMenu isOpen={false} onClose={vi.fn()} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    renderMenu({ onClose });

    const closeBtn = screen.getByLabelText('Close Menu');
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    renderMenu({ onClose });

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders all primary navigation links', () => {
    renderMenu();

    expect(screen.getByText('THOUGHTS (JOURNAL)')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
    expect(screen.getByText('RESUME / CV')).toBeInTheDocument();
  });

  it('renders system preference controls', () => {
    renderMenu();

    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Recruiter Mode')).toBeInTheDocument();
    expect(screen.getByText('Theme')).toBeInTheDocument();
  });

  it('renders external links (LinkedIn, GitHub, Email)', () => {
    renderMenu();

    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
