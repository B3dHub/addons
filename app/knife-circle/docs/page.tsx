import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knife Circle Documentation - Blender Addon",
  description: "Knife Circle Documentation - Blender Addon",
};

export default function KnifeCircleDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Knife Circle?</CardDescription>
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
          <CardDescription>How to use Knife Circle?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Select</span> one or more mesh objects.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Activate</span> the Knife Circle tool from the toolbar. It is available in
            both Object Mode and Edit Mode (placed right after the built-in Knife tool).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Click</span> to place the shape center, then{" "}
            <span className="text-primary">move</span> the mouse to adjust the radius. The shape is drawn on a plane
            aligned with your current view, so rotate the viewport to control the projection angle.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Confirm</span> with Left Click or{" "}
            <span className="text-primary">Cancel</span> with Right Click/ESC. The shape is projected onto all selected
            meshes using Blender&apos;s Knife Project operator, and the helper mesh is removed automatically.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shapes &amp; Segments</CardTitle>
          <CardDescription>How to switch between circle, square and triangle?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Scroll</span> the mouse wheel to increase or decrease the number of
            segments (3-256). The header shows the current value.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Press <span className="text-primary">C</span> for a circle (32 segments),{" "}
            <span className="text-primary">S</span> for a square (4 segments) and{" "}
            <span className="text-primary">T</span> for a triangle (3 segments).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Press <span className="text-primary">F</span> to toggle between{" "}
            <span className="text-primary">Fixed</span> mode (uniform radius from the center) and{" "}
            <span className="text-primary">Freeform</span> mode (independent X and Y radii for elliptical shapes).
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Precision Input</CardTitle>
          <CardDescription>How to type an exact radius?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Type a number with the keyboard (top row or numpad, <span className="text-primary">.</span> for decimals)
            to enter an exact radius. The value appears in the header.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Press <span className="text-primary">Backspace</span> to delete the last character and{" "}
            <span className="text-primary">Enter</span> to confirm the typed radius.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hold <span className="text-primary">Shift</span> while moving the mouse for precise (slower) radius
            adjustment, or <span className="text-primary">Ctrl</span> to snap the radius in increments.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cut Through</CardTitle>
          <CardDescription>How to cut through the entire mesh?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Press <span className="text-primary">X</span> to toggle{" "}
            <span className="text-primary">Cut Through</span>. When enabled, the cut goes through all faces of the
            mesh instead of only the visible side.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The circle outline color indicates the state: it uses the theme&apos;s Z axis color normally and switches
            to the X axis color when Cut Through is active.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
