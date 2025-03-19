import { Block } from "payload";

export const Carousel: Block = {
  slug: "Carousel",
  imageURL: "/images/cms/carousel.png",
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
