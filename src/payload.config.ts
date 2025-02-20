// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Creatives } from "./collections/Creatives";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Services } from "./collections/Services";
import { Users } from "./collections/Users";
import { Homepage } from "./globals/Homepage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [Projects, Services, Creatives, Users, Media],
  globals: [Homepage],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || ""
    }
  }),
  sharp,
  upload: {
    limits: {
      fieldSize: 10_000_000 // 10 MB
    }
  },
  plugins: [
    s3Storage({
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
