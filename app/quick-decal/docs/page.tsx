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

export default function QuickDecalDocPage() {
  return (
    <div className="mx-auto px-5 my-5 flex flex-col justify-center gap-5 w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Image Decal</CardTitle>
          <CardDescription>How to use image decals?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You need to add the custom decal library path in the preferences,
            under the Libraries section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="../images/quick-decal/custom_library.png"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Once you've added the path, the addon will display the decals in the
            Decals panel under the <span className="text-primary">Custom</span>{" "}
            section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="../images/quick-decal/custom_decals.png"
            alt=""
            width={256}
            height={256}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            If you don't have any images in the specified path, you can load the
            decals.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="../images/quick-decal/load_custom_decals.png"
            alt=""
            width={256}
            height={256}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Once the decals are loaded, they will be saved in the custom decal
            library path for future use.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="../images/quick-decal/quick_decal_custom_load_add.gif"
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
            in the preferences, under the Libraries section.
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
            src="../images/quick-decal/preferenes.png"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Once you've added the path, the addon will attempt to read the{" "}
            <span className="text-primary">assetsData.json</span> file (ensure
            it exists). Then, you can view the Megascans decals, along with
            their categories and subcategories, in the Decals panel under the{" "}
            <span className="text-primary">Megascans</span> section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="../images/quick-decal/megascans_decals.png"
            alt=""
            width={256}
            height={256}
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
            src="../images/quick-decal/multiple_obj_mat_decal.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            You can use the hotkeys <span>Shift</span> and <span>Ctrl</span> for
            quick access.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="../images/quick-decal/hotkeys.png"
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
            src="../images/quick-decal/decal_layers.gif"
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
            src="../images/quick-decal/decal_wear.gif"
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
            src="../images/quick-decal/quick_decal_baker.gif"
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
            src="../images/quick-decal/master_node_group.png"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>
    </div>
  );
}
