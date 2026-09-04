"use client";

import { useSearchParams } from "next/navigation";
import OtherAddons from "@/components/other-addons";

// Reads ?ref from the iframe URL on the client. GitHub Pages serves a static export,
// so the page cannot be rendered dynamically per request — searchParams must be
// accessed via useSearchParams() inside a Suspense boundary (see page.tsx).
export default function MoreAddons() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref") ?? undefined;

  return <OtherAddons refParam={refParam} />;
}
