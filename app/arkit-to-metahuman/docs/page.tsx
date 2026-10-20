import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARKit to MetaHuman Documentation - Blender Addon",
  description:
    "Install and use ARKit to MetaHuman: rename ARKit 52 facial shape keys to MetaHuman Live Link curve names in Blender.",
};

const mapping = [
  ["Neutral", "Default"],
  ["EyeBlinkLeft", "ctrl_expressions_eyeblinkl"],
  ["EyeLookDownLeft", "ctrl_expressions_eyelookdownl"],
  ["EyeLookOutLeft", "ctrl_expressions_eyelookleftl"],
  ["EyeLookInLeft", "ctrl_expressions_eyelookrightl"],
  ["EyeLookUpLeft", "ctrl_expressions_eyelookupl"],
  ["EyeSquintLeft", "ctrl_expressions_eyesquintinnerl"],
  ["EyeWideLeft", "ctrl_expressions_eyewidenl"],
  ["EyeBlinkRight", "ctrl_expressions_eyeblinkr"],
  ["EyeLookDownRight", "ctrl_expressions_eyelookdownr"],
  ["EyeLookInRight", "ctrl_expressions_eyelookleftr"],
  ["EyeLookOutRight", "ctrl_expressions_eyelookrightr"],
  ["EyeLookUpRight", "ctrl_expressions_eyelookupr"],
  ["EyeSquintRight", "ctrl_expressions_eyesquintinnerr"],
  ["EyeWideRight", "ctrl_expressions_eyewidenr"],
  ["JawForward", "ctrl_expressions_jawfwd"],
  ["JawLeft", "ctrl_expressions_jawleft"],
  ["JawRight", "ctrl_expressions_jawright"],
  ["JawOpen", "ctrl_expressions_jawOpen"],
  ["MouthClose", "ctrl_expressions_mouthlipspurseul"],
  ["MouthFunnel", "ctrl_expressions_mouthfunnelul"],
  ["MouthPucker", "ctrl_expressions_mouthlipspurseur"],
  ["MouthLeft", "ctrl_expressions_mouthleft"],
  ["MouthRight", "ctrl_expressions_mouthright"],
  ["MouthSmileLeft", "ctrl_expressions_mouthcornerpulll"],
  ["MouthSmileRight", "ctrl_expressions_mouthcornerpullr"],
  ["MouthFrownLeft", "ctrl_expressions_mouthcornerdepressl"],
  ["MouthFrownRight", "ctrl_expressions_mouthcornerdepressr"],
  ["MouthDimpleLeft", "ctrl_expressions_mouthdimplel"],
  ["MouthDimpleRight", "ctrl_expressions_mouthdimpler"],
  ["MouthStretchLeft", "ctrl_expressions_mouthstretchl"],
  ["MouthStretchRight", "ctrl_expressions_mouthstretchr"],
  ["MouthRollLower", "ctrl_expressions_mouthlowerliprollinl"],
  ["MouthRollUpper", "ctrl_expressions_mouthupperliprollinl"],
  ["MouthShrugLower", "ctrl_expressions_jawchinraisedl"],
  ["MouthShrugUpper", "ctrl_expressions_jawchinraiseul"],
  ["MouthPressLeft", "ctrl_expressions_mouthpressdl"],
  ["MouthPressRight", "ctrl_expressions_mouthpressdr"],
  ["MouthLowerDownLeft", "ctrl_expressions_mouthlowerlipdepressl"],
  ["MouthLowerDownRight", "ctrl_expressions_mouthlowerlipdepressr"],
  ["MouthUpperUpLeft", "ctrl_expressions_mouthupperlipraisel"],
  ["MouthUpperUpRight", "ctrl_expressions_mouthupperlipraiser"],
  ["BrowDownLeft", "ctrl_expressions_browdownl"],
  ["BrowDownRight", "ctrl_expressions_browdownr"],
  ["BrowInnerUp", "ctrl_expressions_browlaterall"],
  ["BrowOuterUpLeft", "ctrl_expressions_browraiseouterl"],
  ["BrowOuterUpRight", "ctrl_expressions_browraiseouterr"],
  ["CheekPuff", "ctrl_expressions_mouthcheekblowl"],
  ["CheekSquintLeft", "ctrl_expressions_eyecheekraisel"],
  ["CheekSquintRight", "ctrl_expressions_eyecheekraiser"],
  ["NoseSneerLeft", "ctrl_expressions_nosewrinklel"],
  ["NoseSneerRight", "ctrl_expressions_nosewrinkler"],
  ["TongueOut", "ctrl_expressions_tongueout"],
];

export default function ArkitToMetahumanDocsPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>How to install ARKit to MetaHuman?</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            The add-on supports Blender <span className="text-primary">3.3 or newer</span> through a legacy add-on
            install. Blender <span className="text-primary">4.2 or newer</span> can also install it as an extension.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Legacy install: open <span className="text-primary">Edit &gt; Preferences &gt; Add-ons</span>, click{" "}
            <span className="text-primary">Install</span>, choose the downloaded zip, and enable{" "}
            <span className="text-primary">ARKit to MetaHuman</span>.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            Extension install: open <span className="text-primary">Edit &gt; Preferences &gt; Get Extensions</span>,
            click <span className="text-primary">Install from Disk</span>, choose the extension zip, and enable the
            add-on if it is not enabled automatically.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>Rename a facial rig in a few steps.</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Select the mesh or meshes with ARKit facial shape keys.</li>
            <li>
              Open the 3D Viewport sidebar with <span className="text-primary">N</span> and choose the{" "}
              <span className="text-primary">ARKit</span> tab.
            </li>
            <li>Choose the scope, then click Preview Renames and review the report.</li>
            <li>Click Apply Renames.</li>
            <li>Optional: click Save Report to write the last report to a text file.</li>
          </ol>
        </CardContent>
        <CardContent>
          <CardDescription>
            Applying the operation twice is safe. Keys that already use their target name are reported as Already
            Renamed and are not changed again.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Scope &amp; Options</CardTitle>
          <CardDescription>What each setting does.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Active Mesh</TableCell>
                <TableCell>Process only the active object.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Selected Meshes</TableCell>
                <TableCell>Process every selected object. This is the default.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">All Meshes</TableCell>
                <TableCell>Process every object in the current view layer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Update Animation &amp; Drivers</TableCell>
                <TableCell>
                  Rewrite shape key F-curves, NLA strip actions and shape key drivers. Enabled by default.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Skip Missing Keys</TableCell>
                <TableCell>
                  Apply the available renames and report missing sources. Disable it to cancel the whole run when any
                  mapping source is missing.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>What Gets Changed</CardTitle>
          <CardDescription>The operation is limited to shape key names and their references.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Matching source keys</TableCell>
                <TableCell>Renamed to the mapped MetaHuman Live Link target.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Values, sliders, mute, vertex groups, relative keys</TableCell>
                <TableCell>Preserved and snapshotted before the rename, then verified afterwards.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Key order</TableCell>
                <TableCell>Preserved.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Current action and NLA actions</TableCell>
                <TableCell>Shape key F-curve paths are rewritten to the new names.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Drivers on the shape key data-block</TableCell>
                <TableCell>
                  <code className="text-foreground">key_blocks[...]</code> paths are rewritten.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Basis</TableCell>
                <TableCell>Never renamed.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Unmapped keys</TableCell>
                <TableCell>Left untouched and listed in the report.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Linked-library data</TableCell>
                <TableCell>Reported as read-only and skipped.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reading the Report</CardTitle>
          <CardDescription>Every run writes a report to Text Editor &gt; Text as ARKit2MH_report.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Renamed</TableCell>
                <TableCell>The source key was renamed successfully.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Already Renamed</TableCell>
                <TableCell>The target name already exists; no change was needed.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Missing Sources</TableCell>
                <TableCell>The ARKit key is not present in that shape key data-block.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Conflicts</TableCell>
                <TableCell>The target exists. The source is left untouched.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Unmapped Keys</TableCell>
                <TableCell>Existing keys outside the mapping; they are not changed.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Read-Only Data</TableCell>
                <TableCell>Linked-library shape keys that Blender does not allow editing.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Errors</TableCell>
                <TableCell>Blender refused the rename or the post-rename verification failed.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardContent>
          <CardDescription>
            Save Report exports the current report as a plain text file. The report also lists reference updates and
            warns when an action is shared by multiple data-blocks.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Conflicts &amp; Missing Keys</CardTitle>
          <CardDescription>How to resolve the two common blockers.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            A conflict means the target name already exists on the same shape key data-block. Blender would normally
            append <span className="text-primary">.001</span>; this add-on refuses to do that. Rename or remove the
            existing target key, then run the rename again.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            A missing source means the ARKit key was not found. With Skip Missing Keys enabled, the remaining available
            keys are renamed. A rig without a Neutral key reports that single missing entry and still renames the other
            matching keys.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Animation &amp; Drivers</CardTitle>
          <CardDescription>Keeping the rig connected after the rename.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            With Update Animation &amp; Drivers enabled, the add-on rewrites shape key paths in the active action and in
            actions used by NLA strips. It supports both legacy actions and layered actions. Drivers attached to the
            shape key data-block are rewritten as well.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            If an action is shared by other data-blocks, the report warns about it. Object-level drivers that reference{" "}
            <code className="text-foreground">key_blocks[...]</code> outside the shape key data-block are not rewritten
            and should be checked manually.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Built-in Mapping</CardTitle>
          <CardDescription>
            52 ARKit pairs plus Neutral to Default. Targets are applied verbatim, including case.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ARKit source</TableHead>
                <TableHead>MetaHuman Live Link target</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mapping.map(([source, target]) => (
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
          <CardDescription>
            Several names look asymmetric on purpose and are not corrected: MouthClose and MouthPucker use the purse
            targets, BrowInnerUp maps to browlaterall, CheekPuff maps to mouthcheekblowl, and JawOpen keeps its
            mixed-case target. The eye In and Out targets also follow the supplied list.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Limitations</CardTitle>
          <CardDescription>Scope of the add-on.</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Only existing object shape keys are processed. The add-on does not create keys, edit mesh data, merge
            duplicates or change expressions. Pose bones and other rig controls are out of scope.
          </CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>
            The mapping is built in and is not edited from the panel. Every install uses the same reviewed list so
            results stay consistent across machines.
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
