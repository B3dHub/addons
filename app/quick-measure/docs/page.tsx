import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Measure Documentation - Blender Addon",
  description: "Quick Measure Documentation - Blender Addon",
};

export default function QuickMeasureDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Quick Measure?</CardDescription>
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
          <CardDescription>How to use Quick Measure?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Hold <span className="text-primary">ALT</span> and drag with the left mouse button to make a quick
            measurement without saving. The distance is drawn as a dotted line with a label at the midpoint, in
            Object Mode and Edit Mode (right mouse button in Edit Mode).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hold <span className="text-primary">SHIFT + ALT</span> while dragging to save the measurement. Saved
            measurements are listed in the <span className="text-primary">Measurements</span> panel (N-Panel &gt;
            Q-Measure tab) and stay visible in the viewport.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Use click-click instead of click-drag for multiple measurements: each additional click starts a new
            measurement from the previous endpoint. Hold <span className="text-primary">CTRL</span> to enable
            snapping to vertices, edges and faces.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            During a measurement, press <span className="text-primary">X</span>,{" "}
            <span className="text-primary">Y</span> or <span className="text-primary">Z</span> to constrain the
            endpoint to that axis. Press <span className="text-primary">ESC</span> or right-click to cancel.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Remove the selected measurement with <span className="text-primary">ALT + X</span>, remove all
            measurements with <span className="text-primary">ALT + CTRL + X</span>, and toggle their display with{" "}
            <span className="text-primary">ALT + SHIFT + X</span>.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Measurements Panel</CardTitle>
          <CardDescription>How to manage saved measurements?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Measurements</span> panel lists every saved measurement with its
            distance as the label. Select entries to inspect them, and use the remove operator to delete the
            selected one (or all of them with <span className="text-primary">Shift</span>).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Hotkeys</span> panel shows the current keymap for every operator,
            reflecting your active mode (Object or Edit Mode) and any custom keymap changes.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>How to configure the add-on?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Override</span> to customize the display: active line color, line
            color, text size, and the unit system (Metric or Imperial) with a fixed length unit (meters,
            centimeters, feet, inches and more) instead of the scene defaults.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
