import SingleProduct from "@/components/SingeProduct";

import getProduct from "@/lib/getProduct";
import { Params, Product } from "@/prisma/types";

export default async function Page({ params }: Params) {
  const productData: Promise<Product> = getProduct(params.id);
  const product = await Promise.all([productData]);
  return (
    <section className="container">
      <pre>{JSON.stringify(product, null, 2)}</pre>
      {/* <SingleProduct product={product} /> */}
    </section>
  );
}
