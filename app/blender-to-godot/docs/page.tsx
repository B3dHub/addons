import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blender to Godot Documentation - Blender Addon",
  description: "Blender to Godot Documentation - Blender Addon",
};

export default function BlenderToGodotDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Blender to Godot?</CardDescription>
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
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Where do I find the add-on panels?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the 3D Viewport and press <span className="text-primary">N</span> to reveal the sidebar. All
            Blender-to-Godot tools live under the <span className="text-primary">Godot</span> tab:{" "}
            <span className="text-primary">Tool</span>, <span className="text-primary">Collision</span>,{" "}
            <span className="text-primary">Component</span>, <span className="text-primary">Export</span> and{" "}
            <span className="text-primary">Help</span>.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Collision</CardTitle>
          <CardDescription>How to add auto and custom collisions?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Select one or more mesh objects and open the <span className="text-primary">Collision</span> panel. Pick a
            shape: <span className="text-primary">Box</span>, <span className="text-primary">Capsule</span>,{" "}
            <span className="text-primary">Sphere</span>, <span className="text-primary">Cylinder</span>,{" "}
            <span className="text-primary">Convex</span> or <span className="text-primary">Convex VHACD</span>{" "}
            (Windows only, requires the V-HACD executable).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Click</span> creates an auto collision for every selected object, sized to
            its bounds. The collision is parented to the object and named{" "}
            <code className="text-foreground">{"{object}-convcolonly"}</code> (or{" "}
            <code className="text-foreground">{"{object}-colonly"}</code> for custom shapes) so Godot imports it as a
            collision shape instead of a visible mesh.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Click</span> creates a custom collision on the active object from the
            other selected objects (requires two or more objects selected).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Ctrl + Click</span> creates a bounding-box collision for the whole
            selection, and <span className="text-primary">Alt + Click</span> creates a single shared collision for all
            selected objects.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Each shape gets a colored, semi-transparent helper material (Box-Collision, Capsule-Collision,
            Sphere-Collision, Convex-Collision) so you can see the collision volumes in the viewport. Colors can be
            changed in the add-on preferences.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Component</CardTitle>
          <CardDescription>How to add Godot components?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Component</span> panel tags objects for Godot&apos;s import pipeline
            using naming suffixes:
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            - <span className="text-primary">Navmesh</span>: marks the object as a navigation mesh.{" "}
            <span className="text-primary">Shift + Click</span> assigns the navmesh to the active object instead.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            - <span className="text-primary">Occluder</span>: marks the object as an occluder (suffix{" "}
            <code className="text-foreground">-occonly</code>).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            - <span className="text-primary">Rigid Body</span>: marks the object as a rigid body (suffix{" "}
            <code className="text-foreground">-rigid</code>).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            - <span className="text-primary">Vehicle Body</span> / <span className="text-primary">Vehicle Wheel</span>:{" "}
            suffixes <code className="text-foreground">-vehicle</code> and{" "}
            <code className="text-foreground">-wheel</code> for vehicle setups.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tool</CardTitle>
          <CardDescription>How to rename objects with their collisions and components?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Select an object and click <span className="text-primary">Rename</span> in the{" "}
            <span className="text-primary">Tool</span> panel. The rename dialog renames the object, its child
            collisions and components, and their collections in one go, keeping the{" "}
            <code className="text-foreground">-colonly</code> / <code className="text-foreground">-convcolonly</code>{" "}
            suffixes intact.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Export</CardTitle>
          <CardDescription>How to export objects and collections to Godot?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the <span className="text-primary">Export</span> panel and set the{" "}
            <span className="text-primary">Type</span>: <span className="text-primary">Export to Godot</span>,{" "}
            <span className="text-primary">Export to Disk</span> or <span className="text-primary">Both</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Add one or more destination folders with the <span className="text-primary">+</span> button, or use the{" "}
            <span className="text-primary">Load Folders</span> button (refresh icon) to scan and add subfolders of the
            active path automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Choose the <span className="text-primary">Selection</span> mode:{" "}
            <span className="text-primary">Objects</span> exports the selected objects, and{" "}
            <span className="text-primary">Collections</span> exports the selected collections. Under{" "}
            <span className="text-primary">Include</span>, enable <span className="text-primary">Children</span>{" "}
            (objects mode) or <span className="text-primary">Sub Collections</span> (collections mode).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hit <span className="text-primary">Export</span>. The export runs in a background Blender subprocess with a
            progress slider, so the UI stays responsive. <span className="text-primary">Alt + Click</span> runs the
            export in debug mode.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Objects with the suffixes <code className="text-foreground">colonly</code>,{" "}
            <code className="text-foreground">convcolonly</code>, <code className="text-foreground">occ</code>,{" "}
            <code className="text-foreground">occonly</code>, <code className="text-foreground">navmesh</code>,{" "}
            <code className="text-foreground">vehicle</code>, <code className="text-foreground">wheel</code>,{" "}
            <code className="text-foreground">rigid</code> and <code className="text-foreground">noimp</code> are
            handled specially or excluded from the visible geometry on export.
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
            Open <span className="text-primary">Edit &gt; Preferences &gt; Add-ons</span> and expand Blender-to-Godot.
            The <span className="text-primary">General</span> tab holds collision options (master collection, collision
            colors), component colors (navmesh, occluder) and the Windows-only V-HACD settings (version, voxel
            resolution, recursion depth, output hull, vertex count, fill mode, shrinkwrap, asynchronous, split hull,
            edge length, volume error).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Export</span> tab contains{" "}
            <span className="text-primary">Factory Startup</span> for subprocesses and the full glTF export settings:
            format (GLB / glTF Separate), include, transform, mesh, material and animation options, plus Draco
            compression.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
