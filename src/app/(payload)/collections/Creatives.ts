import { revalidatePath } from "next/cache";
import { CollectionConfig } from "payload";

export const Creatives: CollectionConfig = {
  slug: "creatives",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "tagline", "image", "avatar"]
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
      type: "row",
      fields: [
        {
          name: "order",
          type: "number",
          defaultValue: 1,
          admin: {
            width: "180px",
            description: "Order of the creative in the list"
          }
        }
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "role",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: "tagline",
      type: "text",
      required: true
    },
    {
      type: "row",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "Portrait image of the creative"
          }
        },
        {
          name: "avatar",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "Fun artwork that represents the creative"
          }
        }
      ]
    }
  ]
};
