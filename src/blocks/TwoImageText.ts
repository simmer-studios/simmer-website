import { Block } from "payload";

export const TwoImageText: Block = {
  slug: "TwoImageText",
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
