import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    </Card>
  );
}
