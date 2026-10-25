import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  title: "Quick Baker - Blender Addon",
  description:
    "PBR texture baking addon for Blender. Bake multiple objects and materials into single or multiple texture sets with auto cage, auto UDIM, node bake, and realtime map preview.",
};

const features = [
  { label: "Object Bake", href: "#object-bake" },
  { label: "High-to-Low Poly Bake", href: "#high-to-low-poly-bake" },
  { label: "Single Texture Set", href: "#single-texture-set" },
  { label: "Multiple Texture Set", href: "#multiple-texture-set" },
  { label: "Auto Cage", href: "#auto-cage" },
  { label: "UV Unwrap & Pack", href: "#uv-unwrap-pack" },
  { label: "Auto UDIM Bake", href: "#auto-udim-bake" },
  { label: "Channel Packing", href: "#channel-packing" },
  { label: "Vertex Color for Material ID", href: "#vertex-color-material-id" },
  { label: "Existing Texture Bake", href: "#existing-texture-bake" },
  { label: "Decal Bake", href: "#decal-bake" },
  { label: "Map Preview", href: "#map-preview" },
  { label: "Material Bake", href: "#node-bake" },
  { label: "Node Bake", href: "#node-bake" },
  { label: "UDIM Node Bake", href: "#udim-node-bake" },
  { label: "Post Bake Options", href: "#object-bake" },
  { label: "50 Unique Maps", href: "#50-unique-maps" },
  { label: "Map Presets", href: "#50-unique-maps" },
  { label: "Bake Presets", href: "#50-unique-maps" },
  { label: "Clean UI/UX", href: "#introduction" },
];

export default function QuickBakerPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card id="introduction">
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
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <FeatureLinks features={features} />
        </CardContent>
      </Card>

      <Card id="object-bake">
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
            loading="eager"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="high-to-low-poly-bake">
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

      <Card id="single-texture-set">
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

      <Card id="multiple-texture-set">
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

      <Card id="auto-cage">
        <CardHeader>
          <CardTitle>Auto Cage</CardTitle>
          <CardDescription>Automatically create/adjust cage objects for high-to-low bake.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/auto_cage_preview.gif"
            alt="Automatically creating and adjusting cage for baking"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="uv-unwrap-pack">
        <CardHeader>
          <CardTitle>UV Unwrap & Pack</CardTitle>
          <CardDescription>Create a bake-ready UV map with Smart UV Project and Pack Islands.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/uv_unwrap_pack.gif"
            alt="Automatically unwrapping and packing UV islands for baking"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="auto-udim-bake">
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

      <Card id="channel-packing">
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

      <Card id="vertex-color-material-id">
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

      <Card id="existing-texture-bake">
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

      <Card id="decal-bake">
        <CardHeader>
          <CardTitle>Decal Bake</CardTitle>
          <CardDescription>
            Bake decal layers created with our addon{" "}
            <Link
              href={"https://superhivemarket.com/products/quick-decal"}
              target="_blank"
              className="underline text-primary"
            >
              Quick Decal
            </Link>{" "}
            or any custom <code className="text-foreground">_decal</code> child mesh object.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/decal_bake.gif"
            alt="Baking Quick Decal decal layers into textures"
            width={600}
            height={325}
            className="rounded w-full"
            unoptimized
          />
        </CardContent>
      </Card>

      <Card id="map-preview">
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

      <Card id="node-bake">
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

      <Card id="udim-node-bake">
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

      <Card id="50-unique-maps">
        <CardHeader>
          <CardTitle>50 Unique Maps</CardTitle>
          <CardDescription>Bake 50 unique maps</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/quick-baker/maps.png"
            alt="Collection of 50 unique bake map types available"
            width={600}
            height={325}
            className="rounded w-full"
          />
        </CardContent>
      </Card>

      <Card>
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
            href="https://discord.gg/ZmEx5sfw68"
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
