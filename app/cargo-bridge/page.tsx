import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import FeatureLinks from "@/components/feature-links";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cargo Bridge - Blender Addon",
  description:
    "Browse and import your downloaded KitBash3D Cargo library directly in Blender. Filter by kit, search assets, view official Cargo previews and import models, materials, textures and HDRIs with rebuilt Principled BSDF materials.",
};

const features = [
  { label: "Grid View", href: "#grid-view" },
  { label: "Kit Filtering", href: "#grid-view" },
  { label: "Readable Names", href: "#grid-view" },
  { label: "Asset Search", href: "#asset-search" },
  { label: "Asset Details", href: "#asset-details" },
  { label: "Official Cargo Previews", href: "#asset-details" },
  { label: "Pagination", href: "#pagination" },
  { label: "Import Models", href: "#import-models" },
  { label: "Collider Handling", href: "#import-models" },
  { label: "Collection Instances", href: "#import-models" },
  { label: "Import Materials", href: "#import-materials" },
  { label: "Material Node Groups", href: "#import-materials" },
  { label: "Texture Variants", href: "#import-materials" },
  { label: "Import Textures", href: "#import-textures" },
  { label: "Import HDRIs", href: "#import-hdris" },
  { label: "Preferences", href: "#preferences" },
];

export default function CargoBridgePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-208">
      <Card id="introduction">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Cargo Bridge is a Blender add-on that imports your downloaded{" "}
            <Link
              className="text-foreground hover:underline"
              href={"https://kitbash3d.com/pages/cargo"}
              target="_blank"
            >
              KitBash3D Cargo
            </Link>{" "}
            library directly from the Blender interface. Assets are indexed from Cargo&apos;s own SQLite manifest,
            sorted by kit, and shown in a fast thumbnail browser. Models, materials, textures and HDRIs can be imported
            without leaving the 3D Viewport or Shader Editor.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Disclaimer: Assets must be <span>downloaded through the Cargo desktop app</span> first. This add-on is a
              standalone browser and does not require the official Cargo Connector.
            </CardDescription>
          </Badge>
        </CardContent>
        <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Note: The add-on does not download asset files from KitBash3D. It imports assets that already exist in
              your local Cargo library. Only preview images are fetched and cached from Cargo&apos;s public CDN.
            </CardDescription>
          </Badge>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <FeatureLinks features={features} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Cargo Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Download the assets through the{" "}
                  <Link
                    className="text-foreground underline"
                    href={"https://kitbash3d.com/pages/cargo"}
                    target="_blank"
                  >
                    Cargo desktop app
                  </Link>
                  .
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Cargo stores kits in{" "}
                  <code className="text-foreground">%APPDATA%\kitbash3d\kits</code> on Windows, with the equivalent
                  application data folder on macOS and Linux.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Add the path in the add-on preferences under the <span>Library</span> tab. Either the{" "}
                  <code className="text-foreground">kitbash3d</code> folder or its{" "}
                  <code className="text-foreground">kits</code> folder works.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Open the Sidebar (N-Panel) and switch to the <span>C-Bridge</span> tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Pick a kit, search, and press <span>Import</span>. Materials and textures are also available in the
                  Shader Editor, and HDRIs in the World shader editor.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card id="grid-view">
        <CardHeader>
          <CardTitle>Grid View</CardTitle>
          <CardDescription>Browse downloaded models, materials and HDRIs by kit.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/grid_view.gif"
            alt="Cargo Bridge grid view displaying downloaded Cargo assets by kit"
            width={600}
            height={325}
            className="rounded w-full"
            loading="eager"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Cargo folder codes are converted to readable names, with the kit name shown above each thumbnail. Use the
            kit dropdown to narrow the grid, adjust thumbnail scale and page size in the preferences, and refresh the
            library from the panel header.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="asset-search">
        <CardHeader>
          <CardTitle>Asset Search</CardTitle>
          <CardDescription>Search assets by name.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/asset_search.gif"
            alt="Searching for Cargo assets by name using the search bar"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            The search box filters the current asset type and resets pagination, so results stay focused while you
            browse a large library.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="asset-details">
        <CardHeader>
          <CardTitle>Asset Details</CardTitle>
          <CardDescription>View previews, resolution, poly count, height, material count and texture size.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/asset_details.gif"
            alt="Viewing Cargo asset details including previews and model statistics"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Open the info popup on a thumbnail for a preview gallery and asset details. Model views, material balls and
            HDRI composites are downloaded from Cargo&apos;s CDN and cached, so they only load once.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="pagination">
        <CardHeader>
          <CardTitle>Pagination</CardTitle>
          <CardDescription>Navigate through pages of assets.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/pagination.gif"
            alt="Navigating through multiple pages of Cargo assets"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Move through pages with the arrows or page buttons. The number of assets per page is configurable in the
            preferences.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="import-models">
        <CardHeader>
          <CardTitle>Import Models</CardTitle>
          <CardDescription>Import models and assemblies with their Cargo materials rebuilt.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/import_assets.gif"
            alt="Importing Cargo models and assemblies into Blender"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Geometry is imported with Blender&apos;s USD importer into a new collection at the 3D cursor. Cargo
            materials are rebuilt from their MaterialX graph, and colliders are imported hidden or removed depending on
            the options.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Enable <span>Import as Collection Instance</span> to keep the asset in a hidden source collection and place
            an instance at the 3D cursor. Re-importing a model already in the scene is blocked instead of creating a
            duplicate.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="import-materials">
        <CardHeader>
          <CardTitle>Import Materials</CardTitle>
          <CardDescription>Build native Principled BSDF materials from Cargo MaterialX files.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/import_materials.gif"
            alt="Importing Cargo materials into Blender"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Materials are parsed with <code className="text-foreground">pxr</code> and rebuilt as Principled BSDF node
            trees: base color, metalness, roughness, normal, height, emission, transmission, subsurface, coat and sheen.
            The resolution and format that were actually downloaded are selected automatically.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Use <span>Apply Material</span> to assign the material to the selected objects, or{" "}
            <span>Mark as Asset</span> for the Asset Browser. In the Shader Editor, a Cargo material can also be added
            as a reusable shader node group.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="import-textures">
        <CardHeader>
          <CardTitle>Import Textures</CardTitle>
          <CardDescription>Add loose Cargo textures as image nodes or materials.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/import_textures.gif"
            alt="Adding Cargo textures as image texture nodes in the Shader Editor"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            In the Shader Editor, switch to the <span>Textures</span> tab and add a texture as an Image Texture node,
            or import it as a material. Choose <span>sRGB</span> for color maps and <span>Non-Color</span> for masks,
            roughness and other data maps in the preferences.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="import-hdris">
        <CardHeader>
          <CardTitle>Import HDRIs</CardTitle>
          <CardDescription>Use Cargo HDRIs as the scene world or as environment nodes.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/cargo-bridge/import_hdris.gif"
            alt="Setting a Cargo HDRI as the scene world in Blender"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Select an HDRI in the 3D Viewport to set it as the scene world, or add it as an Environment Texture node in
            the World shader editor.
          </CardDescription>
        </CardContent>
      </Card>

      <Card id="preferences">
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Configure the library, import behavior and browser layout.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Library</TableCell>
                <TableCell>The Cargo library path and the optional Pillow dependency.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Model</TableCell>
                <TableCell>Import Colliders and Import as Collection Instance.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Material</TableCell>
                <TableCell>
                  Skip Existing Materials, Use Gamma Node, Hide Texture Nodes, displacement method and scale, and
                  copying textures beside the .blend file.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Texture</TableCell>
                <TableCell>sRGB or Non-Color colorspace for standalone texture assets.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preview</TableCell>
                <TableCell>Sort order, assets per page, thumbnail scale, popup scale and showing asset names.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card id="notes">
        <CardHeader>
          <CardTitle>Notes</CardTitle>
          <CardDescription>Good to know before importing.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardDescription>
            <span>Cargo Connector is not required.</span> This is a standalone browser. The official Cargo Connector
            can stay installed if you also use Cargo&apos;s &quot;Send to Blender&quot; button.
          </CardDescription>
          <CardDescription>
            Only explicitly downloaded assets are listed. Model parts and dependency materials stay with their parent
            kit instead of appearing as separate cards.
          </CardDescription>
          <CardDescription>
            Previews are cached in the platform user cache and downloaded in the background. If the CDN is unavailable
            or an asset has no preview, cards fall back to the base color, material color or raw HDRI.
          </CardDescription>
          <CardDescription>
            Repeated sub-components use unique mesh data in this version; there is no custom USD mesh instancer.
          </CardDescription>
          <CardDescription>
            Pillow is optional. Install it from the Library preferences for faster thumbnail scaling on large
            libraries.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Copyright Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardDescription>
            This add-on is an independent tool and is not affiliated with, authorized, sponsored, or otherwise approved
            by KitBash3D.
          </CardDescription>
          <CardDescription>
            All Cargo assets and content remain the property of KitBash3D and are subject to their terms of use and
            licensing agreements.
          </CardDescription>
          <CardDescription>
            KitBash3D and Cargo are trademarks or registered trademarks of KitBash3D in the USA and elsewhere.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.gg/F3FYWqxvGT"
            className={cn(buttonVariants({ variant: "outline" }))}
            target="_blank"
          >
            Changelogs
          </Link>
        </CardFooter>
      </Support>
      <OtherAddons />
      <Affiliate />
    </div>
  );
}
