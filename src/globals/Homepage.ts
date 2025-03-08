import { Field, GlobalConfig } from "payload";

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

const SERVICES_FIELD: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
    defaultValue: "Title"
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
];

const ServicesSection: Field = {
  name: "services",
  label: "Services",
  type: "group",
  fields: [
    {
      name: "first",
      label: "First",
      type: "group",
      fields: SERVICES_FIELD
    },
    {
      name: "second",
      label: "Second",
      type: "group",
      fields: SERVICES_FIELD
    },
    {
      name: "third",
      label: "Third",
      type: "group",
      fields: SERVICES_FIELD
    }
  ]
};

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  fields: [IntroSection, ServicesSection]
};
