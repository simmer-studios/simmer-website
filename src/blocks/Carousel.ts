import { Block } from "payload";

export const Carousel: Block = {
  slug: "Carousel",
  fields: [
    {
      name: "images",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
      required: true
    }
  ]
};
