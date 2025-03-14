import { revalidatePath } from "next/cache";
import { GlobalConfig } from "payload";

export const About: GlobalConfig = {
  slug: "about",
  label: "About",
  hooks: {
    afterChange: [
      () => {
        revalidatePath("/about");
      }
    ]
  },
  fields: [
    {
      name: "banner",
      label: "Banner",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Landscape image"
      }
    },
    {
      name: "thumbnail",
      label: "Thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Square image"
      }
    },
    {
      name: "cover",
      label: "Cover",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Landscape image"
      }
    },
    {
      name: "tagline",
      label: "Tagline",
      type: "text",
      required: true
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true
    },
    {
      name: "clientsDescription",
      label: "Clients Description",
      type: "textarea",
      required: true
    }
  ]
};
