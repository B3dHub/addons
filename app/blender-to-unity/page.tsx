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

export const metadata: Metadata = {
  title: "Blender to Unity - Blender Addon",
  description: "Blender to Unity - Blender Addon",
};

export default function BlendertoUnityPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Blender-to-Unity is a Blender addon that exports objects, animations, colliders, and LODs to Unity Engine.
            It is designed to be simple and easy to use. You can export your models to Unity with just a few clicks.
            This addon is perfect for game developers, architects, and 3D artists who want to export their models to
            Unity Engine. Get Blender-to-Unity today and start exporting your models to Unity with ease!
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Blender-to-Unity?</CardTitle>
          <CardDescription>Blender-to-Unity vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>More features in the future based on requests.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Blender-to-Unity</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Object Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">✅</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collections Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Collider Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">LOD Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Animation Export</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rename Tool</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Export to Unity & Disk</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto Extract Materials & Textures</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto Create Shader Types</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Clean UI/UX</TableCell>
                <TableCell className="text-center">✅</TableCell>
                <TableCell className="text-center">⚠️</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/collider.html"}
              target="_blank"
              className="hover:underline"
            >
              Collider
            </Link>
          </CardTitle>
          <CardDescription>Add auto and custom collider.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image className="rounded-lg" src="/addons/images/blender-to-unity/colliders.png" alt="Collider types panel in addon interface" width={256} height={256} />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/collider.html#box"}
              target="_blank"
              className="hover:underline"
            >
              Box
            </Link>
          </CardTitle>
          <CardDescription>Box collider will create based on the bounding box of the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/box.webp"
                  alt="Creating box collider from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/box_editmode.webp"
                  alt="Editing box collider in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/box_custom.webp"
                  alt="Custom box collider from selected faces"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/collider.html#capsule"}
              target="_blank"
              className="hover:underline"
            >
              Capsule
            </Link>
          </CardTitle>
          <CardDescription>
            Capsule collider will create based on the bounding box and the depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/capsule.webp"
                  alt="Creating capsule collider from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/capsule_editmode.webp"
                  alt="Editing capsule collider in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/capsule_custom.webp"
                  alt="Custom capsule collider from selected faces"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/collider.html#sphere"}
              target="_blank"
              className="hover:underline"
            >
              Sphere
            </Link>
          </CardTitle>
          <CardDescription>Sphere collider will create based on the bounding box of the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/sphere.webp"
                  alt="Creating sphere collider from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/sphere_editmode.webp"
                  alt="Editing sphere collider in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/sphere_custom.webp"
                  alt="Custom sphere collider from selected faces"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/collider.html#cylinder"}
              target="_blank"
              className="hover:underline"
            >
              Cylinder
            </Link>
          </CardTitle>
          <CardDescription>
            Cylinder collider will create based on the bounding box and the depth of the selection.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/cylinder.gif"
                  alt="Creating cylinder collider from object bounds"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/cylinder_editmode.webp"
                  alt="Editing cylinder collider in edit mode"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/collider.html#convex"}
              target="_blank"
              className="hover:underline"
            >
              Convex
            </Link>
          </CardTitle>
          <CardDescription>Convex collider will create based on the selection.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/convex.webp"
                  alt="Creating convex mesh collider from object"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/convex_editmode.webp"
                  alt="Editing convex mesh collider in edit mode"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/convex_custom.webp"
                  alt="Custom convex mesh collider from selected geometry"
                  width={600}
                  height={325}
                  className="rounded w-full"
                  unoptimized
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/addons/images/blender-to-unity/convex_vhacd.webp"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/lod.html"}
              target="_blank"
              className="hover:underline"
            >
              LOD
            </Link>
          </CardTitle>
          <CardDescription>Create, Update, and Preset LODs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image className="rounded-lg" src="/addons/images/blender-to-unity/lods.png" alt="LOD management panel in addon interface" width={256} height={256} />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/lod.html#create"}
              target="_blank"
              className="hover:underline"
            >
              Create
            </Link>
          </CardTitle>
          <CardDescription>Create LODs for the selected objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unity/lod_create.gif"
            alt="Creating LOD levels for selected objects"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/lod.html#update"}
              target="_blank"
              className="hover:underline"
            >
              Update
            </Link>
          </CardTitle>
          <CardDescription>Update LODs for the selected objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unity/lod_update.gif"
            alt="Updating existing LOD levels with new settings"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardHeader>
          <CardTitle>
            <Link
              href={"https://b3dhub.github.io/blender-to-unity-docs/lod.html#preset"}
              target="_blank"
              className="hover:underline"
            >
              Preset
            </Link>
          </CardTitle>
          <CardDescription>Preset LODs for future use.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unity/lod_preset.gif"
            alt="Saving and loading LOD presets for reuse"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/tool.html"}
              target="_blank"
              className="hover:underline"
            >
              Rename Tool
            </Link>
          </CardTitle>
          <CardDescription>Rename objects and its Colliders and LODs.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unity/rename.gif"
            alt="Renaming objects with colliders and LODs automatically"
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
              href={"https://b3dhub.github.io/blender-to-unity-docs/export.html"}
              target="_blank"
              className="hover:underline"
            >
              Export
            </Link>
          </CardTitle>
          <CardDescription>Export objects and collections to Unity or Disk.</CardDescription>
          <CardDescription>
            - Add a folder path.<br></br>- Select the objects or collections.
            <br></br>- Hit export.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/blender-to-unity/export.gif"
            alt="Exporting objects to Unity with colliders and LODs"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent className="space-y-2">
          <CardDescription>
            If you want to have colliders and create shader types in Unity automatically.
          </CardDescription>
          <CardDescription>
            - Import the <span>BUImporter_v3</span> script while the Unity project is open(drag-n-drop), it should
            compile the script.
          </CardDescription>
          <CardDescription>
            - Install the <span>com.unity.nuget.newtonsoft-json</span> unity package (required for BUImporter_v3).
          </CardDescription>
        </CardContent>
        <CardContent className="space-y-2">
          <CardDescription>
            To install the <span>com.unity.nuget.newtonsoft-json</span> package in Unity:
          </CardDescription>
          <CardDescription>
            Step 1: Open Unity Package Manager, go to <span>Window {`>`} Package Manager</span> in the Unity Editor.
          </CardDescription>
          <CardDescription>
            Step 2: Add Package by name, click the + button in the top left corner of the Package Manager window.
          </CardDescription>
          <CardDescription>
            Step 3: Enter <span>com.unity.nuget.newtonsoft-json</span> as package name.
          </CardDescription>
          <CardDescription>
            - learn more:
            <Link
              href={
                "https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM#installing-the-package-via-upm-window"
              }
              target="_blank"
              className="underline hover:text-primary"
            >
              {" "}
              https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM#installing-the-package-via-upm-window
            </Link>
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://b3dhub.github.io/blender-to-unity-docs/"
            className={cn(buttonVariants({ variant: "outline" }))}
            target="_blank"
          >
            Documentation
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/965691425557721159"
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
