import { GlobalConfig } from "payload";

export const SnapsGlobal: GlobalConfig = {
  slug: "snaps-global",
  label: "Snaps Page",
  fields: [
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
      admin: {
        description: "Select the categories to show as filters on Snaps page"
      }
    }
  ]
};
