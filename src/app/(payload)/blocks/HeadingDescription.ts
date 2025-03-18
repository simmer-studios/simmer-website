import { Block } from "payload";

export const HeadingDescription: Block = {
  slug: "HeadingDescription",
  fields: [
    {
      name: "icon",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: {
          contains: "image"
        }
      }
    },
    {
      name: "heading",
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
