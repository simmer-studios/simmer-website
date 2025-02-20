import { Block } from "payload";

export const ThreeImages: Block = {
  slug: "ThreeImages",
  fields: [
    {
      name: "first",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Square image"
      }
    },
    {
      name: "second",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Square image"
      }
    },
    {
      name: "third",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Square image"
      }
    }
  ]
};
