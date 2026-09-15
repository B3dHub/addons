import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
  title: "On-Screen Key - Blender Addon",
  description:
    "Show pressed keys and mouse buttons on screen as a fading stack of operator-style boxes with native Blender event icons.",
};

export default function OnScreenKeyPage() {
  return (
    <div className="flex flex-col justify-center mx-auto gap-5 max-w-[832px]">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            On-Screen Key is a Blender addon that displays your keystrokes and mouse input as a fading stack of
            operator-style boxes — each input a rounded widget with its native Blender event icons and text, exactly
            like the status bar. It draws directly inside the editor, so your inputs are always visible while recording,
            streaming, or teaching.
          </CardDescription>
        </CardContent>
        {showCoupon && <Coupon />}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>What On-Screen Key offers?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Native Event Icons</TableCell>
                <TableCell>
                  Keys render as Blender-style event icons with auto-fitting text; modifiers as Shift/Ctrl/Alt/OS
                  glyphs.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Platform-Correct Keys</TableCell>
                <TableCell>
                  Modifier glyphs match the platform — Cmd on macOS, Win on Windows — mirroring Blender&apos;s native
                  rendering.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">History Stack</TableCell>
                <TableCell>
                  The last few inputs each render as their own operator-style box, newest at the bottom, each fading out
                  over the key duration.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mouse Input</TableCell>
                <TableCell>
                  Clicks, drags, double-clicks and scroll wheels each show their dedicated icon; held buttons stay lit;
                  rapid scrolls in one direction group into a single entry.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Broad Input Coverage</TableCell>
                <TableCell>
                  Letters, digits, F1–F24, numpad, punctuation and media keys, extra mouse buttons, trackpad gestures
                  and NDOF devices — every event the status bar knows.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Follows the Active Editor</TableCell>
                <TableCell>The overlay tracks the editor under the mouse, so it always draws where you are working.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operator Names</TableCell>
                <TableCell>
                  Show the executed operator&apos;s label after the input, e.g. &quot;X Delete&quot; (toggleable).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Theme Aware</TableCell>
                <TableCell>
                  Box and text colors follow the theme&apos;s Tool widget colors, or use custom colors.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Every Editor</TableCell>
                <TableCell>
                  Draws in the 3D Viewport, Image Editor, Node Editor and Video Sequencer, with a toggle in each
                  editor&apos;s overlay panel.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Auto-Start</TableCell>
                <TableCell>
                  The toggle is remembered, so if it is left on the overlay starts automatically the next time Blender
                  launches.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Help &amp; Links</TableCell>
                <TableCell>
                  A Help subpanel exposes the changelog popup, documentation, bug reporting and store links.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>On-Screen Key vs Screencast Keys</CardTitle>
          <CardDescription>How does it compare to the classic Screencast Keys add-on?</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>On-Screen Key</TableHead>
                <TableHead>Screencast Keys</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Input display</TableCell>
                <TableCell>Native Blender event icons, matching the status bar</TableCell>
                <TableCell>Plain text event names</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">History</TableCell>
                <TableCell>Fading stack of operator-style boxes, newest at the bottom</TableCell>
                <TableCell>Event history list, last event, or repeat count</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mouse input</TableCell>
                <TableCell>
                  Dedicated native icons for click, drag, double-click and scroll; rapid scrolls group
                </TableCell>
                <TableCell>Mouse figures, event history, hold status, custom mouse images</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operator names</TableCell>
                <TableCell>Shown inline after the input, e.g. &quot;X Delete&quot;</TableCell>
                <TableCell>Separate &quot;Last Operator&quot; display (label and/or id name)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Colors</TableCell>
                <TableCell>Theme Tool-widget colors, or custom fills and text tint</TableCell>
                <TableCell>Custom text, shadow and background colors</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Editor coverage</TableCell>
                <TableCell>
                  3D Viewport, Image Editor, Node Editor, Video Sequencer — toggled from each editor&apos;s overlay
                  panel
                </TableCell>
                <TableCell>Draws to a chosen Area, Region, Window or the mouse cursor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Toggle</TableCell>
                <TableCell>Configurable shortcut (default Shift+Alt+C) plus a persistent auto-start toggle</TableCell>
                <TableCell>Shift+Alt+C, optional enable-on-startup</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardContent>
          <CardDescription>
            In short: On-Screen Key trades Screencast Keys&apos; older-Blender support and extra mouse-position options
            for native, theme-matched icon rendering and a fading operator-box history that covers every major editor.
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Every option is in the add-on preferences and the sidebar view panel.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Setting</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Align</TableCell>
                <TableCell>Left, Center or Right edge of the editor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Scale</TableCell>
                <TableCell>Sizes the icons, box and margins (1.0–2.0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Opacity</TableCell>
                <TableCell>Opacity of the box, icons and text (0.1–1.0)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Duration</TableCell>
                <TableCell>Seconds an input stays on screen (1–10)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">History</TableCell>
                <TableCell>Number of recent inputs kept in the stack (1–10)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Operator Names</TableCell>
                <TableCell>Show the executed operator after the input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reset Overlay</TableCell>
                <TableCell>Clear the overlay when the active editor changes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Shortcut</TableCell>
                <TableCell>Keyboard shortcut to toggle the overlay (empty for none)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Use Theme Colors</TableCell>
                <TableCell>Fill boxes from the theme&apos;s Tool widget colors</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Inner / Selected / Text</TableCell>
                <TableCell>Custom box fills and text tint when theme colors are off</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Demo</CardTitle>
          <CardDescription>
            Key presses stacking up and fading out as operator-style boxes, with native Blender event icons and text.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src="/addons/images/on-screen-key/demo.gif"
            alt="On-Screen Key Demo"
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
            href="https://discord.com/channels/959138815602229389/1549419855210479616"
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
