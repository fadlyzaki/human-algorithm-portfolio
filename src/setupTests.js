import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Global mocks for testing
// eslint-disable-next-line no-undef
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// jsdom does not implement canvas getContext, so we mock it
HTMLCanvasElement.prototype.getContext = () => ({
  scale: vi.fn(),
  clearRect: vi.fn(),
  fillRect: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  stroke: vi.fn(),
  createImageData: () => ({ data: [] }),
  putImageData: vi.fn(),
  createRadialGradient: () => ({ addColorStop: vi.fn() }),
  createLinearGradient: () => ({ addColorStop: vi.fn() }),
});

