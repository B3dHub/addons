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
import { Coupon, showCoupon } from "@/components/coupon";

export const metadata: Metadata = {
  title: "Blender to Game Engine - Blender Addon",
  description:
    "Blender To Game Engine (Unity & Unreal) Bundle - Blender Addons",
};

export default function BlendertoGameEnginePage() {
  return (
    <div className="dark flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Blender-to-Game-Engine is a Blender add-on bundle. It includes two of
            our popular add-ons: <span>Blender to Unity</span>, <span>Blender to Unreal</span> and{" "}
            <span>Blender to Godot</span>. These add-ons allow you to export
            your Blender models to Unity, Unreal and Godot engine with just one click.
            This bundle is perfect for game developers, architects, and 3D
            artists who want to export their models to Unity, Unreal and Godot engine.
            The bundle is available at a discounted price, so you can save up to
            33.33%. Get the
            Blender-to-Game-Engine bundle today and start exporting your models
            to Unity, Unreal and Godot engine with ease!
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
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
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link
                    href={
                      "https://blendermarket.com/products/blender-to-godot"
                    }
                    target="_blank"
                    className="hover:underline"
                  >
                    Blender to Godot
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>Save upto 33.33%</TableCaption>
          </Table>
        </CardContent>
      </Card>

      <Support />
      <OtherAddons />
      <Affiliate />
    </div>
  );
}
