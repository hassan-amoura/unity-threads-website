import { z } from "zod";

export const customOrderSchema = z.object({
  name: z.string().min(2, "Please share a name."),
  email: z.string().email("Please add a valid email."),
  phone: z.string().optional(),
  preferredProductType: z.string().min(2, "Tell us what type of piece you have in mind."),
  sizeRange: z.string().min(2, "Share the size range you need."),
  colors: z.string().min(2, "Share any colors or palettes you prefer."),
  referenceImageUrl: z.string().url("Please add a valid URL.").optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Tell us a bit about the design and intent so we can support you well."),
  budgetRange: z.string().min(2, "Share a budget range, even if approximate."),
  neededByDate: z.string().min(2, "Share an ideal date or window."),
  consentToContact: z
    .boolean()
    .refine((v) => v === true, {
      message: "Please confirm we can contact you about this request."
    })
});

export type CustomOrderInput = z.infer<typeof customOrderSchema>;

export const corporateOrderSchema = z.object({
  companyName: z.string().min(2, "Please add a company or organization name."),
  contactName: z.string().min(2, "Please add a primary contact name."),
  email: z.string().email("Please add a valid email."),
  phone: z.string().min(5, "Please add a phone number so we can reach you."),
  quantityEstimate: z.string().min(1, "Share an estimated quantity."),
  productsNeeded: z
    .string()
    .min(2, "Tell us which products or categories you're considering."),
  brandingNeeds: z.string().optional(),
  logoUrl: z.string().url("Please add a valid logo URL.").optional().or(z.literal("")),
  timeline: z.string().min(2, "Share your ideal timing or event date."),
  shippingDestination: z.string().min(3, "Share where these pieces will be shipped."),
  notes: z.string().optional()
});

export type CorporateOrderInput = z.infer<typeof corporateOrderSchema>;

export const bulkOrderSchema = z.object({
  name: z.string().min(2, "Please add a name for this request."),
  email: z.string().email("Please add a valid email."),
  quantity: z
    .number({
      invalid_type_error: "Please enter a quantity."
    })
    .int("Quantity should be a whole number.")
    .min(10, "Bulk orders typically begin at 10 pieces."),
  productTypes: z
    .string()
    .min(2, "Tell us which product types you're considering."),
  sizeBreakdown: z.string().min(2, "Share a brief size breakdown or table."),
  colors: z.string().min(2, "Share color ideas or any constraints."),
  timeline: z.string().min(2, "Share an ideal timeline."),
  shippingInfo: z.string().min(3, "Share where we'll be shipping to."),
  notes: z.string().optional()
});

export type BulkOrderInput = z.infer<typeof bulkOrderSchema>;

