import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Megascans Bridge Documentation - Blender Addon",
  description: "Megascans Bridge Documentation - Blender Addon",
};

export default function MegascansBridgeDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install Megascans Bridge?</CardDescription>
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
          <CardDescription>How to use Megascans Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Download <span className="text-primary">Quixel Bridge</span> and download the Megascans assets through
            it.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Once you download the Megascans assets, they will be saved in the default path{" "}
            <code className="text-foreground">/Documents/Megascans Library/Downloaded/</code>
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Add the path in the add-on preferences under the <span className="text-primary">Library</span> tab. The
            folder must contain the <code className="text-foreground">assetsData.json</code> file, which Bridge
            creates when assets are downloaded.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            After adding the path, the assets will appear in the <span className="text-primary">Sidebar (N-Panel)</span>{" "}
            under the <span className="text-primary">M-Bridge</span> tab.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>Now you can import the assets directly from the Blender interface.</CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Note: The add-on does not support online downloading. It only imports Quixel Megascans assets that have
            already been downloaded to your local library through Quixel Bridge.
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
            In the 3D Viewport sidebar (Object Mode), the <span className="text-primary">Megascans Bridge</span>{" "}
            panel has tabs for <span className="text-primary">Assets</span> (3D models),{" "}
            <span className="text-primary">Plants</span> and <span className="text-primary">Surfaces</span>{" "}
            (materials). In Texture Paint mode a <span className="text-primary">Brushes</span> panel appears.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            In the Shader Editor, the panel offers <span className="text-primary">Surfaces</span>,{" "}
            <span className="text-primary">Decals</span>, <span className="text-primary">Atlases</span>,{" "}
            <span className="text-primary">Imperfections</span> and <span className="text-primary">Displacements</span>{" "}
            as node groups.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Filter by <span className="text-primary">Category</span> and{" "}
            <span className="text-primary">Subcategory</span> dropdowns, or type in the search bar to filter assets
            by name. Results are shown as a paginated thumbnail grid; use the page buttons or arrows to navigate.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Click the <span className="text-primary">info</span> icon on a thumbnail for the asset details, and the{" "}
            <span className="text-primary">three-dots</span> icon for the options menu: LOD import, material
            options, open folder, view online and preferences.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Importing Assets &amp; Plants</CardTitle>
          <CardDescription>How to import 3D assets and plants?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Click <span className="text-primary">Import</span> on an asset thumbnail. The model is imported in the
            format chosen in the preferences (<span className="text-primary">Auto</span>,{" "}
            <span className="text-primary">FBX</span> or <span className="text-primary">ABC</span>), placed at the 3D
            cursor, organized into its own collection, and the PBR material is built and applied automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span className="text-primary">Import LODs</span> in the options menu to import the LOD levels
            selected in the preferences, and <span className="text-primary">Create LOD Group</span> to bundle them
            into a camera-distance geometry node LOD group.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Plants import all LOD0 variants (each variant gets its own sub-collection) with translucent shaders for
            leaves. If an asset already exists in the file, the add-on warns you to purge unused data first.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Materials &amp; Node Groups</CardTitle>
          <CardDescription>How to import surfaces, decals and other shader assets?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            In the 3D Viewport, <span className="text-primary">Surfaces</span> import as full materials. The options{" "}
            <span className="text-primary">Apply Material</span> (first slot of the selected objects) and{" "}
            <span className="text-primary">Mark as Asset</span> (for the Asset Browser) control how they are added.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            In the Shader Editor, <span className="text-primary">Surfaces</span>,{" "}
            <span className="text-primary">Decals</span>, <span className="text-primary">Atlases</span>,{" "}
            <span className="text-primary">Imperfections</span> and <span className="text-primary">Displacements</span>{" "}
            import as node groups with exposed texture outputs (Roughness, Alpha, Normal, Displacement, etc.). The
            import button is disabled if the group already exists in the current tree.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Use <span className="text-primary">Edit Material</span> in the options menu to tweak an imported
            material in a new window. In Texture Paint mode, brushes are added as{" "}
            <span className="text-primary">Texture Mask</span> on the active brush.
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
            <span className="text-primary">Library</span> tab: the Megascans library path and the optional Pillow
            dependency (improves thumbnail support; installable directly from the preferences).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Model</span> tab: import format (Auto, FBX, ABC),{" "}
            <span className="text-primary">All LODs</span> or a custom selection of LOD levels.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Texture</span> tab: resolution (1K-8K), file format (JPG, EXR, PNG, TGA,
            TIF) and which texture maps to import per asset type (albedo, AO, bump, diffuse, displacement, gloss,
            metalness, normal, opacity, roughness, specular, transmission, translucency).
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            <span className="text-primary">Material</span> tab: gamma node for base color and expanded texture
            nodes in the shader editor. <span className="text-primary">Preview</span> tab: assets per page,
            thumbnail scale, popup scale and showing asset names.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
