import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  title: "Quick Replace - Blender Addon",
  description: "Quick Replace - Blender Addon",
};

export default function QuickReplacePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Replace is an exceptionally intuitive and powerful addon that enables you to seamlessly replace
            selected objects from the object list of an active category. It's an invaluable tool for blocking out
            layouts for game level design and more. This addon is a game-changer for any 3D artist or game developer,
            promising to make your object replacement process more efficient and streamlined.
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
                <TableCell className="font-medium">
                  <code className="mr-1">SHIFT</code>
                  <code className="mr-1">SCROLL</code>
                </TableCell>
                <TableCell>Loop from the top of the object list.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code className="mr-1">CTRL</code>
                  <code className="mr-1">SCROLL</code>
                </TableCell>
                <TableCell>Loop from the active object in the object list.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code className="mr-1">SHIFT</code>
                  <code className="mr-1">CTRL</code>
                  <code className="mr-1">SCROLL</code>
                </TableCell>
                <TableCell>Switch the active category of the categories list.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code className="mr-1">ALT</code>
                  <code className="mr-1">{"["}</code>
                </TableCell>
                <TableCell>Rotate the selected objects -90 degrees along the Z-axis.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code className="mr-1">ALT</code>
                  <code className="mr-1">{"]"}</code>
                </TableCell>
                <TableCell>Rotate the selected objects +90 degrees along the Z-axis.</TableCell>
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
            Create a new category by clicking the <code className="mr-1">+</code> button.
          </CardDescription>
          <CardDescription>Rename the active category by double clicking on it.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-replace/categories.gif"
            alt="Creating, renaming, and managing categories for object organization"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Remove the active category by clicking the <code className="mr-1">-</code> button.
          </CardDescription>
          <CardDescription>
            Remove all the categories by holding <code className="mr-1">SHIFT</code> and clicking the{" "}
            <code className="mr-1">X</code> button.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Objects List</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Add an object to the list from the dropdown.</CardDescription>
          <CardDescription>Load selected objects into the list by clicking the reload button.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-replace/objects.gif"
            alt="Adding and managing objects in the replacement list"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Remove the active object by clicking the <code className="mr-1">X</code> button.
          </CardDescription>
          <CardDescription>
            Remove all objects by holding <code className="mr-1">SHIFT</code> and clicking the{" "}
            <code className="mr-1">X</code> button.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1078669616622096394"
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
