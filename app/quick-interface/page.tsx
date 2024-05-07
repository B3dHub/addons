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
  title: "Quick Interface - Blender Addon",
  description: "Quick Interface - Blender Addon",
};

export default function QuickInterfacePage() {
  return (
    <div className="mx-auto px-5 my-5 flex flex-col justify-center gap-5 w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Interface is a simple yet powerful addon that enables you to
            manage work areas with ease. It's a must-have for any Blender user.
            You can switch, duplicate, split, join, and swap areas with hotkeys.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Badge variant={"default"}>
            Launch Week Offer: 25% Off Until May 15
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Quick Interface vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              More features will be added in the future based on requests.
            </TableCaption>
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Decal</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Switch Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Duplicate Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Split Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Join Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Swap Areas</TableCell>
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
                <TableCell>Switch Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alt + Space</TableCell>
                <TableCell>Duplicate Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Space
                </TableCell>
                <TableCell>Split Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Alt + Space
                </TableCell>
                <TableCell>Join Areas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Alt + Space
                </TableCell>
                <TableCell>Swap Areas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Switch Areas</CardTitle>
          <CardDescription>
            Switch areas using the hotkey <span>Shift + Space</span>. Select an
            area from the pie menu.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
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
          <CardTitle>Duplicate Areas</CardTitle>
          <CardDescription>
            Duplicate areas using the hotkey <span>Alt + Space</span>. Select an
            area from the pie menu. This will open a new window with the
            selected area.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
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
          <CardTitle>Split Areas</CardTitle>
          <CardDescription>
            Split areas using the hotkey <span>Shift + Ctrl + Space</span>.
            Select an area from the pie menu. You can also split the area
            vertically or horizontally with the mouse wheel.
          </CardDescription>
          <CardDescription>
            <span>Mouse Wheel Up</span>: Split Vertically
          </CardDescription>
          <CardDescription>
            <span>Mouse Wheel Down</span>: Split Horizontally
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
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
          <CardTitle>Join Areas</CardTitle>
          <CardDescription>
            Join areas using the hotkey <span>Shift + Alt + Space</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
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
          <CardTitle>Swap Areas</CardTitle>
          <CardDescription>
            Swap areas using the hotkey <span>Shift + Ctrl + Alt + Space</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-interface/area_swap.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Support>
        {/* <CardFooter className="space-x-4">
          <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/1090214367049560135"
            target="_blank"
          >
            <Button variant={"secondary"}>Changelogs</Button>
          </Link>
        </CardFooter> */}
      </Support>
      <OtherAddons />
    </div>
  );
}
