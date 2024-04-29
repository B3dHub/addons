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

export const metadata: Metadata = {
  title: "Quick Decal - Blender Addon",
  description: "Quick Decal - Blender Addon",
};

export default function QuickDecalPage() {
  return (
    <div className="mx-auto px-5 my-5 flex flex-col justify-center gap-5 w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Quick Decal is an incredibly intuitive yet potent addon that enables
            you to effortlessly add decals to your models. It ingeniously uses a
            controller empty to incorporate decals without adding any extra
            geometry to your model. This is masterfully achieved by blending
            your existing material with the Quick Decal material. It supports
            multiple objects and materials and works seamlessly in both{" "}
            <span>EEVEE</span> and <span>Cycles</span> render engines. Quick
            Decal is an essential tool that enhances your texturing process,
            making it more efficient and streamlined.
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          Coupon code: <Badge variant={"default"}>discount10</Badge> to get 10%
          off.
        </CardContent> */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Quick Decal?</CardTitle>
          <CardDescription>Quick Decal vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Decal</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Image Decal</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Quixel Megascans Decal
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Multiple Objects and Materials
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">PBR Decal</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Decal Layer</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Layer Controller</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Layer Controller Type
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Layer Opacity</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Layer Wear</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Layer Maps</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto Snap</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto Parent</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto Resize</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Clean UI/UX</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Quick Baker Compatible
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Image Decal</CardTitle>
          <CardDescription>How to use image decals?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You need to add the custom decal library path in the preferences,
            under the Libraries section. Once you've added the path, the addon
            will display the decals in the Decals panel under the{" "}
            <span className="text-primary">Custom</span> section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/custom_decals.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            If you don't have any images in the specified path, you can load the
            decals. Once the decals are loaded, they will be saved in the custom
            decal library path for future use.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/quick_decal_custom_load_add.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quixel Megascans Decal</CardTitle>
          <CardDescription>How to use Quixel Megascans decals?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Follow the instructions to add the downloaded Megascans library path
            in the preferences, under the Libraries section. Once you've added
            the path, the addon will attempt to read the{" "}
            <span className="text-primary">assetsData.json</span> file (ensure
            it exists). Then, you can view the Megascans decals, along with
            their categories and subcategories, in the Decals panel under the{" "}
            <span className="text-primary">Megascans</span> section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Download decals from{" "}
            <Link
              href={"https://quixel.com/bridge"}
              target="_blank"
              className="underline text-primary"
            >
              Quixel Bridge
            </Link>
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/megascans_decals.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/megascans_decals_2.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Objects and Materials</CardTitle>
          <CardDescription>
            The addon supports multiple objects and materials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/multiple_obj_mat_decal.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            You can use the hotkeys{" "}
            <span className="text-foreground">Shift</span> and{" "}
            <span className="text-foreground">Ctrl</span> for quick access.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/hotkeys.png"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decal Layer</CardTitle>
          <CardDescription>
            Layers are the decal layers of an object. They can be arranged in
            ascending or descending order, and can also be removed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/decal_layers.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Layer Wear</CardTitle>
          <CardDescription>
            Quickly add wear and tear to the decal layer.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/decal_wear.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Baker Compatible</CardTitle>
          <CardDescription>
            This addon is compatible with our other addon,{" "}
            <Link
              href={"https://blendermarket.com/products/quick-baker"}
              target="_blank"
              className="underline text-primary"
            >
              Quick Baker
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/quick_decal_baker.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Caution</CardTitle>
          <CardDescription>
            Do not edit or remove the <span>QDecal Master</span> node group and
            its child nodes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-decal/master_node_group.png"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://blendermarket.com/products/quick-decal/docs"
            target="_blank"
          >
            <Button variant={"secondary"}>Documentation</Button>
          </Link>
          <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/1223542106539167754"
            target="_blank"
          >
            <Button variant={"secondary"}>Changelogs</Button>
          </Link>
        </CardFooter>
      </Support>

      <OtherAddons />
    </div>
  );
}
