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
  title: "Megascans Bridge - Blender Addon",
  description:
    "Import Quixel Megascans assets downloaded via Quixel Bridge directly into Blender. Browse with thumbnails, search, and filters, import 3D assets, plants, surfaces, decals, atlases, and brushes with automatic PBR materials and LOD groups. The add-on does not support online downloading and works only with assets already downloaded to your local library.",
};

export default function MegascansBridgePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Megascans Bridge is a Blender add-on that imports Quixel Megascans assets downloaded via{" "}
            <Link
              className="text-foreground hover:underline"
              href={"https://d2shgxa8i058x8.cloudfront.net/bridge/win/Bridge.exe"}
              target="_blank"
            >
              Quixel Bridge
            </Link>{" "}
            directly from the Blender interface. The downloaded assets will be sorted by type, category and subcategory.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Disclaimer: Users who have <span>claimed</span> or <span>purchased</span> Megascans assets through{" "}
              <span>Quixel Bridge</span> and downloaded them locally can use this add-on.
            </CardDescription>
          </Badge>
        </CardContent>
        <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Note: The add-on does not download assets from the internet. It only imports Quixel Megascans assets that
              have already been downloaded to your local library.
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
                <TableCell className="font-medium">Import Surfaces</TableCell>
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
          <CardDescription>How to use Megascans Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Download{" "}
                  <Link
                    className="text-foreground underline"
                    href={"https://d2shgxa8i058x8.cloudfront.net/bridge/win/Bridge.exe"}
                    target="_blank"
                  >
                    Quixel Bridge
                  </Link>{" "}
                  and download the Megascans assets through it.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Once you download the Megascans assets, they will be saved in the default path{" "}
                  <pre className="text-foreground">"/Documents/Megascans Library/Downloaded/"</pre>
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
                  <span>M-Bridge</span> tab.
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
            src="/addons/images/megascans-bridge/grid_view.gif"
            alt="Grid view displaying Megascans assets in a thumbnail grid layout"
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
            src="/addons/images/megascans-bridge/asset_search.gif"
            alt="Searching for Megascans assets by name using the search bar"
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
            src="/addons/images/megascans-bridge/asset_details.gif"
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
            src="/addons/images/megascans-bridge/pagination.gif"
            alt="Navigating through multiple pages of Megascans assets"
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
            src="/addons/images/megascans-bridge/import_assets.gif"
            alt="Importing 3D Megascans assets with LODs into Blender"
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
            src="/addons/images/megascans-bridge/lod_group.gif"
            alt="LOD groups created using Geometry Nodes showing different detail levels"
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
            src="/addons/images/megascans-bridge/import_plants.gif"
            alt="Importing 3D plant assets with LODs from Megascans library"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Surfaces</CardTitle>
          <CardDescription>You can import surface textures as materials and node groups.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/megascans-bridge/import_surfaces.gif"
            alt="Importing Megascans surface textures as materials"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/megascans-bridge/import_node_group.gif"
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
            by Epic Games, Inc. or Quixel.
          </CardDescription>
          <CardDescription>
            All Megascans assets and content remain the property of Epic Games, Inc. Quixel, and are subject to their
            terms of use and licensing agreements.
          </CardDescription>
          <CardDescription>
            © 2025, Epic Games, Inc. Quixel, Megascans, and Unreal Engine are trademarks or registered trademarks of
            Epic Games, Inc. in the USA and elsewhere.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.gg/dFYRwMty4k"
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
