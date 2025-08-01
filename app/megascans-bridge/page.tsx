import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
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
  description: "Megascans Bridge - Blender Addon",
};

export default function MegascansBridgePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Megascans Bridge is a Blender add-on that imports Quixel Megascans assets downloaded via{" "}
            <Link className="text-foreground hover:underline" href={"https://quixel.com/bridge"} target="_blank">
              Quixel Bridge
            </Link>{" "}
            directly from the Blender interface. The downloaded assets will be sorted by type, category and subcategory.
          </CardDescription>
        </CardContent>
        <CardContent>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Badge variant={"secondary"}>
              <CardDescription>
                Disclaimer: Users who have <span>claimed</span> or <span>purchased</span> Megascans assets through
                Quixel <span>Bridge</span> can use this add-on.
              </CardDescription>
            </Badge>
          </div>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Megascans Bridge vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Megascans Bridge</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
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
            </TableBody>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Megascans Bridge?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <Table>
              <TableRow>
                <TableCell className="font-medium">
                  Download{" "}
                  <Link className="hover:text-foreground underline" href={"https://quixel.com/bridge"} target="_blank">
                    Quixel Bridge
                  </Link>{" "}
                  and download the Megascans assets through it.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Once you download the Megascans assets, they will be saved in the default path{" "}
                  <pre>"/Documents/Megascans Library/Downloaded/"</pre>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Add the path in the add-on preferences under the <span>Library</span> tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  After adding the path, the assets will appear in the <span>Sidebar(n-panel)</span> under the{" "}
                  <span>M-Bridge</span> tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Now you can import the assets directly from the Blender interface.
                </TableCell>
              </TableRow>
            </Table>
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grid View</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/grid_view.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset Search</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/asset_search.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/asset_details.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pagination</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/pagination.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>You can import 3D assets with LODs and create LOD groups.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/import_assets.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>LOD Groups are based on Geometry Nodes.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/lod_group.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Plants</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>You can import 3D plants with LODs and create LOD groups.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/import_plants.gif"
            alt=""
            width={600}
            height={325}
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
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/import_surfaces.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/megascans-bridge/v2/import_node_group.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Copyright Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="space-y-2">
            <p>
              This add-on is an independent tool and is not affiliated with, authorized, sponsored, or otherwise
              approved by Epic Games, Inc. or Quixel.
            </p>
            <p>
              All Megascans assets and content remain the property of Epic Games, Inc. Quixel, and are subject to their
              terms of use and licensing agreements.
            </p>
            <p>
              © 2025, Epic Games, Inc. Quixel, Megascans, and Unreal Engine are trademarks or registered trademarks of
              Epic Games, Inc. in the USA and elsewhere.
            </p>
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1327353624644288604"
            className={cn(buttonVariants({ variant: "secondary" }))}
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
