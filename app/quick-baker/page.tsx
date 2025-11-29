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
import { CheckIcon, XIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Quick Baker - Blender Addon",
  description: "Quick Baker - Blender Addon",
};

export default function QuickBakerPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Baker is an exceptional PBR texture-baking addon that brilliantly utilizes Blender's native baking
            operator for baking <span>PBR</span>, <span>Mesh</span>, <span>Principled BSDF</span>, and{" "}
            <span>Cycles</span> maps. It significantly enhances the Blender baking process for multiple objects with
            multiple materials, offering unparalleled efficiency. Capable of baking both high-to-low and low-to-low poly
            objects. It simplifies the baking process with an ingenious automatic cage setup. Designed with speed and
            ease-of-use in mind, Quick Baker stands out as the ultimate tool for your baking needs.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why to choose Quick Baker?</CardTitle>
          <CardDescription>Quick Baker vs Others</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>More features in the future based on requests.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Baker</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Object Bake</TableCell>
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
                <TableCell className="font-medium">High-to-Low Poly Bake</TableCell>
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
                <TableCell className="font-medium">Single Texture Set</TableCell>
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
                <TableCell className="font-medium">Multiple Texture Set</TableCell>
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
                <TableCell className="font-medium">Auto Cage</TableCell>
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
                <TableCell className="font-medium">Auto UDIM Bake</TableCell>
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
                <TableCell className="font-medium">Channel Packing</TableCell>
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
                <TableCell className="font-medium">Vertex Color for Material ID</TableCell>
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
                <TableCell className="font-medium">Existing Texture Bake</TableCell>
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
                <TableCell className="font-medium">Map Preview</TableCell>
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
                <TableCell className="font-medium">Material Bake</TableCell>
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
                <TableCell className="font-medium">Node Bake</TableCell>
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
                <TableCell className="font-medium">UDIM Node Bake</TableCell>
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
                <TableCell className="font-medium">Post Bake Options</TableCell>
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
                <TableCell className="font-medium">50 Unique Maps</TableCell>
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
                <TableCell className="font-medium">Map Presets</TableCell>
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
                <TableCell className="font-medium">Bake Presets</TableCell>
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
          <CardTitle>Object Bake</CardTitle>
          <CardDescription>Bake single or multiple objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/object_bake.gif"
            alt="Baking PBR textures for single and multiple objects"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>High-to-Low Poly Bake</CardTitle>
          <CardDescription>Bake high-to-low or low-to-low objects.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/high_to_low_bake.gif"
            alt="Baking high-poly detail onto low-poly model"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Single Texture Set</CardTitle>
          <CardDescription>Bake multiple objects and materials into single texture set.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/single_texture_set.gif"
            alt="Baking multiple objects into single texture set"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Texture Set</CardTitle>
          <CardDescription>Bake multiple objects and materials into separate texture set.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/multiple_texture_set.gif"
            alt="Baking multiple objects into separate texture sets"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auto Cage</CardTitle>
          <CardDescription>Automatically create/adjust cage objects for high-to-low bake.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/auto_cage.gif"
            alt="Automatically creating and adjusting cage for baking"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auto UDIM Bake</CardTitle>
          <CardDescription>Automatically bake UDIM maps based on UV layout.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/auto_udim_bake.gif"
            alt="Automatically baking UDIM tiles based on UV layout"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Channel Packing</CardTitle>
          <CardDescription>Pack multiple maps into one image (ideal for game engines).</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/channel_packing.gif"
            alt="Packing multiple texture maps into RGB channels"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertex Color for Material ID</CardTitle>
          <CardDescription>Create vertex color for material id map.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/vertex_color_material_id.gif"
            alt="Creating vertex color for material ID map"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Texture Bake</CardTitle>
          <CardDescription>Bake on existing texture map.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/existing_texture_bake.gif"
            alt="Baking onto existing texture map"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Map Preview</CardTitle>
          <CardDescription>Preview maps before baking (e.g. AO, Curvature, etc).</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/map_preview.gif"
            alt="Previewing ambient occlusion and curvature maps"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Material Bake</CardTitle>
          <CardDescription>Bake material onto plane.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
          src="/addons/images/quick-baker/node_bake.gif"
          alt=""
          width={600}
          height={325}
          className="rounded w-full"
            
          />
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>Node Bake</CardTitle>
          <CardDescription>Bake shader nodes into image.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/node_bake.gif"
            alt="Baking shader nodes into texture image"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>UDIM Node Bake</CardTitle>
          <CardDescription>Bake shader nodes into image for UDIM object.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/udim_node_bake.gif"
            alt="Baking shader nodes for UDIM object"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Post Bake</CardTitle>
          <CardDescription>Post bake options</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
          src="/addons/images/quick-baker/maps.png"
          alt=""
          width={600}
          height={325}
          className="rounded w-full"
            
          />
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>50 Unique Maps</CardTitle>
          <CardDescription>Bake 50 unique maps</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>

      <Card>
        <Image
          className="rounded w-full"
          src="/addons/images/quick-baker/maps.png"
          alt="Collection of 50 unique bake map types available"
          width={600}
          height={325}
        />
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Only works with <span>Principled BSDF</span>, <span>Mix Shader</span>, and <span>Add Shader</span> nodes.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>
            If you encounter the <span>Out of Memory</span> error, you should lower the processes count to 1-2 in the
            Global Bake panel. The higher process count is useful when baking low-resolution maps (e.g. 1K).
          </CardDescription>
        </CardFooter>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://b3dhub.github.io/quick-baker-docs/"
            className={cn(buttonVariants({ variant: "outline" }))}
            target="_blank"
          >
            Documentation
          </Link>
          <Link
            href="https://discord.com/channels/959138815602229389/1013054795562614794"
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
