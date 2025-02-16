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
  title: "Quick Replace - Blender Addon",
  description: "Quick Replace - Blender Addon",
};

export default function QuickReplacePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Replace is an exceptionally intuitive and powerful addon that
            enables you to seamlessly replace selected objects from the object
            list of an active category. It's an invaluable tool for blocking out
            layouts for game level design and more. This addon is a game-changer
            for any 3D artist or game developer, promising to make your object
            replacement process more efficient and streamlined.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Quick Replace vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Replace</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Categories List</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Objects List</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Quick Replace?</CardDescription>
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
                <TableCell className="font-medium">Shift + Scroll</TableCell>
                <TableCell>Loop from the top of the object list.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ctrl + Scroll</TableCell>
                <TableCell>
                  Loop from the active object in the object list.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Scroll
                </TableCell>
                <TableCell>
                  Switch the active category of the categories list.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">{"Alt + ["}</TableCell>
                <TableCell>
                  Rotate the selected objects -90 degrees along the Z-axis.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">{"Alt + ]"}</TableCell>
                <TableCell>
                  Rotate the selected objects +90 degrees along the Z-axis.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories List</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Create a new category by clicking the{" "}
            <span className="text-primary">+</span> button.
          </CardDescription>
          <CardDescription>
            Rename the active category by double clicking on it.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-replace/categories.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Remove the active category by clicking the{" "}
            <span className="text-primary">-</span> button.
          </CardDescription>
          <CardDescription>
            Remove all the categories by holding{" "}
            <span className="text-primary">Shift</span> and clicking the{" "}
            <span className="text-primary">x</span> button.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Objects List</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Add an object to the list from the dropdown.
          </CardDescription>
          <CardDescription>
            Load selected objects into the list by clicking the reload button.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-replace/objects.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Remove the active object by clicking the{" "}
            <span className="text-primary">X</span> button.
          </CardDescription>
          <CardDescription>
            Remove all objects by holding{" "}
            <span className="text-primary">Shift</span> and clicking the{" "}
            <span className="text-primary">X</span> button.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1078669616622096394"
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
