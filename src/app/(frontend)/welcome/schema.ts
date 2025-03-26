import { z } from "zod";

export const QUESTIONNAIRE_CONFIG = {
  string: {
    min: 1,
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

export const questionnaireSchema = z
  .object({
    name: z
      .string({
        required_error: MESSAGES.required("Name"),
        invalid_type_error: MESSAGES.invalidType("Name", "string")
      })
      .trim()
      .min(
        QUESTIONNAIRE_CONFIG.string.min,
        MESSAGES.minLength("Name", QUESTIONNAIRE_CONFIG.string.min)
      )
      .max(
        QUESTIONNAIRE_CONFIG.string.max,
        MESSAGES.maxLength("Name", QUESTIONNAIRE_CONFIG.string.max)
      ),
    email: z
      .string({
        required_error: MESSAGES.required("Email address"),
        invalid_type_error: MESSAGES.invalidType("Email address", "string")
      })
      .trim()
      .email(MESSAGES.invalid("Email address"))
      .min(
        QUESTIONNAIRE_CONFIG.string.min,
        MESSAGES.minLength("Email address", QUESTIONNAIRE_CONFIG.string.min)
      )
      .max(
        QUESTIONNAIRE_CONFIG.string.max,
        MESSAGES.maxLength("Email address", QUESTIONNAIRE_CONFIG.string.max)
      ),
    contactNumber: z
      .string({
        required_error: MESSAGES.required("Contact number"),
        invalid_type_error: MESSAGES.invalidType("Contact number", "string")
      })
      .trim()
      .min(
        QUESTIONNAIRE_CONFIG.string.min,
        MESSAGES.minLength("Contact number", QUESTIONNAIRE_CONFIG.string.min)
      )
      .max(
        QUESTIONNAIRE_CONFIG.string.max,
        MESSAGES.maxLength("Contact number", QUESTIONNAIRE_CONFIG.string.max)
      ),
    brandName: z
      .string({
        required_error: MESSAGES.required("Brand name"),
        invalid_type_error: MESSAGES.invalidType("Brand name", "string")
      })
      .trim()
      .min(
        QUESTIONNAIRE_CONFIG.string.min,
        MESSAGES.minLength("Brand name", QUESTIONNAIRE_CONFIG.string.min)
      )
      .max(
        QUESTIONNAIRE_CONFIG.string.max,
        MESSAGES.maxLength("Brand name", QUESTIONNAIRE_CONFIG.string.max)
      ),
    brandDetails: z
      .string({
        required_error: MESSAGES.required("Elevator pitch"),
        invalid_type_error: MESSAGES.invalidType("Elevator pitch", "string")
      })
      .trim()
      .min(
        QUESTIONNAIRE_CONFIG.string.min,
        MESSAGES.minLength("Elevator pitch", QUESTIONNAIRE_CONFIG.string.min)
      )
      .max(
        QUESTIONNAIRE_CONFIG.string.max,
        MESSAGES.maxLength("Elevator pitch", QUESTIONNAIRE_CONFIG.string.max)
      )
  })
  .passthrough()
  .superRefine((data, ctx) => {
    Object.entries(data).forEach(([key, value]) => {
      if (
        [
          "name",
          "email",
          "contactNumber",
          "brandName",
          "brandDetails"
        ].includes(key)
      ) {
        return;
      }

      if (typeof value !== "string") {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_type,
          expected: "string",
          received: typeof value,
          path: [key],
          message: MESSAGES.invalidType(key, "string")
        });
        return;
      }

      if (value.length > QUESTIONNAIRE_CONFIG.string.max) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_big,
          maximum: QUESTIONNAIRE_CONFIG.string.max,
          inclusive: true,
          type: "string",
          path: [key],
          message: MESSAGES.maxLength("Answer", QUESTIONNAIRE_CONFIG.string.max)
        });
      }
    });
  });

export type Questionnaire = z.infer<typeof questionnaireSchema>;
