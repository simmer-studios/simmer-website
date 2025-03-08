import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true
    },
    {
      name: "description",
      type: "textarea"
    }
  ]
};
