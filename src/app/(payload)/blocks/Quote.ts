import { Block } from "payload";

export const Quote: Block = {
  slug: "Quote",
  imageURL: "/images/cms/quote.png",
  fields: [
    {
      name: "text",
      type: "text",
      required: true
    },
    {
      name: "author",
      type: "text",
      required: true
    },
    {
      name: "role",
      type: "text"
    }
  ]
};
