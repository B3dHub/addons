import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";

export const metadata: Metadata = {
  title: "Megascans Bridge - Blender Addon",
  description: "Megascans Bridge - Blender Addon",
};

export default function MegascansBridgePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Megascans Bridge is a Blender add-on that imports Quixel Megascans
            assets downloaded via{" "}
            <Link
              className="text-foreground hover:underline"
              href={"https://quixel.com/bridge"}
              target="_blank"
            >
              Quixel Bridge
            </Link>{" "}
            directly from the Blender interface. The downloaded assets will be
            sorted by type, category and subcategory.
          </CardDescription>
        </CardContent>
        {showCoupon && (
          <CardContent>
            <Coupon />
          </CardContent>
        )}
        <CardContent>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Badge variant={"secondary"}>
              <CardDescription>
                Disclaimer: Users who have <span>claimed</span> or <span>purchased</span> Megascans assets through Quixel <span>Bridge</span> can use this add-on.
              </CardDescription>
            </Badge>
          </div>
        </CardContent>
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
                <TableCell className="font-medium">Import 3D Assets</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import 3D Plants</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import LODs</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Create Lod Group</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Import Textures</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Apply Imported Materials
                </TableCell>
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
                  <Link
                    className="hover:text-foreground underline"
                    href={"https://quixel.com/bridge"}
                    target="_blank"
                  >
                    Quixel Bridge
                  </Link>{" "}
                  and download the Megascans assets through it.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Once you download the Megascans assets, they will be saved in
                  the default path{" "}
                  <pre>"/Documents/Megascans Library/Downloaded/"</pre>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Add the path in the add-on preferences under the{" "}
                  <span>Library</span> tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  After adding the path, the assets will appear in the{" "}
                  <span>Sidebar(n-panel)</span> under the <span>M-Bridge</span>{" "}
                  tab.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Now you can import the assets directly from the Blender
                  interface.
                </TableCell>
              </TableRow>
            </Table>
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import 3D Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You can import 3D assets with LODs and create LOD Groups.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/megascans-bridge/import_assets.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            LOD Groups are based on Geometry Nodes.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/megascans-bridge/lod_group.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import 3D Plants</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You can import 3D plants with LODs and create LOD Groups.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/megascans-bridge/import_plants.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Import Textures</CardTitle>
          <CardDescription>
            You can import textures as materials and node groups.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/megascans-bridge/material_nodegroup.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          {/* <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link> */}
          <Link
            href="https://discord.com/channels/959138815602229389/1327353624644288604"
            target="_blank"
          >
            <Button variant={"secondary"}>Changelogs</Button>
          </Link>
        </CardFooter>
      </Support>
      <OtherAddons />
      <Affiliate />
    </div>
  );
}
