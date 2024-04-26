import { Data } from "@/components/data";
import ProductCard from "@/components/product/product-card";
import ProductCatalog from "@/components/product/product-catelog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
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
