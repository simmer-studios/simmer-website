import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name"
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/works");
        revalidatePath("/snap");
      }
    ],
    afterDelete: [
      () => {
        revalidatePath("/works");
        revalidatePath("/snap");
      }
    ]
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true
    }
  ]
};
