import SingleProduct from "@/components/SingleProduct";

import getProduct from "@/lib/getProduct";
import { Params, Product } from "@/prisma/types";

export default async function Page({ params }: Params) {
  const productData: Promise<Product> = getProduct(params.id);
  const product = await Promise.all([productData]);
  return (
    <section className="container">
      <SingleProduct product={product.flat()[0]} />
    </section>
  );
}
