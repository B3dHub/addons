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
import Coupon from "@/components/coupon";

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
            Camera Preview is an indispensable addon, offering simplicity and
            power in one package. It enables you to preview your camera view
            directly in the 3D viewport, eliminating the need to switch to
            camera view mode. Its functionality mirrors that of the Unreal
            Engine's camera preview, providing a familiar and intuitive
            experience. This addon is a game-changer for any 3D artist,
            promising to save time and turbocharge your workflow. Don't miss out
            on this essential tool that will revolutionize the way you work.
          </CardDescription>
        </CardContent>
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
        <CardContent>
          <Coupon />
        </CardContent>
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
          <CardTitle>Offset</CardTitle>
          <CardDescription>Preview offset</CardDescription>
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
          <CardTitle>Size</CardTitle>
          <CardDescription>Preview size</CardDescription>
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
          <CardTitle>Limitations</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Only works with <span>EEVEE</span> render engine.
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
