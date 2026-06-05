import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SafeMultilineText from "../SafeMultilineText";

describe("SafeMultilineText", () => {
  it("renders line breaks without injecting HTML", () => {
    const { container } = render(
      <SafeMultilineText text={"First line\n<script>alert(1)</script>"} />,
    );

    expect(container.querySelector("script")).toBeNull();
    expect(container.querySelectorAll("br")).toHaveLength(1);
    expect(container.textContent).toContain("<script>alert(1)</script>");
  });
});
