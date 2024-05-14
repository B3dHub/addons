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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import Coupon from "@/components/coupon";

export const metadata: Metadata = {
  title: "Blender to Unity - Blender Addon",
  description: "Blender to Unity - Blender Addon",
};

export default function BlendertoUnityPage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Blender-to-Unity is a Blender addon that exports objects,
            animations, colliders, and LODs to Unity Engine. It is designed to
            be simple and easy to use. You can export your models to Unity with
            just a few clicks. This addon is perfect for game developers,
            architects, and 3D artists who want to export their models to Unity
            Engine. Get Blender-to-Unity today and start exporting your models
            to Unity with ease!
          </CardDescription>
        </CardContent>
        <CardContent>
          <Coupon />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Blender-to-Unity?</CardTitle>
          <CardDescription>Blender-to-Unity vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>More features in the future based on requests.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Blender-to-Unity</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Object Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Collections Export
                </TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collider Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">LOD Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Animation Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rename Tool</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Export to Unity</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Export to Disk</TableCell>
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
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/collider.html"
              }
              target="_blank"
              className="hover:underline"
            >
              Collider
            </Link>
          </CardTitle>
          <CardDescription>Add auto and custom collider.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/blender-to-unity/colliders.png"
            alt=""
            width={256}
            height={256}
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/collider.html#box"
              }
              target="_blank"
              className="hover:underline"
            >
              Box
            </Link>
          </CardTitle>
          <CardDescription>
            Box collider will create based on the bounding box of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/box.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/box_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/box_custom.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/collider.html#capsule"
              }
              target="_blank"
              className="hover:underline"
            >
              Capsule
            </Link>
          </CardTitle>
          <CardDescription>
            Capsule collider will create based on the bounding box and the depth
            of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/capsule.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/capsule_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/capsule_custom.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/collider.html#sphere"
              }
              target="_blank"
              className="hover:underline"
            >
              Sphere
            </Link>
          </CardTitle>
          <CardDescription>
            Sphere collider will create based on the bounding box of the
            selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/sphere.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/sphere_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/sphere_custom.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/collider.html#cylinder"
              }
              target="_blank"
              className="hover:underline"
            >
              Cylinder
            </Link>
          </CardTitle>
          <CardDescription>
            Cylinder collider will create based on the bounding box and the
            depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/cylinder.gif"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/cylinder_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/collider.html#convex"
              }
              target="_blank"
              className="hover:underline"
            >
              Convex
            </Link>
          </CardTitle>
          <CardDescription>
            Convex collider will create based on the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/convex.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/convex_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/convex_custom.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg w-full"
                  src="./images/blender-to-unity/convex_vhacd.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/lod.html"}
              target="_blank"
              className="hover:underline"
            >
              LOD
            </Link>
          </CardTitle>
          <CardDescription>Create, Update, and Preset LODs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/blender-to-unity/lods.png"
            alt=""
            width={256}
            height={256}
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/lod.html#create"
              }
              target="_blank"
              className="hover:underline"
            >
              Create
            </Link>
          </CardTitle>
          <CardDescription>
            Create LODs for the selected objects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/blender-to-unity/lod_create.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/lod.html#update"
              }
              target="_blank"
              className="hover:underline"
            >
              Update
            </Link>
          </CardTitle>
          <CardDescription>
            Update LODs for the selected objects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/blender-to-unity/lod_update.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/lod.html#preset"
              }
              target="_blank"
              className="hover:underline"
            >
              Preset
            </Link>
          </CardTitle>
          <CardDescription>Preset LODs for future use.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/blender-to-unity/lod_preset.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/tool.html"}
              target="_blank"
              className="hover:underline"
            >
              Rename Tool
            </Link>
          </CardTitle>
          <CardDescription>
            Rename objects and its Colliders and LODs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/blender-to-unity/rename.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={
                "https://b3dhub.github.io/blender-to-unity-docs/export.html"
              }
              target="_blank"
              className="hover:underline"
            >
              Export
            </Link>
          </CardTitle>
          <CardDescription>
            Export objects and collections to Unity or Disk.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/blender-to-unity/export.gif"
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
            href="https://b3dhub.github.io/blender-to-unity-docs/"
            target="_blank"
          >
            <Button variant={"secondary"}>Documentation</Button>
          </Link>
          <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/965691425557721159"
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
