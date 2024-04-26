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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Decal - Blender Addon",
  description: "Quick Decal - Blender Addon",
};

export default function QuickDecalPage() {
  return (
    <div className="mx-auto my-5 flex flex-col gap-5 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Quick Baker is a PBR texture-baking addon that uses the native
            Blender baking operator for baking PBR texture, and mask maps. The
            addon extends the Blender baking process for multiple objects with
            multiple maps. It can bake objects and high to low-poly objects with
            multiple maps. It makes high to low-poly baking very simple and easy
            with a click cage setup.
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          Coupon code: <Badge variant={"default"}>discount10</Badge> to get 10%
          off.
        </CardContent> */}
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Why to choose Quick Baker?</CardTitle>
          <CardDescription>Quick Baker vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Baker</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Object Bake</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  High-to-Low Poly Bake
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Single Texture Set
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Multiple Texture Set
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto Cage</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto UDIM Bake</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Channel Packing</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Vertex Color for Material ID
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Existing Texture Bake
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Map Preview</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Material Bake</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Node Bake</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">UDIM Node Bake</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Post Bake Options</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">50 Unique Maps</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Map Presets</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bake Presets</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Clean UI/UX</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Object Bake</CardTitle>
          <CardDescription>Bake single or multiple objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/object_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>High-to-Low Poly Bake</CardTitle>
          <CardDescription>
            Bake high-to-low or low-to-low objects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/high_to_low_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Single Texture Set</CardTitle>
          <CardDescription>
            Bake multiple objects and materials into single texture set.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/single_texture_set.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Multiple Texture Set</CardTitle>
          <CardDescription>
            Bake multiple objects and materials into separate texture set.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/multiple_texture_set.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Auto Cage</CardTitle>
          <CardDescription>
            Automatically create/adjust cage objects for high-to-low bake.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/auto_cage.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Auto UDIM Bake</CardTitle>
          <CardDescription>
            Automatically bake UDIM maps based on UV layout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/auto_udim_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Channel Packing</CardTitle>
          <CardDescription>
            Pack multiple maps into one image (ideal for game engines).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/channel_packing.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Vertex Color for Material ID</CardTitle>
          <CardDescription>
            Create vertex color for material id map.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/vertex_color_material_id.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Existing Texture Bake</CardTitle>
          <CardDescription>Bake on existing texture map.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/existing_texture_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Map Preview</CardTitle>
          <CardDescription>
            Preview maps before baking (e.g. AO, Curvature, etc).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/map_preview.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader>
          <CardTitle>Material Bake</CardTitle>
          <CardDescription>Bake material onto plane.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/node_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card> */}
      <Card>
        <CardHeader>
          <CardTitle>Node Bake</CardTitle>
          <CardDescription>Bake shader nodes into image.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/node_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>UDIM Node Bake</CardTitle>
          <CardDescription>
            Bake shader nodes into image for UDIM object.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/udim_node_bake.gif"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      {/* <Card>
        <CardHeader>
          <CardTitle>Post Bake</CardTitle>
          <CardDescription>Post bake options</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/maps.png"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card> */}
      <Card>
        <CardHeader>
          <CardTitle>50 Unique Maps</CardTitle>
          <CardDescription>Bake 50 unique maps</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-baker/maps.png"
            alt=""
            width={1024}
            height={1024}
            unoptimized
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Only works with{" "}
            <span className="text-foreground">Principled BSDF, Mix Shader</span>
            , and <span className="text-foreground">Add Shader</span> nodes.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>
            If you encounter the{" "}
            <span className="text-foreground">'Out of Memory'</span> error you
            should lower the processes count to 1-2 in the Global Bake panel.
            The higher process count is useful when baking low-resolution maps
            (e.g. 1K).
          </CardDescription>
        </CardFooter>
      </Card>
      <Support>
        <CardFooter className="space-x-4">
          <Link href="https://b3dhub.github.io/quick-baker-docs/">
            <Button variant={"secondary"}>Documentation</Button>
          </Link>
          <Link href="https://discord.gg/sdnHHZpWbT">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link href="https://discord.com/channels/959138815602229389/1013054795562614794">
            <Button variant={"secondary"}>Changelogs</Button>
          </Link>
        </CardFooter>
      </Support>
      <OtherAddons />
    </div>
  );
}
