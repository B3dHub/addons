import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Baker Documentation - Blender Addon",
  description: "Quick Baker Documentation - Blender Addon",
};

export default function QuickBakerDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Quick Baker?</CardDescription>
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
          <CardDescription>How to use Quick Baker?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Add a new <span className="text-primary">BakeGroup</span> by pressing the{" "}
            <span className="text-primary">+</span> operator in the{" "}
            <span className="text-primary">Bake Groups</span> panel (N-Panel &gt; Q-Baker tab). The{" "}
            <span className="text-primary">BakeGroup</span> is the starting point for the add-on.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Hold <span className="text-primary">Shift</span> while pressing{" "}
            <span className="text-primary">+</span> to create a bake group from the selected objects. Hold{" "}
            <span className="text-primary">Ctrl</span> to create a high-to-low bake group from the selection (objects
            are paired by <code className="text-foreground">_high</code>/<code className="text-foreground">_low</code>{" "}
            suffixes, and <code className="text-foreground">_cage</code> objects are assigned automatically). Hold{" "}
            <span className="text-primary">Alt</span> to create one bake group per selected object.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Each <span className="text-primary">BakeGroup</span> can work in two modes: with{" "}
            <span className="text-primary">High to Low</span> disabled it bakes the listed objects directly; with it
            enabled, you add <span className="text-primary">Groups</span> containing high poly meshes, a low poly
            mesh, and optional cage settings.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Add maps to the bake group, then press the <span className="text-primary">Bake</span> operator. Baking
            runs in background Blender subprocesses with a progress slider and a cancel button.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>High to Low Groups</CardTitle>
          <CardDescription>How to set up high and low poly pairs?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">High to Low</span> on the bake group, then add{" "}
            <span className="text-primary">Groups</span>. Hold <span className="text-primary">Shift</span> on the{" "}
            <span className="text-primary">+</span> button to build groups from selected objects by{" "}
            <code className="text-foreground">_high</code>/<code className="text-foreground">_low</code>/
            <code className="text-foreground">_cage</code> suffixes, <span className="text-primary">Ctrl</span> to
            group the selection with the active object as low poly, or{" "}
            <span className="text-primary">Alt</span> to create one group per selected collection.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Each group holds <span className="text-primary">High Poly</span> meshes (multiple allowed) and a{" "}
            <span className="text-primary">Low Poly</span> mesh. The low poly object needs a UV map; high poly
            objects need materials.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Cage</span>: enable <span className="text-primary">Auto Cage</span> to
            use an extrusion value, or assign a custom cage object. <span className="text-primary">Ray Distance</span>{" "}
            controls the maximum ray distance for the bake.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">UV Map</span>: use a global UV map for the whole bake group or a per-object
            UV map. The <span className="text-primary">Add UVMap</span> operator creates a new UV map when needed.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>UV Unwrap/Pack</CardTitle>
          <CardDescription>How to create a bake-ready UV map?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Select an existing UV map under <span className="text-primary">Global UV Map</span> or per object, or
            press <span className="text-primary">Add UV Map</span> to create a new one. The dialog lets you name the
            map and run Blender&apos;s <span className="text-primary">Smart UV Project</span> automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Smart UV Project</span> to unwrap the mesh, and{" "}
            <span className="text-primary">Pack Islands</span> to arrange the islands into the 0&ndash;1 UV space.{" "}
            <span className="text-primary">Island Margin</span> controls the spacing between islands, while{" "}
            <span className="text-primary">Margin</span> controls the border around the packed layout. Disable either
            option to only create an empty UV map.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The new UV map is selected for the bake group, so objects without a usable UV map can be made bake-ready
            without leaving the add-on.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decal Bake</CardTitle>
          <CardDescription>How to bake decal objects or layers?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Decal bake works with two kinds of decals. Decals added with{" "}
            <Link
              href={"https://superhivemarket.com/products/quick-decal"}
              target="_blank"
              className="underline text-primary"
            >
              Quick Decal
            </Link>{" "}
            are shader decals: the QDecal Master node group blends them into the surface shader, so they are baked
            together with the material. Mesh decals are the other method: any mesh child of the object whose name
            contains <code className="text-foreground">_decal</code> — for example, an image-textured plane placed
            over the surface — is detected and baked into the maps as well. Keep the name unique to actual decal
            meshes, since every matching child is baked.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Mesh decals need no extra setup: when a baked object (Object Bake) or a{" "}
            <span className="text-primary">High Poly</span> object (High to Low) has{" "}
            <code className="text-foreground">_decal</code> children, Quick Baker automatically uses the decal
            workflow. Decal meshes are evaluated as they are — modifiers included, nothing is copied or joined — and
            rays are cast from the decal geometry onto the low poly, so decals should sit on or just above the
            surface. The decal&apos;s <span className="text-primary">Alpha</span> input drives the coverage.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Mesh decals are baked per map in two passes: the base surface is baked without the decals first, then
            the decals are baked alone while the object blocks the rays, so a decal cannot project onto its opposite
            side. The decal is then alpha-composited over the base (
            <code className="text-foreground">decal * alpha + base * (1 - alpha)</code>), so transparent decal
            regions reveal the surface underneath instead of baking black, and the alpha channel is blended with the
            same mask. Works for every map and channel pack.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Tiled images cannot be composited, so for <span className="text-primary">UDIM</span> layouts the mesh
            decals are included in the base pass and baked together with it in a single pass instead.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maps</CardTitle>
          <CardDescription>Which maps can be baked?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Add maps with the <span className="text-primary">Add Map</span> menu. Maps are grouped into{" "}
            <span className="text-primary">PBR</span> (Base Color, Emission, Glossiness, Metallic, Normal,
            Occlusion, Roughness, Specular), <span className="text-primary">Mesh</span> (Alpha, Bevel Normal,
            Cavity, Curvature, Displacement, Edge, Gradient, Height, Material ID, Thickness, Toon Shadow, Vector
            Displacement, Wireframe, XYZ), <span className="text-primary">Principled BSDF</span> (all BSDF inputs
            including subsurface, transmission, coat, sheen) and <span className="text-primary">Cycles</span>{" "}
            passes (AO, Combined, Diffuse, Environment, Glossy, Position, Shadow, Transmission, UV).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Load Maps</span> operator scans the materials of the listed objects
            and adds maps for every Principled BSDF input that is linked or changed from its default value.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Channel Pack</span> maps combine up to four maps into a single texture
            (RGBA or RGB+A modes), with per-channel map selection in the R/G/B/A sub-panels.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Toggle <span className="text-primary">Global</span> in the Maps and Bake panel headers to share the map
            list and bake settings across all bake groups, or keep them per bake group. Map and bake settings can be
            saved as presets.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bake Settings</CardTitle>
          <CardDescription>How to configure the output?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Each map has settings for <span className="text-primary">Size</span> (512 to 8K or custom width/height),{" "}
            <span className="text-primary">Anti-Aliasing</span> (up to 16x super-sampling),{" "}
            <span className="text-primary">Format</span> (PNG, JPEG, Targa, TIFF, OpenEXR, HDR, WebP) with color
            depth and codec options, and <span className="text-primary">View Transform</span> for the bake.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Normal maps support OpenGL/DirectX/Custom types, tangent/object space and per-channel swizzling.
            Margins can use adjacent faces or extend mode.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Batch Name</span> preference controls the output file naming with{" "}
            <code className="text-foreground">$name</code>, <code className="text-foreground">$size</code> and{" "}
            <code className="text-foreground">$type</code> tokens. <span className="text-primary">Auto UDIM</span>{" "}
            creates UDIM textures automatically when the UV layout spans multiple tiles.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Material &amp; Node Bake</CardTitle>
          <CardDescription>How to bake in the Shader Editor?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Q-Baker</span> tab in the Shader Editor adds a{" "}
            <span className="text-primary">Material Bake</span> panel: add materials to the list, add maps (same
            types as object baking) and bake them without adding objects to bake groups.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Node Bake</span> panel bakes the selected nodes into image textures.
            Hold <span className="text-primary">Shift</span> while clicking Bake to replace the linked sockets of the
            selected nodes with the baked textures. Shader and output nodes are not supported.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertex Color</CardTitle>
          <CardDescription>How to apply vertex colors quickly?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The <span className="text-primary">Vertex Color</span> panel (Edit Mode, or Object Mode when enabled in
            the preferences) provides a color swatch, a palette of preset colors and an{" "}
            <span className="text-primary">Apply</span> operator that paints the selected faces with the chosen
            color.
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
            <span className="text-primary">Batch Name</span> default tokens,{" "}
            <span className="text-primary">Auto UDIM</span>, <span className="text-primary">Remove Disabled
            Maps</span> from the baked material, and <span className="text-primary">.blend Location</span> to use
            the .blend file directory as the default save location.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Cage</span> settings: wireframe display, cage object color and the
            default cage extrusion for new groups. <span className="text-primary">Vertex Color</span> in object
            mode, and <span className="text-primary">Factory Startup</span> to launch bake subprocesses with a
            clean Blender startup.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
