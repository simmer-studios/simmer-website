import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

import { SEOField } from "../fields/SEO";

export const SnapsGlobal: GlobalConfig = {
  slug: "snaps-global",
  label: "Snaps Page",
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/snap");
      }
    ]
  },
  fields: [
    SEOField,
    {
      name: "productCategories",
      label: "Product Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
      admin: {
        description:
          "Select the categories to show as filters when Products are selected"
      }
    },
    {
      name: "portraitCategories",
      label: "Portrait Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
      admin: {
        description:
          "Select the categories to show as filters when Portraits are selected"
      }
    }
  ]
};
