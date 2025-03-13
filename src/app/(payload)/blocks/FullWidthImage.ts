import { Block } from "payload";

export const FullWidthImage: Block = {
  slug: "FullWidthImage",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Landscape image"
      }
    }
  ]
};
