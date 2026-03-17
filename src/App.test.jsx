import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

// jsdom does not implement window.matchMedia or window.scrollTo
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
  window.scrollTo = vi.fn();
});

// Mock `react-ga4` as it requires window objects that might not be fully present in jsdom
vi.mock('react-ga4', () => ({
  default: {
    initialize: vi.fn(),
    send: vi.fn(),
  }
}));

describe('App Component', () => {
  it('renders without crashing and displays the fallback loader', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    // The Suspense fallback should be visible immediately because pages are lazy-loaded
    expect(screen.getByText(/Initializing System/i)).toBeInTheDocument();
  });
});
