import { describe, it, expect } from "vitest";
import {
  customOrderSchema,
  corporateOrderSchema,
  bulkOrderSchema
} from "./schemas";

describe("customOrderSchema", () => {
  const valid = {
    name: "Jamie",
    email: "jamie@example.com",
    preferredProductType: "Crew neck",
    sizeRange: "S–L",
    colors: "Blush and stone",
    message: "A piece for our family gathering that honors our autistic son.",
    budgetRange: "$200–400",
    neededByDate: "June 2025",
    consentToContact: true
  };

  it("accepts valid input", () => {
    expect(customOrderSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects missing name", () => {
    const result = customOrderSchema.safeParse({ ...valid, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = customOrderSchema.safeParse({ ...valid, email: "not-email" });
    expect(result.success).toBe(false);
  });

  it("rejects consentToContact false", () => {
    const result = customOrderSchema.safeParse({
      ...valid,
      consentToContact: false
    });
    expect(result.success).toBe(false);
  });

  it("allows optional phone and referenceImageUrl", () => {
    expect(customOrderSchema.safeParse(valid).success).toBe(true);
    expect(
      customOrderSchema.safeParse({
        ...valid,
        phone: "555-1234",
        referenceImageUrl: "https://example.com/ref.png"
      }).success
    ).toBe(true);
  });
});

describe("corporateOrderSchema", () => {
  const valid = {
    companyName: "Acme Inc",
    contactName: "Sam Lee",
    email: "sam@acme.com",
    phone: "555-0100",
    quantityEstimate: "50",
    productsNeeded: "Crew necks and short sleeve tees",
    timeline: "Q2 2025",
    shippingDestination: "New York, NY, USA"
  };

  it("accepts valid input", () => {
    expect(corporateOrderSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects short phone", () => {
    const result = corporateOrderSchema.safeParse({
      ...valid,
      phone: "123"
    });
    expect(result.success).toBe(false);
  });

  it("allows optional notes and logoUrl", () => {
    expect(
      corporateOrderSchema.safeParse({
        ...valid,
        notes: "We need sensory-friendly options.",
        logoUrl: "https://acme.com/logo.png"
      }).success
    ).toBe(true);
  });
});

describe("bulkOrderSchema", () => {
  const valid = {
    name: "Community Center",
    email: "events@community.org",
    quantity: 25,
    productTypes: "Mix of tees and crew necks",
    sizeBreakdown: "5 XS, 8 S, 7 M, 5 L",
    colors: "Navy and white",
    timeline: "August 2025",
    shippingInfo: "123 Main St, City, ST 12345"
  };

  it("accepts valid input", () => {
    expect(bulkOrderSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects quantity below 10", () => {
    const result = bulkOrderSchema.safeParse({ ...valid, quantity: 5 });
    expect(result.success).toBe(false);
  });

  it("rejects non-integer quantity", () => {
    const result = bulkOrderSchema.safeParse({ ...valid, quantity: 10.5 });
    expect(result.success).toBe(false);
  });

  it("allows optional notes", () => {
    expect(
      bulkOrderSchema.safeParse({ ...valid, notes: "For summer camp." }).success
    ).toBe(true);
  });
});
