import { Data } from "@/components/data";
import ProductCard from "@/components/product/product-card";
import ProductCatalog from "@/components/product/product-catelog";

export default function Home() {
  return (
    <main className="container min-h-dvh mx-auto flex items-center justify-center p-2 lg:p-3 xl:p-4">
      <ProductCatalog>
        {Data.map((item, index) => (
          <ProductCard
            key={index}
            productURL={item.productURL}
            imageURL={item.imageURL}
            title={item.title}
            price={item.price}
            info={item.info}
          />
        ))}
      </ProductCatalog>
    </main>
  );
}
