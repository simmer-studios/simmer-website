import { z } from "zod";

const CONFIG = {
  string: {
    min: 3,
    max: 5000
  },
  array: {
    max: 100
  }
};

const MESSAGES = {
  required: (field: string) => `${field} is required`,
  minLength: (field: string, min: number) =>
    `${field} must be at least ${min} characters`,
  maxLength: (field: string, max: number) =>
    `${field} must not be more than ${max} characters`,
  invalid: (field: string) => `${field} is invalid`,
  invalidType: (field: string, type: string) => `${field} must be a ${type}`
};

export const checkoutSchema = z.object({
  name: z
    .string({
      required_error: MESSAGES.required("Name"),
      invalid_type_error: MESSAGES.invalidType("Name", "string")
    })
    .trim()
    .min(CONFIG.string.min, MESSAGES.minLength("Name", CONFIG.string.min))
    .max(CONFIG.string.max, MESSAGES.maxLength("Name", CONFIG.string.max)),
  email: z
    .string({
      required_error: MESSAGES.required("Email address"),
      invalid_type_error: MESSAGES.invalidType("Email address", "string")
    })
    .trim()
    .email(MESSAGES.invalid("Email address"))
    .min(
      CONFIG.string.min,
      MESSAGES.minLength("Email address", CONFIG.string.min)
    )
    .max(
      CONFIG.string.max,
      MESSAGES.maxLength("Email address", CONFIG.string.max)
    ),
  contactNumber: z
    .string({
      required_error: MESSAGES.required("Contact Number"),
      invalid_type_error: MESSAGES.invalidType("Contact Number", "string")
    })
    .trim()
    .min(
      CONFIG.string.min,
      MESSAGES.minLength("Contact Number", CONFIG.string.min)
    )
    .max(
      CONFIG.string.max,
      MESSAGES.maxLength("Contact Number", CONFIG.string.max)
    ),
  brandName: z
    .string({
      required_error: MESSAGES.required("Brand name/field"),
      invalid_type_error: MESSAGES.invalidType("Brand name/field", "string")
    })
    .trim()
    .min(
      CONFIG.string.min,
      MESSAGES.minLength("Brand name/field", CONFIG.string.min)
    )
    .max(
      CONFIG.string.max,
      MESSAGES.maxLength("Brand name/field", CONFIG.string.max)
    ),
  brandDetails: z
    .string({
      required_error: MESSAGES.required("Brand Details"),
      invalid_type_error: MESSAGES.invalidType("Brand Details", "string")
    })
    .trim()
    .min(
      CONFIG.string.min,
      MESSAGES.minLength("Brand Details", CONFIG.string.min)
    )
    .max(
      CONFIG.string.max,
      MESSAGES.maxLength("Brand Details", CONFIG.string.max)
    ),
  budget: z
    .string({
      invalid_type_error: MESSAGES.invalidType("Budget", "string")
    })
    .trim()
    .max(CONFIG.string.max, MESSAGES.maxLength("Budget", CONFIG.string.max))
    .optional(),
  referralSource: z
    .string({
      required_error: MESSAGES.required("Referral Source"),
      invalid_type_error: MESSAGES.invalidType("Referral Source", "string")
    })
    .trim()
    .min(
      CONFIG.string.min,
      MESSAGES.minLength("Referral Source", CONFIG.string.min)
    )
    .max(
      CONFIG.string.max,
      MESSAGES.maxLength("Referral Source", CONFIG.string.max)
    ),
  orders: z
    .array(
      z
        .string({
          required_error: MESSAGES.required("Item name"),
          invalid_type_error: MESSAGES.invalidType("Item name", "string")
        })
        .trim()
        .min(1, MESSAGES.minLength("Item name", 1))
        .max(
          CONFIG.string.max,
          MESSAGES.maxLength("Item name", CONFIG.string.max)
        )
    )
    .max(
      CONFIG.array.max,
      `A maximum of ${CONFIG.array.max} items are allowed in the order`
    ),
  isDiscounted: z.boolean({
    required_error: MESSAGES.required("isDiscounted"),
    invalid_type_error: MESSAGES.invalidType("isDiscounted", "boolean")
  })
});

export type CheckoutData = z.infer<typeof checkoutSchema>;
