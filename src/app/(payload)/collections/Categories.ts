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
        revalidatePath("/about");
        revalidatePath("/works", "layout");
        revalidatePath("/snap");
      }
    ],
    afterDelete: [
      () => {
        revalidatePath("/about");
        revalidatePath("/works", "layout");
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
