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
  title: "Camera Preview - Blender Addon",
  description: "Camera Preview - Blender Addon",
};

export default function CameraPreviewPage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The Camera Preview addon is a must-have tool that combines
            simplicity and power. It allows you to preview your camera view
            directly in the 3D viewport, eliminating the need to switch to
            camera view mode. This functionality is similar to the camera
            preview in Unreal Engine, providing a familiar and intuitive
            experience. This addon is a game-changer for any 3D artist as it
            promises to save time and streamline your workflow. Don't miss out
            on this essential tool that will transform the way you work.
          </CardDescription>
        </CardContent>
        {showCoupon && (
          <CardContent>
            <Coupon />
          </CardContent>
        )}
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
                <TableCell className="font-medium">
                  Multiple Camera Preview
                </TableCell>
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
              <TableRow>
                <TableCell className="font-medium">
                  Object Hide/Unhide
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Camera Preview</CardTitle>
          <CardDescription>Supports multiple camera previews.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/camera-preview/demo_full.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview Position</CardTitle>
          <CardDescription>
            Change the position of the camera preview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
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
          <CardTitle>Preview Offset</CardTitle>
          <CardDescription>
            Adjust the offset of the camera preview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
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
          <CardTitle>Preview Size</CardTitle>
          <CardDescription>
            Change the size of the camera preview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
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
          <CardTitle>Object Hide/Unhide</CardTitle>
          <CardDescription>
            Hide or unhide objects from the camera preview using the operator in
            the object context menu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/camera-preview/view_layer_hide.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        {/* <CardFooter>
        </CardFooter> */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <span>Rendered</span> mode in <span>Cycles</span> is not supported.
          </CardDescription>
          <CardDescription>
            Background images in the camera is not supported.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          {/* <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link> */}
          <Link
            href="https://discord.com/channels/959138815602229389/1001092033559142463"
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
