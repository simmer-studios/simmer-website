import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

import { SEOField } from "../fields/SEO";

export const Checkout: GlobalConfig = {
  slug: "checkout",
  label: "Checkout Page",
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/checkout");
      }
    ]
  },
  fields: [SEOField]
};
