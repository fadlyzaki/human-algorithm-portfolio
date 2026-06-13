import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import ChaosToMatrixIntro from './ChaosToMatrixIntro';

// Mock the ThemeContext
vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ isDark: true })
}));

describe('ChaosToMatrixIntro Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('renders the initializing text after mounting', async () => {
    render(<ChaosToMatrixIntro />);

    act(() => {
      vi.advanceTimersByTime(10);
    });

    expect(screen.getByText(/> Awaiting inputs/i)).toBeInTheDocument();
  });
});
