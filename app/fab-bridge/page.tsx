import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fab Bridge - Blender Addon",
  description:
    "Import Fab.com assets downloaded through the Epic Games Launcher directly into Blender. Browse, preview, and import 3D assets, materials, plants, decals, and brushes from your downloaded Fab library. The add-on does not support online downloading.",
};

export default function FabBridgePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Fab Bridge is a Blender add-on that imports Quixel Megascans Fab assets downloaded through the{" "}
            <Link
              className="text-foreground hover:underline"
              href={"https://www.fab.com/sellers/Quixel%20Megascans"}
              target="_blank"
            >
              Epic Games Launcher
            </Link>{" "}
            directly from the Blender interface. The downloaded assets will be sorted by type, category and subcategory.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Disclaimer: Users who have <span>claimed</span> or <span>purchased</span> Quixel Megascans Fab assets
              through the <span>Epic Games Launcher</span> and downloaded them locally can use this add-on.
            </CardDescription>
          </Badge>
        </CardContent>
        <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Note: The add-on does not download assets from the internet. It only imports Quixel Megascans Fab assets
              that have already been downloaded to your local library.
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
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Grid View</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Asset Search</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Asset Details</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pagination</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Assets</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Plants</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Materials</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Decals</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import LODs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Create Lod Group</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Apply Imported Materials</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Other Asset Types from Shader Editor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Brushes from Texture Paint Mode</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Fab Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Download the Fab assets through the{" "}
                  <Link
                    className="text-foreground underline"
                    href={"https://store.epicgames.com/en-US/download"}
                    target="_blank"
                  >
                    Epic Games Launcher
                  </Link>
                  .
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Once you download the Fab assets, they will be saved in the default path{" "}
                  <pre className="text-foreground">"C:\ProgramData\Epic\EpicGamesLauncher\VaultCache\FabLibrary"</pre>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Add the path in the add-on preferences under the <span>Library</span> tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  After adding the path, the assets will appear in the <span>Sidebar(n-panel)</span> under the{" "}
                  <span>Fab Bridge</span> tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Now you can import the assets directly from the Blender interface.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grid View</CardTitle>
          <CardDescription>View assets in a grid view.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/grid_view.gif"
            alt="Grid view displaying Fab assets in a thumbnail grid layout"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset Search</CardTitle>
          <CardDescription>Search assets by name.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/asset_search.gif"
            alt="Searching for Fab assets by name using the search bar"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset Details</CardTitle>
          <CardDescription>View asset details like name, polycount, resolution, etc.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/asset_details.gif"
            alt="Viewing detailed asset information including name, polycount, and resolution"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pagination</CardTitle>
          <CardDescription>Navigate through pages of assets.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/pagination.gif"
            alt="Navigating through multiple pages of Fab assets"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Assets</CardTitle>
          <CardDescription>You can import 3D assets with LODs and create LOD groups.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/import_assets.gif"
            alt="Importing 3D Fab assets with LODs into Blender"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Plants</CardTitle>
          <CardDescription>You can import 3D plants with LODs and create LOD groups.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/import_plants.gif"
            alt="Importing 3D plant assets with LODs from the Fab library"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>LOD Groups are based on Geometry Nodes.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/import_assets_lods.gif"
            alt="Importing Fab assets with LODs and creating LOD groups"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Materials</CardTitle>
          <CardDescription>You can import textures as materials and node groups.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/import_materials.gif"
            alt="Importing Fab materials into Blender"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/fab-bridge/import_node_group.gif"
            alt="Importing surface textures as shader node groups in Blender"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Copyright Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <CardDescription>
            This add-on is an independent tool and is not affiliated with, authorized, sponsored, or otherwise approved
            by Epic Games, Inc. or Fab.
          </CardDescription>
          <CardDescription>
            All Fab assets and content remain the property of Epic Games, Inc. and are subject to their terms of use and
            licensing agreements.
          </CardDescription>
          <CardDescription>
            © 2025, Epic Games, Inc. Fab, Unreal Engine, and Fortnite are trademarks or registered trademarks of Epic
            Games, Inc. in the USA and elsewhere.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1543765958475255869"
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
