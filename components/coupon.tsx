import React from "react";
import { CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export function Coupon() {
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
        {/* <Badge variant={"secondary"}>
          <CardDescription>
            Add to Wishlist: <span>Spring Sale (May 21 - 26)</span>
          </CardDescription>
        </Badge> */}
      {/* <Badge variant={"secondary"}>
        <CardDescription>
          Coupon code: <span>christmas25</span> to get 25% off, valid until Dec
          31, 2024
        </CardDescription>
      </Badge> */}
      <Badge variant={"secondary"}>
        <CardDescription>
          Coupon code: <span>valentine14</span> to get 14% off, valid until Feb
          15, 2025
        </CardDescription>
      </Badge>
    </div>
  );
}

export const showCoupon = true;
