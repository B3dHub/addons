import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-Screen Key Documentation - Blender Addon",
  description: "On-Screen Key Documentation - Blender Addon",
};

export default function OnScreenKeyDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Fab Bridge?</CardDescription>
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
          <CardTitle>Enabling the Overlay</CardTitle>
          <CardDescription>How to show On-Screen Key?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Toggle the overlay from any supported editor&apos;s overlay panel, from the{" "}
            <span className="text-primary">3D View &gt; Sidebar (N) &gt; View</span> tab, or with the keyboard shortcut{" "}
            <span className="text-primary">Shift+Alt+C</span> (configurable in the add-on preferences). When the toggle
            is left on, the overlay starts automatically the next time Blender launches.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable it from the guides overlay with{" "}
            <span className="text-primary">3D View &gt; Overlays &gt; Guides &gt; On-Screen Key</span>, or from each
            editor&apos;s own overlay dropdown — the overlay is drawn per editor region.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supported Inputs</CardTitle>
          <CardDescription>What the overlay can show.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Keys</TableCell>
                <TableCell>
                  Letters, digits, F1–F24, numpad, punctuation, arrow and navigation keys, modifiers and media keys
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mouse</TableCell>
                <TableCell>
                  Left, middle and right buttons with click, drag and double-click variants, plus extra buttons 4–7
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Scroll</TableCell>
                <TableCell>Wheel up and down; rapid scrolls in one direction group into a single entry</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Other devices</TableCell>
                <TableCell>Trackpad gestures (pan, rotate, zoom) and NDOF devices</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardContent>
          <CardDescription>
            Held mouse buttons stay lit while pressed, and the overlay follows the editor under the mouse so it is
            always drawn where you are working. Use <span className="text-primary">Reset Overlay</span> to clear the
            history whenever you switch editors.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Supported Editors</CardTitle>
          <CardDescription>Where the overlay draws.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">3D Viewport</TableCell>
                <TableCell>Overlays &gt; Guides</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Image Editor</TableCell>
                <TableCell>Overlays &gt; Guides</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Node Editor</TableCell>
                <TableCell>Overlays</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Video Sequencer</TableCell>
                <TableCell>Overlays</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Every option is in the add-on preferences and the sidebar view panel.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Setting</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Align</TableCell>
                <TableCell>Left, Center or Right edge of the editor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Scale</TableCell>
                <TableCell>Sizes the icons, box and margins (1.0–2.0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Opacity</TableCell>
                <TableCell>Opacity of the box, icons and text (0.1–1.0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Duration</TableCell>
                <TableCell>Seconds an input stays on screen (1–10)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">History</TableCell>
                <TableCell>Number of recent inputs kept in the stack (1–10)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operator Names</TableCell>
                <TableCell>Show the executed operator after the input, e.g. &quot;X Delete&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reset Overlay</TableCell>
                <TableCell>Clear the overlay when the active editor changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shortcut</TableCell>
                <TableCell>Keyboard shortcut to toggle the overlay (empty for none)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Use Theme Colors</TableCell>
                <TableCell>Fill boxes from the theme&apos;s Tool widget colors</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Inner</TableCell>
                <TableCell>Older box fill when theme colors are off</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Selected</TableCell>
                <TableCell>Newest box fill when theme colors are off</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Text</TableCell>
                <TableCell>Icon and keycap text tint when theme colors are off</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
