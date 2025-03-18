import { Block } from "payload";

export const HeadingDescription: Block = {
  slug: "HeadingDescription",
  labels: {
    singular: "Heading and Description",
    plural: "Heading and Description"
  },
  imageURL: "/images/cms/heading_description.png",
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
