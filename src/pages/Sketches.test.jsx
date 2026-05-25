import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider } from "../context/LanguageContext";
import { RecruiterModeProvider } from "../context/RecruiterModeContext";
import { ThemeProvider } from "../context/ThemeContext";
import Sketches, {
  SOCIABLEKIT_HIGHLIGHTS_EMBED_ID,
  SOCIABLEKIT_HIGHLIGHTS_SCRIPT_ID,
  SOCIABLEKIT_HIGHLIGHTS_SCRIPT_SRC,
  SociableKitInstagramHighlights,
} from "./Sketches";

const renderSketchesPage = () =>
  render(
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <RecruiterModeProvider>
            <MemoryRouter initialEntries={["/sketches"]}>
              <Sketches />
            </MemoryRouter>
          </RecruiterModeProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>,
  );

const getWidgetScripts = () =>
  Array.from(document.scripts).filter(
    (script) => script.src === SOCIABLEKIT_HIGHLIGHTS_SCRIPT_SRC,
  );

describe("Sketches", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
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
  });

  afterEach(() => {
    cleanup();
    document.getElementById(SOCIABLEKIT_HIGHLIGHTS_SCRIPT_ID)?.remove();
    localStorage.clear();
    document.body.classList.remove("recruiter-mode");
    document.documentElement.classList.remove("dark");
  });

  it("renders the SociableKit Instagram highlights container on the sketches page", () => {
    renderSketchesPage();

    const widget = screen.getByTestId("sociablekit-instagram-story-highlights");

    expect(widget).toHaveClass("sk-ww-instagram-story-highlights");
    expect(widget).toHaveAttribute(
      "data-embed-id",
      SOCIABLEKIT_HIGHLIGHTS_EMBED_ID,
    );
  });

  it("loads the SociableKit widget script once across rerenders", () => {
    const { rerender } = render(<SociableKitInstagramHighlights />);

    rerender(<SociableKitInstagramHighlights />);

    const scripts = getWidgetScripts();
    expect(scripts).toHaveLength(1);
    expect(scripts[0]).toHaveAttribute("id", SOCIABLEKIT_HIGHLIGHTS_SCRIPT_ID);
    expect(scripts[0]).toHaveAttribute("defer");
  });
});
