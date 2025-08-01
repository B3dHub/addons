import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Data } from "./data";
import Link from "next/link";
import Image from "next/image";

export default function OtherAddons({ active }: { active?: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Addons</CardTitle>
        <CardDescription>Other addons you might like.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-3 gap-4">
          {Data.map((item, index) => (
            <Link
              href={`https://blendermarket.com/products${item.productURL}`}
              target="_blank"
              key={index}
              aria-label={item.title}
            >
              <Image
                src={item.imageURL}
                alt=""
                width={250}
                height={150}
                className={`rounded-lg transition-all hover:scale-105 ${active ? "border-4 border-primary" : ""}`}
              />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
