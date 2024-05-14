import React from "react";
import { CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Coupon() {
  return (
    <Badge variant={"secondary"}>
      <CardDescription>
        Coupon code: <span>discount10</span> to get 10% off.
      </CardDescription>
    </Badge>
  );
}
