import { Block } from "payload";

export const FullWidthMedia: Block = {
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
