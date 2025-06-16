import React from "react";
import { CardContent, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

export function Coupon() {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get the current date in UTC
  const now = new Date();
  const utcDay = now.getUTCDate();
  const utcMonth = now.getUTCMonth();
  const utcYear = now.getUTCFullYear();

  // Create a proper CDT date (accounting for possible production environment differences)
  // CDT is UTC-5 hours, CST is UTC-6 hours
  // This calculates whether we are in DST (Daylight Saving Time)
  const stdTimezoneOffset = () => {
    const jan = new Date(now.getFullYear(), 0, 1);
    const jul = new Date(now.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  };

  const isDST = () => {
    return now.getTimezoneOffset() < stdTimezoneOffset();
  };

  // Apply the right offset (CDT = -5, CST = -6)
  const hourOffset = isDST() ? 5 : 6;
  const currentCDT = new Date(now.getTime() + now.getTimezoneOffset() * 60000 - hourOffset * 3600000);

  const day = currentCDT.getDate();
  const month = currentCDT.getMonth();
  const year = currentCDT.getFullYear();

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

  const activeCoupon = coupons.find((coupon) => {
    // For target month: use current month for generic coupons, or the specified month
    const targetMonth = coupon.month === -1 ? month : coupon.month;

    // Create start date for comparison (at 00:00:00 in CDT)
    const startDate = new Date(Date.UTC(year, targetMonth, coupon.startDay));
    startDate.setHours(0, 0, 0, 0);

    // Create end date for comparison (at 23:59:59 in CDT)
    const endDate = new Date(Date.UTC(year, targetMonth, coupon.endDay));
    endDate.setHours(23, 59, 59, 999);

    // Handle the special case for "any month except February"
    if (coupon.month === -1 && month === 1) {
      return false; // Skip if current month is February and coupon is for "any month except February"
    }

    // Check if current date is within the valid range
    return currentCDT >= startDate && currentCDT <= endDate;
  });

  if (!activeCoupon) return null;

  return (
    <CardContent>
      <div className="flex gap-2 flex-col sm:flex-row">
        <Badge variant="secondary">
          <CardDescription>
            Coupon code: <span>{activeCoupon.code}</span> to get {activeCoupon.discount}% off, valid until{" "}
            {monthNames[activeCoupon.month === -1 ? month : activeCoupon.month]} {activeCoupon.endDay}, {year}
          </CardDescription>
        </Badge>
      </div>
    </CardContent>
  );
}

export const showCoupon = false;
