import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock `react-ga4` as it requires window objects that might not be fully present in jsdom
vi.mock('react-ga4', () => ({
  default: {
    initialize: vi.fn(),
    send: vi.fn(),
  }
}));

describe('App Component', () => {
  it('renders without crashing and displays the fallback loader', () => {
    render(<App />);
    // The Suspense fallback should be visible immediately because pages are lazy-loaded
    expect(screen.getByText(/Initializing System/i)).toBeInTheDocument();
  });
});
