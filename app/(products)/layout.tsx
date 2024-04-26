import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Hello</h1>
      {children}
    </>
  );
}
