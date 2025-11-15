import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
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
  title: "Quick Theme - Blender Addon",
  description: "Quick Theme - Blender Addon",
};

export default function QuickThemePage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
          <CardDescription>Are you tired of the default Blender theme?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Quick Theme consolidates all theme settings into one panel. Now, you can create a theme that suits your
            taste in seconds. There's no need to change multiple color settings to create a theme. Simply use the single
            color slider to craft a theme you like. You can also use the <span>Auto Theme</span> feature to change the
            theme automatically whenever you restart or load a blend file. Additionally, you can change the{" "}
            <span>Viewport</span> and <span>Outliner</span> theme colors using a single color slider.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          {/* <CardDescription>Quick Theme vs Others</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>
              More features in the future based on requests.
            </TableCaption> */}
            <TableHeader>
              {/* <TableRow>
                <TableHead>Features</TableHead>
                <TableHead className="text-center">Quick Theme</TableHead>
                <TableHead className="text-center">Others</TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Auto Theme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Interface Theme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Viewport Theme</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Outliner Theme</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Auto Theme</CardTitle>
          <CardDescription>
            You can toggle the auto theme feature by clicking the <span className="text-primary">Auto Theme</span>{" "}
            button in the Quick Theme panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/quick-theme/auto_theme_toggle.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
        <CardContent>
          <CardDescription>The theme will change whenever you restart or load a blend file.</CardDescription>
        </CardContent>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/quick-theme/auto_theme.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interface Theme</CardTitle>
          <CardDescription>
            You can change the color of the <span className="text-primary">Interface</span> using a single color slider.
            This feature also includes a roundness slider to adjust the roundness of the interface.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/quick-theme/interface_theme.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Viewport Theme</CardTitle>
          <CardDescription>
            You can change the color of the <span className="text-primary">Viewport</span> using a single color slider.
            By default, the <span className="text-primary">Viewport</span> colors are linked to the{" "}
            <span className="text-primary">Interface</span> color, but you can unlink them by clicking the link icon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/quick-theme/viewport_theme.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Outliner Theme</CardTitle>
          <CardDescription>
            You can change the color of the <span className="text-primary">Outliner</span> using a single color slider.
            By default, the <span className="text-primary">Outliner</span> colors are linked to the{" "}
            <span className="text-primary">Interface</span> color, but you can unlink them by clicking the link icon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            className="rounded-lg w-full"
            src="/addons/images/quick-theme/outliner_theme.gif"
            alt=""
            width={600}
            height={325}
            unoptimized
          />
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="space-x-4">
          <Link
            href="https://discord.com/channels/959138815602229389/1169021672846803027"
            className={cn(buttonVariants({ variant: "secondary" }))}
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
