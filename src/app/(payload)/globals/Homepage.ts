import { revalidatePath } from "next/cache";
import { Field, GlobalConfig } from "payload";

import { SEOField } from "../fields/SEO";

const INTRO_FIELD: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true
  },
  {
    name: "heading",
    label: "Heading",
    type: "text",
    required: true
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true
  }
];

const IntroSection: Field = {
  name: "intro",
  label: "Intro",
  type: "group",
  fields: [
    {
      name: "first",
      label: "First",
      type: "group",
      fields: INTRO_FIELD
    },
    {
      name: "second",
      label: "Second",
      type: "group",
      fields: INTRO_FIELD
    },
    {
      name: "third",
      label: "Third",
      type: "group",
      fields: INTRO_FIELD
    },
    {
      name: "fourth",
      label: "Fourth",
      type: "group",
      fields: INTRO_FIELD
    }
  ]
};

const SERVICE_FIELD: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text"
  },
  {
    name: "description",
    label: "Description",
    type: "text"
  },
  {
    name: "services",
    label: "Services",
    type: "relationship",
    relationTo: "services",
    hasMany: true,
    minRows: 1,
    required: true
  }
];

const ServicesSection: Field = {
  name: "services",
  label: "Services",
  type: "group",
  fields: [
    {
      name: "firstLabel",
      label: "First Label",
      type: "text",
      required: true
    },
    {
      name: "secondLabel",
      label: "Second Label",
      type: "text",
      required: true
    },
    {
      name: "thirdLabel",
      label: "Third Label",
      type: "text",
      required: true
    },
    {
      name: "appetizers",
      label: "Appetizers",
      type: "group",
      fields: SERVICE_FIELD
    },
    {
      name: "mainCourse",
      label: "Main Course",
      type: "group",
      fields: SERVICE_FIELD
    },
    {
      name: "desserts",
      label: "Desserts",
      type: "group",
      fields: SERVICE_FIELD
    }
  ]
};

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/");
      }
    ]
  },
  fields: [SEOField, IntroSection, ServicesSection]
};
