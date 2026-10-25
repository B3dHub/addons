import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import FeatureLinks from "@/components/feature-links";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blender to Unreal - Blender Addon",
  description:
    "Export objects, animations, collisions, sockets, and LODs to Unreal Engine with just a few clicks. Includes auto and custom collisions, socket creation, LOD presets, and a rename tool.",
};

const features = [
  { label: "Object Export", href: "#export" },
  { label: "Collection Export", href: "#export" },
  { label: "Collision Export", href: "#collision" },
  { label: "Socket Export", href: "#socket" },
  { label: "LOD Export", href: "#lod" },
  { label: "Animation Export", href: "#export" },
  { label: "Rename Tool", href: "#rename-tool" },
  { label: "Edge Decal Tool", href: "#export" },
  { label: "Vehicle Rigging", href: "#vehicle-rigging" },
  { label: "Export to Unreal", href: "#export" },
  { label: "Export to Disk", href: "#export" },
  { label: "Clean UI/UX", href: "#introduction" },
];

export default function BlendertoUnrealPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card id="introduction">
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Blender-to-Unreal is a Blender addon that exports objects, animations, collisions, sockets, and LODs to
            Unreal Engine. It is designed to be simple and easy to use. You can export your models to Unreal Engine with
            just a few clicks. This addon is perfect for game developers, architects, and 3D artists who want to export
            their models to Unreal Engine. Get Blender-to-Unreal today and start exporting your models to Unreal Engine
            with ease!
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <FeatureLinks features={features} />
        </CardContent>
      </Card>

      <Card id="collision">
        <CardHeader>
          <CardTitle>Collision</CardTitle>
          <CardDescription>Add auto and custom collision.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            loading="eager"
            src="/addons/images/blender-to-unreal/collisions.png"
            alt="Collision types panel in addon interface"
            width={256}
            height={256}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Box</CardTitle>
          <CardDescription>Box collision will create based on the bounding box of the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/box.webp"
                  alt="Creating box collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/box_editmode.webp"
                  alt="Editing box collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/box_custom.webp"
                  alt="Custom box collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>Capsule</CardTitle>
          <CardDescription>
            Capsule collision will create based on the bounding box and the depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/capsule.webp"
                  alt="Creating capsule collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/capsule_editmode.webp"
                  alt="Editing capsule collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/capsule_custom.webp"
                  alt="Custom capsule collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>Sphere</CardTitle>
          <CardDescription>Sphere collision will create based on the bounding box of the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/sphere.webp"
                  alt="Creating sphere collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/sphere_editmode.webp"
                  alt="Editing sphere collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/sphere_custom.webp"
                  alt="Custom sphere collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>Cylinder</CardTitle>
          <CardDescription>
            Cylinder collision will create based on the bounding box and the depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/cylinder.webp"
                  alt="Creating cylinder collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/cylinder_editmode.webp"
                  alt="Editing cylinder collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>Convex</CardTitle>
          <CardDescription>Convex collision will create based on the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/convex.webp"
                  alt="Creating convex collision from object mesh"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/convex_editmode.webp"
                  alt="Editing convex collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/convex_custom.webp"
                  alt="Custom convex collision from selected geometry"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/convex_vhacd.webp"
                  alt="Automatic convex decomposition using V-HACD"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CardContent>
      </Card>

      <Card id="socket">
        <CardHeader>
          <CardTitle>Socket</CardTitle>
          <CardDescription>Add socket to the selected objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="/addons/images/blender-to-unreal/socket.png"
            alt="Socket creation panel in addon interface"
            width={256}
            height={256}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Mesh</CardTitle>
          <CardDescription>Mesh socket will create in the 3d cursor location.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/socket.webp"
                  alt="Creating mesh socket at cursor location"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/socket_editmode.webp"
                  alt="Positioning socket in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unreal/socket_custom.webp"
                  alt="Custom socket attached to mesh surface"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </CardContent>
      </Card>

      <Card id="lod">
        <CardHeader>
          <CardTitle>LOD</CardTitle>
          <CardDescription>Create, Update, and Preset LODs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="/addons/images/blender-to-unreal/lods.png"
            alt="LOD management panel in addon interface"
            width={256}
            height={256}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Create</CardTitle>
          <CardDescription>Create LODs for the selected objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unreal/lod_create.gif"
            alt="Creating LOD levels for selected objects"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Update</CardTitle>
          <CardDescription>Update LODs for the selected objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unreal/lod_update.gif"
            alt="Updating existing LOD levels with new settings"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Preset</CardTitle>
          <CardDescription>Preset LODs for future use.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unreal/lod_preset.gif"
            alt="Saving and loading LOD presets for reuse"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="rename-tool">
        <CardHeader>
          <CardTitle>Rename Tool</CardTitle>
          <CardDescription>Rename objects and its Collisions and LODs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unreal/rename.gif"
            alt="Renaming objects with collisions and LODs automatically"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="vehicle-rigging">
        <CardHeader>
          <CardTitle>Vehicle Rigging</CardTitle>
          <CardDescription>
            You need a vehicle body and wheels named '<span>Wheel</span>' parented to it. You can load them manually if
            the names don't match, or use the <span>Load Vehicle Wheels</span> operator. Once loaded, just press the{" "}
            <span>Rig</span> operator. The bones will be added to the object's origin.
          </CardDescription>
          <CardDescription>Note: The vehicle body needs to be facing in the +X axis.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unreal/vehicle_rigging.gif"
            alt="Automatically rigging vehicle with wheel bones"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="export">
        <CardHeader>
          <CardTitle>Export</CardTitle>
          <CardDescription>Export objects and collections to Unreal or Disk.</CardDescription>
          <CardDescription>
            - Add a folder path.<br></br>- Select the objects or collections.
            <br></br>- Hit export.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unreal/export.gif"
            alt="Exporting objects to Unreal Engine with collisions and LODs"
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
            href="https://discord.gg/AEsJRuWrqw"
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
