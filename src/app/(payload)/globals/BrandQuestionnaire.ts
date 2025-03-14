import { GlobalConfig } from "payload";

export const BrandQuestionnaire: GlobalConfig = {
  slug: "brand-questionnaire",
  label: "Brand Questionnaire",
  fields: [
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true
    },
    {
      name: "brandAttributes",
      label: "Brand Attributes",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "left",
              label: "Left Attribute",
              type: "text",
              required: true
            },
            {
              name: "right",
              label: "Right Attribute",
              type: "text",
              required: true
            }
          ]
        }
      ]
    },
    {
      name: "questions",
      label: "Questions",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          name: "isRequired",
          label: "Required",
          type: "checkbox"
        },
        {
          name: "question",
          label: "Question",
          type: "text",
          required: true
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true
        }
      ]
    }
  ]
};
