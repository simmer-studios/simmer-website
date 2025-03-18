import { Block } from "payload";

export const Creatives: Block = {
  slug: "Creatives",
  imageURL: "/images/cms/creatives.png",
  fields: [
    {
      type: "array",
      name: "creatives",
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
    }
  ]
};
