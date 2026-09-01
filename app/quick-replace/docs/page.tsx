import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Replace Documentation - Blender Addon",
  description: "Quick Replace Documentation - Blender Addon",
};

export default function QuickReplaceDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Quick Replace?</CardDescription>
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
          <CardDescription>How to use Quick Replace?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Create a category in the <span className="text-primary">Categories</span> panel (N-Panel &gt; Q-Replace
            tab, Object Mode) and add objects to its list. Hold <span className="text-primary">Shift</span> on the{" "}
            <span className="text-primary">+</span> button to create a category from the selected objects, use the
            <span className="text-primary"> Add</span> menu to pick meshes from the scene, or the load button to
            add the whole selection.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Select the objects to replace. Only mesh objects are replaced; objects that are part of the category
            list are skipped.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Loop through the object list with <span className="text-primary">SHIFT + SCROLL</span> from the top, or{" "}
            <span className="text-primary">CTRL + SCROLL</span> from the active object. The replacement is live
            while scrolling; release the modifier key to finish.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Switch the active category with <span className="text-primary">SHIFT + CTRL + SCROLL</span> and rotate
            the selected objects in 90 degree steps on the Z axis with{" "}
            <span className="text-primary">ALT + [</span> and <span className="text-primary">ALT + ]</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            With <span className="text-primary">Single User Copy</span> enabled, replaced objects get their own mesh
            copy on finish so edits stay isolated; disable it to keep the meshes shared.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
