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
  title: "Quick Interface - Blender Addon",
  description: "Quick Interface - Blender Addon",
};

export default function QuickInterfacePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Interface is a user-friendly addon that greatly simplifies the
            management of workspace areas in Blender. It's an indispensable tool
            for all Blender users. With Quick Interface, you can effortlessly
            switch, split, duplicate, join, and swap areas using convenient
            hotkeys. This addon enhances your workflow, making it more efficient
            and saving you time and effort.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Quick Interface vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features will be added in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Interface</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Switch Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Split Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Duplicate Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Join Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Swap Area</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Quick Interface?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Hotkeys</TableHead>
                <TableHead>Operations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Shift + Space</TableCell>
                <TableCell>Switch Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Space
                </TableCell>
                <TableCell>Split Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alt + Space</TableCell>
                <TableCell>Duplicate Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Alt + Space
                </TableCell>
                <TableCell>Join Area</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Alt + Space
                </TableCell>
                <TableCell>Swap Area</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Switch Area</CardTitle>
          <CardDescription>
            Switch area using the hotkey <span>Shift + Space</span>. Select an
            area from the pie menu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-interface/area_switch.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Split Area</CardTitle>
          <CardDescription>
            Split area using the hotkey <span>Shift + Ctrl + Space</span>.
            Select an area from the pie menu. You can split the area vertically
            or horizontally with the mouse wheel.
          </CardDescription>
          <CardDescription>
            <span>Mouse Wheel Up</span> : Split Vertically
          </CardDescription>
          <CardDescription>
            <span>Mouse Wheel Down</span> : Split Horizontally
          </CardDescription>
          <CardDescription>
            <span>Ctrl</span> : Split Snap
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-interface/area_split.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Duplicate Area</CardTitle>
          <CardDescription>
            Duplicate area using the hotkey <span>Alt + Space</span>. Select an
            area from the pie menu. This will open a new window with the
            selected area.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-interface/area_duplicate.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Join Area</CardTitle>
          <CardDescription>
            Join area using the hotkey <span>Shift + Alt + Space</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-interface/area_join.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Swap Area</CardTitle>
          <CardDescription>
            Swap area using the hotkey <span>Shift + Ctrl + Alt + Space</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-interface/area_swap.gif"
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
            href="https://discord.com/channels/959138815602229389/1237576375179939871"
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
