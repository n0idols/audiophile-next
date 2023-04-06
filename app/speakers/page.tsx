import PageHero from "@/components/PageHero";
import ProductItem from "@/components/ProductItem";
import { Product } from "@/prisma/types";

export default async function page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/categories/2`
  );
  const data = await res.json();
  const products = data[0].Products;
  return (
    <>
      <PageHero title={data[0].name} />
      <section className="container">
        {products.map((product: Product, index: any) => (
          <ProductItem key={index} product={product} index={index} />
        ))}
      </section>
    </>
  );
}
