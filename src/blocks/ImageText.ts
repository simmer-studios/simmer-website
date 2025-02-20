import { Block } from "payload";

export const ImageText: Block = {
  slug: "ImageText",
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Square image"
      }
    },
    {
      name: "title",
      type: "text",
      required: true
    },
    {
      name: "description",
      type: "textarea",
      required: true
    }
  ]
};
