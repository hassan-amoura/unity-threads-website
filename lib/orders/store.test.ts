import { describe, it, expect } from "vitest";
import { createOrderId } from "./store";

describe("createOrderId", () => {
  it("returns a string starting with the prefix", () => {
    const id = createOrderId("UT-CUSTOM");
    expect(id.startsWith("UT-CUSTOM-")).toBe(true);
    expect(id.length).toBeGreaterThan("UT-CUSTOM-".length);
  });

  it("produces different ids when called at different times", async () => {
    const a = createOrderId("X");
    await new Promise((r) => setTimeout(r, 2));
    const b = createOrderId("X");
    expect(a).not.toBe(b);
  });
});
