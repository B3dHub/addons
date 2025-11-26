import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
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
  title: "Camera Preview - Blender Addon",
  description: "Camera Preview - Blender Addon",
};

export default function CameraPreviewPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The Camera Preview addon is a must-have tool that combines simplicity and power. It allows you to preview
            your camera view directly in the 3D viewport, eliminating the need to switch to camera view mode. This
            functionality is similar to the camera preview in Unreal Engine, providing a familiar and intuitive
            experience. This addon is a game-changer for any 3D artist as it promises to save time and streamline your
            workflow. Don't miss out on this essential tool that will transform the way you work.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
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
                <TableCell className="font-medium">Multiple Camera Preview</TableCell>
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
                <TableCell className="font-medium">Object Hide/Unhide</TableCell>
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
            src="/addons/images/camera-preview/demo_full.gif"
            alt="Multiple camera preview windows displayed in viewport"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview Position</CardTitle>
          <CardDescription>Change the position of the camera preview.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/camera-preview/position.gif"
            alt="Adjusting camera preview position in viewport"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview Offset</CardTitle>
          <CardDescription>Adjust the offset of the camera preview.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/camera-preview/offset.gif"
            alt="Adjusting camera preview offset from edge"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview Size</CardTitle>
          <CardDescription>Change the size of the camera preview.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/camera-preview/size.gif"
            alt="Resizing camera preview window"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Object Hide/Unhide</CardTitle>
          <CardDescription>
            Hide or unhide objects from the camera preview using the operator in the object context menu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/camera-preview/view_layer_hide.gif"
            alt="Hiding and unhiding objects from camera preview"
            width={600}
            height={325}
            className="rounded w-full"
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
          <CardDescription>Background images in the camera is not supported.</CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1001092033559142463"
            className={cn(buttonVariants({ variant: "outline" }))}
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
