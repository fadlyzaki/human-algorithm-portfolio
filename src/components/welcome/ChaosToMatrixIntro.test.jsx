import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ChaosToMatrixIntro from './ChaosToMatrixIntro';

// Mock the ThemeContext
vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ isDark: true })
}));

describe('ChaosToMatrixIntro Component', () => {
  it('renders the initializing text after mounting', async () => {
    render(<ChaosToMatrixIntro />);
    // The component delays rendering until isMounted is true via a setTimeout(0)
    await waitFor(() => {
      expect(screen.getByText(/> Awaiting inputs/i)).toBeInTheDocument();
    });
  });
});
