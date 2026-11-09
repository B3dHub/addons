import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cargo Bridge Documentation - Blender Addon",
  description:
    "Install and use Cargo Bridge: browse your downloaded KitBash3D Cargo library in Blender and import models, materials, textures and HDRIs with rebuilt Principled BSDF materials.",
};

export default function CargoBridgeDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-208">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Cargo Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Cargo Bridge requires Blender <span className="text-primary">4.2 or newer</span> and installs as an
            extension.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Open <span className="text-primary">Edit &gt; Preferences &gt; Get Extensions</span>, click{" "}
            <span className="text-primary">Install from Disk</span>, choose the downloaded zip, and enable{" "}
            <span className="text-primary">Cargo Bridge</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Once enabled, the add-on preferences are available under{" "}
            <span className="text-primary">Edit &gt; Preferences &gt; Add-ons &gt; Cargo Bridge</span>.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Library Setup</CardTitle>
          <CardDescription>Point the add-on at your downloaded Cargo kits.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Download the assets through the Cargo desktop app first. Cargo normally stores kits under:
          </CardDescription>
        </CardContent>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Windows</TableCell>
                <TableCell>
                  <code className="text-foreground">%APPDATA%\kitbash3d\kits</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">macOS</TableCell>
                <TableCell>
                  <code className="text-foreground">~/Library/Application Support/kitbash3d/kits</code>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Linux</TableCell>
                <TableCell>
                  <code className="text-foreground">~/.config/kitbash3d/kits</code>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardContent>
          <CardDescription>
            Set the path in the add-on preferences under the <span className="text-primary">Library</span> tab. You can
            point it at either the <code className="text-foreground">kitbash3d</code> folder or its{" "}
            <code className="text-foreground">kits</code> folder.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The add-on reads Cargo&apos;s <code className="text-foreground">cargo_v1.sqlite</code> manifest from the
            parent folder. If the database is missing or cannot be read, it falls back to scanning the folder tree.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browsing Assets</CardTitle>
          <CardDescription>Where to find each asset type?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Open the 3D Viewport sidebar with <span className="text-primary">N</span> and choose the{" "}
            <span className="text-primary">C-Bridge</span> tab. The panel has tabs for{" "}
            <span className="text-primary">Models</span>, <span className="text-primary">Materials</span> and{" "}
            <span className="text-primary">HDRIs</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            In the <span className="text-primary">Shader Editor</span>, the panel offers{" "}
            <span className="text-primary">Materials</span> and <span className="text-primary">Textures</span>. In the{" "}
            <span className="text-primary">World</span> shader editor it lists HDRIs.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Filter by kit with the dropdown, type in the search bar to filter by name, and use the page buttons or
            arrows to move through the results. Asset names are converted from Cargo folder codes, and the kit name is
            shown above each thumbnail.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Click the <span className="text-primary">info</span> icon for the detail popup with previews, resolution,
            poly count, height, material count and texture size. Click the{" "}
            <span className="text-primary">three-dots</span> icon for import options, opening the asset folder, and the
            add-on preferences. Use the refresh button in the panel header to rescan the library.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importing Models</CardTitle>
          <CardDescription>How to import models and assemblies?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Click <span className="text-primary">Import</span> on a model to add it as a new collection at the 3D
            cursor. Geometry uses Blender&apos;s USD importer, and the Cargo materials are rebuilt from their MaterialX
            graph.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            With <span className="text-primary">Import Colliders</span> enabled, collision meshes are imported hidden
            from the viewport and render. Disable it to remove colliders during import.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Import as Collection Instance</span> to keep the imported asset in a
            hidden source collection and place a collection instance at the 3D cursor. Re-importing a model that is
            already in the scene is blocked instead of creating a duplicate.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Copy Textures Locally</span> in the Material preferences to copy
            imported textures beside the .blend file and keep the project portable.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importing Materials</CardTitle>
          <CardDescription>How are Cargo materials rebuilt?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Cargo materials are parsed from the USD MaterialX standard-surface graph and rebuilt as Principled BSDF
            node trees. Base color, metalness, roughness, normal, height, emission, transmission, subsurface, coat and
            sheen are connected when the downloaded material provides them.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The add-on selects the resolution and format that were actually downloaded (
            <code className="text-foreground">png2k</code>, <code className="text-foreground">jpg1k</code>,{" "}
            <code className="text-foreground">exr2k</code>, ...) instead of assuming 4K.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Apply Material</span> is enabled by default and assigns the material to the
            selected mesh objects. <span className="text-primary">Mark as Asset</span> adds it to the Asset Browser.
            In the Shader Editor, a Cargo material can be added as a reusable shader node group instead.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Material preferences control whether already-imported materials are reused, whether a gamma node is added
            to the base color chain, whether texture nodes are hidden, and how height maps are used: Bump Only,
            Displacement Only, or Displacement and Bump.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Textures &amp; HDRIs</CardTitle>
          <CardDescription>How to use loose textures and lighting assets?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            In the Shader Editor, switch to the <span className="text-primary">Textures</span> tab to add a loose Cargo
            texture as an Image Texture node or import it as a material. Use{" "}
            <span className="text-primary">sRGB</span> for color maps and{" "}
            <span className="text-primary">Non-Color</span> for masks, roughness and other data maps.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            In the 3D Viewport, an HDRI can be set as the scene world. In the World shader editor, the same HDRI can be
            added as an Environment Texture node.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>What each settings tab controls.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Library</TableCell>
                <TableCell>
                  Cargo library path and the optional Pillow dependency. Install Pillow directly from the preferences
                  for faster thumbnail scaling on large libraries.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Model</TableCell>
                <TableCell>Import Colliders and Import as Collection Instance.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Material</TableCell>
                <TableCell>
                  Skip Existing Materials, Use Gamma Node, Hide Texture Nodes, displacement method and scale, and
                  Copy Textures Locally with a target folder.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Texture</TableCell>
                <TableCell>sRGB or Non-Color colorspace for standalone texture assets.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preview</TableCell>
                <TableCell>
                  Sort order (Newest, Oldest, Name), assets per page, thumbnail scale, popup scale, and showing asset
                  names under thumbnails.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notes &amp; Troubleshooting</CardTitle>
          <CardDescription>Common questions and limitations.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span className="text-primary">The panel says the library path is not set.</span> Set the downloaded kits
            folder in the Library preferences. Cargo usually stores it in{" "}
            <code className="text-foreground">AppData/Roaming/kitbash3d/kits</code> on Windows.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Assets are missing.</span> Only explicitly downloaded assets are listed. Use
            the Cargo desktop app to download them, then refresh the panel. If the SQLite database is unavailable, the
            add-on falls back to scanning the folder tree.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Previews are slow or missing.</span> Model views, material balls and HDRI
            composites are downloaded from Cargo&apos;s public CDN and cached. Downloads run on background threads. If
            the CDN is unreachable, cards fall back to the downloaded base color, material base color or raw HDRI.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Cargo Connector is not required.</span> Cargo Bridge is a standalone
            browser. The official Cargo Connector can stay installed if you also use Cargo&apos;s Send to Blender
            button.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Geometry uses Blender&apos;s USD importer. Materials are rebuilt from the MaterialX graph because Blender
            does not translate Cargo&apos;s native shader nodes. Repeated sub-components use unique mesh data in this
            version; there is no custom USD mesh instancer.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
