import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Knife Circle - Blender Addon",
  description: "A Blender add-on for projecting precise circular cuts onto mesh objects with real-time preview.",
};

export default function KnifeCirclePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Knife Circle is a powerful Blender add-on for projecting precise circular cuts onto mesh objects with a
            real-time preview. It features GPU-accelerated rendering, interactive radius control, and works seamlessly
            in both Object and Edit modes. Perfect for creating clean geometric cuts with accuracy and speed.
          </CardDescription>
        </CardContent>
        {/* <CardContent>
          <Badge variant="secondary">
            <CardDescription>
              Launch Offer: Get the add-on for <span>25%</span> off, valid till Nov 28, 2025
            </CardDescription>
          </Badge>
        </CardContent> */}
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>What Knife Circle offers?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader></TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Interactive Control</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Fixed / Freeform Modes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Adjustable Segments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Numeric Input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Quick Shapes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cut Through</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dual Mode Support</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Precision Mode</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Snap Mode</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>How to use Knife Circle?</CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-semibold text-primary">Select</span> one or more mesh objects
            </li>
            <li>
              <span className="font-semibold text-primary">Activate</span> the Circle Knife tool from the toolbar
            </li>
            <li>
              <span className="font-semibold text-primary">Click</span> to place the circle center
            </li>
            <li>
              <span className="font-semibold text-primary">Move</span> the mouse to adjust radius
            </li>
            <li>
              <span className="font-semibold text-primary">Confirm</span> with Left Click or{" "}
              <span className="font-semibold text-primary">Cancel</span> with Right Click/ESC
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
          <CardDescription>What inputs does Knife Circle respond to?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Input</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Left Click</code>
                </TableCell>
                <TableCell>Confirm</TableCell>
                <TableCell>Execute the knife projection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Right Click / ESC</code>
                </TableCell>
                <TableCell>Cancel</TableCell>
                <TableCell>Exit without changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Mouse Move</code>
                </TableCell>
                <TableCell>Adjust Radius</TableCell>
                <TableCell>Dynamic radius control</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Scroll Up</code>
                </TableCell>
                <TableCell>More Segments</TableCell>
                <TableCell>Increase circle smoothness (max 256)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Scroll Down</code>
                </TableCell>
                <TableCell>Fewer Segments</TableCell>
                <TableCell>Decrease segments (min 3)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Shift + Mouse Move</code>
                </TableCell>
                <TableCell>Precise Mode</TableCell>
                <TableCell>10x slower radius adjustment</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Ctrl + Mouse Move</code>
                </TableCell>
                <TableCell>Snap Mode</TableCell>
                <TableCell>Snap radius to 5-unit increments</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>F</code>
                </TableCell>
                <TableCell>Fixed / Freeform Mode</TableCell>
                <TableCell>Switch between fixed/freeform modes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>X</code>
                </TableCell>
                <TableCell>Cut Through Mode</TableCell>
                <TableCell>Switch between surface/through modes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>T</code>
                </TableCell>
                <TableCell>Triangle</TableCell>
                <TableCell>Set to 3 segments for triangle</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>S</code>
                </TableCell>
                <TableCell>Square</TableCell>
                <TableCell>Set to 4 segments for square</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>C</code>
                </TableCell>
                <TableCell>Circle</TableCell>
                <TableCell>Set to 32 segments for smooth circle</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>0-9, Period</code>
                </TableCell>
                <TableCell>Numeric Input</TableCell>
                <TableCell>Type exact radius value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Backspace</code>
                </TableCell>
                <TableCell>Delete Digit</TableCell>
                <TableCell>Remove last typed character</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <code>Enter / Numpad Enter</code>
                </TableCell>
                <TableCell>Apply Value</TableCell>
                <TableCell>Confirm numeric input</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Control</CardTitle>
          <CardDescription>
            Click to set the circle center, then move the mouse to dynamically adjust the radius with real-time preview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/knife-circle/interactive-controls.gif"
            alt="Interactive control demonstration"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fixed / Freeform Mode</CardTitle>
          <CardDescription>
            Toggle between Fixed mode (click to set center, move to adjust radius) and Freeform mode (click and drag to
            define both center and radius simultaneously) using the <code>F</code> key.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/knife-circle/freeform.gif"
            alt="Freeform mode demonstration showing click-and-drag to define center and radius"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Adjustable Segments</CardTitle>
          <CardDescription>Modify the number of segments on-the-fly using the mouse scroll wheel.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/knife-circle/adjustable-segments.gif"
            alt="Adjustable segments demonstration"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Numeric Input</CardTitle>
          <CardDescription>
            Type exact radius values for precise cuts. Start the tool, type a value like <code>75.5</code>, and press
            Enter to apply.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/knife-circle/numeric-input.gif"
            alt="Numeric input demonstration"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Shapes</CardTitle>
          <CardDescription>
            Instantly switch between common shapes with a single keypress - <code>T</code> for Triangle (3 segments),{" "}
            <code>S</code> for Square (4 segments), <code>C</code> for Circle (32 segments).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/knife-circle/quick-shapes.gif"
            alt="Quick shape shortcuts demonstration"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cut Through</CardTitle>
          <CardDescription>
            Toggle between two modes with the <code>X</code> key - Blue preview cuts only visible front faces, Red
            preview cuts through the entire mesh.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/knife-circle/cut-through.gif"
            alt="Cut through mode demonstration"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1439518778001199156"
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
