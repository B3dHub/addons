import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";
import { cn } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Blender to Godot - Blender Addon",
  description: "Blender to Godot - Blender Addon",
};

export default function BlendertoGodotPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Blender-to-Godot is a Blender addon that exports objects, animations, collisions and components to Godot
            Engine. It is designed to be simple and easy to use. You can export your models to Godot Engine with just a
            few clicks. This addon is perfect for game developers, architects, and 3D artists who want to export their
            models to Godot Engine. Get Blender-to-Godot today and start exporting your models to Godot Engine with
            ease!
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Blender-to-Godot?</CardTitle>
          <CardDescription>Blender-to-Godot vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>More features in the future based on requests.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Blender-to-Godot</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Object Export</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collection Export</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collision Export</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Component Export</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Animation Export</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rename Tool</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Export to Godot</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Export to Disk</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Clean UI/UX</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <XIcon className="size-4" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/collision.html"}
              target="_blank"
              className="hover:underline"
            >
              Collision
            </Link>
          </CardTitle>
          <CardDescription>Add auto and custom collision.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="/addons/images/blender-to-godot/ui_collision.png"
            alt="Collision types panel in addon interface"
            width={256}
            height={256}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/collision.html#box"}
              target="_blank"
              className="hover:underline"
            >
              Box
            </Link>
          </CardTitle>
          <CardDescription>Box collision will create based on the bounding box of the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/box.gif"
                  alt="Creating box collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/box_editmode.gif"
                  alt="Editing box collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/box_custom.gif"
                  alt="Custom box collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/collision.html#capsule"}
              target="_blank"
              className="hover:underline"
            >
              Capsule
            </Link>
          </CardTitle>
          <CardDescription>
            Capsule collision will create based on the bounding box and the depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/capsule.gif"
                  alt="Creating capsule collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/capsule_editmode.gif"
                  alt="Editing capsule collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/capsule_custom.gif"
                  alt="Custom capsule collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/collision.html#sphere"}
              target="_blank"
              className="hover:underline"
            >
              Sphere
            </Link>
          </CardTitle>
          <CardDescription>Sphere collision will create based on the bounding box of the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/sphere.gif"
                  alt="Creating sphere collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/sphere_editmode.gif"
                  alt="Editing sphere collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/sphere_custom.gif"
                  alt="Custom sphere collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/collision.html#cylinder"}
              target="_blank"
              className="hover:underline"
            >
              Cylinder
            </Link>
          </CardTitle>
          <CardDescription>
            Cylinder collision will create based on the bounding box and the depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/cylinder.gif"
                  alt="Creating cylinder collision from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/cylinder_editmode.gif"
                  alt="Editing cylinder collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/cylinder_custom.gif"
                  alt="Custom cylinder collision from selected faces"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/collision.html#convex"}
              target="_blank"
              className="hover:underline"
            >
              Convex
            </Link>
          </CardTitle>
          <CardDescription>Convex collision will create based on the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/convex.gif"
                  alt="Creating convex collision from object mesh"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/convex_editmode.gif"
                  alt="Editing convex collision in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/convex_custom.gif"
                  alt="Custom convex collision from selected geometry"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-godot/convex_vhacd.gif"
                  alt="Automatic convex decomposition using V-HACD"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
          </Carousel>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/component.html"}
              target="_blank"
              className="hover:underline"
            >
              Component
            </Link>
          </CardTitle>
          <CardDescription>Create component such as Navmesh, Rigid body etc.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg"
            src="/addons/images/blender-to-godot/ui_component.png"
            alt="Component types panel in addon interface"
            width={256}
            height={256}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/component.html#navmesh"}
              target="_blank"
              className="hover:underline"
            >
              Navmesh
            </Link>
          </CardTitle>
          <CardDescription>Create navigation (-navmesh)</CardDescription>
          <CardDescription>
            A mesh node with the <span>-navmesh</span> suffix will be converted to a navigation mesh. The original Mesh
            object will be removed at import-time.
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/component.html#occluder"}
              target="_blank"
              className="hover:underline"
            >
              Occluder
            </Link>
          </CardTitle>
          <CardDescription>Create Occluder (-occonly)</CardDescription>
          <CardDescription>
            If a mesh is imported with the <span>-occ</span> suffix an{" "}
            <Link
              href={
                "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh"
              }
              target="_blank"
              className="underline hover:text-foreground"
            >
              Occluder3D
            </Link>{" "}
            node will be created based on the geometry of the mesh, it does not replace the mesh. A mesh node with the{" "}
            <span>-occonly</span> suffix will be converted to an{" "}
            <Link
              href={
                "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh"
              }
              target="_blank"
              className="underline hover:text-foreground"
            >
              Occluder3D
            </Link>{" "}
            on import.
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/component.html#rigid-body"}
              target="_blank"
              className="hover:underline"
            >
              Rigid Body
            </Link>
          </CardTitle>
          <CardDescription>Rigid Body (-rigid)</CardDescription>
          <CardDescription>
            A mesh node with the <span>-rigid</span> suffix will be imported as a{" "}
            <Link
              href={
                "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh"
              }
              target="_blank"
              className="underline hover:text-foreground"
            >
              RigidBody3D
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/component.html#vehicle-body"}
              target="_blank"
              className="hover:underline"
            >
              Vehicle Body
            </Link>
          </CardTitle>
          <CardDescription>Create a VehicleBody (-vehicle)</CardDescription>
          <CardDescription>
            A mesh node with the <span>-vehicle</span> suffix will be imported as a child to a{" "}
            <Link
              href={
                "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh"
              }
              target="_blank"
              className="underline hover:text-foreground"
            >
              VehicleBody3D
            </Link>{" "}
            node.
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/component.html#vehicle-wheel"}
              target="_blank"
              className="hover:underline"
            >
              Vehicle Wheel
            </Link>
          </CardTitle>
          <CardDescription>Create a VehicleWheel (-wheel)</CardDescription>
          <CardDescription>
            A mesh node with the <span>-wheel</span> suffix will be imported as a child to a{" "}
            <Link
              href={
                "https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/node_type_customization.html#create-navigation-navmesh"
              }
              target="_blank"
              className="underline hover:text-foreground"
            >
              VehicleWheel3D
            </Link>{" "}
            node.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/tool.html"}
              target="_blank"
              className="hover:underline"
            >
              Rename Tool
            </Link>
          </CardTitle>
          <CardDescription>Rename object and its collisions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-godot/rename.gif"
            alt="Renaming objects with collisions automatically"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-godot-docs/export.html"}
              target="_blank"
              className="hover:underline"
            >
              Export
            </Link>
          </CardTitle>
          <CardDescription>Export objects and collections to Godot or Disk.</CardDescription>
          <CardDescription>
            - Add a folder path.<br></br>- Select the objects or collections.
            <br></br>- Hit export.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-godot/export.gif"
            alt="Exporting objects to Godot Engine with collisions and components"
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
            href="https://b3dhub.github.io/blender-to-godot-docs/"
            className={cn(buttonVariants({ variant: "outline" }))}
            target="_blank"
          >
            Documentation
          </Link>
          {/* <Link
            href="https://discord.com/channels/959138815602229389/959152281058697216"
            target="_blank"
          >
            <Button variant={"secondary"}>Changelogs</Button>
          </Link> */}
        </CardFooter>
      </Support>

      <OtherAddons />
      <Affiliate />
    </div>
  );
}
