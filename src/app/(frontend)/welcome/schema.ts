import { z } from "zod";

const CONFIG = {
  string: {
    min: 1,
    max: 1000
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

export const questionnaireSchema = z
  .object({
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
      )
  })
  .and(z.record(z.string(), z.string()));

export type Questionnaire = z.infer<typeof questionnaireSchema>;
