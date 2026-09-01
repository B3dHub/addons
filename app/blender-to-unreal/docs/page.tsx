import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blender to Unreal Documentation - Blender Addon",
  description: "Blender to Unreal Documentation - Blender Addon",
};

export default function BlenderToUnrealDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Blender to Unreal?</CardDescription>
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
            Blender-to-Unreal tools live under the <span className="text-primary">Unreal</span> tab:{" "}
            <span className="text-primary">Tool</span>, <span className="text-primary">Vehicle Rigging</span>,{" "}
            <span className="text-primary">Collision</span>, <span className="text-primary">Socket</span>,{" "}
            <span className="text-primary">Lod</span>, <span className="text-primary">Export</span> and{" "}
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
            its bounds. The collision is parented to the object and named with Unreal&apos;s conventions:{" "}
            <code className="text-foreground">UBX_</code> (box), <code className="text-foreground">UCP_</code>{" "}
            (capsule), <code className="text-foreground">USP_</code> (sphere) and{" "}
            <code className="text-foreground">UCX_</code> (convex), followed by the object name, e.g.{" "}
            <code className="text-foreground">UBX_Wall</code>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Click</span> creates a custom collision on the active object from
            the other selected objects (requires two or more objects selected).
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
            Each shape gets a colored, semi-transparent helper material (<code className="text-foreground">.UBX_Collision</code>,{" "}
            <code className="text-foreground">.UCP_Collision</code>, <code className="text-foreground">.USP_Collision</code>,{" "}
            <code className="text-foreground">.UCX_Collision</code>) so you can see the collision volumes in the
            viewport. Enable <span className="text-primary">Only UCX Collision</span> in the preferences to make every
            collision a UCX prefix.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Socket</CardTitle>
          <CardDescription>How to add sockets?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Mesh</span> creates a socket empty named{" "}
            <code className="text-foreground">SOCKET_{"{object}"}</code> at the 3D cursor, parented to the selected
            mesh. In Edit Mode, select vertices first and the socket is placed at their midpoint instead.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Click</span> turns the selected empty objects into sockets for the
            active mesh. Sockets show in front and their display size is set in the preferences.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            For skeletal meshes, use the <span className="text-primary">Skeletal</span> operator in Edit Mode on an
            armature: it creates a socket parented to the active bone at the 3D cursor location.
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
            them side by side. <span className="text-primary">Ctrl + Create</span> builds cascade LODs, where each
            level is decimated from the previous one and the modifiers are applied.{" "}
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
          <CardTitle>Vehicle Rigging</CardTitle>
          <CardDescription>How to rig a vehicle for Unreal?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Set the vehicle <span className="text-primary">Body</span> object (a mesh without{" "}
            <code className="text-foreground">wheel</code> in its name). Click{" "}
            <span className="text-primary">Load Wheels</span> (refresh icon) to auto-detect the body&apos;s children
            whose names contain <code className="text-foreground">wheel</code>, or add wheels manually with{" "}
            <span className="text-primary">Add Wheel</span> (search popup) and{" "}
            <span className="text-primary">Load Wheels</span> from the selection.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Set the <span className="text-primary">Bone Length</span> for the generated bones, then hit{" "}
            <span className="text-primary">Rig</span>. The operator applies rotations and scale, creates an armature
            with a <code className="text-foreground">Body</code> root bone and one bone per wheel, parents body and
            wheels to the armature with vertex groups, and names the armature{" "}
            <code className="text-foreground">{"{body}_Armature"}</code>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Shift + Remove</span> on a wheel entry clears the whole wheel list.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tool</CardTitle>
          <CardDescription>How to rename objects and create edge decals?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Rename</span> renames the selected object, its child collisions, sockets
            and LODs, and their collections in one go, keeping the{" "}
            <code className="text-foreground">UCX_</code>/<code className="text-foreground">UBX_</code>/
            <code className="text-foreground">USP_</code>/<code className="text-foreground">UCP_</code> prefixes
            intact.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Edge Decal</span> (Edit Mode) creates a decal mesh from the selected edges
            with <span className="text-primary">Amount</span> (width), <span className="text-primary">Offset</span> and{" "}
            <span className="text-primary">Clamp Overlap</span> options. The result is parented to the object, named{" "}
            <code className="text-foreground">DECAL_{"{object}"}</code> and given the{" "}
            <code className="text-foreground">M_EdgeDecal</code> material.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Export</CardTitle>
          <CardDescription>How to export objects and collections to Unreal?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the <span className="text-primary">Export</span> panel and set the{" "}
            <span className="text-primary">Type</span>: <span className="text-primary">Export to Unreal</span>,{" "}
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
            <span className="text-primary">Sub Collections</span>. Under <span className="text-primary">Separate</span>
            , enable <span className="text-primary">Skeletal Meshes</span> or{" "}
            <span className="text-primary">Animations</span> to export them to separate FBX files (animations require
            NLA tracks).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hit <span className="text-primary">Export FBX</span>. The export runs in a background Blender subprocess
            with a progress slider. Prefixes (<code className="text-foreground">SM</code>,{" "}
            <code className="text-foreground">SKM</code>, <code className="text-foreground">A</code>,{" "}
            <code className="text-foreground">T</code>, <code className="text-foreground">M</code>) are applied
            automatically and can be configured in the preferences.
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
            Open <span className="text-primary">Edit &gt; Preferences &gt; Add-ons</span> and expand Blender-to-Unreal.
            The <span className="text-primary">General</span> tab holds export prefixes, collision options (master
            collection, only UCX, clean names, colors), socket display size, the{" "}
            <span className="text-primary">LODs Offset</span> distance, and the Windows-only V-HACD settings.
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
