import { describe, expect, it } from "vitest";
import { calculatePaceFromVelocity } from "../useScrollPacing";

describe("calculatePaceFromVelocity", () => {
  it("slows ambient motion when the page is idle", () => {
    expect(calculatePaceFromVelocity(0)).toBeCloseTo(0.2);
  });

  it("speeds ambient motion while scanning quickly", () => {
    expect(calculatePaceFromVelocity(2200)).toBeCloseTo(2);
    expect(calculatePaceFromVelocity(-2200)).toBeCloseTo(2);
  });

  it("interpolates between idle and high-velocity pacing", () => {
    expect(calculatePaceFromVelocity(1000)).toBeCloseTo(1.1);
  });
});
