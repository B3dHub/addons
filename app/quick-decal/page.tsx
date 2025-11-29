import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
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
  title: "Quick Decal - Blender Addon",
  description: "Quick Decal - Blender Addon",
};

export default function QuickDecalPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Decal is an incredibly intuitive yet powerful addon that enables you to effortlessly add decals to
            your models. It ingeniously uses a controller empty to incorporate decals without adding any extra geometry
            to your model. This is masterfully achieved by blending your existing material with the Quick Decal
            material. It supports multiple objects and materials and works seamlessly in both <span>EEVEE</span> and{" "}
            <span>Cycles</span> render engines. Quick Decal is an essential tool that enhances your texturing process,
            making it more efficient and streamlined.
          </CardDescription>
        </CardContent>
        <CardContent>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Badge variant="secondary">
              <CardDescription>
                Disclaimer: Users who have <span>claimed</span> or <span>purchased</span> Megascans assets through{" "}
                <span>Quixel Bridge</span> can use the megascans decals feature.
              </CardDescription>
            </Badge>
          </div>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Quick Decal?</CardTitle>
          <CardDescription>Quick Decal vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Decal</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Image Decal</TableCell>
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
                <TableCell className="font-medium">Quixel Megascans Decal</TableCell>
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
                <TableCell className="font-medium">Multiple Objects and Materials</TableCell>
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
                <TableCell className="font-medium">PBR Decal</TableCell>
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
                <TableCell className="font-medium">Decal Layer</TableCell>
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
                <TableCell className="font-medium">Layer Controller</TableCell>
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
                <TableCell className="font-medium">Layer Controller Type</TableCell>
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
                <TableCell className="font-medium">Layer Opacity</TableCell>
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
                <TableCell className="font-medium">Layer Wear</TableCell>
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
                <TableCell className="font-medium">Layer Maps</TableCell>
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
                <TableCell className="font-medium">Auto Snap</TableCell>
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
                <TableCell className="font-medium">Auto Parent</TableCell>
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
                <TableCell className="font-medium">Auto Resize</TableCell>
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
              <TableRow>
                <TableCell className="font-medium">Quick Baker Compatible</TableCell>
                <TableCell>
                  <div className="flex justify-center">
                    <CheckIcon className="size-4" />
                  </div>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Image Decal</CardTitle>
          <CardDescription>How to use image decals?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            You need to add the custom decal library path in the preferences, under the Libraries section. Once you've
            added the path, the addon will display the decals in the Decals panel under the{" "}
            <span className="text-primary">Custom</span> section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/custom_decals.gif"
            alt="Browsing and selecting custom decals from library"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            If you don't have any images in the specified path, you can load the decals. Once the decals are loaded,
            they will be saved in the custom decal library path for future use.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/quick_decal_custom_load_add.gif"
            alt="Loading and adding custom image decals to object"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quixel Megascans Decal</CardTitle>
          <CardDescription>How to use Quixel Megascans decals?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Follow the instructions to add the downloaded Megascans library path in the preferences, under the Libraries
            section. Once you've added the path, the addon will attempt to read the{" "}
            <span className="text-primary">assetsData.json</span> file (ensure it exists). Then, you can view the
            Megascans decals, along with their categories and subcategories, in the Decals panel under the{" "}
            <span className="text-primary">Megascans</span> section.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Download decals from{" "}
            <Link href={"https://quixel.com/bridge"} target="_blank" className="underline text-primary">
              Quixel Bridge
            </Link>
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/megascans_decals.gif"
            alt="Browsing Quixel Megascans decal library with categories"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/megascans_decals_2.gif"
            alt="Applying Megascans decal to 3D model surface"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Objects and Materials</CardTitle>
          <CardDescription>The addon supports multiple objects and materials.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/multiple_obj_mat_decal.gif"
            alt="Applying decals to multiple objects and materials simultaneously"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>
            You can use the hotkeys <span className="text-foreground">Shift</span> and{" "}
            <span className="text-foreground">Ctrl</span> for quick access.
          </CardDescription>
        </CardContent>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/hotkeys.png"
            alt="Hotkey reference chart for Quick Decal operations"
            width={600}
            height={325}
            className="rounded w-full"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Decal Layer</CardTitle>
          <CardDescription>
            Layers are the decal layers of an object. They can be arranged in ascending or descending order, and can
            also be removed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/decal_layers.gif"
            alt="Organizing and reordering decal layers on object"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Layer Wear</CardTitle>
          <CardDescription>Quickly add wear and tear to the decal layer.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/decal_wear.gif"
            alt="Adjusting wear and tear effect on decal layer"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Baker Compatible</CardTitle>
          <CardDescription>
            This addon is compatible with our other addon,{" "}
            <Link
              href={"https://superhivemarket.com/products/quick-baker"}
              target="_blank"
              className="underline text-primary"
            >
              Quick Baker
            </Link>
            .
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/quick_decal_baker.gif"
            alt="Baking decals with Quick Baker addon integration"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Caution</CardTitle>
          <CardDescription>
            Do not edit or remove the <span>QDecal Master</span> node group and its child nodes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-decal/master_node_group.png"
            alt="QDecal Master node group in Blender shader editor"
            width={600}
            height={325}
            className="rounded w-full"
          />
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://superhivemarket.com/products/quick-decal/docs"
            className={cn(buttonVariants({ variant: "outline" }))}
            target="_blank"
          >
            Documentation
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/1223542106539167754"
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
