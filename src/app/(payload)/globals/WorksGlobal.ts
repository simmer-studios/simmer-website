import { GlobalConfig } from "payload";

export const WorksGlobal: GlobalConfig = {
  slug: "works-global",
  label: "Works Page",
  fields: [
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
      admin: {
        description: "Select the categories to show as filters on Works page"
      }
    }
  ]
};
