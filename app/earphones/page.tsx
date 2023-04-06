import PageHero from "@/components/PageHero";
import ProductItem from "@/components/ProductItem";
import { Product } from "@/prisma/types";

export default async function page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/api/categories/3`
  );
  const data = await res.json();

  console.log(data);
  const products = data[0].Products;
  return (
    <>
      <PageHero title={data[0].name} />
      <section className="container">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}
