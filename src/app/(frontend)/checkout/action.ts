"use server";

import { Resend } from "resend";
import { ZodError } from "zod";

import { EmailTemplate } from "./EmailTemplate";
import { CheckoutData, checkoutSchema } from "./schema";

interface ProcessCheckoutResponse {
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

export async function processCheckout(
  data: CheckoutData
): Promise<ProcessCheckoutResponse> {
  try {
    const parsedData = await checkoutSchema.parseAsync(data);

    const { data: resendData, error } = await resend.emails.send({
      from: `Simmer Studios <noreply@${EMAIL_DOMAIN}>`,
      replyTo: parsedData.email,
      to: [EMAIL_RECIPIENT],
      subject: `Checkout | ${parsedData.brandName}`,
      react: await EmailTemplate(parsedData)
    });

    if (error) {
      console.error("Error sending email", { error });
      return {
        success: false,
        message: "An error occurred while sending your email",
        errors: []
      };
    }

    console.log("Checkout successful", {
      checkoutData: parsedData,
      resendData
    });

    return {
      success: true,
      message: "Checkout successfully processed",
      errors: []
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: "Invalid checkout data",
        errors: error.errors.map((error) => ({
          path: error.path,
          message: error.message
        }))
      };
    } else {
      console.error("Checkout failed", { error });
      return {
        success: false,
        message: "An error occurred while processing your checkout",
        errors: []
      };
    }
  }
}
