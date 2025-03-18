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
        revalidatePath("/snap", "layout");
      }
    ],
    afterDelete: [
      () => {
        revalidatePath("/about");
        revalidatePath("/works", "layout");
        revalidatePath("/snap", "layout");
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
