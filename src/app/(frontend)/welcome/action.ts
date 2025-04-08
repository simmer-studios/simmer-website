"use server";

import { Resend } from "resend";
import { ZodError } from "zod";

import { EmailTemplate } from "./EmailTemplate";
import { Questionnaire, questionnaireSchema } from "./schema";

interface ProcessQuestionnaireResponse {
  success: boolean;
  message: string;
  errors: Array<{
    path: (string | number)[];
    message: string;
  }>;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_DOMAIN = process.env.EMAIL_DOMAIN as string;
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT as string;

if (!RESEND_API_KEY) {
  throw new Error("Environment variable RESEND_API_KEY is not set");
}
if (!EMAIL_DOMAIN) {
  throw new Error("Environment variable EMAIL_DOMAIN is not set");
}
if (!EMAIL_RECIPIENT) {
  throw new Error("Environment variable EMAIL_RECIPIENT is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const processQuestionnaire = async (
  data: Questionnaire
): Promise<ProcessQuestionnaireResponse> => {
  console.log("Brand Questionnaire", { data });
  try {
    const parsedData = await questionnaireSchema.parseAsync(data);

    console.log("Brand Questionnaire", { parsedData });

    const { data: resendData, error } = await resend.emails.send({
      from: `Simmer Studios <noreply@${EMAIL_DOMAIN}>`,
      replyTo: parsedData.email,
      to: [EMAIL_RECIPIENT],
      subject: `Brand Questionnaire | ${parsedData.brandName}`,
      react: await EmailTemplate(parsedData)
    });

    if (error) {
      console.error("Brand Questionnaire error sending email", {
        error
      });
      return {
        success: false,
        message: "An error occurred while sending your email",
        errors: []
      };
    }

    console.log("Brand Questionnaire submitted", {
      data: parsedData,
      resendData
    });

    return {
      success: true,
      message: "Brand Questionnaire successfully processed",
      errors: []
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: "Invalid questionnaire data",
        errors: error.errors.map((error) => ({
          path: error.path,
          message: error.message
        }))
      };
    } else {
      console.error("Brand Questionnaire processing failed", { error });
      return {
        success: false,
        message:
          "An error occurred while processing your Brand Questionnaire form",
        errors: []
      };
    }
  }
};
