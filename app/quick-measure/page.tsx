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
  title: "Quick Measure - Blender Addon",
  description: "Quick Measure - Blender Addon",
};

export default function QuickMeasurePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Measure is an incredibly intuitive yet powerful addon that
            empowers you to measure an object's length in any mode effortlessly.
            It supports multiple measurements, both with and without snap, and
            even offers the ability to save measurements. This addon is an
            essential tool for any 3D artist, architect, or game developer,
            promising to make your measuring process more efficient and
            streamlined.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
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
                <TableHead className="text-center">Quick Measure</TableHead>
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
                <TableCell className="font-medium">
                  Select Measurements
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Remove Measurements
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Separate Measurements
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Join Measurements</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Axis Restriction</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Measure Angle</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lock to Vertices</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">
                  Blender Units Compatible
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
                <TableCell className="font-medium">Alt + X</TableCell>
                <TableCell>Remove the selected measurement.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ctrl + Alt + X</TableCell>
                <TableCell>Remove all measurements.</TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>
              <span>Left</span> and <span>Right</span> mouse operations are swapped in <span>Edit Mode</span> to
              prevent keymap conflicts.
            </TableCaption>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You can measure the length of an object by holding <span>Alt</span>{" "}
            and dragging the <span>Left Mouse Button (LMB)</span>, but this
            action won't save the measurement.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/quick_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            To make multiple measurements without saving them, hold{" "}
            <span>Alt</span> and click the <span>Left Mouse Button (LMB)</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/quick_multiple_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Saved Measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You can measure the length of an object by holding{" "}
            <span>Shift</span> and <span>Alt</span>, then dragging the{" "}
            <span>Left Mouse Button (LMB)</span>. This action will save the
            measurement.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/saved_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            To make multiple measurements and save them, hold <span>Shift</span>{" "}
            and <span>Alt</span>, then click the{" "}
            <span>Left Mouse Button (LMB)</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/saved_multiple_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Select Measurements</CardTitle>
          <CardDescription>
            You can select the measurements in the viewport.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/select_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Remove Measurements</CardTitle>
          <CardDescription>
            You can remove the selected measurements with <span>Alt + X</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/remove_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Separate Measurements</CardTitle>
          <CardDescription>
            You can separate the joined measurement points by holding{" "}
            <span>Alt</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/separate_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Join Measurements</CardTitle>
          <CardDescription>
            You can join the separate measurement points only when both
            measurement points are in the same position.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/join_measurements.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Axis Restriction</CardTitle>
          <CardDescription>
            You can restrict the axis while moving the measurement points using{" "}
            <span>X, Y, Z</span>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/axis_restriction.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Measure Angle</CardTitle>
          <CardDescription>
            You can measure the angle similar to default Blender.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/measure_angle.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lock to Vertices</CardTitle>
          <CardDescription>
            You can lock the measurement points to object vertices.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/object_mode_vertex_lock.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            Works in the <span>Edit Mode</span> as well.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/edit_mode_vertex_lock.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Blender Units Compatible</CardTitle>
          <CardDescription>
            It's compatible with Blender units by default. You can override this
            in the preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="./images/quick-measure/v2/measurement_units.gif"
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
          <CardDescription>
            You need to toggle the measurements with{" "}
            <span>Alt + Shift + X</span> whenever you switch to different
            workspaces, e.g., Modeling, Shading, etc.
          </CardDescription>
        </CardHeader>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1090214367049560135"
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
