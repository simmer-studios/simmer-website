import { Block } from "payload";

export const TwoImageText: Block = {
  slug: "TwoImageText",
  labels: {
    singular: "Two Media and Text",
    plural: "Two Media and Text"
  },
  imageURL: "/images/cms/two_media_text.png",
  fields: [
    {
      type: "group",
      name: "first",
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
    },
    {
      type: "group",
      name: "second",
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
    }
  ]
};
