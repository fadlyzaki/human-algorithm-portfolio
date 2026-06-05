import React from "react";
import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useProgressiveEnhancement } from "../useProgressiveEnhancement";

const Probe = ({ delay = 10 }) => {
  const enabled = useProgressiveEnhancement({ delay });
  return <div data-testid="state">{enabled ? "enhanced" : "baseline"}</div>;
};

const installTimers = () => {
  Object.defineProperty(window, "requestAnimationFrame", {
    configurable: true,
    value: (callback) => window.setTimeout(() => callback(performance.now()), 0),
  });
  Object.defineProperty(window, "cancelAnimationFrame", {
    configurable: true,
    value: (id) => window.clearTimeout(id),
  });
  Object.defineProperty(window, "requestIdleCallback", {
    configurable: true,
    value: (callback) => window.setTimeout(callback, 0),
  });
  Object.defineProperty(window, "cancelIdleCallback", {
    configurable: true,
    value: (id) => window.clearTimeout(id),
  });
};

const mockMatchMedia = (matches = {}) => {
  window.matchMedia = vi.fn((query) => ({
    matches: Boolean(matches[query]),
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
};

describe("useProgressiveEnhancement", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    installTimers();
    mockMatchMedia();
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 1280,
    });
    Object.defineProperty(navigator, "connection", {
      configurable: true,
      value: { saveData: false },
    });
    Object.defineProperty(navigator, "deviceMemory", {
      configurable: true,
      value: 8,
    });
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("enables enhancement only after paint and idle delay on capable desktop", async () => {
    render(<Probe />);

    expect(screen.getByTestId("state").textContent).toBe("baseline");

    await act(async () => {
      await vi.runAllTimersAsync();
    });
    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.getByTestId("state").textContent).toBe("enhanced");
  });

  it("keeps mobile sessions on the baseline path", async () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 390,
    });
    mockMatchMedia({ "(hover: none)": true, "(pointer: coarse)": true });

    render(<Probe />);

    await act(async () => {
      await vi.runAllTimersAsync();
    });
    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(screen.getByTestId("state").textContent).toBe("baseline");
  });
});
