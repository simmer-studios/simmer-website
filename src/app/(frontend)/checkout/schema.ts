import { z } from "zod";

const CONFIG = {
  string: {
    min: 3,
    max: 255
  },
  array: {
    max: 100
  }
};

export const checkoutSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string"
    })
    .trim()
    .min(
      CONFIG.string.min,
      `Name must be at least ${CONFIG.string.min} characters`
    )
    .max(
      CONFIG.string.max,
      `Name must not be more than ${CONFIG.string.max} characters`
    ),
  email: z
    .string({
      required_error: "Email address is required",
      invalid_type_error: "Email address must be a string"
    })
    .trim()
    .email("Email address is invalid")
    .min(
      CONFIG.string.min,
      `Email address must be at least ${CONFIG.string.min} characters`
    )
    .max(
      CONFIG.string.max,
      `Email address must not be more than ${CONFIG.string.max} characters`
    ),
  contactNumber: z
    .string({
      required_error: "Contact number is required",
      invalid_type_error: "Contact number must be a string"
    })
    .trim()
    .min(
      CONFIG.string.min,
      `Contact number must be at least ${CONFIG.string.min} characters`
    )
    .max(
      CONFIG.string.max,
      `Contact number must not be more than ${CONFIG.string.max} characters`
    ),
  brandName: z
    .string({
      required_error: "Brand name/field is required",
      invalid_type_error: "Brand name/field must be a string"
    })
    .trim()
    .min(CONFIG.string.min, "Brand name/field must be at least 10 characters")
    .max(
      CONFIG.string.max,
      "Brand name/field must not be more than 255 characters"
    ),
  brandDetails: z
    .string({
      required_error: "Brand details are required",
      invalid_type_error: "Brand details must be a string"
    })
    .trim()
    .min(
      CONFIG.string.min,
      `Brand details must be at least ${CONFIG.string.min} characters`
    )
    .max(
      CONFIG.string.max,
      `Brand details must not be more than ${CONFIG.string.max} characters`
    ),
  budget: z
    .string({
      invalid_type_error: "Budget must be a string"
    })
    .trim()
    .max(
      CONFIG.string.max,
      `Budget must not be more than ${CONFIG.string.max} characters`
    )
    .optional(),
  referralSource: z
    .string({
      required_error: "Referral source is required",
      invalid_type_error: "Referral source must be a string"
    })
    .max(
      CONFIG.string.max,
      `Referral source must not be more than ${CONFIG.string.max} characters`
    ),
  orders: z
    .string({
      required_error: "Item name is required",
      invalid_type_error: "Item name must be string"
    })
    .trim()
    .min(1, "Item name must be at least 1 character")
    .max(
      CONFIG.string.max,
      `Item name must not be more than ${CONFIG.string.max} characters`
    )
    .array()
    .max(
      CONFIG.array.max,
      `A maximum of ${CONFIG.array.max} items are allowed in the order`
    )
});

export type CheckoutData = z.infer<typeof checkoutSchema>;
