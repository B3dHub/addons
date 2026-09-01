import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Interface Documentation - Blender Addon",
  description: "Quick Interface Documentation - Blender Addon",
};

export default function QuickInterfaceDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Quick Interface?</CardDescription>
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
          <CardDescription>How to use Quick Interface?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Switch the workspace area using <span className="text-primary">SHIFT + SPACE</span> and select an area
            from the pie menu. The pie groups every editor type: 3D Viewport, Image/UV Editor, Compositor, Texture,
            Geometry Node and Shader Editors, Video Sequence and Movie Clip editors, Outliner, Properties, File and
            Asset Browser, Spreadsheet, Preferences, Dope Sheet, Timeline, Graph Editor, Drivers, NLA, Text Editor,
            Python Console and Info.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Split the area vertically or horizontally using{" "}
            <span className="text-primary">SHIFT + CTRL + SPACE</span>: pick the new editor type from the pie, move
            the mouse to position the split line, use the mouse wheel to flip between vertical and horizontal, and
            hold <span className="text-primary">Ctrl</span> to snap the split line to 1/12 grid steps. Click to
            confirm or press <span className="text-primary">ESC</span> / right-click to cancel.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Duplicate the area using <span className="text-primary">ALT + SPACE</span> and pick the target editor
            from the pie. Hold <span className="text-primary">Alt</span> while clicking an entry to duplicate the
            area into a brand new window instead.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Join areas using <span className="text-primary">SHIFT + ALT + SPACE</span>: move the mouse up, down,
            left or right past a small threshold and the active area merges into the neighbour in that direction.
            Press <span className="text-primary">ESC</span> / right-click to cancel.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Swap areas using <span className="text-primary">SHIFT + CTRL + ALT + SPACE</span>: flick the mouse in a
            direction and the active area swaps places with the adjacent area.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
