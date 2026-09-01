import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Theme Documentation - Blender Addon",
  description: "Quick Theme Documentation - Blender Addon",
};

export default function QuickThemeDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Quick Theme?</CardDescription>
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
          <CardDescription>How to use Quick Theme?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Once the add-on is enabled, all theme settings are consolidated in the{" "}
            <span className="text-primary">Quick Theme</span> panel (N-Panel &gt; Q-Theme tab).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Toggle the <span className="text-primary">Auto Theme</span> feature to change the theme whenever you
            restart or load a blend file. A new accent color is picked automatically and applied on startup.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Pick an accent color with the color picker or hex field. The color is instantly propagated across the
            interface: selected buttons, menus, tooltips, text fields, sliders, list items, pie menus and panels all
            follow the accent.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Adjust <span className="text-primary">Roundness</span> to control the edge rounding of every widget at
            once, from sharp corners to fully rounded.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Viewport &amp; Outliner</CardTitle>
          <CardDescription>How to customize selection colors?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Viewport</span> and{" "}
            <span className="text-primary">Outliner</span> sub-panels are linked to the interface color by default:
            active and selected objects, vertices, edges and faces are derived from the accent color automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Click the link icon in the sub-panel header to unlink and set the colors manually: active and selected
            objects, vertex, edge and face selection colors for the viewport; active, selected highlight and text
            colors for the outliner.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Editors</CardTitle>
          <CardDescription>Which other areas are themed?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The accent color also drives the File and Asset Browser selection, UV/Image Editor element selection,
            Properties match and active modifier, animation editors (current frame, selected strips in the NLA and
            Sequencer), the playhead, and the default annotation color.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
