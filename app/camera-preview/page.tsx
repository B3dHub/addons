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
  title: "Camera Preview - Blender Addon",
  description: "Camera Preview - Blender Addon",
};

export default function CameraPreviewPage() {
  return (
    <div className="mx-auto px-5 my-5 flex flex-col justify-center gap-5 w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Camera Preview is a simple, yet powerful, addon that allows you to
            preview your camera view in the 3D viewport. You don't need to enter
            camera view mode to see the camera view.
          </CardDescription>
          <CardDescription>
            It works similarly to Unreal Engine's camera preview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/camera-preview/demo_full.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        {/* <CardContent>
          Coupon code: <Badge variant={"default"}>discount10</Badge> to get 10%
          off.
        </CardContent> */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Camera Preview vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Camera Preview</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Multiple Camera</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preview Position</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preview Offset</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preview Size</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Position</CardTitle>
          <CardDescription>Preview position</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/camera-preview/position.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Offset</CardTitle>
          <CardDescription>Preview offset</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/camera-preview/offset.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Size</CardTitle>
          <CardDescription>Preview size</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/camera-preview/size.gif"
            alt=""
            width={600}
            height={325}
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
            Only works with <span className="text-foreground">EEVEE</span>{" "}
            render engine.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/1001092033559142463"
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
