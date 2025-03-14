import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

export const Clients: CollectionConfig = {
  slug: "clients",
  admin: {
    useAsTitle: "name"
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/about");
      }
    ],
    afterDelete: [
      () => {
        revalidatePath("/about");
      }
    ]
  },
  fields: [
    {
      type: "checkbox",
      name: "featured",
      defaultValue: false,
      required: true,
      admin: {
        description: "Highlight this client on the about page"
      }
    },
    {
      name: "name",
      type: "text",
      required: true,
      unique: true
    }
  ]
};
