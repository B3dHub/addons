import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Data } from "./data";
import Link from "next/link";

export default function OtherAddons({ active }: { active?: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Addons</CardTitle>
        <CardDescription>
          Here are some other addons you might like.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {Data.map((item, index) => (
            <Link
              href={`https://blendermarket.com/products${item.productURL}`}
              target="_parent"
              key={index}
            >
              <img
                className={`rounded-lg ${
                  active ? "border-4 border-primary" : ""
                }`}
                src={item.imageURL}
                alt=""
              />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
