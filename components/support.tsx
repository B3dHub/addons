import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Support({ children }: { children?: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support</CardTitle>
        <CardDescription>
          Join our Discord server to stay updated.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <iframe
          className="w-full"
          src="https://discord.com/widget?id=959138815602229389&theme=dark"
          height="500"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          title="Discord iframe"
        ></iframe>
      </CardContent>
      {children}
      {/* <CardContent>
        <CardDescription>Support the future development.</CardDescription>
      </CardContent>
      <CardFooter className="space-x-4">
        <Link href="https://patreon.com/B3dHub" target="_blank">
          <Button variant={"secondary"}>Patreon</Button>
        </Link>
        <Link href="https://paypal.me/B3dHub" target="_blank">
          <Button variant={"secondary"}>Paypal</Button>
        </Link>
      </CardFooter> */}
    </Card>
  );
}
