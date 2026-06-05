import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RichText from "../RichText";

describe("RichText", () => {
  it("renders markdown-style bold text as strong elements", () => {
    render(<RichText text="Build **reliable tools** for people." />);

    expect(screen.getByText("reliable tools").tagName).toBe("STRONG");
  });

  it("keeps raw HTML escaped as text", () => {
    const { container } = render(
      <RichText text={"Do not render <strong>raw HTML</strong>."} />,
    );

    expect(container.querySelector("strong")).toBeNull();
    expect(screen.getByText(/<strong>raw HTML<\/strong>/)).toBeInTheDocument();
  });
});
