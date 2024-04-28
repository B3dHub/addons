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

export const metadata: Metadata = {
  title: "Blender to Unreal - Blender Addon",
  description: "Blender to Unreal - Blender Addon",
};

export default function BlendertoUnrealPage() {
  return (
    <div className="mx-auto px-5 my-5 flex flex-col justify-center gap-5 w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Blender-to-Unreal is a Blender addon that exports objects,
            animations, collisions, sockets, and LODs to Unreal Engine. It is
            designed to be simple and easy to use. You can export your models to
            Unreal Engine with just a few clicks. This addon is perfect for game
            developers, architects, and 3D artists who want to export their
            models to Unreal Engine. Get Blender-to-Unreal today and start
            exporting your models to Unreal Engine with ease!
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          Coupon code: <Badge variant={"default"}>discount10</Badge> to get 10%
          off.
        </CardContent> */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Blender-to-Unreal?</CardTitle>
          <CardDescription>Blender-to-Unreal vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>More features in the future based on requests.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Blender-to-Unreal</TableHead>
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
                <TableCell className="font-medium">Collection Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collision Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Socket Export</TableCell>
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
                <TableCell className="font-medium">Edge Decal Tool</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vehicle Rigging</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Export to Unreal</TableCell>
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
                "https://b3dhub.github.io/blender-to-unreal-docs/collision.html"
              }
              target="_blank"
              className="hover:underline"
            >
              Collision
            </Link>
          </CardTitle>
          <CardDescription>Add auto and custom collision.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/blender-to-unreal/collisions.png"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/collision.html#box"
              }
              target="_blank"
              className="hover:underline"
            >
              Box
            </Link>
          </CardTitle>
          <CardDescription>
            Box collision will create based on the bounding box of the
            selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/box.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/box_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/box_custom.webp"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/collision.html#capsule"
              }
              target="_blank"
              className="hover:underline"
            >
              Capsule
            </Link>
          </CardTitle>
          <CardDescription>
            Capsule collision will create based on the bounding box and the
            depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/capsule.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/capsule_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/capsule_custom.webp"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/collision.html#sphere"
              }
              target="_blank"
              className="hover:underline"
            >
              Sphere
            </Link>
          </CardTitle>
          <CardDescription>
            Sphere collision will create based on the bounding box of the
            selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/sphere.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/sphere_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/sphere_custom.webp"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/collision.html#cylinder"
              }
              target="_blank"
              className="hover:underline"
            >
              Cylinder
            </Link>
          </CardTitle>
          <CardDescription>
            Cylinder collision will create based on the bounding box and the
            depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/cylinder.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/cylinder_editmode.webp"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/collision.html#convex"
              }
              target="_blank"
              className="hover:underline"
            >
              Convex
            </Link>
          </CardTitle>
          <CardDescription>
            Convex collision will create based on the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/convex.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/convex_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/convex_custom.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/convex_vhacd.webp"
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
              href={
                "https://b3dhub.github.io/blender-to-unreal-docs/socket.html"
              }
              target="_blank"
              className="hover:underline"
            >
              Socket
            </Link>
          </CardTitle>
          <CardDescription>Add socket to the selected objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/blender-to-unreal/socket.png"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/socket.html#box"
              }
              target="_blank"
              className="hover:underline"
            >
              Mesh
            </Link>
          </CardTitle>
          <CardDescription>
            Mesh socket will create in the 3d cursor location.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/socket.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/socket_editmode.webp"
                  alt=""
                  width={600}
                  height={325}
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  className="rounded-lg"
                  src="./images/blender-to-unreal/socket_custom.webp"
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
              href={"https://b3dhub.github.io/blender-to-unreal-docs/lod.html"}
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
            src="./images/blender-to-unreal/lods.png"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/lod.html#create"
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
            className="rounded-lg"
            src="./images/blender-to-unreal/lod_create.gif"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/lod.html#update"
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
            className="rounded-lg"
            src="./images/blender-to-unreal/lod_update.gif"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/lod.html#preset"
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
            className="rounded-lg"
            src="./images/blender-to-unreal/lod_preset.gif"
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
              href={"https://b3dhub.github.io/blender-to-unreal-docs/tool.html"}
              target="_blank"
              className="hover:underline"
            >
              Rename Tool
            </Link>
          </CardTitle>
          <CardDescription>
            Rename objects and its Collisions and LODs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/blender-to-unreal/rename.gif"
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
                "https://b3dhub.github.io/blender-to-unreal-docs/export.html"
              }
              target="_blank"
              className="hover:underline"
            >
              Export
            </Link>
          </CardTitle>
          <CardDescription>
            Export objects and collections to Unreal or Disk.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/blender-to-unreal/export.gif"
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
            href="https://b3dhub.github.io/blender-to-unreal-docs/"
            target="_blank"
          >
            <Button variant={"secondary"}>Documentation</Button>
          </Link>
          <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/959152281058697216"
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
