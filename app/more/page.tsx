import { Metadata } from "next";
import { Suspense } from "react";
import MoreAddons from "./more-addons";

// Embeddable "Other Addons" widget for external sites. Deployed URL is `<site>/addons/more`, e.g.:
//   <iframe
//     src="https://b3dhub.github.io/addons/more?ref=5400"
//     width="100%"
//     height="1000"
//     title="More B3dHub Blender Addons"
//     style="border: none;"
//   ></iframe>
// The optional ?ref param is read on the client and appended to every product link, e.g.
//   https://superhivemarket.com/products/quick-baker?ref=5400
// The body background is forced transparent so the widget blends into the host page.

export const metadata: Metadata = {
  title: "More B3dHub Blender Addons",
  description: "More B3dHub Blender addons you might like.",
  robots: { index: false },
};

export default function MoreAddonsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "body { background: transparent !important; }" }} />
      <main className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
        <Suspense>
          <MoreAddons />
        </Suspense>
      </main>
    </>
  );
}
