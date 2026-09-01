import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fab Bridge Documentation - Blender Addon",
  description: "Fab Bridge Documentation - Blender Addon",
};

export default function FabBridgeDocsPage() {
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
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Fab Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Download the Fab assets through the{" "}
            <Link
              className="text-foreground underline"
              href={"https://store.epicgames.com/en-US/download"}
              target="_blank"
            >
              Epic Games Launcher
            </Link>
            .
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Once you download the Fab assets, they will be saved in the default path{" "}
            <code className="text-foreground">C:\ProgramData\Epic\EpicGamesLauncher\VaultCache\FabLibrary</code>
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Add the path in the add-on preferences under the <span className="text-primary">Library</span> tab. The
            folder must contain the <code className="text-foreground">listings_v1.db</code> database file, which the
            launcher creates when assets are downloaded.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            After adding the path, the assets will appear in the <span className="text-primary">Sidebar (N-Panel)</span>{" "}
            under the <span className="text-primary">Fab Bridge</span> tab.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>Now you can import the assets directly from the Blender interface.</CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Note: The add-on does not support online downloading. It only imports Quixel Megascans Fab assets that
            have already been downloaded to your local library through the Epic Games Launcher.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browsing Assets</CardTitle>
          <CardDescription>How to find and filter assets?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            In the 3D Viewport sidebar, the <span className="text-primary">Fab Bridge</span> panel has tabs for{" "}
            <span className="text-primary">Assets</span> (3D models), <span className="text-primary">Plants</span> and{" "}
            <span className="text-primary">Materials</span>. In Texture Paint mode a{" "}
            <span className="text-primary">Brushes</span> panel appears, and in the Shader Editor the panel offers{" "}
            <span className="text-primary">Materials</span> and <span className="text-primary">Decals</span> as node
            groups.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Filter by <span className="text-primary">Category</span> and{" "}
            <span className="text-primary">Subcategory</span> dropdowns, or type in the search bar to filter all
            assets by name. Results are shown as a paginated thumbnail grid; use the page buttons or arrows to
            navigate.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Click the <span className="text-primary">info</span> icon on a thumbnail to open the detail popup with
            larger previews, and the <span className="text-primary">three-dots</span> icon for the asset options
            menu: quality variant, LOD import, material options, open folder, view online and preferences.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importing Assets</CardTitle>
          <CardDescription>How to import 3D assets, plants and materials?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Click <span className="text-primary">Import</span> on an asset thumbnail. Models are imported in the
            format chosen in the preferences (<span className="text-primary">FBX</span>,{" "}
            <span className="text-primary">glTF</span> or <span className="text-primary">USD</span>) with the selected{" "}
            <span className="text-primary">Quality</span> variant (High, Mid or Low), and the PBR textures are linked
            automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Import LODs</span> in the options menu to import the LOD levels
            selected in the preferences, and <span className="text-primary">Create LOD Group</span> to bundle them into
            a camera-distance geometry node LOD group.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Materials can be imported as full materials with{" "}
            <span className="text-primary">Apply Material</span> (first slot of the selected objects) and{" "}
            <span className="text-primary">Mark as Asset</span> (for the Asset Browser), or as node groups directly in
            the Shader Editor.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            In Texture Paint mode, brushes are added to the active brush with the{" "}
            <span className="text-primary">Texture Mask</span> option.
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
            <span className="text-primary">Library</span> tab: the Fab library path and the optional Pillow
            dependency (improves thumbnail support; installable directly from the preferences).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Model</span> tab: import format (FBX, glTF, USD),{" "}
            <span className="text-primary">All LODs</span> or a custom selection of LOD levels.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Texture</span> tab: resolution (8K Raw, 4K High, 2K Mid, 1K Low), file
            format (JPG, EXR, PNG, TGA, TIF) and which texture maps to import per asset type (albedo, AO, bump,
            diffuse, displacement, gloss, normal, roughness, specular, metalness, transmission, opacity,
            translucency).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Material</span> tab: gamma node for base color and expanded texture
            nodes in the shader editor. <span className="text-primary">Preview</span> tab: assets per page, thumbnail
            scale, popup scale and showing asset names.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
