import type { CollectionConfig } from "payload";

export const ServiceCategories: CollectionConfig = {
  slug: "service-categories",
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
      name: "services",
      type: "relationship",
      relationTo: "services",
      hasMany: true
    }
  ]
};
