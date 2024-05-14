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

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  title: "Blender to Game Engine - Blender Addon",
  description:
    "Blender To Game Engine (Unity & Unreal) Bundle - Blender Addons",
};

export default function BlendertoGameEnginePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Blender-to-Game-Engine is a Blender addon bundle. It includes two of
            our popular addons: <span>Blender to Unity</span> and{" "}
            <span>Blender to Unreal</span>. These addons allow you to export
            your Blender models to Unity and Unreal Engine with just one click.
            This bundle is perfect for game developers, architects, and 3D
            artists who want to export their models to Unity and Unreal Engine.
            The bundle is available at a discounted price, so you can save up to
            16% when you buy both addons together. Get the
            Blender-to-Game-Engine bundle today and start exporting your models
            to Unity and Unreal Engine with ease!
          </CardDescription>
        </CardContent>
        <CardContent>
          <Coupon />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What will you get in the bundle?</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Addons</TableHead>
                <TableHead className="text-center">Worth</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <Link
                    href={"https://blendermarket.com/products/blender-to-unity"}
                    target="_blank"
                    className="hover:underline"
                  >
                    Blender to Unity
                  </Link>
                </TableCell>
                <TableCell className="text-center">$30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link
                    href={
                      "https://blendermarket.com/products/blender-to-unreal"
                    }
                    target="_blank"
                    className="hover:underline"
                  >
                    Blender to Unreal
                  </Link>
                </TableCell>
                <TableCell className="text-center">$30</TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>Save upto 16%</TableCaption>
          </Table>
        </CardContent>
      </Card>

      <Support />
      <OtherAddons />
      <Affiliate />
    </div>
  );
}
