import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blender to Unity Documentation - Blender Addon",
  description: "Blender to Unity Documentation - Blender Addon",
};

export default function BlenderToUnityDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Blender to Unity?</CardDescription>
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
            Blender-to-Unity tools live under the <span className="text-primary">Unity</span> tab:{" "}
            <span className="text-primary">Tool</span>, <span className="text-primary">Collider</span>,{" "}
            <span className="text-primary">Lod</span>, <span className="text-primary">Export</span> and{" "}
            <span className="text-primary">Help</span>.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Collider</CardTitle>
          <CardDescription>How to add auto and custom colliders?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Select one or more mesh objects and open the <span className="text-primary">Collider</span> panel. Pick a
            shape: <span className="text-primary">Box</span>, <span className="text-primary">Capsule</span>,{" "}
            <span className="text-primary">Cylinder</span>, <span className="text-primary">Sphere</span>,{" "}
            <span className="text-primary">Convex</span> or <span className="text-primary">Convex VHACD</span>{" "}
            (Windows only, requires the V-HACD executable).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Click</span> creates an auto collider for every selected object, sized to
            its bounds. The collider is parented to the object and named{" "}
            <code className="text-foreground">{"{object}_Collider"}</code> so Unity&apos;s importer can pick it up.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Click</span> creates a custom collider on the active object from the
            other selected objects (requires two or more objects selected).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Ctrl + Click</span> creates a bounding-box collider for the whole selection,
            and <span className="text-primary">Alt + Click</span> creates a single shared collider for all selected
            objects.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Each shape gets a colored, semi-transparent helper material (<code className="text-foreground">.box_collider</code>,{" "}
            <code className="text-foreground">.capsule_collider</code>,{" "}
            <code className="text-foreground">.sphere_collider</code>,{" "}
            <code className="text-foreground">.convex_collider</code>) so you can see the collider volumes in the
            viewport. Colors can be changed in the add-on preferences.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lod</CardTitle>
          <CardDescription>How to create, update and preset LODs?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the <span className="text-primary">Lod</span> panel. The list holds reduction ratios (default{" "}
            <code className="text-foreground">0.5</code>). Use <span className="text-primary">Add</span> to append more
            levels, and save or load ratio sets with the <span className="text-primary">Presets</span> menu.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Create</span> builds a LOD chain for the selected objects:{" "}
            <code className="text-foreground">{"{object}_LOD1"}</code>,{" "}
            <code className="text-foreground">{"{object}_LOD2"}</code> and so on, each with a{" "}
            <span className="text-primary">DECIMATE</span> modifier set to the ratio from the list. Existing LODs are
            replaced on re-run, so the operator doubles as an update.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Create</span> offsets each LOD&apos;s location so you can compare
            them side by side. <span className="text-primary">Ctrl + Create</span> builds cascade LODs, where each level
            is decimated from the previous one and the modifiers are applied.{" "}
            <span className="text-primary">Ctrl + Shift + Create</span> offsets the cascade LODs.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Remove</span> deletes all LODs of the selected objects at once.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tool</CardTitle>
          <CardDescription>How to rename objects and toggle colliders and LODs?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Rename</span> renames the selected object, its child colliders and LODs,
            and their collections in one go.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Toggle Colliders</span> and <span className="text-primary">Toggle LODs</span>{" "}
            show or hide the generated helpers. <span className="text-primary">Shift + Click</span> toggles recursively
            including children, <span className="text-primary">Ctrl + Click</span> toggles the selected collections, and{" "}
            <span className="text-primary">Alt + Click</span> deletes them (with a confirmation dialog).
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Export</CardTitle>
          <CardDescription>How to export objects and collections to Unity?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the <span className="text-primary">Export</span> panel and set the{" "}
            <span className="text-primary">Type</span>: <span className="text-primary">Export to Unity</span>,{" "}
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
            <span className="text-primary">Include</span>, enable <span className="text-primary">Children</span> or{" "}
            <span className="text-primary">Sub Collections</span> and <span className="text-primary">Materials</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Set the <span className="text-primary">Shader Type</span> (Standard, Standard Specular, Autodesk
            Interactive, URP-Autodesk, URP-Lit, HDRP-Autodesk, HDRP-Lit) and{" "}
            <span className="text-primary">Surface Type</span> (Opaque or Transparent). These are stored as custom
            properties on the objects so Unity&apos;s importer can create the right shader automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hit <span className="text-primary">Export</span>. The export runs in a background Blender subprocess with
            a progress slider. The FBX is rotated and scaled for Unity&apos;s coordinate system (100 units = 1m),
            collider helper materials are removed, and modifiers are baked (objects with armature modifiers are
            skipped). <span className="text-primary">Alt + Click</span> runs the export in debug mode.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Unity Importer</CardTitle>
          <CardDescription>How to get colliders and shaders automatically in Unity?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            To get colliders and shader types in Unity automatically, import the{" "}
            <span className="text-primary">BUImporter_v3</span> script into the open Unity project (drag and drop, it
            should compile).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Install the <span className="text-primary">com.unity.nuget.newtonsoft-json</span> Unity package (required
            by BUImporter_v3). Open <span className="text-primary">Window &gt; Package Manager</span>, click the{" "}
            <span className="text-primary">+</span> button, choose <span className="text-primary">Add package by
            name</span> and enter the package name.
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
            Open <span className="text-primary">Edit &gt; Preferences &gt; Add-ons</span> and expand Blender-to-Unity.
            The <span className="text-primary">General</span> tab holds the{" "}
            <span className="text-primary">Object Collection</span> option (per-object collections for colliders and
            LODs), collider colors, the <span className="text-primary">LODs Offset</span> distance, and the Windows-only
            V-HACD settings.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Export</span> tab contains{" "}
            <span className="text-primary">Factory Startup</span> for subprocesses and the full FBX export settings:
            path mode, embed textures, batch mode, object types, custom properties, scale, axis conversion, smoothing,
            modifiers, triangulation, armature and animation baking options.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
