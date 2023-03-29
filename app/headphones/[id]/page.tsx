import SingleProduct from "@/components/SingeProduct";
import useGetHeadphone from "@/hooks/useGetHeadphone";
import getProduct from "@/lib/getProduct";
import { Product } from "@/prisma/types";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  const productData: Promise<Product> = getProduct(params.id);
  const product = await Promise.all([productData]);

  console.log(product);
  return (
    <section className="container">
      <h1>{JSON.stringify(product)}</h1>
      <h1>{JSON.stringify(typeof params.id)}</h1>
    </section>
  );
}
