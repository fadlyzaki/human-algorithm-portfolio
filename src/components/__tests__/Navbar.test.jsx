import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

// Mock context providers
vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ isDark: true, setIsDark: vi.fn() }),
}));

vi.mock('../../context/LanguageContext', () => ({
  useLanguage: () => ({
    t: (key) => {
      const map = {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.work': 'Work',
        'nav.side_projects': 'Projects',
        'nav.menu': 'More',
        'nav.open_menu': 'Open Menu',
        'nav.toggle_theme': 'Toggle theme',
        'nav.switch_language': 'Switch language',
        'nav.open_to_work': 'Open to work',
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

vi.mock('../../hooks/useScrollDirection', () => ({
  default: () => true, // Always show nav in tests
}));

vi.mock('../LiveClock', () => ({
  default: () => <span data-testid="live-clock">12:00</span>,
}));

const renderNavbar = (props = {}) =>
  render(
    <MemoryRouter initialEntries={['/']}>
      <Navbar onOpenMenu={vi.fn()} {...props} />
    </MemoryRouter>
  );

describe('Navbar', () => {
  it('renders mobile bottom nav with correct aria-label', () => {
    renderNavbar();
    const mobileNav = screen.getByLabelText('Mobile navigation');
    expect(mobileNav).toBeInTheDocument();
  });

  it('renders 5 bottom nav items (Home, Work, Projects, About, More)', () => {
    renderNavbar();
    const mobileNav = screen.getByLabelText('Mobile navigation');

    // 4 Link tabs + 1 button ("More")
    const links = mobileNav.querySelectorAll('a');
    const buttons = mobileNav.querySelectorAll('button');
    expect(links).toHaveLength(4);
    expect(buttons).toHaveLength(1);
  });

  it('fires onOpenMenu when More button is clicked', () => {
    const onOpenMenu = vi.fn();
    renderNavbar({ onOpenMenu });

    const moreButton = screen.getByLabelText('Open Menu');
    fireEvent.click(moreButton);
    expect(onOpenMenu).toHaveBeenCalledTimes(1);
  });

  it('highlights active tab based on current route', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar onOpenMenu={vi.fn()} />
      </MemoryRouter>
    );

    const mobileNav = container.querySelector('[aria-label="Mobile navigation"]');
    const aboutLink = mobileNav.querySelector('a[href="/about"]');
    expect(aboutLink.className).toContain('text-[var(--accent-amber)]');
  });

  it('renders active dot indicator for current tab', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar onOpenMenu={vi.fn()} />
      </MemoryRouter>
    );

    const mobileNav = container.querySelector('[aria-label="Mobile navigation"]');
    const homeLink = mobileNav.querySelector('a[href="/"]');
    const dot = homeLink.querySelector('span.rounded-full');
    expect(dot).toBeInTheDocument();
  });

  it('includes tap feedback class on bottom nav items', () => {
    renderNavbar();
    const mobileNav = screen.getByLabelText('Mobile navigation');
    const links = mobileNav.querySelectorAll('a');

    links.forEach((link) => {
      expect(link.className).toContain('active:scale-95');
    });
  });
});
