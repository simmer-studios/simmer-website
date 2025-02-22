import { Block } from "payload";

export const Creatives: Block = {
  slug: "Creatives",
  interfaceName: "Creatives",
  fields: [
    {
      name: "creatives",
      type: "relationship",
      relationTo: "creatives",
      hasMany: true,
      required: true,
      admin: {
        description:
          "Select all the creatives that collaborated on this project"
      }
    }
  ]
};
