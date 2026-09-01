import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camera Preview Documentation - Blender Addon",
  description: "Camera Preview Documentation - Blender Addon",
};

export default function CameraPreviewDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Camera Preview?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Go to <span className="text-primary">Edit &gt; Preferences</span> then to the{" "}
            <span className="text-primary">Add-ons</span> tab. Click <span className="text-primary">Install</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Choose the downloaded zip and click <span className="text-primary">Install Add-on</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            After the installation is complete it will show up in the add-on list. Enable the add-on by ticking the
            checkbox.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Camera Preview?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Once the add-on is enabled, the camera view is previewed directly in the 3D viewport. The preview shows
            what the active camera sees, rendered live from a dedicated hidden view layer, so you can model and animate
            while watching the camera framing.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Toggle the preview from the <span className="text-primary">Camera Preview</span> checkbox in the{" "}
            <span className="text-primary">View</span> tab of the sidebar (<span className="text-primary">N-Panel</span>
            ), or from the <span className="text-primary">Viewport Overlays &gt; Guides</span> panel in the viewport
            header.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The preview header displays the camera name, its focal length and the frame range bound to the camera via
            timeline markers (or the scene range when no markers are bound).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The preview automatically uses the selected camera object when one is active, otherwise the scene camera.
            Background images attached to the camera are drawn as reference empties in the viewport.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Position &amp; Size</CardTitle>
          <CardDescription>How to place the preview in the viewport?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            In the <span className="text-primary">Camera Preview</span> panel, set{" "}
            <span className="text-primary">Position</span> to <span className="text-primary">Top Left</span>,{" "}
            <span className="text-primary">Top Right</span>, <span className="text-primary">Bottom Left</span> or{" "}
            <span className="text-primary">Bottom Right</span>. The preview automatically avoids the toolbar, header
            and navigation gizmo areas.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Fine-tune the placement with <span className="text-primary">Offset X</span> and{" "}
            <span className="text-primary">Offset Y</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Set <span className="text-primary">Size</span> to <span className="text-primary">Small</span>,{" "}
            <span className="text-primary">Medium</span> or <span className="text-primary">Large</span>, or choose{" "}
            <span className="text-primary">Custom</span> and enter an exact{" "}
            <span className="text-primary">Width</span> and <span className="text-primary">Height</span> in pixels.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Hide In Camera View</span> to hide the preview while you are inside
            the camera view, since the full-size camera view is already visible there.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hiding Objects</CardTitle>
          <CardDescription>How to hide objects only from the preview?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Right-click an object in the viewport or the Outliner and choose{" "}
            <span className="text-primary">Hide/Unhide in Camera Preview</span>. The object disappears from the preview
            only, not from the working viewport.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Right-click a collection in the Outliner and choose the same operator to toggle the whole collection in
            the preview. This is useful for hiding helper geometry, rigs and control shapes while framing a shot.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
