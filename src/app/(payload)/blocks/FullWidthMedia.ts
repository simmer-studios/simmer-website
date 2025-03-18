import { Block } from "payload";

export const FullWidthMedia: Block = {
  slug: "FullWidthImage",
  labels: {
    singular: "Full Width Media",
    plural: "Full Width Media"
  },
  imageURL: "/images/cms/full_width_media.png",
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
