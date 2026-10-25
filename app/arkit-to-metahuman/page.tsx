import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Support from "@/components/support";
import OtherAddons from "@/components/other-addons";
import Image from "next/image";
import { Metadata } from "next";
import Affiliate from "@/components/affiliate";
import { Coupon, showCoupon } from "@/components/coupon";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ARKit to MetaHuman - Blender Addon",
  description:
    "Rename ARKit 52 facial shape keys to MetaHuman Live Link curve names in Blender. Preview every rename, detect conflicts, and keep values, animation and drivers intact.",
};

const beforeAfter = [
  ["EyeBlinkLeft", "ctrl_expressions_eyeblinkl"],
  ["EyeLookInLeft", "ctrl_expressions_eyelookrightl"],
  ["JawOpen", "ctrl_expressions_jawOpen"],
  ["MouthClose", "ctrl_expressions_mouthlipspurseul"],
  ["BrowInnerUp", "ctrl_expressions_browlaterall"],
];

export default function ArkitToMetahumanPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            ARKit to MetaHuman renames the 52 ARKit facial shape keys in a Blender scene to the MetaHuman Live Link
            curve names used by Unreal Engine. The mapping is built in, the operation is undoable, and every rename is
            checked before and after it is applied.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Use it when a facial rig was authored with ARKit names but needs to drive a MetaHuman in Unreal Engine.
            Values, sliders, mute states, key order and shape key data are preserved. Animation, NLA strips and shape
            key drivers are rewritten to keep working with the new names.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>What ARKit to MetaHuman offers?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Built-in Mapping</TableCell>
                <TableCell>Corrected 52-pair ARKit list, plus Neutral to Default.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Preview First</TableCell>
                <TableCell>Review every rename, missing source and conflict before changing the file.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Conflict-Safe</TableCell>
                <TableCell>Existing targets are reported and skipped; Blender never adds a .001 suffix.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Data Preserved</TableCell>
                <TableCell>Values, sliders, mute, vertex groups, relative keys and key order are verified.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Animation-Aware</TableCell>
                <TableCell>Rewrites F-curves, NLA strips and shape key drivers to the new names.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Flexible Scope</TableCell>
                <TableCell>Process the active mesh, selected meshes, or all meshes in the view layer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shared Rigs</TableCell>
                <TableCell>Shared shape key data is renamed once, even when several objects use it.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auditable</TableCell>
                <TableCell>Full report in the Text Editor, with an option to save it as a text file.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">No Setup Files</TableCell>
                <TableCell>No CSV, JSON or external mapping file to load or maintain.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>Four steps from ARKit names to Live Link curves.</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Select the mesh or meshes with ARKit shape keys.</li>
            <li>
              Open the <span className="text-primary">ARKit</span> tab in the 3D Viewport sidebar and choose the scope.
            </li>
            <li>
              Click <span className="text-primary">Preview Renames</span> and review the report.
            </li>
            <li>
              Click <span className="text-primary">Apply Renames</span>, then save the report if you need a record.
            </li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Before &amp; After</CardTitle>
          <CardDescription>A sample of the names the add-on produces.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ARKit shape key</TableHead>
                <TableHead>MetaHuman Live Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {beforeAfter.map(([source, target]) => (
                <TableRow key={source}>
                  <TableCell>
                    <code className="text-foreground">{source}</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-foreground">{target}</code>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="space-y-2">
              <Image
                src="/addons/images/arkit-to-metahuman/shape_keys_before.png"
                alt="Shape keys named with ARKit names before the rename"
                width={1383}
                height={893}
                className="w-full rounded-lg"
                loading="eager"
              />
              <figcaption className="text-center text-sm text-muted-foreground">Before</figcaption>
            </figure>
            <figure className="space-y-2">
              <Image
                src="/addons/images/arkit-to-metahuman/shape_keys_after.png"
                alt="The same shape keys renamed to MetaHuman Live Link curves after the rename"
                width={1383}
                height={893}
                className="w-full rounded-lg"
              />
              <figcaption className="text-center text-sm text-muted-foreground">After</figcaption>
            </figure>
          </div>
        </CardContent>
        <CardContent>
          <CardDescription>
            Pairs are applied verbatim. Deliberate asymmetries and mixed casing, such as{" "}
            <code className="text-foreground">ctrl_expressions_jawOpen</code>, are kept exactly as supplied.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Animation &amp; Drivers</CardTitle>
          <CardDescription>Renaming the keys should not break the rig.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The add-on rewrites shape key animation in the active action, every action used by NLA strips, and drivers
            attached to the shape key data-block. It handles legacy and layered actions and warns when an action is
            shared by other data-blocks.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Object-level drivers that reference <code className="text-foreground">key_blocks[...]</code> outside the
            shape key data-block are outside the current scope and should be checked manually after a rename.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Options</CardTitle>
          <CardDescription>Only the controls that matter for a rename.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Scope</TableCell>
                <TableCell>Active Mesh, Selected Meshes or All Meshes. Default: Selected Meshes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Update Animation &amp; Drivers</TableCell>
                <TableCell>Rewrite shape key animation and driver paths. Enabled by default.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Skip Missing Keys</TableCell>
                <TableCell>
                  Apply the available renames and report missing sources. Disable it to cancel the whole run when any
                  source is missing.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
          <CardDescription>What the add-on deliberately does not do.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The add-on only renames existing object shape keys. It does not create keys, edit mesh data, merge
            duplicates or change expressions. Pose-bone rigs and other rig controls are out of scope.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Linked-library keys are read-only. A target that exists in any letter case is treated as a conflict and is
            never overwritten or automatically merged.
          </CardDescription>
        </CardContent>
      </Card>

      <Support>
        <CardFooter className="flex flex-wrap gap-3">
          <Link
            href="https://discord.gg/dsZjbKb7tY"
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
