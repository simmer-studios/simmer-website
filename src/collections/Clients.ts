import type { CollectionConfig } from "payload";

export const Clients: CollectionConfig = {
  slug: "clients",
  admin: {
    useAsTitle: "name"
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
