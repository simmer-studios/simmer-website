import { Block } from "payload";

export const Quote: Block = {
  slug: "Quote",
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
