import React from "react";
import { CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Coupon() {
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <Badge variant={"secondary"}>
        <CardDescription>
          Coupon code: <span>discount10</span> to get 10% off.
        </CardDescription>
      </Badge>
      <Badge variant={"secondary"}>
        <CardDescription>
          Add to Wishlist: <span>Spring Sale (May, 21 - 26)</span>
        </CardDescription>
      </Badge>
    </div>
  );
}
