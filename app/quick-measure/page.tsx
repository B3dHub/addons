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
  title: "Quick Measure - Blender Addon",
  description: "Quick Measure - Blender Addon",
};

export default function QuickMeasurePage() {
  return (
    <div className="mx-auto px-5 my-5 flex flex-col justify-center gap-5 w-[688px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>
            Quick Measure is a simple, yet powerful, addon that allows you to
            measure object's length in any mode. It supports multiple
            measurements with and without snap, and the ability to save
            measurements.
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          Coupon code: <Badge variant={"default"}>discount10</Badge> to get 10%
          off.
        </CardContent> */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Quick Measure vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Decal</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Quick Measurements
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Saved Measurements
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Object Snap</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Grid Snap</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Preference Override
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Workflow</CardTitle>
          <CardDescription>How to use Quick Measure?</CardDescription>
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
                <TableCell className="font-medium">Alt + LMB Drag</TableCell>
                <TableCell>Measurement without saving.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Alt + LMB</TableCell>
                <TableCell>Multiple measurements without saving.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Ctrl + Alt + LMB Drag
                </TableCell>
                <TableCell>Measurement with snap and without saving.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ctrl + Alt + LMB</TableCell>
                <TableCell>
                  Multiple measurements with snap and without saving.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Alt + LMB Drag
                </TableCell>
                <TableCell>Measurement with saving.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shift + Alt + LMB</TableCell>
                <TableCell>Multiple measurements with saving.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Alt + LMB Drag
                </TableCell>
                <TableCell>Measurement with snap and saving.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Shift + Ctrl + Alt + LMB
                </TableCell>
                <TableCell>
                  Multiple measurements with snap and saving.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shift + Alt + X</TableCell>
                <TableCell>Toggle the display of saved measurements.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ctrl + Alt + X</TableCell>
                <TableCell>Remove all measurements.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Measurement</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You can measure the length of an object by holding Alt and dragging
            the Left Mouse Button (LMB), but this action won't save the
            measurement.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/alt_click_drag.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            To make multiple measurements without saving them, hold Alt and
            click the Left Mouse Button (LMB).
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/alt_click.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Saved Measurement</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You can measure the length of an object by holding Shift and Alt,
            then dragging the Left Mouse Button (LMB). This action will save the
            measurement.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/shift_alt_click_drag.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            To make multiple measurements and save them, hold Shift and Alt,
            then click the Left Mouse Button (LMB).
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/shift_alt_click.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Object Snap</CardTitle>
          <CardDescription>
            You can snap measurements by holding Ctrl while dragging the Left
            Mouse Button (LMB).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/ctrl_alt_click_drag.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/ctrl_alt_click.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grid Snap</CardTitle>
          <CardDescription>
            This works the same as Object Snap, but it snaps to the grid.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/grid_snap.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preference Override</CardTitle>
          <CardDescription>
            Override measurement settings in the preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="./images/quick-measure/preference_override.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link href="https://discord.gg/sdnHHZpWbT" target="_blank">
            <Button variant={"secondary"}>Discord</Button>
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/1090214367049560135"
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
