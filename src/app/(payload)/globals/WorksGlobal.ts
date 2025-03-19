import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

import { SEOField } from "../fields/SEO";

export const WorksGlobal: GlobalConfig = {
  slug: "works-global",
  label: "Works Page",
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/works");
      }
    ]
  },
  fields: [
    SEOField,
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
      admin: {
        description: "Select the categories to show as filters on Works page"
      }
    }
  ]
};
