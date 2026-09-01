import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Decal Documentation - Blender Addon",
  description: "Quick Decal Documentation - Blender Addon",
};

export default function QuickDecalDocPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Quick Decal?</CardDescription>
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
          <CardDescription>How to use Quick Decal?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the <span className="text-primary">Q-Decal</span> tab in the 3D Viewport N-Panel. Select a mesh
            object with a material, pick a decal from the <span className="text-primary">Decals</span> panel and
            click <span className="text-primary">Add Decal Layer</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The decal is placed with a modal grab: snapping is temporarily enabled with{" "}
            <span className="text-primary">Face</span> snap and align rotation, so the decal follows the surface
            under the cursor. Click to confirm, or press <span className="text-primary">ESC</span> / right-click to
            cancel and undo everything.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hold <span className="text-primary">Shift</span> while adding to apply the decal to all materials of
            the selected objects, or <span className="text-primary">Ctrl</span> for all materials of the active
            object. Adding works from an empty too, as long as its parent is a mesh.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Each decal is driven by a controller empty (stored in a{" "}
            <code className="text-foreground">QDecals</code> collection) that is parented to the object. Move,
            rotate and scale the controller to place the decal; the layer&apos;s{" "}
            <span className="text-primary">Mapping</span> panel offers the same controls numerically.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decal Libraries</CardTitle>
          <CardDescription>Where do the decals come from?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Custom</span>: set the custom library path in the preferences. The{" "}
            <span className="text-primary">Load Decal Layer</span> button (refresh icon) opens a file browser for
            PNG, JPG, BMP, TIFF, TGA or EXR images. Loaded files are copied into the library folder so they appear
            in the preview browser for reuse.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            When a folder of textures is loaded, maps are auto-detected by filename identifiers (base color, AO,
            metallic, roughness, normal, opacity/alpha, displacement) and connected to the matching layer slots
            with the correct color space. A single image is used as the base color.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Megascans</span>: set the path to{" "}
            <code className="text-foreground">Megascans Library/Downloaded/</code> (the folder must contain{" "}
            <code className="text-foreground">assetsData.json</code>). Browse decals by category and subcategory,
            choose a size (1K/2K/4K) in the preferences, and add them like custom decals. Albedo, AO, metallic,
            roughness, normal, opacity, translucency and displacement maps are loaded automatically.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Layers</CardTitle>
          <CardDescription>How to manage decals on a material?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Every material with decals has a <span className="text-primary">Layers</span> list. Reorder layers
            with the arrows (the node chain updates live), duplicate a layer with its controller and settings, or
            remove it. The eye icon toggles visibility of all layers; the panel header icon toggles every decal in
            the scene.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Each layer exposes <span className="text-primary">Opacity</span> and{" "}
            <span className="text-primary">Emission</span> strength, plus a controller picker. The{" "}
            <span className="text-primary">Maps</span> sub-panel shows the layer&apos;s textures with blend type,
            mix factor, tint color and normal strength for the base color.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Wear</span>: enable per-layer procedural wear that erodes the decal
            based on the mesh. Amount, Scale, Detail, Contrast and Offset are exposed directly in the panel, and
            the wear node group can be edited in a separate window via the node-tree icon.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Use <span className="text-primary">Duplicate Object with Decals</span> in the material panel to copy
            the object with unique decal layers, node groups and controllers, so the copy can be edited
            independently.
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
            <span className="text-primary">Libraries</span>: Megascans library path and import size, custom library
            path, and the filename identifiers used to auto-detect each map type.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Controller</span>: display type (axes, arrows, circle, cube, sphere,
            image) and display size of the controller empties.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Preview</span>: icon scale, popup scale and labels for the decal
            preview browser.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
