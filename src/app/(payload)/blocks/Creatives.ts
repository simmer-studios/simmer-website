import { Block } from "payload";

export const Creatives: Block = {
  slug: "Creatives",
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
};
