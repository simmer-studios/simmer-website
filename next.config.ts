import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

import { DOMAIN_NAME } from "@/constants";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: DOMAIN_NAME
      }
    ]
  }
};

export default withPayload(nextConfig);
