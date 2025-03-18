"use client";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation.js";
import React from "react";

import { WEBSITE_URL } from "@/constants";

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();

  return (
    <PayloadLivePreview
      refresh={() => {
        console.log("Refreshing live preview");
        router.refresh();
      }}
      serverURL={WEBSITE_URL}
    />
  );
};
