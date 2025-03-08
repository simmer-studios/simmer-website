// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Clients } from "./collections/Clients";
import { Creatives } from "./collections/Creatives";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { ServiceCategories } from "./collections/ServiceCategories";
import { Services } from "./collections/Services";
import { Snaps } from "./collections/Snaps";
import { Users } from "./collections/Users";
import { WEBSITE_URL } from "./constants";
import { About } from "./globals/About";
import { Homepage } from "./globals/Homepage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isDevelopment = process.env.NODE_ENV === "development";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  serverURL: !isDevelopment ? WEBSITE_URL : undefined,
  csrf: !isDevelopment ? [WEBSITE_URL] : undefined,
  cors: !isDevelopment ? [WEBSITE_URL] : undefined,
  collections: [
    Projects,
    Snaps,
    Services,
    ServiceCategories,
    Creatives,
    Clients,
    Users,
    Media
  ],
  globals: [Homepage, About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? ""
    }
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 100_000_000 // 100 MB,
    }
  },
  plugins: [
    s3Storage({
      clientUploads: true,
      collections: {
        media: true
      },
      bucket: process.env.DO_SPACE_BUCKET ?? "",
      config: {
        credentials: {
          accessKeyId: process.env.DO_SPACE_ACCESS_KEY ?? "",
          secretAccessKey: process.env.DO_SPACE_SECRET_KEY ?? ""
        },
        region: process.env.DO_SPACE_REGION ?? "",
        endpoint: process.env.DO_SPACE_ENDPOINT
      }
    })
  ]
});
