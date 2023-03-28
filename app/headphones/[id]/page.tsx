"use client";

import useGetHeadphone from "@/hooks/useGetHeadphone";

import SingleProduct from "@/components/SingeProduct";
export default function Page({ params }: any) {
  const headphoneQuery = useGetHeadphone(params.id);

  return (
    <section className="container">
      {headphoneQuery.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="border my-8 p-8">
          {headphoneQuery.data?.data.map((product: any) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
