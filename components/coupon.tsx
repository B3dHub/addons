import React from "react";
import { CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export function Coupon() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  const day: number = today.getDate();
  const month: number = today.getMonth();
  const year: number = today.getFullYear();

  const coupons = [
    {
      month: 1,
      startDay: 7,
      endDay: 15,
      code: "valentine14",
      discount: 14,
    },
    {
      month: 11,
      startDay: 20,
      endDay: 31,
      code: "christmas25",
      discount: 25,
    },
    {
      month: -1, // represents any month except February
      startDay: 1,
      endDay: 15,
      code: "discount10",
      discount: 10,
    },
  ];

  const activeCoupon = coupons.find(
    (coupon) =>
      (coupon.month === month || (coupon.month === -1 && month !== 1)) &&
      day >= coupon.startDay &&
      day <= coupon.endDay
  );

  if (!activeCoupon) return null;

  return (
    <CardContent>
      <div className="flex gap-2 flex-col sm:flex-row">
        <Badge variant="secondary">
          <CardDescription>
            Coupon code: <span>{activeCoupon.code}</span> to get{" "}
            {activeCoupon.discount}% off, valid until{" "}
            {monthNames[activeCoupon.month === -1 ? month : activeCoupon.month]}{" "}
            {activeCoupon.endDay}, {year}
          </CardDescription>
        </Badge>
      </div>
    </CardContent>
  );
}

export const showCoupon = true;
