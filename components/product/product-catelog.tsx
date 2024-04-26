import React from "react";

interface ProductCatalogProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  classname?: string;
}

export default function ProductCatalog({
  title,
  description,
  children,
  classname = "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-3 xl:gap-4 mt-4",
}: ProductCatalogProps) {
  return (
    <div className="flex flex-col">
      {title || description ? (
        <>
          {title && <h1>{title}</h1>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </>
      ) : null}
      <div className={classname}>{children}</div>
    </div>
  );
}
