import { revalidatePath } from "next/cache";
import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name"
  },
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/");
        revalidatePath("/menu");
        revalidatePath("/works", "layout");
        revalidatePath("/snap");
      }
    ]
  },
  fields: [
    {
      name: "specialty",
      label: "Specialty",
      type: "checkbox",
      admin: {
        description: "Mark this service as a specialty on the menu"
      },
      required: true,
      defaultValue: false
    },
    {
      name: "name",
      type: "text",
      required: true,
      unique: true
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "linkTo",
      label: "Link to",
      type: "radio",
      options: [
        {
          label: "None",
          value: "none"
        },
        {
          label: "Snap",
          value: "snap"
        },
        {
          label: "Simmer Stories",
          value: "stories"
        }
      ]
    }
  ]
};
