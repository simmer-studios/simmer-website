"use server";

import { ZodError } from "zod";

import { CheckoutData, checkoutSchema } from "./schema";

interface ProcessCheckoutResponse {
  success: boolean;
  message: string;
  errors: Array<{
    path: (string | number)[];
    message: string;
  }>;
}

export async function processCheckout(
  data: CheckoutData
): Promise<ProcessCheckoutResponse> {
  try {
    const parsedData = await checkoutSchema.parseAsync(data);
    console.log(parsedData);

    await new Promise((resolve) => setTimeout(resolve, 3000));

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
      return {
        success: false,
        message: "An error occurred while processing your checkout",
        errors: []
      };
    }
  }
}
