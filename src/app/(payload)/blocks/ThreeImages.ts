import { Block } from "payload";

export const ThreeImages: Block = {
  slug: "ThreeImages",
  labels: {
    singular: "Three Media",
    plural: "Three Media"
  },
  imageURL: "/images/cms/three_media.png",
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
